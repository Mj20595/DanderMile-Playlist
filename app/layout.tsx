import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "DanderMile Player",
  description:
    "DanderMile 페어 플레이리스트 홈페이지입니다. © 2025 All Rights Reserved by @SN_Commission_.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`font-custom antialiased`}>{children}</body>
    </html>
  );
}
