import Link from "next/link";

const services = [
  {
    title: "許認可申請",
    description:
      "建設業・飲食業・運送業など、各種許認可の申請手続きを代行いたします。",
    icon: "📋",
  },
  {
    title: "会社設立",
    description:
      "株式会社・合同会社の設立手続きから、定款作成・届出までトータルサポート。",
    icon: "🏢",
  },
  {
    title: "相続・遺言",
    description:
      "遺言書の作成支援、相続手続きのサポートで、大切なご家族の未来を守ります。",
    icon: "📜",
  },
  {
    title: "外国人在留資格",
    description:
      "在留資格の取得・更新・変更手続きを、丁寧にサポートいたします。",
    icon: "🌏",
  },
];

const strengths = [
  {
    title: "豊富な実績",
    description: "年間200件以上の申請実績。複雑な案件にも対応可能です。",
    number: "200+",
    unit: "件/年",
  },
  {
    title: "迅速な対応",
    description: "お問い合わせから24時間以内にご連絡いたします。",
    number: "24",
    unit: "時間以内",
  },
  {
    title: "高い許可率",
    description: "綿密な事前調査と丁寧な書類作成で高い許可率を維持。",
    number: "98",
    unit: "%",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-primary/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm sm:text-base mb-4 tracking-wider">
              東京都千代田区の行政書士事務所
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              暮らしとビジネスの
              <br />
              <span className="text-accent">法務手続き</span>を
              <br />
              トータルサポート
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              許認可申請・会社設立・相続手続き・在留資格など、
              <br className="hidden sm:block" />
              お客様の「困った」に寄り添い、確実に解決いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-accent text-primary font-bold text-center rounded hover:bg-accent-light transition-colors"
              >
                無料相談のご予約
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-4 border-2 border-white/30 text-white font-medium text-center rounded hover:bg-white/10 transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              取扱業務
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              STRENGTHS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              当事務所の強み
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-3">
                  <span className="text-accent text-4xl sm:text-5xl font-bold">
                    {item.number}
                  </span>
                  <span className="text-accent-light text-lg ml-1">
                    {item.unit}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access & CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              ACCESS
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              アクセス
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Map placeholder */}
            <div className="bg-bg-white border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/5 h-64 flex items-center justify-center text-text-muted">
                <div className="text-center">
                  <p className="text-4xl mb-2">📍</p>
                  <p className="text-sm">Google Maps 埋め込みエリア</p>
                  <p className="text-xs mt-1">東京都千代田区千代田1-1-1</p>
                </div>
              </div>
            </div>

            {/* Office Info + CTA */}
            <div>
              <div className="bg-bg-white border border-border rounded-lg p-6 mb-6">
                <h3 className="font-bold text-primary text-lg mb-4">事務所情報</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex">
                    <dt className="w-24 shrink-0 text-text-muted">所在地</dt>
                    <dd>東京都千代田区千代田1-1-1 千代田ビル 5階</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-24 shrink-0 text-text-muted">最寄駅</dt>
                    <dd>東京メトロ 大手町駅 徒歩5分</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-24 shrink-0 text-text-muted">TEL</dt>
                    <dd>
                      <a href="tel:03-1234-5678" className="text-primary hover:text-accent">
                        03-1234-5678
                      </a>
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="w-24 shrink-0 text-text-muted">営業時間</dt>
                    <dd>平日 9:00〜18:00</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
                <h3 className="font-bold text-primary text-lg mb-2">
                  まずはお気軽にご相談ください
                </h3>
                <p className="text-text-light text-sm mb-4">
                  初回相談は無料です。お電話またはフォームからお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:03-1234-5678"
                    className="inline-block px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary-light transition-colors"
                  >
                    📞 03-1234-5678
                  </a>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-accent text-primary font-bold rounded hover:bg-accent-light transition-colors"
                  >
                    お問い合わせフォーム
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
