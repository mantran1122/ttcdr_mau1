"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Category = "tat-ca" | "lich-thi" | "khai-giang" | "dang-ky" | "ket-qua" | "chung";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  isPinned?: boolean;
  href?: string;
};

const CATEGORY_LABEL: Record<Category, string> = {
  "tat-ca": "Tất cả",
  "lich-thi": "Lịch thi",
  "khai-giang": "Khai giảng",
  "dang-ky": "Đăng ký",
  "ket-qua": "Kết quả",
  chung: "Thông báo chung",
};

const CATEGORY_STYLE: Record<Category, string> = {
  "tat-ca": "",
  "lich-thi": "bg-red-50 text-red-700 ring-red-200",
  "khai-giang": "bg-green-50 text-green-700 ring-green-200",
  "dang-ky": "bg-blue-50 text-blue-700 ring-blue-200",
  "ket-qua": "bg-orange-50 text-orange-700 ring-orange-200",
  chung: "bg-slate-100 text-slate-600 ring-slate-200",
};

const POSTS: Post[] = [
  {
    title: "Thông báo lịch thi VSTEP tháng 6/2025",
    excerpt:
      "Trung tâm thông báo lịch thi VSTEP chính thức vào ngày 14/06/2025. Thí sinh đã đăng ký vui lòng kiểm tra thông tin phòng thi và mang đầy đủ giấy tờ theo yêu cầu.",
    date: "28/04/2025",
    category: "lich-thi",
    isPinned: true,
  },
  {
    title: "Khai giảng lớp TOEIC Cơ bản – Nhóm TN11 (Khóa tháng 5)",
    excerpt:
      "Trung tâm thông báo khai giảng lớp TOEIC Cơ bản Nhóm TN11 vào ngày 05/05/2025. Lớp học vào các buổi sáng Thứ 2 và Thứ 4, tại phòng A201.",
    date: "25/04/2025",
    category: "khai-giang",
    isPinned: true,
  },
  {
    title: "Hướng dẫn đăng ký học kỳ hè 2025",
    excerpt:
      "Trung tâm mở đăng ký học kỳ hè 2025 từ ngày 01/05 đến 20/05/2025. Sinh viên vui lòng điền phiếu đăng ký và nộp lệ phí tại Phòng Tài chính – Kế hoạch.",
    date: "20/04/2025",
    category: "dang-ky",
  },
  {
    title: "Lịch nghỉ lễ 30/04 – 01/05/2025 và điều chỉnh lịch học",
    excerpt:
      "Nhân dịp Lễ Giải phóng miền Nam 30/04 và Quốc tế Lao động 01/05, Trung tâm nghỉ từ Thứ 3 đến Thứ 5 (29/04 – 01/05). Các buổi học bù sẽ được thông báo sau.",
    date: "18/04/2025",
    category: "chung",
  },
  {
    title: "Kết quả thi VSTEP tháng 4/2025",
    excerpt:
      "Trung tâm công bố kết quả thi VSTEP ngày 12/04/2025. Thí sinh tra cứu kết quả tại mục Tra cứu trên website hoặc liên hệ trực tiếp Trung tâm.",
    date: "15/04/2025",
    category: "ket-qua",
  },
  {
    title: "Khai giảng lớp AI cơ bản – Nhóm AI06",
    excerpt:
      "Trung tâm mở thêm lớp AI cơ bản Nhóm AI06 vào ngày 14/04/2025. Lớp học tại Lab02, ca chiều Thứ 3 và Thứ 5. Số lượng có hạn, đăng ký sớm để giữ chỗ.",
    date: "10/04/2025",
    category: "khai-giang",
  },
  {
    title: "Thông báo nộp lệ phí học kỳ 2 (2024–2025)",
    excerpt:
      "Sinh viên đang học tại Trung tâm vui lòng hoàn tất nộp lệ phí học kỳ 2 trước ngày 20/04/2025 để tránh bị xóa tên khỏi danh sách lớp.",
    date: "05/04/2025",
    category: "chung",
  },
  {
    title: "Điều chỉnh thời khóa biểu Tuần 28 (31/03 – 05/04/2025)",
    excerpt:
      "Do lịch sử dụng phòng học thay đổi, một số lớp trong tuần 28 sẽ học tại phòng dự phòng. Chi tiết xem tại mục Thời khóa biểu.",
    date: "30/03/2025",
    category: "chung",
  },
  {
    title: "Kết quả thi TOEIC nội bộ tháng 3/2025",
    excerpt:
      "Trung tâm công bố kết quả thi TOEIC nội bộ ngày 22/03/2025. Sinh viên tra cứu điểm tại mục Tra cứu → Kết quả thi ĐGNLNN.",
    date: "25/03/2025",
    category: "ket-qua",
  },
  {
    title: "Thông báo lịch thi VSTEP tháng 4/2025",
    excerpt:
      "Kỳ thi VSTEP tháng 4 sẽ diễn ra vào ngày 12/04/2025. Thí sinh cần đăng ký trước ngày 28/03/2025 và nộp lệ phí tại Trung tâm.",
    date: "20/03/2025",
    category: "lich-thi",
  },
];

const PAGE_SIZE = 6;

export default function PostListSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("tat-ca");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "tat-ca"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const categories = (Object.keys(CATEGORY_LABEL) as Category[]).filter(
    (c) => c !== "tat-ca"
  );

  return (
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-6 flex flex-wrap gap-2"
          >
            <button
              onClick={() => { setActiveCategory("tat-ca"); setPage(1); }}
              className={[
                "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeCategory === "tat-ca"
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-red-300",
              ].join(" ")}
            >
              Tất cả
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-red-300",
                ].join(" ")}
              >
                {CATEGORY_LABEL[cat]}
              </button>
            ))}
          </motion.div>

          {/* Post cards */}
          <div className="space-y-3">
            {visible.map((post, i) => (
              <motion.a
                key={post.title}
                href={post.href ?? "#"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (i % PAGE_SIZE) * 0.05, ease: EASE }}
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
              >
                {post.isPinned && (
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    <i className="bi bi-pin-angle-fill" /> Ghim
                  </span>
                )}

                <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-start">
                  {/* Date badge */}
                  <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-slate-50 px-3 py-2 text-center ring-1 ring-slate-200 sm:w-16">
                    <span className="text-lg font-black leading-none text-slate-900">
                      {post.date.split("/")[0]}
                    </span>
                    <span className="mt-0.5 text-[10px] font-semibold uppercase text-slate-500">
                      {post.date.split("/")[1]}/{post.date.split("/")[2]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span
                        className={[
                          "rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ring-1",
                          CATEGORY_STYLE[post.category],
                        ].join(" ")}
                      >
                        {CATEGORY_LABEL[post.category]}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-red-600 sm:text-base">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden shrink-0 items-center self-center sm:flex">
                    <i className="bi bi-arrow-right text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-red-500" />
                  </div>
                </div>
              </motion.a>
            ))}

            {filtered.length === 0 && (
              <div className="rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5">
                <i className="bi bi-bell-slash text-4xl text-slate-300" />
                <p className="mt-3 text-sm text-slate-400">Không có thông báo.</p>
              </div>
            )}
          </div>

          {/* Load more */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-6 text-center"
            >
              <button
                onClick={() => setPage((p) => p + 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:ring-red-300 hover:text-red-600"
              >
                <i className="bi bi-chevron-down" />
                Xem thêm thông báo
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
