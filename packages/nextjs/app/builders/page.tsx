"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { Address as AddressType } from "viem";
import { usePublicClient } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

// Helper component to display individual builder details with check-in date
type BuilderDetailsRowProps = {
  builderAddress: AddressType;
  checkInContractAddress: AddressType;
  blockNumber: bigint;
  existingProfiles: string[];
};

/**
 * Displays a single builder's information including address, contract, and graduation status
 */
const BuilderDetailsRow = ({
  builderAddress,
  checkInContractAddress,
  blockNumber,
  existingProfiles,
}: BuilderDetailsRowProps) => {
  const publicClient = usePublicClient();
  const [checkInDate, setCheckInDate] = useState<string>("Fetching date...");

  const { data: graduatedTokenId } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "graduatedTokenId",
    args: [builderAddress],
  });

  const hasGraduated = useMemo(() => graduatedTokenId && Number(graduatedTokenId) > 0, [graduatedTokenId]);

  const hasProfile = useMemo(() => {
    return existingProfiles.includes(builderAddress);
  }, [builderAddress, existingProfiles]);

  useEffect(() => {
    const fetchBlockTimestamp = async () => {
      if (!publicClient || blockNumber === undefined) {
        setCheckInDate("N/A");
        return;
      }
      try {
        const block = await publicClient.getBlock({ blockNumber });
        const date = new Date(Number(block.timestamp) * 1000);
        setCheckInDate(date.toLocaleDateString());
      } catch (error) {
        console.error(`Error fetching block timestamp for block ${blockNumber}:`, error);
        setCheckInDate("Error");
      }
    };
    fetchBlockTimestamp();
  }, [publicClient, blockNumber]);

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-base-300/50 dark:border-base-300/30">
      <div className="card-body p-5 md:p-6">
        {/* Top section: Builder EOA and Check-in Date */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div className="mb-2 sm:mb-0">
            <Address address={builderAddress} size="lg" />
          </div>
          <div className="text-xs text-base-content/70 dark:text-base-content/60 mt-1 sm:mt-0">
            Checked in: {checkInDate}
          </div>
        </div>

        {/* Divider (for visual separation) */}
        <div className="divider my-1"></div>

        {/* Details Section */}
        <div className="space-y-2 mb-4">
          <div className="text-sm">
            <span className="font-medium text-base-content/80 dark:text-base-content/70">Contract: </span>
            <Address address={checkInContractAddress} size="sm" />
          </div>
          <div className="text-sm flex items-center gap-2">
            <span className="font-medium text-base-content/80 dark:text-base-content/70">Status: </span>
            {hasGraduated ? (
              <span className="badge badge-sm badge-success text-success-content font-medium">
                Graduated (ID: {graduatedTokenId?.toString()})
              </span>
            ) : (
              <span className="badge badge-sm badge-neutral text-neutral-content font-medium">Not Graduated</span>
            )}
          </div>
        </div>

        {hasProfile && (
          <div className="card-actions justify-start pt-2">
            <Link
              href={`/builders/${builderAddress}`}
              passHref
              className="btn btn-primary btn-sm dark:btn-outline dark:border-primary-content dark:text-primary-content dark:hover:bg-primary-content dark:hover:text-primary dark:hover:border-primary-content"
            >
              View Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const BuildersList: NextPage = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const {
    data: checkedInEvents,
    isLoading: isLoadingEvents,
    error: errorEvents,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 334314026n, // DEPLOY_BLOCK
    watch: true,
  });

  const buildersWithFirstCheckInBlock = useMemo(() => {
    if (!checkedInEvents || checkedInEvents.length === 0) return [];

    // Sort events chronologically (earliest block first) to correctly identify each builder's FIRST check-in,
    // since a builder may have checked in multiple times with different contracts.
    // Handle potential null blockNumbers, though unlikely for valid events.
    const sortedEvents = [...checkedInEvents].sort((a, b) => {
      const blockA = a.blockNumber ?? 0n; // Default to 0 if null, for robust sorting
      const blockB = b.blockNumber ?? 0n; // Default to 0 if null, for robust sorting
      if (blockA < blockB) return -1;
      if (blockA > blockB) return 1;
      return 0;
    });

    const firstCheckIns = new Map<AddressType, { blockNumber: bigint; checkInContract: AddressType }>();

    for (const event of sortedEvents) {
      // Skip events with undefined args
      if (!event.args) continue;

      const builderAddress = event.args.builder as AddressType | undefined;
      const contractAddress = event.args.checkInContract as AddressType | undefined;
      const blockNumber = event.blockNumber;

      // Ensure all necessary data is present and the builder hasn't been added yet.
      if (builderAddress && contractAddress && blockNumber !== null && !firstCheckIns.has(builderAddress)) {
        firstCheckIns.set(builderAddress, { blockNumber, checkInContract: contractAddress });
      }
    }

    return Array.from(firstCheckIns.entries()).map(([address, data]) => ({
      address,
      blockNumber: data.blockNumber,
      checkInContract: data.checkInContract,
    }));
  }, [checkedInEvents]);

  const [profilesList, setProfilesList] = useState<string[]>([]);
  const [isLoadingProfiles, setIsLoadingProfiles] = useState(true);
  const [profilesError, setProfilesError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch builder profiles from the API route
    const fetchProfiles = async () => {
      try {
        setIsLoadingProfiles(true);
        setProfilesError(null);
        const response = await fetch("/api/builders/profiles");

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        setProfilesList(data.profiles || []);
      } catch (error) {
        console.error("Failed to fetch existing profiles:", error);
        setProfilesError("Could not load profile data. Profile links may be unavailable.");
      } finally {
        setIsLoadingProfiles(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="container mx-auto mt-4 px-4 md:px-8 py-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2 dark:text-primary-content">Batch 16 Builders</h1>
        <p className="text-xl text-base-content/80 dark:text-base-content/70">Checked-in Members</p>
        <p className="text-lg text-base-content/70 dark:text-base-content/60 mt-2">
          Total Checked In: {checkedInCounter === undefined ? "..." : (checkedInCounter?.toString() ?? "0")}
        </p>

        {profilesError && (
          <div className="mt-2 text-sm text-warning">
            <span>{profilesError}</span>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto">
        {(isLoadingEvents || isLoadingProfiles) && (
          <div className="text-center py-10">
            <span className="loading loading-lg loading-spinner text-primary"></span>
            <p className="mt-4 text-lg text-base-content/70 dark:text-base-content/60">Loading builders data...</p>
          </div>
        )}
        {errorEvents && (
          <div role="alert" className="alert alert-error shadow-md">
            <span className="text-error-content">Error loading events. (Message: {errorEvents.message})</span>
          </div>
        )}
        {!isLoadingEvents && !isLoadingProfiles && !errorEvents && (
          <div className="grid grid-cols-1 gap-6">
            {buildersWithFirstCheckInBlock.length === 0 ? (
              <div className="card bg-base-100 shadow-md border border-base-300/50 dark:border-base-300/30">
                <div className="card-body items-center text-center p-6 md:p-8">
                  <p className="text-lg text-base-content/70 dark:text-base-content/60 py-8">
                    No builders have checked in yet.
                  </p>
                </div>
              </div>
            ) : (
              buildersWithFirstCheckInBlock.map(({ address, blockNumber, checkInContract }) => (
                <BuilderDetailsRow
                  key={address}
                  builderAddress={address}
                  checkInContractAddress={checkInContract}
                  blockNumber={blockNumber}
                  existingProfiles={profilesList}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildersList;
