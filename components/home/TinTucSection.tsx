"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const newsList = [
  {
    href: "/news/124-sv-dh-nam-can-tho-so-huu-tam-ve-vang-google-ai-gemini",
    imageSrc:
      "https://nctu.edu.vn/uploads/professionaltraining/2026_01/aigemini-1_thumb.jpg",
    imageAlt: "124 SV ĐH Nam Cần Thơ sở hữu tấm vé vàng Google AI Gemini",
    title: '124 SV ĐH Nam Cần Thơ sở hữu "tấm vé vàng"…',
  },
  {
    href: "https://nctu.edu.vn/news/tap-huan-huong-dan-do-luong-chuan-dau-ra-2025",
    imageSrc:
      "https://nctu.edu.vn/uploads/page/2025_05/taphuan1thumb_thumb.jpg",
    imageAlt: "Tập Huấn Hướng Dẫn Đo Lường Chuẩn Đầu Ra",
    title: 'Tập Huấn "Hướng Dẫn Đo Lường Chuẩn Đầu Ra…',
  },
  {
    href: "/news/quy-tac-vong-chung-ket-esc-dnc-2023",
    imageSrc:
      "https://nctu.edu.vn/uploads/professionaltraining/2023_12/1_thumb.jpg",
    imageAlt: "Quy tắc vòng chung kết ESC DNC 2023",
    title: "Quy tắc vòng chung kết ESC DNC 2023",
  },
  {
    href: "/news/chuong-trinh-dao-tao-ky-nang-mem-2025",
    imageSrc:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    imageAlt: "Chương trình đào tạo kỹ năng mềm 2025",
    title: "Chương trình đào tạo kỹ năng mềm năm 2025",
  },

    {
    href: "/news/le-tot-nghiep-khoa-2024-dot-2",
    imageSrc:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    imageAlt: "Lễ tốt nghiệp khóa 2024 đợt 2",
    title: "Lễ tốt nghiệp khóa 2024 đợt 2 – Hành trình mới bắt đầu",
  },
  {
    href: "/news/workshop-ai-ung-dung-trong-giao-duc",
    imageSrc:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    imageAlt: "Workshop AI ứng dụng trong giáo dục",
    title: "Workshop: AI ứng dụng trong giảng dạy và học tập",
  },

];

/* ---------- variants ---------- */
const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

const floatTransitionSlow = {
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

/* ── Featured Card ── */
function FeaturedCard({
  news,
  inView,
}: {
  news: (typeof newsList)[0];
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 60, scale: 0.95, filter: "blur(12px)" }
      }
      transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
      className="group relative h-full overflow-hidden rounded-[2rem] shadow-lg transition-shadow duration-500 hover:shadow-2xl"
    >
      <a href={news.href} className="relative block h-full">
        {/* Background image */}
        <motion.img
          src={news.imageSrc}
          alt={news.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-red-900/0 transition-colors duration-500 group-hover:bg-red-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
          {/* Top arrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:bg-white/20"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="text-2xl font-black leading-[1.2] text-white sm:text-3xl lg:text-[2.1rem] lg:leading-[1.25]"
          >
            {news.title}
          </motion.h3>

          {/* Read more bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
            className="mt-5 flex items-center gap-2 text-sm font-bold text-white/90 transition-colors duration-300 group-hover:text-white"
          >
            <span className="uppercase tracking-wider">Đọc tiếp</span>
            <motion.span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/30"
              whileHover={{ scale: 1.15 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

/* ── Compact Card (side stack) ── */
function CompactCard({
  news,
  inView,
  index,
}: {
  news: (typeof newsList)[0];
  inView: boolean;
  index: number;
}) {
  return (
    <motion.a
      href={news.href}
      initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: 40, filter: "blur(8px)" }
      }
      transition={{ duration: 0.65, delay: 0.2 + index * 0.1, ease: EASE }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 hover:border-red-100 hover:shadow-md"
    >
      {/* Number badge */}
      <span className="absolute left-0 top-0 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-br-xl bg-red-600 text-[10px] font-black leading-none text-white">
        {index + 1}
      </span>

      {/* Thumbnail */}
      <div className="relative h-[80px] w-[116px] shrink-0 overflow-hidden rounded-xl">
        <motion.img
          src={news.imageSrc}
          alt={news.imageAlt}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.55, ease: EASE }}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-red-900/15" />
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="line-clamp-2 text-[0.88rem] font-bold leading-snug text-gray-800 transition-colors duration-300 group-hover:text-red-600">
          {news.title}
        </p>
        <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>Đọc tiếp</span>
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>

      {/* Left accent bar on hover */}
      <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 rounded-r-full bg-red-500 transition-transform duration-300 group-hover:scale-y-100" />
    </motion.a>
  );
}

export default function TinTucSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.12 });

  const featured = newsList[0];
  const sideNews = newsList.slice(1);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-24 lg:py-32"
    >
      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={floatTransition}
        className="pointer-events-none absolute left-[6%] top-[12%] h-5 w-5 rotate-45 bg-red-500/80"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={floatTransitionSlow}
        className="pointer-events-none absolute right-[8%] top-[20%] h-3 w-3 rounded-full bg-gray-300/70"
      />
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={floatTransition}
        className="pointer-events-none absolute bottom-[18%] left-[4%] h-4 w-4 rounded-sm border-2 border-red-400/50"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={floatTransitionSlow}
        className="pointer-events-none absolute bottom-[22%] right-[6%] h-6 w-6 rotate-12 bg-red-100/60"
      />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center lg:mb-16"
        >
          <motion.div
            variants={headerItem}
            className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600 sm:text-sm"
          >
            <motion.span
              variants={lineGrow}
              className="hidden h-px w-14 origin-right bg-gray-300 sm:block"
            />
            <span>Tin tức của trung tâm</span>
            <motion.span
              variants={lineGrow}
              className="hidden h-px w-14 origin-left bg-gray-300 sm:block"
            />
          </motion.div>

          <motion.div
            variants={headerItem}
            className="my-4 flex justify-center"
          >
            <motion.div
              animate={
                isInView
                  ? { scaleX: 1, opacity: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="h-[3px] w-20 origin-center rounded-full"
              style={{ backgroundColor: "#ED1F25" }}
            />
          </motion.div>

          <motion.h2
            variants={headerItem}
            className="text-[28px] font-black uppercase leading-[1.35] tracking-tight text-slate-950 lg:text-[42px]"
          >
            Điểm nổi bật gần đây
          </motion.h2>
        </motion.div>

        {/* Magazine layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured — large left */}
          <div className="lg:col-span-6">
            <div className="h-[420px] sm:h-[480px] lg:h-full lg:min-h-[580px]">
              <FeaturedCard news={featured} inView={isInView} />
            </div>
          </div>

          {/* Side stack — right column */}
          <div className="flex flex-col justify-between gap-3 lg:col-span-6 lg:border-l lg:border-gray-100 lg:pl-8">
            {sideNews.map((news, i) => (
              <CompactCard
                key={news.href}
                news={news}
                inView={isInView}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(6px)" }
          }
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="/news"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-red-600 px-8 py-3.5 text-sm font-bold text-red-600 transition-colors duration-300 hover:text-white"
          >
            <span className="absolute inset-0 -translate-x-full bg-red-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative z-10">Xem tất cả tin tức</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
