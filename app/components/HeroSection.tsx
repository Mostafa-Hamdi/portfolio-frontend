"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Code2, ShoppingCart, Zap, Braces } from "lucide-react";
import { useApp } from "../providers";
import PulseDot from "./PulseDot";
import { projects } from "../data/projects";

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

const SHOWCASE_IMAGES = projects.map((p) => p.image);

const FLOATING_BADGES = [
  { Icon: ShoppingCart, className: "top-[2%] start-[0%]" },
  { Icon: Code2, className: "top-[8%] end-[-2%]" },
  { Icon: Zap, className: "bottom-[16%] start-[-3%]" },
  { Icon: Braces, className: "bottom-[2%] end-[4%]" },
];

const TECH_FILTERS = [
  { key: "shopify", labelKey: "shopify" },
  { key: "wordpress", labelKey: "wordpress" },
  { key: "custom", labelKey: "customCoding" },
] as const;

const HeroSection = () => {
  const { t, dir, setProjectTechFilter } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleSolidRef = useRef<HTMLSpanElement>(null);
  const titleColoredRef = useRef<HTMLSpanElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;

    const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" },
    );

    tl.fromTo(
      titleSolidRef.current,
      { opacity: 0, x: dir === "rtl" ? 30 : -30, rotateX: -15 },
      { opacity: 1, x: 0, rotateX: 0, duration: 0.5 },
      "-=0.2",
    );
    tl.fromTo(
      titleColoredRef.current,
      { opacity: 0, x: dir === "rtl" ? -30 : 30, rotateX: 15 },
      { opacity: 1, x: 0, rotateX: 0, duration: 0.5 },
      "-=0.4",
    );

    tl.fromTo(
      accentLineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.6,
        ease: "elastic.out(1,0.5)",
        transformOrigin: dir === "rtl" ? "right" : "left",
      },
      "-=0.2",
    );

    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3",
    );

    if (statsRef.current) {
      tl.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        "-=0.2",
      );
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.children,
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

    // ---- Laptop showcase entrance ----
    tl.fromTo(
      sceneRef.current,
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.7",
    );

    tl.fromTo(
      badgesRef.current,
      { opacity: 0, scale: 0.4, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.8)",
      },
      "-=0.4",
    );

    // Screenshot crossfade carousel
    const slides = slidesRef.current.filter(Boolean) as HTMLDivElement[];
    if (slides.length > 1) {
      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { opacity: 1 });
      const carousel = gsap.timeline({ repeat: -1, delay: 1.5 });
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % slides.length];
        carousel
          .to({}, { duration: 2.6 })
          .to(slide, { opacity: 0, duration: 0.8, ease: "power1.inOut" })
          .to(next, { opacity: 1, duration: 0.8, ease: "power1.inOut" }, "<");
      });
    }

    // Gentle floating for the laptop
    if (laptopRef.current) {
      gsap.to(laptopRef.current, {
        y: isMobile ? -8 : -14,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Floating badges
    badgesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: i % 2 === 0 ? -14 : 14,
        duration: 2.4 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });

    // Mouse parallax tilt on the laptop
    if (!isMobile && !isTablet && sceneRef.current) {
      const scene = sceneRef.current;
      handleMouseMove = (e: MouseEvent) => {
        const rect = scene.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(laptopRef.current, {
          rotateY: x * 12,
          rotateX: 8 - y * 8,
          duration: 0.6,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
    }
    }, sectionRef);

    return () => {
      ctx.revert();
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dir]);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(`${id}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTechClick = (techKey: string) => {
    setProjectTechFilter(techKey);
    handleScrollTo("portfolio");
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-[100px] pb-16 flex items-center"
      id="home"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto px-6">
        {/* Text Content */}
        <div className="space-y-5">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/30 backdrop-blur-sm"
          >
            <PulseDot />
            <span className="text-brand-cyan-tint text-xs font-medium tracking-[0.2em] uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1
              className={`font-black leading-[1.2] tracking-tight ${
                dir === "rtl"
                  ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                  : "text-4xl sm:text-6xl"
              }`}
            >
              <span ref={titleSolidRef} className="block text-text-primary">
                {t.hero.titleLine1}
              </span>
              <span
                ref={titleColoredRef}
                className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.35))",
                }}
              >
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Accent Line */}
            <div ref={accentLineRef} className="flex items-center gap-3 pt-2">
              <div className="h-1 w-16 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-brand-blue to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-xl font-light"
          >
            {t.hero.description1}{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">
                {t.hero.descriptionHighlight1}
              </span>
              <span className="absolute bottom-0 start-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan to-brand-blue"></span>
            </span>{" "}
            {t.hero.description2}{" "}
            <span className="text-brand-cyan-tint font-semibold">
              {t.hero.descriptionHighlight2}
            </span>
            {t.hero.description3}
          </p>

          {/* Custom Solutions Highlight */}
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            {t.hero.customSolutionsPrefix}{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold">
              {t.hero.customSolutionsHighlight}
            </span>{" "}
            {t.hero.customSolutionsSuffix}
          </p>

          {/* Clickable Tech Filters */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="text-text-faint text-xs font-semibold tracking-wide uppercase me-1">
              {t.hero.techFiltersLabel}
            </span>
            {TECH_FILTERS.map(({ key, labelKey }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleTechClick(key)}
                className="cursor-pointer px-4 py-1.5 rounded-full text-xs font-bold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan-tint hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300"
              >
                {t.hero.techFilters[labelKey]}
              </button>
            ))}
          </div>

          {/* Trust Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-6 pt-2">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-text-faint text-xs font-semibold tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 pt-3"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)] text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.hero.ctaPrimary}
                <svg
                  className={`w-5 h-5 transition-transform ${dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
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
            </a>

            <button
              onClick={() => handleScrollTo("portfolio")}
              className="group cursor-pointer relative px-8 py-4 border-2 border-brand-cyan/40 text-brand-cyan-tint font-bold rounded-2xl overflow-hidden hover:text-white transition-all duration-500 hover:scale-[1.02] hover:border-brand-cyan/60 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.hero.ctaSecondary}
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

        {/* Laptop Showcase */}
        <div className="flex items-center justify-center lg:justify-end">
          <div
            ref={sceneRef}
            className="relative w-full max-w-[520px]"
            style={{ perspective: "1400px" }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-[8%] bg-brand-cyan/10 rounded-full blur-3xl"></div>

            {/* Laptop */}
            <div
              ref={laptopRef}
              className="relative"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(8deg)" }}
            >
              {/* Screen bezel */}
              <div className="relative rounded-t-2xl rounded-b-md bg-brand-navy-light border-[6px] border-[#1a2f3d] shadow-[0_40px_100px_rgba(34,211,238,0.2)] overflow-hidden">
                {/* Camera notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#1a2f3d] rounded-b-lg z-20" />

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  {SHOWCASE_IMAGES.map((src, i) => (
                    <div
                      key={src}
                      ref={(el) => {
                        slidesRef.current[i] = el;
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={src}
                        alt={t.hero.showcaseCaption}
                        fill
                        sizes="(max-width: 1024px) 90vw, 520px"
                        quality={65}
                        className="object-cover object-top"
                        priority={i === 0}
                        loading={i === 0 ? undefined : "eager"}
                      />
                    </div>
                  ))}
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Laptop base */}
              <div className="relative h-4 rounded-b-2xl bg-gradient-to-b from-[#1a2f3d] to-[#0d1b24]">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-cyan/20 rounded-t" />
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1.5 bg-[#0a1720] rounded-b-md" />
              </div>
              <div className="mx-auto h-1.5 w-[70%] rounded-b-xl bg-[#0a1720]" />
            </div>

            {/* Caption */}
            <p className="text-center text-text-faint text-xs font-semibold tracking-wide uppercase mt-6">
              {t.hero.showcaseCaption}
            </p>

            {/* Floating badges */}
            {FLOATING_BADGES.map(({ Icon, className }, i) => (
              <div
                key={i}
                ref={(el) => {
                  badgesRef.current[i] = el;
                }}
                className={`absolute ${className} w-12 h-12 rounded-xl bg-brand-navy-light/90 border border-brand-cyan/30 backdrop-blur-sm flex items-center justify-center shadow-[0_10px_30px_rgba(34,211,238,0.2)]`}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5 text-brand-cyan" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
