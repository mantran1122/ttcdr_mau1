"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { POSTS, CATEGORY_LABEL } from "@/data/posts";
import type { Category } from "@/data/posts";

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

export default function PostListSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("tat-ca");
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

  const filtered =
    activeCategory === "tat-ca"
      ? POSTS
      : POSTS.filter((post) => post.category === activeCategory);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;
  const canCollapse = page > 1 && filtered.length > PAGE_SIZE;

  const categories = (Object.keys(CATEGORY_LABEL) as Category[]).filter(
    (cat) => cat !== "tat-ca",
  );

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
            <button
              onClick={() => {
                setActiveCategory("tat-ca");
                setPage(1);
              }}
              className={[
                "relative pb-2 text-sm font-semibold transition-colors duration-200",
                activeCategory === "tat-ca"
                  ? "text-red-600"
                  : "text-slate-500 hover:text-slate-700",
              ].join(" ")}
            >
              Tất cả
              {activeCategory === "tat-ca" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-red-600" />
              )}
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={[
                  "relative pb-2 text-sm font-semibold transition-colors duration-200",
                  activeCategory === cat
                    ? "text-red-600"
                    : "text-slate-500 hover:text-slate-700",
                ].join(" ")}
              >
                {CATEGORY_LABEL[cat]}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-red-600" />
                )}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => {
              const [day, month, year] = post.date.split("/");
              return (
                <motion.a
                  key={post.slug}
                  href={`/thong-tin/thong-bao/${post.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (i % PAGE_SIZE) * 0.05, ease: EASE }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                        <span className="text-4xl font-black leading-none text-slate-900">{day}</span>
                        <span className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Tháng {month}/{year}
                        </span>
                      </div>
                    )}
                    {post.isPinned && (
                      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                        <i className="bi bi-pin-angle-fill" /> Ghim
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-xs">
                      <span className="font-medium text-red-600">{CATEGORY_LABEL[post.category]}</span>
                      <span className="inline-block h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600">
                      {post.title}
                    </h3>
                  </div>
                </motion.a>
              );
            })}

            {filtered.length === 0 && (
              <div className="col-span-full rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5">
                <i className="bi bi-bell-slash text-4xl text-slate-300" />
                <p className="mt-3 text-sm text-slate-400">Không có thông báo.</p>
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
                  <i className="bi bi-chevron-down" />
                  Xem thêm thông báo
                </button>
              )}
              {canCollapse && (
                <button
                  onClick={() => setPage(1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:text-red-600 hover:ring-red-300"
                >
                  <i className="bi bi-chevron-up" />
                  Thu gọn
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
