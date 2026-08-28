import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} — Web Development & Digital Marketing Agency`,
    template: `%s — ${siteConfig.name}`,
  },

  description:
    "Techlance is a web development and digital marketing agency helping businesses grow with high-performance websites, e-commerce solutions, SEO, Shopify development, and digital marketing.",

  keywords: [
    "Techlance",
    "web development agency Pakistan",
    "website development company Pakistan",
    "digital marketing agency Pakistan",
    "ecommerce development Pakistan",
    "Shopify development Pakistan",
    "Next.js development",
    "React development",
    "SEO agency Pakistan",
    "Google Ads agency",
    "Facebook Ads agency",
  ],

  authors: [
    {
      name: "Techlance",
      url: siteConfig.url,
    },
  ],

  creator: "Techlance",
  publisher: "Techlance",

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Web Development & Digital Marketing Agency`,
    description:
      "Web development, e-commerce, Shopify, SEO, and digital marketing solutions for growing businesses.",
    siteName: siteConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Web Development & Digital Marketing Agency`,
    description:
      "Web development, e-commerce, Shopify, SEO, and digital marketing solutions for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('techlance-theme');
    var theme = stored ? stored : 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="font-sans antialiased bg-bg text-ink transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}