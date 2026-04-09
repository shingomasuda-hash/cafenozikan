import SectionHeader from "@/components/ui/SectionHeader";
import { BENEFITS } from "@/data/content";

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 md:py-28"
      style={{ background: "#F0F4F8" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="福利厚生・働く環境"
          title="安心して長く働ける環境を整えています"
          description="給与・休日・研修・家族サポートまで、生活のあらゆる面でスタッフを支えます。"
        />

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {BENEFITS.map((group, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-sm md:text-base" style={{ color: "#0F2744" }}>
                  {group.category}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#DBEAFE" }}
                    >
                      <svg
                        className="w-2.5 h-2.5"
                        style={{ color: "#1D4ED8" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Holiday highlight */}
        <div
          className="rounded-2xl p-6 md:p-10 text-center"
          style={{ background: "linear-gradient(135deg, #0F2744 0%, #1E4080 100%)" }}
        >
          <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
            週休3日制も選べます
          </h3>
          <p className="text-blue-200 text-sm md:text-base mb-6 leading-relaxed">
            標準は年間休日109日（週休2日制）ですが、週休3日制を選択すると年間休日165日になります。<br />
            ライフスタイルに合わせた働き方を選べます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-4 text-center">
              <div className="text-3xl font-bold text-white">109<span className="text-lg">日</span></div>
              <div className="text-blue-300 text-sm mt-1">週休2日制</div>
            </div>
            <div className="text-blue-300 text-2xl font-light">または</div>
            <div
              className="border border-blue-300/50 rounded-xl px-8 py-4 text-center"
              style={{ background: "rgba(29, 78, 216, 0.3)" }}
            >
              <div className="text-3xl font-bold text-white">165<span className="text-lg">日</span></div>
              <div className="text-blue-300 text-sm mt-1">週休3日制</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
