"use client";

import { useEffect, useState } from "react";
import { Address, zeroAddress } from "viem";
import { useAccount, useReadContract } from "wagmi";
import { UserGroupIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import externalContracts from "~~/contracts/externalContracts";

interface BatchStatusIndicatorsProps {
  address?: Address;
}

export const BatchStatusIndicators = ({ address }: BatchStatusIndicatorsProps) => {
  const { address: connectedAddress } = useAccount();
  const userAddress = address || connectedAddress;
  
  const [isInBatch, setIsInBatch] = useState<boolean | null>(null);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean | null>(null);
  
  // Get contract details from externalContracts
  const batchRegistryContract = externalContracts[42161]?.BatchRegistry;

  // Check if address is in allowList (batch member)
  const { data: allowListStatus, isLoading: isLoadingAllowList } = useReadContract(
    userAddress && batchRegistryContract ? {
      address: batchRegistryContract.address,
      abi: batchRegistryContract.abi,
      functionName: "allowList",
      args: [userAddress],
    } : undefined
  );

  // Check if address has checked in 
  const { data: contractAddress, isLoading: isLoadingContractAddress } = useReadContract(
    userAddress && batchRegistryContract ? {
      address: batchRegistryContract.address,
      abi: batchRegistryContract.abi,
      functionName: "yourContractAddress",
      args: [userAddress],
    } : undefined
  );



  useEffect(() => {
    if (allowListStatus !== undefined) {
      setIsInBatch(!!allowListStatus);
    }
    
    if (contractAddress !== undefined) {
      setIsCheckedIn(contractAddress !== zeroAddress);
    }
  }, [allowListStatus, contractAddress]);

  if (!userAddress) return null;

  const isLoading = isLoadingAllowList || isLoadingContractAddress;

  return (
    <div className="flex items-center space-x-2 mx-1">
      {isLoading ? (
        <div className="loading loading-spinner loading-xs"></div>
      ) : (
        <>
          {/* Batch Membership Indicator */}
          <div className={`tooltip tooltip-bottom ${!isInBatch ? "tooltip-error" : ""}`} data-tip={isInBatch ? "Batch Member" : "Not a Batch Member"}>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full ${isInBatch ? "bg-primary/20" : "bg-error/20"}`}>
              <UserGroupIcon 
                className={`h-5 w-5 ${isInBatch ? "text-primary font-bold" : "text-error"}`} 
              />
            </div>
          </div>
          
          {/* Check-in Status Indicator */}
          <div className={`tooltip tooltip-bottom ${!isCheckedIn ? "tooltip-error" : ""}`} data-tip={isCheckedIn ? "Checked In" : "Not Checked In"}>
            <div className={`flex items-center justify-center w-6 h-6 rounded-full ${isCheckedIn ? "bg-success/20" : "bg-error/20"}`}>
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
