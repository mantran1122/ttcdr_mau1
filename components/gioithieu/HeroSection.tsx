"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative pb-10 lg:pb-14">

      {/* Banner – full bleed, absolute from top */}
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
          className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[500px]"
          priority
        />
      </motion.div>

      {/* Title */}
      <div className="container relative mx-auto px-4 pt-[300px] sm:pt-[420px] lg:pt-[530px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
          className="mt-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5"
          >
            <Image src="/logo_don.png" alt="" width={20} height={20} className="h-5 w-auto shrink-0 rounded-sm" />
            <span className="text-xs font-semibold text-slate-700 sm:text-sm">
              Giới thiệu
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Kiến tạo Nền tảng Vững chắc Chuyên môn
          </h1>
{/* 
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực — Đại học Nam Cần Thơ
          </p> */}
        </motion.div>
      </div>

    </section>
  );
}
