"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface StackItem {
  heading: string;
  skills: string[];
}

interface HeroData {
  badge: string;
  heading: {
    solid: string;
    colored: string;
  };
  solidOne: string;
  coloredOne: string;
  solidTwo: string;
  coloredTwo: string;
  solidThird: string;
  stackOne: StackItem;
  stackTwo: StackItem;
  btnOne: string;
  btnTwo: string;
  image: string;
}

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleSolidRef = useRef<HTMLSpanElement>(null);
  const titleColoredRef = useRef<HTMLSpanElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const stackCardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const duration = isMobile ? 0.4 : 0.5;
    const stagger = 0.08;

    // Timeline for initial animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Badge animation
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" },
    );

    // Title animations
    tl.fromTo(
      titleSolidRef.current,
      { opacity: 0, x: -30, rotateX: -15 },
      { opacity: 1, x: 0, rotateX: 0, duration: 0.5 },
      "-=0.2",
    );
    tl.fromTo(
      titleColoredRef.current,
      { opacity: 0, x: 30, rotateX: 15 },
      { opacity: 1, x: 0, rotateX: 0, duration: 0.5 },
      "-=0.4",
    );

    // Accent line
    tl.fromTo(
      accentLineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "elastic.out(1,0.5)",
        transformOrigin: "left",
      },
      "-=0.2",
    );

    // Description
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3",
    );

    // Stack cards
    if (stackCardsRef.current) {
      const cards = stackCardsRef.current.children;
      tl.fromTo(
        cards,
        { opacity: 0, rotateY: -45, x: -20 },
        {
          opacity: 1,
          rotateY: 0,
          x: 0,
          duration: 0.5,
          stagger: stagger,
          ease: "back.out(1.2)",
        },
        "-=0.2",
      );
    }

    // Buttons
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children;
      tl.fromTo(
        buttons,
        { opacity: 0, scale: 0.8, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.5)",
        },
        "-=0.2",
      );
    }

    // Image
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: isMobile || isTablet ? 0 : 40,
        y: isMobile ? 20 : 0,
        scale: 0.9,
      },
      { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.8",
    );
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(`${id}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-[100px] pb-16 flex items-center"
      id="home"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto px-6">
        {/* Left Content */}
        <div className="space-y-5">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-sm"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-cyan-300 text-xs font-medium tracking-[0.2em] uppercase">
              {data?.badge}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
              <span ref={titleSolidRef} className="block text-white">
                {data?.heading?.solid}
              </span>
              <span
                ref={titleColoredRef}
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
                }}
              >
                {data?.heading?.colored}
              </span>
            </h1>

            {/* Accent Line */}
            <div ref={accentLineRef} className="flex items-center gap-3 pt-2">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl font-light"
          >
            {data?.solidOne}{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text font-semibold">
                {data?.coloredOne}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400"></span>
            </span>{" "}
            {data?.solidTwo}{" "}
            <span className="text-cyan-400 font-semibold">
              {data?.coloredTwo}
            </span>{" "}
            {data?.solidThird}
          </p>

          {/* Stack Cards */}
          <div ref={stackCardsRef} className="grid grid-cols-2 gap-4 pt-2">
            <div className="group space-y-1.5 p-3 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                <div className="text-cyan-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  {data?.stackOne?.heading}
                </div>
              </div>
              <div className="text-gray-200 font-medium text-sm">
                {data.stackOne.skills.map((skill, index) =>
                  data.stackOne.skills.length === index + 1
                    ? `${skill}`
                    : `${skill} • `,
                )}
              </div>
            </div>

            <div className="group space-y-1.5 p-3 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <div className="text-blue-400 text-[10px] font-semibold tracking-[0.15em] uppercase">
                  {data?.stackTwo?.heading}
                </div>
              </div>
              <div className="text-gray-200 font-medium text-sm">
                {data.stackTwo.skills.map((skill, index) =>
                  data.stackTwo.skills.length === index + 1
                    ? `${skill}`
                    : `${skill} • `,
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 pt-3"
          >
            <button
              onClick={() => handleScrollTo("portfolio")}
              className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {data?.btnOne}
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

            <button
              onClick={() => handleScrollTo("contact")}
              className="group cursor-pointer relative px-8 py-4 border-2 border-cyan-400/40 text-cyan-300 font-bold rounded-2xl overflow-hidden hover:text-white transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/60 hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {data?.btnTwo}
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
        <div
          ref={imageRef}
          className="flex items-center justify-center lg:justify-end"
        >
          <Image
            src={`${data?.image}`}
            alt="Mostafa Hamdi - Full Stack Developer"
            width={450}
            height={700}
            className="w-full max-w-[400px] lg:max-w-[450px] rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
