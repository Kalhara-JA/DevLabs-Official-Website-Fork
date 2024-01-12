import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import StorySectionCarousel from "@/components/home/StorySectionCarousel";
import StorySection from "@/components/home/StorySection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLabs",
  description: "DevLabs Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <StorySection />
        <Footer />
      </body>
    </html>
  );
}
