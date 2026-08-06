import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import GetStart from "@/rendering/home/getStart";
import SmoothScroll from "@/components/smoothScroll";
import { Toaster } from 'react-hot-toast';

const interSans = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata = {
  title: "ZeonFX | Multi-Asset Forex & CFD Broker | Tight Spreads, Fast Execution",
  description: "Trade forex and CFDs with ZeonFX. 100+ instruments across six asset classes, spreads from 0.0 pips on Raw ECN, MT5 and the ZeonFX Web Terminal, and instant funding. Open a live account in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interSans.variable} `}>
      <body>
        <Toaster position="top-right" />
        <SmoothScroll />
        <Header />
        {children}
        <GetStart />
        <Footer />
      </body>
    </html>
  );
}
