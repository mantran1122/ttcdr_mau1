"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, ChevronUp, Clock3, DoorOpen, Users2 } from "lucide-react";
import { EXAMS, EXAM_TYPE_LABEL, EXAM_TYPE_STYLE } from "@/data/exams";

const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_SIZE = 6;
const SCROLL_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  " ",
]);

const FILTERS = [
  { key: "all", label: "Tất cả" },
  { key: "upcoming", label: "Sắp tới" },
  { key: "completed", label: "Đã kết thúc" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export default function ExamListSection() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [page, setPage] = useState(1);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  useEffect(() => {
    if (hasUserScrolled) return;

    let isMousePressed = false;
    let lastScrollY = window.scrollY;

    const reveal = () => {
      setHasUserScrolled(true);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaX !== 0 || event.deltaY !== 0) reveal();
    };

    const onTouchMove = () => {
      reveal();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) reveal();
    };

    const onMouseDown = () => {
      isMousePressed = true;
    };

    const onMouseUp = () => {
      isMousePressed = false;
    };

    const onWindowBlur = () => {
      isMousePressed = false;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const hasMoved = currentScrollY !== lastScrollY;
      lastScrollY = currentScrollY;
      if (isMousePressed && hasMoved) reveal();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasUserScrolled]);

  const filtered = EXAMS.filter((exam) => filter === "all" || exam.status === filter);
  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;
  const canCollapse = page > 1 && filtered.length > PAGE_SIZE;

  return (
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={hasUserScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-8 flex flex-wrap justify-center gap-6 sm:gap-8"
          >
            {FILTERS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setFilter(tab.key);
                  setPage(1);
                }}
                className={[
                  "relative pb-2 text-sm font-semibold transition-colors duration-200",
                  filter === tab.key ? "text-red-600" : "text-slate-500 hover:text-slate-700",
                ].join(" ")}
              >
                {tab.label}
                {filter === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-red-600" />
                )}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((exam, i) => (
              <motion.div
                key={exam.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
              >
                <Link
                  href={`/thong-tin/lich-kiem-tra/${exam.slug}`}
                  className="group flex h-[352px] flex-col overflow-hidden rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={[
                        "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] ring-1",
                        EXAM_TYPE_STYLE[exam.type],
                      ].join(" ")}
                    >
                      {EXAM_TYPE_LABEL[exam.type]}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                      {exam.kind}
                    </span>
                  </div>

                  <h3 className="mt-3 min-h-[66px] line-clamp-2 text-[27px] font-bold leading-[1.24] tracking-[-0.02em] text-slate-900 transition-colors group-hover:text-red-600 sm:text-[28px]">
                    {exam.subject}
                  </h3>

                  <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-xl bg-red-50 px-3 py-2 text-base font-extrabold text-red-600">
                    <CalendarDays className="h-4 w-4" />
                    {exam.date}
                  </div>

                  <span className="mt-4 h-px w-full bg-slate-100" />

                  <div className="mt-4 space-y-2.5 text-sm text-slate-500">
                    <p className="flex items-start gap-2">
                      <Users2 className="mt-0.5 h-4 w-4 text-slate-400" />
                      <span className="line-clamp-1">
                        <span className="font-semibold text-slate-600">Nhóm:</span> {exam.groups}
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock3 className="mt-0.5 h-4 w-4 text-slate-400" />
                      <span className="line-clamp-1">{exam.session}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <DoorOpen className="mt-0.5 h-4 w-4 text-slate-400" />
                      <span className="line-clamp-1">{exam.room}</span>
                    </p>
                  </div>

                  <div className="mt-auto min-h-[48px] pt-4">
                    {exam.note && (
                      <p className="line-clamp-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                        {exam.note}
                      </p>
                    )}
                    {!exam.note && exam.status === "completed" && (
                      <span className="inline-flex w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-slate-500">
                        Đã kết thúc
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}

            {visible.length === 0 && (
              <div className="col-span-full rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5">
                <CalendarDays className="mx-auto h-10 w-10 text-slate-300" />
                <p className="mt-3 text-sm text-slate-400">Không có lịch kiểm tra.</p>
              </div>
            )}
          </div>

          {(hasMore || canCollapse) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {hasMore && (
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:text-red-600 hover:ring-red-300"
                >
                  <ChevronDown className="h-4 w-4" />
                  Xem thêm lịch kiểm tra
                </button>
              )}
              {canCollapse && (
                <button
                  onClick={() => setPage(1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:text-red-600 hover:ring-red-300"
                >
                  <ChevronUp className="h-4 w-4" />
                  Thu gọn
                </button>
              )}
            </motion.div>
          )}

          {/* <p className="mt-5 text-right text-[11px] text-slate-400">
            * Lịch có thể thay đổi. Theo dõi thông báo từ Trung tâm để cập nhật kịp thời.
          </p> */}
        </div>
      </div>
    </section>
  );
}
