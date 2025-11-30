"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/public/logo.png";
import { Section } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    let frame: any;
    const animate = () => {
      setTime(Date.now());
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-cyan-400/20"
          : "bg-transparent"
      }`}
      style={{
        transform: isClient
          ? `translateY(${Math.sin(time * 0.002) * 2}px)`
          : "translateY(0px)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            style={{
              transform: isClient
                ? `perspective(500px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`
                : "none",
            }}
          >
            <Image src={logo} alt="logo" className="w-[220px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.name)}
                className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group rounded-full"
                style={{
                  transform: isClient
                    ? `translateY(${Math.sin(time * 0.001 + index * 0.5) * 2}px)`
                    : "translateY(0px)",
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-8 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1xoYR8MhbbfuflN1xt5453n93FyBlth83"
              rel="noopener noreferrer"
              className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300"
              style={{
                transform: isClient
                  ? `perspective(500px) rotateX(${-mousePosition.y * 2}deg)`
                  : "none",
                boxShadow: `0 10px 25px rgba(6, 182, 212, 0.2)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10">Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              transform: isClient
                ? `rotateZ(${Math.sin(time * 0.002) * 3}deg)`
                : "rotateZ(0deg)",
            }}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-b border-cyan-400/20 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="py-6 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-cyan-500/10 border-l-4 border-transparent hover:border-cyan-400"
                style={{
                  transform: `translateX(${isMobileMenuOpen ? 0 : -20}px)`,
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-6 pt-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1xoYR8MhbbfuflN1xt5453n93FyBlth83"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-0 right-20 w-20 h-20 pointer-events-none">
        <div
          className="w-3 h-3 bg-cyan-400/30 rounded-full absolute top-4 right-4"
          style={{
            transform: isClient
              ? `
              translateX(${Math.sin(time * 0.001) * 10}px)
              translateY(${Math.cos(time * 0.0015) * 8}px)
            `
              : "translate(0px, 0px)",
          }}
        />
        <div
          className="w-2 h-2 bg-blue-400/40 rounded-full absolute top-8 right-12"
          style={{
            transform: isClient
              ? `
              translateX(${Math.sin(time * 0.0012 + 1) * 8}px)
              translateY(${Math.cos(time * 0.0008 + 1) * 10}px)
            `
              : "translate(0px, 0px)",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
