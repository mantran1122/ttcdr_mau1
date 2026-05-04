"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

function AnimatedLine({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={["block overflow-hidden", className].join(" ")}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.3, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="relative pt-16 pb-24 sm:pt-[16vh] sm:pb-[28vh] lg:pt-[20vh] lg:pb-[34vh]">
      <div className="container relative mx-auto px-4">
        <motion.div
          style={{ opacity, y }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl leading-[1.2] tracking-[-0.02em] sm:tracking-[-0.04em]"
          >
            <AnimatedLine
              text="Trung tâm Chuẩn đầu ra"
              className="text-[36px] font-black text-slate-950 sm:text-[52px] lg:text-[68px]"
            />
            <span className="block text-[36px] font-black text-slate-950 sm:text-[52px] lg:text-[68px]">
              <motion.span
                variants={wordVariants}
                className="inline-block mr-[0.25em] font-light text-slate-400"
              >
                &amp;
              </motion.span>
              <AnimatedLine
                text="Phát triển nguồn nhân lực"
                className="inline text-[36px] font-black text-slate-950 sm:text-[52px] lg:text-[68px]"
              />
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
