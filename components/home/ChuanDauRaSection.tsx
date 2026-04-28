"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const outcomeCards = [
  {
    number: "01",
    icon: "🧠",
    iconClassName: "bg-violet-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(139,92,246,0.16)]",
    label: "Trí tuệ nhân tạo (AI)",
    description:
      "Định hướng ngườihọc biết khai thác công cụ AI trong học tập và công việc, đồng thờisử dụng công nghệ có trách nhiệm, có kiểm chứng và phù hợp bối cảnh.",
  },
  {
    number: "02",
    icon: "💬",
    iconClassName: "bg-red-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(239,68,68,0.16)]",
    label: "Ngoại ngữ",
    description:
      "Hỗ trợ ngườihọc đáp ứng yêu cầu ngoại ngữ theo chuẩn đầu ra của chương trình đào tạo, tăng khả năng giao tiếp, đọc hiểu tài liệu và hội nhập nghề nghiệp.",
  },
  {
    number: "03",
    icon: "💻",
    iconClassName: "bg-blue-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(59,130,246,0.16)]",
    label: "Tin học",
    description:
      "Đáp ứng yêu cầu kỹ năng công nghệ thông tin cơ bản theo chuẩn đầu ra; hỗ trợ học tập, xử lý dữ liệu và làm việc hiệu quả trong môi trường số.",
  },
  {
    number: "04",
    icon: "👥",
    iconClassName: "bg-teal-400",
    shadowClassName: "shadow-[0_22px_55px_rgba(20,184,166,0.16)]",
    label: "Kỹ năng mềm",
    description:
      "Phát triển giao tiếp, làm việc nhóm, tư duy phản biện và giải quyết vấn đề; giúp ngườihọc thích ứng tốt hơn với môi trường học tập và làm việc thực tế.",
  },
  {
    number: "05",
    icon: "💼",
    iconClassName: "bg-amber-400",
    shadowClassName: "shadow-[0_22px_55px_rgba(245,158,11,0.18)]",
    label: "Kỹ năng nghề nghiệp",
    description:
      "Tăng cường tác phong, thái độ nghề nghiệp và kỹ năng thực hành, giúp ngườihọc đáp ứng tốt hơn yêu cầu của doanh nghiệp và đơn vị sử dụng lao động.",
  },
];

const desktopPositions = [
  { left: "4%", top: 92, rotate: -4, zIndex: 1 },
  { left: "21%", top: 58, rotate: -2, zIndex: 2 },
  { left: "50%", top: 34, x: "-50%", rotate: 0, zIndex: 3 },
  { right: "21%", top: 58, rotate: 2, zIndex: 2 },
  { right: "4%", top: 92, rotate: 4, zIndex: 1 },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ---------- variants ---------- */
const ringVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1 + i * 0.1,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.88,
    rotateX: 18,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 0.94,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

const mobileCardItem = (index: number) => ({
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.94,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: EASE,
    },
  },
});

export default function ChuanDauRaSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const titleInView = useInView(titleRef, { once: false, amount: 0.35 });
  const desktopInView = useInView(desktopRef, { once: false, amount: 0.2 });
  const mobileInView = useInView(mobileRef, { once: false, amount: 0.15 });

  return (
    <section className="relative isolate overflow-hidden py-24 xl:py-28">
      {/* Decorative rings — xuất hiện / biến mất theo scroll */}
      {[920, 700, 500].map((size, i) => (
        <motion.div
          key={size}
          custom={i}
          variants={ringVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="absolute left-1/2 top-1/2 -z-10 rounded-full border border-white/45"
          style={{
            width: size,
            height: size,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}

      <div className="container relative mx-auto px-4">
        {/* Title — xuất hiện / biến mất theo scroll */}
        <motion.div
          ref={titleRef}
          variants={headerContainer}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center text-center"
        >
          <motion.div
            variants={headerItem}
            className="mb-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 sm:text-sm"
          >
            <motion.span
              animate={titleInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="hidden h-px w-16 origin-right bg-slate-300 sm:block"
            />
            <motion.span
              animate={
                titleInView
                  ? { scale: 1, rotate: 45 }
                  : { scale: 0, rotate: 0 }
              }
              transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300 }}
              className="h-2 w-2 bg-red-500"
            />
            <span className="text-center">Chuẩn đầu ra học phần</span>
            <motion.span
              animate={
                titleInView
                  ? { scale: 1, rotate: 45 }
                  : { scale: 0, rotate: 0 }
              }
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
            className="text-center text-[clamp(2.6rem,4vw,4.3rem)] font-black leading-[1.35] tracking-[-0.055em] text-slate-950"
          >
            Định hướng năng lực
            <br />
            theo chuẩn đầu ra
          </motion.h2>
        </motion.div>

        {/* Desktop card deck — xuất hiện / biến mất theo scroll */}
        <motion.div
          ref={desktopRef}
          variants={cardContainer}
          initial="hidden"
          animate={desktopInView ? "visible" : "hidden"}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative mx-auto mt-16 hidden h-[520px] w-full xl:block"
          style={{ perspective: 1200 }}
        >
          {outcomeCards.map((card, index) => {
            const isActive = activeIndex === index;
            const hasActive = activeIndex !== null;
            const position = desktopPositions[index];

            return (
              <motion.article
                key={card.label ?? index}
                custom={index}
                variants={cardItem}
                onMouseEnter={() => setActiveIndex(index)}
                animate={{
                  y: !desktopInView
                    ? 70
                    : isActive
                      ? -48
                      : hasActive
                        ? 18
                        : 0,
                  scale: !desktopInView
                    ? 0.88
                    : isActive
                      ? 1.08
                      : hasActive
                        ? 0.94
                        : 1,
                  rotate: !desktopInView
                    ? position.rotate + (index % 2 === 0 ? -10 : 10)
                    : isActive
                      ? 0
                      : position.rotate,
                  rotateX: !desktopInView ? 18 : isActive ? -4 : 0,
                  opacity: !desktopInView
                    ? 0
                    : isActive
                      ? 1
                      : hasActive
                        ? 0.38
                        : 0.94,
                  filter: !desktopInView ? "blur(10px)" : "blur(0px)",
                  zIndex: isActive ? 50 : position.zIndex,
                }}
                transition={{
                  y: { type: "spring", stiffness: 260, damping: 22 },
                  scale: { type: "spring", stiffness: 260, damping: 22 },
                  rotate: { duration: 0.5, ease: EASE },
                  rotateX: { duration: 0.5, ease: EASE },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.4 },
                  zIndex: { duration: 0 },
                }}
                style={{
                  left: position.left,
                  right: position.right,
                  top: position.top,
                  x: position.x,
                  transformStyle: "preserve-3d",
                }}
                className={[
                  "absolute h-[370px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-7 backdrop-blur-xl",
                  "will-change-transform",
                  isActive
                    ? "w-[420px] shadow-[0_34px_100px_rgba(15,23,42,0.16)]"
                    : "w-[305px] shadow-[0_24px_70px_rgba(15,23,42,0.08)]",
                  card.shadowClassName,
                ].join(" ")}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <motion.span
                      animate={
                        desktopInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.08,
                        ease: EASE,
                      }}
                      className={[
                        "font-black tracking-[-0.06em] text-slate-950 transition-all duration-500",
                        isActive ? "text-6xl" : "text-5xl",
                      ].join(" ")}
                    >
                      {card.number}
                    </motion.span>

                    <motion.div
                      animate={
                        desktopInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -20 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                        delay: 0.35 + index * 0.08,
                      }}
                      className={[
                        "flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-500",
                        isActive ? "h-16 w-16 text-2xl" : "h-14 w-14 text-xl",
                        card.iconClassName,
                      ].join(" ")}
                    >
                      <span className="leading-none">{card.icon}</span>
                    </motion.div>
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    <div className="text-center">
                      {/* Label — luôn hiển thị */}
                      <motion.p
                        animate={{
                          opacity: desktopInView ? 1 : 0,
                          y: desktopInView ? 0 : 16,
                          fontSize: isActive ? "1.75rem" : "1.1rem",
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="font-black leading-tight tracking-[-0.04em] text-slate-950"
                      >
                        {card.label}
                      </motion.p>

                      {/* Divider + Description — luôn hiển thị, mờ → rõ khi hover */}
                      <div>
                        <motion.span
                          animate={{
                            scaleX: isActive && desktopInView ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: isActive && desktopInView ? 0.08 : 0,
                          }}
                          className="mx-auto mt-4 block h-0.5 w-10 origin-center rounded-full bg-red-500"
                        />
                        <motion.p
                          animate={{
                            filter: desktopInView
                              ? isActive ? "blur(0px)" : "blur(4px)"
                              : "blur(8px)",
                            opacity: desktopInView ? 1 : 0,
                          }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="mt-5 select-none text-sm leading-7 text-slate-600"
                        >
                          {card.description}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}

        </motion.div>

        {/* Tablet / Mobile — xuất hiện / biến mất theo scroll */}
        <motion.div
          ref={mobileRef}
          variants={cardContainer}
          initial="hidden"
          animate={mobileInView ? "visible" : "hidden"}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:hidden"
        >
          {outcomeCards.map((card, index) => (
            <motion.article
              key={card.label ?? index}
              variants={mobileCardItem(index)}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={[
                "rounded-[1.75rem] border border-white/80 bg-white/90 p-6 backdrop-blur-xl",
                "shadow-[0_20px_55px_rgba(15,23,42,0.07)] sm:last:col-span-2",
                card.shadowClassName,
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <motion.span
                  animate={
                    mobileInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -12 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
                  className="text-4xl font-black tracking-[-0.05em] text-slate-950"
                >
                  {card.number}
                </motion.span>

                <motion.div
                  animate={
                    mobileInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -15 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 16,
                    delay: 0.25 + index * 0.06,
                  }}
                  className={[
                    "flex h-14 w-14 items-center justify-center rounded-full text-xl text-white shadow-lg",
                    card.iconClassName,
                  ].join(" ")}
                >
                  <span className="leading-none">{card.icon}</span>
                </motion.div>
              </div>

              <motion.div
                animate={
                  mobileInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
                className="mt-10"
              >
                <p className="text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950">
                  {card.label}
                </p>

                <motion.span
                  animate={
                    mobileInView ? { scaleX: 1 } : { scaleX: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                  className="mt-4 block h-0.5 w-8 origin-left rounded-full bg-red-500"
                />

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
