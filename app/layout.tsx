import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Headbar from "@/components/Headbar";

const display = Syne({ subsets: ["latin"], variable: "--font-display", weight: ["700", "800"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Zagab — Design Portfolio",
  description: "Portofolio desain Zagab: 3D, motion graphic, desain grafis, poster, dan video editing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <TopBanner />
        <Headbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
