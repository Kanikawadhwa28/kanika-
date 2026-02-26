import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/ClientProviders";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "InfluenceIN — India's #1 Influencer Marketing Platform",
  description: "Connect with 7,50,000+ verified influencers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div id="cur" />
          <div id="cur-ring" />
          <div id="sprog" />
          <BackToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}