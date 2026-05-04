"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIDEO_SRC = "/videos/huong-dan-dang-ky.mp4";

export default function VideoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mb-6"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#a33430]">
        Video hướng dẫn
      </p>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#ddcfbd] bg-[#f5efe6] shadow-[0_14px_36px_rgba(34,26,18,0.1)]">
        <div className="relative w-full bg-[#e9dfd1] aspect-[16/10] sm:aspect-[16/8.2] lg:aspect-[16/7]">
          <video className="h-full w-full object-cover" controls preload="metadata">
            <source src={VIDEO_SRC} type="video/mp4" />
            <p className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-[#4f5a6f]">
              Trình duyệt của bạn không hỗ trợ phát video.
            </p>
          </video>
        </div>
      </div>
    </motion.section>
  );
}
