"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Rocket,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  Bug,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = ({ data }: any) => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge
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

      // Animate heading
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

      // Animate service cards with stagger
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
            delay: index * 0.15,
          });
        }
      });

      // Animate CTA
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

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(`${id}`);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Map icons to services dynamically based on available data
  const iconsList = [Code2, Smartphone, ShoppingBag, Zap, Bug, Rocket];
  const gradients = [
    { gradient: "from-cyan-400 to-blue-500", color: "cyan", glowColor: "cyan" },
    { gradient: "from-blue-400 to-cyan-500", color: "blue", glowColor: "blue" },
    { gradient: "from-cyan-500 to-blue-600", color: "cyan", glowColor: "cyan" },
    { gradient: "from-blue-500 to-cyan-400", color: "blue", glowColor: "blue" },
    { gradient: "from-cyan-600 to-blue-400", color: "cyan", glowColor: "cyan" },
    { gradient: "from-blue-600 to-cyan-500", color: "blue", glowColor: "blue" },
  ];

  const services = (data?.services || []).map(
    (service: any, index: number) => ({
      icon: iconsList[index % iconsList.length],
      title: service.heading,
      description: service.description,
      features: service.bullets || [],
      ...gradients[index % gradients.length],
    }),
  );

  return (
    <section ref={sectionRef} className="pb-15 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              {data?.badge}
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-white">{data?.heading?.solid} </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {data?.heading?.colored}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any, index: any) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)] transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-700`}
                      ></div>
                      <div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <div className="w-full h-full rounded-[14px] bg-gray-900 flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-500">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div
                            className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.gradient} p-[2px] group-hover/feature:scale-125 group-hover/feature:rotate-180 transition-all duration-500`}
                          >
                            <div className="w-full h-full rounded-[6px] bg-gray-900 flex items-center justify-center">
                              <Check className="w-3 h-3 text-cyan-400" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-400 group-hover/feature:text-cyan-400 group-hover/feature:translate-x-1 transition-all duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent Lights */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
                  ></div>
                  <div
                    className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Luxury CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="inline-block relative group">
            {/* Button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="relative px-5 md:px-16 py-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-lg font-bold overflow-hidden group-hover:scale-105 group-hover:shadow-[0_20px_90px_rgba(6,182,212,0.0)] transition-all duration-500 border border-cyan-400/20"
            >
              {/* Content */}
              <div className="relative flex items-center gap-4">
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
                <span>{data?.btn}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </button>
          </div>

          <p className="mt-8 text-gray-500 text-sm font-medium">
            {data?.message}
          </p>
        </div>
      </div>
    </section>
  );
};

// Demo with your data
const demoData = {
  heading: {
    solid: "My",
    colored: "Services",
  },
  services: [
    {
      _id: "690fae43869b7a965d82ad4f",
      heading: "Web Development",
      description:
        "I build responsive, high-performance websites using modern technologies to help your business succeed online.",
      bullets: [
        "Custom website development tailored to your brand",
        "Responsive design optimized for all devices",
        "Performance and speed optimization",
        "SEO-friendly and accessible code",
        "Ongoing maintenance and support",
      ],
    },
    {
      _id: "690faffacb1822e6e6aa26fa",
      heading: "E-commerce Solutions",
      description:
        "I create powerful online stores using WooCommerce, Shopify, and custom solutions to boost your sales and customer experience.",
      bullets: [
        "WooCommerce & Shopify store setup",
        "Custom shopping cart and checkout flow",
        "Product catalog management",
        "Payment gateway integration",
        "Performance optimization and maintenance",
      ],
    },
    {
      _id: "69125fedb840b05629dc8ea0",
      heading: "Full-Stack Development",
      description:
        "I develop robust web applications using Next.js, Node.js, and Strapi for scalable and dynamic digital experiences.",
      bullets: [
        "API integration and development",
        "Frontend and backend development",
        "Database design and management",
        "Authentication and security setup",
        "Dynamic content management via Strapi or WordPress",
      ],
    },
  ],
  badge: "What I Offer",
  btn: "Let's Build Something Amazing",
  message:
    "Transform your vision into reality with premium development services",
};

export default function App() {
  return (
    <div className="min-h-screen" id="services">
      <Services data={demoData} />
    </div>
  );
}
