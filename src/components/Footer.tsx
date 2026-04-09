import Link from "next/link";
import { SITE_CONFIG } from "@/data/content";

const NAV_LINKS = [
  { label: "仕事内容", href: "#job" },
  { label: "採用動画", href: "#videos" },
  { label: "1日の流れ", href: "#schedule" },
  { label: "福利厚生", href: "#benefits" },
  { label: "職場の雰囲気", href: "#atmosphere" },
  { label: "よくある質問", href: "#faq" },
  { label: "募集要項", href: "#requirements" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a1f3d" }} className="text-white pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company info */}
          <div>
            <div className="font-bold text-lg mb-3">{SITE_CONFIG.companyName}</div>
            <div className="text-blue-300 text-sm space-y-1">
              <p>{SITE_CONFIG.address}</p>
              <p>TEL: {SITE_CONFIG.tel}</p>
              <p>{SITE_CONFIG.email}</p>
            </div>
            <a
              href={SITE_CONFIG.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-blue-400 hover:text-blue-300 underline"
            >
              企業サイトはこちら →
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-sm text-blue-200 mb-3">ページ内リンク</div>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="font-semibold text-sm text-blue-200 mb-3">採用に関するお問い合わせ</div>
            <p className="text-blue-300 text-sm mb-4 leading-relaxed">
              選考への応募、会社見学、カジュアル面談など、まずはお気軽にご連絡ください。
            </p>
            <a
              href={SITE_CONFIG.applyUrl}
              className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              応募する →
            </a>
            <a
              href={SITE_CONFIG.contactUrl}
              className="inline-flex items-center justify-center w-full mt-2 border border-blue-400/40 text-blue-300 hover:text-white hover:border-white/50 font-medium text-sm px-6 py-3 rounded-full transition-colors"
            >
              まずは話を聞く
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.companyName} All Rights Reserved.</p>
          <p>採用に関するご不明点はお気軽にお問い合わせください</p>
        </div>
      </div>
    </footer>
  );
}
