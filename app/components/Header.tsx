"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, Languages } from "lucide-react";
import { useApp } from "../providers";

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

interface SwitcherButtonsProps {
  className?: string;
  lang: "ar" | "en";
}

const SwitcherButtons = ({ className = "", lang }: SwitcherButtonsProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <Link
      href={lang === "ar" ? "/en" : "/"}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold tracking-wide text-text-muted hover:text-brand-cyan border border-surface-border hover:border-brand-cyan/40 transition-all duration-300"
      aria-label="Switch language"
    >
      <Languages className="w-3.5 h-3.5" />
      {lang === "ar" ? "EN" : "AR"}
    </Link>
  </div>
);

const Header = () => {
  const { t, lang } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the mobile menu when clicking/tapping outside of it
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: t.header.nav.home, href: "home" },
    { name: t.header.nav.approach, href: "approach" },
    { name: t.header.nav.services, href: "services" },
    { name: t.header.nav.work, href: "portfolio" },
    { name: t.header.nav.contact, href: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface/85 backdrop-blur-lg border-b border-brand-cyan/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("home");
            }}
            className="flex items-center group cursor-pointer"
            aria-label="Mostafa Hamdi — Home"
          >
            <img
              src="/brand/logo-dark.svg"
              alt="Mostafa Hamdi — Web Development & Custom Coding"
              width={220}
              height={51}
              className="w-[190px] sm:w-[220px] h-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollTo(item.href)}
                className="relative px-5 py-3 text-text-muted hover:text-text-primary font-medium transition-all duration-300 group rounded-full"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-brand-cyan/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-cyan group-hover:w-8 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA + Switchers */}
          <div className="hidden md:flex items-center gap-4">
            <SwitcherButtons lang={lang} />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-[0_10px_25px_rgba(34,211,238,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="relative z-10">{t.header.cta}</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <SwitcherButtons lang={lang} />
            <button
              ref={toggleButtonRef}
              className="relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-brand-cyan rounded-full transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-full h-0.5 bg-brand-cyan rounded-full transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-cyan rounded-full transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-lg border-b border-brand-cyan/20 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="py-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollTo(item.href)}
                className="w-full text-start block px-6 py-4 text-text-muted hover:text-text-primary font-medium transition-all duration-300 hover:bg-brand-cyan/10 border-s-4 border-transparent hover:border-brand-cyan"
              >
                {item.name}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-3 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              {t.header.cta}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
