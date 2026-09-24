import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Thumb Auto: Touch Grass",
  description: "A GTA VI minigame featuring the @unlayer/react-image-editor",
};

export default function RootLayout({ children, editor }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col lg:flex-row bg-[#051a23] font-sans">
        <nav className="relative flex w-full flex-row items-center justify-between px-4 py-3 lg:h-full lg:w-auto lg:flex-col lg:justify-start">
          <Link
            href="/"
            className="relative size-16 shrink-0 lg:absolute lg:size-60 lg:top-3 lg:left-1/2 lg:-translate-x-1/2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={320}
              height={320}
              preload
            />
          </Link>
          <div className="flex lg:flex-1 lg:flex-col lg:items-center lg:justify-center">
            <MainNav />
          </div>
        </nav>
        {children}
        {editor}
      </body>
    </html>
  );
}
