export const siteConfig = {
  name: "Techlance",

  tagline:
    "We build digital experiences that move businesses forward.",

  description:
    "Techlance is a web development and digital marketing agency helping businesses grow through high-performance websites, e-commerce solutions, SEO, and digital marketing.",

  url: "https://techlance.website",

  whatsappNumber: "923287060442",
  whatsappDisplay: "+92 328 7060442",

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },

  founded: 2024,
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;

  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
};