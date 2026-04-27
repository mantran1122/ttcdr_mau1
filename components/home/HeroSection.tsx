"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:py-24">
      {/* Badge with small logo */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 inline-flex max-w-[90%] items-center gap-2.5 rounded-full border border-white/40 bg-white/50 px-4 py-2 shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5"
      >
        <Image
          src="/logo_don.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-auto shrink-0 rounded-sm"
        />
        <span className="text-xs font-medium text-gray-700 sm:text-sm">
          Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl"
      >
        <h1 className="leading-[1.2] tracking-tight">
          <span className="block text-[40px] sm:text-[52px] lg:text-[74px]">
            <span className="font-light text-gray-400">Theo Dõi </span>
            <span className="font-bold text-gray-900">Lịch Học</span>
          </span>
          <span className="block text-[40px] sm:text-[52px] lg:text-[74px]">
            <span className="font-light text-gray-400">và </span>
            <span className="font-bold text-gray-900">Thông Báo Mới Nhất</span>
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-gray-500 sm:text-sm"
      >
        Cập nhật nhanh nhất lịch học, lịch kiểm tra và thông báo từ Trung tâm
        Chuẩn đầu ra.
      </motion.p>
    </section>
  );
}
