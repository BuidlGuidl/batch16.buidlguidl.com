import Image from "next/image";
import SkillBadge from "./SkillBadge";
import SocialLinks from "./SocialLinks";
import { Award, FileText, Heart } from "lucide-react";
import { Address } from "~~/components/scaffold-eth/Address/Address";

interface BuilderProfileProps {
  name: string;
  avatarUrl: string;
  bio: string;
  ethAddress: string;
  skills: Array<{ name: string; proficiency: number }>;
  hobbies: string[];
}

const BuilderProfile = ({ name, avatarUrl, bio, ethAddress, skills, hobbies }: BuilderProfileProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="card bg-white/30 backdrop-blur-sm border border-purple-100/20 shadow-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/30 -z-10" />

      <div className="flex flex-col items-center space-y-4 pt-8 pb-6">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-[#385184] ring-offset-base-100 ring-offset-2 shadow-lg">
            <Image src={avatarUrl} alt={name} className="object-cover" width={128} height={128} />
          </div>
        </div>
        <div className="text-center items-center">
          <h1 className="text-3xl font-bold text-[#385184]">{name}</h1>
          <div className="flex justify-center">
            <Address address={ethAddress} />
          </div>
        </div>
      </div>

      <div className="card-body pb-8 space-y-8">
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
            <Heart className="h-5 w-5 text-[#385184]" />
            <h2 className="text-xl font-semibold text-gray-700">Hobbies & Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2 pl-7">
            {hobbies.map(hobby => (
              <div key={hobby} className="badge badge-outline bg-white/60 text-gray-700 p-2">
                {hobby}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
