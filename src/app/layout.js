import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Rama Ramadani — Full-Stack Developer & IoT Engineer",
  description:
    "Portfolio of Rama Ramadani, Informatics Engineering student at Politeknik Negeri Batam. Specializing in full-stack web development (Laravel, Django, Next.js) and embedded IoT systems (Arduino, ESP32). 4× Project Leader with GPA 3.90.",
  keywords: [
    "Rama Ramadani",
    "Full-Stack Developer",
    "IoT Engineer",
    "Portfolio",
    "Laravel",
    "Django",
    "Next.js",
    "Arduino",
    "ESP32",
    "Politeknik Negeri Batam",
    "Batam",
  ],
  authors: [{ name: "Rama Ramadani" }],
  openGraph: {
    title: "Rama Ramadani — Full-Stack Developer & IoT Engineer",
    description:
      "Full-stack web developer and IoT engineer from Batam, Indonesia. Building reliable digital solutions from hardware to software.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

