"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2015", label: "Năm thành lập"},
  { value: "5", label: "Nhóm học phần"},
  { value: "50.000+", label: "Sinh viên đào tạo"},
  { value: "100%", label: "Chuẩn hóa theo Bộ GD&ĐT" },
];

export default function GioiThieuChungSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Giới thiệu
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Giới thiệu chung
          </h2>
        </motion.div>

        {/* Content grid 50/50 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cột trái: Card + mô tả */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
            >
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Thành lập theo
                </p>
                <p className="mt-1 text-base font-bold text-red-600">
                  Quyết định số 23/QĐ-CTHĐQT-ĐHNCT
                </p>
                <div className="my-3 border-t border-slate-100" />
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Ngày 25 tháng 06 năm 2015
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              Trung tâm Đào tạo Chuẩn đầu ra và Phát triển nguồn nhân lực là
              đơn vị trực thuộc Trường Đại học Nam Cần Thơ được thành lập theo{" "}
              <strong className="text-slate-800">Quyết định số 23/QĐ-CTHĐQT-ĐHNCT</strong> ngày{" "}
              <strong className="text-slate-800">25 tháng 06 năm 2015</strong> của Chủ tịch Hội đồng quản
              trị Trường Đại học Nam Cần Thơ về việc thành lập Trung tâm Đào
              tạo Chuẩn đầu ra và Phát triển nguồn nhân lực.
            </motion.p>
          </div>

          {/* Cột phải: Stats 2x2 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => {
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                  className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-900/5 sm:p-6"
                >

                  <div className="text-[1.5rem] font-black tracking-tight text-red-600 sm:text-[1.75rem]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    {s.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
