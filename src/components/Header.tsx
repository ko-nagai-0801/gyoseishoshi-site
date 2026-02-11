"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス紹介" },
  { href: "/about", label: "事務所概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-accent font-bold text-xl sm:text-2xl tracking-wide">
              山田行政書士事務所
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-accent transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-accent text-primary font-bold text-sm rounded hover:bg-accent-light transition-colors"
            >
              無料相談
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-primary-dark border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/90 hover:text-accent hover:bg-white/5 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-2 px-5 py-3 bg-accent text-primary font-bold text-center rounded hover:bg-accent-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              無料相談はこちら
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
