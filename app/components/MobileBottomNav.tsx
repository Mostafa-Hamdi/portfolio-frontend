"use client";
import { useEffect, useRef, useState } from "react";
import { Home, LayoutGrid, Briefcase, Phone, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { useApp } from "../providers";

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

const SECTION_IDS = ["home", "approach", "services", "portfolio", "contact"];

const MobileBottomNav = () => {
  const { t } = useApp();
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLAnchorElement>(null);

  const items = [
    { id: "home", label: t.header.nav.home, Icon: Home },
    { id: "services", label: t.header.nav.services, Icon: LayoutGrid },
    { id: "portfolio", label: t.header.nav.work, Icon: Briefcase },
    { id: "contact", label: t.header.nav.contact, Icon: Phone },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: "power3.out" },
    );

    gsap.to(fabRef.current, {
      boxShadow: "0 8px 35px rgba(34,211,238,0.65)",
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) current = section.id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderItem = (item: (typeof items)[number]) => {
    const isActive = active === item.id;
    return (
      <button
        key={item.id}
        onClick={() => handleNav(item.id)}
        className="relative flex flex-col items-center justify-center gap-1 py-2 cursor-pointer"
      >
        {isActive && (
          <span className="absolute -top-0.5 w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        )}
        <item.Icon
          className={`w-5 h-5 transition-colors duration-300 ${
            isActive ? "text-brand-cyan" : "text-text-faint"
          }`}
        />
        <span
          className={`text-[10px] font-semibold tracking-wide transition-colors duration-300 ${
            isActive ? "text-brand-cyan" : "text-text-faint"
          }`}
        >
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <div
      ref={navRef}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)]"
    >
      <div className="relative mx-auto max-w-md rounded-[28px] bg-surface/85 backdrop-blur-2xl border border-brand-cyan/20 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-5 items-center h-[68px]">
          {renderItem(items[0])}
          {renderItem(items[1])}
          <div aria-hidden="true" />
          {renderItem(items[2])}
          {renderItem(items[3])}
        </div>

        {/* Raised WhatsApp FAB */}
        <a
          ref={fabRef}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_8px_25px_rgba(34,211,238,0.5)] border-4 border-surface active:scale-95 transition-transform duration-200"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default MobileBottomNav;
