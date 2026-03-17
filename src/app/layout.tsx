import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../modules/landing-page/footer";
import Navbar from "../components/ui/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
}) 

export const metadata: Metadata = {
  title: "APECX 2026",
  description: "Annual Petroleum Competition and Exhibition 2026 by SPE UGM SC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
