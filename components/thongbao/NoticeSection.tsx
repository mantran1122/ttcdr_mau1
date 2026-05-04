"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NoticeSection() {
  return (
    <section className="pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                  <i className="bi bi-info-circle text-[18px] text-red-600" />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">
                    Lưu ý khi theo dõi thông báo
                  </p>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-600">
                    <li>• Các thông báo quan trọng thường được ghim ở đầu danh sách.</li>
                    <li>• Bạn có thể lọc theo danh mục để tra cứu nhanh thông tin cần thiết.</li>
                    <li>• Vui lòng kiểm tra mục thông báo định kỳ để không bỏ lỡ cập nhật mới.</li>
                  </ul>
                </div>
              </div>

              <div className="shrink-0 rounded-xl bg-slate-50 px-5 py-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Trạng thái
                </p>
                <p className="text-base font-black text-slate-900">Cập nhật</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-600">
                  Liên tục
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

