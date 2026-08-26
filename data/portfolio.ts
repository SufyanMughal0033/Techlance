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
  category: "RealEstate Company",
  title: "RealEstate",
  description: "A modern and responsive real estate website designed with a clean interface and smooth user experience.",
  technologies: ["React", "Next.js"],
  url: "https://steady-sorbet-ef1829.netlify.app/",
  image: "/projects/project-01.png",
},
 {
  id: "project-02",
  category: "Tyre Shop",
  title: "TyreSpace",
  description:
    "A premium tyre and automotive website designed to showcase tyre products, automotive services, trusted brands, and easy quote requests through a bold black and red interface.",
  technologies: ["React", "Tailwind CSS"],
  url: "https://moonlit-cucurucho-03d49a.netlify.app/",
  image: "/projects/project-02.png",
},
{
  id: "project-03",
  category: "E-Commerce",
  title: "e-Mart by Sufyan",
  description:
    "A modern fashion e-commerce website featuring men's and women's collections, ladies bags, product browsing, shopping experience, and a premium dark-themed interface.",
  technologies: ["React", "Bootstrap"],
  url: "https://chimerical-douhua-9b6dbe.netlify.app/",
  image: "/projects/project-03.png",
},
{
  id: "project-04",
  category: "Coffee Shop",
  title: "Coffee.co",
  description:
    "A premium coffee shop website focused on elegant presentation, menu discovery, table reservations, services, reviews, and a warm luxury-inspired visual experience.",
  technologies: ["React", "Framer Motion"],
  url: "https://superlative-bienenstitch-f4b316.netlify.app/",
  image: "/projects/project-04.png",
},
{
  id: "project-05",
  category: "Textile Export & Import",
  title: "Ismail World Export & Import",
  description:
    "A professional B2B textile export and import website built to present products, manufacturing capabilities, global market expertise, and quote inquiries to international buyers.",
  technologies: ["React",],
  url: "https://creative-paletas-d1ecbc.netlify.app/",
  image: "/projects/project-05.png",
},
];
