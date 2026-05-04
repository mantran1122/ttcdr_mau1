"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BannerSection() {
  return (
    <section className="relative w-full aspect-video max-h-[95vh] lg:aspect-auto lg:h-[95vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="h-full overflow-hidden"
      >
        <Image
          src="/courses/banner_mau.png"
          alt="Banner Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Bottom transition: gradient fade → wave ── */}

      {/* Gradient fade: trong suốt → kem */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "clamp(84px, 16vw, 210px)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(247,241,228,0.35) 40%, rgba(247,241,228,0.82) 72%, #F7F1E4 100%)",
        }}
      />

      {/* Wave tầng 1 — teal pastel nhạt, lệch pha */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-[14px] z-20 w-full sm:bottom-[26px] md:bottom-[34px]"
        viewBox="0 0 1440 70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,42 C200,14 440,62 720,35 C1000,8 1240,56 1440,30 L1440,70 L0,70 Z"
          fill="rgba(204,237,232,0.38)"
        />
      </svg>

      {/* Wave tầng 2 — kem đầy, tạo đường cong chính */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 w-full"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C280,56 560,4 860,28 C1080,46 1280,12 1440,24 L1440,60 L0,60 Z"
          fill="#F7F1E4"
        />
      </svg>
    </section>
  );
}
