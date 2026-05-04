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
    description: "Khai thác công cụ AI trong học tập và công việc có trách nhiệm.",
    regulationText:
      "Theo định hướng của Bộ GD&ĐT, sinh viên sử dụng AI phải có kiểm chứng, trích dẫn nguồn và bảo đảm đạo đức học thuật.",
    regulation: {
      ref: "Quyết định 127/QĐ-TTg · Chiến lược quốc gia về AI",
      items: [
        { label: "Yêu cầu", text: "Sinh viên cần biết sử dụng các công cụ AI hỗ trợ học tập, nghiên cứu và giải quyết vấn đề thực tiễn." },
        { label: "Tiêu chuẩn", text: "Sử dụng AI có kiểm chứng, trích dẫn nguồn, không vi phạm đạo đức học thuật và bảo mật thông tin." },
        { label: "Lưu ý", text: "Bộ GD&ĐT đang xây dựng khung năng lực AI cho người học; nhà trường áp dụng theo hướng dẫn cập nhật nhất." },
      ],
    },
  },
  {
    number: "02",
    icon: "💬",
    iconClassName: "bg-red-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(239,68,68,0.16)]",
    label: "Ngoại ngữ",
    description: "Đáp ứng chuẩn đầu ra ngoại ngữ, tăng khả năng giao tiếp và hội nhập nghề nghiệp.",
    regulationText:
      "Bậc Đại học: đạt chuẩn Anh văn theo quy định chuẩn đầu ra của Trường Đại học Nam Cần Thơ; ngành Ngôn ngữ Anh: từ bậc 3 (B1) trở lên theo Khung NLNN 6 bậc.",
    regulation: {
      ref: "Thông tư 05/2021/TT-BGDĐT · Khung NLNN 6 bậc",
      items: [
        { label: "Yêu cầu tối thiểu", text: "Bậc 3/6 theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam (tương đương B1 CEFR)." },
        { label: "Hình thức kiểm tra", text: "Thi VSTEP, IELTS, TOEIC hoặc các chứng chỉ được Bộ GD&ĐT công nhận tương đương." },
        { label: "Lưu ý", text: "Chứng chỉ còn hiệu lực trong vòng 2 năm tính đến ngày nộp hồ sơ xét tốt nghiệp." },
      ],
    },
  },
  {
    number: "03",
    icon: "💻",
    iconClassName: "bg-blue-500",
    shadowClassName: "shadow-[0_22px_55px_rgba(59,130,246,0.16)]",
    label: "Tin học",
    description: "Đáp ứng chuẩn kỹ năng CNTT cơ bản, hỗ trợ học tập và làm việc trong môi trường số.",
    regulationText:
      "Sinh viên phải đạt chuẩn kỹ năng sử dụng CNTT cơ bản theo quy định tại Thông tư 03/2014/TT-BTTTT.",
    regulation: {
      ref: "Thông tư 03/2014/TT-BTTTT · Thông tư 11/2022/TT-BTTTT",
      items: [
        { label: "Yêu cầu tối thiểu", text: "Đạt chuẩn kỹ năng sử dụng CNTT cơ bản theo Thông tư 03/2014 của Bộ TT&TT." },
        { label: "Nội dung kiểm tra", text: "Kỹ năng soạn thảo văn bản, bảng tính, trình chiếu, sử dụng Internet và bảo mật thông tin." },
        { label: "Chứng chỉ", text: "IC3, MOS, ICDL hoặc chứng chỉ tin học ứng dụng được cơ sở đào tạo được Bộ cấp phép cấp." },
      ],
    },
  },
  {
    number: "04",
    icon: "👥",
    iconClassName: "bg-teal-400",
    shadowClassName: "shadow-[0_22px_55px_rgba(20,184,166,0.16)]",
    label: "Kỹ năng mềm",
    description: "Phát triển giao tiếp, làm việc nhóm và tư duy phản biện cho môi trường thực tế.",
    regulationText:
      "Chuẩn đầu ra phải có năng lực giao tiếp, làm việc nhóm và giải quyết vấn đề theo định hướng của Bộ GD&ĐT.",
    regulation: {
      ref: "Luật GDĐH 2018 · Thông tư 17/2021/TT-BGDĐT",
      items: [
        { label: "Yêu cầu", text: "Chuẩn đầu ra chương trình đào tạo phải bao gồm năng lực giao tiếp, làm việc nhóm và giải quyết vấn đề." },
        { label: "Đánh giá", text: "Thông qua các học phần kỹ năng mềm bắt buộc và đánh giá tích hợp trong quá trình học." },
        { label: "Chuẩn tham chiếu", text: "Khung năng lực nghề nghiệp quốc gia và yêu cầu của doanh nghiệp trong lĩnh vực đào tạo." },
      ],
    },
  },
  {
    number: "05",
    icon: "💼",
    iconClassName: "bg-amber-400",
    shadowClassName: "shadow-[0_22px_55px_rgba(245,158,11,0.18)]",
    label: "Kỹ năng nghề nghiệp",
    description: "Tăng tác phong và kỹ năng thực hành, đáp ứng yêu cầu của doanh nghiệp.",
    regulationText:
      "Sinh viên phải đáp ứng yêu cầu năng lực nghề nghiệp thông qua thực tập, dự án thực tế và đánh giá cuối khóa.",
    regulation: {
      ref: "Luật Giáo dục nghề nghiệp 2014 · Thông tư 17/2021/TT-BGDĐT",
      items: [
        { label: "Yêu cầu", text: "Sinh viên đáp ứng ít nhất 70% yêu cầu năng lực nghề nghiệp theo chuẩn đầu ra chương trình." },
        { label: "Hình thức đánh giá", text: "Thực tập nghề nghiệp, dự án thực tế tại doanh nghiệp và bảo vệ báo cáo cuối khóa." },
        { label: "Liên kết doanh nghiệp", text: "Nhà trường phối hợp doanh nghiệp xây dựng chuẩn đầu ra theo Điều 7 Thông tư 17/2021." },
      ],
    },
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

  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });
  const desktopInView = useInView(desktopRef, { once: true, amount: 0.2 });
  const mobileInView = useInView(mobileRef, { once: true, amount: 0.15 });

  return (
    <section className="relative isolate overflow-hidden py-24 xl:py-28">

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
            className="text-center text-[50px] font-black leading-[1.35] tracking-[-0.055em] text-[#0B1A3B]"
          >
            Yêu cầu năng lực
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
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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

                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      >
                        <span className="mx-auto mt-4 block h-0.5 w-10 rounded-full bg-red-500" />
                        <p className="mt-4 text-sm leading-6 text-slate-600">
                          {isActive ? card.regulationText : card.description}
                        </p>
                      </motion.div>
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
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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
              {/*
                Giữ nguyên layout mobile hiện tại, chỉ đổi nội dung mô tả theo trạng thái active.
              */}
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
                  {activeIndex === index ? card.regulationText : card.description}
                </p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
