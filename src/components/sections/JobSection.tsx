import SectionHeader from "@/components/ui/SectionHeader";
import { JOB_FLOW, JOB_SKILLS } from "@/data/content";

export default function JobSection() {
  return (
    <section id="job" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="仕事内容"
          title="1日の現場対応の流れ"
          description="問い合わせを受けてから完了報告まで。未経験の方も流れがイメージしやすいよう紹介します。"
        />

        {/* Flow steps */}
        <div className="flex flex-col gap-0 mb-16">
          {JOB_FLOW.map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow"
                  style={{ background: "linear-gradient(135deg, #1D4ED8, #1E5FA8)" }}
                >
                  {i + 1}
                </div>
                {i < JOB_FLOW.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-400 to-blue-100 my-1 min-h-8" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1 pt-1">
                <span className="text-xs font-semibold text-blue-600 tracking-widest">
                  {item.step}
                </span>
                <h3 className="text-base md:text-lg font-bold mt-1 mb-2" style={{ color: "#0F2744" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills you'll gain */}
        <div
          className="rounded-2xl p-6 md:p-10"
          style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-6" style={{ color: "#0F2744" }}>
            身につくスキル・技術
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {JOB_SKILLS.map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#1D4ED8" }}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Building types */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🏢", label: "オフィスビル" },
            { icon: "🏬", label: "テナント・店舗" },
            { icon: "🏠", label: "マンション・アパート" },
            { icon: "🏗️", label: "大型施設" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
