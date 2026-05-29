import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jignesh-tandel-portfolio.vercel.app"),
  title: "Jignesh Tandel | Full Stack Developer",
  description:
    "Full Stack Developer with professional experience in Next.js, TypeScript, and the MERN stack. Specialized in building scalable web applications and secure APIs.", // Derived from your summary
  keywords: [
    "Jignesh Tandel",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Software Engineer Gujarat",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Jignesh Tandel" }],
  openGraph: {
    title: "Jignesh Tandel | Full Stack Developer",
    description:
      "Explore the portfolio of Jignesh Tandel, a Full Stack Developer experienced in building production-ready systems with Next.js and MongoDB.", // Highlights your focus
    url: "https://jignesh-tandel-portfolio.vercel.app",
    siteName: "Jignesh Tandel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jignesh Tandel Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jignesh Tandel | Full Stack Developer",
    description:
      "Full Stack Developer experienced with the MERN stack and Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
