"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "mostafa.hamdi.dev@gmail.com",
      link: "mailto:mostafa.hamdi.dev@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+20 1207715484",
      link: "tel:+201207715484",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Cairo, Egypt",
      link: "#",
    },
  ];

  const socials = [Github, Linkedin, Twitter];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map(({ icon: Icon, title, detail, link }, i) => (
              <a
                key={i}
                href={link}
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
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-400/20">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
