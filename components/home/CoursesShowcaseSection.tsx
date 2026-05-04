"use client";

import { useRef } from "react";
import Image from "next/image";
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

const courses = [
  {
    title: "Trí tuệ nhân tạo (AI)",
    tag: "Công nghệ",
    badge: "Khóa học nổi bật",
    image: "/courses/ai.png",
    href: "/khoa-hoc/tri-tue-nhan-tao",
    col: "lg:col-span-7",
    rowH: "h-[340px]",
  },
  {
    title: "Ngoại ngữ",
    tag: "Giao tiếp",
    image: "/courses/ngoai-ngu.png",
    href: "/khoa-hoc/ngoai-ngu",
    col: "lg:col-span-5",
    rowH: "h-[340px]",
  },
  {
    title: "Tin học",
    tag: "Kỹ năng số",
    image: "/courses/tin-hoc.png",
    href: "/khoa-hoc/tin-hoc",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
  {
    title: "Kỹ năng mềm",
    tag: "Phát triển bản thân",
    image: "/courses/ky-nang-mem_v2.png",
    href: "/khoa-hoc/ky-nang-mem",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
  {
    title: "Kỹ năng nghề nghiệp",
    tag: "Định hướng nghề",
    image: "/courses/ky-nang-nghe-nghiep.png",
    href: "/khoa-hoc/ky-nang-nghe-nghiep",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
];

export default function CoursesShowcaseSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });

  return (
    <section className="relative py-24 xl:py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="mb-14 text-center"
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
            <span className="text-center">Khóa học tại Trung tâm</span>
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
            className="text-[50px] font-black leading-[1.15] tracking-[-0.05em] text-[#0B1A3B]"
          >
            Khoá học cho sinh viên
          </motion.h2>
        </motion.div>

        {/* Bento grid */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className={[
                "group relative overflow-hidden rounded-[1.6rem]",
                "transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.15)]",
                course.col,
                course.rowH,
              ].join(" ")}
            >
              {/* Background image */}
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay — bottom so text is readable */}
              <div className="absolute inset-0 " />

              {/* Badge top-left */}
              {course.badge && (
                <span
                  className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
                  style={{ background: "rgba(255,255,255,0.88)", color: "#374151", backdropFilter: "blur(6px)" }}
                >
                  ★ {course.badge}
                </span>
              )}

              {/* Floating navigation pill button — bottom-left */}
              <div className="absolute bottom-4 left-4 z-10">
                <div
                  className="flex items-center gap-2.5 rounded-full px-2 py-2 pr-4"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 20px rgba(15,23,42,0.14), 0 1px 4px rgba(15,23,42,0.08)",
                  }}
                >
                  {/* Circular icon — vàng → đỏ, mũi tên xoay 90° */}
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FFB800] transition-colors duration-300 group-hover:bg-[#CC0000]"
                  >
                    <svg
                      width="15" height="15" viewBox="0 0 15 15" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    >
                      <path d="M3.5 11.5L11 4M11 4H5.5M11 4V9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {/* Label text */}
                  <span className="text-[0.85rem] font-semibold leading-none tracking-[-0.01em] text-slate-800">
                    {course.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
