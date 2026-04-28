"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2015", label: "Năm thành lập" },
  { value: "5", label: "Nhóm học phần" },
  { value: "50.000+", label: "Sinh viên đào tạo" },
  { value: "100%", label: "Chuẩn hóa theo Bộ GD&ĐT" },
];

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200/60 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="text-center"
            >
              <div
                className="text-[2.2rem] font-black tracking-tight"
                style={{ color: "#ED1F25" }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
