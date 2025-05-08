"use client";

import { useEffect, useState } from "react";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

interface Builder {
  address: string;
}

export default function BuildersPage() {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get all CheckedIn events
  const { data: checkedInEvents } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 0n,
  });

  useEffect(() => {
    if (checkedInEvents) {
      console.log("CheckedIn Events:", checkedInEvents);
      // Extract unique builder addresses from events
      const uniqueBuilders = [...new Set(checkedInEvents.map(event => event.args.builder))].filter(
        (address): address is string => typeof address === "string",
      );

      console.log("Unique Builders:", uniqueBuilders);

      // Create builder objects
      const buildersList = uniqueBuilders.map(address => ({
        address,
      }));

      setBuilders(buildersList);
      setIsLoading(false);
    }
  }, [checkedInEvents]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-8 px-4 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Batch Builders</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Builder</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {builders.map(builder => (
              <tr key={builder.address} className="hover">
                <td>
                  <Address address={builder.address} />
                </td>
                <td>
                  <a
                    href={`/builders/${builder.address}`}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
