import Link from "next/link";
import { GithubIcon, TelegramIcon, TwitterIcon } from "./Icons";

type SocialLinksProps = {
  twitter?: string;
  github?: string;
  telegram?: string;
};

export const SocialLinks = ({ twitter, github, telegram }: SocialLinksProps) => (
  <div className="flex gap-4">
    {twitter && (
      <Link href={`https://twitter.com/${twitter}`} target="_blank">
        <span className="w-6 h-6 hover:text-blue-400">
          <TwitterIcon />
        </span>
      </Link>
    )}
    {github && (
      <Link href={`https://github.com/${github}`} target="_blank">
        <span className="w-6 h-6 hover:text-gray-600">
          <GithubIcon />
        </span>
      </Link>
    )}
    {telegram && (
      <Link href={`https://t.me/${telegram}`} target="_blank">
        <span className="w-6 h-6 hover:text-blue-500">
          <TelegramIcon />
        </span>
      </Link>
    )}
  </div>
);
