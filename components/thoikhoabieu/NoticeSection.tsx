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
                    Lưu ý về thời khóa biểu
                  </p>
                  <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-600">
                    <li>• Thời khóa biểu được cập nhật vào đầu mỗi tuần (Chủ nhật hoặc Thứ 2 sáng).</li>
                    <li>• Sinh viên vui lòng kiểm tra lại lịch học trước mỗi buổi để tránh nhầm lẫn.</li>
                    <li>• Các thay đổi đột xuất sẽ được thông báo qua nhóm lớp hoặc bảng thông báo tại Trung tâm.</li>
                  </ul>
                </div>
              </div>

              <div className="shrink-0 rounded-xl bg-slate-50 px-5 py-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Năm học
                </p>
                <p className="text-base font-black text-slate-900">2024 – 2025</p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-600">
                  Học kỳ 2
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
