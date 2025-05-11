import React from "react";
import CopyAddress from "./CopyAddress";
import SkillBadge from "./SkillBadge";
import SocialLinks from "./SocialLinks";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Award, FileText, Heart } from "lucide-react";

interface BuilderProfileProps {
  name: string;
  avatarUrl: string;
  bio: string;
  ethAddress: string;
  skills: Array<{ name: string; proficiency: number }>;
  hobbies: string[];
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

const BuilderProfile = ({ name, avatarUrl, bio, ethAddress, skills, hobbies, socials }: BuilderProfileProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="backdrop-blur-sm border border-purple-100/20 bg-white/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/30 -z-10" />

        <CardHeader className="flex flex-col items-center space-y-4 pt-8 pb-6">
          <Avatar className="h-32 w-32 border-4 border-[#385184] shadow-lg">
            <img src={avatarUrl} alt={name} className="object-cover" />
          </Avatar>
          <div className="text-center items-center">
            <h1 className="text-3xl font-bold text-[#385184]">{name}</h1>
            <div className="flex justify-center">
              <CopyAddress address={ethAddress} />
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#385184]" />
              <h2 className="text-xl font-semibold text-gray-700">Bio</h2>
            </div>
            <p className="text-gray-600 leading-relaxed pl-7">{bio}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#385184]" />
              <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3 pl-7">
              {skills.map(skill => (
                <SkillBadge key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5text-[#385184]" />
              <h2 className="text-xl font-semibold text-gray-700">Hobbies & Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2 pl-7">
              {hobbies.map(hobby => (
                <Badge key={hobby} variant="outline" className="bg-white/60 text-gray-700">
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <SocialLinks socials={socials} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuilderProfile;
