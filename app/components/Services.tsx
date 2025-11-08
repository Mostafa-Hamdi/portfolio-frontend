import {
  Code2,
  Smartphone,
  ShoppingBag,
  Rocket,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
  Bug,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Crafting high-performance web applications with cutting-edge technologies and pristine code architecture.",
      features: ["React & Next.js", "Performance Optimization", "SEO Ready"],
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500",
      glowColor: "cyan",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description:
        "Building responsive, mobile-first experiences that deliver seamless performance across all devices.",
      features: ["Cross-Platform", "Native Feel", "Offline Support"],
      color: "blue",
      gradient: "from-blue-400 to-cyan-500",
      glowColor: "blue",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      description:
        "Developing powerful online stores with secure payment systems and intuitive shopping experiences.",
      features: [
        "Shopify & WooCommerce",
        "Payment Integration",
        "Inventory Management",
      ],
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      icon: Zap,
      title: "CMS Development",
      description:
        "Implementing flexible content management systems that empower you to control your digital presence.",
      features: ["WordPress", "Headless CMS", "Custom Solutions"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      glowColor: "blue",
    },
    {
      icon: Bug,
      title: "Debugging & Optimization",
      description:
        "Identifying and resolving complex issues while optimizing performance for lightning-fast experiences.",
      features: ["Bug Fixing", "Code Review", "Performance Tuning"],
      color: "cyan",
      gradient: "from-cyan-600 to-blue-400",
      glowColor: "cyan",
    },
    {
      icon: Rocket,
      title: "Deployment & Hosting",
      description:
        "Seamless deployment and reliable hosting solutions ensuring your application runs smoothly 24/7.",
      features: ["CI/CD Pipeline", "Cloud Hosting", "Maintenance"],
      color: "blue",
      gradient: "from-blue-600 to-cyan-500",
      glowColor: "blue",
    },
  ];

  return (
    <section className="pb-15 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              What I Offer
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)] transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-700`}
                      ></div>
                      <div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <div className="w-full h-full rounded-[14px] bg-gray-900 flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-500">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/feature"
                        >
                          <div
                            className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.gradient} p-[2px] group-hover/feature:scale-125 group-hover/feature:rotate-180 transition-all duration-500`}
                          >
                            <div className="w-full h-full rounded-[6px] bg-gray-900 flex items-center justify-center">
                              <Check className="w-3 h-3 text-cyan-400" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-400 group-hover/feature:text-cyan-400 group-hover/feature:translate-x-1 transition-all duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent Lights */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
                  ></div>
                  <div
                    className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700 rounded-full`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Luxury CTA */}
        <div className="text-center mt-16">
          <div className="inline-block relative group">
            {/* Button */}
            <button className="relative px-16 py-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-lg font-bold overflow-hidden group-hover:scale-105 group-hover:shadow-[0_20px_90px_rgba(6,182,212,0.0)] transition-all duration-500 border border-cyan-400/20">
              {/* Content */}
              <div className="relative flex items-center gap-4">
                <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
                <span>Let's Build Something Amazing</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </button>
          </div>

          <p className="mt-8 text-gray-500 text-sm font-medium">
            Transform your vision into reality with premium development services
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
