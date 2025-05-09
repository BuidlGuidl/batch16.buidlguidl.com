import Image from "next/image";
import { Address } from "../../../components/scaffold-eth";
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

export default function NnennaOkoyePage() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:px-8 bg-base-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-secondary">
            <Image
              src="https://avatars.githubusercontent.com/u/125786074"
              alt="Nnenna Okoye"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 144px, 160px"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-center">NNENNA OKOYE</h1>
          <div className="flex items-center space-x-2">
            <span className="text-base sm:text-lg text-neutral-content">Address:</span>
            <Address address="0x167142915AD0fAADD84d9741eC253B82aB8625cd" />
          </div>
        </div>

        {/* Bio Section */}
        <div className="prose max-w-none px-4 sm:px-6">
          <p className="text-base-content/80 text-lg sm:text-xl text-center mb-8">
            Full-stack Web3 Developer with a passion for building decentralized applications. Currently exploring the
            intersection of blockchain technology and user-centric design. Building with Scaffold-ETH 2 and contributing
            to the future of Web3.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-6">
          <div className="badge badge-primary badge-lg">Solidity</div>
          <div className="badge badge-secondary badge-lg">TypeScript</div>
          <div className="badge badge-accent badge-lg">Next.js</div>
          <div className="badge badge-accent badge-lg">React</div>
          <div className="badge badge-primary badge-lg">Hardhat</div>
          <div className="badge badge-secondary badge-lg">Ethers.js</div>
        </div>

        {/* Social Links */}
        <div className="divider">Connect with me</div>
        <div className="flex justify-center space-x-8">
          {socials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl sm:text-4xl hover:text-secondary transition-colors"
              aria-label={name}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
