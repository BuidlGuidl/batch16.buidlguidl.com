import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const name = "Joe Leo";
const nickname = "TheCoderJoe";
const description =
  "Web3 builder, Solidity developer, and AI explorer. I love creating decentralized solutions, collaborating with innovative minds, and pushing the boundaries of blockchain technology. Let's connect and build the future together!";
const walletAddress = "0xE00E720798803B8B83379720c42f7A9bE1cCd281";
const avatarUrl =
  "https://res.cloudinary.com/dig0e9lmr/image/upload/v1747066063/anime-style-character-space_nm3mi9.jpg";

const socialLinks = [
  {
    platform: "github",
    url: "https://github.com/web-ghost-dotcom",
    icon: <FaGithub size={20} />,
    color: "hover:text-purple-500",
  },
  {
    platform: "BuidlGuidl",
    url: "https://app.buidlguidl.com/builders/0xE00E720798803B8B83379720c42f7A9bE1cCd281",
    icon: <FaTwitter size={20} />,
    color: "hover:text-blue-400",
  },
];

const JoeLeoWeb3Profile: NextPage = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 rounded-2xl shadow-xl overflow-hidden transition-colors duration-200 border border-gray-200 dark:border-gray-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 p-8">
        {/* Avatar and Name Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-400 dark:bg-blue-500 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full border-2 border-blue-300 dark:border-blue-400 overflow-hidden">
              <Image
                src={avatarUrl}
                width={500}
                height={500}
                alt={name}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Wallet Address */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-500">
              {name}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">{nickname}</p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium flex items-center border border-gray-300 dark:border-gray-700 text-blue-700 dark:text-gray-100">
                <Address address={walletAddress} />
              </div>
              <a
                href={`https://etherscan.io/address/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-500">
              About
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Socials Section */}
        <div className="mt-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-500">
              Connect With Me
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${link.color} transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 border border-gray-300 dark:border-gray-600`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.platform} profile`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoeLeoWeb3Profile;
