"use client";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";
import logoVector from "@/public/vector.png";
import Image from "next/image";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Solutions", href: "#" },
      { name: "E-Commerce", href: "#" },
      { name: "CMS Development", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, link: "#", name: "Github" },
    { icon: Linkedin, link: "#", name: "LinkedIn" },
    { icon: Twitter, link: "#", name: "Twitter" },
  ];

  return (
    <footer className="relative bg-slate-950\/80 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="logo">
                <Image src={logoVector} alt="" className="w-[80px]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Mostafa Hamdi
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer crafting exceptional digital experiences
                with cutting-edge technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:mostafa.hamdi.dev@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">mostafa.hamdi.dev@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201207715484"
                  className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+20 1207715484</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Cairo, Egypt</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mostafa Hamdi. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> All
            rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
