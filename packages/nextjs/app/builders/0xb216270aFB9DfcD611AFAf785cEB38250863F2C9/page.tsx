import Image from "next/image";
import { GitHubIcon, TwitterIcon } from "./icons";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const socialLinks = [
  {
    href: "https://github.com/Rampop01",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://twitter.com/OmowumiRahmat",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
];

const RampopProfilePage: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-base-200 to-base-300 px-4 sm:px-8 py-4 sm:py-8">
      <div className="max-w-3xl w-full bg-gradient-to-r from-gray-200 via-white to-gray-200 dark:from-base-100 dark:via-base-200 dark:to-base-300 shadow-md rounded-2xl p-4 sm:p-10 border border-gray-100 dark:border-accent hover:shadow-gray-200/20 transition-all duration-300">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full opacity-60"></div>
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-full ring-2 ring-white dark:ring-accent ring-offset-4 ring-offset-pink-50 dark:ring-offset-base-300 shadow-md overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dxswouxj5/image/upload/v1703872336/headshotblue_cxelyl.jpg"
                alt="my picture"
                fill
                sizes="(max-width: 640px) 96px, 144px"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2 sm:space-y-3 text-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text cursor-default">
              Rampop
            </h1>
            <p className="text-sm sm:text-lg text-black bg-clip-text font-medium max-w-md dark:text-white px-2">
              ✨ Web3 Fullstack Developer | BuidlGuidl Builder | Technical Writer | DeFi Enthusiast ✨
            </p>
          </div>

          {/* Address container */}
          <div className="w-full sm:w-auto bg-base-200 dark:bg-base-300 px-2 sm:px-4 py-2 rounded-xl border border-base-300 dark:border-accent text-xs sm:text-base">
            <div className="sm:hidden flex justify-center">
              <Address address="0xb216270aFB9DfcD611AFAf785cEB38250863F2C9" format="short" />
            </div>
            <div className="hidden sm:flex justify-center">
              <Address address="0xb216270aFB9DfcD611AFAf785cEB38250863F2C9" format="long" />
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md normal-case hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-content w-full sm:w-auto"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RampopProfilePage;
