"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/* ─── Reveal animation ─────────────────────────────────── */

type RevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform transition-all duration-700 ease-out",
        visible ? "opacity-100 blur-0" : "opacity-0 blur-[2px]",
        className,
      ].join(" ")}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transform: visible
          ? "translateY(0px) scale(1)"
          : `translateY(${y}px) scale(0.985)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────── */

const lichHoc = [
  {
    title: "Lịch học các lớp ANH VĂN 2026",
    date: "12/10/2024",
    href: "/thong-tin/thoi-khoa-bieu/lich-hoc-cac-lop-anh-van-2025",
  },
  {
    title: "Lịch học lớp IELTS Intermediate – K12",
    date: "10/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Thờikhóabiểu Giáo dục thể chất – HK1",
    date: "08/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Lịch học các lớp TOEIC 650+ Online",
    date: "05/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Lịch học VSTEP tháng 11/2024",
    date: "01/11/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Lịch ôn tập TOEIC 500+ kỳ 2",
    date: "28/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Lịch học Tin học Cơ bản tháng 11",
    date: "25/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    title: "Lịch kỹ năng mềm Khóa K23",
    date: "20/10/2024",
    href: "/thong-tin/thoi-khoa-bieu",
  },
];

const lichKiemTra = [
  {
    title: "Lịch kiểm tra Anh văn – Tin học Đợt 2 – 2024",
    tag: "TRUNG TÂM KHẢO THÍ",
    tagColor: "blue",
    dateLabel: "HẠN ĐĂNG KÝ",
    date: "15/11/2024",
    dateRed: true,
    href: "/thong-tin/lich-kiem-tra/lich-kiem-tra-anh-van-tin-hoc-du-kien-23-24-01-2026",
  },
  {
    title: "Kiểm tra giữa kỳ Triết học Mác–Lênin (Hệ CLC)",
    tag: "KHOA LÝ LUẬN",
    tagColor: "gray",
    dateLabel: "NGÀY THI",
    date: "20/11/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "Lịch thi kết thúc học phần kỹ năng mềm – Khóa 2023",
    tag: "PHÒNG ĐÀO TẠO",
    tagColor: "gray",
    dateLabel: "NGÀY THI",
    date: "25/11/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "Thông báo điều chỉnh lịch kiểm tra IELTS Simulation",
    tag: "QUAN TRỌNG",
    tagColor: "red",
    dateLabel: "NGÀY CẬP NHẬT",
    date: "14/10/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "Kiểm tra cuối kỳ VSTEP tháng 12",
    tag: "TRUNG TÂM KHẢO THÍ",
    tagColor: "blue",
    dateLabel: "NGÀY THI",
    date: "05/12/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "ĐGNL tiếng Anh đợt 3 năm 2024",
    tag: "PHÒNG ĐÀO TẠO",
    tagColor: "gray",
    dateLabel: "HẠN ĐĂNG KÝ",
    date: "10/12/2024",
    dateRed: true,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "Kiểm tra tin học đầu ra Khóa K24",
    tag: "PHÒNG ĐÀO TẠO",
    tagColor: "gray",
    dateLabel: "NGÀY THI",
    date: "18/12/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    title: "Kiểm tra giữa kỳ kỹ năng mềm K24",
    tag: "KHOA LÝ LUẬN",
    tagColor: "gray",
    dateLabel: "NGÀY THI",
    date: "22/12/2024",
    dateRed: false,
    href: "/thong-tin/lich-kiem-tra",
  },
];

const thongBao = [
  {
    title: "Kết quả kỳ thi ĐGNL tiếng Anh – Khung NLNN 6 bậc",
    tag: "THÔNG BÁO",
    tagColor: "blue",
    dateLabel: "NGÀY ĐĂNG",
    date: "02/06/2023",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "Lễ trao bằng tốt nghiệp K3, K4 và liên thông 2016–2020",
    tag: "SỰ KIỆN",
    tagColor: "orange",
    dateLabel: "NGÀY ĐĂNG",
    date: "03/11/2020",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "THÔNG BÁO VỀ LỊCH HỌC CÁC LỚP BUỔI TỐI",
    tag: "THÔNG BÁO",
    tagColor: "blue",
    dateLabel: "NGÀY ĐĂNG",
    date: "24/03/2020",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "THÔNG BÁO TIẾP TỤC DỜI LỊCH HỌC (BUỔI TỐI)",
    tag: "QUAN TRỌNG",
    tagColor: "red",
    dateLabel: "NGÀY ĐĂNG",
    date: "15/02/2020",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "Thông báo đăng ký thi VSTEP tháng 12",
    tag: "THÔNG BÁO",
    tagColor: "blue",
    dateLabel: "NGÀY ĐĂNG",
    date: "20/11/2024",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "Thông báo lịch học bù tháng 12/2024",
    tag: "THÔNG BÁO",
    tagColor: "blue",
    dateLabel: "NGÀY ĐĂNG",
    date: "18/11/2024",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "Thông báo nghỉ lễ 30/04 – 01/05",
    tag: "QUAN TRỌNG",
    tagColor: "red",
    dateLabel: "NGÀY ĐĂNG",
    date: "25/04/2024",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
  {
    title: "Thông báo điều chỉnh lịch thi HK2",
    tag: "QUAN TRỌNG",
    tagColor: "red",
    dateLabel: "NGÀY ĐĂNG",
    date: "10/11/2024",
    dateRed: false,
    href: "/thong-tin/thong-bao",
  },
];

const stats = [
  {
    label: "Lớp học tuần này",
    value: "12",
    unit: "Buổi",
    icon: "bi-calendar-check",
    href: "/thong-tin/thoi-khoa-bieu",
  },
  {
    label: "Bài kiểm tra sắp tới",
    value: "03",
    unit: "Bài",
    icon: "bi-clipboard-check",
    href: "/thong-tin/lich-kiem-tra",
  },
  {
    label: "Thông báo chưa đọc",
    value: "08",
    unit: "Mới",
    icon: "bi-bell",
    href: "/thong-tin/thong-bao",
  },
];

const TAG_STYLES: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  gray: "bg-gray-100 text-gray-500",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
};

/* ─── Component ────────────────────────────────────────── */

export default function ThongTinSection() {
  const [leftTab, setLeftTab] = useState<"thoikhoabieu" | "huongdan">(
    "thoikhoabieu"
  );
  const [rightTab, setRightTab] = useState<"lichkiemtra" | "thongbao">(
    "lichkiemtra"
  );

  const rightItems = rightTab === "lichkiemtra" ? lichKiemTra : thongBao;

  return (
    <section className="py-10">
      
      <div className="container relative mx-auto space-y-5 px-4">
        {/* ── Two main panels ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left – Thời khóa biểu */}
          <RevealOnScroll delay={80} y={34}>
            <div className="flex h-[580px] flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              {/* panel header */}
              <div className="flex h-[56px] items-center gap-6 border-b border-gray-100 px-6">
                {[
                  { key: "thoikhoabieu", label: "THỜI KHÓA BIỂU" },
                  { key: "huongdan", label: "HƯỚNG DẪN" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setLeftTab(tab.key as typeof leftTab)}
                    className={`relative text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                      leftTab === tab.key
                        ? "text-[#4F46E5]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                    {leftTab === tab.key && (
                      <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] rounded-full bg-[#4F46E5]" />
                    )}
                  </button>
                ))}

                <div className="flex-1" />

                <a
                  href="/thong-tin/thoi-khoa-bieu"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:rotate-90 hover:bg-gray-50"
                >
                  <i className="bi bi-plus text-[16px] text-gray-500" />
                </a>
              </div>

              {/* items */}
              <div className="min-h-0 flex-1 divide-y divide-gray-50 overflow-y-auto">
                {lichHoc.map((item, i) => (
                  <RevealOnScroll key={i} delay={140 + i * 70} y={18}>
                    <a
                      href={item.href}
                      className="group flex items-center justify-between gap-4 px-6 py-5 transition-all duration-300 hover:bg-gray-50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[20px] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#4F46E5]">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[13px] text-[#4F46E5]">
                          Chi tiết và Phụ lục ↗
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                          Ngày cập nhật
                        </p>
                        <p className="mt-1 text-[14px] font-semibold text-gray-700">
                          {item.date}
                        </p>
                      </div>
                    </a>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right – Lịch kiểm tra / Thông báo */}
          <RevealOnScroll delay={180} y={34}>
            <div className="flex h-[580px] flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              {/* tab header */}
              <div className="flex h-[56px] items-center gap-6 border-b border-gray-100 px-6">
                {[
                  { key: "lichkiemtra", label: "LỊCH KIỂM TRA" },
                  { key: "thongbao", label: "THÔNG BÁO" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setRightTab(tab.key as typeof rightTab)}
                    className={`relative text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                      rightTab === tab.key
                        ? "text-[#4F46E5]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                    {rightTab === tab.key && (
                      <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] rounded-full bg-[#4F46E5]" />
                    )}
                  </button>
                ))}

                <div className="flex-1" />

                <a
                  href={
                    rightTab === "lichkiemtra"
                      ? "/thong-tin/lich-kiem-tra"
                      : "/thong-tin/thong-bao"
                  }
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:rotate-90 hover:bg-gray-50"
                >
                  <i className="bi bi-plus text-[16px] text-gray-500" />
                </a>
              </div>

              {/* items */}
              <div key={rightTab} className="min-h-0 flex-1 divide-y divide-gray-50 overflow-y-auto">
                {rightItems.map((item, i) => (
                  <RevealOnScroll
                    key={`${rightTab}-${i}`}
                    delay={140 + i * 70}
                    y={18}
                  >
                    <a
                      href={item.href}
                      className="group flex items-start justify-between gap-4 px-6 py-5 transition-all duration-300 hover:bg-gray-50"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[20px] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#4F46E5]">
                          {item.title}
                        </p>

                        <span
                          className={`mt-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            TAG_STYLES[item.tagColor]
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                          {item.dateLabel}
                        </p>
                        <p
                          className={`mt-1 text-[14px] font-semibold ${
                            item.dateRed
                              ? "text-[#EF4444]"
                              : "text-gray-700"
                          }`}
                        >
                          {item.date}
                        </p>
                      </div>
                    </a>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Stats row ── */}
        
      </div>

      {/* FAB */}
      <a
        href="https://dkhp.nctu.edu.vn/"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-90 hover:shadow-xl"
        style={{ background: "#1C2B5E" }}
        title="Đăng ký"
      >
        <i className="bi bi-plus text-[26px] text-white" />
      </a>
    </section>
  );
}
