// src/staticData.js

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
      projects: [], // You can copy all your projects here if you want
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

module.exports = staticData;
