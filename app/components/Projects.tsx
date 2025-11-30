"use client";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Projects = ({ data }: any) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Extract project types for filters
  const projectTypes = data?.projects
    ? ["All", ...new Set(data.projects.map((p: any) => p.type))]
    : ["All"];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? data?.projects || []
      : (data?.projects || []).filter(
          (project: any) => project.type === activeFilter,
        );

  // Show only 6 projects initially, or all if showAll is true
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

  useEffect(() => {
    const loadGSAP = () => {
      if (typeof window !== "undefined" && (window as any).gsap) {
        initAnimations();
        return;
      }

      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      gsapScript.async = true;

      gsapScript.onload = () => {
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

      // Animate project cards
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(
            project,
            { opacity: 0, y: 80, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: project,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    };

    loadGSAP();

    return () => {
      if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((trigger: any) =>
          trigger.kill(),
        );
      }
    };
  }, [displayedProjects]);

  return (
    <section className="py-10 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              {data?.badge || "My Work"}
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">
              {data?.heading?.solid || "Featured "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {data?.heading?.colored || "Projects"}
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            {data?.paragraph ||
              "Explore my latest work showcasing innovation, creativity, and technical excellence"}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((filter: any) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border border-cyan-400/30 scale-105"
                    : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-400/30 hover:text-cyan-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project: any, index: number) => {
            const skills = parseSkills(project.skills);
            const gradients = [
              "from-cyan-400 to-blue-500",
              "from-blue-400 to-cyan-500",
              "from-cyan-500 to-blue-600",
              "from-blue-500 to-cyan-400",
              "from-cyan-600 to-blue-400",
              "from-blue-600 to-cyan-500",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={project._id}
                ref={(el: HTMLDivElement | null) => {
                  projectsRef.current[index] = el;
                }}
                className="flex flex-column group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.heading}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative flex flex-column flex-1">
                  <div className="absolute -top-3 right-6 z-20">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} text-white`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.heading}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.paragraph}
                  </p>

                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6 flex-1">
                      {skills.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 h-fit py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    {project?.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 font-semibold text-sm border border-gray-700 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
                ></div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white font-semibold hover:border-cyan-400/30 hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              {showAll
                ? "Collapse Projects"
                : data?.viewBtn || "View All Projects"}
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
