# 山田行政書士事務所 デモサイト

行政書士事務所のデモサイトです。Next.js + Tailwind CSS で構築し、Vercel でホスティングしています。

> **注意**: これはデモサイトです。実在の事務所とは関係ありません。

## デモ

https://gyoseishoshi-site.vercel.app

## 技術スタック

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Vercel** (ホスティング)

## ページ構成

| ページ | パス | 内容 |
|--------|------|------|
| トップ | `/` | ヒーロー、サービス概要、事務所の強み、アクセス情報 |
| サービス紹介 | `/services` | 取扱業務一覧（許認可・会社設立・相続・在留資格 等） |
| 事務所概要 | `/about` | 代表挨拶、事務所理念、事務所情報、沿革 |
| お問い合わせ | `/contact` | お問い合わせフォーム（フロントのみ） |

## デザイン

- **カラー**: プライマリ=#1B3A5C（紺）、アクセント=#C8A45C（金）、背景=#F8F7F4（オフホワイト）
- **フォント**: Noto Sans JP
- **レスポンシブ**: モバイルファースト対応

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 でアクセスできます。

## ビルド

```bash
npm run build
```

## デプロイ

GitHub の `main` ブランチに push すると Vercel へ自動デプロイされます。
