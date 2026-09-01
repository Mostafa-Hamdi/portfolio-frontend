import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://mostafahamdi.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mostafahamdi.com/en",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
