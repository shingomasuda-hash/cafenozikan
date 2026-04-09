import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社富士菅工",
  description:
    "株式会社富士菅工の採用情報ページ。東京都23区内で水廻り・給排水管・電気設備の点検修理を行うプロ集団です。未経験・経験者ともに積極採用中。月給30万円〜、年間休日109日、資格取得支援制度あり。",
  openGraph: {
    title: "採用情報 | 株式会社富士菅工",
    description:
      "創業50年以上の技術力を誇る水廻りのプロ集団、富士菅工で一緒に働きませんか？未経験でも安心の教育制度、月給30万円〜、賞与年2回。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
