export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
  category: "development" | "marketing";
}

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom-built websites engineered for performance, structured to scale as your business grows.",
    tags: ["Next.js", "React", "TypeScript"],
    category: "development",
  },
  {
    number: "02",
    title: "React Frontend Development",
    description:
      "Interactive, component-driven interfaces built with modern React architecture and clean code.",
    tags: ["React", "Component Systems", "State Management"],
    category: "development",
  },
  {
    number: "03",
    title: "Single Page Websites",
    description:
      "Focused, fast-loading one-page sites for products, launches, and personal brands.",
    tags: ["Landing Pages", "Micro-sites"],
    category: "development",
  },
  {
    number: "04",
    title: "Portfolio Websites",
    description:
      "Considered, image-forward sites that present creative and professional work with clarity.",
    tags: ["Personal Brand", "Case Studies"],
    category: "development",
  },
  {
    number: "05",
    title: "E-commerce Websites",
    description:
      "Storefronts built around a smooth path from browsing to checkout, on any scale.",
    tags: ["Cart & Checkout", "Payments", "Catalog"],
    category: "development",
  },
  {
    number: "06",
    title: "Shopify Websites",
    description:
      "Custom Shopify storefronts and theme development tailored to your product and brand.",
    tags: ["Shopify", "Liquid", "Theme Customization"],
    category: "development",
  },
  {
    number: "07",
    title: "Facebook & Instagram Ads",
    description:
      "Audience-tested campaigns across Meta platforms, built around clear conversion goals.",
    tags: ["Meta Ads", "Audience Targeting"],
    category: "marketing",
  },
  {
    number: "08",
    title: "Google Ads",
    description:
      "Search and display campaigns structured around intent, budget discipline and measurement.",
    tags: ["Search Ads", "Display", "Analytics"],
    category: "marketing",
  },
  {
    number: "09",
    title: "Digital Marketing & Lead Generation",
    description:
      "End-to-end campaign strategy focused on qualified leads and measurable performance.",
    tags: ["Strategy", "Lead Gen", "Optimization"],
    category: "marketing",
  },
];
