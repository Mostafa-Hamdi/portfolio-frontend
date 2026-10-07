import type { Metadata } from "next";

// The live address. Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. to
// https://mostafahamdi.com) once a custom domain is connected — canonical,
// hreflang, Open Graph, sitemap and robots all follow it.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mostafahamdidev.vercel.app"
).replace(/\/$/, "");

export const contactEmail = "mostafa.hamdi.dev@gmail.com";

const content = {
  ar: {
    title: "مصطفى حمدي | مطوّر مواقع: Shopify وووردبريس وReact",
    description:
      "مطوّر مواقع في القاهرة: متاجر Shopify وWooCommerce ومواقع ووردبريس وتطبيقات React وNext.js لشركات في مصر والسعودية. متاح لمشاريع العمل الحر وللوظائف بدوام كامل.",
    ogTitle: "مصطفى حمدي | مطوّر مواقع وتجارة إلكترونية",
    ogDescription:
      "متاجر Shopify وWooCommerce ومواقع ووردبريس وتطبيقات React وNext.js. متاح لمشاريع العمل الحر وللوظائف بدوام كامل.",
    keywords: [
      "تطوير متاجر إلكترونية",
      "تصميم مواقع",
      "تطوير Shopify",
      "تطوير WooCommerce",
      "تطوير ووردبريس",
      "برمجة مواقع مخصصة",
      "مطور مواقع مستقل",
      "e-commerce website development",
      "freelance web developer",
      "Shopify website design",
      "WooCommerce developer",
      "custom web application development",
      "WordPress developer",
      "React developer",
      "Next.js developer",
      "custom-coded websites",
      "website automation services",
    ],
    locale: "ar_EG",
  },
  en: {
    title: "Mostafa Hamdi | Web Developer: Shopify, WordPress & React",
    description:
      "Cairo-based web developer building Shopify, WooCommerce, WordPress and React/Next.js sites for businesses in Egypt and Saudi Arabia. Hire me freelance or full-time.",
    ogTitle: "Mostafa Hamdi | Web Developer: Shopify, WordPress & React",
    ogDescription:
      "Shopify, WooCommerce, WordPress and React/Next.js builds for businesses in Egypt and Saudi Arabia. Available for freelance projects and full-time roles.",
    keywords: [
      "e-commerce website development",
      "freelance web developer",
      "React developer",
      "Next.js developer",
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
    // `absolute` so /en doesn't inherit the root template and end up with
    // "| Mostafa Hamdi" twice in its title.
    title: {
      absolute: c.title,
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
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Mostafa Hamdi — Web Developer: Shopify, WordPress & React",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.ogTitle,
      description: c.ogDescription,
      images: ["/og-image.png"],
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
        : content.en.ogDescription,
    url: `${siteUrl}${path}`,
    logo: `${siteUrl}/brand/logo-dark.png`,
    image: `${siteUrl}/og-image.png`,
    email: contactEmail,
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
