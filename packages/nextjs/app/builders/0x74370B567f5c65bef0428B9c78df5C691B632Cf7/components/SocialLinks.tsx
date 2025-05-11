import React from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Github, Link, Linkedin, Twitter } from "lucide-react";

interface SocialLinksProps {
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

const SocialLinks = ({ socials }: SocialLinksProps) => {
  const socialIcons = [
    { name: "Twitter", url: socials.twitter, icon: Twitter },
    { name: "GitHub", url: socials.github, icon: Github },
    { name: "LinkedIn", url: socials.linkedin, icon: Linkedin },
    { name: "Website", url: socials.website, icon: Link },
  ].filter(social => social.url);

  return (
    <div className="flex justify-center gap-4">
      <TooltipProvider>
        {socialIcons.map(
          social =>
            social.url && (
              <Tooltip key={social.name} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full bg-white/80 hover:bg-purple-50 hover:text-[#385184] border-purple-100"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon size={18} />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ),
        )}
      </TooltipProvider>
    </div>
  );
};

export default SocialLinks;
