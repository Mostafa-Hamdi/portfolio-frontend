"use client";
import { useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download,
  Sparkles,
} from "lucide-react";

const About = ({ data }: any) => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      role: "Frontend & Wordpress Developer",
      company: "ABG Egypt",
      description: `Developed native and framework-based websites using React and WordPress.  
Implemented headless WordPress solutions integrated with React for dynamic and modern web applications.  
Debugged and maintained systems to ensure smooth performance and reliability.  
Designed and built a responsive SFA (Sales Force Automation) dashboard with modern UI for improved user experience and efficiency.`,
      period: "Jul 2024 - Present",
    },
    {
      role: "Wordpress Developer",
      company: "Spunto",
      description: `Developed and customized WordPress websites, including themes and plugins.  
Implemented responsive designs using HTML, CSS, and JavaScript.  
Integrated WordPress with modern front-end frameworks for headless setups.  
Managed deployments, debugged issues, and optimized website performance for reliability and speed.`,
      period: "Jun 2025 - Present",
    },
    {
      role: "Instructor",
      company: "AiArena Academy",
      description: `Taught web development fundamentals, focusing on HTML, CSS, and JavaScript.  
Guided students in building responsive, modern websites and interactive UI components.  
Provided hands-on debugging support and best practices for clean and maintainable code.  
Mentored students on creating projects with practical applications and real-world web standards.`,
      period: "jul 2025 - Aug 2025",
    },
  ];

  useEffect(() => {
    // Load GSAP from CDN
    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    script2.onload = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const isMobile = window.innerWidth < 768;

      // Header animations
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Profile card with 3D effect
      gsap.fromTo(
        profileCardRef.current,
        { opacity: 0, x: -50, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: profileCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Stats cards stagger
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Skills stack animation
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, x: -30, rotateX: -10 },
          {
            opacity: 1,
            x: 0,
            rotateX: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Story section with slide effect
      gsap.fromTo(
        storyRef.current,
        { opacity: 0, x: 50, rotateY: 10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Experience cards cascade
      if (experiencesRef.current) {
        gsap.fromTo(
          experiencesRef.current.children,
          { opacity: 0, y: 40, x: 30 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: experiencesRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Parallax effect for background blobs (desktop only)
      if (!isMobile && sectionRef.current) {
        const blobs = sectionRef.current.querySelectorAll(".bg-blob");
        blobs.forEach((blob, index) => {
          gsap.to(blob, {
            y: index % 2 === 0 ? -50 : 50,
            x: index % 2 === 0 ? 30 : -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      }
    };

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const skills = [
    data?.stacks?.frontend,
    data?.stacks?.backend,
    data?.stacks?.cms,
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-[60px] relative overflow-hidden"
      id="about"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6"
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div
                ref={profileCardRef}
                className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-400/20"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-4 border-cyan-400/30 flex items-center justify-center">
                      <span className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {data?.personalInfo?.name
                          ?.split(" ")
                          ?.map((n: any) => n[0])
                          ?.join("")}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {data?.personalInfo?.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">
                    {data?.personalInfo?.jobTitle}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{data?.personalInfo?.location}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">{data?.personalInfo?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">{data?.personalInfo?.phone}</span>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/uc?export=download&id=1xoYR8MhbbfuflN1xt5453n93FyBlth83"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 inline mr-2" />
                  Download CV
                </a>
              </div>

              {/* Quick Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-cyan-400/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-3xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {data?.statics?.projects?.number}
                  </div>
                  <div className="text-gray-400 text-xs font-semibold">
                    {data?.statics?.projects?.text}
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-blue-400/20 text-center hover:border-blue-400/40 transition-all duration-300">
                  <div className="text-3xl font-black bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    {data?.statics?.experience?.number}
                  </div>
                  <div className="text-gray-400 text-xs font-semibold">
                    {data?.statics?.experience?.text}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div ref={skillsRef} className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Tech Stack</h4>
                </div>

                {skills.map((stack, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-cyan-400/20 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <span className="font-bold text-white block mb-2">
                      {stack?.heading}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stack?.skills?.map((skill: any, i: any) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-[10px] font-medium hover:bg-cyan-500/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story */}
            <div
              ref={storyRef}
              className="p-8 rounded-3xl border border-cyan-400/20 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                {data?.story?.heading}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {data?.story?.paragraph}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Experiences
              </h3>
              <div ref={experiencesRef} className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <h4 className="font-bold text-lg text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-cyan-400 text-sm font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
