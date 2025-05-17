import Image from "next/image";
import { NextPage } from "next";
import { IconType } from "react-icons";
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

interface StyledIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: IconType;
  size?: number;
  color?: string;
}

interface SocialLink {
  href: string;
  icon: IconType;
  lightHoverColor: string;
  darkHoverColor: string;
}

const StyledIcon: React.FC<StyledIconProps> = ({ icon: Icon, className, size, color, ...props }) => {
  return (
    <span className={`inline-block ${className}`} {...props}>
      <Icon size={size} color={color} />
    </span>
  );
};

// Social links configuration moved outside the component
const socialLinks: SocialLink[] = [
  {
    href: "",
    icon: FaGithub,
    lightHoverColor: "hover:text-gray-900",
    darkHoverColor: "dark:hover:text-gray-200",
  },
  {
    href: "",
    icon: FaEnvelope,
    lightHoverColor: "hover:text-red-500",
    darkHoverColor: "dark:hover:text-red-400",
  },
];

const MillburnBuilderPage: NextPage = () => {
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

  // Dynamically populate href values
  const populatedSocialLinks = socialLinks.map((link, index) => ({
    ...link,
    href: [profile.social.github, profile.social.twitter, `mailto:${profile.email}`][index],
  }));

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
              <StyledIcon icon={FaMapMarkerAlt} size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-sm">{profile.location}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-center mb-6 px-4 text-sm leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex space-x-6 mb-6">
              {populatedSocialLinks.map(({ href, icon: Icon, lightHoverColor, darkHoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor} transition-colors duration-300 ease-in-out`}
                >
                  <StyledIcon
                    icon={Icon}
                    size={24}
                    className={`text-gray-600 dark:text-gray-400 ${lightHoverColor} ${darkHoverColor}`}
                  />
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
