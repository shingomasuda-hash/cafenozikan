import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import FitSection from "@/components/sections/FitSection";
import StrengthSection from "@/components/sections/StrengthSection";
import JobSection from "@/components/sections/JobSection";
import MidCTASection from "@/components/sections/MidCTASection";
import VideoSection from "@/components/sections/VideoSection";
import DayFlowSection from "@/components/sections/DayFlowSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import FaqSection from "@/components/sections/FaqSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. ファーストビュー */}
        <HeroSection />

        {/* 2. こんな方に向いています */}
        <FitSection />

        {/* 3. 富士菅工の強み */}
        <StrengthSection />

        {/* 4. 仕事内容 */}
        <JobSection />

        {/* 中間CTA（上部〜中部の応募導線） */}
        <MidCTASection
          title="「自分にできるか」不安な方へ"
          description="未経験でも、経験者でも。富士菅工はあなたのペースで成長できる環境を用意しています。\nまずは気軽に話を聞いてみてください。"
        />

        {/* 5. 採用動画 */}
        <VideoSection />

        {/* 6. 1日の流れ */}
        <DayFlowSection />

        {/* 7. 福利厚生 */}
        <BenefitsSection />

        {/* 8. スタッフ・職場の雰囲気 */}
        <AtmosphereSection />

        {/* 中間CTA（中部〜下部の応募導線） */}
        <MidCTASection
          title="一緒に東京の現場を支えませんか？"
          description="創業50年以上の技術と信頼が、あなたのキャリアを支えます。\n手に職をつけて、安定して働きたい方をお待ちしています。"
        />

        {/* 9. よくある質問 */}
        <FaqSection />

        {/* 10. 募集要項 */}
        <RequirementsSection />

        {/* 11. 最終CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
