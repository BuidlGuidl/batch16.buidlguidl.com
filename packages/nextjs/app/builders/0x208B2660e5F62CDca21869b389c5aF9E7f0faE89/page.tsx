import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const GwillPage: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex flex-col md:flex-row px-5 max-w-4xl mx-auto gap-8">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="mb-6">
              <div className="avatar">
                <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <Image
                    src="https://avatars.githubusercontent.com/big14way"
                    width={500}
                    height={500}
                    alt="Builder Avatar"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-center mb-4">
              <span className="block text-4xl font-bold">Godswill Idolor</span>
            </h1>
            <span className="block mb-6 text-s text-center text-gray-500">
              Web3 Builder | Full Stack Developer | BuidlGuidl Batch 16
            </span>
            <div className="flex flex-wrap mb-6 gap-4 items-center">
              <Link href="https://github.com/big14way" passHref className="btn btn-circle btn-outline">
                <FaGithub size={24} />
              </Link>
              <Link href="https://twitter.com/big14teru" passHref className="btn btn-circle btn-outline">
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/idolor-godswill-21b801254"
                passHref
                className="btn btn-circle btn-outline"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
            <div>
              <Address address="0x208B2660e5F62CDca21869b389c5aF9E7f0faE89" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-2/3 mt-8 md:mt-0">
            <h1 className="text-center mb-4">
              <span className="block text-2xl mb-2">About me</span>
            </h1>
            <div className="mb-6">
              <p className="mb-4">
                I&apos;m passionate about revolutionizing early-stage startup funding through web3. Currently building a
                decentralized platform that connects promising founders with investors, featuring milestone-based grant
                distributions for enhanced accountability and success rates.
              </p>
              <p className="mb-4">
                What excites me most about web3 is its potential to democratize access to capital and create
                transparent, trustless systems that empower both founders and investors. The intersection of DeFi, smart
                contracts, and real-world business applications is where innovation happens!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full border-2 border-primary/20 bg-base-200 p-6 rounded-lg">
              <div className="stats bg-base-100 shadow-lg border border-primary/10 overflow-hidden">
                <div className="stat p-4">
                  <div className="stat-title font-semibold">Favorite Stack</div>
                  <div className="stat-value text-primary text-lg sm:text-xl md:text-2xl">NextJS + Solidity</div>
                </div>
              </div>
              <div className="stats bg-base-100 shadow-lg border border-primary/10 overflow-hidden">
                <div className="stat p-4">
                  <div className="stat-title font-semibold">Current Focus</div>
                  <div className="stat-value text-primary text-lg sm:text-xl md:text-2xl whitespace-normal break-words">
                    DeFi + Startup Funding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GwillPage;
