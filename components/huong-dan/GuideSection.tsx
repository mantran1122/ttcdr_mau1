"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIDEO_SRC = "/videos/huong-dan-dang-ky.mp4";
const VIDEO_FALLBACK = "Trình duyệt của bạn không hỗ trợ phát video.";

const BLUE_DEEP = "#408fd9";
const BLUE = "#2848a8";
const LIME_BG = "#e53e3e";

type Step = { num: string; heading: string; subtext?: string };

const STEPS: Step[] = [
  {
    num: "01",
    heading: "Nhận phiếu đăng ký học tại Trung tâm ĐTCĐR&PTNNL",
    subtext: "Có thể đăng ký cá nhân, theo nhóm hoặc theo lớp để nhận thêm ưu đãi.",
  },
  { num: "02", heading: "Điền đầy đủ thông tin và dán 2 ảnh 3x4 vào phiếu đăng ký" },
  { num: "03", heading: "Đóng lệ phí học tại phòng Tài chính – Kế hoạch và nộp lại phiếu cho Trung tâm" },
  { num: "04", heading: "Sau khi đóng lệ phí, sinh viên cập nhật lịch học tại website của Trung tâm vào mỗi tuần" },
];


function StepIcon01() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="15" height="21" rx="2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4V2.5H16V4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11H17" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 15H15" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 19H13" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="22" cy="22" r="5" stroke="white" strokeWidth="1.4" />
      <path d="M19.5 22L21.5 24L25 20.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIcon02() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="20" height="15" rx="2.5" stroke="white" strokeWidth="1.4" />
      <circle cx="10" cy="13" r="3" stroke="white" strokeWidth="1.4" />
      <path d="M5 22C5 19 7.2 17 10 17H13" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 10H22" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 14H20" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function StepIcon03() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="22" height="14" rx="3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="15" r="4" stroke="white" strokeWidth="1.4" />
      <path d="M15 13V13.3M15 16.7V17" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13.5 13.9C13.5 13.3 14.2 12.8 15 12.8C15.8 12.8 16.5 13.3 16.5 13.9C16.5 14.5 15.8 14.9 15 15C14.2 15.1 13.5 15.5 13.5 16.1C13.5 16.7 14.2 17.2 15 17.2C15.8 17.2 16.5 16.7 16.5 16.1" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 15H9M21 15H23" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function StepIcon04() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="19" height="17" rx="2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10H23" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 5V8M18 5V8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="22" cy="22" r="5" stroke="white" strokeWidth="1.4" />
      <path d="M22 19.5V22H24.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const STEP_ICONS = [StepIcon01, StepIcon02, StepIcon03, StepIcon04];

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = STEP_ICONS[index];
  return (
    <motion.article
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.52, delay: index * 0.1, ease: EASE }}
      whileHover={{ y: -4 }}
      className="relative flex items-start gap-4 p-5"
      style={{ transition: "transform 0.3s ease" }}
    >
      {/* Lime badge */}
      <div
        className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-[0.95rem] font-black leading-none"
        style={{ background: LIME_BG, color: "white" }}
        aria-label={`Bước ${step.num}`}
      >
        {step.num}
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="text-[0.93rem] font-bold leading-snug text-slate-900 sm:text-[0.98rem]">
          {step.heading}
        </h3>
        {step.subtext && (
          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:text-[0.85rem]">
            {step.subtext}
          </p>
        )}
      </div>

      {/* Step icon */}
      <div className="relative z-10 mt-0.5 flex-shrink-0 opacity-40" style={{ color: BLUE }}>
        <Icon />
      </div>
    </motion.article>
  );
}

export default function GuideSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="relative isolate overflow-visible bg-transparent px-0 py-0 shadow-none"
    >
      {/* ── Decorative background blobs ── */}
      <div
        className="pointer-events-none absolute -inset-x-20 -inset-y-20 -z-10 overflow-visible"
        aria-hidden="true"
      >
        <div
          className="absolute -right-28 -top-28 h-80 w-80 rounded-full opacity-[0.07] blur-[80px]"
          style={{ background: BLUE }}
        />
        <div
          className="absolute -bottom-20 -left-24 h-72 w-72 rounded-full opacity-[0.06] blur-[72px]"
          style={{ background: BLUE_DEEP }}
        />
        <div
          className="absolute right-1/3 top-2/3 h-52 w-52 rounded-full opacity-[0.04] blur-[60px]"
          style={{ background: LIME_BG }}
        />

      </div>

      {/* ── Main 2-column grid ── */}
      <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">

        {/* ═══════════════════════════════
            LEFT COLUMN
        ═══════════════════════════════ */}
        <div className="flex flex-col gap-7">
          {/* Video preview card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.58, delay: 0.14, ease: EASE }}
          >
            {/* Video label */}
            <div className="flex items-center justify-center gap-3 mb-3.5">
              <div className="h-px w-12 rounded-full bg-slate-200" />
              <div
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                style={{
                  color: "#0f172a",
                  border: "1.5px solid #0f172a",
                  background: "transparent",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4.5 4L8.5 6L4.5 8V4Z" fill="currentColor" />
                </svg>
                VIDEO HƯỚNG DẪN
              </div>
              <div className="h-px w-12 rounded-full bg-slate-200" />
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{
                boxShadow:
                  "0 10px 40px -8px rgba(10,77,255,0.18), 0 2px 8px -2px rgba(10,77,255,0.08)",
                outline: "1px solid rgba(10,77,255,0.10)",
              }}
            >
              <div className="relative w-full bg-slate-900" style={{ aspectRatio: "16/9" }}>
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  aria-label="Video hướng dẫn đăng ký học tại Trung tâm CĐR&PTNNL"
                >
                  <source src={VIDEO_SRC} type="video/mp4" />
                  <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-slate-300">
                    {VIDEO_FALLBACK}
                  </p>
                </video>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════
            RIGHT COLUMN — step cards
        ═══════════════════════════════ */}
        <div className="flex flex-col gap-4">
          {/* Subtle right-column header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900"
          >
            4 bước thực hiện
          </motion.p>

          <div className="relative flex flex-col gap-4">
            {/* Vertical connecting line */}
            <motion.div
              className="pointer-events-none absolute left-11 top-11 bottom-11 w-0.5 rounded-full"
              style={{ background: `linear-gradient(to bottom, ${LIME_BG}, ${BLUE_DEEP})`, transformOrigin: "top" }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.0, delay: 0.9, ease: EASE }}
              aria-hidden="true"
            />
            {STEPS.map((step, index) => (
              <StepCard key={step.num} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
