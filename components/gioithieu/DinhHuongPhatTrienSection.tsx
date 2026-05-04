"use client";

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

function AcademicCrest() {
  return (
    <svg viewBox="0 0 90 78" className="h-16 w-20" aria-hidden="true">
      <path d="M17 58C9 52 4 43 4 34" fill="none" stroke="#dabc8f" strokeWidth="2" strokeLinecap="round" />
      <path d="M73 58C81 52 86 43 86 34" fill="none" stroke="#dabc8f" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 53c-4-4-7-9-8-14" fill="none" stroke="#dabc8f" strokeWidth="2" strokeLinecap="round" />
      <path d="M75 53c4-4 7-9 8-14" fill="none" stroke="#dabc8f" strokeWidth="2" strokeLinecap="round" />

      <path d="M22 58h46" stroke="#0f2b70" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 30 45 16 65 30" fill="none" stroke="#0f2b70" strokeWidth="3" strokeLinejoin="round" />
      <path d="M30 30v20M45 30v20M60 30v20" stroke="#0f2b70" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M28 50h34" stroke="#0f2b70" strokeWidth="3" strokeLinecap="round" />

      <path d="M45 11.2 46.9 15h4.1l-3.2 2.4 1.2 3.8L45 18.8l-4 2.4 1.2-3.8L39 15h4.1z" fill="#d72c2e" />
    </svg>
  );
}

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

function RoadmapCard({ step }: { step: RoadmapStep }) {
  const Icon = step.icon;

  return (
    <motion.article
      whileHover={{ y: -7, rotate: 0 }}
      transition={{ duration: 0.28 }}
      className={`group relative z-10 h-[16.2rem] rounded-[1.95rem] border border-[#ebe3d7] bg-[#fffcf8] px-6 pb-8 pt-10 text-center text-[#0d245f] shadow-[0_26px_34px_-24px_rgba(19,33,79,0.55),0_10px_18px_-14px_rgba(19,33,79,0.35)] transition-all duration-300 hover:shadow-[0_36px_40px_-24px_rgba(19,33,79,0.58),0_15px_20px_-14px_rgba(19,33,79,0.35)] sm:px-7 ${step.tiltClass}`}
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

      <h3 className="mt-4 font-serif text-[1.2rem] font-semibold leading-[0.95] tracking-tight text-[#0b1f58] sm:text-[1.8rem]">
        {step.title}
      </h3>

      {step.pattern === "cardDots" ? (
        <div className={`pointer-events-none absolute bottom-4 right-5 grid grid-cols-4 gap-1 ${step.colorClass}`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-current/35" />
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

function Connector() {
  return (
    <div className="pointer-events-none absolute -right-[5.2rem] top-[11.2rem] z-30 w-[7.3rem]">
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
  return (
    <section className="overflow-hidden bg-transparent py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-14 max-w-5xl text-center"
        >
          {/* <div className="mx-auto mb-2 w-fit text-[#0f2b70]">
            <AcademicCrest />
          </div> */}

          <h2 className="text-[50px] font-black leading-[1.2] tracking-[-0.05em] text-slate-950">
            Định hướng phát triển
          </h2>

          <div className="mx-auto mt-4 h-1 w-[4.8rem] rounded-full bg-[#d72c2e]" />

          {/* <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chiến lược phát triển toàn diện, hướng tới nâng cao chất lượng đào tạo và hội nhập quốc tế.
          </p> */}
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
                <RoadmapCard step={step} />
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
                  <span className="pointer-events-none absolute left-[16px] top-[147px] h-[calc(100%-84px)] border-l-2 border-dashed border-[#0f3a79]/35" />
                ) : null}
                <span className="absolute left-[11px] top-[130px] h-3 w-3 rounded-full border-2 border-[#0f3a79] bg-background" />
                <RoadmapCard step={step} />
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
