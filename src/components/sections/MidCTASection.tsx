import CTAButton from "@/components/ui/CTAButton";
import { SITE_CONFIG } from "@/data/content";

interface MidCTASectionProps {
  title?: string;
  description?: string;
}

export default function MidCTASection({
  title = "まずは、話を聞いてみませんか？",
  description = "「応募するほどではないけど、もう少し知りたい」という方も大歓迎です。\n気軽にお問い合わせください。",
}: MidCTASectionProps) {
  return (
    <section className="py-16 md:py-20 bg-blue-700">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={SITE_CONFIG.applyUrl} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 transition-colors">
            今すぐ応募する →
          </CTAButton>
          <CTAButton
            href={SITE_CONFIG.contactUrl}
            size="lg"
            variant="secondary"
          >
            まずは話を聞く
          </CTAButton>
        </div>
        <p className="text-blue-200/70 text-xs mt-4">
          ※ 履歴書不要・選考なし・気軽にどうぞ
        </p>
      </div>
    </section>
  );
}
