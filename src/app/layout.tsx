import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "山田行政書士事務所",
    template: "%s | 山田行政書士事務所",
  },
  description:
    "東京都千代田区の行政書士事務所。許認可申請、会社設立、相続・遺言、外国人在留資格など、暮らしとビジネスの法務手続きをサポートいたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
