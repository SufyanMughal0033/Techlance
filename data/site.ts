export const siteConfig = {
  name: "Techlance",
  tagline: "We build digital experiences that move businesses forward.",
  description:
    "Techlance is a digital agency building websites, digital products and performance marketing for clients in Pakistan and internationally.",
  url: "https://www.techlance.example",
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
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
