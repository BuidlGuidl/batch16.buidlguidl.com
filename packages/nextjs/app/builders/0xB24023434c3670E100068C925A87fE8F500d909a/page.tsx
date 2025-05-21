import Image from "next/image";
import Link from "next/link";
import { Address } from "../../../components/scaffold-eth/Address/Address";
import type { NextPage } from "next";
import { CodeBracketIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const walletAddress = "0xB24023434c3670E100068C925A87fE8F500d909a";

const socialLinks = [
  { href: "https://x.com/mrrwiicks", label: "X", icon: CodeBracketIcon },
  { href: "https://github.com/mrwicks00", label: "GitHub", icon: CodeBracketIcon },
  { href: "https://discord.com/users/987567935503597578", label: "Discord", icon: UserCircleIcon },
];

const MRWICKSProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 pt-16 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="/596.avif"
              alt="MRWICKS Avatar"
              width={192}
              height={192}
              className="rounded-full object-cover border-4 border-primary shadow-center"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-primary-content mb-4 text-center md:text-left">MRWICKS</h1>

          <div className="bg-base-200 p-6 rounded-xl text-primary-content text-center md:text-left">
            <p className="leading-relaxed">
              Hey there! I’m MRWICKS, a friendly blockchain enthusiast who loves building smart contracts and coding
              with Node.js. I create cool frontends with React and Next.js, and I’m diving into Starknet Cairo for fun.
              When I’m not coding, you’ll find me sharing laughs on Discord or tweaking my latest project. Let’s connect
              and build something awesome!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6 w-full">
            <h2 className="text-xl font-semibold text-primary-content mb-2">Wallet</h2>
            <div className="bg-base-200 p-4 rounded-xl">
              <Address
                address={walletAddress}
                size="sm"
                format="short"
                disableAddressLink={true}
                onlyEnsOrAddress={true}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6 w-full">
            <h2 className="text-xl font-semibold text-primary-content mb-2">Superpowers</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Smart Contracts", "Node.js", "React", "Next.js", "Starknet Cairo"].map(skill => (
                <div
                  key={skill}
                  className="bg-primary text-primary-content px-4 py-2 rounded-lg text-sm font-medium transform transition-transform"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full">
            <h2 className="text-xl font-semibold text-primary-content mb-2">Connect with the Wizard</h2>
            <div className="flex flex-col gap-4 bg-base-200 p-4 rounded-xl">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="flex items-center gap-3 text-primary-content text-lg font-medium hover:text-primary-content/80 transform transition-transform hover:scale-105 hover:bg-primary/10"
                >
                  <Icon className="h-7 w-7" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center">
        <p className="text-primary-content text-lg">
          Want to team up for some coding fun? Check out the{" "}
          <Link href="/" className="link text-primary-content hover:text-primary-content/80">
            Batch 16 Builders
          </Link>{" "}
          or ping me on Discord!
        </p>
      </div>
    </div>
  );
};

export default MRWICKSProfile;
