import { SITE_CONFIG } from "@/data/content";

export default function FinalCTASection() {
  return (
    <section
      id="apply"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #0F2744 0%, #1E4080 60%, #1a5276 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <span className="inline-block text-blue-300 text-xs font-semibold tracking-widest uppercase border border-blue-400/40 rounded-full px-4 py-1 mb-6">
          Join Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          一歩踏み出す勇気が、<br />
          あなたのキャリアを変える。
        </h2>

        <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          「自分にできるか不安」「もう少し聞いてから考えたい」
          どんな状況でも歓迎します。まずは気軽にコンタクトしてください。
        </p>

        {/* Three CTA options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Option 1: Apply */}
          <a
            href={SITE_CONFIG.applyUrl}
            className="flex flex-col items-center gap-3 bg-blue-600 hover:bg-blue-500 rounded-2xl p-6 border border-blue-400/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl group"
          >
            <span className="text-3xl">✍️</span>
            <div>
              <div className="text-white font-bold text-base mb-1">応募する</div>
              <div className="text-blue-200 text-xs leading-snug">
                選考に進む準備ができた方は<br />こちらから
              </div>
            </div>
            <span className="text-blue-300 text-sm group-hover:text-white transition-colors">
              応募フォームへ →
            </span>
          </a>

          {/* Option 2: Consult */}
          <a
            href={SITE_CONFIG.contactUrl}
            className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl group"
          >
            <span className="text-3xl">💬</span>
            <div>
              <div className="text-white font-bold text-base mb-1">まずは相談する</div>
              <div className="text-blue-200 text-xs leading-snug">
                「給与」「仕事内容」など<br />気になることを聞く
              </div>
            </div>
            <span className="text-blue-300 text-sm group-hover:text-white transition-colors">
              お問い合わせへ →
            </span>
          </a>

          {/* Option 3: Just listen */}
          <a
            href={`tel:${SITE_CONFIG.tel}`}
            className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl group"
          >
            <span className="text-3xl">📞</span>
            <div>
              <div className="text-white font-bold text-base mb-1">電話で話を聞く</div>
              <div className="text-blue-200 text-xs leading-snug">
                まず声で話したい方<br />お気軽にどうぞ
              </div>
            </div>
            <span className="text-blue-300 text-sm group-hover:text-white transition-colors">
              {SITE_CONFIG.tel}
            </span>
          </a>
        </div>

        {/* Reassurance */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="text-blue-200 text-sm leading-relaxed">
            応募後すぐに選考開始ではありません。まずはカジュアルな面談・見学から始めることも可能です。<br />
            「ここなら安心して応募できそう」と思ってもらえるよう、丁寧に対応します。
          </p>
        </div>
      </div>
    </section>
  );
}
