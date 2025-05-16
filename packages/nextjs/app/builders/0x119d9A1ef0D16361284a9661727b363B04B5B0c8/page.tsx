import Image from "next/image";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "./icons";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

// Define skills in arrays for easier management
const blockchainSkills = ["Solidity", "Foundry", "Hardhat", "Ethers"];
const frontendSkills = ["React", "TypeScript", "NextJS", "TailwindCSS"];

// Define social links mapping
const socialLinks = [
  {
    href: "https://github.com/dmystical-coder",
    label: "GitHub Profile",
    icon: <GitHubIcon />,
  },
  {
    href: "https://twitter.com/dmystical_coder",
    label: "Twitter Profile",
    icon: <TwitterIcon />,
  },
  {
    href: "https://linkedin.com/in/abdulsalam-baruwa",
    label: "LinkedIn Profile",
    icon: <LinkedInIcon />,
  },
];

// Ethereum address
const myAddress = "0x119d9A1ef0D16361284a9661727b363B04B5B0c8";

const DmysticalCoderProfile: NextPage = () => {
  return (
    <>
      {/* Main background - pure white in light mode, dark gray in dark mode */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono pt-4 pb-8 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          {/* Profile Card - White with subtle shadow in light mode, dark in dark mode */}
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 mb-8 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            {/* Title bar - Vibrant blue in light mode, darker blue in dark mode */}
            <div className="bg-blue-500 dark:bg-blue-800 text-white p-4 uppercase font-bold transition-colors duration-300">
              <h1 className="text-2xl font-bold tracking-wider">BLOCKCHAIN DEVELOPER</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Profile image in the first column */}
              <div className="flex justify-center flex-col items-center">
                <div className="relative mb-4">
                  <div className="relative aspect-square w-48 rounded-lg overflow-hidden shadow-md border-2 border-blue-300 dark:border-blue-600">
                    <Image
                      src="https://avatars.githubusercontent.com/u/63591055?v=4"
                      alt="Profile image"
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                </div>

                {/* Experience button moved beneath the profile image */}
                <div className="relative mt-2">
                  <div className="relative rounded-full px-8 py-3 inline-block bg-white dark:bg-gray-800 shadow-md border-2 border-indigo-300 dark:border-indigo-600">
                    <div className="text-md text-center text-gray-700 dark:text-gray-300">Experience</div>
                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 text-center">+1 YEARS</div>
                  </div>
                </div>
              </div>

              {/* Bio content in the second and third columns */}
              <div className="col-span-2">
                <h2 className="text-4xl font-bold mb-4 uppercase text-blue-600 dark:text-blue-400">Dmystical-Coder</h2>

                <div className="mb-6">
                  <p className="mb-4 text-lg text-gray-800 dark:text-gray-200">
                    Hey folks, I&apos;m a passionate blockchain developer who loves to learn, grow and create awesome
                    dApps. Yes I do create!! :)
                  </p>

                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    A passionate blockchain developer with a deep fascination for decentralized technologies. I
                    specialize in creating intuitive dApps that bridge the gap between complex blockchain architecture
                    and seamless user experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="address-container rounded-lg p-4 bg-blue-50 dark:bg-gray-700 mb-6 text-sm break-all shadow-sm border border-blue-200 dark:border-blue-700">
                    <div className="font-bold uppercase mb-1 text-blue-700 dark:text-blue-300">ETH Address:</div>
                    <Address address={myAddress} format="long" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills grid - White background in light mode */}
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-500 dark:bg-blue-800 text-white p-4">
              <h2 className="text-xl font-bold uppercase tracking-wider">SKILLS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {/* Left column - Blockchain Skills */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 uppercase text-blue-600 dark:text-blue-400">Blockchain</h3>

                <ul className="space-y-3">
                  {blockchainSkills.map(skill => (
                    <li
                      key={skill}
                      className="rounded-md p-3 bg-white dark:bg-gray-700 shadow-sm border border-blue-200 dark:border-blue-600"
                    >
                      <span className="font-bold text-blue-600 dark:text-blue-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column - Frontend Skills */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 uppercase text-blue-600 dark:text-blue-400">Frontend</h3>

                <ul className="space-y-3">
                  {frontendSkills.map(skill => (
                    <li
                      key={skill}
                      className="rounded-md p-3 bg-white dark:bg-gray-700 shadow-sm border border-blue-200 dark:border-blue-600"
                    >
                      <span className="font-bold text-blue-600 dark:text-blue-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer with social links */}
          <div className="rounded-lg overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 uppercase font-bold text-blue-600 dark:text-blue-400">
              SOCIAL LINKS:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              <div className="p-4 flex justify-center md:justify-start gap-4">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white hover:bg-blue-500 text-gray-700 hover:text-white focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-600 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <div className="p-4 flex flex-col md:flex-row items-center justify-end gap-4">
                <div className="flex items-center gap-2">
                  <span className="uppercase font-bold text-gray-800 dark:text-gray-300">Nigeria</span>
                  <span className="text-xl font-bold text-gray-400 dark:text-gray-500">|</span>
                </div>
                <div className="flex items-center">
                  <span className="uppercase font-bold text-2xl">🇳🇬</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer message */}
          <div className="text-center my-8">
            <p className="inline-block px-6 py-3 bg-white dark:bg-gray-800 font-bold text-blue-600 dark:text-blue-300 rounded-full shadow-sm border border-blue-200 dark:border-blue-700">
              Built with Scaffold-ETH 2 • Batch 16 • 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DmysticalCoderProfile;
