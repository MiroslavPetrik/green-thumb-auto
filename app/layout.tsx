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
      <body className="h-full flex flex-row bg-[#051a23] font-sans">
        <nav className="relative flex h-full flex-col items-center px-4 py-3">
          <Link
            href="/"
            className="absolute size-60 top-3 left-1/2 -translate-x-1/2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={320}
              height={320}
              preload
            />
          </Link>
          <div className="flex flex-1 flex-col items-center justify-center">
            <MainNav />
          </div>
        </nav>
        {children}
        {editor}
      </body>
    </html>
  );
}
