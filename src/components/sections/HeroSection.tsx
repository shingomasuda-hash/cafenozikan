import CTAButton from "@/components/ui/CTAButton";
import { HERO, STATS, SITE_CONFIG } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br"
        style={{
          background: "linear-gradient(135deg, #0F2744 0%, #1E4080 50%, #1a5276 100%)",
        }}
      />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          <span className="text-blue-200 text-sm font-medium tracking-wide">
            未経験・経験者 ともに積極採用中
          </span>
        </div>

        {/* Main copy */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {HERO.catchCopy}
        </h1>

        {/* Sub copy */}
        <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-2xl mb-4 whitespace-pre-line">
          {HERO.subCopy}
        </p>

        {/* Note */}
        <p className="text-sm md:text-base text-blue-300 font-medium mb-10">
          {HERO.note}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <CTAButton
            href={SITE_CONFIG.applyUrl}
            size="lg"
            fullWidth
          >
            今すぐ応募する →
          </CTAButton>
          <CTAButton
            href={SITE_CONFIG.contactUrl}
            size="lg"
            variant="outline"
            fullWidth
          >
            まずは話を聞く
          </CTAButton>
        </div>

        {/* Reassurance text */}
        <p className="text-blue-300/80 text-xs mt-4">
          ※ 履歴書不要・まずはお気軽にどうぞ
        </p>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 w-full bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-2 ${
                  i < STATS.length - 1 ? "md:border-r border-white/20" : ""
                }`}
              >
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                  <span className="text-base font-medium text-blue-200">
                    {stat.unit}
                  </span>
                </span>
                <span className="text-xs text-blue-300 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
