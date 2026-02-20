import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony Acierto — Medical Student",
  description:
    "Anthony Acierto is a medical student at the University of Cincinnati College of Medicine. Syracuse BME graduate, researcher, and aspiring physician-scientist.",
  openGraph: {
    title: "Anthony Acierto",
    description:
      "Medical student at UC College of Medicine. Syracuse BME '24, 4.0 GPA. Aspiring physician-researcher.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
