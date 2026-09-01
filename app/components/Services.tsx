"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingCart,
  AppWindow,
  Gauge,
  Server,
  Workflow,
  LifeBuoy,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { useApp } from "../providers";
import PulseDot from "./PulseDot";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

const ICONS = [ShoppingCart, AppWindow, Gauge, Server, Workflow, LifeBuoy];

const Services = () => {
  const { t, dir } = useApp();
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 80,
            scale: 0.9,
            duration: 0.7,
            ease: "power3.out",
            delay: index * 0.1,
          });
        }
      });

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pb-15 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-6 hover:bg-brand-cyan/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <PulseDot />
            <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase">
              {t.services.badge}
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-text-primary">{t.services.titleSolid}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.services.titleColored}
            </span>
          </h2>
          <p className="text-text-faint text-lg">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/20 backdrop-blur-sm hover:border-brand-cyan/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)] transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-brand-cyan/5"></div>
                    <div className="absolute top-0 -start-full w-1/2 h-full bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent skew-x-12 group-hover:start-full transition-all duration-1000"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-700"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-blue p-[2px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <div className="w-full h-full rounded-[14px] bg-surface flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-brand-cyan group-hover:text-text-primary group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                      {service.title}
                    </h3>

                    <p className="text-text-faint leading-relaxed mb-8 group-hover:text-text-muted transition-colors duration-500">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.bullets.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-blue p-[2px] group-hover/feature:scale-125 group-hover/feature:rotate-180 transition-all duration-500">
                            <div className="w-full h-full rounded-[6px] bg-surface flex items-center justify-center">
                              <Check className="w-3 h-3 text-brand-cyan" />
                            </div>
                          </div>
                          <span className="text-sm text-text-faint group-hover/feature:text-brand-cyan-tint group-hover/feature:translate-x-1 transition-all duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -top-20 -end-20 w-40 h-40 bg-gradient-to-br from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full"></div>
                  <div className="absolute -bottom-20 -start-20 w-40 h-40 bg-gradient-to-tr from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Luxury CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="inline-block relative group">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex px-5 md:px-16 py-6 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white text-lg font-bold overflow-hidden group-hover:scale-105 transition-all duration-500 border border-brand-cyan/20"
            >
              <div className="relative flex items-center gap-4">
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
                <span>{t.services.ctaButton}</span>
                <ArrowRight
                  className={`w-6 h-6 group-hover:translate-x-3 transition-transform duration-300 ${
                    dir === "rtl" ? "rotate-180 group-hover:-translate-x-3 group-hover:translate-x-0" : ""
                  }`}
                />
              </div>
            </a>
          </div>

          <p className="mt-8 text-text-faint-2 text-sm font-medium">
            {t.services.ctaMessage}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
