import Image from "next/image";
import React from "react";
import personalImg from "@/public/aa.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen  pt-[100px] pb-16 flex items-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto px-6">
        {/* Left Content */}
        <div className="space-y-5">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-cyan-300 text-xs font-medium tracking-[0.2em] uppercase">
              Open to Opportunities
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
              <span className="block text-white">Full-Stack</span>
              <span
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
                }}
              >
                Developer
              </span>
            </h1>

            {/* Animated Accent Line */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl font-light">
            Building{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text font-semibold">
                scalable web applications
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400"></span>
            </span>{" "}
            with Node.js, React, and Next.js. Transforming ideas into elegant
            solutions with{" "}
            <span className="text-cyan-400 font-semibold">10+ projects</span>{" "}
            delivered.
          </p>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="group space-y-1.5 p-3 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Backend Stack
                </div>
              </div>
              <div className="text-gray-200 font-medium text-sm">
                Node.js • Strapi • WordPress
              </div>
            </div>

            <div className="group space-y-1.5 p-3 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <div className="text-blue-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Frontend Stack
                </div>
              </div>
              <div className="text-gray-200 font-medium text-sm">
                React • Next.js • Headless CMS
              </div>
            </div>
          </div>

          {/* Stats Cards - Moved before buttons */}
          {/* <div className="flex flex-wrap gap-4 pt-2">
            <div className="group relative p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative space-y-0.5">
                <div className="text-cyan-400/70 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Experience
                </div>
                <div className="text-4xl font-black bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-gray-400 text-xs font-medium">Years</div>
              </div>
            </div>

            <div className="group relative p-4 rounded-xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative space-y-0.5">
                <div className="text-blue-400/70 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  Completed
                </div>
                <div className="text-4xl font-black bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 text-xs font-medium">
                  Projects
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-3">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button className="group relative px-8 py-4 border-2 border-cyan-400/40 text-cyan-300 font-bold rounded-2xl overflow-hidden hover:text-white transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's Connect
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src={personalImg}
            alt="Mostafa Hamdi - Full Stack Developer"
            className="w-full max-w-[400px] lg:max-w-[450px] rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
