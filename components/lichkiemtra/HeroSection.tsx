"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;
const HERO_BANNER_HEIGHT = "h-[48vh] min-h-[280px] sm:h-[62vh] md:h-[76vh] lg:h-[92vh]";

export default function HeroSection() {
  return (
    <section className={`relative overflow-hidden ${HERO_BANNER_HEIGHT}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="h-full w-full overflow-hidden"
      >
        <Image
          src="/courses/bannerthongtin3.png"
          alt="Banner trang lịch kiểm tra"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-[center_top] sm:object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      <div className="container relative z-40 mx-auto flex h-full items-end justify-center px-4 pb-16 sm:pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
          className="text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300/80 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Thông tin &amp; Lịch
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300/80 sm:block" />
          </div>
          <h1 className="text-[clamp(1.7rem,4vw,3.6rem)] font-black leading-[1.25] tracking-[-0.05em] text-slate-950">
            Lịch kiểm tra
          </h1>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "clamp(84px, 16vw, 210px)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(247,241,228,0.35) 40%, rgba(247,241,228,0.82) 72%, #F7F1E4 100%)",
        }}
      />

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-[14px] z-20 w-full sm:bottom-[26px] md:bottom-[34px]"
        viewBox="0 0 1440 70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,42 C200,14 440,62 720,35 C1000,8 1240,56 1440,30 L1440,70 L0,70 Z"
          fill="rgba(254,202,202,0.32)"
        />
      </svg>

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
