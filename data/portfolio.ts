export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  url: string | null;
  image: string | null;
}

/**
 * Replace these placeholder entries with real project names, images, URLs
 * and descriptions as they become available. The shape of this data is
 * intentionally stable so it can be swapped in without touching UI code.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "project-01",
    category: "Web Development",
    title: "Project 01",
    description: "Placeholder for an early practice website. Replace with the project name, live URL and a short summary.",
    technologies: ["React", "Next.js"],
    url: null,
    image: null,
  },
  {
    id: "project-02",
    category: "Web Development",
    title: "Project 02",
    description: "Placeholder for an early practice website. Replace with the project name, live URL and a short summary.",
    technologies: ["React", "Tailwind CSS"],
    url: null,
    image: null,
  },
  {
    id: "project-03",
    category: "E-commerce",
    title: "Project 03",
    description: "Placeholder for an early practice website. Replace with the project name, live URL and a short summary.",
    technologies: ["Shopify"],
    url: null,
    image: null,
  },
  {
    id: "project-04",
    category: "Portfolio Website",
    title: "Project 04",
    description: "Placeholder for an early practice website. Replace with the project name, live URL and a short summary.",
    technologies: ["React", "Framer Motion"],
    url: null,
    image: null,
  },
  {
    id: "project-05",
    category: "Single Page Website",
    title: "Project 05",
    description: "Placeholder for an early practice website. Replace with the project name, live URL and a short summary.",
    technologies: ["Next.js", "TypeScript"],
    url: null,
    image: null,
  },
];
