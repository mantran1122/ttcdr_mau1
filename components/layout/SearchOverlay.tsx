"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

type SearchItem = {
  id: string;
  category: "thisinh" | "kqthi" | "thongbao" | "tkb" | "huongdan" | "vstep";
  title: string;
  description: string;
  meta: string;
  href: string;
  badge?: string;
  badgeColor?: "green" | "red" | "blue" | "amber" | "slate";
};

const CATEGORY_LABEL: Record<SearchItem["category"], string> = {
  thisinh:  "Thí sinh",
  kqthi:    "Kết quả thi",
  thongbao: "Thông báo",
  tkb:      "Thời khóa biểu",
  huongdan: "Hướng dẫn",
  vstep:    "VSTEP",
};

const CATEGORY_COLOR: Record<SearchItem["category"], string> = {
  thisinh:  "#2563EB",
  kqthi:    "#059669",
  thongbao: "#DC2626",
  tkb:      "#7C3AED",
  huongdan: "#EA580C",
  vstep:    "#0284C7",
};

const INDEX: SearchItem[] = [
  { id: "ts-001", category: "thisinh", title: "Nguyễn Văn An – MSSV 2051060001",     description: "Thí sinh đã xác nhận tham dự kỳ thi TOEIC ca 1 (07:30), phòng P.201, SBD TS001. Nhóm CĐR-01.", meta: "Ca 1 · Phòng P.201 · 12/03/2002", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-002", category: "thisinh", title: "Trần Thị Bình – MSSV 2051060002",     description: "Thí sinh đã xác nhận tham dự kỳ thi TOEIC ca 1 (07:30), phòng P.201, SBD TS002. Nhóm CĐR-01.", meta: "Ca 1 · Phòng P.201 · 05/07/2002", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-003", category: "thisinh", title: "Lê Văn Cường – MSSV 2051060015",      description: "Thí sinh đã xác nhận tham dự kỳ thi VSTEP B1 ca 2 (13:00), phòng P.305, SBD TS015. Nhóm CĐR-02.", meta: "Ca 2 · Phòng P.305 · 21/01/2001", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-004", category: "thisinh", title: "Phạm Thị Dung – MSSV 2051060023",     description: "Thí sinh chờ xác nhận tham dự kỳ thi VSTEP B1 ca 2 (13:00), phòng P.305, SBD TS023. Nhóm CĐR-02.", meta: "Ca 2 · Phòng P.305 · 09/11/2002", href: "/thisinh", badge: "Chờ xác nhận", badgeColor: "amber" },
  { id: "ts-005", category: "thisinh", title: "Hoàng Minh Đức – MSSV 2051060031",    description: "Thí sinh đã xác nhận tham dự kỳ thi TOEIC ca 1 (07:30), phòng P.202, SBD TS031. Nhóm CĐR-03.", meta: "Ca 1 · Phòng P.202 · 30/06/2001", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-006", category: "thisinh", title: "Vũ Thị Hà – MSSV 2051060044",         description: "Thí sinh đã xác nhận tham dự kỳ thi VSTEP B2 ca 2 (13:00), phòng P.306, SBD TS044. Nhóm CĐR-03.", meta: "Ca 2 · Phòng P.306 · 14/02/2002", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-007", category: "thisinh", title: "Ngô Thanh Hùng – MSSV 2051060058",    description: "Thí sinh chờ xác nhận tham dự kỳ thi TOEIC ca 1 (07:30), phòng P.203, SBD TS058. Nhóm CĐR-04.", meta: "Ca 1 · Phòng P.203 · 28/08/2001", href: "/thisinh", badge: "Chờ xác nhận", badgeColor: "amber" },
  { id: "ts-008", category: "thisinh", title: "Đinh Thị Kim – MSSV 2051060067",      description: "Thí sinh đã xác nhận tham dự kỳ thi VSTEP B1 ca 2 (13:00), phòng P.307, SBD TS067. Nhóm CĐR-04.", meta: "Ca 2 · Phòng P.307 · 17/04/2002", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-009", category: "thisinh", title: "Bùi Quốc Khánh – MSSV 2051060072",    description: "Thí sinh đã xác nhận tham dự kỳ thi TOEIC ca 1 (07:30), phòng P.204, SBD TS072. Nhóm CĐR-05.", meta: "Ca 1 · Phòng P.204 · 03/09/2001", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "ts-010", category: "thisinh", title: "Lý Thị Lan – MSSV 2051060089",        description: "Thí sinh đã xác nhận tham dự kỳ thi VSTEP B1 ca 2 (13:00), phòng P.308, SBD TS089. Nhóm CĐR-05.", meta: "Ca 2 · Phòng P.308 · 22/12/2002", href: "/thisinh", badge: "Đã xác nhận", badgeColor: "green"  },
  { id: "kq-001", category: "kqthi", title: "Kết quả TOEIC – Nguyễn Văn An (2051060001)",    description: "Điểm 650 · Bậc B2 · Đạt chuẩn đầu ra. Chứng chỉ số TOEIC-2025-0001, kỳ thi ngày 15/03/2025.", meta: "15/03/2025 · TOEIC · B2", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-002", category: "kqthi", title: "Kết quả TOEIC – Trần Thị Bình (2051060002)",    description: "Điểm 495 · Bậc B1 · Đạt chuẩn đầu ra. Chứng chỉ số TOEIC-2025-0002, kỳ thi ngày 15/03/2025.", meta: "15/03/2025 · TOEIC · B1", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-003", category: "kqthi", title: "Kết quả VSTEP B1 – Lê Văn Cường (2051060015)",  description: "Điểm 7.5 · Bậc B1 · Đạt chuẩn đầu ra. Chứng chỉ số VSTEP-2025-0015, kỳ thi ngày 12/04/2025.", meta: "12/04/2025 · VSTEP B1 · B1", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-004", category: "kqthi", title: "Kết quả VSTEP B1 – Phạm Thị Dung (2051060023)", description: "Điểm 5.0 · Bậc A2 · Chưa đạt chuẩn đầu ra. Cần đăng ký thi lại kỳ tiếp theo.", meta: "12/04/2025 · VSTEP B1 · A2", href: "/kqthi", badge: "Chưa đạt", badgeColor: "red" },
  { id: "kq-005", category: "kqthi", title: "Kết quả TOEIC – Hoàng Minh Đức (2051060031)",   description: "Điểm 730 · Bậc B2 · Đạt chuẩn đầu ra. Chứng chỉ số TOEIC-2025-0031, kỳ thi ngày 15/03/2025.", meta: "15/03/2025 · TOEIC · B2", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-006", category: "kqthi", title: "Kết quả VSTEP B2 – Vũ Thị Hà (2051060044)",     description: "Điểm 8.0 · Bậc B2 · Đạt chuẩn đầu ra. Chứng chỉ số VSTEP-2025-0044, kỳ thi ngày 12/04/2025.", meta: "12/04/2025 · VSTEP B2 · B2", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-007", category: "kqthi", title: "Kết quả TOEIC – Ngô Thanh Hùng (2051060058)",   description: "Điểm 420 · Bậc A2 · Chưa đạt chuẩn đầu ra. Cần đăng ký thi lại kỳ tiếp theo.", meta: "15/03/2025 · TOEIC · A2", href: "/kqthi", badge: "Chưa đạt", badgeColor: "red" },
  { id: "kq-008", category: "kqthi", title: "Kết quả VSTEP B1 – Đinh Thị Kim (2051060067)",   description: "Điểm 6.5 · Bậc B1 · Đạt chuẩn đầu ra. Chứng chỉ số VSTEP-2025-0067, kỳ thi ngày 12/04/2025.", meta: "12/04/2025 · VSTEP B1 · B1", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-009", category: "kqthi", title: "Kết quả TOEIC – Bùi Quốc Khánh (2051060072)",   description: "Điểm 560 · Bậc B1 · Đạt chuẩn đầu ra. Chứng chỉ số TOEIC-2025-0072, kỳ thi ngày 15/03/2025.", meta: "15/03/2025 · TOEIC · B1", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "kq-010", category: "kqthi", title: "Kết quả VSTEP B1 – Lý Thị Lan (2051060089)",     description: "Điểm 7.0 · Bậc B1 · Đạt chuẩn đầu ra. Chứng chỉ số VSTEP-2025-0089, kỳ thi ngày 12/04/2025.", meta: "12/04/2025 · VSTEP B1 · B1", href: "/kqthi", badge: "Đạt", badgeColor: "green" },
  { id: "tb-001", category: "thongbao", title: "Kết quả kỳ thi ĐGNL tiếng Anh – Khung NLNN 6 bậc", description: "Trung tâm thông báo kết quả kỳ thi đánh giá năng lực ngoại ngữ theo khung 6 bậc của Việt Nam. Sinh viên tra cứu tại cổng thông tin.", meta: "02/06/2023", href: "/thong-tin/thong-bao" },
  { id: "tb-002", category: "thongbao", title: "Thông báo về lịch học các lớp buổi tối",            description: "Các lớp học buổi tối điều chỉnh lịch theo quyết định của Ban Giám hiệu.", meta: "24/03/2020", href: "/thong-tin/thong-bao" },
  { id: "tb-003", category: "thongbao", title: "Thông báo đăng ký thi VSTEP tháng 12",              description: "Trung tâm mở đăng ký thi VSTEP đợt tháng 12/2024. Sinh viên đủ điều kiện nộp hồ sơ trước ngày 30/11/2024.", meta: "20/11/2024", href: "/thong-tin/thong-bao" },
  { id: "tb-004", category: "thongbao", title: "Lễ trao bằng tốt nghiệp K3, K4 và liên thông 2020",  description: "Trung tâm phối hợp tổ chức lễ trao bằng tốt nghiệp cho các khóa K3, K4 và hệ liên thông 2016–2020.", meta: "03/11/2020", href: "/thong-tin/thong-bao" },
  { id: "tkb-001", category: "tkb", title: "Lịch học các lớp Anh văn 2026",          description: "Thời khóa biểu chính thức các lớp Anh văn học kỳ 1 năm 2026.", meta: "12/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { id: "tkb-002", category: "tkb", title: "Lịch học lớp IELTS Intermediate – K12",   description: "Thời khóa biểu lớp IELTS Intermediate dành cho sinh viên khóa 12.", meta: "10/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { id: "tkb-003", category: "tkb", title: "Lịch học lớp IELTS Intermediate – K13",   description: "Thời khóa biểu lớp IELTS Intermediate dành cho sinh viên khóa 13.", meta: "10/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { id: "tkb-004", category: "tkb", title: "Lịch học các lớp TOEIC 650+ Online",      description: "Lịch học trực tuyến các lớp TOEIC mục tiêu 650+ kỳ 2 năm 2024.", meta: "05/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { id: "tkb-005", category: "tkb", title: "Thời khóa biểu Giáo dục thể chất – HK1", description: "Lịch học Giáo dục thể chất học kỳ 1 năm học 2024–2025.", meta: "08/10/2024", href: "/thong-tin/thoi-khoa-bieu" },
  { id: "hd-001", category: "huongdan", title: "Hướng dẫn đăng ký học phần chuẩn đầu ra",     description: "Quy trình đăng ký các học phần bắt buộc về chuẩn đầu ra ngoại ngữ và tin học.", meta: "Cập nhật 2024", href: "/huong-dan-dang-ky" },
  { id: "hd-002", category: "huongdan", title: "Điều kiện dự thi và miễn thi chuẩn đầu ra",   description: "Các điều kiện để sinh viên được đăng ký dự thi hoặc được xét miễn thi chuẩn đầu ra.", meta: "Cập nhật 2024", href: "/huong-dan-dang-ky" },
  { id: "hd-003", category: "huongdan", title: "Hướng dẫn nộp chứng chỉ ngoại ngữ thay thế",  description: "Sinh viên có chứng chỉ IELTS, TOEIC, VSTEP có thể nộp thay thế kỳ thi chuẩn đầu ra.", meta: "Cập nhật 2024", href: "/huong-dan-dang-ky" },
  { id: "vs-001", category: "vstep", title: "Lịch thi VSTEP tháng 12/2024",    description: "Lịch kiểm tra VSTEP đợt tháng 12. Địa điểm tổ chức tại Trường Đại học Nam Cần Thơ.", meta: "Tháng 12/2024", href: "https://vstep.nctu.edu.vn/lich-thi/" },
  { id: "vs-002", category: "vstep", title: "Kế hoạch thi VSTEP năm 2025",      description: "Kế hoạch tổ chức các đợt thi VSTEP trong năm 2025.", meta: "Năm 2025", href: "https://vstep.nctu.edu.vn/ke-hoach-nam/" },
  { id: "vs-003", category: "vstep", title: "Thông báo VSTEP – Điều chỉnh lịch", description: "Trung tâm VSTEP thông báo điều chỉnh lịch thi một số đợt do sắp xếp phòng thi.", meta: "10/2024", href: "https://vstep.nctu.edu.vn/thong-bao-vstep/" },
];

const BADGE_COLORS = {
  green: "bg-green-50 text-green-700 ring-green-200",
  red:   "bg-red-50   text-red-600   ring-red-200",
  blue:  "bg-blue-50  text-blue-700  ring-blue-200",
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  slate: "bg-slate-100 text-slate-500 ring-slate-200",
};

const SUGGESTIONS = ["TOEIC", "VSTEP", "Lịch thi", "Đăng ký", "Thông báo", "IELTS"];

function runSearch(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.meta.toLowerCase().includes(q)
  );
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} className="rounded bg-yellow-100 px-0.5 text-yellow-900 not-italic">{part}</mark>
      : part
  );
}

function ResultCard({ item, query, index }: { item: SearchItem; query: string; index: number; onClose: () => void }) {
  const catColor = CATEGORY_COLOR[item.category];
  const badgeCls = item.badgeColor ? BADGE_COLORS[item.badgeColor] : "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: EASE }}
    >
      <Link
        href={item.href}
        className="group flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/[0.06] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-900/10 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white" style={{ background: catColor }}>
            {CATEGORY_LABEL[item.category]}
          </span>
          {item.badge && (
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ring-1 ${badgeCls}`}>{item.badge}</span>
          )}
          <span className="ml-auto text-[12px] text-slate-400">{item.meta}</span>
        </div>
        <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#ED1F25] sm:text-[16px]">
          {highlight(item.title, query)}
        </h3>
        <p className="line-clamp-2 text-[13px] leading-relaxed text-slate-500 sm:text-[14px]">
          {highlight(item.description, query)}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-[12px] text-slate-300">{item.href.replace("https://", "")}</span>
          <span className="flex items-center gap-1 text-[12px] font-semibold text-slate-400 transition-colors group-hover:text-[#ED1F25]">
            Xem chi tiết
            <i className="bi bi-arrow-right text-[13px] transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery]         = useState("");
  const [submitted, setSubmitted] = useState("");
  const [filter, setFilter]       = useState<SearchItem["category"] | "all">("all");
  const inputRef   = useRef<HTMLInputElement>(null);
  const compactRef = useRef<HTMLInputElement>(null);
  const hasSearched = submitted !== "";

  // Focus & scroll lock
  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 80);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const handleClose = useCallback(() => {
    setQuery(""); setSubmitted(""); setFilter("all");
    onClose();
  }, [onClose]);

  const doSearch = useCallback(() => {
    if (!query.trim()) return;
    setSubmitted(query);
    setFilter("all");
  }, [query]);

  const clearSearch = () => {
    setQuery(""); setSubmitted(""); setFilter("all");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const allResults = runSearch(submitted);
  const categories = [...new Set(allResults.map((r) => r.category))];
  const results    = filter === "all" ? allResults : allResults.filter((r) => r.category === filter);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="fixed inset-0 z-[200] overflow-y-auto bg-background"
        >

          {/* ── STATE 1: Hero ── */}
          <AnimatePresence>
            {!hasSearched && (
              <motion.div
                key="hero"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-24"
              >
                {/* X button */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Đóng tìm kiếm"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 sm:right-6 sm:top-6"
                >
                  <i className="bi bi-x-lg text-[18px]" />
                </button>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="mb-10 flex flex-col items-center gap-3 text-center"
                >
                  <h1
                    className="text-[28px] font-black tracking-[-0.03em] text-slate-900 sm:text-[34px]"
                    style={{ fontFamily: "'Google Sans Flex', sans-serif" }}
                  >
                    Tìm kiếm
                  </h1>
                </motion.div>

                {/* Search bar */}
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
                  className="w-full max-w-[600px]"
                >
                  <form
                    onSubmit={(e) => { e.preventDefault(); doSearch(); }}
                    className="flex items-center gap-3 rounded-full bg-white px-6 py-4 shadow-[0_2px_24px_rgba(15,23,42,0.10)] ring-1 ring-slate-200 transition-all duration-200 focus-within:shadow-[0_4px_32px_rgba(15,23,42,0.14)] focus-within:ring-slate-300"
                  >
                    <i className="bi bi-search shrink-0 text-[18px] text-slate-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && doSearch()}
                      placeholder="Nhập MSSV, họ tên, môn thi, thông báo..."
                      className="flex-1 bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
                    />
                    {query && (
                      <button type="button" onClick={() => setQuery("")}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                      >
                        <i className="bi bi-x text-[18px]" />
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={!query.trim()}
                      className="shrink-0 rounded-full bg-[#ED1F25] px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Tìm
                    </button>
                  </form>

                  {/* Suggestion chips */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 flex flex-wrap justify-center gap-2"
                  >
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setQuery(s); setTimeout(() => { setSubmitted(s); setFilter("all"); }, 0); }}
                        className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[13px] text-slate-500 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                      >
                        {s}
                      </button>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── STATE 2: Results ── */}
          <AnimatePresence>
            {hasSearched && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {/* Compact sticky header */}
                <div className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
                  <div className="container mx-auto flex items-center gap-3 px-4 py-3 sm:py-4">
                    <form
                      onSubmit={(e) => { e.preventDefault(); doSearch(); }}
                      className="flex flex-1 items-center gap-3 rounded-full bg-slate-50 px-4 py-2.5 ring-1 ring-slate-200 transition-all focus-within:bg-white focus-within:ring-slate-300"
                    >
                      <i className="bi bi-search shrink-0 text-[16px] text-slate-400" />
                      <input
                        ref={compactRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && doSearch()}
                        className="flex-1 bg-transparent text-[14px] text-slate-900 outline-none placeholder:text-slate-400"
                      />
                      {query && (
                        <button type="button" onClick={clearSearch}
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-200"
                        >
                          <i className="bi bi-x text-[16px]" />
                        </button>
                      )}
                    </form>
                    <button
                      type="button"
                      onClick={handleClose}
                      aria-label="Đóng tìm kiếm"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    >
                      <i className="bi bi-x-lg text-[18px]" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="container mx-auto px-4 pb-28 pt-8">
                  <div className="mx-auto max-w-3xl">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-5 text-[13px] text-slate-400"
                    >
                      {allResults.length > 0
                        ? <>Tìm thấy <span className="font-bold text-slate-700">{allResults.length}</span> kết quả cho &ldquo;<span className="font-medium text-slate-600">{submitted}</span>&rdquo;</>
                        : <>Không tìm thấy kết quả nào cho &ldquo;<span className="font-medium text-slate-600">{submitted}</span>&rdquo;</>
                      }
                    </motion.p>

                    {allResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="mb-6 flex flex-wrap gap-2"
                      >
                        <button
                          onClick={() => setFilter("all")}
                          className={["rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all", filter === "all" ? "bg-slate-900 text-white" : "bg-white text-slate-500 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-700"].join(" ")}
                        >
                          Tất cả <span className="opacity-60">({allResults.length})</span>
                        </button>
                        {categories.map((cat) => {
                          const count = allResults.filter((r) => r.category === cat).length;
                          return (
                            <button
                              key={cat}
                              onClick={() => setFilter(cat)}
                              className={["rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all", filter === cat ? "text-white" : "bg-white text-slate-500 ring-1 ring-slate-200 hover:ring-slate-300 hover:text-slate-700"].join(" ")}
                              style={filter === cat ? { background: CATEGORY_COLOR[cat] } : {}}
                            >
                              {CATEGORY_LABEL[cat]} <span className="opacity-70">({count})</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}

                    {results.length > 0 ? (
                      <div className="flex flex-col gap-3">
                        {results.map((item, i) => (
                          <ResultCard key={item.id} item={item} query={submitted} index={i} onClose={handleClose} />
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="flex flex-col items-center gap-4 rounded-3xl bg-white py-20 text-center shadow-sm ring-1 ring-slate-900/5"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                          <i className="bi bi-search text-3xl text-slate-200" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700">Không tìm thấy kết quả</p>
                          <p className="mt-1 text-sm text-slate-400">Thử từ khóa khác hoặc kiểm tra lại chính tả</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          {SUGGESTIONS.map((s) => (
                            <button
                              key={s}
                              onClick={() => { setQuery(s); setSubmitted(s); setFilter("all"); }}
                              className="rounded-full border border-slate-200 px-3 py-1 text-[13px] text-slate-500 transition-colors hover:border-red-300 hover:text-red-600"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
