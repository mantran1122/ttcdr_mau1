"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIDEO_SRC = "/videos/huong-dan-dang-ky.mp4";

type Step = {
  num: string;
  heading: string;
  subtext?: string;
};

const SECTION_TITLE = "Quy trình đăng ký học tại Trung tâm CĐR&PTNNL";
const SECTION_SUBTITLE = "Thực hiện theo 4 bước đơn giản và xem video hướng dẫn bên dưới";
const VIDEO_LABEL = "VIDEO HƯỚNG DẪN";
const VIDEO_FALLBACK = "Trình duyệt của bạn không hỗ trợ phát video.";

const STEPS: Step[] = [
  {
    num: "01",
    heading: "Nhận phiếu đăng ký học tại Trung tâm ĐTCĐR&PTNNL",
    subtext: "Có thể đăng ký cá nhân, theo nhóm hoặc theo lớp",
  },
  {
    num: "02",
    heading: "Điền đầy đủ thông tin và dán 2 ảnh 3x4 vào phiếu đăng ký",
  },
  {
    num: "03",
    heading: "Đóng lệ phí học tại phòng Tài chính – Kế hoạch và nộp lại phiếu cho Trung tâm",
  },
  {
    num: "04",
    heading:
      "Sau khi đóng lệ phí, sinh viên cập nhật lịch học tại website của Trung tâm vào mỗi tuần",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      className="relative grid grid-cols-[auto_1fr] gap-3 rounded-2xl bg-background p-3 sm:gap-4 sm:p-4"
    >
      <div className="flex items-start">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-[1.5rem] font-black leading-none tracking-[-0.03em] text-red-600 sm:h-16 sm:w-16 sm:text-[1.75rem]">
          {step.num}
        </div>
      </div>

      <div className="relative border-l border-slate-200 pl-3 sm:pl-4">
        <span className="absolute -left-[0.28rem] top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
        <h3 className="text-[0.95rem] font-extrabold leading-snug text-slate-900 sm:text-[1.06rem]">
          {step.heading}
        </h3>
        {step.subtext && (
          <p className="mt-1.5 text-[0.84rem] leading-relaxed text-slate-600 sm:text-[0.92rem]">
            {step.subtext}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function GuideSection() {
  const videoLabelRef = useRef<HTMLDivElement>(null);
  const videoLabelInView = useInView(videoLabelRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500" />
      <div className="pointer-events-none absolute left-8 top-8 hidden gap-2 lg:grid lg:grid-cols-5">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={`dot-left-${index}`} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        ))}
      </div>
      <div className="pointer-events-none absolute right-7 top-24 hidden gap-2 lg:grid lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={`dot-right-${index}`} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        ))}
      </div>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
        className="relative z-10 text-center"
      >
        <h2 className="text-[clamp(1.45rem,2.3vw,2.7rem)] font-black leading-[1.12] tracking-[-0.02em] text-slate-900">
          {SECTION_TITLE}
        </h2>
        <p className="mx-auto mt-2 max-w-4xl text-[clamp(0.9rem,1.25vw,1.3rem)] text-slate-600">
          {SECTION_SUBTITLE}
        </p>
        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-red-500" />
      </motion.header>

      <div className="relative z-10 mt-6 grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-6">
        <div className="relative hidden lg:block">
          <div className="absolute left-0 top-6 h-[72%] w-[92%] rounded-[999px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50" />
          <div className="relative mt-8 ml-5 w-[170px] rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(35,27,18,0.16)]">
            <div className="mb-3 h-6 w-16 rounded-xl bg-slate-200" />
            <div className="mb-2 h-12 rounded-2xl border border-slate-200 bg-background" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
            </div>
            <div className="mt-3 h-6 w-6 rounded-lg border border-slate-200 bg-background" />
          </div>
        </div>

        <div className="relative grid gap-3 md:grid-cols-2 md:gap-4">
          <div className="pointer-events-none absolute inset-x-1 top-1/2 hidden h-px -translate-y-1/2 bg-slate-200 md:block" />
          <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-slate-200 md:block" />
          {STEPS.map((step, index) => (
            <StepCard key={step.num} step={step} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.07, ease: EASE }}
        className="relative z-10 mt-6 rounded-3xl border border-slate-200 bg-background p-3 sm:p-4 lg:p-5"
      >
        <div ref={videoLabelRef} className="mb-4 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 sm:text-sm">
          <motion.span
            animate={videoLabelInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="hidden h-px w-16 origin-right bg-slate-300 sm:block"
          />
          <motion.span
            animate={videoLabelInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300 }}
            className="h-2 w-2 bg-red-500"
          />
          <span>{VIDEO_LABEL}</span>
          <motion.span
            animate={videoLabelInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 300 }}
            className="h-2 w-2 bg-red-500"
          />
          <motion.span
            animate={videoLabelInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="hidden h-px w-16 origin-left bg-slate-300 sm:block"
          />
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_16px_28px_rgba(25,19,14,0.2)]">
          <div className="relative w-full aspect-[16/9]">
            <video className="h-full w-full object-cover" controls preload="metadata">
              <source src={VIDEO_SRC} type="video/mp4" />
              <p className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-slate-600">
                {VIDEO_FALLBACK}
              </p>
            </video>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
