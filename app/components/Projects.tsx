"use client";

import { ExternalLink, Sparkles, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "../providers";
import PulseDot from "./PulseDot";
import { projects } from "../data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TECH_FILTER_MAP = {
  shopify: { type: "Shopify", labelKey: "shopify" },
  wordpress: { type: "WordPress", labelKey: "wordpress" },
  custom: { type: "Custom Coding", labelKey: "customCoding" },
} as const;

const Projects = () => {
  const { t, projectTechFilter, setProjectTechFilter } = useApp();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<Array<HTMLDivElement | null>>([]);

  const projectTypes = ["All", ...new Set(projects.map((p) => p.type))];

  useEffect(() => {
    if (projectTechFilter) {
      setActiveFilter("All");
      setShowAll(true);
    }
  }, [projectTechFilter]);

  const selectFilter = (filter: string) => {
    setProjectTechFilter(null);
    setActiveFilter(filter);
  };

  const clearTechFilter = () => {
    setProjectTechFilter(null);
    setActiveFilter("All");
  };

  const activeTechFilter =
    projectTechFilter && projectTechFilter in TECH_FILTER_MAP
      ? TECH_FILTER_MAP[projectTechFilter as keyof typeof TECH_FILTER_MAP]
      : null;

  const filteredProjects = activeTechFilter
    ? projects.filter((p) => p.type === activeTechFilter.type)
    : activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, [displayedProjects]);

  return (
    <section className="py-10 relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 mb-6">
            <PulseDot />
            <span className="text-brand-cyan text-xs font-bold uppercase">
              {t.projects.badge}
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-text-primary">{t.projects.titleSolid}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.projects.titleColored}
            </span>
          </h2>

          <p className="text-text-faint max-w-2xl mx-auto mb-12">
            {t.projects.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((filter) => (
              <button
                key={filter}
                onClick={() => selectFilter(filter)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  !projectTechFilter && activeFilter === filter
                    ? "bg-gradient-to-r from-brand-cyan to-brand-blue text-white scale-105"
                    : "bg-surface-elevated text-text-faint hover:text-brand-cyan-tint"
                }`}
              >
                {filter === "All" ? t.projects.filterAll : filter}
              </button>
            ))}
          </div>

          {activeTechFilter && (
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
              <span className="text-brand-cyan-tint text-sm font-semibold">
                {t.projects.filteredBy} {t.hero.techFilters[activeTechFilter.labelKey]}
              </span>
              <button
                onClick={clearTechFilter}
                className="cursor-pointer flex items-center gap-1 text-xs font-bold text-text-faint hover:text-brand-cyan transition-colors"
                aria-label={t.projects.clearFilter}
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Grid */}
        {displayedProjects.length === 0 ? (
          <p className="text-center text-text-faint py-12">{t.projects.noMatches}</p>
        ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project._id}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
              className="flex flex-col group relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-elevated to-transparent border border-brand-cyan/20 hover:-translate-y-2 hover:border-brand-cyan/40 transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-surface-elevated">
                <Image
                  src={project.image}
                  alt={`${project.heading} — ${project.type} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={65}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4 gap-3">
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.heading}
                  </h3>
                  <span className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-blue text-white">
                    {project.type}
                  </span>
                </div>

                <p className="text-text-faint text-sm mb-4 flex-1">
                  {project.paragraph}
                </p>

                {project.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/20 text-brand-cyan-tint text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-semibold hover:scale-[1.02] transition-transform"
                >
                  <ExternalLink size={16} />
                  {t.projects.viewProject}
                </a>
              </div>
            </div>
          ))}
        </div>
        )}

        {!activeTechFilter && filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 rounded-xl bg-surface-elevated border border-brand-cyan/20 text-text-primary flex items-center gap-2 mx-auto cursor-pointer hover:border-brand-cyan/40 transition-colors"
            >
              {showAll ? t.projects.collapse : t.projects.viewAll}
              <Sparkles className="text-brand-cyan" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
