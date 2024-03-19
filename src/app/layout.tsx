import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";

import Header from "@_/components/Header";

import "@_/styles/globals.css";

const inter = Zen_Maru_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "ポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 min-h-[100svh]">
          {children}
        </main>
        <small className="p-3 bg-black text-white text-sm block text-center">© kuronekono.me</small>
      </body>
    </html>
  );
}
