import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import { Figtree } from "next/font/google";

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Portfolio site",
};

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn("antialiased max-w-3xl lg:mx-auto", figtree.variable)}`}>
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
