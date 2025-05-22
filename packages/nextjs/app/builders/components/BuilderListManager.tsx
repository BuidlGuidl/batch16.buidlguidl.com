"use client";

import { useEffect, useMemo, useState } from "react";
import { BuilderDetailsRow } from "./BuilderDetailsRow";
import { Address as AddressType } from "viem";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export const BuilderListManager = () => {
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
    if (!checkedInEvents || !Array.isArray(checkedInEvents) || checkedInEvents.length === 0) return [];

    try {
      // Filter out any undefined events
      const validEvents = checkedInEvents.filter(event => !!event);

      // Sort events chronologically (earliest block first)
      const sortedEvents = [...validEvents].sort((a, b) => {
        if (!a || !b || a.blockNumber === undefined || b.blockNumber === undefined) return 0;
        const blockA = a.blockNumber;
        const blockB = b.blockNumber;
        return blockA < blockB ? -1 : blockA > blockB ? 1 : 0;
      });

      const firstCheckIns = new Map<AddressType, { blockNumber: bigint; checkInContract: AddressType }>();

      for (const event of sortedEvents) {
        if (!event || !event.args) continue;

        const builderAddress = event.args.builder as AddressType | undefined;
        const contractAddress = event.args.checkInContract as AddressType | undefined;
        const blockNumber = event.blockNumber;

        if (
          builderAddress &&
          contractAddress &&
          blockNumber !== undefined &&
          blockNumber !== null &&
          !firstCheckIns.has(builderAddress)
        ) {
          firstCheckIns.set(builderAddress, {
            blockNumber,
            checkInContract: contractAddress,
          });
        }
      }

      return Array.from(firstCheckIns.entries()).map(([address, data]) => ({
        address,
        blockNumber: data.blockNumber,
        checkInContract: data.checkInContract,
      }));
    } catch (error) {
      console.error("Error processing check-in events:", error);
      return [];
    }
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

  if (isLoadingEvents || isLoadingProfiles) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-lg loading-spinner text-primary"></span>
        <p className="mt-4 text-lg text-base-content/70 dark:text-base-content/60">Loading builders data...</p>
      </div>
    );
  }

  if (errorEvents) {
    return (
      <div role="alert" className="alert alert-error shadow-md">
        <span className="text-error-content">Error loading events. (Message: {errorEvents.message})</span>
      </div>
    );
  }

  if (profilesError) {
    return (
      <div className="mt-2 text-sm text-warning">
        <span>{profilesError}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {buildersWithFirstCheckInBlock.length === 0 ? (
        <div className="card bg-base-100 shadow-md border border-base-300/50 dark:border-base-300/30 md:col-span-2">
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
  );
};
