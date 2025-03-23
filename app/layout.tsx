import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Sample Player",
  description: "확인용 샘플 페이지입니다.",
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
