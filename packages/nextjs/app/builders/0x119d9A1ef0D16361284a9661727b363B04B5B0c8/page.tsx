"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";

export default function BuilderProfile() {
  const [mounted, setMounted] = useState(false);
  const myAddress = "0x119d9A1ef0D16361284a9661727b363B04B5B0c8";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define skills in arrays for easier management
  const blockchainSkills = ["Solidity", "Foundry", "Hardhat", "Ethers"];
  const frontendSkills = ["React", "TypeScript", "NextJS", "TailwindCSS"];

  return (
    <div className="min-h-screen bg-white text-black font-mono pt-4">
      <div className="max-w-5xl mx-auto px-4">
        {/* Profile header - reworked to be more like a traditional header */}
        <div className="border-4 border-[#385182] mb-8">
          {/* Title bar */}
          <div style={{ backgroundColor: "#385182" }} className="text-white p-4 uppercase font-bold">
            <h1 className="text-2xl font-bold tracking-wider">BLOCKCHAIN DEVELOPER</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
            {/* Profile image in the first column */}
            <div className="flex justify-center flex-col items-center">
              <div className="relative mb-4">
                <div className="relative aspect-square w-48 border border-[#385182] flex items-center justify-center overflow-hidden">
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
                <div className="absolute inset-0 border-4 border-purple-600 rounded-full transform rotate-3"></div>
                <div className="relative border-2 border-purple-600 rounded-full px-8 py-3 inline-block bg-white">
                  <div className="text-md text-center">Experience</div>
                  <div className="text-xl font-bold text-purple-600 text-center">+1 YEARS</div>
                </div>
              </div>
            </div>

            {/* Bio content in the second and third columns */}
            <div className="col-span-2">
              <h2 className="text-4xl font-bold mb-4 uppercase">Dmystical-Coder</h2>

              <div className="mb-6">
                <p className="mb-4 text-lg">
                  Hey folks, I&apos;m a passionate blockchain developer who loves to learn, grow and create awesome
                  dApps. Yes I do create!! :)
                </p>

                <p className="mb-4">
                  A passionate blockchain developer with a deep fascination for decentralized technologies. I specialize
                  in creating intuitive dApps that bridge the gap between complex blockchain architecture and seamless
                  user experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="address-container border-2 border-[#385182] p-2 bg-white mb-6 text-sm break-all">
                  <div className="font-bold uppercase mb-1">ETH Address:</div>
                  <Address address={myAddress} format="long" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="border-4 border-[#385182] mb-8 bg-white">
          <div style={{ backgroundColor: "#385182" }} className="text-white p-4">
            <h2 className="text-xl font-bold uppercase tracking-wider">SKILLS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-[#385182]">
            {/* Left column - Blockchain Skills */}
            <div className="border-r-4 border-[#385182] p-6">
              <h3 className="text-lg font-bold mb-4 uppercase">Blockchain</h3>

              <ul className="space-y-2">
                {blockchainSkills.map(skill => (
                  <li key={skill} className="border-2 border-[#385182] p-3 hover:bg-yellow-100 transition-colors">
                    <span className="font-bold">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - Frontend Skills */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4 uppercase">Frontend</h3>

              <ul className="space-y-2">
                {frontendSkills.map(skill => (
                  <li key={skill} className="border-2 border-[#385182] p-3 hover:bg-yellow-100 transition-colors">
                    <span className="font-bold">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer with social links */}
        <div className="border-4 border-[#385182] bg-white mb-8">
          <div className="p-4 border-b-4 border-[#385182] uppercase font-bold">SOCIAL LINKS:</div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4 flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/dmystical-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#385182] p-2 hover:bg-[#385182] hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 496 512" fill="currentColor">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/dmystical_coder"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#385182] p-2 hover:bg-[#385182] hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/abdulsalam-baruwa"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#385182] p-2 hover:bg-[#385182] hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
            <div className="p-4 flex flex-col md:flex-row items-center justify-end gap-4 border-t md:border-t-0 md:border-l border-[#385182]">
              <div className="flex items-center gap-2">
                <span className="uppercase font-bold">Nigeria</span>
                <span className="text-xl font-bold">|</span>
              </div>
              <div className="flex items-center">
                <span className="uppercase font-bold">🇳🇬</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center my-8">
          <p className="inline-block border-2 border-[#385182] px-4 py-2 bg-white font-bold">
            Built with Scaffold-ETH 2 • Batch 16 • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
