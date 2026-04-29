"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative pb-10 lg:pb-14">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="absolute inset-x-0 top-0 overflow-hidden"
      >
        <Image
          src="/banner.png"
          alt="Banner Trung tâm Chuẩn đầu ra"
          width={1920}
          height={600}
          className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[420px]"
          priority
        />
      </motion.div>

      <div className="container relative mx-auto px-4 pt-[260px] sm:pt-[360px] lg:pt-[450px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
          className="mt-8 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Thông tin & Lịch
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div>
          <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Lịch kiểm tra
          </h1>
        </motion.div>
      </div>

    </section>
  );
}
