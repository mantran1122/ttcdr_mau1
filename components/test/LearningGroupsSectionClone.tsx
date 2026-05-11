"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Laptop, MessageCircle, Users, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

type StatItem = {
  number: string;
  label: string;
  Icon: LucideIcon;
  iconGradient: string;
  numberColor: string;
  positionClassName: string;
  delay: number;
};

const statItems: StatItem[] = [
  {
    number: "2015",
    label: "Năm thành lập",
    Icon: Brain,
    iconGradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
    numberColor: "#6D28D9",
    positionClassName: "left-0 top-[140px]",
    delay: 0.12,
  },
  {
    number: "10",
    label: "Nội dung đào tạo/thi",
    Icon: Laptop,
    iconGradient: "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
    numberColor: "#1D4ED8",
    positionClassName: "right-0 top-[140px]",
    delay: 0.2,
  },
  {
    number: "148.000+",
    label: "Lượt dự thi",
    Icon: MessageCircle,
    iconGradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
    numberColor: "#DC2626",
    positionClassName: "left-[30px] top-[390px]",
    delay: 0.28,
  },
  {
    number: "119.000+",
    label: "Lượt SV đăng ký học",
    Icon: Users,
    iconGradient: "linear-gradient(135deg, #0D9488 0%, #34D399 100%)",
    numberColor: "#0D9488",
    positionClassName: "right-[30px] top-[390px]",
    delay: 0.36,
  },
];

type StatPillProps = {
  item: StatItem;
  className?: string;
};

function StatPill({ item, className = "" }: StatPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: item.delay, ease: EASE }}
      className={[
        "flex h-[120px] items-center gap-5 rounded-full bg-white px-8",
        "border border-black/[0.05] shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
        "cursor-default transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(15,23,42,0.13)]",
        className,
      ].join(" ")}
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-md"
        style={{ background: item.iconGradient }}
      >
        <item.Icon size={24} color="white" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p
          className="text-[36px] font-black leading-none tracking-tight"
          style={{ color: item.numberColor }}
        >
          {item.number}
        </p>
        <p className="mt-1.5 text-[14px] font-medium text-slate-500">{item.label}</p>
      </div>
    </motion.div>
  );
}

export default function LearningGroupsSectionClone() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });

  return (
    <section className="relative isolate overflow-hidden bg-background py-24 xl:py-28">
      <div className="container relative mx-auto h-auto px-4 xl:h-[700px]">

        {/* Desktop: absolutely positioned floating pills */}
        <div className="hidden xl:block">
          {statItems.map((item) => (
            <StatPill
              key={item.label}
              item={item}
              className={["absolute w-[360px]", item.positionClassName].join(" ")}
            />
          ))}

          {/* Featured pill - centered at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.48, ease: EASE }}
            className="absolute left-1/2 top-[510px] flex h-[130px] w-[440px] -translate-x-1/2 cursor-default items-center gap-6 rounded-full bg-white px-9 border border-black/[0.05] shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(15,23,42,0.13)]"
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg"
              style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)" }}
            >
              <Briefcase size={26} color="white" strokeWidth={2} />
            </div>
            <div className="h-12 w-px bg-amber-200/80" />
            <div className="min-w-0">
              <p className="text-[38px] font-black leading-none tracking-tight text-amber-500">
                100%
              </p>
              <p className="mt-1.5 whitespace-nowrap text-[14px] font-semibold text-amber-600">Theo chuẩn Bộ GD&ĐT</p>
            </div>
          </motion.div>
        </div>

        {/* Centered heading - shown on all breakpoints */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="relative z-10 mx-auto flex max-w-[540px] flex-col items-center text-center xl:absolute xl:left-1/2 xl:top-[200px] xl:-translate-x-1/2"
        >
          <motion.div
            variants={headerItem}
            className="mb-6 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 sm:text-sm"
          >
            <motion.span
              animate={titleInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="hidden h-px w-16 origin-right bg-slate-300 sm:block"
            />
            <motion.span
              animate={titleInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300 }}
              className="h-2 w-2 bg-red-500"
            />
            <span className="text-center">Thống kê nổi bật</span>
            <motion.span
              animate={titleInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 300 }}
              className="h-2 w-2 bg-red-500"
            />
            <motion.span
              animate={titleInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="hidden h-px w-16 origin-left bg-slate-300 sm:block"
            />
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="text-[46px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[50px]"
          >
            Những con số
            <br />
            ấn tượng
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="mt-4 text-sm leading-relaxed text-slate-600"
          >
          </motion.p>
        </motion.div>

        {/* Mobile / Tablet: stacked grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:hidden">
          {statItems.map((item, index) => (
            <StatPill
              key={item.label}
              item={{ ...item, delay: index * 0.08 }}
              className="w-full rounded-full"
            />
          ))}

          {/* Mobile featured pill */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="flex h-[120px] items-center gap-5 rounded-full bg-white px-8 sm:col-span-2 border border-black/[0.05] shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(15,23,42,0.13)]"
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-md"
              style={{ background: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)" }}
            >
              <Briefcase size={24} color="white" strokeWidth={2} />
            </div>
            <div className="h-10 w-px bg-amber-200/80" />
            <div className="min-w-0">
              <p className="text-[34px] font-black leading-none tracking-tight text-amber-500">100%</p>
              <p className="mt-1.5 text-[14px] font-semibold text-amber-600">Theo chuẩn Bộ GD&ĐT</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
