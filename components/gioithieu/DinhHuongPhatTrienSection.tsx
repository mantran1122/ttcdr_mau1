"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const dinhHuong = [
  { num: "01", title: "Bồi dưỡng" },
  { num: "02", title: "Khai giảng lớp" },
  { num: "03", title: "Liên kết" },
  { num: "04", title: "Cải tiến" },
  { num: "05", title: "Hợp tác" },
];

export default function DinhHuongPhatTrienSection() {
  return (
    <section className="overflow-hidden bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Tầm nhìn
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Định hướng phát triển
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chiến lược phát triển toàn diện, hướng tới nâng cao chất lượng đào tạo
            và hội nhập quốc tế.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-red-600" />
        </motion.div>

        {/* Timeline Desktop */}
        <div className="relative hidden lg:block">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-[22px] h-px bg-red-600" />

          <div className="relative grid grid-cols-5 gap-6">
            {dinhHuong.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="flex flex-col items-center"
              >
                {/* Circle number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white shadow-md ring-4 ring-white"
                >
                  {item.num}
                </motion.div>

                {/* Vertical connector */}
                <div className="my-5 h-8 w-px bg-red-600" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-xl border border-slate-100 bg-white py-7 text-center shadow-sm"
                >
                  <span className="border-b-4 border-red-600 pb-1 text-base font-bold text-slate-900">
                    {item.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile: vertical stack */}
        <div className="relative space-y-8 lg:hidden">
          {/* Vertical line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-px bg-red-600" />

          {dinhHuong.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="relative flex items-center gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white shadow-md ring-4 ring-background"
              >
                {item.num}
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex-1 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm"
              >
                <span className="border-b-2 border-red-600 pb-0.5 text-base font-bold text-slate-900">
                  {item.title}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
