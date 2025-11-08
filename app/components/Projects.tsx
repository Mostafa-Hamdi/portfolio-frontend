"use client";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web App", "E-Commerce", "CMS", "Mobile"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description:
        "Modern online store with advanced product filtering and secure payment integration.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Stripe", "Tailwind"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Task Management App",
      category: "Web App",
      description:
        "Collaborative task management system with real-time updates and team features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Portfolio CMS",
      category: "CMS",
      description:
        "Headless CMS solution for creative professionals to showcase their work.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Strapi", "React", "GraphQL"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Fitness Tracker",
      category: "Mobile",
      description:
        "Cross-platform mobile app for tracking workouts and nutrition goals.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Real Estate Platform",
      category: "Web App",
      description:
        "Property listing platform with advanced search and virtual tour features.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Mapbox", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-cyan-600 to-blue-400",
    },
    {
      title: "Restaurant Ordering System",
      category: "E-Commerce",
      description:
        "Online ordering system with menu management and delivery tracking.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Stripe"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-blue-600 to-cyan-500",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              My Work
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Explore my latest work showcasing innovation, creativity, and
            technical excellence
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
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
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Category Badge */}
                <div className="absolute -top-3 right-6 z-20">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800 text-gray-300 font-semibold text-sm border border-gray-700 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Corner Glow Effect */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white font-semibold hover:border-cyan-400/30 hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
