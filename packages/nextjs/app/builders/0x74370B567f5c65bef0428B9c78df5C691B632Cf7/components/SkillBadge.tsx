import React from "react";

interface SkillBadgeProps {
  name: string;
  proficiency: number; // 1-5
}

const SkillBadge = ({ name, proficiency }: SkillBadgeProps) => {
  // Ensure proficiency is within bounds
  const level = Math.min(Math.max(proficiency, 1), 5);

  return (
    <div className="flex flex-col items-center bg-white/80 rounded-lg p-2 shadow-sm border border-purple-100">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <div className="flex mt-1 gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`h-1.5 w-4 rounded-full ${i < level ? "bg-[#385184]" : "bg-white"}`} />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;
