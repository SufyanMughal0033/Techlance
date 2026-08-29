export type ServiceCategory =
  | "development"
  | "marketing"
  | "seo"
  | "content"
  | "monetization"
  | "solutions";

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
  category: ServiceCategory;
}

export interface ServiceCategoryInfo {
  id: ServiceCategory;
  number: string;
  title: string;
  intro: string;
}

export const serviceCategories: ServiceCategoryInfo[] = [
  {
    id: "development",
    number: "01",
    title: "Web Development",
    intro:
      "Fast, responsive and purpose-built websites designed to give your business a strong digital foundation.",
  },
  {
    id: "marketing",
    number: "02",
    title: "Digital Marketing",
    intro:
      "Reach the right audience, generate qualified leads and turn digital attention into measurable business growth.",
  },
  {
    id: "seo",
    number: "03",
    title: "SEO",
    intro:
      "Improve your search visibility with technical, on-page, local and content-focused SEO built for sustainable growth.",
  },
  {
    id: "content",
    number: "04",
    title: "Content & Creative",
    intro:
      "Clear, persuasive and search-friendly content that builds trust, strengthens your brand and supports conversions.",
  },
  {
    id: "monetization",
    number: "05",
    title: "Monetization",
    intro:
      "Turn eligible websites into revenue-generating digital assets with thoughtful advertising and publisher optimization.",
  },
  {
    id: "solutions",
    number: "06",
    title: "Digital Business Solutions",
    intro:
      "Technical services, integrations and ongoing support that keep your digital operations reliable and growing.",
  },
];

export const services: Service[] = [
  // ─────────────────────────────────────────────
  // WEB DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    number: "01",
    title: "Single Page Website",
    description:
      "A focused one-page website that brings your business, services, credibility and contact options together in one fast and conversion-focused experience.",
    tags: [
      "Hero & About",
      "Services",
      "Testimonials",
      "Contact",
      "WhatsApp",
      "Basic SEO",
    ],
    category: "development",
  },
  {
    number: "02",
    title: "Multi-Page Business Website",
    description:
      "A structured business website with dedicated pages for your company, services, portfolio, FAQs and contact information, giving your brand room to grow and creating more opportunities for search visibility.",
    tags: [
      "Business Pages",
      "Service Pages",
      "Portfolio",
      "FAQ",
      "Blog",
      "SEO Structure",
    ],
    category: "development",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    description:
      "A complete online store designed around the customer journey, from product discovery and filtering to cart, checkout, payments and order management.",
    tags: [
      "Product Catalog",
      "Cart & Checkout",
      "Payments",
      "Order Management",
      "Analytics",
    ],
    category: "development",
  },
  {
    number: "04",
    title: "Custom Web Applications",
    description:
      "Business-specific web applications built around your actual workflow, including dashboards, booking systems, customer portals, management systems, APIs and custom database-driven functionality.",
    tags: [
      "Dashboards",
      "Custom Systems",
      "APIs",
      "Databases",
      "Automation",
    ],
    category: "development",
  },
  {
    number: "05",
    title: "Website Redesign & Optimization",
    description:
      "Transform an outdated or underperforming website with a modern interface, better user experience, improved mobile responsiveness, faster performance and a stronger path toward conversion.",
    tags: [
      "UI Redesign",
      "UX Improvements",
      "Mobile Optimization",
      "Speed",
      "Conversion",
    ],
    category: "development",
  },
  {
    number: "06",
    title: "Landing Page Development",
    description:
      "Purpose-built landing pages designed around a single campaign, product or conversion goal, with focused messaging, strong calls to action and tracking-ready structure.",
    tags: [
      "Campaign Pages",
      "Lead Forms",
      "CTA Optimization",
      "Tracking",
      "A/B Testing Ready",
    ],
    category: "development",
  },

  // ─────────────────────────────────────────────
  // DIGITAL MARKETING
  // ─────────────────────────────────────────────
  {
    number: "07",
    title: "Social Media Marketing",
    description:
      "A structured social media strategy covering content planning, audience understanding, platform management, engagement and performance analysis to build awareness and generate opportunities.",
    tags: [
      "Strategy",
      "Content Planning",
      "Audience",
      "Engagement",
      "Analytics",
    ],
    category: "marketing",
  },
  {
    number: "08",
    title: "Google Ads",
    description:
      "Search and advertising campaigns built around user intent, carefully selected keywords, controlled budgets, conversion tracking and continuous optimization.",
    tags: [
      "Search Ads",
      "Keyword Targeting",
      "Campaigns",
      "Conversion Tracking",
      "Optimization",
    ],
    category: "marketing",
  },
  {
    number: "09",
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising campaigns that use audience targeting, creative testing, retargeting and conversion data to reach potential customers efficiently.",
    tags: [
      "Facebook Ads",
      "Instagram Ads",
      "Audience Targeting",
      "Retargeting",
      "Creative Testing",
    ],
    category: "marketing",
  },
  {
    number: "10",
    title: "Lead Generation",
    description:
      "A complete path from attracting the right audience to capturing their information through landing pages, forms or WhatsApp and turning that interest into qualified business opportunities.",
    tags: [
      "Landing Pages",
      "Lead Forms",
      "WhatsApp",
      "Funnels",
      "Conversion Tracking",
    ],
    category: "marketing",
  },
  {
    number: "11",
    title: "Conversion Optimization",
    description:
      "Improve the percentage of website visitors who take meaningful action by refining messaging, layouts, calls to action, forms, landing pages and the overall user journey.",
    tags: [
      "UX",
      "CTA Optimization",
      "Landing Pages",
      "Forms",
      "User Journey",
    ],
    category: "marketing",
  },
  {
    number: "12",
    title: "Google Business Profile & Local Marketing",
    description:
      "Improve your local online presence so customers searching for businesses and services in your area can find accurate, useful and trustworthy information about you.",
    tags: [
      "Google Business Profile",
      "Local Visibility",
      "Reviews",
      "Local Search",
    ],
    category: "marketing",
  },

  // ─────────────────────────────────────────────
  // SEO
  // ─────────────────────────────────────────────
  {
    number: "13",
    title: "Technical SEO",
    description:
      "Improve the technical foundation of your website so search engines can efficiently crawl, understand and index your pages while users get a fast and reliable experience.",
    tags: [
      "Crawlability",
      "Indexing",
      "Sitemap",
      "Core Web Vitals",
      "Schema",
    ],
    category: "seo",
  },
  {
    number: "14",
    title: "On-Page SEO",
    description:
      "Optimize individual pages around relevant search intent through better titles, headings, metadata, content structure, internal links and keyword targeting.",
    tags: [
      "Keywords",
      "Meta Data",
      "Headings",
      "Internal Links",
      "Search Intent",
    ],
    category: "seo",
  },
  {
    number: "15",
    title: "Off-Page SEO",
    description:
      "Strengthen your website's authority through legitimate link-building, outreach, digital PR and relevant brand mentions without relying on spammy tactics.",
    tags: [
      "Backlinks",
      "Outreach",
      "Digital PR",
      "Authority",
      "Brand Mentions",
    ],
    category: "seo",
  },
  {
    number: "16",
    title: "Local SEO",
    description:
      "Help your business become more visible in location-based searches through local optimization, business profiles, location-focused content and reputation signals.",
    tags: [
      "Local Keywords",
      "Google Profile",
      "Location Pages",
      "Reviews",
    ],
    category: "seo",
  },
  {
    number: "17",
    title: "SEO Audit",
    description:
      "A detailed review of your website's technical health, content, keywords, internal structure, backlinks and search visibility followed by actionable recommendations.",
    tags: [
      "Technical Audit",
      "Content Audit",
      "Keyword Analysis",
      "Competitors",
      "Recommendations",
    ],
    category: "seo",
  },
  {
    number: "18",
    title: "Keyword Research & Content SEO",
    description:
      "Identify the searches that matter to your business and build content around relevant topics, user intent and opportunities that can attract qualified organic traffic.",
    tags: [
      "Keyword Research",
      "Search Intent",
      "Content Strategy",
      "Topic Clusters",
    ],
    category: "seo",
  },

  // ─────────────────────────────────────────────
  // CONTENT & CREATIVE
  // ─────────────────────────────────────────────
  {
    number: "19",
    title: "Website Content Writing",
    description:
      "Clear and professional website copy for homepages, service pages, about pages and landing pages that explains your offer while building trust and guiding visitors toward action.",
    tags: [
      "Website Copy",
      "Service Pages",
      "About Pages",
      "Landing Pages",
    ],
    category: "content",
  },
  {
    number: "20",
    title: "Blog & Article Writing",
    description:
      "Well-structured articles designed to answer real customer questions, establish expertise and create useful content that can support long-term organic search visibility.",
    tags: [
      "Blogs",
      "Articles",
      "Research",
      "SEO Content",
      "Thought Leadership",
    ],
    category: "content",
  },
  {
    number: "21",
    title: "Copywriting",
    description:
      "Conversion-focused messaging for headlines, advertisements, landing pages, calls to action and sales-focused content designed to make your value clearer and your next step easier.",
    tags: [
      "Headlines",
      "Ad Copy",
      "CTAs",
      "Sales Copy",
      "Landing Pages",
    ],
    category: "content",
  },
  {
    number: "22",
    title: "Social Media Content",
    description:
      "Consistent social content including captions, ideas, educational posts, promotional messaging and brand storytelling designed around your audience and business goals.",
    tags: [
      "Captions",
      "Content Ideas",
      "Content Calendar",
      "Brand Storytelling",
    ],
    category: "content",
  },
  {
    number: "23",
    title: "Graphic & Marketing Creative",
    description:
      "Professional visual assets for social media, campaigns, advertisements, promotions and digital communication that keep your brand consistent across channels.",
    tags: [
      "Social Graphics",
      "Ad Creatives",
      "Banners",
      "Promotional Design",
      "Brand Assets",
    ],
    category: "content",
  },

  // ─────────────────────────────────────────────
  // MONETIZATION
  // ─────────────────────────────────────────────
  {
    number: "24",
    title: "Google AdSense Setup & Optimization",
    description:
      "Prepare and optimize eligible websites for advertising with a focus on correct implementation, policy-friendly practices, thoughtful ad placement and a balance between revenue opportunities and user experience.",
    tags: [
      "AdSense Setup",
      "Ad Placement",
      "Policy Guidance",
      "UX",
      "Optimization",
    ],
    category: "monetization",
  },
  {
    number: "25",
    title: "Website Monetization",
    description:
      "Explore practical ways to turn an established website into a revenue-generating asset through advertising strategy, content opportunities and user-focused monetization methods.",
    tags: [
      "Advertising",
      "Revenue Strategy",
      "Content",
      "User Experience",
    ],
    category: "monetization",
  },
  {
    number: "26",
    title: "Publisher & Ad Optimization",
    description:
      "Improve advertising performance through better placement, layout decisions, measurement and ongoing optimization while keeping the website useful and easy to navigate.",
    tags: [
      "Ad Optimization",
      "Placement",
      "Analytics",
      "Performance",
      "UX",
    ],
    category: "monetization",
  },

  // ─────────────────────────────────────────────
  // DIGITAL BUSINESS SOLUTIONS
  // ─────────────────────────────────────────────
  {
    number: "27",
    title: "Website Maintenance",
    description:
      "Keep your website updated, functional and reliable with ongoing technical maintenance, content updates, fixes and performance checks.",
    tags: [
      "Updates",
      "Bug Fixes",
      "Monitoring",
      "Performance",
    ],
    category: "solutions",
  },
  {
    number: "28",
    title: "Website Security",
    description:
      "Improve the security and reliability of your website through sensible configuration, updates, monitoring and protection against common website risks.",
    tags: [
      "Security",
      "Updates",
      "Monitoring",
      "Protection",
    ],
    category: "solutions",
  },
  {
    number: "29",
    title: "Analytics & Tracking Setup",
    description:
      "Set up the measurement tools needed to understand where visitors come from, what they do on your website and which marketing activities generate meaningful actions.",
    tags: [
      "Google Analytics",
      "Search Console",
      "Events",
      "Conversions",
    ],
    category: "solutions",
  },
  {
    number: "30",
    title: "WhatsApp Integration",
    description:
      "Connect your website with WhatsApp so visitors can quickly start conversations, request information or contact your business directly from relevant pages.",
    tags: [
      "WhatsApp",
      "Click-to-Chat",
      "Lead Capture",
      "CTA",
    ],
    category: "solutions",
  },
  {
    number: "31",
    title: "API & Third-Party Integrations",
    description:
      "Connect your website or application with external platforms, APIs and business tools to move data between systems and reduce manual work.",
    tags: [
      "APIs",
      "Integrations",
      "Automation",
      "Data",
    ],
    category: "solutions",
  },
  {
    number: "32",
    title: "Business Automation",
    description:
      "Identify repetitive digital tasks and connect the right systems to streamline workflows, reduce manual effort and make everyday business operations more efficient.",
    tags: [
      "Workflows",
      "Automation",
      "Integrations",
      "Efficiency",
    ],
    category: "solutions",
  },
  {
    number: "33",
    title: "Website Migration",
    description:
      "Move your website between platforms, hosting environments or technologies while carefully handling content, URLs, functionality and essential SEO considerations.",
    tags: [
      "Migration",
      "Content Transfer",
      "Redirects",
      "SEO",
    ],
    category: "solutions",
  },
  {
    number: "34",
    title: "Domain, DNS & Deployment Assistance",
    description:
      "Get help connecting domains, configuring DNS records, deploying websites and making sure the technical pieces are correctly connected and working together.",
    tags: [
      "Domains",
      "DNS",
      "Deployment",
      "Hosting",
      "SSL",
    ],
    category: "solutions",
  },
];