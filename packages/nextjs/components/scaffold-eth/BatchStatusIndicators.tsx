"use client";

import { Address, zeroAddress } from "viem";
import { useAccount } from "wagmi";
import { CheckCircleIcon, UserGroupIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const BatchStatusIndicators = () => {
  const { address: userAddress } = useAccount();

  // Check if address is in allowList (batch member)
  const { data: allowListStatus, isLoading: isLoadingAllowList } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [userAddress ?? zeroAddress],
    chainId: 42161, 
  });

  // Check if address has checked in
  const { data: contractAddress, isLoading: isLoadingContractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [userAddress ?? zeroAddress],
    chainId: 42161, 
  });
  
  const isInBatch = allowListStatus !== undefined ? !!allowListStatus : null;
  const isCheckedIn = contractAddress !== undefined ? contractAddress !== zeroAddress : null;

  if (!userAddress) return null;

  const isLoading = isLoadingAllowList || isLoadingContractAddress;

  return (
    <div className="flex items-center space-x-2 mx-1">
      {isLoading ? (
        <div className="loading loading-spinner loading-xs"></div>
      ) : (
        <>
          {/* Batch Membership Indicator */}
          <div
            className={`tooltip tooltip-bottom ${!isInBatch ? "tooltip-error" : ""}`}
            data-tip={isInBatch ? "Batch Member" : "Not a Batch Member"}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full ${isInBatch ? "bg-primary/20" : "bg-error/20"}`}
            >
              <UserGroupIcon className={`h-5 w-5 ${isInBatch ? "text-primary font-bold" : "text-error"}`} />
            </div>
          </div>

          {/* Check-in Status Indicator */}
          <div
            className={`tooltip tooltip-bottom ${!isCheckedIn ? "tooltip-error" : ""}`}
            data-tip={isCheckedIn ? "Checked In" : "Not Checked In"}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full ${isCheckedIn ? "bg-success/20" : "bg-error/20"}`}
            >
              {isCheckedIn ? (
                <CheckCircleIcon className="h-4 w-4 text-success" />
              ) : (
                <XCircleIcon className="h-4 w-4 text-error" />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
