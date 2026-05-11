"use client";

import Image from "next/image";
import Link from "next/link";
import { Newspaper, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { POSTS, CATEGORY_LABEL, type Category } from "@/data/posts";

const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_SIZE = 6;

const TAG_TABS: { slug: Category | "tat-ca"; title: string }[] = [
  { slug: "tat-ca",     title: "Tất cả" },
  { slug: "lich-thi",   title: "Lịch thi" },
  { slug: "khai-giang", title: "Khai giảng" },
  { slug: "dang-ky",    title: "Đăng ký" },
  { slug: "ket-qua",    title: "Kết quả" },
  { slug: "chung",      title: "Thông báo chung" },
];

export default function PostGrid() {
  const [activeSlug, setActiveSlug] = useState<Category | "tat-ca">("tat-ca");
  const [page, setPage] = useState(1);

  const filtered = activeSlug === "tat-ca"
    ? POSTS
    : POSTS.filter((p) => p.category === activeSlug);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  function switchTab(slug: Category | "tat-ca") {
    setActiveSlug(slug);
    setPage(1);
  }

  return (
    <div className="max-w-[1430px] mx-auto px-[12px] mt-10">

      {/* Tab dot */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-10 w-full border-b border-slate-200 pb-4"
      >
        <div className="flex overflow-x-auto py-2" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
          <div className="flex gap-8 md:gap-14 min-w-max px-2 items-center">
            {TAG_TABS.map((tab) => {
              const isActive = tab.slug === activeSlug;
              return (
                <button
                  key={tab.slug}
                  onClick={() => switchTab(tab.slug)}
                  className={`flex items-center gap-2.5 text-[16px] font-[400] whitespace-nowrap transition-all duration-300 ${
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-[#c8102e]"
                  }`}
                >
                  {isActive ? (
                    <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#c8102e]/10 text-[#c8102e]">
                      <Newspaper size={16} strokeWidth={2} />
                    </div>
                  ) : (
                    <div className="w-[8px] h-[8px] rounded-full bg-slate-400" />
                  )}
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      {visible.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visible.map((post, i) => {
              const [day, month, year] = post.date.split("/");
              const label = CATEGORY_LABEL[post.category];

              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (i % PAGE_SIZE) * 0.06, ease: EASE }}
                >
                  <Link
                    href={`/thong-tin/thong-bao/${post.slug}`}
                    className="group bg-[#f8f9fa] border border-transparent hover:border-slate-100 flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-white rounded-t-3xl">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                          <span className="text-4xl font-black text-slate-900">{day}</span>
                          <span className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Tháng {month}/{year}
                          </span>
                        </div>
                      )}
                      {post.isPinned && (
                        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                          Ghim
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow text-left bg-[#f4f7fa]/50 group-hover:bg-[#f4f7fa] transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[15px] font-[500] text-[#c8102e]">{label}</span>
                        <span className="text-slate-400 mx-0.5">•</span>
                        <span className="text-[14px] font-[500] text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="text-[19px] md:text-[20px] font-[500] text-[#1e293b] leading-[1.3] mb-3 line-clamp-3 group-hover:text-[#c8102e] transition-colors tracking-tight">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:text-[#c8102e] hover:ring-[#c8102e]/30"
              >
                Xem thêm thông báo
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center border-t border-slate-100">
          <div className="w-20 h-20 mb-6 bg-[#f8f9fa] rounded-full flex items-center justify-center text-slate-300 border border-slate-200">
            <Bell size={32} />
          </div>
          <h3 className="text-[20px] font-[500] text-slate-800 mb-2">Đang cập nhật</h3>
          <p className="text-slate-500 text-[15.5px] max-w-sm">Chưa có thông báo nào.</p>
        </div>
      )}
    </div>
  );
}
