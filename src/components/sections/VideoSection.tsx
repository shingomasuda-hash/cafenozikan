"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { VIDEOS } from "@/data/content";

interface VideoCardProps {
  title: string;
  description: string;
  embedUrl: string;
  index: number;
}

function VideoCard({ title, description, embedUrl, index }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      {/* Video embed area */}
      <div className="relative aspect-video bg-gray-100">
        {playing ? (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 group"
            aria-label={`${title}を再生する`}
          >
            {/* Placeholder background */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, #1a3a6b ${index % 2 === 0 ? "0%" : "20%"}, #1E5FA8 100%)`,
              }}
            />

            {/* Number badge */}
            <span className="absolute top-3 left-3 bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              動画 {String(index + 1).padStart(2, "0")}
            </span>

            {/* Play button */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-200">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <span className="relative z-10 text-white/90 text-sm font-medium">
              タップして再生
            </span>

            <span className="absolute bottom-3 right-3 text-xs text-white/50 bg-black/20 px-2 py-0.5 rounded">
              ※ YouTube動画
            </span>
          </button>
        )}
      </div>

      {/* Text content */}
      <div className="p-5">
        <h3 className="font-bold text-base mb-2" style={{ color: "#0F2744" }}>
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section id="videos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          label="採用動画"
          title="富士菅工のことを、動画で知ってください"
          description="テキストだけでは伝わらない「雰囲気」「人」「仕事」を動画でお伝えします。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {VIDEOS.map((video, i) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              embedUrl={video.embedUrl}
              index={i}
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          ※ 動画URLは実際のYouTube URLに差し替えてください
        </p>
      </div>
    </section>
  );
}
