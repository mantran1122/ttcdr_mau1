"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

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
    title: "Workshop: Ứng dụng AI trong giảng dạy và học tập",
    date: "28 tháng 4, 2025",

  },
  {
    href: "/news/le-tot-nghiep-khoa-2024",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    imageAlt: "Lễ tốt nghiệp khóa 2024",
    title: "Lễ tốt nghiệp khóa 2024: Hành trình tri thức, tương lai rộng mở",
    date: "20 tháng 4, 2025",

  },
  {
    href: "/news/chien-dich-xanh-campus",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80",
    imageAlt: "Chiến dịch xanh campus",
    title: 'Chiến dịch "Xanh campus – Sống xanh mỗi ngày"',
    date: "15 tháng 4, 2025",

  },
  {
    href: "/news/nen-tang-hoc-tap-truc-tuyen",
    imageSrc: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=700&q=80",
    imageAlt: "Nền tảng học tập trực tuyến",
    title: "Nền tảng học tập trực tuyến mới chính thức ra mắt",
    date: "10 tháng 4, 2025",

  },
  {
    href: "/news/hoi-thao-ky-nang-mem",
    imageSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80",
    imageAlt: "Hội thảo kỹ năng mềm",
    title: "Hội thảo kỹ năng mềm dành cho sinh viên năm nhất",
    date: "5 tháng 4, 2025",

  },
  {
    href: "/news/cuoc-thi-tieng-anh-2025",
    imageSrc: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=700&q=80",
    imageAlt: "Cuộc thi Tiếng Anh 2025",
    title: "Cuộc thi Tiếng Anh toàn trường 2025 chính thức khởi động",
    date: "1 tháng 4, 2025",
    tag: "Thi đua",
  },
];

export default function TinTucSection() {
  const titleRef    = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });

  const x             = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const pointerDownX  = useRef(0);
  const isDragBlocked = useRef(false);

  /* ── Recalculate drag bounds on resize ── */
  useEffect(() => {
    const calc = () => {
      const cw = containerRef.current?.clientWidth ?? 0;
      const tw = trackRef.current?.scrollWidth ?? 0;
      setMaxDrag(Math.max(0, tw - cw));
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current)    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  /* ── Clamp x when bounds change (e.g. resize makes content shorter) ── */
  useEffect(() => {
    const cur = x.get();
    if (cur < -maxDrag) x.set(-maxDrag);
  }, [maxDrag, x]);

  /* ── Trackpad / Shift+wheel horizontal scroll ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontal && !e.shiftKey) return;
      e.preventDefault();

      const delta = e.shiftKey ? e.deltaY : e.deltaX;
      const next  = Math.max(-maxDrag, Math.min(0, x.get() - delta));

      // Animate for inertia feel; plain set for trackpad precision
      if (e.deltaMode === 0) {
        x.set(next);
      } else {
        animate(x, next, { type: "spring", stiffness: 400, damping: 40 });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxDrag, x]);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">

        {/* ── Heading ── */}
        <div className="relative mb-12 text-center">
          <motion.div ref={titleRef} initial="hidden" animate={titleInView ? "visible" : "hidden"}>
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
              <span>Tin tức &amp; Sự kiện</span>
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

        {/* ── Horizontal scroll track ── */}
        <div className="relative">
          {/* Fade hints – left */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent"
            aria-hidden
          />
          {/* Fade hints – right */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent"
            aria-hidden
          />

          {/* Overflow container */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.08}
              dragMomentum
              dragTransition={{ power: 0.2, timeConstant: 260 }}
              onPointerDown={(e) => {
                pointerDownX.current = e.clientX;
                isDragBlocked.current = false;
              }}
              onPointerUp={(e) => {
                if (Math.abs(e.clientX - pointerDownX.current) > 6) {
                  isDragBlocked.current = true;
                  // Reset sau khi click event đã fire xong
                  setTimeout(() => { isDragBlocked.current = false; }, 50);
                }
              }}
              onClickCapture={(e) => {
                if (isDragBlocked.current) e.preventDefault();
              }}
              className="flex cursor-grab select-none gap-5 pb-3 active:cursor-grabbing"
            >
              {articles.map((a, i) => (
                <motion.a
                  key={a.href}
                  href={a.href}
                  draggable={false}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  /* Card width: shows ~1.15 on mobile, ~2.4 on sm, ~3.4 on lg */
                  className="group flex w-[78vw] flex-none flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)] sm:w-[42vw] lg:w-[28vw] xl:w-[340px]"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={a.imageSrc}
                      alt={a.imageAlt}
                      draggable={false}
                      className="h-[160px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[200px] lg:h-[220px]"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    {/* Tag */}
                    <span className="mb-3 inline-block w-fit rounded-full bg-red-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-600">
                      {a.tag}
                    </span>

                    <h3 className="flex-1 text-sm font-bold leading-snug text-slate-900 sm:text-[15px] lg:text-base">
                      {a.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <i className="bi bi-calendar3 text-[11px]" />
                        <span>{a.date}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 transition-colors group-hover:text-red-600">
                        Xem chi tiết
                        <i className="bi bi-arrow-right text-[11px] transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Trailing spacer so the last card isn't flush against the fade */}
              <div className="w-4 flex-none" aria-hidden />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
