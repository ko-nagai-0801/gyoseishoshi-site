import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サービス紹介",
  description:
    "許認可申請、会社設立、相続・遺言、外国人在留資格など、山田行政書士事務所の取扱業務をご紹介します。",
};

const services = [
  {
    icon: "📋",
    title: "許認可申請",
    description:
      "各種許認可の申請手続きを代行いたします。建設業・飲食業・運送業・産業廃棄物処理業など、幅広い業種に対応しています。",
    details: [
      "建設業許可（新規・更新・業種追加）",
      "飲食店営業許可",
      "運送業許可（一般貨物・軽貨物）",
      "産業廃棄物処理業許可",
      "古物商許可",
      "旅行業登録",
    ],
  },
  {
    icon: "🏢",
    title: "会社設立・法人設立",
    description:
      "株式会社・合同会社の設立手続きをトータルサポート。定款作成から各種届出まで、スムーズな法人設立をお手伝いいたします。",
    details: [
      "株式会社設立",
      "合同会社（LLC）設立",
      "NPO法人設立",
      "一般社団法人設立",
      "定款作成・認証",
      "各種届出代行",
    ],
  },
  {
    icon: "📜",
    title: "相続・遺言",
    description:
      "遺言書の作成支援から相続手続きまで、ご家族の大切な財産と未来を守るお手伝いをいたします。",
    details: [
      "遺言書作成支援（公正証書遺言・自筆証書遺言）",
      "相続人調査・戸籍収集",
      "遺産分割協議書の作成",
      "相続財産の調査",
      "各種名義変更手続き",
      "遺言執行者就任",
    ],
  },
  {
    icon: "🌏",
    title: "外国人在留資格",
    description:
      "在留資格の取得・更新・変更手続きを丁寧にサポート。外国人の方が安心して日本で生活・就労できるようお手伝いします。",
    details: [
      "在留資格認定証明書交付申請",
      "在留資格変更許可申請",
      "在留期間更新許可申請",
      "永住許可申請",
      "帰化許可申請",
      "就労ビザ・配偶者ビザ",
    ],
  },
  {
    icon: "📄",
    title: "各種契約書・書類作成",
    description:
      "ビジネスや日常生活で必要となる各種契約書・書類の作成を代行いたします。法的に有効な書類を作成し、トラブルを未然に防ぎます。",
    details: [
      "各種契約書の作成・レビュー",
      "内容証明郵便の作成",
      "示談書・和解契約書",
      "農地転用許可申請",
      "開発行為許可申請",
      "その他官公署への申請書類",
    ],
  },
  {
    icon: "🚗",
    title: "自動車関連手続き",
    description:
      "自動車の登録・変更・廃車などの手続きを代行いたします。お忙しい方に代わり、迅速に対応します。",
    details: [
      "自動車登録（新規・移転・変更）",
      "車庫証明申請",
      "自動車の廃車手続き",
      "ナンバー変更手続き",
      "出張封印対応",
      "特殊車両通行許可申請",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-medium text-sm tracking-wider mb-2">
            SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            サービス紹介
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            お客様の様々なニーズにお応えするため、幅広い業務を取り扱っております。
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-bg-white border border-border rounded-lg overflow-hidden shadow-sm ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } md:flex`}
            >
              {/* Icon Area */}
              <div className="bg-primary/5 md:w-48 flex items-center justify-center py-8 md:py-0 shrink-0">
                <span className="text-5xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {service.description}
                </p>
                <div>
                  <h3 className="text-sm font-bold text-text-muted mb-2">
                    主な取扱業務
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-text-light flex items-start gap-2 py-1"
                      >
                        <span className="text-accent mt-0.5">●</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            お困りごとはございませんか？
          </h2>
          <p className="text-white/70 mb-8">
            上記以外の業務についてもお気軽にご相談ください。
            <br />
            初回相談は無料で承っております。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent-light transition-colors"
          >
            無料相談のお申し込み
          </Link>
        </div>
      </section>
    </>
  );
}
