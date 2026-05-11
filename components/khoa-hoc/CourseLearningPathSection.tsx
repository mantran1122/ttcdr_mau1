"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { LearningPathStep } from "@/data/courses";

type CourseLearningPathSectionProps = {
  steps: LearningPathStep[];
};

type VariantCustom = {
  reduce?: boolean;
  index?: number;
  axis?: "x" | "y";
  delay?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  show: (reduce: boolean = false) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0.05 : 0.1,
      delayChildren: reduce ? 0 : 0.06,
    },
  }),
};

const headerItemVariants: Variants = {
  hidden: (reduce: boolean = false) =>
    reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(8px)" },
  show: (reduce: boolean = false) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: EASE },
        },
};

const connectorVariants: Variants = {
  hidden: (custom: VariantCustom = {}) => {
    if (custom.reduce) {
      return { opacity: 0 };
    }
    return custom.axis === "x"
      ? { opacity: 0, scaleX: 0, transformOrigin: "left center" }
      : { opacity: 0, scaleY: 0, transformOrigin: "center top" };
  },
  show: (custom: VariantCustom = {}) => {
    if (custom.reduce) {
      return { opacity: 1, transition: { duration: 0.2 } };
    }
    return {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 1.6, delay: custom.delay ?? 0, ease: EASE },
    };
  },
};

const stepVariants: Variants = {
  hidden: (custom: VariantCustom = {}) =>
    custom.reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97, filter: "blur(7px)" },
  show: (custom: VariantCustom = {}) => {
    const delay = custom.reduce ? 0 : (custom.index ?? 0) * 0.08;
    return custom.reduce
      ? { opacity: 1, transition: { duration: 0.2, delay } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.78, delay, ease: EASE },
        };
  },
};

export default function CourseLearningPathSection({ steps }: CourseLearningPathSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const connectorCenterMobile = 28; // py-2 (8px) + badge half (20px)
  const connectorCenterDesktop = 36; // xl:py-4 (16px) + badge half (20px)
  const connectorDelay = shouldReduceMotion ? 0 : (steps.length - 1) * 0.08 + 0.88;

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.9, ease: EASE }}
        className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-red-200/35 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 0.9, delay: shouldReduceMotion ? 0 : 0.1, ease: EASE }}
        className="pointer-events-none absolute bottom-0 right-12 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          custom={!!shouldReduceMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="mx-auto mb-12 max-w-[760px] text-center"
        >
          <motion.h2
            variants={headerItemVariants}
            custom={!!shouldReduceMotion}
            className="text-[36px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[44px]"
          >
            Lộ trình học tập tại Trung tâm
          </motion.h2>
        </motion.div>

        <div className="relative grid gap-5 xl:grid-cols-4 xl:gap-10">
          <motion.div
            variants={connectorVariants}
            custom={{ reduce: !!shouldReduceMotion, axis: "y", delay: connectorDelay }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="pointer-events-none absolute z-0 w-0.5 rounded-full bg-gradient-to-b from-[#e53e3e] via-[#ED1F25] to-[#2848a8] xl:hidden"
            style={{ left: connectorCenterMobile, top: connectorCenterMobile, bottom: connectorCenterMobile }}
          />
          <motion.div
            variants={connectorVariants}
            custom={{ reduce: !!shouldReduceMotion, axis: "x", delay: connectorDelay }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="pointer-events-none absolute z-0 hidden h-0.5 rounded-full bg-gradient-to-r from-[#e53e3e] via-[#ED1F25] to-[#2848a8] xl:block"
            style={{ left: connectorCenterDesktop, right: connectorCenterDesktop, top: connectorCenterDesktop }}
          />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={stepVariants}
              custom={{ reduce: !!shouldReduceMotion, index }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="group relative z-10 px-2 py-2 xl:py-4"
            >
              <div className="pointer-events-none absolute inset-x-0 top-2 h-24 rounded-[24px] bg-gradient-to-r from-[#ED1F25]/0 via-[#ED1F25]/10 to-[#2c5aa0]/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10 mb-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#ED1F25] px-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(237,31,37,0.35)] ring-4 ring-white/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_16px_28px_rgba(237,31,37,0.42)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="max-w-[320px] text-xl font-black leading-tight tracking-[-0.02em] text-[#0B1A3B] transition-colors duration-300 group-hover:text-[#132c63]">
                {step.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
