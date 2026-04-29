"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BannerSection() {
  return (
    <section className="relative min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE }}
        className="h-full min-h-[90vh] overflow-hidden"
      >
        <Image
          src="/banner.png"
          alt="Banner Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực"
          width={1920}
          height={1080}
          className="h-full min-h-[90vh] w-full object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
