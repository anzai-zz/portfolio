import type { Metadata } from "next";
import { Yusei_Magic } from "next/font/google";

import Header from "./_/components/Header";

import "./_/styles/globals.css";

const inter = Yusei_Magic({ weight: "400", subsets: ["latin"] });

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
        <main className="max-w-screen-xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
