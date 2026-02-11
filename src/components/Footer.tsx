import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">
              山田行政書士事務所
            </h3>
            <address className="not-italic text-white/80 text-sm space-y-2">
              <p>〒100-0001</p>
              <p>東京都千代田区千代田1-1-1</p>
              <p>千代田ビル 5階</p>
              <p className="pt-2">
                TEL:{" "}
                <a href="tel:03-1234-5678" className="hover:text-accent">
                  03-1234-5678
                </a>
              </p>
              <p>
                FAX: 03-1234-5679
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">ページリンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-accent transition-colors">
                  サービス紹介
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  事務所概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">営業時間</h3>
            <div className="text-white/80 text-sm space-y-2">
              <p>平日: 9:00 〜 18:00</p>
              <p>土曜: 10:00 〜 15:00（要予約）</p>
              <p>日曜・祝日: 休業</p>
              <p className="pt-2 text-accent-light">
                ※ 事前予約で時間外対応可能
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} 山田行政書士事務所 All Rights Reserved.</p>
          <p className="mt-1">※ これはデモサイトです。実在の事務所とは関係ありません。</p>
        </div>
      </div>
    </footer>
  );
}
