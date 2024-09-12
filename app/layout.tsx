import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Portfolio site",
};

const satoshiFont = localFont({
  src: './fonts/Satoshi-Variable.ttf',
  display: 'swap',
})

const sourceSans = localFont({
  src: './fonts/Source-Sans-3.ttf',
  display: 'swap',
})

import { Figtree } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn("antialiased max-w-3xl lg:mx-auto", figtree.className)}`}>
        <Header />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <footer className="py-24 text-center">
          <p className="text-base  text-gray-500">
            &copy; {new Date().getFullYear()}{" "}
            Harry Baines
          </p>
        </footer>
      </body>
    </html >
  );
}
