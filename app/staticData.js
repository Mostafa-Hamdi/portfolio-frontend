// src/staticData.js
// import veda from "@/public/vedaCover.png"
// import asia from "@/public/asiaCover.png"
// import eco from "@/public/ecoCover.png"
// import dashboard from "@/public/dashboardCover.png"
// import topTrade from "@/public/toptradeCover.png"
// import tavan from "@/public/tavanCover.png"
// import vendoor from "@/public/vendoorCover.png"
// import weather from "@/public/weatherCover.png"
const staticData = {
  data: {
    hero: {
      heading: { solid: "Full-Stack", colored: "Developer" },
      paragraph: {
        solidOne: "Building",
        coloredOne: "scalable web applications",
        solidTwo:
          "with Node.js, React, and Next.js. Transforming ideas into elegant solutions with",
        coloredTwo: "10+ projects",
        solidThird: "delivered.",
      },
      stackOne: {
        skills: ["Node.js", "Strapi ", "WordPress"],
        heading: "Backend Stack",
      },
      stackTwo: {
        skills: ["React ", "Next.js", "Headless CMS"],
        heading: "Frontend Stack\n",
      },
      badge: "Open to Opportunities",
      btnOne: "View Projects",
      btnTwo: "Let's Connect",
      image:
        "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1762815773/qtfqv6n9vvayemvojsfg.png",
      publicId: "qtfqv6n9vvayemvojsfg",
    },
    about: {
      heading: { solid: "About ", colored: "Me" },
      personalInfo: {
        name: "Mostafa Hamdi",
        jobTitle: "Full-Stack Developer",
        location: "Cairo, Egypt",
        email: "mostafa.hamdi@gmail.com",
        cv: "Download CV",
        phone: "+20 1207715484",
      },
      statics: {
        projects: { text: "Projects\n", number: "10+" },
        experience: { text: "Years", number: "1.5+" },
      },
      stacks: {
        frontend: {
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          heading: "Frontend",
        },
        backend: {
          skills: ["Node.js\n", "Strapi", "REST API"],
          heading: "Backend",
        },
        cms: {
          skills: ["WordPress", "Headless CMS\n", "Shopify"],
          heading: "CMS",
        },
      },
      story: {
        heading: "My Story\n",
        paragraph:
          "I'm a passionate full-stack developer with a keen eye for creating seamless digital experiences. With expertise spanning from frontend frameworks like React and Next.js to backend technologies and various CMS platforms, I bring ideas to life through clean, efficient code.\n\nMy journey in web development has led me through diverse roles - from building enterprise applications to teaching the next generation of developers. Each experience has shaped my approach to problem-solving and my commitment to delivering exceptional results.",
      },
      experiences: [],
      badge: "Who I Am",
    },
    servicesSection: {
      heading: { solid: "My", colored: "Services" },
      services: [
        {
          _id: "690fae43869b7a965d82ad4f",
          heading: "Web Development 55",
          description:
            "I build responsive and high-performance websites using modern technologies.",
          bullets: [
            "Custom website development",
            "Responsive design for all devices",
            "Performance optimization",
            "SEO-friendly code",
            "Maintenance and support",
          ],
        },
      ],
      badge: "What I Offer\n",
      btn: "Let's Build Something Amazing",
      message:
        "Transform your vision into reality with premium development services\n\n",
    },
    projects: {
      heading: { solid: "Featured ", colored: "Projects" },
      projects: [
        {
          _id: "6921a870cf7a5b6c29be8879",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763813489/projects/sxp2c3le0czv6mdrfpmf.png",
          imagePublicId: "projects/sxp2c3le0czv6mdrfpmf",
          type: "Wordpress",
          heading: "Asia Cosmetics & Beauty",
          paragraph:
            "asiaegy.com – WooCommerce E-Commerce Store\r\nA high-performance, responsive online store with secure payments, optimized for large product catalogs and fast user experience.",
          skills: ["WooCommerce", "UX builder", "CSS", "HTML"],
          siteLink: "https://asiaegy.com/",
          __v: 0,
        },
        {
          _id: "6921ab17cf7a5b6c29be88a4",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763814168/projects/om5qux6yjzbjzq6eh46c.png",
          imagePublicId: "projects/om5qux6yjzbjzq6eh46c",
          type: "Frontend React.js",
          heading: "Veda Nutrition & Diet Coaching",
          paragraph:
            "letsveda.com – Online Nutrition Platform\r\nA fast, responsive website for booking licensed dietitian consultations and accessing personalized meal plans.",
          skills: [
            "React.js",
            "RTK Query",
            "Dynamic Data from WordPress",
            "Responsive Design",
            "Localization",
          ],
          siteLink: "https://letsveda.com/",
          github: "https://github.com/Mostafa-Hamdi/veda-front",
          __v: 0,
        },
        {
          _id: "6921af14cf7a5b6c29be88ee",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763815190/projects/kve4sxw0hczuwm6n4gge.png",
          imagePublicId: "projects/kve4sxw0hczuwm6n4gge",
          type: "Fullstack Strapi",
          heading: "Vendoor",
          paragraph:
            "Vendoor – Modern Web App\r\nA sleek, high-performance web application built on Vercel, featuring fast load times, scalable architecture, and a clean responsive interface.",
          skills: ["Next.js", "Strapi", "RTK Query", "GSAP"],
          siteLink: "https://vendoor-ten.vercel.app/",
          github: "https://github.com/Mostafa-Hamdi/vendoor-front",
          __v: 0,
        },
        {
          _id: "6921b051cf7a5b6c29be8904",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763815506/projects/emrii2gjvy9knhyupkbl.png",
          imagePublicId: "projects/emrii2gjvy9knhyupkbl",
          type: "Wordpress",
          heading: "ECO Performance Marketing",
          paragraph:
            "ecoperformancemarketing.com – Digital Marketing Agency\r\nA results-driven agency boosting e-commerce sales through data-driven campaigns, creative ads, CRO, and SEO across platforms like Meta, Google, TikTok, and Snapchat.",
          skills: ["Wordpress", "HTML", "CSS"],
          siteLink: "https://ecoperformancemarketing.com/",
          __v: 0,
        },
        {
          _id: "6921b13dcf7a5b6c29be8919",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763815742/projects/hxykmw8cqgn1tlikbo5r.png",
          imagePublicId: "projects/hxykmw8cqgn1tlikbo5r",
          type: "Shopify",
          heading: "Tavan Gallery",
          paragraph:
            "tavangallery.com – Artificial Decor & Home Accents\r\nAn e-commerce site offering stylish artificial plants, fiberglass pots, and modern decor tables, with custom‑made options. Designed for high quality, aesthetic appeal, and easy shopping across devices.",
          skills: ["Shopify", "HTML", "CSS"],
          siteLink: "https://tavangallery.com/en",
          __v: 0,
        },
        {
          _id: "6921b477cf7a5b6c29be8930",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763816568/projects/af6pykfp08dmt9uyuwab.png",
          imagePublicId: "projects/af6pykfp08dmt9uyuwab",
          type: "Fullstack Node.js",
          heading: "Portfolio Dashboard",
          paragraph:
            "portfolio dashboard gives a quick overview of all your work, including total projects, services, experiences, and subscribers. It highlights key activity updates in real time. A clean, organized layout helps you track your overall portfolio performance at a glance.",
          skills: [
            "Next.js",
            "Node.js",
            "RTK Query",
            "Express.js",
            "MongoDB",
            "CRUD APIs",
          ],
          siteLink: "https://mostafadev-gamma.vercel.app/dashboard",
          github: "https://github.com/Mostafa-Hamdi/portfolio-backend",
          __v: 1,
        },
        {
          _id: "6921b5b1cf7a5b6c29be895a",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763816882/projects/t1o2krp3aeucbcjrt4xb.png",
          imagePublicId: "projects/t1o2krp3aeucbcjrt4xb",
          type: "Zoho Sites",
          heading: "New Top Trade – Animal Nutrition",
          paragraph:
            "New Top Trade is a specialized provider in the animal nutrition industry, offering feed additives, supplements, disinfectants, and antibiotics to support livestock and poultry health. With over 30 years of experience in veterinary distribution across Egypt, they partner with global leaders to deliver high-quality, efficient, and sustainable solutions.",
          skills: ["Zoho Sites Builder", "HTML", "CSS", "JS"],
          siteLink: "https://www.newtoptrades.com/",
          __v: 0,
        },
        {
          _id: "6921b6afcf7a5b6c29be8970",
          image:
            "https://res.cloudinary.com/dkqbmzwoy/image/upload/v1763817136/projects/va8dvjcas8ooztawebjj.png",
          imagePublicId: "projects/va8dvjcas8ooztawebjj",
          type: "Fullstack Node.js",
          heading: "Weather Forecast",
          paragraph:
            "Weather Forecast Web App\r\nA clean, responsive web application that fetches real‑time weather data for any city using a weather API. Built for speed and usability, it delivers current conditions and forecast details with a modern UI and smooth performance.",
          skills: ["React.js", "Node.js", "Express.js", "API Integration"],
          siteLink: "https://weather-forecast-lyart.vercel.app/",
          github: "https://github.com/Mostafa-Hamdi/Weather-App-Front",
          __v: 0,
        },
      ],
      badge: "My Work\n",
      paragraph:
        "Explore my latest work showcasing innovation, creativity, and technical excellence\n\n",
      viewBtn: "View All Projects",
    },
    contact: {
      heading: { solid: "Let's ", colored: "Connect" },
      emailContent: { label: "Email", email: "mostafa.hamdi.dev@gmail.com" },
      phoneContent: { label: "Phone", phone: "+20 1207715484" },
      locationContent: { label: "Location", location: "Cairo, Egypt" },
      badge: "Get In Touch\n",
      paragraph:
        "Have a project in mind or just want to chat? Feel free to reach out!\n\n",
      socialLinks: [{ _id: "69126f1cb840b05629dc8f4a", links: [] }],
    },
    _id: "69126f1cb840b05629dc8f49",
    __v: 13,
  },
};

export default staticData;
