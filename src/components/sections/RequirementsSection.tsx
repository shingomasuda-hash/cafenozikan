import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { REQUIREMENTS, SITE_CONFIG } from "@/data/content";

function RequirementRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-6 py-4 border-b border-gray-100 last:border-0">
      <dt className="w-full sm:w-36 text-xs md:text-sm font-semibold text-gray-500 flex-shrink-0 pb-1 sm:pb-0 sm:pt-0.5">
        {label}
      </dt>
      <dd className="text-sm md:text-base text-gray-800 leading-relaxed flex-1">{children}</dd>
    </div>
  );
}

export default function RequirementsSection() {
  return (
    <section id="requirements" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          label="募集要項"
          title="採用情報の詳細"
          description="応募前に確認してください。不明点はお気軽にお問い合わせください。"
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Header badge */}
          <div
            className="px-6 py-4"
            style={{ background: "linear-gradient(135deg, #0F2744, #1E4080)" }}
          >
            <h3 className="text-white font-bold text-base md:text-lg">
              {REQUIREMENTS.position}
            </h3>
          </div>

          {/* Requirements table */}
          <dl className="px-6 divide-y divide-gray-100">
            <RequirementRow label="業務内容">
              <ul className="flex flex-col gap-1.5">
                {REQUIREMENTS.jobDescription.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </RequirementRow>

            <RequirementRow label="応募資格">
              <ul className="flex flex-col gap-1.5">
                {REQUIREMENTS.qualification.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </RequirementRow>

            <RequirementRow label="給与">
              <div className="flex flex-col gap-1.5">
                <div className="font-semibold text-blue-700">
                  {REQUIREMENTS.salary.inexperienced}
                </div>
                <div className="font-semibold text-blue-700">
                  {REQUIREMENTS.salary.experienced}
                </div>
                <div className="text-gray-600">{REQUIREMENTS.salary.bonus}</div>
                <div className="text-gray-500 text-sm">{REQUIREMENTS.salary.yearlyIncome}</div>
              </div>
            </RequirementRow>

            <RequirementRow label="勤務地">
              {REQUIREMENTS.location}
            </RequirementRow>

            <RequirementRow label="勤務時間">
              {REQUIREMENTS.workHours}
            </RequirementRow>

            <RequirementRow label="休日・休暇">
              <ul className="flex flex-col gap-1.5">
                {REQUIREMENTS.holidays.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </RequirementRow>

            <RequirementRow label="福利厚生">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {REQUIREMENTS.benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </RequirementRow>

            <RequirementRow label="応募方法">
              {REQUIREMENTS.applyMethod}
            </RequirementRow>
          </dl>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton href={SITE_CONFIG.applyUrl} size="lg" fullWidth>
            今すぐ応募する →
          </CTAButton>
          <CTAButton href={SITE_CONFIG.contactUrl} size="lg" variant="secondary" fullWidth>
            まずは話を聞く
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
