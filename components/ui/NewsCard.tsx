"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NewsCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  index?: number;
  sectionInView?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NewsCard({
  href,
  imageSrc,
  imageAlt,
  title,
  index = 0,
  sectionInView = false,
}: NewsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: false, amount: 0.2 });
  const visible = sectionInView && isCardInView;

  // Entrance direction based on index for fan-out effect
  const entryX = index === 0 ? -60 : index === 2 ? 60 : 0;
  const entryY = index === 1 ? 70 : 50;
  const entryRotate = index === 0 ? -3 : index === 2 ? 3 : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: entryY,
        x: entryX,
        rotateZ: entryRotate,
        scale: 0.92,
        filter: "blur(10px)",
      }}
      animate={
        visible
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              rotateZ: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: entryY,
              x: entryX,
              rotateZ: entryRotate,
              scale: 0.92,
              filter: "blur(10px)",
            }
      }
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      className="group relative px-2"
      style={{ perspective: 1000 }}
    >
      <motion.div
        whileHover={{
          y: -14,
          rotateX: 4,
          rotateY: index === 0 ? 3 : index === 2 ? -3 : 0,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="will-change-transform"
      >
        {/* Image container */}
        <div className="relative overflow-hidden rounded-t-2xl border border-gray-100 shadow-md transition-shadow duration-500 group-hover:shadow-xl">
          <a href={href} className="relative block overflow-hidden">
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="h-[220px] w-full object-cover sm:h-[260px]"
              whileHover={{ scale: 1.14 }}
              transition={{ duration: 0.7, ease: EASE }}
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-red-900/0 transition-colors duration-500 group-hover:bg-red-900/15" />

            {/* Top-right arrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-red-600 opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </a>
        </div>

        {/* Title card */}
        <motion.div
          initial={false}
          animate={visible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: EASE }}
          className="relative z-10 mx-5 -mt-10 rounded-xl bg-white px-5 py-5 text-center shadow-lg transition-shadow duration-500 group-hover:shadow-2xl sm:mx-7 sm:px-6"
        >
          <a
            href={href}
            className="group/link block text-lg font-semibold leading-snug transition-colors duration-300 hover:text-red-600"
            style={{ color: "#444444" }}
          >
            {title}
          </a>

          {/* Animated red underline */}
          <motion.div
            className="mx-auto mt-3 h-[3px] rounded-full"
            style={{ backgroundColor: "#ED1F25" }}
            initial={{ width: 0, opacity: 0 }}
            animate={
              visible
                ? { width: 40, opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: EASE }}
          />

          {/* Read more hint */}
          <motion.div
            className="mt-3 flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider text-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span>Đọc tiếp</span>
            <ArrowUpRight className="h-3 w-3" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
