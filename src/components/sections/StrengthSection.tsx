import SectionHeader from "@/components/ui/SectionHeader";
import { STRENGTHS } from "@/data/content";

export default function StrengthSection() {
  return (
    <section
      id="strength"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #0F2744 0%, #1a3a6b 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="富士菅工の強み"
          title="なぜ50年以上、選ばれ続けるのか"
          description="技術力・対応力・信頼性。この3つを柱に、東京の現場に向き合ってきました。"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STRENGTHS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-10 rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6 md:p-8 text-center">
          <p className="text-blue-200 text-sm md:text-base leading-relaxed">
            「他の業者に断られたのに、富士菅工さんだけが直してくれた」
            <br className="hidden md:block" />
            こんな声をいただくことが、私たちの誇りです。
          </p>
          <p className="text-white font-bold text-lg md:text-xl mt-4">
            創業50年以上の技術と信頼が、あなたのキャリアを支えます。
          </p>
        </div>
      </div>
    </section>
  );
}
