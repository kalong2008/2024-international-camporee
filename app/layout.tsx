import type { Metadata } from "next";
import { Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/ui/nagivation";
import FooterComponent from "./ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const notoHK = Noto_Sans_HK({ preload: false, });

export const metadata: Metadata = {
  title: "2024年國際金波利 | 基督復臨安息日會 港澳區會",
  description: "2024 international camporee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoHK.className}>
        <div><SideNav />
        {children}
        <SpeedInsights/>
        <Analytics/>
        </div>
        <FooterComponent />
      </body>
    </html>
  );
}
