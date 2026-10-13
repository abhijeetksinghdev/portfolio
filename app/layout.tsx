import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Manrope } from "next/font/google";
import PortfolioBackground from "@/components/PortfolioBackground";
import { profile } from "@/lib/data";
import { getExperienceLabel } from "@/lib/experience";
import "./globals.css";

const portfolioUrl = "https://abhijeetksinghdev.netlify.app";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0a" },
    { media: "(prefers-color-scheme: light)", color: "#eeece5" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: "Abhijeet Kumar Singh — Java Backend Engineer",
  description: `Java Backend Engineer with ${getExperienceLabel()} of experience designing and modernizing distributed systems with Java 8-21, Spring Boot 2/3, Kafka, Spark, OpenShift, and Kubernetes.`,
  applicationName: "Abhijeet Kumar Singh Portfolio",
  authors: [{ name: "Abhijeet Kumar Singh", url: portfolioUrl }],
  creator: "Abhijeet Kumar Singh",
  keywords: [
    "Abhijeet Kumar Singh",
    "Java Backend Engineer",
    "Spring Boot",
    "Spring Cloud",
    "Microservices",
    "Kafka",
    "Apache Spark",
    "Kubernetes",
    "Red Hat OpenShift",
    "Grafana",
    "Prometheus",
    "Backend Developer",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-v6.svg?brand=20261012", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-v6-32.png?brand=20261012", type: "image/png", sizes: "32x32" },
      { url: "/favicon-v6.ico?brand=20261012", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: [{ url: "/favicon-v6.ico?brand=20261012", type: "image/x-icon" }],
    apple: [
      { url: "/apple-touch-icon-v6.png?brand=20261012", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abhijeet Kumar Singh Portfolio",
    title: "Abhijeet Kumar Singh — Java Backend Engineer",
    description: "Distributed backend engineering across government tax-processing and telecom service-assurance systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Kumar Singh — Java Backend Engineer",
    description: "Distributed backend engineering across government tax-processing and telecom service-assurance systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: portfolioUrl,
  image: `${portfolioUrl}/images/abhijeet-kumar-singh-profile.webp`,
  jobTitle: profile.role,
  sameAs: [profile.linkedinUrl, profile.githubUrl],
  worksFor: {
    "@type": "Organization",
    name: "Infosys Limited",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "IES College of Technology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    },
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Microservices",
    "Apache Kafka",
    "Apache Spark",
    "Kubernetes",
    "IBM DB2",
    "Amazon EC2",
    "Amazon S3",
    "Grafana",
    "Kibana",
    "Prometheus",
    "JUnit",
    "Mockito",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          // Runs before paint to avoid a flash of the wrong theme.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('aks-theme');var l=s?s==='light':window.matchMedia('(prefers-color-scheme: light)').matches;if(l)document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body bg-graphite-950 text-offwhite antialiased">
        <div id="google_translate_element" aria-hidden="true" className="fixed left-[-9999px] top-0 h-px w-px overflow-hidden" />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-indigo-500 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-card transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <PortfolioBackground />
        <div className="grain fixed inset-0 z-20 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
