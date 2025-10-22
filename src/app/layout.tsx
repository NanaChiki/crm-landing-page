import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "建築業向けCRM - 顧客管理とメンテナンスリマインダー",
  description: "建築業・板金・塗装・屋根工事業者向けの顧客管理CRM。メンテナンス時期を自動リマインダーで通知し、営業機会を最大化。Windows版を無料でダウンロード可能。",
  keywords: ["CRM", "建築業", "顧客管理", "メンテナンス", "リマインダー", "板金", "塗装", "屋根工事"],
  openGraph: {
    title: "建築業向けCRM - 顧客管理とメンテナンスリマインダー",
    description: "メンテナンス時期を見逃さない自動リマインダーで営業機会を最大化",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "建築業向けCRM - 顧客管理とメンテナンスリマインダー",
    description: "メンテナンス時期を見逃さない自動リマインダーで営業機会を最大化",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
