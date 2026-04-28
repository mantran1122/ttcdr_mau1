"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Result = {
  mssv: string;
  name: string;
  subject: string;
  examDate: string;
  score: number | string;
  level: string;
  passed: boolean;
  certNo?: string;
};

const DATA: Result[] = [
  { mssv: "2051060001", name: "Nguyễn Văn An",      subject: "TOEIC",      examDate: "15/03/2025", score: 650,  level: "B2", passed: true,  certNo: "TOEIC-2025-0001" },
  { mssv: "2051060002", name: "Trần Thị Bình",      subject: "TOEIC",      examDate: "15/03/2025", score: 495,  level: "B1", passed: true,  certNo: "TOEIC-2025-0002" },
  { mssv: "2051060015", name: "Lê Văn Cường",       subject: "VSTEP B1",   examDate: "12/04/2025", score: 7.5,  level: "B1", passed: true,  certNo: "VSTEP-2025-0015" },
  { mssv: "2051060023", name: "Phạm Thị Dung",      subject: "VSTEP B1",   examDate: "12/04/2025", score: 5.0,  level: "A2", passed: false  },
  { mssv: "2051060031", name: "Hoàng Minh Đức",     subject: "TOEIC",      examDate: "15/03/2025", score: 730,  level: "B2", passed: true,  certNo: "TOEIC-2025-0031" },
  { mssv: "2051060044", name: "Vũ Thị Hà",          subject: "VSTEP B2",   examDate: "12/04/2025", score: 8.0,  level: "B2", passed: true,  certNo: "VSTEP-2025-0044" },
  { mssv: "2051060058", name: "Ngô Thanh Hùng",     subject: "TOEIC",      examDate: "15/03/2025", score: 420,  level: "A2", passed: false  },
  { mssv: "2051060067", name: "Đinh Thị Kim",       subject: "VSTEP B1",   examDate: "12/04/2025", score: 6.5,  level: "B1", passed: true,  certNo: "VSTEP-2025-0067" },
  { mssv: "2051060072", name: "Bùi Quốc Khánh",     subject: "TOEIC",      examDate: "15/03/2025", score: 560,  level: "B1", passed: true,  certNo: "TOEIC-2025-0072" },
  { mssv: "2051060089", name: "Lý Thị Lan",         subject: "VSTEP B1",   examDate: "12/04/2025", score: 7.0,  level: "B1", passed: true,  certNo: "VSTEP-2025-0089" },
];

export default function KqThiPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const results = submitted
    ? DATA.filter(
        (r) =>
          r.mssv.includes(submitted.trim()) ||
          r.name.toLowerCase().includes(submitted.trim().toLowerCase())
      )
    : [];

  const searched = submitted !== "";

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="pb-10 pt-10 lg:pb-14 lg:pt-14">
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
                Tra cứu
              </span>
              <span className="h-2 w-2 rotate-45 bg-red-500" />
              <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            </div>
            <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
              Kết quả thi ĐGNLNN
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Tra cứu kết quả thi Đánh giá Năng lực Ngoại ngữ (TOEIC, VSTEP) theo MSSV hoặc họ tên.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search form ── */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="mx-auto max-w-2xl"
          >
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(query); }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5"
            >
              <div className="p-6 sm:p-8">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  MSSV hoặc Họ và tên
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nhập MSSV hoặc họ tên để tra cứu kết quả..."
                    className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    <i className="bi bi-search" />
                    <span className="hidden sm:inline">Tra cứu</span>
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  Ví dụ: Nhập "2051060001" hoặc "Nguyễn Văn An"
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {searched && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className="mb-3 text-sm text-slate-500">
                  Tìm thấy <span className="font-bold text-slate-900">{results.length}</span> kết quả cho "{submitted}"
                </p>
                <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
                  <table className="w-full min-w-[700px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        {["MSSV", "Họ và tên", "Môn thi", "Ngày thi", "Điểm", "Bậc", "Kết quả", "Số chứng chỉ"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-slate-500">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr key={r.mssv} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-700">{r.mssv}</td>
                          <td className="px-4 py-3 font-semibold text-slate-900">{r.name}</td>
                          <td className="px-4 py-3 text-slate-600">{r.subject}</td>
                          <td className="px-4 py-3 text-slate-600">{r.examDate}</td>
                          <td className="px-4 py-3 font-bold text-slate-900">{r.score}</td>
                          <td className="px-4 py-3">
                            <span className={[
                              "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                              r.level === "B2" ? "bg-blue-50 text-blue-700 ring-blue-200"
                              : r.level === "B1" ? "bg-green-50 text-green-700 ring-green-200"
                              : "bg-slate-100 text-slate-500 ring-slate-200",
                            ].join(" ")}>
                              {r.level}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={[
                              "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                              r.passed
                                ? "bg-green-50 text-green-700 ring-green-200"
                                : "bg-red-50 text-red-600 ring-red-200",
                            ].join(" ")}>
                              {r.passed ? "Đạt" : "Chưa đạt"}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-slate-500">
                            {r.certNo ?? "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {searched && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5"
              >
                <i className="bi bi-clipboard-x text-4xl text-slate-300" />
                <p className="mt-3 font-semibold text-slate-700">Không tìm thấy kết quả thi</p>
                <p className="mt-1 text-sm text-slate-400">
                  Vui lòng kiểm tra lại MSSV hoặc họ tên, hoặc liên hệ Trung tâm để được hỗ trợ.
                </p>
              </motion.div>
            )}

            {/* Score legend */}
            {searched && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                className="mt-4 flex flex-wrap gap-3"
              >
                {[
                  { label: "TOEIC: ≥ 450 = Đạt chuẩn B1 · ≥ 600 = Đạt chuẩn B2", color: "blue" },
                  { label: "VSTEP: ≥ 6.0 = B1 · ≥ 7.5 = B2", color: "green" },
                ].map((l) => (
                  <span key={l.label} className="text-[11px] text-slate-400">
                    <i className="bi bi-info-circle mr-1" />{l.label}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE }}
              className={searched ? "mt-6" : ""}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
                <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                      <i className="bi bi-question-circle text-[18px] text-red-600" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 sm:text-base">Cần hỗ trợ?</p>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-600">
                        Kết quả được cập nhật sau kỳ thi khoảng 5–7 ngày làm việc.
                        Nếu có thắc mắc, vui lòng liên hệ Trung tâm hoặc xem tại cổng thông tin chính thức.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://ttcdr.nctu.edu.vn/kqthi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:mt-0"
                  >
                    Cổng tra cứu chính thức
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
