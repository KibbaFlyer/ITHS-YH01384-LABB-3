import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Submission number 3",
  description: "For ITHS React course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-2 space-x-4 flex flex-wrap">
          <Link className="text-xl font-bold" href="/">Home</Link>
          <Link className="text-xl font-bold" href="/bored">Bored</Link>
          <Link className="text-xl font-bold" href="/catfacts">Catfacts</Link>
          <Link className="text-xl font-bold" href="/dogpic">Dog pics</Link>
          <Link className="text-xl font-bold" href="/lyrics">Lyrics</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
