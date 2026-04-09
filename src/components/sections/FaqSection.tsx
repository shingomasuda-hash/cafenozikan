"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/data/content";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
            style={{ background: "#1D4ED8" }}
          >
            Q
          </span>
          <span className="text-sm md:text-base font-medium text-gray-800">
            {question}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? "rotate-180 border-blue-600" : "border-gray-300"
          }`}
        >
          <svg
            className={`w-3 h-3 ${isOpen ? "text-blue-600" : "text-gray-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 bg-blue-50/50 px-5 py-4">
          <div className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 text-blue-700 bg-blue-100"
            >
              A
            </span>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          label="よくある質問"
          title="応募前の不安を解消します"
          description="「聞いてもいいのかな」という疑問もここで解決してください。"
        />

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-blue-700 p-6 text-center">
          <p className="text-white text-sm md:text-base font-medium mb-1">
            他にご質問があれば、気軽にお問い合わせください
          </p>
          <p className="text-blue-200 text-xs mb-4">
            選考には関係ありません。まずは疑問を解消してから判断してください。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            質問・相談する →
          </a>
        </div>
      </div>
    </section>
  );
}
