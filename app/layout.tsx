

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ─── Change these to your real domain ────────────────────────────────────────
const SITE_URL = "https://theheritageco.in";
const SITE_NAME = "The Heritage Co";
const TWITTER_HANDLE = "@theheritageco";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Heritage Co - Fresh Food & Groceries Delivered in 3 to 5 days",
    template: "%s | The Heritage Co",
  },
  description:
    "Buy fresh fruits, vegetables, dairy & organic groceries online. Every product lab tested & FSSAI certified. Farm-direct, delivered in 3 to 5 days across India.",
  keywords: [
    "fresh food delivery India",
    "buy groceries online",
    "organic vegetables online",
    "lab tested food",
    "FSSAI certified groceries",
    "farm fresh delivery",
    "cold pressed oil online",
    "A2 cow ghee online",
    "online grocery store India",
    "fresh fruit delivery",
  ],
  authors: [{ name: "The Heritage Co", url: SITE_URL }],
  creator: "The Heritage Co",
  publisher: "The Heritage Co",
  category: "Food & Grocery",

  // ── Canonical / Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "hi-IN": "/hi",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "The Heritage Co — Fresh Food & Groceries Delivered in 3 to 5 days",
    description:
      "Farm-direct fresh food, lab tested & FSSAI certified. Fruits, vegetables, dairy & organic groceries delivered in 3 to 5 days.",
    images: [
      {
        url: "/logo.png",       // place a 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "The Heritage Co — Farm Fresh, Lab Tested Groceries",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: "The Heritage Co — Fresh Food Delivered in 3 to 5 days",
    description:
      "Lab tested, FSSAI certified. Farm-direct fresh food delivered fast.",
    images: ["/logo.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── App / PWA ─────────────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png",  sizes: "16x16",  type: "image/png" },
      { url: "/logo.png",  sizes: "32x32",  type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a7a3f" },
    ],
  },

  // ── Verification (add your real codes from Search Console / Bing) ─────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
    // bing:   "YOUR_BING_TOKEN",
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: "/manifest.json",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
      sameAs: [
        "https://instagram.com/foodwebindia",
        "https://twitter.com/foodwebindia",
        "https://facebook.com/foodwebindia",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    },
    // WebSite (enables Google sitelinks search box)
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    // LocalBusiness (helps with local SEO)
    {
      "@type": "GroceryStore",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      image: `${SITE_URL}/og-image.jpg`,
      url: SITE_URL,
      telephone: "+91-XXXXXXXXXX",
      priceRange: "₹₹",
      servesCuisine: "Fresh & Organic Food",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasMap: "https://maps.google.com/?q=FoodWeb+India",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "06:00",
        closes: "23:00",
      },
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Theme color — matches FoodWeb green */}
        <meta name="theme-color" content="#1a7a3f" />
        <meta name="msapplication-TileColor" content="#1a7a3f" />

        {/* Geo targeting for Indian audience */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* DNS prefetch for faster third-party loads */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}