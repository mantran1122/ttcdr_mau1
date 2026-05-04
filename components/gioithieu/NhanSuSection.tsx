"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NhanSuSection() {
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
          {/* <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Đội ngũ
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div> */}
          <h2 className="text-[50px] font-black leading-[1.2] tracking-[-0.05em] text-slate-950">
            Nhân sự Trung tâm
          </h2>
        </motion.div>

        {/* Ảnh sơ đồ nhân sự */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-[1080px] overflow-hidden"
        >
          <img
            src="/courses/nhansu2.png"
            alt="Sơ đồ cơ cấu nhân sự Trung tâm Chuẩn đầu ra"
            className="mx-auto h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
