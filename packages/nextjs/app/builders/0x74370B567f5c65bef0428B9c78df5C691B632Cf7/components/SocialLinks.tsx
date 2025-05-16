import React from "react";
import { Github, Link, Linkedin, Twitter } from "lucide-react";

const socialIcons = [
  { name: "Twitter", url: "https://twitter.com/armolas_06", icon: Twitter },
  { name: "GitHub", url: "https://github.com/armolas", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/arowolomuritadhor", icon: Linkedin },
  { name: "Website", url: "https://armolasportfolio.netlify.app", icon: Link },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 ">
      {socialIcons.map(
        social =>
          social.url && (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline bg-primary hover:bg-purple-50 text-primary-content hover:text-[#385184] border-purple-100 tooltip tooltip-top"
              data-tip={social.name}
            >
              <social.icon size={18} />
              <span className="sr-only">{social.name}</span>
            </a>
          ),
      )}
    </div>
  );
};

export default SocialLinks;
