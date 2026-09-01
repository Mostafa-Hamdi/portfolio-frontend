"use client";
import { useEffect, useRef } from "react";
import { ShoppingBag, Layers, Server, Workflow, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "../providers";
import PulseDot from "./PulseDot";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS = [ShoppingBag, Layers, Server, Workflow];

const About = () => {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: badgeRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (introRef.current) {
        gsap.fromTo(
          introRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      const isMobile = window.innerWidth < 768;
      if (!isMobile && sectionRef.current) {
        const blobs = sectionRef.current.querySelectorAll(".bg-blob");
        blobs.forEach((blob, index) => {
          gsap.to(blob, {
            y: index % 2 === 0 ? -50 : 50,
            x: index % 2 === 0 ? 30 : -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-[60px] pb-10 relative overflow-hidden"
      id="approach"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="bg-blob absolute top-20 start-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        <div className="bg-blob absolute bottom-20 end-10 w-96 h-96 bg-brand-cyan/5 rounded-3xl blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-6"
          >
            <PulseDot />
            <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase">
              {t.approach.badge}
            </span>
          </div>
          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-text-primary">{t.approach.titleSolid}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.approach.titleColored}
            </span>
          </h2>
          <p ref={introRef} className="text-text-muted leading-relaxed text-lg">
            {t.approach.intro}{" "}
            <span className="text-brand-cyan-tint font-semibold">
              {t.approach.introHighlight}
            </span>
          </p>
        </div>

        {/* Capability Pillars */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {t.approach.capabilities.map((cap, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={cap.title}
                className="p-8 rounded-3xl bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/15 hover:border-brand-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/25 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {cap.title}
                    </h3>
                    <p className="text-text-faint text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 mt-4">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-text-muted"
                    >
                      <Check className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
