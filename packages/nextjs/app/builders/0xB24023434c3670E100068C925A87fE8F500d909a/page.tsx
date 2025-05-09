"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { ClipboardDocumentIcon, CodeBracketIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const MRWICKSProfile: NextPage = () => {
  const walletAddress = "0xB24023434c3670E100068C925A87fE8F500d909a"; // Replace with your actual 0x address
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 pt-16 pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-48 h-48 mb-6 transform transition-transform hover:scale-105">
            <Image
              src="/596.avif"
              alt="MRWICKS Avatar"
              fill
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
            <div className="flex items-center gap-2 bg-base-200 p-4 rounded-xl">
              <span className="text-primary-content font-mono text-sm truncate max-w-xs">{walletAddress}</span>
              <button
                onClick={copyToClipboard}
                className="btn btn-ghost btn-sm p-1 hover:bg-primary/20"
                title="Copy Address"
              >
                <ClipboardDocumentIcon className="h-6 w-6 text-primary" />
              </button>
            </div>

            {copied && (
              <div className="toast toast-center toast-top">
                <div className="alert alert-success bg-success text-success-content">
                  <span>Address copied!</span>
                </div>
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="mb-6 w-full">
            <h2 className="text-xl font-semibold text-primary-content mb-2">Superpowers</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Smart Contracts", "Node.js", "React", "Next.js", "Starknet Cairo"].map(skill => (
                <div
                  key={skill}
                  className="bg-primary text-primary-content px-4 py-2 rounded-lg text-sm font-medium transform transition-transform hover:scale-105 hover:bg-primary/90"
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
              <Link
                href="https://x.com/mrrwiicks"
                target="_blank"
                className="flex items-center gap-3 text-primary text-lg font-medium hover:text-primary/80 transform transition-transform hover:scale-105"
              >
                <CodeBracketIcon className="h-7 w-7" />
                <span>X</span>
              </Link>
              <Link
                href="https://github.com/mrwicks00"
                target="_blank"
                className="flex items-center gap-3 text-primary text-lg font-medium hover:text-primary/80 transform transition-transform hover:scale-105"
              >
                <CodeBracketIcon className="h-7 w-7" />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://discord.com/users/987567935503597578"
                target="_blank"
                className="flex items-center gap-3 text-primary text-lg font-medium hover:text-primary/80 transform transition-transform hover:scale-105"
              >
                <UserCircleIcon className="h-7 w-7" />
                <span>Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center">
        <p className="text-primary-content text-lg">
          Hungry for more of my blockchain wizardry? Check out the{" "}
          <Link href="/" className="link text-primary hover:text-primary/80">
            Batch 16 Builders
          </Link>{" "}
          or summon me on Discord for legendary code quests!
        </p>
      </div>
    </div>
  );
};

export default MRWICKSProfile;
