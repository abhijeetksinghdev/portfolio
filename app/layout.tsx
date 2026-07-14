import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Abhijeet Kumar Singh — Senior Java Backend Developer",
  description:
    "Java Backend Developer with 4.5+ years across telecom and tax-technology domains — Spring Boot, Kafka, Spark, IBM DB2, Kubernetes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          // Runs before paint to avoid a flash of the wrong theme.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('aks-theme');var l=s?s==='light':window.matchMedia('(prefers-color-scheme: light)').matches;if(l)document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body bg-graphite-950 text-offwhite antialiased">
        <div className="grain fixed inset-0 z-[1] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
