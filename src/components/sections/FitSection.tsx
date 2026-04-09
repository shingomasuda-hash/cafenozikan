import SectionHeader from "@/components/ui/SectionHeader";
import { FIT_CARDS } from "@/data/content";

export default function FitSection() {
  return (
    <section id="fit" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="こんな方に向いています"
          title="あなたはどのタイプですか？"
          description="富士菅工は未経験からでも安心して働ける環境と、経験者がさらに成長できるフィールドを用意しています。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {FIT_CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{card.icon}</span>
                <div>
                  <span
                    className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-2"
                  >
                    {card.badge}
                  </span>
                  <h3 className="text-base md:text-lg font-bold mb-2" style={{ color: "#0F2744" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
