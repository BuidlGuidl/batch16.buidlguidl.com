"use client";

import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Copy ethereum address
  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x3BFbE4E3dCC472E9B1bdFC0c177dE3459Cf769bf");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center p-4 font-sans text-white">
      {/* Main card container */}
      <div
        className={`w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl bg-gray-900 bg-opacity-50 backdrop-blur-xl transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700`}
      >
        <div className="relative">
          {/* Header with gradient */}
          <div className="h-36 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,white_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            </div>
          </div>

          <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
            <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-xl group">
              <div className="p-1 bg-white rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <img src="/lynnavatar.jpg" alt="Lynndabel's Avatar" className="w-32 h-32 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-8 pb-8">
          {/* Name and intro */}
          <div className="text-center mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Lynndabel</h1>
            <div className="flex justify-center">
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-pink-500 to-purple-600 inline-block mb-4 text-white">
                Blockchain Developer
              </span>
            </div>
            <p className="text-lg text-purple-200 mb-6 max-w-xs mx-auto">
              Creating digital experiences & exploring blockchain innovations
            </p>

            <div
              className="bg-gray-800 bg-opacity-50 rounded-lg p-3 mb-6 backdrop-blur-sm break-all relative group cursor-pointer"
              onClick={copyToClipboard}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-purple-200 block text-left mb-1">Ethereum Address</span>
                  <span className="text-sm font-mono text-white">0x3BFbE4E3dCC472E9B1bdFC0c177dE3459Cf769bf</span>
                </div>
                <div className="ml-2">
                  {copied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="fill-green-400"
                    >
                      <path d="M9 16.1716L19.5 5.67163L20.9142 7.08584L9 19L3.5 13.5L4.91421 12.0858L9 16.1716Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="fill-white"
                    >
                      <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 21.0066V8.99337C3 8.44465 3.44554 8 4.00666 8H6.9998V6ZM5.00307 10L5 20H14.9967L15 10H5.00307ZM8.9998 6H18.9998V4H8.9998V6ZM8.9998 8V16H18.9998V8H8.9998Z" />
                    </svg>
                  )}
                </div>
              </div>

              <div
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black bg-opacity-80 text-white text-xs rounded transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
              >
                Copied!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <a
              href="http://x.com/Lynndabel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-white group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="mr-3 fill-white"
              >
                <path d="M8 2H1L9.26086 13.0145L1.44995 22H4.09998L10.4883 14.431L16 22H23L14.3917 10.4854L21.8001 2H19.1501L13.1643 9.06445L8 2ZM19 20L5 4H7L21 20H19Z" />
              </svg>
              <span className="font-medium">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity fill-white"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
              </svg>
            </a>
            <a
              href="https://github.com/Lynndabel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-white group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="mr-3 fill-white"
              >
                <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z" />
              </svg>
              <span className="font-medium">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity fill-white"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
