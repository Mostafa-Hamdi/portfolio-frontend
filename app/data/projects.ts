export interface Project {
  _id: string;
  heading: string;
  paragraph: string;
  type: string;
  image: string;
  siteLink: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    _id: "5",
    heading: "Aura CRM System",
    paragraph:
      "Custom CRM solution for managing customers, pipelines, and business growth.",
    type: "Custom Coding",
    image: "/auraScreen.png",
    siteLink: "https://auracrm-pi.vercel.app",
    skills: ["Custom Development", "Dashboard"],
  },
  {
    _id: "1",
    heading: "Kreaz E-Commerce",
    paragraph:
      "Premium cakes, desserts, chocolates, and handcrafted beverages with a modern e-commerce experience.",
    type: "WordPress",
    image: "/kreaz-screen.jpg",
    siteLink: "https://kreazdesserts.com/",
    skills: ["WordPress", "WooCommerce", "Custom Development"],
  },
  {
    _id: "8",
    heading: "Veda",
    paragraph: "Veda is a custom-coded website connected to WordPress for dynamic content.",
    type: "Custom Coding",
    image: "/vedaScreen.png",
    siteLink: "https://letsveda.com/",
    skills: ["Custom Development", "WordPress"],
  },
  {
    _id: "13",
    heading: "Lenixmedia",
    paragraph:
      "Lenixmedia is a UK-based digital agency website built with a clean, modern WordPress setup.",
    type: "WordPress",
    image: "/lenix.png",
    siteLink: "https://lenixmedia.co.uk/",
    skills: ["WordPress", "Elementor PRO"],
  },
  {
    _id: "14",
    heading: "Kion Electric",
    paragraph:
      "Kion is an e-commerce store for electrical products, built for smooth browsing and secure checkout.",
    type: "WordPress",
    image: "/kion.png",
    siteLink: "https://kionelectric.com",
    skills: ["WordPress", "WooCommerce", "E-commerce"],
  },
  {
    _id: "15",
    heading: "Babel",
    paragraph:
      "Babel is a modern WordPress website focused on clean design and fast performance.",
    type: "WordPress",
    image: "/babel.png",
    siteLink: "https://aquamarine-ape-121163.hostingersite.com/",
    skills: ["WordPress", "Custom Theme"],
  },
  {
    _id: "16",
    heading: "Al-Matbakh",
    paragraph:
      "Al-Matbakh is a WordPress blogging platform sharing recipes and culinary content.",
    type: "WordPress",
    image: "/almatbakh.png",
    siteLink: "https://al-matbakh.com/",
    skills: ["WordPress", "Blog"],
  },
  {
    _id: "17",
    heading: "Info Magazine",
    paragraph:
      "Info Magazine is a WordPress-powered online magazine delivering news and articles.",
    type: "WordPress",
    image: "/infologo.png",
    siteLink: "https://info-magazine.com/",
    skills: ["WordPress", "Blog"],
  },
  {
    _id: "18",
    heading: "Al-Ruqyah",
    paragraph:
      "Al-Ruqyah is a WordPress blog site providing religious and educational content.",
    type: "WordPress",
    image: "/alruqyah.png",
    siteLink: "https://al-ruqyah.com/",
    skills: ["WordPress", "Blog"],
  },
  {
    _id: "12",
    heading: "Fasttracks",
    paragraph:
      "Fast Tracks Travel and Tourism Company is a Saudi company specializing in business services, travel, and tourism solutions.",
    type: "WordPress",
    image: "/fasttracksCover.png",
    siteLink: "https://fasttracks.online/",
    skills: ["WordPress", "Elementor PRO", "ACF"],
  },
  {
    _id: "4",
    heading: "Saqr Sahraan Store",
    paragraph:
      "Outdoor & camping e-commerce platform for premium gear in the Middle East.",
    type: "WordPress",
    image: "/saqrScreen.jpg",
    siteLink: "https://www.d-falcon.com/",
    skills: ["Custom Development", "E-commerce"],
  },
  {
    _id: "11",
    heading: "Newtoptrade",
    paragraph:
      "Newtoptrade is a B2B marketplace for importing and exporting products.",
    type: "WordPress",
    image: "/newtoptradeScreen.png",
    siteLink: "https://newtoptrade.com/",
    skills: ["ZohoSites"],
  },
];
