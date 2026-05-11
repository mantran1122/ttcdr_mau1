"use client";

import { useRef, useState, useEffect, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Briefcase, Laptop, MessageCircle, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const EASE = [0.22, 1, 0.36, 1] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Parse "148.000+" → { value: 148000, suffix: "+", dotted: true }
function parseNumber(str: string): { value: number; suffix: string; dotted: boolean } {
  const dotted = /\d\.\d{3}/.test(str);
  const suffix = str.replace(/[\d.]/g, "");
  const raw = str.replace(/\./g, "").replace(/\D/g, "");
  return { value: parseInt(raw, 10), suffix, dotted };
}

// 148000 → "148.000"
function formatDotted(n: number): string {
  return new Intl.NumberFormat("de-DE").format(n);
}

function useCountUp(target: number, inView: boolean, duration = 1800): number {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

type StatCardItem = {
  number: string;
  label: string;
  Icon: LucideIcon;
  accent: string;
  accentBorder: string;
  iconGradient: string;
  surfaceGradient?: string;
  surfaceShadow?: string;
  dividerColor?: string;
  iconShadow?: string;
  featured?: boolean;
};

const topCards: StatCardItem[] = [
  {
    number: "2015",
    label: "Năm thành lập",
    Icon: Brain,
    accent: "#E11D48",
    accentBorder: "rgba(253, 164, 175, 0.85)",
    iconGradient: "linear-gradient(135deg, #FB7185 0%, #E11D48 100%)",
    surfaceGradient: "linear-gradient(180deg, #FFF1F2 0%, #FFE4E6 100%)",
    surfaceShadow: "0 8px 26px rgba(225, 29, 72, 0.12)",
    dividerColor: "rgba(225, 29, 72, 0.3)",
    iconShadow: "0 8px 22px rgba(225, 29, 72, 0.27)",
  },
  {
    number: "100%",
    label: "Theo chuẩn Bộ GD&ĐT",
    Icon: Briefcase,
    accent: "#FFFFFF",
    accentBorder: "rgba(76, 118, 226, 0.36)",
    iconGradient: "linear-gradient(135deg, #4E7EE7 0%, #7EA3EE 100%)",
    featured: true,
  },
  {
    number: "10",
    label: "Nội dung đào tạo/thi",
    Icon: Laptop,
    accent: "#EA580C",
    accentBorder: "rgba(253, 186, 116, 0.85)",
    iconGradient: "linear-gradient(135deg, #FDBA74 0%, #F97316 100%)",
    surfaceGradient: "linear-gradient(180deg, #FFF7ED 0%, #FFEDD5 100%)",
    surfaceShadow: "0 8px 26px rgba(194, 65, 12, 0.12)",
    dividerColor: "rgba(234, 88, 12, 0.3)",
    iconShadow: "0 8px 22px rgba(234, 88, 12, 0.28)",
  },
];

const bottomCards: StatCardItem[] = [
  {
    number: "148.000+",
    label: "Lượt dự thi",
    Icon: MessageCircle,
    accent: "#059669",
    accentBorder: "rgba(110, 231, 183, 0.85)",
    iconGradient: "linear-gradient(135deg, #6EE7B7 0%, #10B981 100%)",
    surfaceGradient: "linear-gradient(180deg, #ECFDF5 0%, #D1FAE5 100%)",
    surfaceShadow: "0 8px 26px rgba(5, 150, 105, 0.11)",
    dividerColor: "rgba(5, 150, 105, 0.32)",
    iconShadow: "0 8px 22px rgba(5, 150, 105, 0.26)",
  },
  {
    number: "119.000+",
    label: "Lượt SV đăng ký học",
    Icon: Users,
    accent: "#E11D48",
    accentBorder: "rgba(253, 164, 175, 0.85)",
    iconGradient: "linear-gradient(135deg, #FB7185 0%, #E11D48 100%)",
    surfaceGradient: "linear-gradient(180deg, #FFF1F2 0%, #FFE4E6 100%)",
    surfaceShadow: "0 8px 26px rgba(225, 29, 72, 0.12)",
    dividerColor: "rgba(225, 29, 72, 0.3)",
    iconShadow: "0 8px 22px rgba(225, 29, 72, 0.27)",
  },
];

type StatCardProps = {
  item: StatCardItem;
  delay?: number;
};

function StatCard({ item, delay = 0 }: StatCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const { value, suffix, dotted } = parseNumber(item.number);
  const count = useCountUp(value, inView);
  const displayNumber = `${dotted ? formatDotted(count) : count}${suffix}`;

  const cardStyle: CSSProperties = {
    borderColor: item.accentBorder,
    background: item.featured
      ? "linear-gradient(135deg, #2f63df 0%, #7ea2ed 100%)"
      : item.surfaceGradient ?? "linear-gradient(180deg, #f6f8fc 0%, #eff3f9 100%)",
    boxShadow: item.featured
      ? "0 18px 44px rgba(41, 87, 190, 0.26)"
      : item.surfaceShadow ?? "0 8px 26px rgba(23, 48, 97, 0.07)",
  };

  const iconStyle: CSSProperties = item.featured
    ? {
        background: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }
    : {
        background: item.iconGradient,
        boxShadow: item.iconShadow ?? "0 8px 22px rgba(47, 103, 232, 0.25)",
      };

  const dividerStyle: CSSProperties = item.featured
    ? { background: "rgba(255, 255, 255, 0.36)" }
    : { background: item.dividerColor ?? "rgba(47, 103, 232, 0.28)" };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={{ y: -2 }}
      style={cardStyle}
      className={[
        "w-full rounded-full border transition-[box-shadow,transform] duration-300",
        "flex min-h-[120px] items-center gap-3 px-4 py-3 sm:min-h-[150px] sm:gap-4 sm:px-6 sm:py-4",
        "xl:min-h-[176px] xl:gap-5 xl:px-[30px] xl:py-5",
        item.featured ? "xl:min-h-[184px]" : "",
      ].join(" ")}
    >
      <div className="shrink-0">
        <span
          style={iconStyle}
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full sm:h-14 sm:w-14 xl:h-[72px] xl:w-[72px]"
        >
          <item.Icon size={23} strokeWidth={2.1} color="white" />
        </span>
      </div>

      <span style={dividerStyle} className="h-14 w-px shrink-0 opacity-85 sm:h-[74px] xl:h-[98px]" />

      <div className="min-w-0">
        <p
          style={{ color: item.featured ? "#F8FAFC" : "#0F172A" }}
          className="text-[clamp(1.8rem,8.8vw,2.5rem)] font-medium leading-none tracking-[-0.03em] sm:text-[2.2rem] xl:text-[50px]"
        >
          {displayNumber}
        </p>
        <p
          style={{ color: item.featured ? "#F8FAFC" : "#0F172A" }}
          className="mt-1 text-[0.95rem] font-medium leading-[1.3] sm:mt-1.5 sm:text-[1rem] xl:mt-[9px] xl:text-[clamp(1rem,1.35vw,2.12rem)] xl:leading-[1.28]"
        >
          {item.label}
        </p>
      </div>
    </motion.article>
  );
}

export default function LearningGroupsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <header ref={titleRef} className="mb-7 text-center sm:mb-8 lg:mb-10 xl:mb-12" aria-label="Thống kê nổi bật">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6"
          >
            <SectionTitle title="Thống kê nổi bật" />
          </motion.div>

          <motion.h2
            variants={headerItem}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            className="text-[clamp(2rem,10vw,2.8rem)] font-medium leading-[1.35] tracking-[-0.035em] text-[#0b1a3b] sm:text-[50px]"
          >
            Những con số ấn tượng
          </motion.h2>
        </header>

        <div className="grid justify-items-center gap-[14px] sm:gap-5 lg:gap-[26px]" role="list" aria-label="Các số liệu thống kê">
          <div className="grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {topCards.map((item, index) => (
              <div
                key={`${item.number}-${item.label}`}
                className={[
                  "w-full",
                  item.featured ? "sm:col-span-2 sm:mx-auto sm:max-w-[452px] lg:col-span-1 lg:max-w-none" : "",
                ].join(" ")}
              >
                <StatCard item={item} delay={index * 0.08} />
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-[860px] grid-cols-1 gap-[14px] sm:grid-cols-2 sm:gap-[14px] lg:gap-7">
            {bottomCards.map((item, index) => (
              <StatCard key={`${item.number}-${item.label}`} item={item} delay={0.18 + index * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
