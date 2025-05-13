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
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start animate-fadeIn">
          {/* Left Column - Photo */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative  sm:w-72 sm:h-96 overflow-hidden border-4 border-secondary shadow-xl transition-transform duration-300 hover:scale-105 rounded-lg">
              <Image
                src="https://avatars.githubusercontent.com/u/147392994?v=4"
                alt="Nnenna Okoye"
                className="bg-cover"
                fill
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-3/5 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <div className="text-xl text-primary font-bold uppercase tracking-wider">Web3 Developer</div>
              <h1 className="text-4xl sm:text-5xl font-bold">NNENNA OKOYE</h1>
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-lg font-medium text-primary">Address:</span>
                <span>
                  <Address address="0x167142915AD0fAADD84d9741eC253B82aB8625cd" />
                </span>
              </div>
            </div>

            {/* Bio Section */}
            <div className="prose max-w-none pr-0 md:pr-8">
              <p className="text-base-content/90 text-xl">
                Full-stack Web3 Developer with a passion for building decentralized applications. Currently exploring
                the intersection of blockchain technology and user-centric design. Building with Scaffold-ETH 2 and
                contributing to the future of Web3.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-base-content">
              <div className="space-y-1">
                <div className="font-semibold text-lg">Email:</div>
                <div className="text-primary text-xl">nnennaokoye001@gmail.com</div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-lg">Based In:</div>
                <div className="text-lg">Lagos, Nigeria</div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 py-4">
              <div className="badge badge-primary badge-lg p-3 font-medium">Solidity</div>
              <div className="badge badge-secondary badge-lg p-3 font-medium">TypeScript</div>
              <div className="badge badge-accent badge-lg p-3 font-medium">Next.js</div>
              <div className="badge badge-accent badge-lg p-3 font-medium">React</div>
              <div className="badge badge-primary badge-lg p-3 font-medium">Hardhat</div>
              <div className="badge badge-secondary badge-lg p-3 font-medium">Ethers.js</div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-base font-semibold text-base-content mb-3">Follow me on</div>
              <div className="flex space-x-6">
                {socials.map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-base-content hover:text-accent transition-all duration-300 hover:scale-110"
                    aria-label={name}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NnennaOkoyePage;
