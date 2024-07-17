import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Nexcent",
  description: "Lessons and Insights from 8 years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="text-neutral-black">{children}</div>
        <Footer />
      </body>
    </html>
  );
}