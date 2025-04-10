import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "DanderMile Player",
  description:
    "DanderMile 페어 플레이리스트 홈페이지입니다. © 2025 All Rights Reserved by @SN_Commission_.",
  openGraph: {
    title: "DanderMile Player",
    description:
      "DanderMile 페어 플레이리스트 홈페이지입니다. © 2025 All Rights Reserved by @SN_Commission_.",
    locale: "ko_KR",
    images: {
      url: "/img/img_0.png",
      alt: "헤더 이미지",
    },
  },
  twitter: {
    title: "DanderMile Player",
    description:
      "DanderMile 페어 플레이리스트 홈페이지입니다. © 2025 All Rights Reserved by @SN_Commission_.",
    images: [
      {
        url: "/img/img_0.png",
        alt: "헤더 이미지",
      },
    ],
  },
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
