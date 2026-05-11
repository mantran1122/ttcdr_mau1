"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, BookOpen, MessageCircle, Award, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const EASE = [0.22, 1, 0.36, 1] as const;

function RevealText({ text, inView, delay = 0 }: { text: string; inView: boolean; delay?: number }) {
  return (
    <span
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity 0.4s ease ${delay.toFixed(3)}s`,
      }}
    >
      {text}
    </span>
  );
}

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type PillItem = {
  title: string;
  Icon: LucideIcon;
  titleColor: string;
  iconColor: string;
  iconGradient: string;
  cardBgColor: string;
  cardBorderColor: string;
  dividerColor: string;
};

const pills: PillItem[] = [
  {
    title: "Đào tạo Anh văn theo chuẩn Trường và khung 6 bậc VSTEP",
    Icon: CalendarDays,
    titleColor: "#E33434",
    iconColor: "#FFFFFF",
    iconGradient: "linear-gradient(135deg,#FF5A5F 0%,#E53935 100%)",
    cardBgColor: "#F8EDEF",
    cardBorderColor: "#F5BAC5",
    dividerColor: "#F3B6C1",
  },
  {
    title: "Đào tạo tin học cơ bản và nâng cao",
    Icon: BookOpen,
    titleColor: "#B7791F",
    iconColor: "#FFFFFF",
    iconGradient: "linear-gradient(135deg,#F6C94B 0%,#E9A522 100%)",
    cardBgColor: "#FFF8E8",
    cardBorderColor: "#F7DFA6",
    dividerColor: "#F2D797",
  },
  {
    title: "Rèn luyện kỹ năng giao tiếp, thuyết trình, làm việc nhóm",
    Icon: MessageCircle,
    titleColor: "#0EA08B",
    iconColor: "#FFFFFF",
    iconGradient: "linear-gradient(135deg,#2ACFAE 0%,#12A88F 100%)",
    cardBgColor: "#E9F7F2",
    cardBorderColor: "#BFE9DB",
    dividerColor: "#B4E0D2",
  },
  {
    title: "Đào tạo kỹ năng nghề nghiệp thiết yếu cho sinh viên",
    Icon: Award,
    titleColor: "#E33434",
    iconColor: "#FFFFFF",
    iconGradient: "linear-gradient(135deg,#FF5A5F 0%,#E53935 100%)",
    cardBgColor: "#F8EDEF",
    cardBorderColor: "#F5BAC5",
    dividerColor: "#F3B6C1",
  },
];

const topPills  = [pills[0], pills[1]];
const bottomPills = [pills[2], pills[3]];

function PillCard({ item, delay = 0, inView }: { item: PillItem; delay?: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{ y: -2 }}
      className="w-full rounded-full border flex min-h-[120px] items-center gap-3 px-4 py-3 sm:min-h-[150px] sm:gap-4 sm:px-6 sm:py-4 xl:min-h-[176px] xl:gap-5 xl:px-[30px] xl:py-5 transition-[box-shadow,transform] duration-300"
      style={{
        backgroundColor: item.cardBgColor,
        borderColor: item.cardBorderColor,
        boxShadow: "0 8px 26px rgba(23, 48, 97, 0.07)",
      }}
    >
      <div className="shrink-0">
        <span
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full sm:h-14 sm:w-14 xl:h-[72px] xl:w-[72px]"
          style={{ background: item.iconGradient, boxShadow: "0 8px 22px rgba(0,0,0,0.15)" }}
        >
          <item.Icon size={23} strokeWidth={2.1} color={item.iconColor} />
        </span>
      </div>
      <span className="h-14 w-px shrink-0 opacity-85 sm:h-[74px] xl:h-[98px]" style={{ background: item.dividerColor }} />
      <div className="min-w-0">
        <p className="font-medium leading-[1.35] tracking-[-0.01em] text-[1rem] sm:text-[1.1rem] xl:text-[1.25rem]" style={{ color: item.titleColor }}>
          <RevealText text={item.title} inView={inView} delay={delay + 0.3} />
        </p>
      </div>
    </motion.article>
  );
}

function FeaturedCard({ delay = 0, inView }: { delay?: number; inView: boolean }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{ y: -2 }}
      className="w-full rounded-full border flex min-h-[120px] items-center gap-3 px-4 py-3 sm:min-h-[150px] sm:gap-4 sm:px-6 sm:py-4 xl:min-h-[176px] xl:gap-5 xl:px-[30px] xl:py-5 transition-[box-shadow,transform] duration-300"
      style={{
        background: "linear-gradient(135deg, #2f63df 0%, #7ea2ed 100%)",
        borderColor: "rgba(76, 118, 226, 0.36)",
        boxShadow: "0 18px 44px rgba(41, 87, 190, 0.26)",
      }}
    >
      <div className="shrink-0">
        <span
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full sm:h-14 sm:w-14 xl:h-[72px] xl:w-[72px]"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <Building2 size={23} strokeWidth={2.1} color="white" />
        </span>
      </div>
      <span className="h-14 w-px shrink-0 opacity-85 sm:h-[74px] xl:h-[98px]" style={{ background: "rgba(255,255,255,0.36)" }} />
      <div className="min-w-0">
        <p className="font-medium leading-[1.35] tracking-[-0.01em] text-[1rem] sm:text-[1.1rem] xl:text-[1.25rem] text-white">
          <RevealText text="Thành lập theo Quyết định số 23/QĐ-CTHĐQT-ĐHNCT" inView={inView} delay={delay + 0.3} />
        </p>
        <p className="mt-1 text-[0.85rem] font-medium text-white/75">
          <RevealText text="Ngày 25 tháng 06 năm 2015" inView={inView} delay={delay + 0.5} />
        </p>
      </div>
    </motion.article>
  );
}

export default function EducationalTimeline() {
  const topRowRef  = useRef(null);
  const botRowRef  = useRef(null);
  const topInView   = useInView(topRowRef, { once: true, amount: 0.2 });
  const botInView   = useInView(botRowRef, { once: true, amount: 0.2 });

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <header className="mb-7 text-center sm:mb-8 lg:mb-10 xl:mb-12">

          <motion.h2
            variants={headerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className="text-[clamp(2rem,10vw,2.8rem)] font-medium leading-[1.35] tracking-[-0.035em] text-[#0b1a3b] sm:text-[50px]"
          >
            Đôi nét về trung tâm
          </motion.h2>
        </header>

        <div className="grid justify-items-center gap-[14px] sm:gap-5 lg:gap-[26px]">
          {/* Hàng trên: pill trái – featured – pill phải */}
          <div ref={topRowRef} className="grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <PillCard item={topPills[0]} delay={0}    inView={topInView} />
            <div className="sm:col-span-2 sm:mx-auto sm:w-full lg:col-span-1 lg:mx-0">
              <FeaturedCard               delay={0.08} inView={topInView} />
            </div>
            <PillCard item={topPills[1]} delay={0.16} inView={topInView} />
          </div>

          {/* Hàng dưới: 2 pill */}
          <div ref={botRowRef} className="grid w-full max-w-[860px] grid-cols-1 gap-[14px] sm:grid-cols-2 lg:gap-7">
            {bottomPills.map((item, index) => (
              <PillCard key={item.title} item={item} delay={0.24 + index * 0.08} inView={botInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Tạm thời ẩn: bố cục scroll-based exploding pills ────────────────────
import { useState } from "react";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionStyle, MotionValue } from "framer-motion";

type PillItemOld = PillItem & {
  positionClassName: string;
  explodeOffset: { x: number; y: number };
  delay: number;
};

const pillsOld: PillItemOld[] = [
  { ...pills[0], positionClassName: "left-[2.8%] top-[2%]",                          explodeOffset: { x: 620,  y: 320  }, delay: 0.08 },
  { ...pills[1], positionClassName: "right-[2.8%] top-[3.5%] 2xl:right-[8.5%]",      explodeOffset: { x: -620, y: 312  }, delay: 0.16 },
  { ...pills[2], positionClassName: "left-[-3.5%] bottom-[8%] 2xl:left-[6.5%] 2xl:bottom-[13.5%]", explodeOffset: { x: 700, y: -140 }, delay: 0.24 },
  { ...pills[3], positionClassName: "right-[2.8%] bottom-[14%]",                      explodeOffset: { x: -640, y: -108 }, delay: 0.32 },
];

function Pill({ item, className = "", compact = false, disableEntrance = false, style }: {
  item: PillItemOld; className?: string; compact?: boolean; disableEntrance?: boolean; style?: MotionStyle;
}) {
  const Icon = item.Icon;
  return (
    <motion.article
      initial={disableEntrance ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={disableEntrance ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3 }}
      viewport={disableEntrance ? undefined : { once: true, amount: 0.25 }}
      transition={disableEntrance ? { duration: 0 } : { duration: 0.65, delay: item.delay, ease: EASE }}
      className={["flex items-center rounded-full border shadow-[0_16px_38px_-26px_rgba(15,23,42,0.35)]", compact ? "gap-3 px-4 py-3" : "h-[140px] w-[380px] gap-5 px-6 py-5 2xl:h-[156px] 2xl:w-[472px] 2xl:gap-6 2xl:px-7", className].join(" ")}
      style={{ ...style, backgroundColor: item.cardBgColor, borderColor: item.cardBorderColor }}
    >
      <div className={["flex shrink-0 items-center justify-center rounded-full shadow-[0_8px_16px_-10px_rgba(15,23,42,0.5)]", compact ? "h-11 w-11" : "h-[74px] w-[74px]"].join(" ")} style={{ background: item.iconGradient }}>
        <Icon size={compact ? 20 : 36} color={item.iconColor} strokeWidth={2} />
      </div>
      {!compact ? <span className="h-[64px] w-px shrink-0" style={{ backgroundColor: item.dividerColor }} /> : null}
      <p className={["font-semibold leading-[1.28] tracking-[-0.01em]", compact ? "text-[12px]" : "text-[18px] 2xl:text-[20px]"].join(" ")} style={{ color: item.titleColor }}>{item.title}</p>
    </motion.article>
  );
}

function DesktopExplodingPill({ item, progress, locked }: { item: PillItemOld; progress: MotionValue<number>; locked: boolean }) {
  const remaining = useTransform(progress, (value) => 1 - value);
  const x = useTransform(remaining, (value) => item.explodeOffset.x * value);
  const y = useTransform(remaining, (value) => item.explodeOffset.y * value);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  const opacity = useTransform(progress, [0, 1], [0.58, 1]);
  return <Pill item={item} disableEntrance className={["absolute z-10", item.positionClassName].join(" ")} style={locked ? { x: 0, y: 0, scale: 1, opacity: 1 } : { x, y, scale, opacity }} />;
}

export function EducationalTimelineOld() {
  const pinRef = useRef<HTMLDivElement>(null);
  const hasLockedRef = useRef(false);
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start 85%", "end end"] });
  const spreadProgress = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const smoothSpread = useSpring(spreadProgress, { stiffness: 72, damping: 30, mass: 0.95 });
  const [isSpreadLocked, setIsSpreadLocked] = useState(false);
  useMotionValueEvent(spreadProgress, "change", (latest) => {
    if (!hasLockedRef.current && latest >= 0.999) { hasLockedRef.current = true; setIsSpreadLocked(true); }
  });
  return (
    <section className="relative isolate overflow-hidden bg-background pt-14 pb-12 sm:pt-16 sm:pb-10 xl:overflow-visible xl:py-0">
      <div ref={pinRef} className="xl:h-[200vh]">
        <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:sticky xl:top-0 xl:flex xl:h-screen xl:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[10px] bg-background sm:min-h-[470px] xl:aspect-[5/2] xl:w-full xl:min-h-0">
            <div className="hidden xl:block">
              {pillsOld.map((item) => <DesktopExplodingPill key={item.title} item={item} progress={smoothSpread} locked={isSpreadLocked} />)}
            </div>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: EASE }} className="relative z-20 mx-auto flex max-w-[520px] flex-col items-center px-4 pb-7 pt-10 text-center sm:pt-14 xl:absolute xl:left-1/2 xl:top-[50.5%] xl:w-[460px] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:px-0 xl:pb-0 xl:pt-0 2xl:w-[520px]">
              <h2 className="bg-gradient-to-b from-[#163D98] via-[#2E63DE] to-[#7FA3EE] bg-clip-text text-[38px] font-semibold leading-[1.4] tracking-[-0.045em] text-transparent sm:text-[48px] xl:text-[64px]">Đôi nét về<br />trung tâm</h2>
              <div className="mt-5 flex items-center gap-3"><span className="h-[3px] w-16 rounded-full bg-[#8FA7E8]/85" /><span className="h-2.5 w-2.5 rounded-full bg-[#6D8FDF]/90" /><span className="h-[3px] w-16 rounded-full bg-[#A7BCEE]/85" /></div>
              <p className="mt-5 max-w-[460px] text-[22px] font-semibold leading-[1.36] text-[#1D3F95] sm:text-[16px]">Thành lập theo Quyết định số 23/QĐ-CTHĐQT-ĐHNCT</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#607BC2] sm:text-[15px]">Ngày 25 tháng 06 năm 2015</p>
            </motion.div>
            <div className="relative z-10 mt-6 grid gap-3 px-4 pb-7 sm:grid-cols-2 sm:px-6 xl:hidden">
              {pillsOld.map((item, index) => <Pill key={item.title} item={{ ...item, delay: index * 0.08 }} compact />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
─────────────────────────────────────────────────────────────────────────── */
