"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

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
    imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
    imageAlt: "Workshop AI ứng dụng trong giảng dạy và học tập",
    title: "Workshop: Ứng dụng AI trong giảng dạy và học tập",
    date: "28/04/2025",
  },
  {
    href: "/news/le-tot-nghiep-khoa-2024",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
    imageAlt: "Lễ tốt nghiệp khóa 2024",
    title: "Lễ tốt nghiệp khóa 2024: Hành trình tri thức, tương lai rộng mở",
    date: "20/04/2025",
  },
  {
    href: "/news/chien-dich-xanh-campus",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    imageAlt: "Chiến dịch xanh campus",
    title: "Chiến dịch \"Xanh campus - Sống xanh mỗi ngày\"",
    date: "15/04/2025",
  },
  {
    href: "/news/doi-moi-nen-tang-hoc-tap",
    imageSrc: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&q=80",
    imageAlt: "Nền tảng học tập trực tuyến mới",
    title: "Nền tảng học tập trực tuyến mới chính thức ra mắt",
    date: "10/04/2025",
  },
  {
    href: "/news/hoat-dong-cong-dong-sinh-vien",
    imageSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",
    imageAlt: "Hội thảo kỹ năng mềm",
    title: "Hội thảo kỹ năng mềm dành cho sinh viên năm nhất",
    date: "05/04/2025",
  },
  {
    href: "/news/chung-ket-cuoc-thi-ngoai-ngu",
    imageSrc: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=80",
    imageAlt: "Cuộc thi Tiếng Anh 2025",
    title: "Cuộc thi Tiếng Anh toàn trường 2025 chính thức khởi động",
    date: "01/04/2025",
  },
];

export default function TinTucSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const alignRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });

  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [startInset, setStartInset] = useState(16);
  const [currentX, setCurrentX] = useState(0);
  const pointerDownX = useRef(0);
  const isDragBlocked = useRef(false);

  useEffect(() => {
    const calc = () => {
      const cw = containerRef.current?.clientWidth ?? 0;
      const tw = trackRef.current?.scrollWidth ?? 0;
      setMaxDrag(Math.max(0, tw - cw));
    };
    calc();
    const ro = new ResizeObserver(calc);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const cur = x.get();
    if (cur < -maxDrag) x.set(-maxDrag);
  }, [maxDrag, x]);

  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      setCurrentX(latest);
    });
    return () => unsub();
  }, [x]);

  useEffect(() => {
    const calcInset = () => {
      const el = alignRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const computed = window.getComputedStyle(el);
      const paddingLeft = Number.parseFloat(computed.paddingLeft) || 0;
      const contentStart = rect.left + paddingLeft;

      setStartInset(Math.max(0, contentStart));
    };

    calcInset();
    window.addEventListener("resize", calcInset, { passive: true });
    return () => window.removeEventListener("resize", calcInset);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontal && !e.shiftKey) return;
      e.preventDefault();

      const delta = e.shiftKey ? e.deltaY : e.deltaX;
      const next = Math.max(-maxDrag, Math.min(0, x.get() - delta));

      if (e.deltaMode === 0) {
        x.set(next);
      } else {
        animate(x, next, { type: "spring", stiffness: 400, damping: 40 });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxDrag, x]);

  const slideByButton = (direction: "prev" | "next") => {
    const cw = containerRef.current?.clientWidth ?? 0;
    const step = Math.max(260, Math.round(cw * 0.78));
    const delta = direction === "prev" ? step : -step;
    const next = Math.max(-maxDrag, Math.min(0, x.get() + delta));
    animate(x, next, { type: "spring", stiffness: 400, damping: 40 });
  };

  const canGoPrev = currentX < -1;
  const canGoNext = currentX > -maxDrag + 1;

  return (
    <section className="bg-background py-24 xl:py-28">
      <div ref={alignRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 text-center">
          <motion.div ref={titleRef} initial="hidden" animate={titleInView ? "visible" : "hidden"}>
            <motion.div variants={headerItem} className="mb-6">
              <SectionTitle title="Tin tức & Sự kiện" />
            </motion.div>

            <motion.h2
              variants={headerItem}
              className="text-[50px] font-medium leading-[1.35] tracking-[-0.06em] text-[#0B1A3B]"
            >
              Tin tức gần đây
            </motion.h2>
          </motion.div>

          <div className="mt-4 flex justify-center gap-2 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:justify-end">
            <button
              type="button"
              onClick={() => slideByButton("prev")}
              disabled={!canGoPrev}
              aria-label="Bài trước"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-slate-500 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <i className="bi bi-chevron-left text-sm" />
            </button>
            <button
              type="button"
              onClick={() => slideByButton("next")}
              disabled={!canGoNext}
              aria-label="Bài tiếp theo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-all hover:border-slate-500 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <i className="bi bi-chevron-right text-sm" />
            </button>
          </div>

        </div>

        <div
          className="relative"
          style={{
            marginLeft: `-${startInset}px`,
            width: `calc(100% + ${startInset * 2}px)`,
          }}
        >
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x, paddingLeft: `${startInset}px`, paddingRight: `${startInset}px` }}
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
                  setTimeout(() => {
                    isDragBlocked.current = false;
                  }, 50);
                }
              }}
              onClickCapture={(e) => {
                if (isDragBlocked.current) e.preventDefault();
              }}
              className="flex items-start cursor-grab select-none gap-5 pb-3 active:cursor-grabbing"
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
                  className="group flex w-[86vw] max-w-[440px] flex-none flex-col overflow-hidden rounded-[26px] bg-white transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] sm:w-[58vw] lg:w-[34vw] xl:w-[440px]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.imageSrc}
                      alt={a.imageAlt}
                      draggable={false}
                      className="h-[230px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-[280px]"
                    />
                  </div>

                  <div className="flex flex-col bg-[#f2f2f3] px-8 pb-8 pt-8">
                    <h3
                      className="text-[18px] font-semibold leading-[1.35] text-[#161616] sm:text-[19px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {a.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-[17px] text-[#6B6B6B]">
                      <i className="bi bi-calendar3 text-[15px] text-red-500" />
                      <span>{a.date}</span>
                    </div>

                  </div>
                </motion.a>
              ))}

              <div className="w-12 flex-none sm:w-16 lg:w-20" aria-hidden />
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/news"
            className="group relative inline-flex overflow-hidden rounded-full border border-red-200 bg-white px-10 py-3.5 text-[14px] font-semibold text-red-600 transition-colors duration-150 hover:text-white"
          >
            <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-red-600 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            <span className="relative">Xem tất cả</span>
          </a>
        </div>

      </div>
    </section>
  );
}
