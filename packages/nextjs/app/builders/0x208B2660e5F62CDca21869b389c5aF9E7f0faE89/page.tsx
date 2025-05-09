import Image from "next/image";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address as AddressType } from "viem";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/big14way",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/big14teru",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/idolor-godswill-21b801254",
    icon: FaLinkedin,
  },
];

const GwillPage: NextPage = () => {
  const address: AddressType = "0x208B2660e5F62CDca21869b389c5aF9E7f0faE89";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-base-100">
      <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
        <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-primary">
          <Image
            src="https://avatars.githubusercontent.com/big14way"
            alt="Builder Avatar"
            className="object-cover"
            fill
            sizes="(max-width: 128px) 100vw, 128px"
          />
        </div>

        <h1 className="text-4xl font-bold text-center">Godswill Idolor</h1>

        <div className="flex items-center space-x-2">
          <Address address={address} format="short" />
        </div>

        <div className="flex flex-col gap-4 max-w-xl text-center text-lg opacity-80">
          <p>Web3 Builder | Full Stack Developer | BuidlGuidl Batch 16</p>

          <p>
            I&apos;m passionate about revolutionizing early-stage startup funding through web3. Currently building a
            decentralized platform that connects promising founders with investors, featuring milestone-based grant
            distributions for enhanced accountability and success rates.
          </p>

          <p>
            What excites me most about web3 is its potential to democratize access to capital and create transparent,
            trustless systems that empower both founders and investors. The intersection of DeFi, smart contracts, and
            real-world business applications is where innovation happens!
          </p>
        </div>

        <div className="flex space-x-4">
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-xl hover:text-primary transition-colors"
            >
              <social.icon />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Favorite Stack</div>
              <div className="stat-value text-primary text-2xl">NextJS + Solidity</div>
            </div>
          </div>

          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Current Focus</div>
              <div className="stat-value text-secondary text-2xl">DeFi + Startup Funding</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GwillPage;
