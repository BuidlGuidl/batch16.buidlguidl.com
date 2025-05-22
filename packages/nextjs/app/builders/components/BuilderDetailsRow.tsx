"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Address as AddressType } from "viem";
import { usePublicClient } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type BuilderDetailsRowProps = {
  builderAddress: AddressType;
  checkInContractAddress: AddressType;
  blockNumber: bigint;
  existingProfiles: string[];
};

/**
 * Displays a single builder's information including address, contract, and graduation status
 */
export const BuilderDetailsRow = ({
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
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-base-300/50 dark:border-base-300/30 h-full flex flex-col">
      <div className="card-body p-5 md:p-6 flex flex-col flex-grow">
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
        <div className="space-y-2 mb-4 flex-grow">
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
          <div className="card-actions justify-start pt-2 mt-auto">
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
