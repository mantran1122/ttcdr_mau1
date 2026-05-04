"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIDEO_SRC = "/videos/huong-dan-dang-ky.mp4";

type Step = {
  num: string;
  heading: string;
  subtext?: string;
};

const SECTION_TITLE = "Quy tr\u00ecnh \u0111\u0103ng k\u00fd h\u1ecdc t\u1ea1i Trung t\u00e2m \u0110TC\u0110R&PTNNL";
const SECTION_SUBTITLE = "Th\u1ef1c hi\u1ec7n theo 4 b\u01b0\u1edbc \u0111\u01a1n gi\u1ea3n v\u00e0 xem video h\u01b0\u1edbng d\u1eabn b\u00ean d\u01b0\u1edbi";
const VIDEO_LABEL = "VIDEO H\u01af\u1edaNG D\u1eaaN";
const VIDEO_DESC =
  "Xem video h\u01b0\u1edbng d\u1eabn chi ti\u1ebft \u0111\u1ec3 n\u1eafm r\u00f5 quy tr\u00ecnh \u0111\u0103ng k\u00fd h\u1ecdc t\u1ea1i Trung t\u00e2m \u0110TC\u0110R&PTNNL.";
const VIDEO_FALLBACK = "Tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 ph\u00e1t video.";

const STEPS: Step[] = [
  {
    num: "01",
    heading: "Nh\u1eadn phi\u1ebfu \u0111\u0103ng k\u00fd h\u1ecdc t\u1ea1i Trung t\u00e2m \u0110TC\u0110R&PTNNL",
    subtext: "C\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd c\u00e1 nh\u00e2n, theo nh\u00f3m ho\u1eb7c theo l\u1edbp",
  },
  {
    num: "02",
    heading: "\u0110i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin v\u00e0 d\u00e1n 2 \u1ea3nh 3x4 v\u00e0o phi\u1ebfu \u0111\u0103ng k\u00fd",
  },
  {
    num: "03",
    heading: "\u0110\u00f3ng l\u1ec7 ph\u00ed h\u1ecdc t\u1ea1i ph\u00f2ng T\u00e0i ch\u00ednh \u2013 K\u1ebf ho\u1ea1ch v\u00e0 n\u1ed9p l\u1ea1i phi\u1ebfu cho Trung t\u00e2m",
  },
  {
    num: "04",
    heading:
      "Sau khi \u0111\u00f3ng l\u1ec7 ph\u00ed, sinh vi\u00ean c\u1eadp nh\u1eadt l\u1ecbch h\u1ecdc t\u1ea1i website c\u1ee7a Trung t\u00e2m v\u00e0o m\u1ed7i tu\u1ea7n",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      className="relative grid grid-cols-[auto_1fr] gap-3 rounded-2xl bg-[#f8f2ea]/80 p-3 sm:gap-4 sm:p-4"
    >
      <div className="flex items-start">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dccbb7] bg-[#fbf7f1] text-[1.5rem] font-black leading-none tracking-[-0.03em] text-[#cf1f2c] sm:h-16 sm:w-16 sm:text-[1.75rem]">
          {step.num}
        </div>
      </div>

      <div className="relative border-l border-[#e2d2c0] pl-3 sm:pl-4">
        <span className="absolute -left-[0.28rem] top-2 h-2.5 w-2.5 rounded-full bg-[#d61f2d]" />
        <h3 className="text-[0.95rem] font-extrabold leading-snug text-[#0f1b3f] sm:text-[1.06rem]">
          {step.heading}
        </h3>
        {step.subtext && (
          <p className="mt-1.5 text-[0.84rem] leading-relaxed text-[#4f5a70] sm:text-[0.92rem]">
            {step.subtext}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function GuideSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE }}
      className="relative overflow-hidden rounded-[28px] border border-[#ddcfbd] bg-[#f5efe6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#de1f2d]" />
      <div className="pointer-events-none absolute left-8 top-8 hidden gap-2 lg:grid lg:grid-cols-5">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={`dot-left-${index}`} className="h-1.5 w-1.5 rounded-full bg-[#dfc69e]" />
        ))}
      </div>
      <div className="pointer-events-none absolute right-7 top-24 hidden gap-2 lg:grid lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={`dot-right-${index}`} className="h-1.5 w-1.5 rounded-full bg-[#dfc69e]" />
        ))}
      </div>

      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
        className="relative z-10 text-center"
      >
        <h2 className="text-[clamp(1.45rem,2.3vw,2.7rem)] font-black leading-[1.12] tracking-[-0.02em] text-[#071a4d]">
          {SECTION_TITLE}
        </h2>
        <p className="mx-auto mt-2 max-w-4xl text-[clamp(0.9rem,1.25vw,1.3rem)] text-[#273354]">
          {SECTION_SUBTITLE}
        </p>
        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-[#d71f2c]" />
      </motion.header>

      <div className="relative z-10 mt-6 grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-6">
        <div className="relative hidden lg:block">
          <div className="absolute left-0 top-6 h-[72%] w-[92%] rounded-[999px] bg-gradient-to-b from-[#eadbc8] via-[#e6d5bf] to-[#f2e8db]" />
          <div className="relative mt-8 ml-5 w-[170px] rounded-[28px] border border-[#dfcfba] bg-[#fdf9f3] p-4 shadow-[0_14px_30px_rgba(35,27,18,0.16)]">
            <div className="mb-3 h-6 w-16 rounded-xl bg-[#eadbc7]" />
            <div className="mb-2 h-12 rounded-2xl border border-[#e4d7c7] bg-[#f4ece1]" />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-[#e7d9c7]" />
              <div className="h-2 rounded-full bg-[#e7d9c7]" />
              <div className="h-2 w-4/5 rounded-full bg-[#e7d9c7]" />
            </div>
            <div className="mt-3 h-6 w-6 rounded-lg border border-[#e4d7c7] bg-[#f4ece1]" />
          </div>
        </div>

        <div className="relative grid gap-3 md:grid-cols-2 md:gap-4">
          <div className="pointer-events-none absolute inset-x-1 top-1/2 hidden h-px -translate-y-1/2 bg-[#decebb] md:block" />
          <div className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-[#decebb] md:block" />
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
        className="relative z-10 mt-6 rounded-3xl border border-[#dfcfba] bg-[#f8f2e9] p-3 sm:p-4 lg:p-5"
      >
        <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="px-2">
            <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#df1f2d] text-white">
              <i className="bi bi-play-fill text-lg" />
            </div>
            <p className="text-xl font-black tracking-[0.04em] text-[#d41f2c]">{VIDEO_LABEL}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4f5a70]">{VIDEO_DESC}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#decebb] bg-[#ebdfd0] shadow-[0_16px_28px_rgba(25,19,14,0.2)]">
            <div className="relative w-full aspect-[16/9]">
              <video className="h-full w-full object-cover" controls preload="metadata">
                <source src={VIDEO_SRC} type="video/mp4" />
                <p className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-[#4f5a6f]">
                  {VIDEO_FALLBACK}
                </p>
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
