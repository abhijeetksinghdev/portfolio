import type { MetadataRoute } from "next";

const siteUrl = "https://abhijeetksinghdev.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/resume-preview`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
