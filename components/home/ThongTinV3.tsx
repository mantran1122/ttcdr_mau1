"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import {
  BookOpen,
  MessageSquare,
  Dumbbell,
  Headphones,
  Megaphone,
  CalendarDays,
  FileText,
  Bell,
  ArrowRight,
  GraduationCap,
  ClipboardList,
  Clock,
  type LucideIcon,
} from "lucide-react";

/* ─── Constants ─────────────────────────────────────────────── */

const BLUE = "#2453FF";
const EASE = [0.22, 1, 0.36, 1] as const;

const headerItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

const TAG_MAP: Record<string, { bg: string; color: string }> = {
  blue:   { bg: "#DBEAFE", color: "#1D4ED8" },
  gray:   { bg: "#F1F5F9", color: "#64748B" },
  orange: { bg: "#FFF7ED", color: "#EA580C" },
  red:    { bg: "#FEF2F2", color: "#DC2626" },
};

/* ─── Icon config ───────────────────────────────────────────── */

type ThongTinMeta = { Icon: LucideIcon; iconBg: string; iconColor: string };
type CategoryConfig = { keywords: string[]; meta: ThongTinMeta };

const CATEGORY_CONFIGS: CategoryConfig[] = [
  { keywords: ["ielts"],                                meta: { Icon: GraduationCap, iconBg: "#EDE9FE", iconColor: "#7C3AED" } },
  { keywords: ["toeic"],                                meta: { Icon: Headphones,    iconBg: "#F0FDF4", iconColor: "#059669" } },
  { keywords: ["vstep"],                                meta: { Icon: FileText,      iconBg: "#DBEAFE", iconColor: "#2563EB" } },
  { keywords: ["the chat", "the duc"],                  meta: { Icon: Dumbbell,      iconBg: "#FFF7ED", iconColor: "#EA580C" } },
  { keywords: ["ky nang mem"],                          meta: { Icon: MessageSquare, iconBg: "#FFF7ED", iconColor: "#EA580C" } },
  { keywords: ["tot nghiep", "le trao"],                meta: { Icon: GraduationCap, iconBg: "#FFF7ED", iconColor: "#EA580C" } },
  { keywords: ["dieu chinh", "doi lich", "hoan lich"],  meta: { Icon: Megaphone,     iconBg: "#FEF2F2", iconColor: "#DC2626" } },
  { keywords: ["ket qua", "dgnl"],                      meta: { Icon: GraduationCap, iconBg: "#DBEAFE", iconColor: "#2563EB" } },
  { keywords: ["anh van", "tieng anh"],                 meta: { Icon: BookOpen,      iconBg: "#DBEAFE", iconColor: "#2563EB" } },
  { keywords: ["lich hoc", "thoi khoa bieu"],           meta: { Icon: CalendarDays,  iconBg: "#DBEAFE", iconColor: "#2563EB" } },
  { keywords: ["kiem tra", "lich thi", "cuoi ky", "giua ky", "dang ky thi"], meta: { Icon: ClipboardList, iconBg: "#DBEAFE", iconColor: "#2563EB" } },
  { keywords: ["thong bao"],                            meta: { Icon: Bell,          iconBg: "#DBEAFE", iconColor: "#2563EB" } },
];

const DEFAULT_META: ThongTinMeta = { Icon: Bell, iconBg: "#F1F5F9", iconColor: "#64748B" };

function normalizeTitle(title: string): string {
  return title
    .replace(/[đĐ]/g, (c) => (c === "đ" ? "d" : "D"))
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function getThongTinMeta(title: string): ThongTinMeta {
  const normalized = normalizeTitle(title);
  for (const { keywords, meta } of CATEGORY_CONFIGS) {
    if (keywords.some((kw) => normalized.includes(kw))) return meta;
  }
  return DEFAULT_META;
}

/* ─── Data ─────────────────────────────────────────────────── */

const lichHoc = [
  { title: "Lịch học các lớp ANH VĂN 2026",          date: "12/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { title: "Lịch học lớp IELTS Intermediate – K12",   date: "10/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { title: "Lịch học lớp IELTS Intermediate – K13",   date: "10/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { title: "Thời khóa biểu Giáo dục thể chất – HK1", date: "08/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { title: "Lịch học các lớp TOEIC 650+ Online",      date: "05/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { title: "Lịch học các lớp TOEIC 650+ Online",      date: "05/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
];

const lichKiemTra = [
  { title: "Lịch kiểm tra Anh văn – Tin học Đợt 2 – 2024",       tag: "TRUNG TÂM KHẢO THÍ", tagColor: "blue",  dateLabel: "Hạn đăng ký",  date: "15/11/2024", dateRed: true,  href: "/thong-tin/lich-kiem-tra" },
  { title: "Kiểm tra giữa kỳ Triết học Mác–Lênin (Hệ CLC)",      tag: "KHOA LÝ LUẬN",       tagColor: "gray",  dateLabel: "Ngày thi",      date: "20/11/2024", dateRed: false, href: "/thong-tin/lich-kiem-tra" },
  { title: "Lịch thi kết thúc học phần kỹ năng mềm – Khóa 2023", tag: "PHÒNG ĐÀO TẠO",      tagColor: "gray",  dateLabel: "Ngày thi",      date: "25/11/2024", dateRed: false, href: "/thong-tin/lich-kiem-tra" },
  { title: "Thông báo điều chỉnh lịch kiểm tra IELTS Simulation", tag: "QUAN TRỌNG",          tagColor: "red",   dateLabel: "Ngày cập nhật", date: "14/10/2024", dateRed: false, href: "/thong-tin/lich-kiem-tra" },
  { title: "Kiểm tra cuối kỳ VSTEP tháng 12",                     tag: "TRUNG TÂM KHẢO THÍ", tagColor: "blue",  dateLabel: "Ngày thi",      date: "05/12/2024", dateRed: false, href: "/thong-tin/lich-kiem-tra" },
  { title: "Kiểm tra cuối kỳ VSTEP tháng 12",                     tag: "TRUNG TÂM KHẢO THÍ", tagColor: "blue",  dateLabel: "Ngày thi",      date: "05/12/2024", dateRed: false, href: "/thong-tin/lich-kiem-tra" },
];

const thongBao = [
  { title: "Kết quả kỳ thi ĐGNL tiếng Anh – Khung NLNN 6 bậc",      tag: "THÔNG BÁO",  tagColor: "blue",   dateLabel: "Ngày đăng", date: "02/06/2023", dateRed: false, href: "/thong-tin/thong-bao" },
  { title: "Lễ trao bằng tốt nghiệp K3, K4 và liên thông 2016–2020", tag: "SỰ KIỆN",    tagColor: "orange", dateLabel: "Ngày đăng", date: "03/11/2020", dateRed: false, href: "/thong-tin/thong-bao" },
  { title: "THÔNG BÁO VỀ LỊCH HỌC CÁC LỚP BUỔI TỐI",                tag: "THÔNG BÁO",  tagColor: "blue",   dateLabel: "Ngày đăng", date: "24/03/2020", dateRed: false, href: "/thong-tin/thong-bao" },
  { title: "THÔNG BÁO TIẾP TỤC DỜI LỊCH HỌC (BUỔI TỐI)",            tag: "QUAN TRỌNG", tagColor: "red",    dateLabel: "Ngày đăng", date: "15/02/2020", dateRed: false, href: "/thong-tin/thong-bao" },
  { title: "Thông báo đăng ký thi VSTEP tháng 12",                    tag: "THÔNG BÁO",  tagColor: "blue",   dateLabel: "Ngày đăng", date: "20/11/2024", dateRed: false, href: "/thong-tin/thong-bao" },
  { title: "Thông báo đăng ký thi VSTEP tháng 12",                    tag: "THÔNG BÁO",  tagColor: "blue",   dateLabel: "Ngày đăng", date: "20/11/2024", dateRed: false, href: "/thong-tin/thong-bao" },
];

/* ─── WiggleLink ────────────────────────────────────────────── */

function WiggleLink({ href, className, style, children }: { href: string; className: string; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <Link href={href} className={`wiggle-icon ${className}`} style={style}>
      {children}
    </Link>
  );
}

/* ─── Tab ───────────────────────────────────────────────────── */

function UnderlineTab({
  label,
  active,
  onClick,
  href,
}: {
  label: string;
  active: boolean;
  onClick?: () => void;
  href?: string;
}) {
  const tabClassName = "pb-3 text-[11px] font-bold uppercase tracking-wider transition-colors duration-200 sm:text-[13px]";
  const tabStyle = {
    color: active ? BLUE : "#94A3B8",
    borderBottom: active ? `2px solid ${BLUE}` : "2px solid transparent",
  };

  if (href) {
    return (
      <Link href={href} className={tabClassName} style={tabStyle}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={tabClassName} style={tabStyle}>
      {label}
    </button>
  );
}

/* ─── CTA button with fill animation ───────────────────────── */

function CtaBtn({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative mt-4 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3.5"
      style={{ background: "#F0F7FF", border: "1px solid #DBEAFE" }}
    >
      <span
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 rounded-2xl transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        style={{ background: BLUE }}
      />
      <span className="relative z-10 text-[14px] font-semibold text-slate-700 transition-colors delay-[100ms] duration-[200ms] group-hover:text-white">
        {text}
      </span>
      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/10 transition-colors delay-[1000ms] duration-[200ms] group-hover:bg-white">
        <ArrowRight
          size={15}
          strokeWidth={2.2}
          className="transition-transform delay-[1000ms] duration-[250ms] group-hover:translate-x-0.5"
          style={{ color: BLUE }}
        />
      </span>
    </Link>
  );
}

/* ─── Reveal wrapper ────────────────────────────────────────── */

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */

export default function ThongTinV3() {
  const [leftTab, setLeftTab]   = useState<"tkb" | "hd">("tkb");
  const [rightTab, setRightTab] = useState<"lkt" | "tb">("tb");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.35 });
  const leftCtaHref  = leftTab  === "hd"  ? "/huong-dan-dang-ky"        : "/thong-tin/thoi-khoa-bieu";
  const rightCtaHref = rightTab === "lkt" ? "/thong-tin/lich-kiem-tra"  : "/thong-tin/thong-bao";

  return (
    <section className="relative overflow-hidden pt-4 pb-28 bg-background">
      <style>{`
        @keyframes wiggle-shake {
          0%,100% { transform: rotate(0deg); }
          20%      { transform: rotate(-7deg); }
          40%      { transform: rotate(7deg); }
          60%      { transform: rotate(-7deg); }
          80%      { transform: rotate(7deg); }
        }
        .wiggle-icon:hover,
        .wiggle-icon:active,
        .wiggle-icon:focus-visible {
          animation: wiggle-shake 0.45s ease-in-out;
        }
      `}</style>

      {/* ══ Decoratives ══════════════════════════════════════════ */}

      <div
        className="pointer-events-none absolute -left-32 top-0 hidden h-[380px] w-[380px] rounded-full lg:block"
        style={{ background: "radial-gradient(circle, #BAE6FD 0%, #E0F2FE 55%, transparent 80%)", opacity: 0.65 }}
      />

      <svg className="pointer-events-none absolute left-16 top-28 hidden lg:block" width="180" height="120" viewBox="0 0 180 120" fill="none">
        <path d="M10 110 C40 60, 120 40, 170 10" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" />
      </svg>

      <div className="absolute top-[42%] z-20 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex" style={{ width: 120, left: "max(1rem, calc(50vw - 760px))" }}>
        <WiggleLink href="/thong-tin/thoi-khoa-bieu" className="relative flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-2xl bg-white shadow-lg" style={{ border: "1px solid #DBEAFE" }}>
          <CalendarDays size={42} color={BLUE} strokeWidth={1.4} />
          <div className="pointer-events-none absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-400" />
        </WiggleLink>
        <WiggleLink href="/thong-tin/thoi-khoa-bieu" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md" style={{ border: "1px solid #DBEAFE" }}>
          <Clock size={20} color="#EA580C" strokeWidth={1.6} />
        </WiggleLink>
        <div className="pointer-events-none h-2.5 w-2.5 rounded-full" style={{ background: "#93C5FD" }} />
      </div>

      <div className="absolute top-[46%] z-20 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex" style={{ width: 120, right: "max(1rem, calc(50vw - 760px))" }}>
        <WiggleLink href="/thong-tin/thong-bao" className="flex h-[76px] w-[76px] cursor-pointer items-center justify-center rounded-2xl bg-white shadow-lg" style={{ border: "1px solid #DBEAFE" }}>
          <Bell size={36} color={BLUE} strokeWidth={1.4} />
        </WiggleLink>
        <WiggleLink href="/thong-tin/lich-kiem-tra" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-md" style={{ border: "1px solid #DBEAFE" }}>
          <GraduationCap size={24} color="#059669" strokeWidth={1.5} />
        </WiggleLink>
        <WiggleLink href="/thong-tin/lich-kiem-tra" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md" style={{ border: "1px solid #DBEAFE" }}>
          <ClipboardList size={20} color="#EA580C" strokeWidth={1.5} />
        </WiggleLink>
      </div>

      <div className="pointer-events-none absolute right-20 top-12 hidden h-14 w-14 rounded-full lg:block" style={{ border: "2px solid #6EE7B7", opacity: 0.7 }} />
      <div className="pointer-events-none absolute right-36 top-16 hidden h-3 w-3 rounded-full lg:block" style={{ background: "#34D399" }} />
      <div className="pointer-events-none absolute right-8 top-[30%] hidden h-8 w-20 rounded-full lg:block" style={{ background: "#FEF3C7", border: "1px solid #FDE68A" }} />
      <div
        className="pointer-events-none absolute right-[8%] top-[55%] hidden h-[120px] w-[120px] lg:block"
        style={{ backgroundImage: "radial-gradient(circle, #93C5FD 1.5px, transparent 1.5px)", backgroundSize: "16px 16px", opacity: 0.55 }}
      />
      <div className="pointer-events-none absolute left-[20%] top-[14%] hidden h-2 w-2 rounded-full lg:block" style={{ background: "#93C5FD" }} />
      <div className="pointer-events-none absolute right-[22%] bottom-[18%] hidden h-2.5 w-2.5 rounded-full lg:block" style={{ background: "#6EE7B7" }} />
      <div className="pointer-events-none absolute left-[30%] bottom-[12%] hidden h-2 w-2 rounded-full lg:block" style={{ background: "#FCD34D" }} />

      <svg className="pointer-events-none absolute bottom-24 right-[15%] hidden lg:block" width="160" height="100" viewBox="0 0 160 100" fill="none">
        <path d="M150 10 C120 50, 40 60, 10 90" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" />
      </svg>

      {/* ══ Content ══════════════════════════════════════════════ */}
      <div className="container relative z-10 mx-auto px-4">

        {/* ── Header ── */}
        <Reveal delay={0}>
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            className="mb-14 text-center"
          >
            <motion.div variants={headerItem} className="mb-6">
              <SectionTitle title="Cập nhật mới nhất" />
            </motion.div>

            <motion.h2
              variants={headerItem}
              className="relative inline-block font-medium leading-[1.35] tracking-[-0.04em]"
              style={{ fontSize: "50px", color: "#0B1A3B" }}
            >
              Thông tin &amp; Lịch học
              <svg className="absolute -right-6 -top-3 hidden sm:block" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#FBBF24" />
              </svg>
            </motion.h2>

            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#fd9393" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#fd9393" }} />
              <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#fd9393" }} />
            </div>
          </motion.div>
        </Reveal>

        {/* ── Cards ── */}
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">

          {/* LEFT card */}
          <Reveal delay={0.1} className="flex">
            <div
              className="flex w-full flex-col rounded-[24px] bg-white p-4 sm:rounded-[32px] sm:p-8"
              style={{ border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 8px 50px rgba(15,23,42,0.07)" }}
            >
              <div className="mb-1 flex items-center gap-4">
                <div className="flex gap-3 sm:gap-6">
                  <UnderlineTab label="Thời khóa biểu" active={leftTab === "tkb"} onClick={() => setLeftTab("tkb")} />
                  <UnderlineTab label="Hướng dẫn" active={false} href="/huong-dan-dang-ky" />
                </div>
              </div>

              <div className="mb-2 h-px w-full bg-slate-100" />

              <div className="flex-1 divide-y divide-slate-100">
                {lichHoc.map((item, i) => {
                  const { Icon, iconBg, iconColor } = getThongTinMeta(item.title);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: EASE }}
                      className="flex items-center gap-3 py-3 sm:gap-4 sm:py-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11" style={{ background: iconBg }}>
                        <Icon size={17} color={iconColor} strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium leading-snug text-slate-900 sm:text-[14.5px]">{item.title}</p>
                        <Link href={item.href} className="mt-0.5 text-[11px] font-semibold sm:text-[12px]" style={{ color: BLUE }}>
                          Chi tiết và Phụ lục ↗
                        </Link>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[9px] font-medium uppercase tracking-widest text-red-400 sm:text-[10px]">Mới</p>
                        <p className="mt-0.5 text-[12px] font-medium text-slate-700 sm:text-[13px]">{item.date}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <CtaBtn text="Xem thêm" href={leftCtaHref} />
            </div>
          </Reveal>

          {/* RIGHT card */}
          <Reveal delay={0.2} className="flex">
            <div
              className="flex w-full flex-col rounded-[24px] bg-white p-4 sm:rounded-[32px] sm:p-8"
              style={{ border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 8px 50px rgba(15,23,42,0.07)" }}
            >
              <div className="mb-1 flex items-center gap-4">
                <div className="flex gap-3 sm:gap-6">
                  <UnderlineTab label="Lịch kiểm tra" active={rightTab === "lkt"} onClick={() => setRightTab("lkt")} />
                  <UnderlineTab label="Thông báo"     active={rightTab === "tb"}  onClick={() => setRightTab("tb")} />
                </div>
              </div>

              <div className="mb-2 h-px w-full bg-slate-100" />

              <div className="flex-1 divide-y divide-slate-100">
                {(rightTab === "lkt" ? lichKiemTra : thongBao).map((item, i) => {
                  const { Icon, iconBg, iconColor } = getThongTinMeta(item.title);
                  const tagStyle = TAG_MAP[item.tagColor] ?? TAG_MAP.blue;
                  return (
                    <motion.div
                      key={`${rightTab}-${i}`}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.07, ease: EASE }}
                      className="flex items-center gap-3 py-3 sm:gap-4 sm:py-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11" style={{ background: iconBg }}>
                        <Icon size={17} color={iconColor} strokeWidth={1.7} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-[13px] font-medium leading-snug text-slate-900 sm:text-[14.5px]">{item.title}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400 sm:text-[10px]">{item.dateLabel}</p>
                        <p className="mt-0.5 text-[12px] font-medium sm:text-[13px]" style={{ color: item.dateRed ? "#DC2626" : "#334155" }}>{item.date}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <CtaBtn text="Xem thêm" href={rightCtaHref} />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
