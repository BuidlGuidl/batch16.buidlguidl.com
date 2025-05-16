"use client";

import Image from "next/image";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

// Skills array
const skills: string[] = [
  "Javascript",
  "Rust",
  "Typescript",
  "Wasm",
  "Solidity",
  "Ethereum",
  "Smart Contracts",
  "Web3",
];

// Social links data
type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  size?: string;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/Josetic224",
    ariaLabel: "GitHub Profile",
    icon: FaGithub,
    size: "24px",
  },
  {
    href: "https://x.com/yoseph_Eth",
    ariaLabel: "X Profile",
    icon: SiX,
    size: "20px",
  },
  {
    href: "https://www.linkedin.com/in/joseph-ochiagha-749853317",
    ariaLabel: "LinkedIn Profile",
    icon: FaLinkedin,
    size: "24px",
  },
];

const JosephOchiaghaProfile: NextPage = () => {
  // Using Tailwind's dark mode classes for theme handling
  return (
    <main className="flex-grow relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      {/* Content container */}
      <div className="relative flex items-center justify-center min-h-screen w-full py-16 px-4 overflow-hidden">
        {/* Card container with improved shadows and borders */}
        <div
          className="max-w-md w-full rounded-xl shadow-xl overflow-hidden 
                      bg-gradient-to-br from-[#e6f2ff] via-[#f0f8ff] to-[#e0f0ff] dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-blue-900 
                      border border-blue-100 dark:border-blue-900
                      transition-all duration-300"
        >
          {/* Color accent border */}
          <div className="border border-blue-200 dark:border-blue-800 rounded-xl overflow-hidden transition-colors duration-300">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#e6f2ff] via-[#f0f8ff] to-[#e0f0ff] dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-blue-900 transition-all duration-300">
              {/* Header with better gradient transitions */}
              <div
                className="relative h-32 overflow-hidden 
                            bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 dark:from-blue-600 dark:via-blue-700 dark:to-indigo-800
                            transition-colors duration-300"
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-16 
                              bg-gradient-to-t from-[#e6f2ff] dark:from-gray-800 to-transparent
                              transition-colors duration-300"
                ></div>
              </div>

              {/* Profile content */}
              <div className="relative px-8 pb-8 -mt-16">
                {/* Profile image with improved glow effect */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-full opacity-75 blur-sm transition-colors duration-300"></div>
                    <div
                      className="relative h-32 w-32 rounded-full overflow-hidden 
                                  border-4 border-white dark:border-gray-800
                                  transition-colors duration-300"
                    >
                      <Image
                        src="/builders/oliveCartoon.webp"
                        alt="Joseph Ochiagha"
                        width={128}
                        height={128}
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Name and bio with improved typography for both modes */}
                <div className="mt-6 text-center">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    Joseph Ochiagha
                  </h1>

                  <div className="mt-2 flex items-center justify-center relative z-50">
                    <div className="py-1 px-2 rounded-lg bg-blue-500 dark:bg-blue-900/40 z-20 relative shadow-sm border border-blue-200 dark:border-blue-800">
                      <div className="text-white dark:text-blue-100">
                        <Address address="0x2d90C8bE0Df1BA58a66282bc4Ed03b330eBD7911" format="short" size="sm" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-base font-medium text-blue-600 dark:text-blue-400 transition-colors duration-300">
                    Smart Contract Dev, In love with Cryptography
                  </p>

                  <p className="mt-2 text-sm max-w-sm mx-auto text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Exploring the boundaries of blockchain technology and passionate about building secure, efficient
                    smart contracts.
                  </p>
                </div>

                {/* Skills chips with improved UI for both modes */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCode size="16px" className="text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                    <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                      Skills
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full 
                                bg-blue-50 text-blue-700 border border-blue-100 
                                dark:bg-gray-700 dark:text-blue-300 dark:border-gray-600 
                                transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links with improved hover effects */}
                <div className="mt-6 flex justify-center gap-5">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full 
                                 bg-blue-50 text-blue-600 
                                 dark:bg-gray-700 dark:text-blue-300
                                 transition-all duration-300
                                 hover:bg-blue-500 hover:text-white
                                 dark:hover:bg-blue-600 dark:hover:text-white
                                 transform hover:scale-110"
                        aria-label={link.ariaLabel}
                      >
                        <Icon size={link.size} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JosephOchiaghaProfile;
