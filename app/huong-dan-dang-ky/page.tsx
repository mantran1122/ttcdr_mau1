"use client";

import { motion } from "framer-motion";
import { FileText, PenTool, CreditCard, CalendarCheck, HelpCircle, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01",
    title: "Nhận phiếu đăng ký học tại Trung tâm ĐTCĐR&PTNNL",
    note: "Có thể đăng ký cá nhân, theo nhóm hoặc theo lớp",
  },
  {
    num: "02",
    title: "Điền đầy đủ thông tin và dán 2 ảnh 3x4 vào phiếu đăng ký",
    note: "",
  },
  {
    num: "03",
    title: "Đóng lệ phí học tại phòng Tài chính – Kế hoạch và nộp lại phiếu cho Trung tâm",
    note: "",
  },
  {
    num: "04",
    title: "Sau khi đóng lệ phí, sinh viên cập nhật lịch học tại website của Trung tâm vào mỗi tuần",
    note: "",
  },
];

export default function HuongDanDangKyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Header ── */}
      <section className="pt-10 pb-14 lg:pt-14 lg:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center"
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="hidden h-px w-12 bg-slate-300 sm:block" />
              <span className="h-2 w-2 rotate-45 bg-red-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                Hướng dẫn
              </span>
              <span className="h-2 w-2 rotate-45 bg-red-500" />
              <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            </div>
            <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
              Hướng dẫn đăng ký
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Quy trình đăng ký học tại Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mx-auto max-w-4xl"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
              <div className="relative aspect-video w-full bg-slate-100">
                {/* Khi có video, bỏ comment src và poster bên dưới */}
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster=""
                >
                  {/* <source src="/videos/huong-dan-dang-ky.mp4" type="video/mp4" /> */}
                  <p className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                    Trình duyệt của bạn không hỗ trợ phát video.
                  </p>
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-0">
            {steps.map((item, i) => {
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="flex items-start gap-5 border-b border-slate-200 py-8 sm:gap-7 sm:py-10"
                >
                  {/* Number + Icon */}
                  <div className="flex shrink-0 flex-col items-center gap-2 pt-1">
                    <span className="text-[2.2rem] font-black leading-none text-red-600 sm:text-[3rem]">
                      {item.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>
                    {item.note && (
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {item.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Support CTA ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mx-auto max-w-3xl"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
              {/* Decorative red accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <HelpCircle size={18} className="text-red-600" strokeWidth={2} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
                      Cần hỗ trợ?
                    </span>
                  </div>
                  <p className="max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                    Nếu bạn có bất kỳ thắc mắc nào, đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn.
                  </p>
                </div>

                <a
                  href="https://ttcdr.nctu.edu.vn/huong-dan-dang-ky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:mt-0"
                >
                  Cổng hỗ trợ sinh viên
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
