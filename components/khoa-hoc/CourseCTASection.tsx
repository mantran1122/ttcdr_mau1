"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type CourseCTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type VariantCustom = {
  reduce?: boolean;
  index?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const ctaVariants: Variants = {
  hidden: (custom: VariantCustom = {}) =>
    custom.reduce ? { opacity: 0 } : { opacity: 0, y: 38, scale: 0.98, filter: "blur(8px)" },
  show: (custom: VariantCustom = {}) =>
    custom.reduce
      ? { opacity: 1, transition: { duration: 0.25 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: EASE },
        },
};

const ctaItemVariants: Variants = {
  hidden: (custom: VariantCustom = {}) =>
    custom.reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(5px)" },
  show: (custom: VariantCustom = {}) => {
    const delay = custom.reduce ? 0 : 0.1 + (custom.index ?? 0) * 0.08;
    return custom.reduce
      ? { opacity: 1, transition: { duration: 0.2, delay } }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, delay, ease: EASE },
        };
  },
};

export default function CourseCTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CourseCTASectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background pb-24 pt-8 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={ctaVariants}
          custom={{ reduce: !!shouldReduceMotion }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#0B1A3B] px-6 py-10 text-white shadow-[0_24px_70px_rgba(11,26,59,0.34)] sm:px-8 lg:px-12 lg:py-14"
        >
          <motion.div
            aria-hidden
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 18, 0],
                    y: [0, 14, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -20, 0],
                    y: [0, -10, 0],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{ duration: 12, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-red-400/25 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={shouldReduceMotion ? undefined : { opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 3.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          <div className="relative z-10 max-w-[760px]">
            <motion.h2
              variants={ctaItemVariants}
              custom={{ reduce: !!shouldReduceMotion, index: 0 }}
              className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[42px]"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={ctaItemVariants}
              custom={{ reduce: !!shouldReduceMotion, index: 1 }}
              className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg"
            >
              {description}
            </motion.p>
            <motion.div
              variants={ctaItemVariants}
              custom={{ reduce: !!shouldReduceMotion, index: 2 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-full bg-[#ED1F25] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(237,31,37,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#d7171d] hover:shadow-[0_16px_34px_rgba(237,31,37,0.42)] active:scale-[0.98]"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.4} />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/15 hover:shadow-[0_10px_24px_rgba(255,255,255,0.16)]"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
