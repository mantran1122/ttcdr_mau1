"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Globe, GraduationCap, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Decoration = "pin" | "tape";
type Pattern = "none" | "cardDots" | "accentDots" | "accentStripes";
type AccentSide = "left" | "right";

type RoadmapStep = {
  num: string;
  title: string;
  detail: string;
  icon: LucideIcon;
  colorClass: string;
  accentClass: string;
  pinClass: string;
  tapeClass: string;
  decoration: Decoration;
  tiltClass: string;
  accentSide: AccentSide;
  pattern: Pattern;
};

const roadmapSteps: RoadmapStep[] = [
  {
    num: "01",
    title: "Bồi dưỡng",
    detail:
      "Bồi dưỡng định kỳ giúp giảng viên cập nhật phương pháp giảng dạy hiện đại và kiến thức chuyên ngành.",
    icon: BookOpen,
    colorClass: "text-[#d72c2e]",
    accentClass: "bg-[#d72c2e]",
    pinClass: "bg-[#d72c2e]",
    tapeClass: "bg-[#f0d8c2]",
    decoration: "pin",
    tiltClass: "-rotate-[1.3deg]",
    accentSide: "left",
    pattern: "accentDots",
  },
  {
    num: "02",
    title: "Khai giảng lớp",
    detail:
      "Mở lớp đúng sĩ số, trang bị hiện đại và giáo trình chuẩn theo khung Bộ GD&ĐT.",
    icon: GraduationCap,
    colorClass: "text-[#ec8f31]",
    accentClass: "bg-[#ec8f31]",
    pinClass: "bg-[#ec8f31]",
    tapeClass: "bg-[#efddc8]",
    decoration: "tape",
    tiltClass: "rotate-[0.95deg]",
    accentSide: "left",
    pattern: "cardDots",
  },
  {
    num: "03",
    title: "Liên kết",
    detail:
      "Liên kết đối tác chiến lược, mở rộng cơ hội thực tập và việc làm cho sinh viên.",
    icon: Handshake,
    colorClass: "text-[#2f78cc]",
    accentClass: "bg-[#2f78cc]",
    pinClass: "bg-[#2f78cc]",
    tapeClass: "bg-[#d8e7f8]",
    decoration: "pin",
    tiltClass: "-rotate-[0.9deg]",
    accentSide: "left",
    pattern: "accentStripes",
  },
  {
    num: "04",
    title: "Cải tiến",
    detail:
      "Lắng nghe phản hồi, ứng dụng công nghệ mới và cập nhật chương trình theo nhu cầu thực tiễn.",
    icon: TrendingUp,
    colorClass: "text-[#a276c7]",
    accentClass: "bg-[#a276c7]",
    pinClass: "bg-[#a276c7]",
    tapeClass: "bg-[#e9dcef]",
    decoration: "tape",
    tiltClass: "rotate-[1.1deg]",
    accentSide: "left",
    pattern: "cardDots",
  },
  {
    num: "05",
    title: "Hợp tác",
    detail:
      "Tham gia dự án giáo dục quốc tế, trao đổi học thuật và tiếp cận chuẩn đào tạo tiên tiến.",
    icon: Globe,
    colorClass: "text-[#0f3a79]",
    accentClass: "bg-[#0f3a79]",
    pinClass: "bg-[#0f3a79]",
    tapeClass: "bg-[#d8e7f8]",
    decoration: "pin",
    tiltClass: "-rotate-[1.2deg]",
    accentSide: "left",
    pattern: "accentDots",
  },
];

function AccentPattern({ pattern, side }: { pattern: Pattern; side: AccentSide }) {
  if (pattern === "accentDots") {
    return (
      <div className={`pointer-events-none absolute bottom-4 grid grid-cols-4 gap-1 ${side === "left" ? "left-4" : "right-4"}`}>
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-white/55" />
        ))}
      </div>
    );
  }

  if (pattern === "accentStripes") {
    return (
      <div className="pointer-events-none absolute inset-x-3 bottom-3 h-8 rounded-xl bg-[repeating-linear-gradient(125deg,transparent,transparent_7px,rgba(255,255,255,0.45)_7px,rgba(255,255,255,0.45)_9px)]" />
    );
  }

  return null;
}

function RoadmapAccent({ step }: { step: RoadmapStep }) {
  const sideClass = step.accentSide === "left" ? "left-3" : "right-3";

  return (
    <div className={`pointer-events-none absolute -bottom-3 ${sideClass} z-0 h-[6.25rem] w-[6.4rem] rounded-[1.25rem] ${step.accentClass} shadow-[0_12px_20px_-14px_rgba(15,23,42,0.68)]`}>
      <AccentPattern pattern={step.pattern} side={step.accentSide} />
    </div>
  );
}

function RoadmapCard({ step, isFlipped, onToggle }: { step: RoadmapStep; isFlipped: boolean; onToggle: () => void }) {
  const Icon = step.icon;

  return (
    <div
      className={`group relative z-20 cursor-pointer ${step.tiltClass}`}
      style={{ perspective: "1000px" }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle();
      }}
    >
      <div
        className="relative h-[18rem] w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── Front face ── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[1.95rem] border border-[#ebe3d7] bg-[#fffcf8] px-6 pb-8 pt-10 text-center text-[#0d245f] shadow-[0_26px_34px_-24px_rgba(19,33,79,0.55),0_10px_18px_-14px_rgba(19,33,79,0.35)] transition-shadow duration-300 group-hover:shadow-[0_36px_40px_-24px_rgba(19,33,79,0.58),0_15px_20px_-14px_rgba(19,33,79,0.35)] sm:px-7"
          style={{ backfaceVisibility: "hidden" }}
        >
          {step.decoration === "pin" ? (
            <div className={`absolute left-1/2 top-2 z-20 h-6 w-6 -translate-x-1/2 rounded-full border border-black/10 ${step.pinClass} shadow-[0_8px_10px_-6px_rgba(0,0,0,0.5)]`}>
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
            </div>
          ) : (
            <div className={`absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rotate-[-8deg] rounded-sm border border-[#dcccb8] ${step.tapeClass} opacity-95 shadow-sm`} />
          )}

          <p className={`font-serif text-[2.8rem] font-semibold leading-none tracking-tight ${step.colorClass}`}>
            {step.num}
          </p>

          <div className="mx-auto mt-2 flex w-20 items-center gap-2">
            <span className={`h-px flex-1 ${step.colorClass} bg-current/35`} />
            <span className={`h-2 w-2 rounded-full ${step.colorClass} bg-current`} />
            <span className={`h-px flex-1 ${step.colorClass} bg-current/35`} />
          </div>

          <Icon className={`mx-auto mt-4 h-9 w-9 ${step.colorClass}`} strokeWidth={1.9} />

          <h3 className="mt-3 font-serif text-[1.2rem] font-semibold leading-[0.95] tracking-tight text-[#0b1f58] sm:text-[1.8rem]">
            {step.title}
          </h3>

          {step.pattern === "cardDots" ? (
            <div className={`pointer-events-none absolute bottom-4 right-5 grid grid-cols-4 gap-1 ${step.colorClass}`}>
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-current/35" />
              ))}
            </div>
          ) : null}
        </div>

        {/* ── Back face ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-start overflow-hidden rounded-[1.95rem] border border-[#ebe3d7] bg-[#fffcf8] px-5 pb-5 pt-6 text-center shadow-[0_26px_34px_-24px_rgba(19,33,79,0.55),0_10px_18px_-14px_rgba(19,33,79,0.35)] sm:px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className={`font-serif text-[2.2rem] font-semibold leading-none tracking-tight ${step.colorClass}`}>
            {step.num}
          </p>

          <h4 className="mt-3 font-serif text-base font-bold leading-snug text-[#0b1f58] sm:text-lg">
            {step.title}
          </h4>

          <div className="mx-auto mt-2 flex w-16 items-center gap-1.5">
            <span className={`h-px flex-1 ${step.colorClass} bg-current/35`} />
            <span className={`h-1.5 w-1.5 rounded-full ${step.colorClass} bg-current`} />
            <span className={`h-px flex-1 ${step.colorClass} bg-current/35`} />
          </div>

          <p className="mx-auto mt-3 max-w-[25ch] text-xs leading-relaxed text-slate-600 sm:text-sm">
            {step.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="pointer-events-none absolute -right-[5.2rem] top-[11.2rem] z-[2] w-[7.3rem]">
      <svg viewBox="0 0 124 68" className="h-14 w-full">
        <path
          d="M5 44 C 30 6, 82 66, 118 28"
          fill="none"
          stroke="#0f3a79"
          strokeWidth="2"
          strokeDasharray="5 9"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
      <span className="absolute -left-1 top-[27px] h-3.5 w-3.5 rounded-full border-2 border-[#0f3a79] bg-background" />
      <span className="absolute -right-1 top-[27px] h-3.5 w-3.5 rounded-full border-2 border-[#0f3a79] bg-background" />
    </div>
  );
}

export function DevelopmentRoadmapSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="overflow-hidden bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-14 max-w-5xl text-center"
        >
          <h2 className="text-[50px] font-medium leading-[1.2] tracking-[-0.05em] text-slate-900">
            Định hướng phát triển
          </h2>
{/* 
          <div className="mx-auto mt-4 h-1 w-[4.8rem] rounded-full bg-[#d72c2e]" /> */}
        </motion.div>

        <div className="hidden lg:block">
          <ol className="grid grid-cols-5 gap-8 xl:gap-10">
            {roadmapSteps.map((step, index) => (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.08, ease: EASE }}
                className="relative pb-4"
              >
                <RoadmapAccent step={step} />
                {index < roadmapSteps.length - 1 ? <Connector /> : null}
                <RoadmapCard
                  step={step}
                  isFlipped={flippedIndex === index}
                  onToggle={() => toggleCard(index)}
                />
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:hidden">
          <ol className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <motion.li
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.48, delay: index * 0.06, ease: EASE }}
                className="relative pl-10"
              >
                <RoadmapAccent step={step} />
                {index < roadmapSteps.length - 1 ? (
                  <span className="pointer-events-none absolute left-[16px] top-[167px] h-[calc(100%-84px)] border-l-2 border-dashed border-[#0f3a79]/35" />
                ) : null}
                <span className="absolute left-[11px] top-[150px] h-3 w-3 rounded-full border-2 border-[#0f3a79] bg-background" />
                <RoadmapCard
                  step={step}
                  isFlipped={flippedIndex === index}
                  onToggle={() => toggleCard(index)}
                />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function DinhHuongPhatTrienSection() {
  return <DevelopmentRoadmapSection />;
}
