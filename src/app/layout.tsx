import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Noto_Serif_Ethiopic } from "next/font/google";
import { site } from "@/content/site";
import { MotionProvider } from "@/components/ui/motion-provider";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const ethiopic = Noto_Serif_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  weight: ["400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Gezahegn Gulilat",
    "Software Engineer",
    "Senior Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Laravel",
    "Go",
    "React",
    "Addis Ababa",
    "Ethiopia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: "Gezahegn",
    lastName: "Gulilat",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f1ea",
};

/** Applies a saved theme before paint to avoid a flash. */
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.nameEthiopic,
  url: site.url,
  image: `${site.url}${site.photo.src}`,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: site.education.school,
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Backend Engineering",
    "API Development",
    "Artificial Intelligence",
    "AI Agents",
    "Workflow Automation",
    "Test Automation",
  ],
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable} ${ethiopic.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className="min-h-dvh bg-paper text-ink">
        <a
          href="#main"
          className="label sr-only z-[100] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
