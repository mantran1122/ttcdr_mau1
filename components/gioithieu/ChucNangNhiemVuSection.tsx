"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const chucNang = [
  {
    title: "Đào tạo tin học cơ bản và nâng cao, nâng cao",
    desc: "",
  },
  {
    title: "Đào tạo Anh văn theo chuẩn Trường và khung 6 bậc VSTEP",
    desc: "",
  },
  {
    title: "Rèn luyện kỹ năng giao tiếp, thuyết trình, làm việc nhóm",
    desc: "",
  },
  {
    title: "Đào tạo kỹ năng nghề nghiệp thiết yếu cho sinh viên",
    desc: "",
  },
];

const nhiemVu = [
  {
    num: "01",
    title: "Khảo sát & Đánh giá",

  },
  {
    num: "02",
    title: "Tổ chức đào tạo",

  },
  {
    num: "03",
    title: "Kiểm tra & Cấp chứng chỉ",
  },
  {
    num: "04",
    title: "Câu lạc bộ & Tuyển sinh",
  },
];

export default function ChucNangNhiemVuSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
              Chức năng &amp; Nhiệm vụ
            </span>
            <span className="h-2 w-2 rotate-45 bg-red-500" />
            <span className="hidden h-px w-12 bg-slate-300 sm:block" />
          </div>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
            Chức năng &amp; Nhiệm vụ
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-red-600" />
        </motion.div>

        {/* Lĩnh vực chức năng cốt lõi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <h3 className="border-b border-slate-200 pb-3 text-lg font-bold text-slate-900 sm:text-xl">
            Lĩnh vực chức năng cốt lõi
          </h3>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {chucNang.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              whileHover={{ y: -5, boxShadow: "0 12px 28px -8px rgba(0,0,0,0.12)" }}
              className="rounded-xl border-t-4 border-red-600 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
            >
              <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nhiệm vụ chiến lược */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <h3 className="border-b border-slate-200 pb-3 text-lg font-bold text-slate-900 sm:text-xl">
            Nhiệm vụ chiến lược
          </h3>
        </motion.div>

        <div className="space-y-0">
          {nhiemVu.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="flex items-start gap-4 border-b border-slate-100 py-6 sm:gap-6 sm:py-8"
            >
              <span className="text-[2.5rem] font-black leading-none text-slate-500 sm:text-[3.5rem]">
                {item.num}
              </span>
              <div className="pt-1">
                <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
