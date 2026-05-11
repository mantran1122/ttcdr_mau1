"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Laptop,
  Languages,
  Layers3,
  Sparkles,
  Users,
} from "lucide-react";
import type { Course } from "@/data/courses";

type CourseGridSectionProps = {
  courses: Course[];
};

type CourseMetaItem = {
  label: string;
  value: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type AccentConfig = {
  pillClassName: string;
  statIconClassName: string;
  visualClassName: string;
  floatingTags: string[];
  pillIcon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type MotionCustom = {
  reduce?: boolean;
  reverse?: boolean;
  index?: number;
  tagIndex?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT_ONCE = { once: true, amount: 0.25 } as const;

const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0 },
  show: (reduce: boolean = false) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0.06 : 0.12,
      delayChildren: reduce ? 0 : 0.05,
    },
  }),
};

const sectionHeaderItemVariants: Variants = {
  hidden: (reduce: boolean = false) =>
    reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (reduce: boolean = false) =>
    reduce
      ? {
          opacity: 1,
          transition: { duration: 0.2 },
        }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.72, ease: EASE },
        },
};

const courseBlockVariants: Variants = {
  hidden: (custom: MotionCustom = {}) =>
    custom.reduce
      ? { opacity: 0 }
      : { opacity: 0, y: 48, scale: 0.97, filter: "blur(8px)" },
  show: (custom: MotionCustom = {}) => {
    const delay = custom.reduce ? 0 : (custom.index ?? 0) * 0.06;
    return custom.reduce
      ? {
          opacity: 1,
          transition: { duration: 0.25, delay, ease: EASE },
        }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.9, delay, ease: EASE },
        };
  },
};

const textColumnVariants: Variants = {
  hidden: (custom: MotionCustom = {}) =>
    custom.reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: custom.reverse ? 28 : -28,
        },
  show: (custom: MotionCustom = {}) =>
    custom.reduce
      ? {
          opacity: 1,
          transition: { staggerChildren: 0.04, delayChildren: 0.04 },
        }
      : {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.66,
            ease: EASE,
            staggerChildren: 0.08,
            delayChildren: 0.14,
          },
        },
};

const textItemVariants: Variants = {
  hidden: (reduce: boolean = false) => (reduce ? { opacity: 0 } : { opacity: 0, y: 18 }),
  show: (reduce: boolean = false) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.18 } }
      : { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
};

const visualColumnVariants: Variants = {
  hidden: (custom: MotionCustom = {}) =>
    custom.reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: custom.reverse ? -36 : 36,
          scale: 0.94,
          rotate: custom.reverse ? -1.5 : 1.5,
        },
  show: (custom: MotionCustom = {}) =>
    custom.reduce
      ? { opacity: 1, transition: { duration: 0.24 } }
      : {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          transition: { duration: 0.86, delay: 0.08, ease: EASE },
        },
};

const statsContainerVariants: Variants = {
  hidden: {},
  show: (reduce: boolean = false) => ({
    transition: {
      staggerChildren: reduce ? 0.04 : 0.075,
      delayChildren: reduce ? 0.03 : 0.06,
    },
  }),
};

const statItemVariants: Variants = {
  hidden: (reduce: boolean = false) =>
    reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 },
  show: (reduce: boolean = false) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.2 } }
      : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

const floatingTagVariants: Variants = {
  hidden: (custom: MotionCustom = {}) =>
    custom.reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 },
  show: (custom: MotionCustom = {}) => {
    const delay = custom.reduce ? 0 : 0.2 + (custom.tagIndex ?? 0) * 0.08;
    return custom.reduce
      ? { opacity: 1, transition: { duration: 0.2, delay } }
      : { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, delay, ease: EASE } };
  },
};

const backgroundBlobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE },
  },
};

const accentBySlug: Record<string, AccentConfig> = {
  "tri-tue-nhan-tao": {
    pillClassName: "bg-emerald-100 text-emerald-800",
    statIconClassName: "bg-emerald-100 text-emerald-700",
    visualClassName: "bg-gradient-to-br from-emerald-50 via-white to-amber-50",
    floatingTags: ["AI Assistant", "Tối ưu học tập", "Nghiên cứu thông minh"],
    pillIcon: Sparkles,
  },
  "ngoai-ngu": {
    pillClassName: "bg-blue-100 text-blue-800",
    statIconClassName: "bg-blue-100 text-blue-700",
    visualClassName: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
    floatingTags: ["English", "Academic", "Speaking"],
    pillIcon: Languages,
  },
  "tin-hoc": {
    pillClassName: "bg-lime-100 text-lime-800",
    statIconClassName: "bg-lime-100 text-lime-700",
    visualClassName: "bg-gradient-to-br from-lime-50 via-white to-cyan-50",
    floatingTags: ["Excel", "PowerPoint", "Digital Skills"],
    pillIcon: GraduationCap,
  },
  "ky-nang-mem": {
    pillClassName: "bg-violet-100 text-violet-800",
    statIconClassName: "bg-violet-100 text-violet-700",
    visualClassName: "bg-gradient-to-br from-violet-50 via-white to-fuchsia-50",
    floatingTags: ["Giao tiếp", "Làm việc nhóm", "Thuyết trình"],
    pillIcon: Users,
  },
  "ky-nang-nghe-nghiep": {
    pillClassName: "bg-cyan-100 text-cyan-800",
    statIconClassName: "bg-cyan-100 text-cyan-700",
    visualClassName: "bg-gradient-to-br from-cyan-50 via-white to-teal-50",
    floatingTags: ["CV", "Phỏng vấn", "Career Ready"],
    pillIcon: BriefcaseBusiness,
  },
};

const fallbackAccents: AccentConfig[] = [
  accentBySlug["tri-tue-nhan-tao"],
  accentBySlug["ngoai-ngu"],
  accentBySlug["tin-hoc"],
  accentBySlug["ky-nang-mem"],
  accentBySlug["ky-nang-nghe-nghiep"],
];

function getAccent(course: Course, index: number): AccentConfig {
  return accentBySlug[course.slug] ?? fallbackAccents[index % fallbackAccents.length];
}

function buildMetaItems(course: Course): CourseMetaItem[] {
  return [
    { label: "THỜI LƯỢNG", value: course.duration, Icon: Clock3 },
    { label: "CẤP ĐỘ", value: course.level, Icon: BarChart3 },
    { label: "SỐ BUỔI", value: course.sessions, Icon: Layers3 },
    { label: "HÌNH THỨC", value: course.format, Icon: Laptop },
  ];
}

function StatItem({
  item,
  iconClassName,
  reduceMotion,
}: {
  item: CourseMetaItem;
  iconClassName: string;
  reduceMotion: boolean;
}) {
  const { Icon, label, value } = item;

  return (
    <motion.article
      variants={statItemVariants}
      custom={reduceMotion}
      className="rounded-2xl bg-white/95 p-4 shadow-[0_8px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-2.5">
        <span className={["inline-flex h-8 w-8 items-center justify-center rounded-xl", iconClassName].join(" ")}>
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </span>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      </div>
      <p className="mt-2 text-[20px] font-bold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[22px]">{value}</p>
    </motion.article>
  );
}

function CourseVisual({
  course,
  accent,
  reduceMotion,
  reverse,
}: {
  course: Course;
  accent: AccentConfig;
  reduceMotion: boolean;
  reverse: boolean;
}) {
  const imageFolder = "/Tạo hình ảnh web";
  const imageSrc =
    course.slug === "tri-tue-nhan-tao"
      ? `${imageFolder}/Trí tuệ nhân tạo AI.png`
      : course.slug === "ngoai-ngu"
        ? `${imageFolder}/Khóa học tiếng anh.png`
        : course.slug === "tin-hoc"
          ? `${imageFolder}/Khóa học tin học.jpeg`
          : course.slug === "ky-nang-mem"
            ? `${imageFolder}/knm.jpg`
            : course.slug === "ky-nang-nghe-nghiep"
              ? `${imageFolder}/knnn2.jpg`
              : `${imageFolder}/Trí tuệ nhân tạo AI.png`;

  return (
    <motion.div
      variants={visualColumnVariants}
      custom={{ reduce: reduceMotion, reverse }}
      className="group/image relative overflow-hidden rounded-[28px] border border-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300 group-hover/course:shadow-[0_24px_52px_rgba(15,23,42,0.1)]"
    >
      <div className={["relative h-[260px] w-full sm:h-[320px] lg:h-[380px]", accent.visualClassName].join(" ")}>
        <Image
          src={imageSrc}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/course:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <motion.div
        variants={floatingTagVariants}
        custom={{ reduce: reduceMotion, tagIndex: 0 }}
        className="absolute left-4 top-4 hidden rounded-2xl bg-white/85 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-transform duration-500 group-hover/course:-translate-y-1 sm:block"
      >
        {accent.floatingTags[0]}
      </motion.div>
      <motion.div
        variants={floatingTagVariants}
        custom={{ reduce: reduceMotion, tagIndex: 1 }}
        className="absolute bottom-4 left-4 hidden rounded-2xl bg-white/85 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-transform duration-500 group-hover/course:translate-y-1 md:block"
      >
        {accent.floatingTags[1]}
      </motion.div>
      <motion.div
        variants={floatingTagVariants}
        custom={{ reduce: reduceMotion, tagIndex: 2 }}
        className="absolute right-4 top-10 hidden rounded-2xl bg-white/85 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-transform duration-500 group-hover/course:-translate-y-1 lg:block"
      >
        {accent.floatingTags[2]}
      </motion.div>
    </motion.div>
  );
}

function CourseBlock({
  course,
  index,
  reduceMotion,
}: {
  course: Course;
  index: number;
  reduceMotion: boolean;
}) {
  const accent = getAccent(course, index);
  const metaItems = buildMetaItems(course);
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      variants={courseBlockVariants}
      custom={{ reduce: reduceMotion, index }}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_ONCE}
      className="group/course px-6 py-10 transition-colors duration-300 hover:bg-slate-50/35 md:px-8 md:py-12 lg:px-12 lg:py-14"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={textColumnVariants}
          custom={{ reduce: reduceMotion, reverse: isReversed }}
          className={isReversed ? "order-1 lg:order-2" : "order-1 lg:order-1"}
        >
          {/* <motion.p
            variants={textItemVariants}
            custom={reduceMotion}
            className={[
              "inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]",
              accent.pillClassName,
            ].join(" ")}
          >
            <PillIcon className="h-4 w-4" strokeWidth={2.2} />
            {course.audience}
          </motion.p> */}

          <motion.h3
            variants={textItemVariants}
            custom={reduceMotion}
            className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 md:text-4xl lg:text-5xl"
          >
            {course.title}
          </motion.h3>
{/* 
          <motion.p
            variants={textItemVariants}
            custom={reduceMotion}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {course.description}
          </motion.p> */}

          <motion.div
            variants={statsContainerVariants}
            custom={reduceMotion}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {metaItems.map((item) => (
              <StatItem
                key={`${course.slug}-${item.label}`}
                item={item}
                iconClassName={accent.statIconClassName}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>

          <motion.div variants={textItemVariants} custom={reduceMotion}>
            <Link
              href={`/khoa-hoc/${course.slug}`}
              className="group/cta mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(34,197,94,0.28)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-600 active:scale-[0.98]"
            >
              Xem chi tiết
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-green-700 transition-transform duration-300 group-hover/cta:translate-x-1">
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className={isReversed ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
          <CourseVisual course={course} accent={accent} reduceMotion={reduceMotion} reverse={isReversed} />
        </div>
      </div>
    </motion.article>
  );
}

export default function CourseGridSection({ courses }: CourseGridSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (courses.length === 0) {
    return null;
  }

  return (
    <section id="danh-sach-khoa-hoc" className="relative overflow-hidden bg-background py-20 md:py-28">
      <motion.div
        variants={backgroundBlobVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"
      />
      <motion.div
        variants={backgroundBlobVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl"
      />
      <motion.div
        variants={backgroundBlobVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="pointer-events-none absolute bottom-8 left-1/3 h-72 w-72 rounded-full bg-amber-100/35 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeaderVariants}
          custom={shouldReduceMotion}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={sectionHeaderItemVariants}
            custom={shouldReduceMotion}
            className="inline-flex items-center rounded-full border border-slate-200 bg-background-light px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700"
          >
            Danh mục khóa học
          </motion.p>
          <motion.h2
            variants={sectionHeaderItemVariants}
            custom={shouldReduceMotion}
            className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl"
          >
            Chọn khóa học phù hợp với mục tiêu của bạn
          </motion.h2>
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-[36px] border border-black/[0.04] bg-background-light shadow-[0_22px_70px_rgba(15,23,42,0.07)] md:mt-14 lg:mt-16">
          {courses.map((course, index) => (
            <CourseBlock key={course.slug} course={course} index={index} reduceMotion={!!shouldReduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
