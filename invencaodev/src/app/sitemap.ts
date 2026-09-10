import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projetos/quizlab-if", "/projetos/observatorio-grilagem-terras", "/projetos/demo-soc-ia"];
  return routes.map((route) => ({
      url: `https://invencaodev.com${route}`,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }));
}
