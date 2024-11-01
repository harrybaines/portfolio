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
      </head>
      <body className={cn(
        "antialiased min-h-screen flex flex-col items-center",
        GeistSans.className,
        GeistMono.className
      )}>
        <main className="flex-auto w-full max-w-2xl px-4">
          {children}
        </main>
        <footer className="w-full max-w-2xl px-4 py-20 text-center mt-20">
          <p className="text-sm text-zinc-400 font-mono">
            &copy; {new Date().getFullYear()} Harry Baines
          </p>
        </footer>
      </body>
    </html>
  );
}
