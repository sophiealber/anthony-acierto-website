import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Anthony Acierto — Medical Student",
  description:
    "Anthony Acierto is a medical student at the University of Cincinnati College of Medicine. Syracuse BME graduate, researcher, and aspiring physician-scientist.",
  openGraph: {
    title: "Anthony Acierto",
    description:
      "Medical student at UC College of Medicine. Aspiring physician-researcher.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
