import Image from "next/image";
import { NextPage } from "next";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  social: {
    github: string;
    twitter: string;
  };
}

const profile: ProfileData = {
  name: "Developer Millburn",
  title: "Smart Contract Developer",
  bio: "I'm a blockchain developer, versitle in writing smart contract using Solidity, Hardhat, Foundry, Remix, EthersJs.",
  avatar: "/blackcat.jpg",
  location: "Kogi State, Nigeria",
  email: "millburncrack@gmail.com",
  social: {
    github: "https://github.com/MillburnCrackDev",
    twitter: "https://x.com/Millburn",
  },
};
const socialLinks = [
  {
    href: profile.social.github,
    icon: FaGithub,
    lightHoverColor: "hover:text-gray-900",
    darkHoverColor: "dark:hover:text-gray-200",
  },
  {
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
    lightHoverColor: "hover:text-red-500",
    darkHoverColor: "dark:hover:text-red-400",
  },
];

const MillburnBuilderPage: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700 object-cover"
            />

            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{profile.name}</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-3">{profile.title}</h2>

            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <span className="inline-block mr-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt size={16} />
              </span>
              <span className="text-sm">{profile.location}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-center mb-6 px-4 text-sm leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex space-x-6 mb-6">
              {socialLinks.map(({ href, icon: Icon, lightHoverColor, darkHoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor} transition-colors duration-300 ease-in-out`}
                >
                  <span
                    className={`inline-block text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor}`}
                  >
                    <Icon size={24} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillburnBuilderPage;
