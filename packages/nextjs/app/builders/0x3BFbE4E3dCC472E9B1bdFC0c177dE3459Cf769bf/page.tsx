"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x3BFbE4E3dCC472E9B1bdFC0c177dE3459Cf769bf";

const LynndabelProfile: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div
        className={`w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-md shadow-secondary ${isDarkMode ? "bg-base-100" : "bg-white"} transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700`}
      >
        <div className="relative">
          <div className="h-36 bg-secondary overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,white_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            </div>
          </div>

          <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
            <div className="p-1 bg-secondary rounded-full shadow-md shadow-secondary group">
              <div className="p-1 bg-base-100 rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/lynnavatar.jpg"
                  alt="Lynndabel's Avatar"
                  width={128}
                  height={128}
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Lynndabel</h1>
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm rounded-full bg-secondary inline-block mb-4 text-white">
                Blockchain Developer
              </span>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 max-w-xs mx-auto">
              Creating digital experiences & exploring blockchain innovations
            </p>

            <div className="bg-base-200 rounded-lg p-3 mb-6 shadow-md shadow-secondary break-all relative">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-accent block text-left mb-1">Ethereum Address</span>
                  <Address address={BUILDER_ADDRESS} format="short" />
                </div>
              </div>
            </div>
          </div>

          <div className="divider before:bg-secondary after:bg-secondary">Connect</div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <a
              href="http://x.com/Lynndabel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <FaTwitter className="mr-3" size={20} />
              <span className="font-medium">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity fill-current"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
              </svg>
            </a>
            <a
              href="https://github.com/Lynndabel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <FaGithub className="mr-3" size={20} />
              <span className="font-medium">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity fill-current"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LynndabelProfile;
