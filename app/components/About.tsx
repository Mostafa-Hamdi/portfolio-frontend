"use client";
import {
  Calendar,
  Briefcase,
  Code,
  GraduationCap,
  Laptop,
  MapPin,
  Mail,
  Phone,
  Download,
  Award,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ABG",
      period: "Jul 2024 - Present",
      type: "Full-time",
      icon: Briefcase,
      color: "cyan",
      description:
        "Leading frontend development initiatives with React and Next.js",
    },
    {
      role: "Full-Stack Developer",
      company: "Spunto",
      period: "Jan 2025 - Present",
      type: "Full-time",
      icon: Briefcase,
      color: "blue",
      description:
        "Building full-stack solutions with Node.js and modern frameworks",
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "Jul 2025 - Oct 2025",
      type: "Freelance",
      icon: Laptop,
      color: "cyan",
      description: "Delivered custom solutions for diverse client requirements",
    },
    {
      role: "Instructor",
      company: "AiArena Academy",
      period: "Jul 2025 - Aug 2025",
      type: "Contract",
      icon: GraduationCap,
      color: "blue",
      description: "Teaching modern web development to aspiring developers",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: Code,
      color: "cyan",
    },
    {
      category: "Backend",
      items: ["Node.js", "Strapi", "REST API"],
      icon: Zap,
      color: "blue",
    },
    {
      category: "CMS",
      items: ["WordPress", "Headless CMS", "Shopify"],
      icon: Target,
      color: "purple",
    },
  ];

  return (
    <section className="pt-[60px] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Who I Am
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)] transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-4 border-cyan-400/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-500">
                      <span className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        MH
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    Mostafa Hamdi
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">
                    Full-Stack Developer
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:translate-x-2 group/item">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover/item:bg-cyan-500/20 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-cyan-500/30 transition-all duration-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-sm">mostafa.hamdi.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:translate-x-2 group/item">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover/item:bg-cyan-500/20 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-cyan-500/30 transition-all duration-300">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-sm">+20 1207715484</span>
                  </div>
                </div>

                <button className="relative w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                    <span>Download CV</span>
                  </div>
                  <div className="absolute inset-0 -top-full group-hover/btn:top-0 bg-white/20 transition-all duration-300"></div>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 text-center hover:border-cyan-400/40 hover:scale-110 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="text-3xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1 group-hover:scale-125 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-gray-400 text-xs font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                      Projects
                    </div>
                  </div>
                </div>
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-400/20 text-center hover:border-blue-400/40 hover:scale-110 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="text-3xl font-black bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-1 group-hover:scale-125 transition-transform duration-300">
                      1.5+
                    </div>
                    <div className="text-gray-400 text-xs font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      Years
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Compact Cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Tech Stack</h4>
                </div>
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group/skill p-4 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] hover:translate-x-2 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                            skill.color === "cyan"
                              ? "from-cyan-500/20 to-cyan-500/5"
                              : skill.color === "blue"
                                ? "from-blue-500/20 to-blue-500/5"
                                : "from-purple-500/20 to-purple-500/5"
                          } border ${
                            skill.color === "cyan"
                              ? "border-cyan-400/30"
                              : skill.color === "blue"
                                ? "border-blue-400/30"
                                : "border-purple-400/30"
                          } flex items-center justify-center group-hover/skill:scale-110 group-hover/skill:rotate-12 transition-all duration-300`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              skill.color === "cyan"
                                ? "text-cyan-400"
                                : skill.color === "blue"
                                  ? "text-blue-400"
                                  : "text-purple-400"
                            }`}
                          />
                        </div>
                        <span className="font-bold text-white group-hover/skill:text-cyan-400 transition-colors duration-300">
                          {skill.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-13">
                        {skill.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-[10px] font-medium hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:scale-110 transition-all duration-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Text */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 group-hover:text-cyan-400 transition-colors duration-300">
                  <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full group-hover:h-10 transition-all duration-300"></div>
                  My Story
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  I'm a passionate full-stack developer with a keen eye for
                  creating seamless digital experiences. With expertise spanning
                  from frontend frameworks like React and Next.js to backend
                  technologies and various CMS platforms, I bring ideas to life
                  through clean, efficient code.
                </p>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  My journey in web development has led me through diverse roles
                  - from building enterprise applications to teaching the next
                  generation of developers. Each experience has shaped my
                  approach to problem-solving and my commitment to delivering
                  exceptional results.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Experience
              </h3>
              <div className="relative space-y-6">
                {/* Timeline Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-cyan-500/50"></div>

                {experiences.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <div key={index} className="relative group pl-16">
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-0 top-6 w-12 h-12 rounded-xl bg-gradient-to-br ${
                          exp.color === "cyan"
                            ? "from-cyan-500/20 to-cyan-500/5 border-cyan-400/30"
                            : "from-blue-500/20 to-blue-500/5 border-blue-400/30"
                        } border flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.4)] transition-all duration-500 z-10`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            exp.color === "cyan"
                              ? "text-cyan-400"
                              : "text-blue-400"
                          }`}
                        />
                      </div>

                      {/* Content Card */}
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_15px_50px_rgba(6,182,212,0.2)] hover:-translate-y-1 hover:translate-x-2 transition-all duration-500 cursor-pointer">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                              {exp.role}
                            </h4>
                            <p className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                              {exp.company}
                            </p>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {exp.description}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-xs group-hover:text-cyan-400 transition-colors duration-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
