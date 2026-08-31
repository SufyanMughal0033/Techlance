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
    facebook: "https://www.facebook.com/profile.php?id=61593665375444",
    instagram: "https://www.instagram.com/techlance_official_?igsi=MTRlamllNjJkbG0wOQ==",
    linkedin: "https://www.linkedin.com/in/sufyan-asghar-sm?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  founded: 2024,
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;

  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
};