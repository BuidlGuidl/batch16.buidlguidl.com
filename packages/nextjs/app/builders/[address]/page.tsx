"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface BuilderProfile {
  address: string;
  githubUsername: string;
  hasCheckedIn: boolean;
  hasGraduated: boolean;
  isAllowed: boolean;
  canGraduate: boolean;
}

export default function BuilderPage({ params }: { params: { address: string } }) {
  const [profile, setProfile] = useState<BuilderProfile>({
    address: params.address,
    githubUsername: "big14way", // This should come from your profile contract or API
    hasCheckedIn: false,
    hasGraduated: false,
    isAllowed: false,
    canGraduate: false,
  });

  // Get builder's contract data
  const { data: isAllowed } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [profile.address],
  });

  const { data: contractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [profile.address],
  });

  const { data: graduatedTokenId } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "graduatedTokenId",
    args: [profile.address],
  });

  const { data: canGraduate } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "graduationAllowList",
    args: [profile.address],
  });

  useEffect(() => {
    setProfile(prev => ({
      ...prev,
      isAllowed: isAllowed ?? false,
      hasCheckedIn: contractAddress !== "0x0000000000000000000000000000000000000000",
      hasGraduated: graduatedTokenId?.toString() !== "0",
      canGraduate: canGraduate ?? false,
    }));
  }, [isAllowed, contractAddress, graduatedTokenId, canGraduate]);

  return (
    <div className="min-h-screen py-8 px-4 lg:px-8">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-primary">
          <Image
            src={`https://avatars.githubusercontent.com/${profile.githubUsername}`}
            alt="Builder Avatar"
            className="object-cover"
            fill
            sizes="128px"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">{profile.githubUsername}</h1>
          <Address address={profile.address} />
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {profile.isAllowed && <span className="badge badge-lg badge-success">Allowed</span>}
          {profile.hasCheckedIn && <span className="badge badge-lg badge-info">Checked In</span>}
          {profile.canGraduate && <span className="badge badge-lg badge-warning">Can Graduate</span>}
          {profile.hasGraduated && <span className="badge badge-lg badge-primary">Graduated</span>}
        </div>

        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <h2 className="text-2xl font-bold">Builder Details</h2>
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Contract Status</h3>
              <p>Contract Address: {contractAddress}</p>
              <p>Graduation Token ID: {graduatedTokenId?.toString() || "Not graduated"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
