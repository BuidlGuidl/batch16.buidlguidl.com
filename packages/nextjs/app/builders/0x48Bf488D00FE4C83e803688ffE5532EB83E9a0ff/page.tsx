"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS = "0x48Bf488D00FE4C83e803688ffE5532EB83E9a0ff";

const socialLinks = [
  {
    href: "https://github.com/nicwn",
    label: "GitHub",
    icon: <FaGithub className="mr-3" size={20} />,
  },
  {
    href: "https://x.com/nicwn",
    label: "X",
    icon: <FaTwitter className="mr-3" size={20} />,
  },
  {
    href: "https://linkedin.com/in/nickwang",
    label: "LinkedIn",
    icon: <FaLinkedin className="mr-3" size={20} />,
  },
  {
    href: "https://bsky.app/profile/nicwn.bsky.social",
    label: "Bluesky",
    icon: <SiBluesky className="mr-3" size={20} />,
  },
];

const ProfilePage: NextPage = () => {
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
        className={`w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-md shadow-secondary ${
          isDarkMode ? "bg-base-100" : "bg-white"
        } transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700`}
      >
        {/* Header with pattern */}
        <div className="relative">
          <div className="h-36 bg-[#5DA2D5] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,white_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            </div>
          </div>

          {/* Avatar */}
          <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
            <div className="p-1 bg-[#F79E02] rounded-full shadow-md shadow-secondary group">
              <div className="p-1 bg-[#55BAB7] rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/nickavatar.png.avif"
                    alt="Nicholas Wang"
                    fill
                    sizes="(max-width: 128px) 100vw, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-8 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Nicholas Wang</h1>
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm rounded-full bg-[#5DA2D5] inline-block mb-4 text-white">
                LEGO Ideas Creator
              </span>
            </div>
            <p className="text-lg mb-6 max-w-xs mx-auto">
              I am Nick Wang. My claim to fame was the creation LEGO Ideas, I moved from NYC to Tokyo and led a small
              team to make fan created LEGO sets a reality.
            </p>

            {/* Address display */}
            <div className="bg-base-200 rounded-lg p-3 mb-6 shadow-md shadow-secondary break-all relative">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-accent block text-left mb-1">Ethereum Address</span>
                  <Address address={BUILDER_ADDRESS} format="short" />
                </div>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="divider before:bg-[#5DA2D5] after:bg-[#5DA2D5]">Connect</div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 rounded-lg bg-base-200 hover:bg-[#5DA2D5] hover:text-white transition-all duration-300 transform hover:scale-105 group"
              >
                {icon}
                <span className="font-medium">{label}</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
