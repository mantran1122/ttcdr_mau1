"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const files = [
  {
    name: "Thời khóa biểu Tuần 33 (05/05 – 10/05/2025)",
    size: "148 KB",
    date: "04/05/2025",
    href: "#",
  },
  {
    name: "Thời khóa biểu Tuần 32 (28/04 – 03/05/2025)",
    size: "132 KB",
    date: "27/04/2025",
    href: "#",
  },
  {
    name: "Thời khóa biểu Tháng 5/2025",
    size: "210 KB",
    date: "30/04/2025",
    href: "#",
  },
  {
    name: "Thời khóa biểu Học kỳ 2 (2024–2025) – Tổng hợp",
    size: "865 KB",
    date: "10/01/2025",
    href: "#",
  },
];

export default function DownloadSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mx-auto max-w-5xl"
        >
          {/* Section heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
              <i className="bi bi-download text-[17px] text-red-600" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                Tải về
              </p>
              <h2 className="text-lg font-black tracking-tight text-slate-900">
                Thời khóa biểu dạng file
              </h2>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
            {files.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                className={[
                  "flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50",
                  i < files.length - 1 ? "border-b border-slate-100" : "",
                ].join(" ")}
              >
                {/* PDF icon */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <i className="bi bi-file-earmark-pdf text-[20px]" />
                </span>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{f.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {f.size} · Cập nhật {f.date}
                  </p>
                </div>

                {/* Download button */}
                <a
                  href={f.href}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                >
                  <i className="bi bi-download" />
                  <span className="hidden sm:inline">Tải về</span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
            className="mt-6 relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                  <i className="bi bi-question-circle text-[18px] text-red-600" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">
                    Không tìm thấy lịch học của bạn?
                  </p>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-600">
                    Liên hệ trực tiếp Trung tâm hoặc xem thêm tại cổng thông tin sinh viên.
                  </p>
                </div>
              </div>

              <a
                href="https://ttcdr.nctu.edu.vn/thong-tin/thoi-khoa-bieu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:mt-0"
              >
                Cổng thông tin Trung tâm
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
