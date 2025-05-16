import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const MethelyProfile: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-start gap-16 px-4 md:px-20">
      <div className="flex-1">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-start gap-14 mt-20">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full rounded-tl-[100px] rounded-br-[100px] -z-10 transform -translate-x-[4px] -translate-y-[4px]"></div>
            <div className="leaf-shaped py-8 px-6 md:px-10 border-2 flex flex-col items-center justify-start rounded-tl-[100px] rounded-br-[100px] relative z-10">
              <div className="flex flex-col items-center justify-start">
                <div className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat border-2 border-[#6EF4E6] text-[20px] font-bold text-black flex items-center justify-center">
                  MTH
                </div>
                <p className="text-[24px] text-black font-bold">Methely Armstrong</p>
                <p className="text-md text-[#9B9EA1]">Fullstack & Blockchain Dev</p>
              </div>
              <div className="mt-6 text-[#9B9EA1]">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#6AECD9"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  <Link href="https://www.github.com/MethelyDev">www.github.com/MethelyDev</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-start ">
            <div className="w-full">
              <div className="w-80 h-80 mx-auto mb-8 relative">
                <Image
                  src="/black lion.jpeg"
                  alt="Black Lion"
                  width={288}
                  height={288}
                  className="rounded-full border-4 border-gray-700 object-cover"
                  priority
                />
              </div>

              <div>
                <p className="text-[34px] lg:text-[46px] pl-4 leading-[50px] font-medium">
                  <span className="text-[#6AECD9]">METHELY</span>
                </p>
                <p className="text-[34px] lg:text-[46px] leading-[50px] font-medium ml-[1rem]">
                  Fullstack Web2 & Blockchain Developer
                </p>
              </div>
              <div className="mt-8">
                <p className="pl-4 text-md font-bold text-[#9B9EA1]">
                  A passionate software developer specializing in Fullstack web2 and Web3 development. I blend
                  creativity with technical expertise to build engaging web experiences and blockchain solutions. :)
                </p>
              </div>
            </div>
            <div className="py-10 px-8 rounded-lg md:rounded-full">
              {[
                { number: "5", text: "Programming Languages" },
                { number: "6", text: "Development Tools" },
                { number: "1", text: "Year of Experience" },
              ].map(item => (
                <div
                  key={item.text}
                  className="flex items-center justify-start md:items-center md:justify-center gap-4 mt-8"
                >
                  <p className="text-[#6AECD9] text-[50px] font-medium">{item.number}</p>
                  <p className="text-md font-bold text-[#9B9EA1]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethelyProfile;
