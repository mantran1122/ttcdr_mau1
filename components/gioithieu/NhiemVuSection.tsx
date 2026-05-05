"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RoadmapStep = {
  num: string;
  title: string;
  desc: string;
};

const roadmapSteps: RoadmapStep[] = [
  {
    num: "01",
    title: "Khảo sát & Đánh giá",
    desc: "Đánh giá năng lực đầu vào và xác định nhu cầu phát triển theo từng nhóm sinh viên.",
  },
  {
    num: "02",
    title: "Tổ chức đào tạo",
    desc: "Triển khai lộ trình học theo chuẩn đầu ra với phương pháp phù hợp cho từng chương trình.",
  },
  {
    num: "03",
    title: "Kiểm tra & Cấp chứng chỉ",
    desc: "Đo lường mức độ đạt chuẩn, hoàn thiện hồ sơ năng lực và cấp chứng nhận theo quy định.",
  },
  {
    num: "04",
    title: "Câu lạc bộ & Tuyển sinh",
    desc: "Mở rộng hoạt động cộng đồng học thuật, kết nối truyền thông và hỗ trợ tuyển sinh bền vững.",
  },
];

export default function NhiemVuSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-[50px] font-extrabold leading-[1.2] tracking-tight text-slate-900">
            Nhiệm vụ chiến lược
          </h2>
          {/* <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Lộ trình triển khai theo từng bước, có đo lường và cải tiến liên tục.
          </p> */}
        </motion.div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="relative mx-auto max-w-5xl before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-slate-300/90 before:content-[''] md:before:hidden">
          <div className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-24 -translate-x-1/2 md:block">
            <svg viewBox="0 0 96 1000" preserveAspectRatio="none" className="h-full w-full">
              <path
                d="M48 0 C82 120 14 220 48 340 C82 460 14 560 48 680 C82 800 14 900 48 1000"
                fill="none"
                stroke="rgb(203 213 225 / 0.85)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {roadmapSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isOpen = openIndex === index;

            const card = (
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="cursor-pointer rounded-2xl border border-slate-200/80 bg-white/95 p-5 text-center shadow-[0_12px_26px_-20px_rgba(15,23,42,0.45)] transition-shadow duration-300 hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.35)] sm:p-6"
              >
                <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-[1.65rem]">
                  {step.title}
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      key="desc"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      className="overflow-hidden text-sm leading-relaxed text-slate-600 sm:text-[15px]"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
                className="relative grid grid-cols-1 gap-4 py-5 pl-14 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 md:py-9 md:pl-0"
              >
                {isLeft ? <div className="md:flex md:justify-end">{card}</div> : <div className="hidden md:block" />}

                <div className="absolute left-5 top-9 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-200 bg-red-600 text-sm font-bold text-white shadow-[0_0_0_6px_rgba(254,242,242,0.96)] md:static md:mx-auto md:translate-x-0">
                  {index + 1}
                </div>

                {!isLeft ? <div>{card}</div> : <div className="hidden md:block" />}
              </motion.article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
