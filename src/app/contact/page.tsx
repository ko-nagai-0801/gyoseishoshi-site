"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata export doesn't work in client components,
// so we use a separate head or keep it simple for this demo.

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "許認可申請について",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    "許認可申請について",
    "会社設立について",
    "相続・遺言について",
    "外国人在留資格について",
    "契約書・書類作成について",
    "その他",
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください。";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください。";
    }

    if (formData.phone && !/^[\d\-+()\s]+$/.test(formData.phone)) {
      newErrors.phone = "正しい電話番号を入力してください。";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください。";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <>
        <section className="bg-primary py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-accent font-medium text-sm tracking-wider mb-2">
              CONTACT
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              お問い合わせ
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-bg-white border border-border rounded-lg p-8 sm:p-12">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                送信が完了しました
              </h2>
              <p className="text-text-light leading-relaxed mb-2">
                お問い合わせいただき、ありがとうございます。
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                内容を確認の上、2営業日以内にご連絡いたします。
              </p>
              <p className="text-xs text-text-muted mb-8">
                ※ これはデモサイトのため、実際の送信は行われておりません。
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "許認可申請について",
                    message: "",
                  });
                }}
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary-light transition-colors"
              >
                お問い合わせに戻る
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-medium text-sm tracking-wider mb-2">
            CONTACT
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            お問い合わせ
          </h1>
          <p className="text-white/70 mt-4 max-w-xl mx-auto">
            ご相談・お問い合わせはお電話またはフォームにて承っております。
            <br />
            初回相談は無料です。
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="bg-bg-white border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary text-lg mb-4">
                  お電話でのお問い合わせ
                </h3>
                <a
                  href="tel:03-1234-5678"
                  className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                >
                  03-1234-5678
                </a>
                <p className="text-text-muted text-sm mt-2">
                  平日 9:00〜18:00
                </p>
              </div>

              <div className="bg-bg-white border border-border rounded-lg p-6">
                <h3 className="font-bold text-primary text-lg mb-4">
                  所在地
                </h3>
                <p className="text-text-light text-sm">
                  〒100-0001
                  <br />
                  東京都千代田区千代田1-1-1
                  <br />
                  千代田ビル 5階
                </p>
                <p className="text-text-muted text-sm mt-3">
                  東京メトロ 大手町駅 徒歩5分
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h3 className="font-bold text-primary text-sm mb-2">
                  ご相談にあたって
                </h3>
                <ul className="text-text-light text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">●</span>
                    初回相談は無料です
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">●</span>
                    秘密厳守で対応いたします
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">●</span>
                    オンライン相談にも対応可能です
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">●</span>
                    2営業日以内にご連絡いたします
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-bg-white border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  フォームでのお問い合わせ
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text mb-1"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className={`w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                        errors.name ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text mb-1"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={`w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                        errors.email ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text mb-1"
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03-1234-5678"
                      className={`w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                        errors.phone ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text mb-1"
                    >
                      ご相談内容の種類
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-1"
                    >
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="ご相談内容をご記入ください"
                      className={`w-full px-4 py-3 border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 resize-vertical ${
                        errors.message ? "border-red-400" : "border-border"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Note */}
                  <p className="text-text-muted text-xs leading-relaxed">
                    ※ ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用いたします。
                    <br />※ これはデモサイトです。実際の送信機能はありません。
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-accent text-primary font-bold rounded hover:bg-accent-light transition-colors"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
