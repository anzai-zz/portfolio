import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";

import type React from "react";

import Footer from "@_/components/Footer";
import Header from "@_/components/Header";

import "@_/styles/global.css";
import * as styles from "@_/styles/layout.css";

const inter = Zen_Maru_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kuronekono.me"),
  title: {
    default: "くろねこのみー ～ポートフォリオ～",
    template: "%s - くろねこのみー",
  },
  description: "福島在住のフロントエンドエンジニアのポートフォリオです",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${styles.body}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
