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
  { mssv: "2051060001", name: "Nguyễn Văn An", subject: "TOEIC", examDate: "15/03/2025", score: 650, level: "B2", passed: true, certNo: "TOEIC-2025-0001" },
  { mssv: "2051060002", name: "Trần Thị Bình", subject: "TOEIC", examDate: "15/03/2025", score: 495, level: "B1", passed: true, certNo: "TOEIC-2025-0002" },
  { mssv: "2051060015", name: "Lê Văn Cường", subject: "VSTEP B1", examDate: "12/04/2025", score: 7.5, level: "B1", passed: true, certNo: "VSTEP-2025-0015" },
  { mssv: "2051060023", name: "Phạm Thị Dung", subject: "VSTEP B1", examDate: "12/04/2025", score: 5.0, level: "A2", passed: false },
  { mssv: "2051060031", name: "Hoàng Minh Đức", subject: "TOEIC", examDate: "15/03/2025", score: 730, level: "B2", passed: true, certNo: "TOEIC-2025-0031" },
  { mssv: "2051060044", name: "Vũ Thị Hà", subject: "VSTEP B2", examDate: "12/04/2025", score: 8.0, level: "B2", passed: true, certNo: "VSTEP-2025-0044" },
  { mssv: "2051060058", name: "Ngô Thanh Hùng", subject: "TOEIC", examDate: "15/03/2025", score: 420, level: "A2", passed: false },
  { mssv: "2051060067", name: "Đinh Thị Kim", subject: "VSTEP B1", examDate: "12/04/2025", score: 6.5, level: "B1", passed: true, certNo: "VSTEP-2025-0067" },
  { mssv: "2051060072", name: "Bùi Quốc Khánh", subject: "TOEIC", examDate: "15/03/2025", score: 560, level: "B1", passed: true, certNo: "TOEIC-2025-0072" },
  { mssv: "2051060089", name: "Lý Thị Lan", subject: "VSTEP B1", examDate: "12/04/2025", score: 7.0, level: "B1", passed: true, certNo: "VSTEP-2025-0089" },
];

const EXAM_PERIOD_OPTIONS = [
  { value: "2025-08", label: "Đợt công bố tháng 08/2025" },
  { value: "2025-09", label: "Đợt công bố tháng 09/2025" },
  { value: "2025-10", label: "Đợt công bố tháng 10/2025" },
];

type KetQuaThiSectionProps = {
  query: string;
  submitted: string;
  onQueryChange: (value: string) => void;
  onSearch: (value: string) => void;
};

export default function KetQuaThiSection({
  query,
  submitted,
  onQueryChange,
  onSearch,
}: KetQuaThiSectionProps) {
  const [selectedPeriod, setSelectedPeriod] = useState(EXAM_PERIOD_OPTIONS[0].value);

  const results = submitted
    ? DATA.filter(
        (r) =>
          r.mssv.includes(submitted.trim()) ||
          r.name.toLowerCase().includes(submitted.trim().toLowerCase()),
      )
    : [];

  const searched = submitted !== "";

  return (
    <div>
      <section className="pb-8">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: EASE }}
            className="max-w-[1040px]"
          >
            <div className="mb-2 grid grid-cols-1 gap-1 text-sm font-semibold text-slate-700 lg:grid-cols-[320px_minmax(0,1fr)_180px] lg:gap-3">
              <label htmlFor="ket-qua-period">Đợt công bố</label>
              <label htmlFor="ket-qua-query">MSSV hoặc Họ và tên</label>
              <span className="hidden lg:block" aria-hidden="true" />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(query);
              }}
              className="grid grid-cols-1 gap-3 lg:grid-cols-[320px_minmax(0,1fr)_180px]"
            >
              <div className="relative">
                <select
                  id="ket-qua-period"
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="h-[52px] w-full appearance-none rounded-md bg-slate-200 px-4 pr-12 text-sm text-slate-800 outline-none transition-colors focus:bg-slate-300"
                >
                  {EXAM_PERIOD_OPTIONS.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <i className="bi bi-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-slate-500" />
              </div>

              <input
                id="ket-qua-query"
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Nhập MSSV hoặc họ tên để tra cứu kết quả..."
                className="h-[52px] w-full rounded-md bg-slate-200 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-500 transition-colors focus:bg-slate-300"
              />

              <button
                type="submit"
                className="inline-flex h-[52px] w-full shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                <i className="bi bi-search" />
                <span>Tra cứu</span>
              </button>
            </form>

            <p className="mt-3 text-[11px] text-slate-400">
              Ví dụ: Nhập MSSV 2051060001 hoặc tên Nguyễn Văn An
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="w-full">
          <div>
            {searched && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <p className="mb-3 text-sm text-slate-500">
                  Tìm thấy <span className="font-bold text-slate-900">{results.length}</span> kết quả
                  cho &quot;{submitted}&quot;
                </p>

                <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 md:block">
                  <table className="w-full min-w-[700px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        {[
                          "MSSV",
                          "Họ và tên",
                          "Môn thi",
                          "Ngày thi",
                          "Điểm",
                          "Bậc",
                          "Kết quả",
                          "Số chứng chỉ",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-slate-500"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr key={r.mssv} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-700">
                            {r.mssv}
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-900">{r.name}</td>
                          <td className="px-4 py-3 text-slate-600">{r.subject}</td>
                          <td className="px-4 py-3 text-slate-600">{r.examDate}</td>
                          <td className="px-4 py-3 font-bold text-slate-900">{r.score}</td>
                          <td className="px-4 py-3">
                            <span
                              className={[
                                "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                                r.level === "B2"
                                  ? "bg-blue-50 text-blue-700 ring-blue-200"
                                  : r.level === "B1"
                                    ? "bg-green-50 text-green-700 ring-green-200"
                                    : "bg-slate-100 text-slate-500 ring-slate-200",
                              ].join(" ")}
                            >
                              {r.level}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={[
                                "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                                r.passed
                                  ? "bg-green-50 text-green-700 ring-green-200"
                                  : "bg-red-50 text-red-600 ring-red-200",
                              ].join(" ")}
                            >
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

                <div className="space-y-3 md:hidden">
                  {results.map((r) => (
                    <div
                      key={`mobile-${r.mssv}`}
                      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{r.name}</p>
                          <p className="mt-0.5 text-xs text-slate-500">MSSV: {r.mssv}</p>
                        </div>
                        <span
                          className={[
                            "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                            r.passed
                              ? "bg-green-50 text-green-700 ring-green-200"
                              : "bg-red-50 text-red-600 ring-red-200",
                          ].join(" ")}
                        >
                          {r.passed ? "Đạt" : "Chưa đạt"}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                        <p>Môn thi: {r.subject}</p>
                        <p>Ngày thi: {r.examDate}</p>
                        <p>
                          Điểm: <span className="font-semibold text-slate-900">{r.score}</span>
                        </p>
                        <p>Bậc: {r.level}</p>
                        <p>Số chứng chỉ: {r.certNo ?? "—"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {searched && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5"
              >
                <i className="bi bi-clipboard-x text-4xl text-slate-300" />
                <p className="mt-3 font-semibold text-slate-700">Không tìm thấy kết quả thi</p>
                <p className="mt-1 text-sm text-slate-400">
                  Vui lòng kiểm tra lại MSSV hoặc họ tên, hoặc liên hệ Trung tâm để được hỗ trợ.
                </p>
              </motion.div>
            )}

            {searched && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.15, ease: EASE }}
                className="mt-4 flex flex-wrap gap-3"
              >
                {[
                  "TOEIC: >= 450 = Đạt chuẩn B1 · >= 600 = Đạt chuẩn B2",
                  "VSTEP: >= 6.0 = B1 · >= 7.5 = B2",
                ].map((text) => (
                  <span key={text} className="text-[11px] text-slate-400">
                    <i className="bi bi-info-circle mr-1" />
                    {text}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={searched ? "mt-6" : ""}
            >
              <div className="rounded-xl border-l-4 border-red-200 bg-white/55 px-4 py-4 sm:px-5">
                <div className="flex items-start gap-4">
                  <i className="bi bi-question-circle text-[22px] text-red-400/80 [animation:tcPulse_4s_ease-in-out_infinite]" />
                  <div>
                    <p className="text-base font-bold text-slate-900">Không tìm thấy thông tin?</p>
                    <p className="mt-1.5 text-sm text-slate-500">
                      Kết quả thường được cập nhật sau kỳ thi khoảng 5-7 ngày làm việc. Nếu đã quá thời gian
                      mà chưa có kết quả, vui lòng liên hệ Trung tâm để được hỗ trợ sớm nhất.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
