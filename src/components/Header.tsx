"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { SITE_CONFIG } from "@/data/content";

const NAV_LINKS = [
  { label: "仕事内容", href: "#job" },
  { label: "動画", href: "#videos" },
  { label: "福利厚生", href: "#benefits" },
  { label: "よくある質問", href: "#faq" },
  { label: "募集要項", href: "#requirements" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors ${
            scrolled ? "text-blue-900" : "text-white"
          }`}
          style={{ color: scrolled ? "#0F2744" : "white" }}
        >
          {SITE_CONFIG.companyName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href={SITE_CONFIG.applyUrl} size="sm">
            応募する
          </CTAButton>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-5 h-0.5 transition-all origin-center bg-current ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 transition-all origin-center bg-current ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium text-base py-2 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <CTAButton
            href={SITE_CONFIG.applyUrl}
            size="md"
            fullWidth
            className="mt-2"
          >
            応募する
          </CTAButton>
          <CTAButton
            href={SITE_CONFIG.contactUrl}
            size="md"
            variant="secondary"
            fullWidth
          >
            まずは話を聞く
          </CTAButton>
        </div>
      )}
    </header>
  );
}
