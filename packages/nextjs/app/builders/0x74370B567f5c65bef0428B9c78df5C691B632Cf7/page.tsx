import React from "react";
import BuilderProfile from "./components/BuilderProfile";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 text-black dark:text-white/80">
      <BuilderProfile
        name="Muritadhor Arowolo"
        avatarUrl="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        bio="Passionate web3 builder and developer focused on creating decentralized applications. Contributing to buildguild and exploring the intersection of blockchain technology, user experience, and community building. Always learning and sharing knowledge with fellow builders."
        ethAddress="0x74370B567f5c65bef0428B9c78df5C691B632Cf7"
        skills={[
          { name: "React", proficiency: 4 },
          { name: "Solidity", proficiency: 5 },
          { name: "TypeScript", proficiency: 4 },
          { name: "Blockchain", proficiency: 4 },
          { name: "Next.js", proficiency: 4 },
          { name: "Python", proficiency: 5 },
          { name: "Clarity", proficiency: 4 },
          { name: "Smart Contracts", proficiency: 4 },
        ]}
        hobbies={["Open Source", "Hackathons", "Debugging", "DeFi", "Painting", "Music", "Coooking"]}
      />
    </div>
  );
};

export default Index;
