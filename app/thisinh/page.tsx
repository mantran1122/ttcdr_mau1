"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Candidate = {
  mssv: string;
  name: string;
  dob: string;
  group: string;
  subject: string;
  session: string;
  room: string;
  sbd: string;
  status: "confirmed" | "pending";
};

const DATA: Candidate[] = [
  { mssv: "2051060001", name: "Nguyễn Văn An",      dob: "15/03/2002", group: "TN01", subject: "TOEIC",               session: "Ca 1 – 7:30",  room: "A201", sbd: "001", status: "confirmed" },
  { mssv: "2051060002", name: "Trần Thị Bình",       dob: "22/07/2003", group: "TN01", subject: "TOEIC",               session: "Ca 1 – 7:30",  room: "A201", sbd: "002", status: "confirmed" },
  { mssv: "2051060015", name: "Lê Văn Cường",        dob: "10/11/2002", group: "TN03", subject: "VSTEP B1",            session: "Ca 2 – 9:30",  room: "A202", sbd: "015", status: "confirmed" },
  { mssv: "2051060023", name: "Phạm Thị Dung",       dob: "05/06/2003", group: "TN03", subject: "VSTEP B1",            session: "Ca 2 – 9:30",  room: "A202", sbd: "016", status: "confirmed" },
  { mssv: "2051060031", name: "Hoàng Minh Đức",      dob: "18/09/2002", group: "TN07", subject: "TOEIC Nâng cao",      session: "Ca 3 – 13:30", room: "A201", sbd: "031", status: "pending"    },
  { mssv: "2051060044", name: "Vũ Thị Hà",           dob: "30/01/2003", group: "TN08", subject: "VSTEP B2",            session: "Ca 2 – 9:30",  room: "A202", sbd: "044", status: "confirmed" },
  { mssv: "2051060058", name: "Ngô Thanh Hùng",      dob: "12/04/2002", group: "TN10", subject: "TOEIC Tăng tốc",      session: "Ca 1 – 7:30",  room: "A201", sbd: "058", status: "confirmed" },
  { mssv: "2051060067", name: "Đinh Thị Kim",        dob: "27/08/2003", group: "TN09", subject: "Ngoại ngữ giao tiếp", session: "Ca 6 – 19:30", room: "A203", sbd: "067", status: "pending"    },
  { mssv: "2051060072", name: "Bùi Quốc Khánh",      dob: "03/12/2002", group: "TN02", subject: "TOEIC",               session: "Ca 1 – 7:30",  room: "A201", sbd: "072", status: "confirmed" },
  { mssv: "2051060089", name: "Lý Thị Lan",          dob: "16/05/2003", group: "TN04", subject: "VSTEP B1",            session: "Ca 1 – 7:30",  room: "A202", sbd: "089", status: "confirmed" },
];

export default function ThiSinhPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const results = submitted
    ? DATA.filter(
        (c) =>
          c.mssv.includes(submitted.trim()) ||
          c.name.toLowerCase().includes(submitted.trim().toLowerCase())
      )
    : [];

  const searched = submitted !== "";

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="pb-10 pt-24 sm:pt-28 lg:pb-14 lg:pt-28">
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
            <h1 className="text-[clamp(1.9rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
              Thông tin thí sinh
            </h1>
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
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nhập MSSV hoặc họ tên thí sinh..."
                    className="w-full flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
                  >
                    <i className="bi bi-search" />
                    <span>Tra cứu</span>
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  Ví dụ: Nhập MSSV 2051060001 hoặc tên Nguyễn Văn An
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
                  Tìm thấy <span className="font-bold text-slate-900">{results.length}</span> kết quả cho &quot;{submitted}&quot;
                </p>
                <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 md:block">
                  <table className="w-full min-w-[700px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        {["MSSV", "Họ và tên", "Ngày sinh", "Nhóm", "Môn thi", "Ca thi", "Phòng", "SBD", "Trạng thái"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-slate-500">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((c, i) => (
                        <tr key={c.mssv} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-700">{c.mssv}</td>
                          <td className="px-4 py-3 font-semibold text-slate-900">{c.name}</td>
                          <td className="px-4 py-3 text-slate-600">{c.dob}</td>
                          <td className="px-4 py-3 text-slate-600">{c.group}</td>
                          <td className="px-4 py-3 text-slate-600">{c.subject}</td>
                          <td className="px-4 py-3 text-slate-600">{c.session}</td>
                          <td className="px-4 py-3 font-semibold text-slate-700">{c.room}</td>
                          <td className="px-4 py-3 font-mono font-bold text-red-600">{c.sbd}</td>
                          <td className="px-4 py-3">
                            <span className={[
                              "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                              c.status === "confirmed"
                                ? "bg-green-50 text-green-700 ring-green-200"
                                : "bg-amber-50 text-amber-700 ring-amber-200",
                            ].join(" ")}>
                              {c.status === "confirmed" ? "Đã xác nhận" : "Chờ xử lý"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 md:hidden">
                  {results.map((c) => (
                    <div
                      key={`mobile-${c.mssv}`}
                      className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-900">{c.name}</p>
                          <p className="mt-0.5 text-xs text-slate-500">MSSV: {c.mssv}</p>
                        </div>
                        <span
                          className={[
                            "rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1",
                            c.status === "confirmed"
                              ? "bg-green-50 text-green-700 ring-green-200"
                              : "bg-amber-50 text-amber-700 ring-amber-200",
                          ].join(" ")}
                        >
                          {c.status === "confirmed" ? "Đã xác nhận" : "Chờ xử lý"}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                        <p>Ngày sinh: {c.dob}</p>
                        <p>Nhóm: {c.group}</p>
                        <p>Môn thi: {c.subject}</p>
                        <p>Ca thi: {c.session}</p>
                        <p>Phòng: {c.room}</p>
                        <p className="font-semibold text-red-600">SBD: {c.sbd}</p>
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
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-2xl bg-white py-16 text-center shadow-sm ring-1 ring-slate-900/5"
              >
                <i className="bi bi-person-x text-4xl text-slate-300" />
                <p className="mt-3 font-semibold text-slate-700">Không tìm thấy thông tin thí sinh</p>
                <p className="mt-1 text-sm text-slate-400">
                  Vui lòng kiểm tra lại MSSV hoặc họ tên, hoặc liên hệ Trung tâm để được hỗ trợ.
                </p>
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
                      <p className="text-sm font-bold text-slate-900 sm:text-base">Không tìm thấy thông tin?</p>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-600">
                        Nếu bạn đã đăng ký nhưng không tìm thấy thông tin, hãy liên hệ trực tiếp
                        Trung tâm để được hỗ trợ sớm nhất.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://ttcdr.nctu.edu.vn/thisinh"
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
