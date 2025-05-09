export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-base-200 to-base-300 p-8">
      <div className="max-w-3xl w-full bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-2xl rounded-2xl p-10 border border-pink-100 hover:shadow-pink-200/20 transition-all duration-300">
        <div className="flex flex-col items-center gap-6">
          {/* Avatar  */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-36 h-36 rounded-full ring-2 ring-white ring-offset-4 ring-offset-pink-50 shadow-md overflow-hidden hover:scale-105 transition-all duration-300">
              <svg width="" height="" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#F9D5D3" />
                <circle cx="60" cy="45" r="20" fill="#FFE0BD" />
                <path d="M40 90c0-15 40-15 40 0v5H40v-5z" fill="#FFE0BD" />
                <path d="M40 50c0-10 10-20 20-20s20 10 20 20-10 20-20 20-20-10-20-20z" fill="#3E2723" />
                <path d="M60 65c10 0 20 10 20 25H40c0-15 10-25 20-25z" fill="#F48FB1" />
                <circle cx="50" cy="42" r="3" fill="#000" />
                <circle cx="70" cy="42" r="3" fill="#000" />
                <path d="M52 50c2 2 6 2 8 0" stroke="#000" stroke-width="1.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-3 text-center">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text hover:scale-105 transition-transform cursor-default">
              0xRampop
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-md">
              ✨ Web3 Fullstack Developer | BuidlGuidl Builder | Technical Writer | DeFi Enthusiast ✨
            </p>
          </div>

          {/* Address with copy functionality */}
          <div className="group relative">
            <div className="text-sm font-mono bg-white/10 text-black px-6 py-3 rounded-xl shadow-inner border border-gray-200 hover:bg-white transition-colors cursor-copy">
              0xb216270aFB9DfcD611AFAf785cEB38250863F2C9
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-500 transition-opacity">
              Click to copy
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/Rampop01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md normal-case hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a
              href="https://https://x.com/OmowumiRahmat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-md normal-case hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-info/30"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
