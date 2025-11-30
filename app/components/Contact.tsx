"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";
import * as yup from "yup";
import { useEffect, useRef } from "react";

export default function Contact({ data }: any) {
  const headerRef = useRef(null);
  const infoCardsRef = useRef([]);
  const socialsRef = useRef(null);
  const formRef = useRef(null);

  const contactInfo = [
    {
      icon: Mail,
      title: data?.emailContent?.label,
      detail: data?.emailContent?.email,
      link: "mailto:mostafa.hamdi.dev@gmail.com",
    },
    {
      icon: Phone,
      title: data?.phoneContent?.label,
      detail: data?.phoneContent?.phone,
      link: "tel:+201207715484",
    },
    {
      icon: MapPin,
      title: data?.locationContent?.label,
      detail: data?.locationContent?.location,
      link: "#",
    },
  ];

  const socials = [
    { icon: Github, link: "https://github.com/Mostafa-Hamdi" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/mostafa-hamdi/" },
  ];

  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    phone: yup.string().required("Phone is required"),
    message: yup.string().required("Message is required"),
  });

  useEffect(() => {
    // Load GSAP scripts
    const loadGSAP = () => {
      // Check if GSAP is already loaded
      if (typeof window !== "undefined" && (window as any).gsap) {
        initAnimations();
        return;
      }

      // Load GSAP core
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      gsapScript.async = true;

      gsapScript.onload = () => {
        // Load ScrollTrigger plugin
        const scrollTriggerScript = document.createElement("script");
        scrollTriggerScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        scrollTriggerScript.async = true;

        scrollTriggerScript.onload = () => {
          initAnimations();
        };

        document.head.appendChild(scrollTriggerScript);
      };

      document.head.appendChild(gsapScript);
    };

    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      // Animate header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate contact info cards
      infoCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: -60,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // Animate socials card
      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current,
          {
            opacity: 0,
            x: -60,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.45,
            ease: "power3.out",
            scrollTrigger: {
              trigger: socialsRef.current,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate form
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            x: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    };

    loadGSAP();

    // Cleanup
    return () => {
      if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((trigger: any) =>
          trigger.kill(),
        );
      }
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
              {data?.badge}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{data?.heading?.solid} </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {data?.heading?.colored}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{data?.paragraph}</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map(({ icon: Icon, title, detail, link }, i) => (
              <a
                key={i}
                href={link}
                ref={(el) => (infoCardsRef.current[i] = el)}
                className="block p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-[2px]">
                    <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm">{detail}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div
              ref={socialsRef}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-400/20"
            >
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2" ref={formRef}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
