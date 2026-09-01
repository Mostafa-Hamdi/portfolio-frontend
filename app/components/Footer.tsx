"use client";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";
import whatsapp from "@/public/whatsapp.png";
import Image from "next/image";
import { useApp } from "../providers";
import TikTokIcon from "./icons/TikTokIcon";

const WHATSAPP_LINK =
  "https://wa.me/201207715484?text=Hi%20Mostafa%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project.";

const Footer = () => {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigation = [
    { name: t.header.nav.home, id: "home" },
    { name: t.header.nav.approach, id: "approach" },
    { name: t.header.nav.services, id: "services" },
    { name: t.header.nav.work, id: "portfolio" },
    { name: t.header.nav.contact, id: "contact" },
  ];

  const socialLinks = [
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
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/mostafa-hamdi",
      name: "LinkedIn",
    },
  ];

  return (
    <footer className="relative bg-surface border-t border-surface-border pb-24 md:pb-0">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/brand/icon-dark.svg"
                alt="Mostafa Hamdi"
                width={52}
                height={52}
                className="w-[52px] mb-4"
              />
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Mostafa Hamdi
              </h3>
              <p className="text-text-faint text-sm leading-relaxed">
                {t.footer.tagline}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-text-faint hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-surface-elevated-strong hover:scale-110 transition-all duration-300"
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
            <h4 className="text-text-primary font-bold mb-6 text-sm uppercase tracking-wider">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="cursor-pointer text-text-faint hover:text-brand-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-brand-cyan group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-sm uppercase tracking-wider">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {t.footer.servicesList.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => handleScrollTo("services")}
                    className="cursor-pointer text-text-faint hover:text-brand-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-brand-cyan group-hover:w-4 transition-all duration-300"></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-sm uppercase tracking-wider">
              {t.footer.getInTouch}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@mostafahamdi.com"
                  className="flex items-start gap-3 text-text-faint hover:text-brand-cyan transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@mostafahamdi.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201207715484"
                  className="flex items-start gap-3 text-text-faint hover:text-brand-cyan transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+20 120 771 5484</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-text-faint">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{t.footer.worldwide}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-text-faint text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mostafa Hamdi. {t.footer.rights}
          </p>
        </div>

        {/* WhatsApp Button - Above Scroll to Top (desktop only — mobile has the bottom nav FAB) */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-24 end-8 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-text-primary items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/50 z-50 group"
          aria-label="Contact on WhatsApp"
        >
          <Image src={whatsapp} width={50} height={50} alt="" className="w-8" />
        </a>

        {/* Scroll to Top Button (desktop only) */}
        <button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 end-8 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue text-white items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-brand-cyan/50 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;
