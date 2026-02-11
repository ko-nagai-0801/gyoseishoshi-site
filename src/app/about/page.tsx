import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事務所概要",
  description:
    "山田行政書士事務所の概要、代表プロフィール、事務所理念、沿革をご紹介します。",
};

const officeInfo = [
  { label: "事務所名", value: "山田行政書士事務所" },
  { label: "代表者", value: "山田 太郎" },
  { label: "所在地", value: "〒100-0001 東京都千代田区千代田1-1-1 千代田ビル 5階" },
  { label: "TEL", value: "03-1234-5678" },
  { label: "FAX", value: "03-1234-5679" },
  { label: "営業時間", value: "平日 9:00〜18:00 / 土曜 10:00〜15:00（要予約）" },
  { label: "定休日", value: "日曜・祝日" },
  { label: "所属会", value: "東京都行政書士会" },
  { label: "登録番号", value: "第00000000号" },
];

const timeline = [
  { year: "2005年", event: "山田太郎、行政書士試験合格" },
  { year: "2006年", event: "都内大手行政書士法人にて勤務開始" },
  { year: "2010年", event: "山田行政書士事務所 開業（新宿区）" },
  { year: "2015年", event: "千代田区に事務所移転、スタッフ3名体制に" },
  { year: "2018年", event: "外国人在留資格分野を強化、申請取次行政書士届出" },
  { year: "2020年", event: "年間取扱件数200件突破" },
  { year: "2023年", event: "オンライン相談体制を構築" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-medium text-sm tracking-wider mb-2">
            ABOUT
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            事務所概要
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            山田行政書士事務所についてご紹介いたします。
          </p>
        </div>
      </section>

      {/* Representative Profile */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              REPRESENTATIVE
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              代表挨拶
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="md:flex gap-10 items-start">
            {/* Photo placeholder */}
            <div className="md:w-64 shrink-0 mb-8 md:mb-0">
              <div className="bg-primary/5 border border-border rounded-lg h-72 md:h-80 flex items-center justify-center text-text-muted">
                <div className="text-center">
                  <p className="text-5xl mb-2">👤</p>
                  <p className="text-xs">代表者写真</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-text-muted">代表行政書士</p>
                <p className="text-xl font-bold text-primary mt-1">山田 太郎</p>
                <p className="text-sm text-text-muted mt-1">Taro Yamada</p>
              </div>
            </div>

            {/* Greeting */}
            <div className="flex-1">
              <div className="bg-bg-white border border-border rounded-lg p-6 sm:p-8">
                <p className="text-text-light leading-loose text-sm sm:text-base">
                  山田行政書士事務所のホームページをご覧いただき、誠にありがとうございます。
                </p>
                <p className="text-text-light leading-loose text-sm sm:text-base mt-4">
                  当事務所は2010年の開業以来、「お客様の困りごとを、迅速・丁寧・確実に解決する」をモットーに、
                  許認可申請、会社設立、相続・遺言、外国人在留資格など、幅広い分野でサポートを行ってまいりました。
                </p>
                <p className="text-text-light leading-loose text-sm sm:text-base mt-4">
                  行政手続きは、専門的な知識が必要で、書類の作成や申請手続きに多くの時間と労力がかかります。
                  そのような手続きを、お客様に代わって正確かつスピーディーに行うことが、私たち行政書士の役割です。
                </p>
                <p className="text-text-light leading-loose text-sm sm:text-base mt-4">
                  「どこに相談すればいいかわからない」「何から始めればいいかわからない」
                  そのようなお悩みをお持ちの方も、まずはお気軽にご相談ください。
                  お客様一人ひとりに寄り添い、最適なご提案をさせていただきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-medium text-sm tracking-wider mb-2">
            PHILOSOPHY
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            事務所理念
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-accent text-lg font-bold mb-2">迅速・丁寧・確実</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                お客様のご依頼に対し、迅速にレスポンスし、丁寧なヒアリングを行い、確実な手続きを実現します。
              </p>
            </div>
            <div className="w-16 h-px bg-accent/30 mx-auto" />
            <div>
              <h3 className="text-accent text-lg font-bold mb-2">お客様目線の対応</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                専門用語をできるだけ使わず、わかりやすい説明を心がけています。お客様が安心してお任せいただけるよう努めます。
              </p>
            </div>
            <div className="w-16 h-px bg-accent/30 mx-auto" />
            <div>
              <h3 className="text-accent text-lg font-bold mb-2">地域社会への貢献</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                法律の専門家として、地域の皆様の暮らしやビジネスをサポートし、社会に貢献いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              OFFICE INFO
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              事務所情報
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="bg-bg-white border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {officeInfo.map((info, index) => (
                  <tr
                    key={info.label}
                    className={index !== officeInfo.length - 1 ? "border-b border-border" : ""}
                  >
                    <th className="bg-primary/5 px-4 sm:px-6 py-4 text-sm font-medium text-primary text-left w-32 sm:w-40 align-top">
                      {info.label}
                    </th>
                    <td className="px-4 sm:px-6 py-4 text-sm text-text-light">
                      {info.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              HISTORY
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              沿革
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          </div>

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-4 sm:gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0 mt-1.5" />
                  {index !== timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-accent font-bold text-sm">{item.year}</p>
                  <p className="text-text-light text-sm mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
