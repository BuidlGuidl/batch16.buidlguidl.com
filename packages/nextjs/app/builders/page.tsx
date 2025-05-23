"use client";

import { BuilderListManager } from "./components/BuilderListManager";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const BuildersList = () => {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <div className="container mx-auto mt-4 px-4 md:px-8 py-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2 dark:text-primary-content">Batch 16 Builders</h1>
        <p className="text-xl text-base-content/80 dark:text-base-content/70">Checked-in Members</p>
        <p className="text-lg text-base-content/70 dark:text-base-content/60 mt-2">
          Total Checked In: {checkedInCounter === undefined ? "..." : (checkedInCounter?.toString() ?? "0")}
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <BuilderListManager />
      </div>
    </div>
  );
};

export default BuildersList;
