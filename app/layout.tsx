import Header from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Portfolio site",
};

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
