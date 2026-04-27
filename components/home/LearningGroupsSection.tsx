"use client";

import { motion } from "framer-motion";

const learningGroups = [
  {
    title: "Trí tuệ nhân tạo (AI)",
    icon: "🧠",
    iconClassName: "bg-violet-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(139,92,246,0.16)]",
    positionClassName: "left-0 top-[125px] -rotate-[1deg]",
  },
  {
    title: "Ngoại ngữ",
    icon: "💬",
    iconClassName: "bg-red-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(239,68,68,0.16)]",
    positionClassName: "left-[40px] top-[405px] rotate-[0.5deg]",
  },
  {
    title: "Tin học",
    icon: "💻",
    iconClassName: "bg-blue-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(59,130,246,0.16)]",
    positionClassName: "right-0 top-[125px] rotate-[1deg]",
  },
  {
    title: "Kỹ năng nghề nghiệp",
    icon: "💼",
    iconClassName: "bg-amber-400",
    shadowClassName: "shadow-[0_22px_55px_rgba(245,158,11,0.18)]",
    positionClassName: "right-[40px] top-[365px] -rotate-[0.5deg]",
  },
];

const centerGroup = {
  title: "Kỹ năng mềm",
  icon: "👥",
  iconClassName: "bg-teal-400",
  shadowClassName: "shadow-[0_22px_55px_rgba(20,184,166,0.16)]",
};

type GroupPillProps = {
  title: string;
  icon: string;
  iconClassName: string;
  shadowClassName: string;
  className?: string;
  delay?: number;
};

function GroupPill({
  title,
  icon,
  iconClassName,
  shadowClassName,
  className = "",
  delay = 0,
}: GroupPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "flex h-[78px] w-[330px] items-center gap-4 rounded-full border border-white/80 bg-white/90 px-5 backdrop-blur-xl",
        "transition duration-500 hover:-translate-y-1",
        shadowClassName,
        className,
      ].join(" ")}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{
          duration: 0.55,
          delay: delay + 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={[
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl text-white shadow-lg",
          iconClassName,
        ].join(" ")}
      >
        <span className="leading-none">{icon}</span>
      </motion.div>

      <span className="whitespace-nowrap text-lg font-semibold tracking-[-0.02em] text-slate-900">
        {title}
      </span>
    </motion.div>
  );
}

export default function LearningGroupsSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 xl:py-28">
      {/* Decorative rings only - không set màu nền riêng */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -z-10 h-[920px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1.1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1.2, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/45"
      />

      <div className="container relative mx-auto h-auto px-4 xl:h-[700px]">
        {/* Desktop floating pills */}
        <div className="hidden xl:block">
          {learningGroups.map((item, index) => (
            <GroupPill
              key={item.title}
              title={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              shadowClassName={item.shadowClassName}
              delay={0.12 + index * 0.08}
              className={["absolute", item.positionClassName].join(" ")}
            />
          ))}

          <GroupPill
            title={centerGroup.title}
            icon={centerGroup.icon}
            iconClassName={centerGroup.iconClassName}
            shadowClassName={centerGroup.shadowClassName}
            delay={0.48}
            className="absolute left-1/2 top-[520px] w-[320px] -translate-x-1/2 rotate-[0.5deg]"
          />
        </div>

        {/* Center title */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center xl:absolute xl:left-1/2 xl:top-[75px] xl:-translate-x-1/2"
        >
          <div className="mb-12 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 sm:text-sm">
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-center">Khám phá chương trình học</span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
          </div>

          <h2 className="text-center text-[clamp(2.6rem,4vw,4.3rem)] font-black leading-[1.35] tracking-[-0.055em] mt-0 text-slate-950">
            5 nhóm học phần
            <br />
            nổi bật tại Trung tâm
          </h2>
        </motion.div>

        {/* Tablet / Mobile layout */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:hidden">
          {[
            learningGroups[0],
            learningGroups[2],
            learningGroups[1],
            learningGroups[3],
            centerGroup,
          ].map((item, index) => (
            <GroupPill
              key={item.title}
              title={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              shadowClassName={item.shadowClassName}
              delay={index * 0.08}
              className="w-full max-w-none rounded-3xl sm:last:col-span-2 sm:last:mx-auto sm:last:max-w-[330px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}