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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn("antialiased max-w-3xl lg:mx-auto", satoshiFont.className)}`}>
        <Header />
        <main className="flex-auto  min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <footer className="py-20 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            Harry Baines
          </p>
        </footer>
      </body>
    </html >
  );
}
