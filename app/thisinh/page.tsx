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
  { mssv: "2051060001", name: "NguyÃ¡Â»â€¦n VÃ„Æ’n An",      dob: "15/03/2002", group: "TN01", subject: "TOEIC",      session: "Ca 1 Ã¢â‚¬â€œ 7:30", room: "A201", sbd: "001", status: "confirmed" },
  { mssv: "2051060002", name: "TrÃ¡ÂºÂ§n ThÃ¡Â»â€¹ BÃƒÂ¬nh",      dob: "22/07/2003", group: "TN01", subject: "TOEIC",      session: "Ca 1 Ã¢â‚¬â€œ 7:30", room: "A201", sbd: "002", status: "confirmed" },
  { mssv: "2051060015", name: "LÃƒÂª VÃ„Æ’n CÃ†Â°Ã¡Â»Âng",       dob: "10/11/2002", group: "TN03", subject: "VSTEP B1",   session: "Ca 2 Ã¢â‚¬â€œ 9:30", room: "A202", sbd: "015", status: "confirmed" },
  { mssv: "2051060023", name: "PhÃ¡ÂºÂ¡m ThÃ¡Â»â€¹ Dung",      dob: "05/06/2003", group: "TN03", subject: "VSTEP B1",   session: "Ca 2 Ã¢â‚¬â€œ 9:30", room: "A202", sbd: "016", status: "confirmed" },
  { mssv: "2051060031", name: "HoÃƒÂ ng Minh Ã„ÂÃ¡Â»Â©c",     dob: "18/09/2002", group: "TN07", subject: "TOEIC NÃƒÂ¢ng cao", session: "Ca 3 Ã¢â‚¬â€œ 13:30", room: "A201", sbd: "031", status: "pending" },
  { mssv: "2051060044", name: "VÃ…Â© ThÃ¡Â»â€¹ HÃƒÂ ",          dob: "30/01/2003", group: "TN08", subject: "VSTEP B2",   session: "Ca 2 Ã¢â‚¬â€œ 9:30", room: "A202", sbd: "044", status: "confirmed" },
  { mssv: "2051060058", name: "NgÃƒÂ´ Thanh HÃƒÂ¹ng",     dob: "12/04/2002", group: "TN10", subject: "TOEIC TÃ„Æ’ng tÃ¡Â»â€˜c", session: "Ca 1 Ã¢â‚¬â€œ 7:30", room: "A201", sbd: "058", status: "confirmed" },
  { mssv: "2051060067", name: "Ã„Âinh ThÃ¡Â»â€¹ Kim",       dob: "27/08/2003", group: "TN09", subject: "NgoÃ¡ÂºÂ¡i ngÃ¡Â»Â¯ giao tiÃ¡ÂºÂ¿p", session: "Ca 6 Ã¢â‚¬â€œ 19:30", room: "A203", sbd: "067", status: "pending" },
  { mssv: "2051060072", name: "BÃƒÂ¹i QuÃ¡Â»â€˜c KhÃƒÂ¡nh",     dob: "03/12/2002", group: "TN02", subject: "TOEIC",      session: "Ca 1 Ã¢â‚¬â€œ 7:30", room: "A201", sbd: "072", status: "confirmed" },
  { mssv: "2051060089", name: "LÃƒÂ½ ThÃ¡Â»â€¹ Lan",         dob: "16/05/2003", group: "TN04", subject: "VSTEP B1",   session: "Ca 1 Ã¢â‚¬â€œ 7:30", room: "A202", sbd: "089", status: "confirmed" },
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
      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Hero Ã¢â€â‚¬Ã¢â€â‚¬ */}
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
                Tra cÃ¡Â»Â©u
              </span>
              <span className="h-2 w-2 rotate-45 bg-red-500" />
              <span className="hidden h-px w-12 bg-slate-300 sm:block" />
            </div>
            <h1 className="text-[clamp(1.9rem,4vw,3.8rem)] font-black leading-[1.3] tracking-[-0.05em] text-slate-950">
              ThÃƒÂ´ng tin thÃƒÂ­ sinh
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Search form Ã¢â€â‚¬Ã¢â€â‚¬ */}
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
                  MSSV hoÃ¡ÂºÂ·c HÃ¡Â»Â vÃƒÂ  tÃƒÂªn
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="NhÃ¡ÂºÂ­p MSSV hoÃ¡ÂºÂ·c hÃ¡Â»Â tÃƒÂªn thÃƒÂ­ sinh..."
                    className="w-full flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
                  >
                    <i className="bi bi-search" />
                    <span>Tra cÃ¡Â»Â©u</span>
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

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Results Ã¢â€â‚¬Ã¢â€â‚¬ */}
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
                  TÃƒÂ¬m thÃ¡ÂºÂ¥y <span className="font-bold text-slate-900">{results.length}</span> kÃ¡ÂºÂ¿t quÃ¡ÂºÂ£ cho &quot;{submitted}&quot;
                </p>
                <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 md:block">
                  <table className="w-full min-w-[700px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        {["MSSV", "HÃ¡Â»Â vÃƒÂ  tÃƒÂªn", "NgÃƒÂ y sinh", "NhÃƒÂ³m", "MÃƒÂ´n thi", "Ca thi", "PhÃƒÂ²ng", "SBD", "TrÃ¡ÂºÂ¡ng thÃƒÂ¡i"].map((h) => (
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
                              {c.status === "confirmed" ? "Ã„ÂÃƒÂ£ xÃƒÂ¡c nhÃ¡ÂºÂ­n" : "ChÃ¡Â»Â xÃ¡Â»Â­ lÃƒÂ½"}
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
                          {c.status === "confirmed" ? "Ã„ÂÃƒÂ£ xÃƒÂ¡c nhÃ¡ÂºÂ­n" : "ChÃ¡Â»Â xÃ¡Â»Â­ lÃƒÂ½"}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                        <p>NgÃƒÂ y sinh: {c.dob}</p>
                        <p>NhÃƒÂ³m: {c.group}</p>
                        <p>MÃƒÂ´n thi: {c.subject}</p>
                        <p>Ca thi: {c.session}</p>
                        <p>PhÃƒÂ²ng: {c.room}</p>
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
                <p className="mt-3 font-semibold text-slate-700">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y thÃƒÂ´ng tin thÃƒÂ­ sinh</p>
                <p className="mt-1 text-sm text-slate-400">
                  Vui lÃƒÂ²ng kiÃ¡Â»Æ’m tra lÃ¡ÂºÂ¡i MSSV hoÃ¡ÂºÂ·c hÃ¡Â»Â tÃƒÂªn, hoÃ¡ÂºÂ·c liÃƒÂªn hÃ¡Â»â€¡ Trung tÃƒÂ¢m Ã„â€˜Ã¡Â»Æ’ Ã„â€˜Ã†Â°Ã¡Â»Â£c hÃ¡Â»â€” trÃ¡Â»Â£.
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
                      <p className="text-sm font-bold text-slate-900 sm:text-base">KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y thÃƒÂ´ng tin?</p>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-600">
                        NÃ¡ÂºÂ¿u bÃ¡ÂºÂ¡n Ã„â€˜ÃƒÂ£ Ã„â€˜Ã„Æ’ng kÃƒÂ½ nhÃ†Â°ng khÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y thÃƒÂ´ng tin, hÃƒÂ£y liÃƒÂªn hÃ¡Â»â€¡ trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p
                        Trung tÃƒÂ¢m Ã„â€˜Ã¡Â»Æ’ Ã„â€˜Ã†Â°Ã¡Â»Â£c hÃ¡Â»â€” trÃ¡Â»Â£ sÃ¡Â»â€ºm nhÃ¡ÂºÂ¥t.
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://ttcdr.nctu.edu.vn/thisinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:mt-0"
                  >
                    CÃ¡Â»â€¢ng tra cÃ¡Â»Â©u chÃƒÂ­nh thÃ¡Â»Â©c
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


