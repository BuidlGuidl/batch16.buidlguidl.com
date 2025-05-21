"use client";

import Image from "next/image";
import { GithubIcon, TelegramIcon, TwitterIcon } from "./_components/Icons";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

// Skills arrays
const blockchainSkills = ["Solidity", "Hardhat", "Ethers.js", "Foundry"];
const frontendSkills = ["React", "Next.js", "TailwindCSS", "TypeScript"];
const otherSkills = ["IPFS", "The Graph", "ENS", "ERC Standards"];

// Social links
interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/ogazboiz",
    label: "GitHub Profile",
    icon: (
      <div className="h-5 w-5">
        <GithubIcon />
      </div>
    ),
  },
  {
    href: "https://twitter.com/AkpoloOgaga",
    label: "Twitter Profile",
    icon: (
      <div className="h-5 w-5">
        <TwitterIcon />
      </div>
    ),
  },
  {
    href: "https://t.me/ogazboiz",
    label: "Telegram Profile",
    icon: (
      <div className="h-5 w-5">
        <TelegramIcon />
      </div>
    ),
  },
];

// Ethereum address
const myAddress = "0x2E15bB8aDF3438F66A6F786679B0bBBBF02A75d5";

const AkpoloOgagaProfile: NextPage = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-base-200)" }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex flex-col items-center mb-12">
          <div
            className="relative w-32 h-32 mb-4 rounded-full overflow-hidden"
            style={{ border: "4px solid var(--color-base-100)" }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/104951733?v=4"
              alt="Profile image"
              className="object-cover"
              fill
              sizes="128px"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
            Akpolo OgagaOghene Prince
          </h1>
          <p className="text-xl mb-4" style={{ color: "var(--color-base-content)" }}>
            Web3 Developer
          </p>
          <div className="flex gap-6 mt-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                style={{ color: "var(--color-base-content)" }}
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                About Me
              </h2>
              <p className="mb-4" style={{ color: "var(--color-base-content)" }}>
                I&apos;m a Web3 developer passionate about building decentralized applications that solve real-world
                problems with intuitive interfaces.
              </p>
              <p style={{ color: "var(--color-base-content)" }}>Open for freelance projects and collaborations.</p>
              <div className="mt-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium" style={{ color: "var(--color-primary)" }}>
                    ETH Address:
                  </span>
                  <Address address={myAddress} format="short" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium" style={{ color: "var(--color-primary)" }}>
                    Experience:
                  </span>
                  <span style={{ color: "var(--color-base-content)" }}>1+ Years</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                Projects
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium" style={{ color: "var(--color-base-content)" }}>
                    ArtChain
                  </h3>
                  <p className="my-2" style={{ color: "var(--color-base-content)" }}>
                    A decentralized platform for art provenance and royalty management using smart contracts.
                  </p>
                  <div className="flex flex-wrap gap-2 my-3">
                    {["Solidity", "React", "Next.js", "IPFS"].map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "var(--color-success)",
                          color: "var(--color-base-100)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/ogazboiz/artchain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-sm font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium" style={{ color: "var(--color-base-content)" }}>
                      Smart Contract Developer
                    </h3>
                    <span className="text-sm" style={{ color: "var(--color-base-content)" }}>
                      2024-Present
                    </span>
                  </div>
                  <p className="mt-1" style={{ color: "var(--color-base-content)" }}>
                    Developing and auditing smart contracts for blockchain projects.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium" style={{ color: "var(--color-base-content)" }}>
                      Frontend Developer
                    </h3>
                    <span className="text-sm" style={{ color: "var(--color-base-content)" }}>
                      2020-Present
                    </span>
                  </div>
                  <p className="mt-1" style={{ color: "var(--color-base-content)" }}>
                    Building responsive web applications with React and Next.js.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Skills */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2" style={{ color: "var(--color-base-content)" }}>
                    Blockchain
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blockchainSkills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "var(--color-success)",
                          color: "var(--color-base-100)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: "var(--color-base-content)" }}>
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "var(--color-success)",
                          color: "var(--color-base-100)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: "var(--color-base-content)" }}>
                    Web3
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "var(--color-success)",
                          color: "var(--color-base-100)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                Education
              </h2>
              <div>
                <h3 className="text-lg font-medium" style={{ color: "var(--color-base-content)" }}>
                  BSc Computer Science
                </h3>
                <p className="text-sm" style={{ color: "var(--color-base-content)" }}>
                  2019-2024
                </p>
                <p className="mt-1" style={{ color: "var(--color-base-content)" }}>
                  Edo State University
                </p>
              </div>
            </section>

            {/* Contact */}
            <section
              className="p-6"
              style={{
                background: "var(--color-base-100)",
                borderRadius: "var(--radius-box)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2" style={{ color: "var(--color-primary)" }}>
                Contact
              </h2>
              <p style={{ color: "var(--color-base-content)" }} className="mb-2">
                Let&apos;s collaborate:
              </p>
              <a
                href="mailto:ogazboizakpolo@gmail.com"
                className="link font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                ogazboizakpolo@gmail.com
              </a>
              <p className="mt-4" style={{ color: "var(--color-base-content)" }}>
                Nigeria 🇳🇬
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-12 pt-6 border-t text-center text-sm"
          style={{
            borderColor: "var(--color-base-300)",
            color: "var(--color-base-content)",
          }}
        >
          Built with Scaffold-ETH 2 • 2025
        </footer>
      </div>
    </div>
  );
};

export default AkpoloOgagaProfile;
