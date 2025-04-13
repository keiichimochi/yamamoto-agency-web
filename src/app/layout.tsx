import type { Metadata } from "next";
import { Noto_Sans_JP, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import React from "react";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "700"],
});

const mplusRounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-mplus-rounded-1c",
  weight: "400",
});

export const metadata: Metadata = {
  title: "山本保険代理店 - 人生の季節に寄り添う保険",
  description: "3Dとアニメーションで彩る、新しい保険選び体験。あなたにぴったりの保険を見つけましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${mplusRounded1c.variable}`}>
      <body className="font-sans">
        <header className="fixed top-0 left-0 w-full h-16 bg-white bg-opacity-80 backdrop-blur-sm z-50 shadow-md">
          <div className="container mx-auto h-full flex items-center justify-between px-4">
            <div className="text-xl font-bold text-green-700">山本保険代理店</div>
            <nav>
              <ul className="flex space-x-4">
                <li>ホーム</li>
                <li>保険を探す</li>
                <li>会社案内</li>
                <li>ブログ</li>
                <li>お問い合わせ</li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="relative min-h-screen pt-16">
          {children}

          <div className="fixed inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-t from-blue-200 to-green-100 opacity-70">
            <p className="absolute bottom-4 left-4 text-sm text-gray-600">3D Scene Area (Placeholder)</p>
          </div>
        </main>
      </body>
    </html>
  );
}
