"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarDays,
  FileText,
  Users,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const RED = "#e53935";
const NAVY = "#0b2545";
const LIGHT_LINE = "#dbe3ef";

type StatCard = {
  value: string;
  label: string;
  icon: LucideIcon;
  ringTone: "orange" | "navy";
};

const STAT_CARDS: StatCard[] = [
  {
    value: "2015",
    label: "Năm thành lập",
    icon: Building2,
    ringTone: "navy",
  },
  {
    value: "5",
    label: "Nhóm học phần",
    icon: BookOpen,
    ringTone: "orange",
  },
  {
    value: "50.000+",
    label: "Sinh viên đào tạo",
    icon: Users,
    ringTone: "orange",
  },
  {
    value: "100%",
    label: "Chuẩn hóa theo Bộ GD&ĐT",
    icon: BadgeCheck,
    ringTone: "navy",
  },
];

const FOUNDATION_TEXT =
  "Trung tâm Đào tạo Chuẩn đầu ra và Phát triển nguồn nhân lực là đơn vị trực thuộc Trường Đại học Nam Cần Thơ được thành lập theo Quyết định số 23/QĐ-CTHĐQT-ĐHNCT ngày 25 tháng 06 năm 2015 của Chủ tịch Hội đồng quản trị Trường Đại học Nam Cần Thơ về việc thành lập Trung tâm Đào tạo Chuẩn đầu ra và Phát triển nguồn nhân lực.";

function ringGradient(tone: "orange" | "navy") {
  if (tone === "orange") {
    return `conic-gradient(${RED} 0deg 152deg, #e3e8f2 152deg 214deg, ${RED} 214deg 336deg, #e3e8f2 336deg 360deg)`;
  }

  return `conic-gradient(${NAVY} 0deg 164deg, #e3e8f2 164deg 210deg, ${NAVY} 210deg 332deg, #e3e8f2 332deg 360deg)`;
}

export default function EducationalTimeline() {
  return (
    <section className="relative overflow-hidden bg-background py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] lg:gap-12">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: EASE }}
            whileHover={{ y: -4 }}
            className="relative z-10 rounded-[2rem] border border-[#dde4f0] bg-white/95 p-5 shadow-[0_22px_48px_rgba(11,37,69,0.14)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(11,37,69,0.2)] sm:p-7"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-white shadow-[0_12px_28px_rgba(229,57,53,0.38)] sm:h-[55px] sm:w-[55px]"
                style={{ backgroundColor: RED }}
              >
                <FileText className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2.25} />
              </span>
            </div>

            <div
              className="rounded-[1.65rem] border-[2.5px] px-5 pb-6 pt-10 sm:px-7 sm:pb-8 sm:pt-11"
              style={{ borderColor: NAVY }}
            >
              <p className="text-[1.31rem] font-bold leading-tight text-[#1f2f4d] sm:text-[1.5rem]">Thành lập theo</p>
              <p className="mt-1 text-[1.28rem] font-extrabold leading-tight sm:text-[1.5rem]" style={{ color: RED }}>
                Quyết định số 23/QĐ-CTHĐQT-ĐHNCT
              </p>

              <div className="mt-5 h-px w-full bg-[#d7deea]" />

              <div className="mt-4 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 shrink-0" style={{ color: NAVY }} strokeWidth={2.2} />
                <p className="text-[0.86rem] font-bold tracking-wide text-[#3d587e] sm:text-[0.94rem]">
                  NGÀY 25 THÁNG 06 NĂM 2015
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: RED }} />
                <div className="h-0.5 flex-1 border-t-2 border-dashed" style={{ borderColor: RED }} />
                <span
                  className="h-4 w-4 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(229,57,53,0.2)]"
                  style={{ backgroundColor: RED }}
                />
              </div>

              <p className="mt-5 text-[0.83rem] leading-relaxed text-[#1d2f4b] sm:text-[0.9rem]">{FOUNDATION_TEXT}</p>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="relative px-1 py-2 sm:px-3"
          >
            <motion.svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible sm:block"
              viewBox="0 0 1000 1000"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M-500 134 H100 C136 134 158 150 188 208 C208 246 228 260 260 260"
                stroke={LIGHT_LINE}
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M260 740 C228 740 208 754 188 792 C158 852 136 868 100 868 H-500"
                stroke={LIGHT_LINE}
                strokeWidth="14"
                strokeLinecap="round"
              />

              <path d="M260 260 H740" stroke={LIGHT_LINE} strokeWidth="14" strokeLinecap="round" />
              <path
                d="M260 260 C120 260 120 740 260 740"
                stroke={LIGHT_LINE}
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M740 260 C880 260 880 740 740 740"
                stroke={LIGHT_LINE}
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path d="M260 740 H740" stroke={LIGHT_LINE} strokeWidth="14" strokeLinecap="round" />

              <motion.path
                d="M260 260 H500"
                stroke={NAVY}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.9, ease: EASE }}
              />
              <motion.path
                d="M500 260 H740"
                stroke={RED}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.9, delay: 0.05, ease: EASE }}
              />
              <motion.path
                d="M260 740 H500"
                stroke={RED}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
              />
              <motion.path
                d="M500 740 H740"
                stroke={NAVY}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
              />
              <motion.path
                d="M-500 136 H96 C134 136 156 152 184 206 C202 244 222 260 260 260"
                stroke={NAVY}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
              />
              <motion.path
                d="M260 740 C222 740 202 756 184 794 C156 850 134 866 96 866 H-500"
                stroke={RED}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.55 }}
                transition={{ duration: 1.1, delay: 0.18, ease: EASE }}
              />

              <circle cx="500" cy="260" r="24" fill="white" stroke={LIGHT_LINE} strokeWidth="8" />
              <motion.circle
                cx="500"
                cy="260"
                r="14"
                fill={RED}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle cx="500" cy="740" r="24" fill="white" stroke={LIGHT_LINE} strokeWidth="8" />
              <motion.circle
                cx="500"
                cy="740"
                r="14"
                fill={NAVY}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.35, ease: "easeInOut" }}
              />
              <circle cx="260" cy="260" r="24" fill="white" stroke={LIGHT_LINE} strokeWidth="8" />
              <motion.circle
                cx="260"
                cy="260"
                r="14"
                fill={NAVY}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
              />
              <circle cx="260" cy="740" r="24" fill="white" stroke={LIGHT_LINE} strokeWidth="8" />
              <motion.circle
                cx="260"
                cy="740"
                r="14"
                fill={RED}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.55, ease: "easeInOut" }}
              />
            </motion.svg>

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {STAT_CARDS.map((card, index) => {
                const Icon = card.icon;
                const iconColor = card.ringTone === "orange" ? RED : NAVY;

                return (
                  <motion.article
                    key={card.value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease: EASE }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="mx-auto w-full max-w-[191px]"
                  >
                    <div
                      className="rounded-full p-[8px] shadow-[0_18px_34px_rgba(11,37,69,0.16)] transition-shadow duration-300 hover:shadow-[0_24px_42px_rgba(11,37,69,0.22)]"
                      style={{ backgroundImage: ringGradient(card.ringTone) }}
                    >
                      <div className="flex aspect-square w-full flex-col items-center justify-center rounded-full border border-[#dce4ef] bg-[linear-gradient(160deg,#ffffff,#f5f8fc)] px-5 text-center">
                        <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e4ebf4] bg-white shadow-[0_8px_16px_rgba(11,37,69,0.12)]">
                          <Icon className="h-5 w-5" style={{ color: iconColor }} strokeWidth={2.2} />
                        </span>
                        <p
                          className="text-[2.03rem] font-black leading-none tracking-[-0.02em] sm:text-[2.33rem]"
                          style={{ color: RED }}
                        >
                          {card.value}
                        </p>
                        <p className="mt-2 text-[0.9rem] font-bold leading-snug text-[#112a49] sm:text-[0.98rem]">
                          {card.label}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
