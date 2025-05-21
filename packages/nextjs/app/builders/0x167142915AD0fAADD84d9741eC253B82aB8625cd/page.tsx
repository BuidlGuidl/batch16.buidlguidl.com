import Image from "next/image";
import { Address } from "../../../components/scaffold-eth";
import type { NextPage } from "next";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/nnennaokoye",
    icon: AiFillGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/_0xNina",
    icon: AiFillTwitterCircle,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nnennaokoye/",
    icon: AiFillLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_ninacodes",
    icon: AiFillInstagram,
  },
];

const NnennaOkoyePage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen py-10 px-4 sm:py-16 sm:px-6 lg:px-8 bg-base-100">
      <div className="w-full max-w-6xl mx-auto">
        {/* Centered Vertical Layout */}
        <div className="flex flex-col items-center animate-fadeIn">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 overflow-hidden border-4 border-secondary shadow-xl rounded-full">
              <Image
                src="/NnennaAvatar.jpg"
                alt="Nnenna Avatar"
                fill
                sizes="128px"
                priority
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">NNENNA OKOYE</h1>

          {/* Address */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Address address="0x167142915AD0fAADD84d9741eC253B82aB8625cd" />
          </div>

          {/* Bio Section */}
          <div className="prose max-w-2xl text-center mb-8">
            <p className="text-base-content/90 text-xl">
              Full-stack Web3 Developer with a passion for building decentralized applications. Currently exploring the
              intersection of blockchain technology and user-centric design. Building with Scaffold-ETH 2 and
              contributing to the future of Web3.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 py-4 mb-8">
            <div className="badge badge-primary badge-lg p-3 font-medium">Solidity</div>
            <div className="badge badge-secondary badge-lg p-3 font-medium">TypeScript</div>
            <div className="badge badge-accent badge-lg p-3 font-medium">Next.js</div>
            <div className="badge badge-accent badge-lg p-3 font-medium">React</div>
            <div className="badge badge-primary badge-lg p-3 font-medium">Hardhat</div>
            <div className="badge badge-secondary badge-lg p-3 font-medium">Ethers.js</div>
          </div>

          {/* Connect with me section with horizontal lines */}
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow border-t border-white"></div>
            <div className="mx-4 text-base font-semibold text-base-content">Connect with me</div>
            <div className="flex-grow border-t border-white"></div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-base-content hover:text-accent dark:hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label={name}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NnennaOkoyePage;
