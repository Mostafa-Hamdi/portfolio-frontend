"use client";

import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "../providers";
import PulseDot from "./PulseDot";
import TikTokIcon from "./icons/TikTokIcon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

export default function Contact() {
  const { t } = useApp();
  const headerRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      detail: t.contact.whatsappDetail,
      link: WHATSAPP_LINK,
      external: true,
    },
    {
      icon: Mail,
      title: t.contact.email,
      detail: "info@mostafahamdi.com",
      link: "mailto:info@mostafahamdi.com",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      detail: "+20 120 771 5484",
      link: "tel:+201207715484",
    },
    {
      icon: MapPin,
      title: t.contact.location,
      detail: t.contact.locationDetail,
      link: "#",
    },
  ];

  const socials = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=61591766296389",
      name: "Facebook",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/mostafahamdi.web/",
      name: "Instagram",
    },
    {
      icon: TikTokIcon,
      link: "https://www.tiktok.com/@eng.mostafa.hamdi?lang=en",
      name: "TikTok",
    },
    { icon: Linkedin, link: "https://www.linkedin.com/in/mostafa-hamdi/", name: "LinkedIn" },
  ];

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
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

    infoCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: -60, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.12,
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

    if (socialsRef.current) {
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, x: -60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
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

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-6">
            <PulseDot />
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-text-primary">{t.contact.titleSolid}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.contact.titleColored}
            </span>
          </h2>
          <p className="text-text-faint max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map(({ icon: Icon, title, detail, link, external }, i) => (
              <a
                key={title}
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                ref={(el) => {
                  infoCardsRef.current[i] = el ?? null;
                }}
                className="block p-6 rounded-2xl bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/20 hover:border-brand-cyan/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue p-[2px]">
                    <div className="w-full h-full rounded-[10px] bg-surface flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">{title}</h3>
                    <p className="text-text-faint text-sm">{detail}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div
              ref={socialsRef}
              className="p-6 rounded-2xl bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/20"
            >
              <h3 className="text-text-primary font-semibold mb-4">{t.contact.followUs}</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, link, name }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-faint hover:text-brand-cyan hover:border-brand-cyan/30 hover:scale-110 transition-all"
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
