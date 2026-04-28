"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type ExamType = "ngoaingu" | "tinhoc" | "kynang" | "ai" | "chungchi";
type ExamStatus = "upcoming" | "completed";

type Exam = {
  subject: string;
  kind: string;
  type: ExamType;
  groups: string;
  date: string;
  session: string;
  room: string;
  status: ExamStatus;
  note?: string;
};

const TYPE_LABEL: Record<ExamType, string> = {
  ngoaingu: "Ngoại ngữ",
  tinhoc: "Tin học",
  kynang: "Kỹ năng",
  ai: "AI",
  chungchi: "Chứng chỉ",
};

const TYPE_STYLE: Record<ExamType, string> = {
  ngoaingu: "bg-blue-50 text-blue-700 ring-blue-200",
  tinhoc: "bg-green-50 text-green-700 ring-green-200",
  kynang: "bg-amber-50 text-amber-700 ring-amber-200",
  ai: "bg-orange-50 text-orange-700 ring-orange-200",
  chungchi: "bg-red-50 text-red-700 ring-red-200",
};

const EXAMS: Exam[] = [
  {
    subject: "TOEIC Mock Test",
    kind: "Thi thử",
    type: "ngoaingu",
    groups: "TN01, TN02",
    date: "20/05/2025",
    session: "Ca 1 (7:30 – 9:30)",
    room: "A201, A202",
    status: "upcoming",
  },
  {
    subject: "VSTEP B1",
    kind: "Kiểm tra giữa khóa",
    type: "ngoaingu",
    groups: "TN03, TN04",
    date: "22/05/2025",
    session: "Ca 2 (9:30 – 11:30)",
    room: "A202",
    status: "upcoming",
  },
  {
    subject: "Tin học IC3",
    kind: "Kiểm tra cuối khóa",
    type: "tinhoc",
    groups: "TH05, TH06",
    date: "24/05/2025",
    session: "Ca 3 (13:30 – 15:30)",
    room: "Lab01",
    status: "upcoming",
  },
  {
    subject: "AI cơ bản",
    kind: "Kiểm tra giữa khóa",
    type: "ai",
    groups: "AI02, AI05",
    date: "27/05/2025",
    session: "Ca 4 (15:30 – 17:30)",
    room: "Lab02",
    status: "upcoming",
  },
  {
    subject: "Kỹ năng mềm",
    kind: "Kiểm tra cuối khóa",
    type: "kynang",
    groups: "KN02, KN03",
    date: "29/05/2025",
    session: "Ca 5 (17:30 – 19:30)",
    room: "A101",
    status: "upcoming",
  },
  {
    subject: "TOEIC Chính thức (ĐGNLNN)",
    kind: "Thi chứng chỉ",
    type: "chungchi",
    groups: "Tất cả thí sinh đã đăng ký",
    date: "31/05/2025",
    session: "Ca 1 (7:30 – 9:30)",
    room: "Hội đồng thi – B Block",
    status: "upcoming",
    note: "Mang CCCD/CMND và phiếu dự thi",
  },
  {
    subject: "VSTEP B2",
    kind: "Kiểm tra cuối khóa",
    type: "ngoaingu",
    groups: "TN07, TN08",
    date: "03/06/2025",
    session: "Ca 2 (9:30 – 11:30)",
    room: "A202",
    status: "upcoming",
  },
  {
    subject: "Tin học MOS",
    kind: "Kiểm tra cuối khóa",
    type: "tinhoc",
    groups: "TH01",
    date: "15/04/2025",
    session: "Ca 3 (13:30 – 15:30)",
    room: "Lab01",
    status: "completed",
  },
  {
    subject: "TOEIC Cơ bản",
    kind: "Kiểm tra giữa khóa",
    type: "ngoaingu",
    groups: "TN01",
    date: "10/04/2025",
    session: "Ca 1 (7:30 – 9:30)",
    room: "A201",
    status: "completed",
  },
  {
    subject: "Kỹ năng nghề nghiệp",
    kind: "Kiểm tra cuối khóa",
    type: "kynang",
    groups: "KN06",
    date: "05/04/2025",
    session: "Ca 4 (15:30 – 17:30)",
    room: "A101",
    status: "completed",
  },
];

const FILTERS = [
  { key: "all", label: "Tất cả" },
  { key: "upcoming", label: "Sắp tới" },
  { key: "completed", label: "Đã kết thúc" },
] as const;

type FilterKey = (typeof FILTERS)[number]["key"];

export default function ExamListSection() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = EXAMS.filter(
    (e) => filter === "all" || e.status === filter
  );

  return (
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-6 flex gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                  filter === f.key
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-red-300",
                ].join(" ")}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Exam cards */}
          <div className="space-y-3">
            {visible.map((exam, i) => (
              <motion.div
                key={`${exam.subject}-${exam.date}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5"
              >
                {/* Left accent stripe by type */}
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-1",
                    exam.type === "ngoaingu"
                      ? "bg-blue-400"
                      : exam.type === "tinhoc"
                      ? "bg-green-400"
                      : exam.type === "ai"
                      ? "bg-orange-400"
                      : exam.type === "chungchi"
                      ? "bg-red-500"
                      : "bg-amber-400",
                  ].join(" ")}
                />

                <div className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left: subject info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ring-1",
                          TYPE_STYLE[exam.type],
                        ].join(" ")}
                      >
                        {TYPE_LABEL[exam.type]}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
                        {exam.kind}
                      </span>
                      {exam.status === "completed" && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-400 ring-1 ring-slate-200">
                          Đã kết thúc
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {exam.subject}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <i className="bi bi-people text-slate-400" />
                        Nhóm: {exam.groups}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="bi bi-clock text-slate-400" />
                        {exam.session}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="bi bi-door-open text-slate-400" />
                        {exam.room}
                      </span>
                    </div>

                    {exam.note && (
                      <p className="mt-2 text-[11px] text-amber-700">
                        <i className="bi bi-exclamation-triangle mr-1" />
                        {exam.note}
                      </p>
                    )}
                  </div>

                  {/* Right: date */}
                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end sm:gap-1 sm:text-right">
                    <div
                      className={[
                        "inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-black",
                        exam.status === "upcoming"
                          ? "bg-red-50 text-red-700"
                          : "bg-slate-100 text-slate-500",
                      ].join(" ")}
                    >
                      <i className="bi bi-calendar-event text-[13px]" />
                      {exam.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {visible.length === 0 && (
              <div className="rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5">
                <i className="bi bi-calendar-x text-4xl text-slate-300" />
                <p className="mt-3 text-sm text-slate-400">Không có lịch kiểm tra.</p>
              </div>
            )}
          </div>

          <p className="mt-4 text-right text-[11px] text-slate-400">
            * Lịch có thể thay đổi. Theo dõi thông báo từ Trung tâm để cập nhật kịp thời.
          </p>
        </div>
      </div>
    </section>
  );
}
