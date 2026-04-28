"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const featuredArticle = {
  href: "/news/workshop-ai-ung-dung-trong-giao-duc",
  imageSrc:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
  imageAlt: "Workshop AI ứng dụng trong giảng dạy và học tập",
  category: "ĐÀO TẠO",
  title: "Workshop: Ứng dụng AI trong giảng dạy và học tập",
};

const sideArticles = [
  {
    href: "/news/le-tot-nghiep-khoa-2024",
    category: "SINH VIÊN",
    title: "Lễ tốt nghiệp khóa 2024: Hành trình tri thức, tương lai rộng mở",
  },
  {
    href: "/news/giao-luu-dai-hoc-sunway",
    category: "HỢP TÁC QUỐC TẾ",
    title: "Giao lưu học thuật với Đại học Sunway, Malaysia",
  },
  {
    href: "/news/khoa-ky-nang-giao-tiep-thuyet-trinh",
    category: "KỸ NĂNG MỀM",
    title: "Khóa kỹ năng: Giao tiếp & Thuyết trình hiệu quả",
  },
];

const latestNews = [
  {
    href: "/news/hoi-thao-giao-duc-ben-vung",
    category: "NGHIÊN CỨU",
    title: 'Hội thảo khoa học "Giáo dục bền vững trong kỷ nguyên số"',
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    imageAlt: "Hội thảo khoa học giáo dục bền vững",
  },
  {
    href: "/news/chien-dich-xanh-campus",
    category: "HOẠT ĐỘNG SINH VIÊN",
    title: 'Chiến dịch "Xanh campus – Sống xanh mỗi ngày"',
    imageSrc:
      "https://images.unsplash.com/photo-1542601906897-ecd3a6571bc8?w=600&q=80",
    imageAlt: "Chiến dịch xanh campus",
  },
  {
    href: "/news/nen-tang-hoc-tap-truc-tuyen",
    category: "CÔNG NGHỆ GIÁO DỤC",
    title: "Nền tảng học tập trực tuyến mới chính thức ra mắt",
    imageSrc:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&q=80",
    imageAlt: "Nền tảng học tập trực tuyến",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: EASE },
  }),
};

export default function TinTucSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    /* Nền khớp màu site #E8E9EE */
    <section ref={sectionRef} className="py-20 lg:py-28" style={{ background: "#E8E9EE" }}>
      {/* Container căn theo navbar: container mx-auto px-4 */}
      <div className="container mx-auto px-4">

        {/* ── Label + Heading ── */}
        <div className="mb-10 text-center lg:mb-12">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-5 flex items-center justify-center gap-4 font-serif text-xl italic text-slate-500 sm:text-2xl"
          >
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
            <span>Tin tức &amp; Sự kiện</span>
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[clamp(2.2rem,4.2vw,4.4rem)] font-black leading-[1.35] tracking-[-0.06em] text-slate-950"
          >
            Điểm nổi bật gần đây
          </motion.h2>
        </div>

        {/* ── PHẦN 1: Featured + Side (2 box trắng) ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* Box trái: Tin chính */}
          <motion.a
            href={featuredArticle.href}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md lg:col-span-7"
          >
            {/* Ảnh */}
            <div className="overflow-hidden">
              <img
                src={featuredArticle.imageSrc}
                alt={featuredArticle.imageAlt}
                className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[320px] lg:h-[380px]"
              />
            </div>
            {/* Nội dung */}
            <div className="p-5 lg:p-6">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
                {featuredArticle.category}
              </p>
              <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-600 lg:text-xl">
                {featuredArticle.title}
              </h3>
            </div>
          </motion.a>

          {/* Box phải: 3 tin nhỏ */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col divide-y divide-gray-100 overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-5"
          >
            {sideArticles.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group flex flex-1 flex-col justify-center px-5 py-6 transition-colors duration-200 hover:bg-gray-50 lg:px-6"
              >
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
                  {article.category}
                </p>
                <h3 className="text-base font-semibold leading-snug text-gray-800 transition-colors duration-200 group-hover:text-red-600">
                  {article.title}
                </h3>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── PHẦN 2: Tin tức mới nhất (1 box trắng) ── */}
        <div className="mt-6">
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            {/* Header của box */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 lg:px-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 lg:text-xl">
                  Tin tức mới nhất
                </h2>
                <div className="mt-1 h-[3px] w-10 rounded-full bg-red-600" />
              </div>
              <a
                href="/news"
                className="flex items-center gap-1.5 text-sm font-semibold text-red-600 transition-opacity duration-200 hover:opacity-70"
              >
                Xem tất cả tin tức
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Danh sách tin */}
            <div className="divide-y divide-gray-100">
              {latestNews.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  custom={7 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="group flex items-center gap-5 px-5 py-5 transition-colors duration-200 hover:bg-gray-50 lg:px-6"
                >
                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
                      {item.category}
                    </p>
                    <h3 className="text-[0.95rem] font-semibold leading-snug text-gray-800 transition-colors duration-200 group-hover:text-red-600 sm:text-base">
                      {item.title}
                    </h3>
                  </div>

                  {/* Thumbnail */}
                  <div className="h-[90px] w-[150px] shrink-0 overflow-hidden rounded-xl sm:h-[110px] sm:w-[200px] lg:h-[120px] lg:w-[240px]">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
