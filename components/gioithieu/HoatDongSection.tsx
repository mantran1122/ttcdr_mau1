"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const activities = [
  {
    title: "Đào tạo & Bồi dưỡng",
    desc: "Anh văn, Tin học, Kỹ năng",
  },
  {
    title: "Khảo thí & Chứng chỉ",
    desc: "TOEIC, VSTEP, kiểm tra và cấp chứng chỉ",
  },
  {
    title: "Hợp tác & Cộng đồng",
    desc: "CLB, liên kết đối tác, hỗ trợ học viên",
  },
];

const tags = ["Anh văn", "Tin học", "TOEIC", "VSTEP", "CLB Học thuật"];

export default function HoatDongSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Hoạt động
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Các hoạt động chính
          </h2>
        </motion.div>

        {/* Content 2 cols */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          {/* Cột trái: editorial list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex h-full flex-col"
          >
            <div className="flex h-full flex-col justify-center gap-10">
              {activities.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2.5 block h-6 w-0.5 shrink-0 rounded-full bg-red-400" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cột phải: ảnh thật, không overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src="/banner-ttcdr-2_v1.jpg"
              alt="Trường Đại học Nam Cần Thơ"
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[480px] lg:min-h-[540px]"
            />
          </motion.div>
        </div>

        {/* Tags bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-14 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-slate-900/5 sm:px-8"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Chương trình nổi bật:
            </span>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-red-300 px-5 py-1.5 text-sm font-medium text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
