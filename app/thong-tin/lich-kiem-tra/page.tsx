"use client";

import { motion } from "framer-motion";
import { CalendarX2 } from "lucide-react";
import HeroSection from "@/components/lichkiemtra/HeroSection";

/*
import ExamListSection from "@/components/lichkiemtra/ExamListSection";
*/

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LichKiemTraPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="container mx-auto px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
          className="rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:px-8"
        >
          <motion.div
            animate={{ y: [0, -4, 0], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400"
          >
            <CalendarX2 className="h-8 w-8" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
            className="mt-5 text-[38px] font-semibold leading-tight tracking-[-0.03em] text-slate-900"
          >
            Chưa có lịch kiểm tra nào
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.28, ease: EASE }}
            className="mt-3 text-[20px] text-slate-500"
          >
            Vui lòng đăng nhập để xem lịch kiểm tra của bạn.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}
