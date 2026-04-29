"use client";

import { useState } from "react";
import {
  Calendar,
  BookOpen,
  GraduationCap,
  FileText,
  Megaphone,
  BarChart2,
  Bell,
  ArrowDown,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────── */

const scheduleRows = [
  { icon: Calendar,      title: "Lịch học các lớp ANH VĂN 2026",           date: "12/10/2024" },
  { icon: BookOpen,      title: "Lịch học lớp IELTS Intermediate – K12",    date: "10/10/2024" },
  { icon: GraduationCap, title: "Thời khóa biểu Giáo dục thể chất – HK1",  date: "08/10/2024" },
  { icon: FileText,      title: "Lịch học các lớp TOEIC 650+ Online",       date: "05/10/2024" },
];

const announcementRows = [
  {
    icon: Megaphone,
    title: "Kết quả kỳ thi ĐGNL tiếng Anh – Khung NLNN 6 bậc",
    tag: "THÔNG BÁO",
    tagColor: { bg: "#EFF6FF", text: "#1D4ED8" },
    date: "02/06/2023",
  },
  {
    icon: BarChart2,
    title: "Lễ trao bằng tốt nghiệp K3, K4 và liên thông 2016–2020",
    tag: "SỰ KIỆN",
    tagColor: { bg: "#FFF7ED", text: "#C2410C" },
    date: "03/11/2020",
  },
  {
    icon: Bell,
    title: "THÔNG BÁO VỀ LỊCH HỌC CÁC LỚP BUỔI TỐI",
    tag: "THÔNG BÁO",
    tagColor: { bg: "#EFF6FF", text: "#1D4ED8" },
    date: "24/03/2020",
  },
];

const BLUE = "#1557FF";
const BLUE_PILL = "linear-gradient(135deg, #1248E8 0%, #1557FF 100%)";

/* ─── Sub-components ──────────────────────────────────────── */

function TabPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-5 py-2 text-[13px] font-bold uppercase tracking-wide transition-all duration-200"
      style={
        active
          ? { background: BLUE_PILL, color: "#fff", boxShadow: "0 4px 14px rgba(21,87,255,0.32)" }
          : { background: "#F1F5F9", color: "#64748B" }
      }
    >
      {label}
    </button>
  );
}

function CtaRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <button
      className="mt-5 flex w-full items-center gap-4 rounded-full px-5 py-3.5 text-left transition-all hover:shadow-md"
      style={{
        background: "#F8FAFF",
        border: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "inset 0 1px 2px rgba(15,23,42,0.04)",
      }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ background: BLUE_PILL }}
      >
        <Icon size={16} color="#fff" strokeWidth={2} />
      </span>
      <span className="flex-1 text-[14px] font-semibold text-slate-700">{text}</span>
    </button>
  );
}

/* ─── Section ─────────────────────────────────────────────── */

export default function ThongTinV2() {
  const [leftTab, setLeftTab]   = useState<"tkb" | "hd">("tkb");
  const [rightTab, setRightTab] = useState<"lkt" | "tb">("tb");

  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#F8FAFF" }}>

      {/* ── Decorative shapes ── */}

      {/* Top-left blob */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 hidden h-[320px] w-[320px] rounded-full lg:block"
        style={{ background: "linear-gradient(135deg, #1248E8 0%, #3B82F6 100%)", opacity: 0.92 }}
      />
      {/* Top-left inner ring (white circle overlap) */}
      <div
        className="pointer-events-none absolute -left-4 top-8 hidden h-[200px] w-[200px] rounded-full lg:block"
        style={{ background: "#fff", opacity: 0.95 }}
      />
      {/* Top-left ring inside white */}
      <div
        className="pointer-events-none absolute left-12 top-20 hidden h-[100px] w-[100px] items-center justify-center rounded-full lg:flex"
        style={{ background: "linear-gradient(135deg, #1248E8 0%, #3B82F6 100%)" }}
      >
        <div className="h-[56px] w-[56px] rounded-full bg-white/30" />
      </div>

      {/* Bottom-left large partial circle */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 hidden h-[340px] w-[340px] rounded-full lg:block"
        style={{ background: "linear-gradient(135deg, #1248E8 0%, #3B82F6 100%)", opacity: 0.88 }}
      />
      {/* Bottom-left quarter cut white */}
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 hidden h-[220px] w-[220px] rounded-full lg:block"
        style={{ background: "#F8FAFF" }}
      />

      {/* Orange dots */}
      <div className="pointer-events-none absolute left-[18%] top-[8%] hidden h-3 w-3 rounded-full lg:block" style={{ background: "#FF5A2C" }} />
      <div className="pointer-events-none absolute bottom-[20%] right-[6%] hidden h-2.5 w-2.5 rounded-full lg:block" style={{ background: "#FF5A2C" }} />

      {/* Blue dots */}
      <div className="pointer-events-none absolute right-[3%] top-[12%] hidden h-5 w-5 rounded-full lg:block" style={{ background: BLUE }} />
      <div className="pointer-events-none absolute left-[24%] bottom-[8%] hidden h-3 w-3 rounded-full lg:block" style={{ background: BLUE }} />

      {/* Top-right graduation cap capsule */}
      <div
        className="pointer-events-none absolute right-8 top-8 hidden h-16 w-[120px] items-center justify-center gap-3 rounded-full lg:flex"
        style={{ background: "#fff", boxShadow: "0 4px 20px rgba(15,23,42,0.10)", border: "1px solid rgba(15,23,42,0.06)" }}
      >
        <GraduationCap size={28} color={BLUE} />
      </div>

      {/* Bottom-right ring */}
      <div
        className="pointer-events-none absolute bottom-16 right-8 hidden h-[100px] w-[100px] rounded-full lg:block"
        style={{ border: "3px solid rgba(21,87,255,0.18)" }}
      />
      <div
        className="pointer-events-none absolute bottom-24 right-16 hidden h-[60px] w-[60px] rounded-full lg:block"
        style={{ border: "2px solid rgba(21,87,255,0.10)" }}
      />

      {/* Dotted grid right */}
      <div
        className="pointer-events-none absolute right-[10%] top-[30%] hidden h-[160px] w-[160px] lg:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(21,87,255,0.25) 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Dashed curved line */}
      <svg className="pointer-events-none absolute left-[12%] top-[45%] hidden lg:block" width="200" height="60" viewBox="0 0 200 60" fill="none">
        <path d="M0 50 C50 10, 140 50, 200 10" stroke="#1557FF" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" opacity="0.3" />
      </svg>

      {/* ── Content ── */}
      <div className="container relative z-10 mx-auto px-4">

        {/* Header */}
        <div className="mb-14 text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="hidden h-px w-16 sm:block" style={{ background: BLUE, opacity: 0.4 }} />
            <span className="h-2 w-2 rounded-full" style={{ background: "#FF5A2C" }} />
            <span className="text-[14px] font-semibold" style={{ color: BLUE }}>Cập nhật mới nhất</span>
            <span className="h-2 w-2 rounded-full" style={{ background: "#FF5A2C" }} />
            <div className="hidden h-px w-16 sm:block" style={{ background: BLUE, opacity: 0.4 }} />
          </div>

          {/* Title */}
          <h2
            className="font-black leading-[1.08] tracking-[-0.04em] text-slate-950"
            style={{ fontSize: "clamp(44px, 7vw, 84px)" }}
          >
            Thông tin{" "}
            <span
              className="inline-flex h-[1em] w-[1em] items-center justify-center rounded-full align-middle text-white"
              style={{
                background: BLUE_PILL,
                fontSize: "0.72em",
                boxShadow: "0 4px 16px rgba(21,87,255,0.4)",
                verticalAlign: "middle",
              }}
            >
              &amp;
            </span>{" "}
            Lịch học
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-7 lg:grid-cols-2 lg:items-stretch">

          {/* LEFT card */}
          <div
            className="flex flex-col rounded-[32px] bg-white p-7"
            style={{ border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 8px 48px rgba(15,23,42,0.07)" }}
          >
            {/* Tab row */}
            <div className="mb-6 flex items-center gap-2">
              <TabPill label="Thời khóa biểu" active={leftTab === "tkb"} onClick={() => setLeftTab("tkb")} />
              <TabPill label="Hướng dẫn"      active={leftTab === "hd"}  onClick={() => setLeftTab("hd")} />
              <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-slate-100">
                <MoreHorizontal size={18} color="#94A3B8" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 divide-y divide-slate-100">
              {scheduleRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-center gap-4 py-4">
                    {/* Icon badge */}
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#EFF6FF" }}
                    >
                      <Icon size={20} color={BLUE} strokeWidth={1.7} />
                    </span>

                    {/* Title + link */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-bold leading-snug text-slate-900">{row.title}</p>
                      <a href="#" className="mt-0.5 text-[12.5px] font-medium" style={{ color: BLUE }}>
                        Chi tiết và Phụ lục ↗
                      </a>
                    </div>

                    {/* Date */}
                    <div className="shrink-0 text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Ngày cập nhật</p>
                      <p className="mt-0.5 text-[13px] font-bold text-slate-700">{row.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <CtaRow icon={ArrowDown} text="Xem tất cả thời khóa biểu & hướng dẫn" />
          </div>

          {/* RIGHT card */}
          <div
            className="flex flex-col rounded-[32px] bg-white p-7"
            style={{ border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 8px 48px rgba(15,23,42,0.07)" }}
          >
            {/* Tab row */}
            <div className="mb-6 flex items-center gap-2">
              <TabPill label="Lịch kiểm tra" active={rightTab === "lkt"} onClick={() => setRightTab("lkt")} />
              <TabPill label="Thông báo"     active={rightTab === "tb"}  onClick={() => setRightTab("tb")} />
              <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-slate-100">
                <MoreHorizontal size={18} color="#94A3B8" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 divide-y divide-slate-100">
              {announcementRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-center gap-4 py-4">
                    {/* Icon badge */}
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#EFF6FF" }}
                    >
                      <Icon size={20} color={BLUE} strokeWidth={1.7} />
                    </span>

                    {/* Title + tag */}
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-[15px] font-bold leading-snug text-slate-900">{row.title}</p>
                      <span
                        className="mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                        style={{ background: row.tagColor.bg, color: row.tagColor.text }}
                      >
                        {row.tag}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="shrink-0 text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Ngày đăng</p>
                      <p className="mt-0.5 text-[13px] font-bold text-slate-700">{row.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <CtaRow icon={ArrowRight} text="Xem tất cả thông báo & lịch kiểm tra" />
          </div>

        </div>
      </div>
    </section>
  );
}
