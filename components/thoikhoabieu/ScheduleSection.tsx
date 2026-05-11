"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const MONTH_VI = [
  "Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
  "Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12",
];
const DOW_VI = ["T2","T3","T4","T5","T6","T7","CN"];

function getCalendarCells(year: number, month: number): (string | null)[] {
  const firstDow = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (string | null)[] = Array(firstDow).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(`${year}-${String(month).padStart(2,"0")}-${String(d).padStart(2,"0")}`);
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function isoToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_CONTAINER_CLASS = "container mx-auto px-4 sm:px-6 lg:px-8";
const COLUMN_WIDTH_PX = {
  session: 140,
  day: 168,
} as const;
const TABLE_HEIGHT_PX = {
  header: 60,
  row: 122,
} as const;
const GRID_LINE_CLASS = "border-slate-300";

const DOW_NAME_MAP: Record<number, string> = {
  1: "Thứ 2", 2: "Thứ 3", 3: "Thứ 4", 4: "Thứ 5", 5: "Thứ 6", 6: "Thứ 7",
};

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

const SESSIONS: { key: keyof DaySchedule; label: string; time: string }[] = [
  { key: "ca1", label: "Ca 1", time: "7:30 – 9:30" },
  { key: "ca2", label: "Ca 2", time: "9:30 – 11:30" },
  { key: "ca3", label: "Ca 3", time: "13:30 – 15:30" },
  { key: "ca4", label: "Ca 4", time: "15:30 – 17:30" },
  { key: "ca5", label: "Ca 5", time: "17:30 – 19:30" },
  { key: "ca6", label: "Ca 6", time: "19:30 – 21:30" },
];
const TABLE_MIN_HEIGHT_PX =
  TABLE_HEIGHT_PX.header + TABLE_HEIGHT_PX.row * SESSIONS.length;

const TYPE_STYLES: Record<ClassEntry["type"], string> = {
  ngoaingu: "bg-blue-50 border-blue-400 text-blue-800",
  tinhoc: "bg-green-50 border-green-400 text-green-800",
  kynangmem: "bg-teal-50 border-teal-400 text-teal-800",
  ai: "bg-orange-50 border-orange-400 text-orange-800",
  kynang: "bg-amber-50 border-amber-400 text-amber-800",
};

const TYPE_DOT: Record<ClassEntry["type"], string> = {
  ngoaingu: "bg-blue-400",
  tinhoc: "bg-green-400",
  kynangmem: "bg-teal-400",
  ai: "bg-orange-400",
  kynang: "bg-amber-400",
};

const CLASS_CELL_BASE_CLASS =
  "flex h-full min-w-0 flex-col justify-center rounded-l-none rounded-r-xl border-l-4 px-3 py-3 text-xs leading-snug sm:text-[13px]";

const WEEKS: WeekData[] = [
  {
    label: "Tuần 32",
    dates: "27/04 – 02/05/2026",
    note: "Nghỉ lễ 30/04 – 01/05 (Thứ 5, Thứ 6)",
    schedule: {
      "Thứ 2": {
        ca1: { subject: "TOEIC Cơ bản", group: "Nhóm TN01", room: "A201", type: "ngoaingu" },
        ca3: { subject: "Tin học IC3", group: "Nhóm TH05", room: "Lab01", type: "tinhoc" },
        ca5: { subject: "Kỹ năng mềm", group: "Nhóm KN02", room: "A101", type: "kynangmem" },
      },
      "Thứ 3": {
        ca2: { subject: "TOEIC Nâng cao", group: "Nhóm TN07", room: "A201", type: "ngoaingu" },
        ca4: { subject: "AI cơ bản", group: "Nhóm AI02", room: "Lab02", type: "ai" },
      },
      "Thứ 4": {
        ca1: { subject: "Tin học MOS", group: "Nhóm TH01", room: "Lab01", type: "tinhoc" },
        ca3: { subject: "VSTEP B1", group: "Nhóm TN03", room: "A202", type: "ngoaingu" },
      },
      "Thứ 5": { holiday: "Nghỉ lễ 30/04" },
      "Thứ 6": { holiday: "Nghỉ lễ Quốc tế Lao động" },
      "Thứ 7": {
        ca1: { subject: "TOEIC Tăng tốc", group: "Nhóm TN10", room: "A201", type: "ngoaingu" },
        ca2: { subject: "VSTEP B2", group: "Nhóm TN08", room: "A202", type: "ngoaingu" },
        ca3: { subject: "Tin học Văn phòng", group: "Nhóm TH04", room: "Lab01", type: "tinhoc" },
      },
    },
  },
  {
    label: "Tuần 33",
    dates: "04/05 – 09/05/2026",
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
    dates: "11/05 – 16/05/2026",
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

function makeLocalDate(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function parseWeekDates(rangeText: string): { start: Date; end: Date } | null {
  const match = rangeText.match(/(\d{2})\/(\d{2})\s*[–-]\s*(\d{2})\/(\d{2})\/(\d{4})/);
  if (!match) return null;

  const startDay = Number(match[1]);
  const startMonth = Number(match[2]);
  const endDay = Number(match[3]);
  const endMonth = Number(match[4]);
  const endYear = Number(match[5]);
  const startYear = startMonth > endMonth ? endYear - 1 : endYear;

  return {
    start: makeLocalDate(startYear, startMonth, startDay),
    end: makeLocalDate(endYear, endMonth, endDay),
  };
}

function parseIsoDate(value: string): Date | null {
  if (!value) return null;

  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;

  const date = makeLocalDate(y, m, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
    return null;
  }

  return date;
}

function formatIsoDate(value: string): string {
  const date = parseIsoDate(value);
  if (!date) return "";

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

type DisplayDay = {
  iso: string;
  shortDate: string; // "28/04"
  dayName: string;   // "Thứ 2"
  dayData: DaySchedule;
  weekNote?: string;
};

function makeIsoStr(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function findWeekForDate(date: Date): WeekData | undefined {
  const t = date.getTime();
  return WEEKS.find((w) => {
    const r = parseWeekDates(w.dates);
    return r ? t >= r.start.getTime() && t <= r.end.getTime() : false;
  });
}

function buildDisplayDays(fromIso: string, toIso: string): DisplayDay[] {
  let from = parseIsoDate(fromIso);
  let to = toIso ? parseIsoDate(toIso) : from;

  if (!from) {
    // Default: week containing today, else nearest upcoming week, else first week
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const currentWeek =
      findWeekForDate(today) ??
      WEEKS.find((w) => { const r = parseWeekDates(w.dates); return r ? r.start >= today : false; }) ??
      WEEKS[0];
    const r = parseWeekDates(currentWeek.dates);
    if (!r) return [];
    from = r.start;
    to = r.end;
  }

  const days: DisplayDay[] = [];
  const cur = new Date(from!);
  while (cur <= to!) {
    const dow = cur.getDay();
    const dayName = DOW_NAME_MAP[dow];
    if (dayName) {
      const week = findWeekForDate(cur);
      const dd = String(cur.getDate()).padStart(2, "0");
      const mm = String(cur.getMonth() + 1).padStart(2, "0");
      days.push({
        iso: makeIsoStr(cur),
        shortDate: `${dd}/${mm}`,
        dayName,
        dayData: week?.schedule[dayName] ?? {},
        weekNote: week?.note,
      });
    }
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

const QUICK_LABELS = ["Ngày", "Tuần", "Tháng"] as const;
type QuickLabel = (typeof QUICK_LABELS)[number];

function getDataReferenceDate(): Date {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  if (findWeekForDate(today)) return today;
  // Fall back to end of the last available week in data
  const last = WEEKS[WEEKS.length - 1];
  return parseWeekDates(last.dates)?.end ?? today;
}

function getQuickFilterDates(type: QuickLabel): { from: string; to: string } {
  const ref = getDataReferenceDate();
  if (type === "Ngày") {
    const iso = makeIsoStr(ref);
    return { from: iso, to: iso };
  }
  if (type === "Tuần") {
    const dow = (ref.getDay() + 6) % 7;
    const mon = new Date(ref); mon.setDate(ref.getDate() - dow);
    const sat = new Date(mon); sat.setDate(mon.getDate() + 5);
    return { from: makeIsoStr(mon), to: makeIsoStr(sat) };
  }
  const first = new Date(ref.getFullYear(), ref.getMonth(), 1, 12);
  const last  = new Date(ref.getFullYear(), ref.getMonth() + 1, 0, 12);
  return { from: makeIsoStr(first), to: makeIsoStr(last) };
}

function ClassCell({ entry }: { entry: ClassEntry }) {
  return (
    <div className={[CLASS_CELL_BASE_CLASS, TYPE_STYLES[entry.type]].join(" ")}>
      <p className="truncate text-sm font-bold leading-tight sm:text-[15px]" title={entry.subject}>
        {entry.subject}
      </p>
      <p className="mt-0.5 truncate opacity-75" title={entry.group}>
        {entry.group}
      </p>
      <p className="mt-0.5 flex min-w-0 items-center gap-1 opacity-75">
        <i className="bi bi-door-open shrink-0 text-[10px]" />
        <span className="truncate" title={entry.room}>
          {entry.room}
        </span>
      </p>
    </div>
  );
}

export default function ScheduleSection() {
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [appliedFromDate, setAppliedFromDate] = useState("");
  const [appliedToDate, setAppliedToDate] = useState("");
  const [draftFromDate, setDraftFromDate] = useState("");
  const [draftToDate, setDraftToDate] = useState("");
  const [hoverDate, setHoverDate] = useState("");
  const popoverRef = useRef<HTMLDivElement>(null);
  const tableScrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const defaultCalDate = useMemo(() => {
    const first = parseWeekDates(WEEKS[0].dates);
    return first ? first.start : new Date();
  }, []);
  const [calYear, setCalYear] = useState(defaultCalDate.getFullYear());
  const [calMonth, setCalMonth] = useState(defaultCalDate.getMonth() + 1);

  useEffect(() => {
    if (!showDateFilter) return;
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowDateFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDateFilter]);

  function openFilter() {
    setDraftFromDate(appliedFromDate);
    setDraftToDate(appliedToDate);
    setHoverDate("");
    if (appliedFromDate) {
      const [y, m] = appliedFromDate.split("-").map(Number);
      setCalYear(y);
      setCalMonth(m);
    } else {
      setCalYear(defaultCalDate.getFullYear());
      setCalMonth(defaultCalDate.getMonth() + 1);
    }
    setShowDateFilter((prev) => !prev);
  }

  function prevMonth() {
    if (calMonth === 1) { setCalYear((y) => y - 1); setCalMonth(12); }
    else setCalMonth((m) => m - 1);
  }

  function nextMonth() {
    if (calMonth === 12) { setCalYear((y) => y + 1); setCalMonth(1); }
    else setCalMonth((m) => m + 1);
  }

  function handleDayClick(iso: string) {
    if (!draftFromDate || (draftFromDate && draftToDate)) {
      setDraftFromDate(iso);
      setDraftToDate("");
      setHoverDate("");
    } else {
      const [a, b] = iso < draftFromDate ? [iso, draftFromDate] : [draftFromDate, iso];
      setDraftFromDate(a);
      setDraftToDate(b);
      setHoverDate("");
    }
  }

  // Effective range (draft + hover preview)
  const effectiveTo = draftFromDate && !draftToDate ? hoverDate : draftToDate;
  const rangeA = draftFromDate && effectiveTo
    ? (draftFromDate <= effectiveTo ? draftFromDate : effectiveTo)
    : draftFromDate;
  const rangeB = draftFromDate && effectiveTo
    ? (draftFromDate <= effectiveTo ? effectiveTo : draftFromDate)
    : draftFromDate;
  const hasRange = rangeA && rangeB && rangeA !== rangeB;

  const calendarCells = getCalendarCells(calYear, calMonth);
  const todayIso = isoToday();

  const displayDays = useMemo(
    () => buildDisplayDays(appliedFromDate, appliedToDate),
    [appliedFromDate, appliedToDate],
  );

  const [activeQuick, setActiveQuick] = useState<number>(-1);

  function onTableMouseDown(e: React.MouseEvent) {
    const el = tableScrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  }
  function onTableMouseMove(e: React.MouseEvent) {
    if (!drag.current.active) return;
    e.preventDefault();
    const el = tableScrollRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX);
  }
  function onTableMouseEnd() {
    drag.current.active = false;
    if (tableScrollRef.current) tableScrollRef.current.style.cursor = "grab";
  }

  function handleQuickFilter(idx: number) {
    const { from, to } = getQuickFilterDates(QUICK_LABELS[idx]);
    setAppliedFromDate(from);
    setAppliedToDate(to);
    setActiveQuick(idx);
  }

  const hasActiveFilter = appliedFromDate || appliedToDate;

  const [selectedTypes, setSelectedTypes] = useState<Set<ClassEntry["type"]>>(new Set());

  function toggleType(type: ClassEntry["type"]) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type); else next.add(type);
      return next;
    });
  }

  // Collect unique notes from displayed days
  const visibleNotes = useMemo(() => {
    const seen = new Set<string>();
    return displayDays
      .map((d) => d.weekNote)
      .filter((n): n is string => !!n && !seen.has(n) && !!seen.add(n));
  }, [displayDays]);

  const tableMinWidth = COLUMN_WIDTH_PX.session + COLUMN_WIDTH_PX.day * displayDays.length;

  return (
    <section className="pb-10 pt-4">
      <div className={PAGE_CONTAINER_CLASS}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="w-full"
        >
          {/* Toolbar: calendar filter + quick filters + legend */}
          <div className="mb-4 flex w-full items-center gap-2">
            <div className="relative" ref={popoverRef}>
              <button
                type="button"
                onClick={openFilter}
                className={[
                  "relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 transition",
                  showDateFilter ? "ring-red-400" : "ring-slate-200 hover:ring-red-300",
                ].join(" ")}
                aria-expanded={showDateFilter}
              >
                <CalendarDays size={26} className="text-red-600" />
                {hasActiveFilter && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                )}
              </button>

              {showDateFilter && (
                <div className="absolute left-0 top-full z-30 mt-2 w-[280px] rounded-xl bg-white shadow-lg ring-1 ring-slate-200">
                  {/* Month navigation */}
                  <div className="flex items-center justify-between px-3 pt-3 pb-2">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
                    >
                      <ChevronLeft size={15} />
                    </button>
                    <span className="text-sm font-semibold text-slate-700">
                      {MONTH_VI[calMonth - 1]} {calYear}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
                    >
                      <ChevronRight size={15} />
                    </button>
                  </div>

                  {/* Day-of-week headers */}
                  <div className="grid grid-cols-7 px-2">
                    {DOW_VI.map((d) => (
                      <div key={d} className="flex h-7 items-center justify-center text-[10px] font-semibold text-slate-400">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div
                    className="grid grid-cols-7 px-2 pb-2"
                    onMouseLeave={() => setHoverDate("")}
                  >
                    {calendarCells.map((iso, idx) => {
                      if (!iso) return <div key={idx} className="h-9" />;

                      const isA = iso === rangeA;
                      const isB = iso === rangeB && hasRange;
                      const inRange = hasRange ? iso > rangeA && iso < rangeB : false;
                      const isToday = iso === todayIso;

                      const leftBg = isB || inRange;
                      const rightBg = (isA && !!hasRange) || inRange;

                      return (
                        <div key={iso} className="relative flex h-9 items-center justify-center">
                          {/* Range background stripes */}
                          <div className={["absolute left-0 top-1/2 h-7 w-1/2 -translate-y-1/2", leftBg ? "bg-red-100" : ""].join(" ")} />
                          <div className={["absolute right-0 top-1/2 h-7 w-1/2 -translate-y-1/2", rightBg ? "bg-red-100" : ""].join(" ")} />
                          {/* Day button */}
                          <button
                            type="button"
                            onClick={() => handleDayClick(iso)}
                            onMouseEnter={() => { if (draftFromDate && !draftToDate) setHoverDate(iso); }}
                            className={[
                              "relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs transition-colors",
                              isA || isB
                                ? "bg-red-600 font-semibold text-white"
                                : isToday
                                  ? "font-semibold text-red-600 ring-1 ring-red-400 hover:bg-red-50"
                                  : "text-slate-700 hover:bg-red-50",
                            ].join(" ")}
                          >
                            {parseInt(iso.split("-")[2], 10)}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer: selected range + actions */}
                  <div className="border-t border-slate-100 px-3 py-2.5">
                    <p className="mb-2 text-[11px] text-slate-500">
                      {draftFromDate || draftToDate
                        ? `${draftFromDate ? formatIsoDate(draftFromDate) : "..."} → ${draftToDate ? formatIsoDate(draftToDate) : "..."}`
                        : "Chọn ngày bắt đầu"}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => { setDraftFromDate(""); setDraftToDate(""); setHoverDate(""); }}
                        className="flex-1 rounded-md py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50"
                      >
                        Xóa
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAppliedFromDate(draftFromDate);
                          setAppliedToDate(draftToDate);
                          setActiveQuick(-1);
                          setShowDateFilter(false);
                        }}
                        className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                      >
                        Lọc
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick filters segmented control */}
            <div className="flex items-center rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200">
              {QUICK_LABELS.map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleQuickFilter(idx)}
                  className="relative px-3 py-1.5 text-xs font-semibold"
                >
                  {activeQuick === idx && (
                    <motion.div
                      layoutId="quick-pill"
                      className="absolute inset-0 rounded-lg bg-slate-100"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className={["relative z-10", activeQuick === idx ? "text-slate-800" : "text-slate-500 hover:text-slate-700"].join(" ")}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div>
              <details className="group relative w-fit">
                <summary className={["flex h-10 cursor-pointer list-none items-center gap-1.5 rounded-xl bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm ring-1 hover:ring-red-300 [&::-webkit-details-marker]:hidden", selectedTypes.size > 0 ? "ring-red-300" : "ring-slate-200"].join(" ")}>
                  <i className="bi bi-info-circle text-[11px] text-red-600" />
                  Chú thích
                  {selectedTypes.size > 0 && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                      {selectedTypes.size}
                    </span>
                  )}
                  <i className="bi bi-chevron-down text-[10px] text-slate-400" />
                </summary>
                <div className="absolute right-0 top-full z-30 mt-2 w-[228px] rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-200">
                  <div className="flex flex-col gap-1.5">
                    {LEGEND.map((legendItem) => {
                      const active = selectedTypes.has(legendItem.type);
                      return (
                        <button
                          key={legendItem.type}
                          type="button"
                          onClick={() => toggleType(legendItem.type)}
                          className={[
                            "flex w-full items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium ring-1 transition-colors",
                            active
                              ? `${TYPE_STYLES[legendItem.type]} ring-current`
                              : "bg-slate-50 text-slate-500 ring-slate-200 hover:bg-slate-100",
                          ].join(" ")}
                        >
                          <span className={["h-2 w-2 shrink-0 rounded-full", TYPE_DOT[legendItem.type]].join(" ")} />
                          <span className="flex-1 text-left">{legendItem.label}</span>
                          {active && <span className="text-[10px] opacity-70">✓</span>}
                        </button>
                      );
                    })}
                    {selectedTypes.size > 0 && (
                      <button
                        type="button"
                        onClick={() => setSelectedTypes(new Set())}
                        className="mt-0.5 w-full rounded-lg py-1 text-[11px] font-semibold text-slate-400 hover:text-slate-600"
                      >
                        Bỏ lọc môn
                      </button>
                    )}
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Info bar: filter range + holiday notes */}
          {(hasActiveFilter || visibleNotes.length > 0) && (
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {hasActiveFilter && (
                <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                  <CalendarDays size={12} className="shrink-0 text-red-500" />
                  {appliedFromDate ? formatIsoDate(appliedFromDate) : "..."} – {appliedToDate ? formatIsoDate(appliedToDate) : "..."}
                  <button
                    type="button"
                    onClick={() => { setAppliedFromDate(""); setAppliedToDate(""); setActiveQuick(-1); }}
                    className="ml-0.5 text-slate-400 hover:text-slate-600"
                    title="Xóa bộ lọc"
                  >
                    ×
                  </button>
                </span>
              )}
              {visibleNotes.map((note) => (
                <span key={note} className="rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                  ⚠ {note}
                </span>
              ))}
            </div>
          )}

          {/* Schedule table */}
          {displayDays.length === 0 ? (
            <div className="rounded-xl bg-white px-4 py-6 text-center text-sm text-slate-500 shadow-sm ring-1 ring-slate-200">
              Không có lịch trong khoảng ngày đã chọn.
            </div>
          ) : (
            <div
              ref={tableScrollRef}
              className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 cursor-grab select-none"
              onMouseDown={onTableMouseDown}
              onMouseMove={onTableMouseMove}
              onMouseUp={onTableMouseEnd}
              onMouseLeave={onTableMouseEnd}
            >
              <table
                className="w-full table-fixed border-collapse"
                style={{
                  minWidth: `${tableMinWidth}px`,
                  minHeight: `${TABLE_MIN_HEIGHT_PX}px`,
                }}
              >
                <colgroup>
                  <col style={{ width: `${COLUMN_WIDTH_PX.session}px`, minWidth: `${COLUMN_WIDTH_PX.session}px` }} />
                  {displayDays.map((d) => (
                    <col key={d.iso} style={{ minWidth: `${COLUMN_WIDTH_PX.day}px` }} />
                  ))}
                </colgroup>
                <thead>
                  <tr
                    className={`border-b-2 ${GRID_LINE_CLASS}`}
                    style={{ height: `${TABLE_HEIGHT_PX.header}px` }}
                  >
                    <th className={`sticky left-0 z-20 bg-white px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-[2px_0_4px_-1px_rgba(0,0,0,0.06)]`}>
                      Ca học
                    </th>
                    {displayDays.map((d) => (
                      <th
                        key={d.iso}
                        className={`border-l ${GRID_LINE_CLASS} px-2 py-2 text-center`}
                      >
                        <p className="text-xs font-bold text-slate-700">{d.dayName}</p>
                        <p className="text-[11px] text-slate-400">{d.shortDate}</p>
                        {d.dayData.holiday && (
                          <p className="mt-0.5 text-[10px] font-semibold text-amber-600">Nghỉ lễ</p>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SESSIONS.map((session, sessionIndex) => {
                    const rowBg = sessionIndex % 2 === 0 ? "bg-white" : "bg-slate-50";
                    return (
                      <tr
                        key={session.key}
                        className={[rowBg, sessionIndex > 0 ? `border-t ${GRID_LINE_CLASS}` : ""].join(" ")}
                        style={{ height: `${TABLE_HEIGHT_PX.row}px` }}
                      >
                        <td className={`sticky left-0 z-10 ${rowBg} border-r ${GRID_LINE_CLASS} px-3 py-3 align-middle shadow-[2px_0_4px_-1px_rgba(0,0,0,0.06)]`}>
                          <p className="text-xs font-bold text-slate-800">{session.label}</p>
                          <p className="text-[10px] text-slate-400">{session.time}</p>
                        </td>
                        {displayDays.map((d) => {
                          if (d.dayData.holiday) {
                            if (sessionIndex === 0) {
                              return (
                                <td
                                  key={d.iso}
                                  rowSpan={SESSIONS.length}
                                  className={`border-l ${GRID_LINE_CLASS} px-2 py-3 text-center align-middle`}
                                >
                                  <span className="inline-block rounded-xl bg-slate-100 px-3 py-2 text-[11px] font-semibold text-slate-500">
                                    <i className="bi bi-calendar-x mr-1" />
                                    {d.dayData.holiday}
                                  </span>
                                </td>
                              );
                            }
                            return null;
                          }
                          const entry = d.dayData[session.key] as ClassEntry | undefined;
                          const visible = entry && (selectedTypes.size === 0 || selectedTypes.has(entry.type));
                          return (
                            <td key={d.iso} className={`border-l ${GRID_LINE_CLASS} px-2 py-2 align-middle`}>
                              {visible ? <ClassCell entry={entry!} /> : null}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-3 text-right text-[11px] text-slate-400">
            * Thời khóa biểu có thể thay đổi. Vui lòng kiểm tra thông báo từ Trung tâm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
