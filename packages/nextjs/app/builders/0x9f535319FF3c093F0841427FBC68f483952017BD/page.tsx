import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const KodedProfile: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Image and info*/}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="relative h-64 w-64 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
              <Image
                src="https://i.imgur.com/0JJDHAd.jpg"
                alt="Profile picture of Akorede Abidoye"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold mt-4">Akorede Abidoye</h1>
            <div className="text-gray-600 dark:text-gray-400">0x9f53...17BD</div>
            <div className="text-gray-600 dark:text-gray-400">he/him</div>
            <div className="mt-2">cool headed</div>

            <div className="flex items-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 3H21L14.875 10.068 22.295 21h-6.797l-4.228-5.973L6.2 21H3l6.625-7.37L1.705 3h6.797l3.867 5.465L18.244 3zm-1.113 16h1.522L7.867 5H6.33l10.8 14z" />
              </svg>
              <Link
                href="https://twitter.com/akoredeszn_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                @akoredeszn_
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.111.82-.261.82-.58 0-.287-.011-1.046-.017-2.052-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.37.814 1.096.814 2.21 0 1.595-.015 2.88-.015 3.272 0 .322.217.696.825.578A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <Link
                href="https://github.com/Koded247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                @koded247
              </Link>
            </div>
          </div>

          {/*Introductions*/}
          <div className="w-full md:w-2/3 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-md dark:shadow-none">
            <h2 className="text-2xl font-semibold mb-4">Hi there 👋 I am Korede Abidoye</h2>
            <h3 className="text-xl font-semibold">A Blockchain Developer</h3>

            <p className="mb-6 text-[12px]">
              Started as a frontend engineer, building beautiful and intuitive user interfaces with (HTML, CSS,
              TailwindCSS, JavaScript, jQuery, TypeScript, ReactJs).
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <h3 className="text-xl font-semibold">About Me</h3>
              </div>

              <ul className="list-disc list-inside space-y-2 ml-6 text-[13px] text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Location: Lagos, Nigeria</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🧠</span>
                  <span>Interests: Coding, History, Football, Hiking.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <span>
                    Email:{" "}
                    <Link
                      href="mailto:korexcoded@gmail.com"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      korexcoded@gmail.com
                    </Link>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>I am open for collaborations and jobs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>💭</span>
                  <span>I am currently learning cairo and Rust language</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🎵</span>
                  <span>A lover of Music</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">Skills</h3>
              <ul className="list-disc list-inside space-y-2 ml-6 text-gray-700 dark:text-gray-300">
                <li>Programming Languages: JavaScript, Solidity</li>
                <li>Tools & Frameworks: React, TailwindCSS</li>
              </ul>
            </div>

            {/* Wallet Address section */}
            <div className="mt-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2">Wallet Address</h3>
              <Address address="0x9f535319FF3c093F0841427FBC68f483952017BD" />
            </div>

            {/* Web3 Links section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Web3 Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://etherscan.io/address/0x9f535319FF3c093F0841427FBC68f483952017BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-900 dark:hover:bg-blue-800"
                >
                  <span>Etherscan</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://app.ens.domains/0x9f535319FF3c093F0841427FBC68f483952017BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-900 dark:hover:bg-purple-800"
                >
                  <span>ENS</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KodedProfile;
