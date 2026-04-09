import SectionHeader from "@/components/ui/SectionHeader";
import { DAY_FLOW } from "@/data/content";

export default function DayFlowSection() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          label="1日の流れ"
          title="入社後、こんな1日を過ごします"
          description="未経験の方も安心。最初は先輩と一緒に動きながら、少しずつ覚えていきます。"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[52px] md:left-[60px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-400 to-blue-100"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {DAY_FLOW.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-6 relative">
                {/* Time */}
                <div className="flex-shrink-0 w-24 md:w-28 text-right pt-1">
                  <span
                    className="inline-block bg-blue-700 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm"
                    style={{ background: i % 2 === 0 ? "#1D4ED8" : "#1E3A5F" }}
                  >
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white shadow-md flex-shrink-0 mt-1"
                    style={{ background: "#1D4ED8" }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-200 mb-2">
                  <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: "#0F2744" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-sm text-blue-800 font-medium mb-1">
            残業について
          </p>
          <p className="text-sm text-blue-700 leading-relaxed">
            基本的には定時（17:30）退社です。急ぎの案件が重なることはありますが、チームでカバーし合うため一人に負担が集中することはありません。
          </p>
        </div>
      </div>
    </section>
  );
}
