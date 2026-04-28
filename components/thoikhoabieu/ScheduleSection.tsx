"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type ClassEntry = {
  subject: string;
  group: string;
  room: string;
  type: "ngoaingu" | "tinhoc" | "kynangmem" | "ai" | "kynang";
};

type DaySchedule = {
  holiday?: string;
  ca1?: ClassEntry;
  ca2?: ClassEntry;
  ca3?: ClassEntry;
  ca4?: ClassEntry;
  ca5?: ClassEntry;
  ca6?: ClassEntry;
};

type WeekData = {
  label: string;
  dates: string;
  note?: string;
  schedule: Record<string, DaySchedule>;
};

const DAYS = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

const SESSIONS: { key: keyof DaySchedule; label: string; time: string }[] = [
  { key: "ca1", label: "Ca 1", time: "7:30 – 9:30" },
  { key: "ca2", label: "Ca 2", time: "9:30 – 11:30" },
  { key: "ca3", label: "Ca 3", time: "13:30 – 15:30" },
  { key: "ca4", label: "Ca 4", time: "15:30 – 17:30" },
  { key: "ca5", label: "Ca 5", time: "17:30 – 19:30" },
  { key: "ca6", label: "Ca 6", time: "19:30 – 21:30" },
];

const TYPE_STYLES: Record<ClassEntry["type"], string> = {
  ngoaingu: "bg-blue-50 border-blue-200 text-blue-800",
  tinhoc: "bg-green-50 border-green-200 text-green-800",
  kynangmem: "bg-teal-50 border-teal-200 text-teal-800",
  ai: "bg-orange-50 border-orange-200 text-orange-800",
  kynang: "bg-amber-50 border-amber-200 text-amber-800",
};

const TYPE_DOT: Record<ClassEntry["type"], string> = {
  ngoaingu: "bg-blue-400",
  tinhoc: "bg-green-400",
  kynangmem: "bg-teal-400",
  ai: "bg-orange-400",
  kynang: "bg-amber-400",
};

const WEEKS: WeekData[] = [
  {
    label: "Tuần 32",
    dates: "28/04 – 03/05/2025",
    note: "Nghỉ lễ 30/04 – 01/05 (Thứ 3, Thứ 4, Thứ 5)",
    schedule: {
      "Thứ 2": {
        ca1: { subject: "TOEIC Cơ bản", group: "Nhóm TN01", room: "A201", type: "ngoaingu" },
        ca3: { subject: "Tin học IC3", group: "Nhóm TH05", room: "Lab01", type: "tinhoc" },
        ca5: { subject: "Kỹ năng mềm", group: "Nhóm KN02", room: "A101", type: "kynangmem" },
      },
      "Thứ 3": { holiday: "Nghỉ lễ 30/04" },
      "Thứ 4": { holiday: "Nghỉ lễ 30/04" },
      "Thứ 5": { holiday: "Nghỉ lễ Quốc tế Lao động" },
      "Thứ 6": {
        ca2: { subject: "VSTEP B1", group: "Nhóm TN03", room: "A202", type: "ngoaingu" },
        ca4: { subject: "AI cơ bản", group: "Nhóm AI02", room: "Lab02", type: "ai" },
        ca5: { subject: "Kỹ năng nghề nghiệp", group: "Nhóm KN06", room: "A101", type: "kynang" },
      },
      "Thứ 7": {
        ca1: { subject: "TOEIC Tăng tốc", group: "Nhóm TN10", room: "A201", type: "ngoaingu" },
        ca2: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Tin học Văn phòng", group: "Nhóm TH04", room: "Lab01", type: "tinhoc" },
      },
    },
  },
  {
    label: "Tuần 33",
    dates: "05/05 – 10/05/2025",
    schedule: {
      "Thứ 2": {
        ca1: { subject: "TOEIC Cơ bản", group: "Nhóm TN01", room: "A201", type: "ngoaingu" },
        ca2: { subject: "VSTEP B1", group: "Nhóm TN03", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Tin học IC3", group: "Nhóm TH05", room: "Lab01", type: "tinhoc" },
        ca5: { subject: "Kỹ năng mềm", group: "Nhóm KN02", room: "A101", type: "kynangmem" },
      },
      "Thứ 3": {
        ca2: { subject: "TOEIC Nâng cao", group: "Nhóm TN07", room: "A201", type: "ngoaingu" },
        ca4: { subject: "AI cơ bản", group: "Nhóm AI02", room: "Lab02", type: "ai" },
        ca6: { subject: "Ngoại ngữ giao tiếp", group: "Nhóm TN09", room: "A203", type: "ngoaingu" },
      },
      "Thứ 4": {
        ca1: { subject: "Tin học MOS", group: "Nhóm TH01", room: "Lab01", type: "tinhoc" },
        ca3: { subject: "Kỹ năng nghề nghiệp", group: "Nhóm KN06", room: "A101", type: "kynang" },
        ca5: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
      },
      "Thứ 5": {
        ca2: { subject: "TOEIC Cơ bản", group: "Nhóm TN02", room: "A201", type: "ngoaingu" },
        ca4: { subject: "Tin học nâng cao", group: "Nhóm TH07", room: "Lab01", type: "tinhoc" },
        ca6: { subject: "AI & Ứng dụng", group: "Nhóm AI05", room: "Lab02", type: "ai" },
      },
      "Thứ 6": {
        ca1: { subject: "VSTEP B1", group: "Nhóm TN04", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Kỹ năng mềm", group: "Nhóm KN03", room: "A101", type: "kynangmem" },
        ca5: { subject: "Tin học IC3", group: "Nhóm TH06", room: "Lab01", type: "tinhoc" },
      },
      "Thứ 7": {
        ca1: { subject: "TOEIC Tăng tốc", group: "Nhóm TN10", room: "A201", type: "ngoaingu" },
        ca2: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Tin học Văn phòng", group: "Nhóm TH04", room: "Lab01", type: "tinhoc" },
        ca4: { subject: "AI cơ bản", group: "Nhóm AI01", room: "Lab02", type: "ai" },
      },
    },
  },
  {
    label: "Tuần 34",
    dates: "12/05 – 17/05/2025",
    schedule: {
      "Thứ 2": {
        ca1: { subject: "TOEIC Cơ bản", group: "Nhóm TN01", room: "A201", type: "ngoaingu" },
        ca3: { subject: "Tin học IC3", group: "Nhóm TH05", room: "Lab01", type: "tinhoc" },
        ca4: { subject: "Kỹ năng nghề nghiệp", group: "Nhóm KN06", room: "A101", type: "kynang" },
        ca5: { subject: "Kỹ năng mềm", group: "Nhóm KN02", room: "B101", type: "kynangmem" },
      },
      "Thứ 3": {
        ca1: { subject: "VSTEP B1", group: "Nhóm TN04", room: "A202", type: "ngoaingu" },
        ca2: { subject: "TOEIC Nâng cao", group: "Nhóm TN07", room: "A201", type: "ngoaingu" },
        ca5: { subject: "AI cơ bản", group: "Nhóm AI02", room: "Lab02", type: "ai" },
      },
      "Thứ 4": {
        ca1: { subject: "Tin học MOS", group: "Nhóm TH01", room: "Lab01", type: "tinhoc" },
        ca3: { subject: "TOEIC Cơ bản", group: "Nhóm TN02", room: "A201", type: "ngoaingu" },
        ca5: { subject: "Ngoại ngữ giao tiếp", group: "Nhóm TN09", room: "A203", type: "ngoaingu" },
      },
      "Thứ 5": {
        ca2: { subject: "Tin học nâng cao", group: "Nhóm TH07", room: "Lab01", type: "tinhoc" },
        ca3: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
        ca6: { subject: "AI & Ứng dụng", group: "Nhóm AI05", room: "Lab02", type: "ai" },
      },
      "Thứ 6": {
        ca1: { subject: "TOEIC Tăng tốc", group: "Nhóm TN10", room: "A201", type: "ngoaingu" },
        ca3: { subject: "Kỹ năng mềm", group: "Nhóm KN03", room: "A101", type: "kynangmem" },
        ca5: { subject: "Tin học IC3", group: "Nhóm TH06", room: "Lab01", type: "tinhoc" },
      },
      "Thứ 7": {
        ca1: { subject: "TOEIC Tăng tốc", group: "Nhóm TN10", room: "A201", type: "ngoaingu" },
        ca2: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Tin học Văn phòng", group: "Nhóm TH04", room: "Lab01", type: "tinhoc" },
        ca4: { subject: "AI cơ bản", group: "Nhóm AI01", room: "Lab02", type: "ai" },
        ca5: { subject: "Kỹ năng nghề nghiệp", group: "Nhóm KN08", room: "A101", type: "kynang" },
      },
    },
  },
];

const LEGEND = [
  { type: "ngoaingu" as const, label: "Ngoại ngữ" },
  { type: "tinhoc" as const, label: "Tin học" },
  { type: "kynangmem" as const, label: "Kỹ năng mềm" },
  { type: "ai" as const, label: "AI" },
  { type: "kynang" as const, label: "Kỹ năng nghề nghiệp" },
];

function ClassCell({ entry }: { entry: ClassEntry }) {
  return (
    <div
      className={[
        "rounded-xl border px-2 py-2 text-[11px] leading-snug sm:text-xs",
        TYPE_STYLES[entry.type],
      ].join(" ")}
    >
      <p className="font-bold">{entry.subject}</p>
      <p className="mt-0.5 opacity-75">{entry.group}</p>
      <p className="mt-0.5 flex items-center gap-1 opacity-75">
        <i className="bi bi-door-open text-[10px]" />
        {entry.room}
      </p>
    </div>
  );
}

export default function ScheduleSection() {
  const [weekIndex, setWeekIndex] = useState(0);
  const week = WEEKS[weekIndex];

  return (
    <section className="pb-10 pt-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mx-auto max-w-5xl"
        >
          {/* Week selector */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {WEEKS.map((w, i) => (
              <button
                key={w.label}
                onClick={() => setWeekIndex(i)}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                  i === weekIndex
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-red-300",
                ].join(" ")}
              >
                {w.label}
                <span className="ml-1.5 hidden text-[11px] font-normal opacity-75 sm:inline">
                  ({w.dates})
                </span>
              </button>
            ))}
          </div>

          {/* Week info bar */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-900/5">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <i className="bi bi-calendar-week text-red-600" />
              <span className="font-semibold">{week.label}</span>
              <span className="text-slate-400">·</span>
              <span>{week.dates}</span>
            </div>
            {week.note && (
              <span className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                ⚠ {week.note}
              </span>
            )}
          </div>

          {/* Legend */}
          <div className="mb-4 flex flex-wrap gap-2">
            {LEGEND.map((l) => (
              <span
                key={l.type}
                className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
              >
                <span className={["h-2 w-2 rounded-full", TYPE_DOT[l.type]].join(" ")} />
                {l.label}
              </span>
            ))}
          </div>

          {/* Schedule table */}
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="w-[110px] px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Ca học
                  </th>
                  {DAYS.map((d) => (
                    <th
                      key={d}
                      className="px-2 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-700"
                    >
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SESSIONS.map((session, si) => (
                  <tr
                    key={session.key}
                    className={si % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    {/* Session label */}
                    <td className="border-r border-slate-100 px-3 py-3">
                      <p className="text-xs font-bold text-slate-800">{session.label}</p>
                      <p className="text-[10px] text-slate-400">{session.time}</p>
                    </td>

                    {/* Each day cell */}
                    {DAYS.map((day) => {
                      const dayData = week.schedule[day] ?? {};
                      const entry = dayData[session.key] as ClassEntry | undefined;
                      const isHoliday = !!dayData.holiday;

                      if (isHoliday && si === 0) {
                        return (
                          <td
                            key={day}
                            rowSpan={SESSIONS.length}
                            className="border-l border-slate-100 px-2 py-3 text-center align-middle"
                          >
                            <span className="inline-block rounded-xl bg-slate-100 px-3 py-2 text-[11px] font-semibold text-slate-500">
                              <i className="bi bi-calendar-x mr-1" />
                              {dayData.holiday}
                            </span>
                          </td>
                        );
                      }

                      if (isHoliday) return null;

                      return (
                        <td key={day} className="border-l border-slate-100 px-2 py-2 align-top">
                          {entry ? <ClassCell entry={entry} /> : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-right text-[11px] text-slate-400">
            * Thời khóa biểu có thể thay đổi. Vui lòng kiểm tra thông báo từ Trung tâm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
