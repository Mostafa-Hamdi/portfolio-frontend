import type { Metadata } from "next";

export const siteUrl = "https://mostafahamdi.com";

const content = {
  ar: {
    title:
      "مصطفى حمدي | وكالة تطوير مواقع وتجارة إلكترونية — Shopify, WooCommerce & Custom Coding",
    description:
      "مواقع تجارة إلكترونية وتطبيقات ويب مخصصة بأكواد نظيفة — بدون قوالب جاهزة. تطوير Shopify وWooCommerce وووردبريس وبرمجة مخصصة، إعداد الاستضافة، وأتمتة سير العمل. احصل على عرض سعر مجاني اليوم.",
    ogTitle: "مصطفى حمدي | وكالة تطوير مواقع وتجارة إلكترونية",
    ogDescription:
      "مواقع تجارة إلكترونية وتطبيقات ويب مخصصة بأكواد نظيفة — بدون قوالب جاهزة. Shopify، WooCommerce، ووردبريس، وبرمجة مخصصة.",
    keywords: [
      "تطوير متاجر إلكترونية",
      "تصميم مواقع",
      "تطوير Shopify",
      "تطوير WooCommerce",
      "تطوير ووردبريس",
      "برمجة مواقع مخصصة",
      "e-commerce website development",
      "web development agency",
      "Shopify website design",
      "WooCommerce developer",
      "custom web application development",
      "WordPress developer",
      "custom-coded websites",
      "website automation services",
    ],
    locale: "ar_EG",
  },
  en: {
    title:
      "Mostafa Hamdi | E-Commerce & Web Development Agency — Shopify, WooCommerce & Custom Coding",
    description:
      "Custom e-commerce websites and web applications engineered clean — no page builders, no templates. Shopify, WooCommerce, WordPress, and custom-coded development, hosting setup, and workflow automation. Get a free quote today.",
    ogTitle: "Mostafa Hamdi | E-Commerce & Web Development Agency",
    ogDescription:
      "Custom e-commerce websites and web applications engineered clean — no page builders, no templates. Shopify, WooCommerce, WordPress, and custom coding.",
    keywords: [
      "e-commerce website development",
      "web development agency",
      "Shopify website design",
      "WooCommerce developer",
      "custom web application development",
      "WordPress developer",
      "custom-coded websites",
      "website automation services",
    ],
    locale: "en_US",
  },
} as const;

export function buildMetadata(lang: "ar" | "en"): Metadata {
  const c = content[lang];
  const path = lang === "ar" ? "/" : "/en";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: c.title,
      template: "%s | Mostafa Hamdi",
    },
    description: c.description,
    keywords: [...c.keywords],
    authors: [{ name: "Mostafa Hamdi" }],
    creator: "Mostafa Hamdi",
    applicationName: "Mostafa Hamdi",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    alternates: {
      canonical: path,
      languages: {
        ar: "/",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      siteName: "Mostafa Hamdi",
      locale: c.locale,
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
      title: c.ogTitle,
      description: c.ogDescription,
      images: [
        {
          url: "/favicon-512x512.png",
          width: 512,
          height: 512,
          alt: "Mostafa Hamdi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.ogTitle,
      description: c.ogDescription,
      images: ["/favicon-512x512.png"],
    },
  };
}

export function buildJsonLd(lang: "ar" | "en") {
  const path = lang === "ar" ? "/" : "/en";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mostafa Hamdi",
    description:
      lang === "ar"
        ? content.ar.ogDescription
        : "E-commerce engineering, custom web applications, and custom coding — Shopify, WooCommerce, WordPress, hosting setup and workflow automation.",
    url: `${siteUrl}${path}`,
    logo: `${siteUrl}/brand/logo-dark.png`,
    image: `${siteUrl}/favicon-512x512.png`,
    email: "info@mostafahamdi.com",
    telephone: "+201207715484",
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61591766296389",
      "https://www.instagram.com/mostafahamdi.web/",
      "https://www.tiktok.com/@eng.mostafa.hamdi",
      "https://www.linkedin.com/in/mostafa-hamdi",
    ],
    priceRange: "$$",
  };
}
