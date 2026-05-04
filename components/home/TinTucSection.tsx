"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const articles = [
  {
    href: "/news/workshop-ai-ung-dung-trong-giao-duc",
    imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80",
    imageAlt: "Workshop AI ứng dụng trong giảng dạy và học tập",
    category: "Đào tạo",
    title: "Workshop: Ứng dụng AI trong giảng dạy và học tập",
    date: "28 tháng 4, 2025",
  },
  {
    href: "/news/le-tot-nghiep-khoa-2024",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    imageAlt: "Lễ tốt nghiệp khóa 2024",
    category: "Sinh viên",
    title: "Lễ tốt nghiệp khóa 2024: Hành trình tri thức, tương lai rộng mở",
    date: "20 tháng 4, 2025",
  },
  {
    href: "/news/chien-dich-xanh-campus",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80",
    imageAlt: "Chiến dịch xanh campus",
    category: "Hoạt động sinh viên",
    title: 'Chiến dịch "Xanh campus – Sống xanh mỗi ngày"',
    date: "15 tháng 4, 2025",
  },
  {
    href: "/news/nen-tang-hoc-tap-truc-tuyen",
    imageSrc: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=700&q=80",
    imageAlt: "Nền tảng học tập trực tuyến",
    category: "Công nghệ giáo dục",
    title: "Nền tảng học tập trực tuyến mới chính thức ra mắt",
    date: "10 tháng 4, 2025",
  },
  {
    href: "/news/hoi-thao-ky-nang-mem",
    imageSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80",
    imageAlt: "Hội thảo kỹ năng mềm",
    category: "Kỹ năng",
    title: "Hội thảo kỹ năng mềm dành cho sinh viên năm nhất",
    date: "5 tháng 4, 2025",
  },
  {
    href: "/news/cuoc-thi-tieng-anh-2025",
    imageSrc: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=700&q=80",
    imageAlt: "Cuộc thi Tiếng Anh 2025",
    category: "Ngoại ngữ",
    title: "Cuộc thi Tiếng Anh toàn trường 2025 chính thức khởi động",
    date: "1 tháng 4, 2025",
  },
];

const PAGE_SIZE = 4;

export default function TinTucSection() {
  const [page, setPage] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const visible = articles.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">

        {/* ── Heading row ── */}
        <div className="relative mb-10 text-center">
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
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
                animate={titleInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300 }}
                className="h-2 w-2 bg-red-500"
              />
              <span className="text-center">Tin tức &amp; Sự kiện</span>
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
              className="text-[50px] font-black leading-[1.35] tracking-[-0.06em] text-[#0B1A3B]"
            >
              Tin tức gần đây
            </motion.h2>
          </motion.div>

          <motion.a
            href="/news"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="mt-3 block text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0"
          >
            Xem tất cả →
          </motion.a>
        </div>

        {/* ── 4-card grid ── */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {visible.map((a, i) => (
            <motion.a
              key={a.href}
              href={a.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={a.imageSrc}
                  alt={a.imageAlt}
                  className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[240px] lg:h-[320px]"
                />
              </div>

              {/* Text */}
              <div className="mt-3 flex flex-1 flex-col sm:mt-5">
                <h3 className="flex-1 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600 sm:text-base lg:text-xl">
                  {a.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-1 text-xs text-slate-400 sm:mt-4 sm:gap-2 sm:text-sm">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.category}</span>
                </div>
                <span className="mt-1 text-xs font-semibold text-slate-600 transition-colors group-hover:text-red-600 sm:mt-2 sm:text-sm">
                  Đọc thêm &rsaquo;
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Navigation arrows ── */}
        <div className="mt-10 flex items-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:border-slate-500 hover:text-slate-900 disabled:opacity-30"
          >
            <i className="bi bi-chevron-left text-sm" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all hover:border-slate-500 hover:text-slate-900 disabled:opacity-30"
          >
            <i className="bi bi-chevron-right text-sm" />
          </button>
        </div>

      </div>
    </section>
  );
}
