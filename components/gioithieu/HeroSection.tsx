"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const HERO_BANNER_HEIGHT = "aspect-video max-h-[95vh] lg:aspect-auto lg:h-[66vh]";

export default function HeroSection() {
  return (
    <section className={`relative overflow-hidden ${HERO_BANNER_HEIGHT}`}>
      {/* Banner – full bleed, absolute from top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="h-full w-full overflow-hidden"
      >
        <Image
          src="/courses/banner_8.png"
          alt="Banner Trung tâm Chuẩn đầu ra"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-[center_top] sm:object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 z-40 flex flex-col items-start justify-start pt-16 sm:pt-20 md:pt-32">
        <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="text-[clamp(1.7rem,4vw,3.6rem)] font-black leading-[1.25] tracking-[-0.03em] text-slate-800"
          >
            Giới thiệu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="mt-2 text-[clamp(0.95rem,1.6vw,1.25rem)] font-medium text-slate-600"
          >
            Kiến tạo nền tảng - Vững chắc chuyên môn
          </motion.p>
          {/* <motion.ol
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.30, ease: EASE }}
            className="mt-2 ml-6 flex items-center gap-2 text-sm text-slate-500"
          >
            <li>
              <Link href="/" className="flex items-center text-red-500 transition-colors hover:text-red-600">
                <Home className="h-4 w-4" strokeWidth={2} />
              </Link>
            </li>
            <li className="flex items-center gap-2 text-red-500">
              <ChevronRight className="h-4 w-4 text-red-500" strokeWidth={2} />
              <span>Về chúng tôi</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-300" strokeWidth={2} />
              <span className="font-medium text-slate-700">Giới thiệu</span>
            </li>
          </motion.ol> */}
        </div>
      </div>

      {/* Bottom transition: fade + wave để nối mượt sang section tiếp theo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "clamp(84px, 16vw, 210px)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(248,249,251,0.35) 40%, rgba(248,249,251,0.82) 72%, #F8F9FB 100%)",
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
          fill="#F8F9FB"
        />
      </svg>

    </section>
  );
}
