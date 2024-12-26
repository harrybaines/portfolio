import { cn } from "@/lib/utils";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "antialiased min-h-screen flex flex-col items-center",
        GeistSans.className,
        GeistMono.className
      )}>
        <main className="flex-auto w-[85vw] max-w-2xl px-2">
          {children}
        </main>
        {/* <footer className="w-[85vw] max-w-2xl py-20 text-center mt-10 lg:mt-20">
          <p className="text-sm text-[#928374]">
            &copy; {new Date().getFullYear()} Harry Baines
          </p>
        </footer> */}
      </body>
    </html>
  );
}
