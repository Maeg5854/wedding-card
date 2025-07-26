import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "현준♥︎혜린 결혼합니다",
  description: "We Get Married",
  icons: {
    icon: "/favicon_.ico",
  },
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    url: "http://localhost:3000",
    siteName: "전현준 🤍 김혜린 결혼합니다.",
    title: "전현준 🤍 김혜린 결혼합니다.",
    description: "2025년 8월 20일(토) 오후 4시\n아펠가모 공덕 마리에홀",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
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
    <html lang="en">
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: "#F7F7F7" }}
      >
        {children}
      </body>
    </html>
  );
}
