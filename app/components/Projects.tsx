"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* =======================
   STATIC DATA (HERE)
======================= */
const data = {
  badge: "My Work",
  heading: {
    solid: "Featured ",
    colored: "Projects",
  },
  paragraph:
    "Explore my latest work showcasing innovation, creativity, and technical excellence",
  viewBtn: "View All Projects",
  projects: [
    {
      _id: "7",
      heading: "Zeiia",
      paragraph:
        "Zeiia is a software house specializing in web development and digital solutions.",
      type: "Next.js",
      image: "/zeiiaScreen.png",
      siteLink: "https://zeiia.vercel.app/",
      github: "",
      skills: ["Next.js", "Tailwind CSS"],
    },
    {
      _id: "5",
      heading: "Aura CRM System",
      paragraph:
        "Custom CRM solution for managing customers, pipelines, and business growth.",
      type: "Next.js - Admin Dashboard",
      image: "/auraScreen.png",
      siteLink: "https://auracrm-pi.vercel.app",
      github: "",
      skills: ["Next.js", "REST API"],
    },

    {
      _id: "1",
      heading: "Kreaz E-Commerce",
      paragraph:
        "Premium cakes, desserts, chocolates, and handcrafted beverages with a modern e-commerce experience.",
      type: "WooCommerce",
      image: "/kreaz-screen.jpg",
      siteLink: "https://kreazdesserts.com/",
      github: "",
      skills: ["WordPress", "WooCommerce", "Custom Development"],
    },

    {
      _id: "3",
      heading: "EcoPerformance Marketing",
      paragraph:
        "High-conversion marketing platform built for scalability and performance.",
      type: "WordPress",
      image: "/ecoMarketingScreen.png",
      siteLink: "https://ecoperformancemarketing.com/",
      github: "",
      skills: ["WordPress", "SEO", "Custom Theme"],
    },
    {
      _id: "4",
      heading: "Saqr Sahraan Store",
      paragraph:
        "Outdoor & camping e-commerce platform for premium gear in the Middle East.",
      type: "WooCommerce",
      image: "/saqrScreen.jpg",
      siteLink: "https://www.d-falcon.com/",
      github: "",
      skills: ["Custom Development", "E-commerce"],
    },
    {
      _id: "2",
      heading: "Asia Healthcare Store",
      paragraph:
        "A leading health & wellness online store offering quality medical and lifestyle products.",
      type: "WooCommerce",
      image: "/asiaCover.png",
      siteLink: "https://asiaegy.com/",
      github: "",
      skills: ["WordPress", "UI/UX", "Performance"],
    },
    {
      _id: "8",
      heading: "Veda",
      paragraph: "Veda is made by using React.js and Headless WordPress.",
      type: "React.js - Headless WordPress",
      image: "/vedaScreen.png",
      siteLink: "https://letsveda.com/",
      github: "",
      skills: ["React.js", "Headless WordPress"],
    },
    {
      _id: "11",
      heading: "Newtoptrade",
      paragraph:
        "Newtoptrade is a B2B marketplace for importing and exporting products.",
      type: "ZohoSites",
      image: "/newtoptradeScreen.png",
      siteLink: "https://newtoptrade.com/",
      github: "",
      skills: ["ZohoSites"],
    },
  ],
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<Array<HTMLDivElement | null>>([]);

  /* =======================
     FILTER LOGIC
  ======================= */
  const projectTypes = ["All", ...new Set(data.projects.map((p) => p.type))];

  const filteredProjects =
    activeFilter === "All"
      ? data.projects
      : data.projects.filter((p) => p.type === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const parseSkills = (skills: any[]) => {
    if (!skills || skills.length === 0) return [];
    return skills
      .map((skill) => {
        try {
          if (typeof skill === "string" && skill.startsWith("[")) {
            return JSON.parse(skill);
          }
          return skill;
        } catch {
          return skill;
        }
      })
      .flat();
  };

  /* =======================
     GSAP ANIMATIONS
  ======================= */
  useEffect(() => {
    const loadGSAP = () => {
      if ((window as any).gsap) {
        initAnimations();
        return;
      }

      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";

      gsapScript.onload = () => {
        const st = document.createElement("script");
        st.src =
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
        st.onload = initAnimations;
        document.head.appendChild(st);
      };

      document.head.appendChild(gsapScript);
    };

    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          },
        );
      }

      projectsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });
    };

    loadGSAP();
    return () =>
      (window as any)?.ScrollTrigger?.getAll()?.forEach((t: any) => t.kill());
  }, [displayedProjects]);

  /* =======================
     RENDER
  ======================= */
  return (
    <section className="py-10 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold uppercase">
              {data.badge}
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{data.heading.solid}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {data.heading.colored}
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            {data.paragraph}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105"
                    : "bg-gray-800/50 text-gray-400 hover:text-cyan-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => {
            const skills = parseSkills(project.skills);
            const gradients = [
              "from-cyan-400 to-blue-500",
              "from-blue-400 to-cyan-500",
              "from-cyan-500 to-blue-600",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={project._id}
                ref={(el) => {
                  projectsRef.current[index] = el;
                }}
                className="flex flex-col group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-cyan-400/20 hover:-translate-y-2 transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.heading}
                    </h3>
                    <span
                      className={`self-end mb-3 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} text-white`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.paragraph}
                  </p>

                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-gray-300"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-xl bg-gray-800 text-white flex items-center gap-2 mx-auto"
            >
              {showAll ? "Collapse Projects" : data.viewBtn}
              <Sparkles className="text-cyan-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
