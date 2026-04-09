import SectionHeader from "@/components/ui/SectionHeader";
import { ATMOSPHERE } from "@/data/content";

// ダミースタッフデータ（実際の写真・コメントに差し替え）
const STAFF_VOICES = [
  {
    name: "A.T さん（30代・男性）",
    tenure: "入社3年目",
    comment:
      "前職は全く違う業界でした。最初は不安でしたが、先輩が毎日一緒に現場に来てくれて、本当に丁寧に教えてもらいました。今では一人でほとんどの案件に対応できるようになっています。",
    avatarColor: "#1D4ED8",
    initial: "A",
  },
  {
    name: "K.N さん（20代・女性）",
    tenure: "入社2年目",
    comment:
      "女性だから不安という気持ちはありましたが、職場の雰囲気が穏やかで、すぐになじめました。体力仕事の部分は先輩がカバーしてくれるので、無理をしなくていいのが助かっています。",
    avatarColor: "#0EA5E9",
    initial: "K",
  },
  {
    name: "M.S さん（40代・男性）",
    tenure: "入社8年目",
    comment:
      "以前は別の設備会社にいました。富士菅工は技術力が本当に高くて、「他の業者に断られた案件を直す」という経験を何度もしています。やりがいが大きい職場です。",
    avatarColor: "#1E3A5F",
    initial: "M",
  },
];

export default function AtmosphereSection() {
  return (
    <section id="atmosphere" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="スタッフ・職場の雰囲気"
          title="どんな人たちと、どんな職場で働くのか"
          description="入社前に一番気になるのは「職場の雰囲気」ではないでしょうか。実際の声をお届けします。"
        />

        {/* Atmosphere cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {ATMOSPHERE.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-sm md:text-base mb-2" style={{ color: "#0F2744" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Staff composition */}
        <div
          className="rounded-2xl p-6 md:p-10 mb-14"
          style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-6 text-center" style={{ color: "#0F2744" }}>
            社員構成
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "社員数", value: "19名" },
              { label: "男女比", value: "ほぼ半々" },
              { label: "20〜30代", value: "2名在籍" },
              { label: "年齢層", value: "20代〜60代" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xl font-bold text-blue-700">{item.value}</div>
                <div className="text-xs text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            ベテランが多い職場ですが、若手の採用に積極的に取り組んでいます。<br />
            あなたの存在が、会社に新しい風を吹き込みます。
          </p>
        </div>

        {/* Staff voices */}
        <h3 className="text-lg md:text-xl font-bold mb-6 text-center" style={{ color: "#0F2744" }}>
          スタッフの声
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STAFF_VOICES.map((staff, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <div className="text-blue-200 text-4xl font-serif leading-none mb-3">"</div>

              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">
                {staff.comment}
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: staff.avatarColor }}
                >
                  {staff.initial}
                </div>
                <div>
                  <div className="font-medium text-sm" style={{ color: "#0F2744" }}>
                    {staff.name}
                  </div>
                  <div className="text-xs text-gray-400">{staff.tenure}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          ※ 実際の社員のコメントに差し替えてください
        </p>
      </div>
    </section>
  );
}
