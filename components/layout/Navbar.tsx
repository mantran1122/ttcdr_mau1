"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Giới thiệu",       href: "/gioi-thieu",                  icon: "bi-house-door" },
  { label: "Hướng dẫn",        href: "/huong-dan-dang-ky",           icon: "bi-book" },
  {
    label: "Thông tin & Lịch",
    href: "/thong-tin/thoi-khoa-bieu",
    icon: "bi-calendar3",
    dropdown: [
      { label: "Thời khóa biểu", href: "/thong-tin/thoi-khoa-bieu" },
      { label: "Lịch kiểm tra",  href: "/thong-tin/lich-kiem-tra" },
      { label: "Thông báo",      href: "/thong-tin/thong-bao" },
    ],
  },
  {
    label: "Tra cứu",
    href: "#",
    icon: "bi-search",
    dropdown: [
      { label: "Thông tin thí sinh",  href: "/thisinh" },
      { label: "Kết quả thi ĐGNLNN", href: "/kqthi" },
    ],
  },
  {
    label: "VSTEP",
    href: "https://vstep.nctu.edu.vn/",
    icon: "bi-mortarboard",
    dropdown: [
      { label: "Lịch kiểm tra", href: "https://vstep.nctu.edu.vn/lich-thi/" },
      { label: "Thông báo",     href: "https://vstep.nctu.edu.vn/thong-bao-vstep/" },
      { label: "Kế hoạch năm", href: "https://vstep.nctu.edu.vn/ke-hoach-nam/" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeDD, setActiveDD]     = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub]   = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDD(null);
        setMobileOpen(false);
        setMobileSub(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={navRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/25 backdrop-blur-md",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between px-8 h-24">

        {/* Logo */}
        <a href="/" className="flex items-center gap-5 shrink-0">
          <img
            src="https://ttcdr.nctu.edu.vn/dist/upload/logo_truong_only.webp"
            alt="Logo NCT"
            className="h-16 w-auto"
          />
          <span
            className="font-bold leading-[24px] text-[18px] text-[#ED1F25] hidden md:block"
          >
            Trung tâm Chuẩn đầu ra <br />& Phát triển nguồn nhân lực
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDD(item.label)}
              onMouseLeave={() => setActiveDD(null)}
            >
              <a
                href={item.href}
                className={[
                  "flex items-center gap-2 px-5 py-4 rounded-lg text-[16px] font-semibold transition-colors",
                  scrolled
                    ? "text-gray-700 hover:text-[#ED1F25] hover:bg-gray-50"
                    : "text-[#1C2B5E] hover:text-[#1C2B5E] hover:bg-white/20",
                ].join(" ")}
              >
                {item.label}
                {item.dropdown && (
                  <i className={`bi bi-chevron-down text-[12px] transition-transform duration-200 ${activeDD === item.label ? "rotate-180" : ""}`} />
                )}
              </a>

              {/* Hover dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDD === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl overflow-hidden"
                    style={{
                      minWidth: "240px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
                    }}
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-4 px-5 py-4 text-[16px] text-gray-700 hover:text-[#ED1F25] hover:bg-gray-50 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-gray-300 shrink-0" />
                        {sub.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <a
            href="/search"
            className={[
              "hidden lg:flex w-12 h-12 items-center justify-center rounded-full transition-colors",
              scrolled ? "text-gray-600 hover:bg-gray-100" : "text-[#1C2B5E] hover:bg-white/20",
            ].join(" ")}
          >
            <i className="bi bi-search text-[20px]" />
          </a>

          {/* Language flag (decorative) */}
          <button
            className={[
              "hidden lg:flex w-12 h-12 items-center justify-center rounded-full transition-colors",
              scrolled ? "text-gray-600 hover:bg-gray-100" : "text-[#1C2B5E] hover:bg-white/20",
            ].join(" ")}
          >
            <i className="bi bi-translate text-[20px]" />
          </button>

          {/* Đăng ký */}
          <a
            href="https://dkhp.nctu.edu.vn/"
            className="hidden lg:flex items-center gap-2 px-6 py-4 rounded-full text-[16px] font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#ED1F25" }}
          >
            <i className="bi bi-person-plus text-[18px]" />
            Đăng ký
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => { setMobileOpen(!mobileOpen); setMobileSub(null); }}
            className={[
              "lg:hidden flex flex-col items-center justify-center gap-[8px] w-14 h-14 rounded-full transition-all",
              scrolled ? "bg-gray-100" : "bg-white/20",
            ].join(" ")}
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { width: "14px", y: 5, rotate: 45 } : { width: "20px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "10px", backgroundColor: scrolled ? "#111" : "#1C2B5E", height: "1.5px", display: "block", originX: "50%", originY: "50%" }}
            />
            <motion.span
              animate={mobileOpen ? { width: "14px", y: -5, rotate: -45 } : { width: "20px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "10px", backgroundColor: scrolled ? "#111" : "#1C2B5E", height: "1.5px", display: "block", originX: "50%", originY: "50%" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="py-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        setMobileSub(mobileSub === item.label ? null : item.label);
                      } else {
                        setMobileOpen(false);
                        window.location.href = item.href;
                      }
                    }}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 shrink-0">
                      <i className={`bi ${item.icon} text-[18px] text-gray-600`} />
                    </span>
                    <span className="flex-1 text-[17px] font-semibold text-gray-800">{item.label}</span>
                    {item.dropdown && (
                      <i className={`bi ${mobileSub === item.label ? "bi-chevron-up" : "bi-chevron-down"} text-base text-gray-400`} />
                    )}
                  </button>

                  {item.dropdown && mobileSub === item.label && (
                    <div className="bg-gray-50 border-t border-b border-gray-100">
                      {item.dropdown.map((sub, si) => (
                        <motion.a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15, delay: si * 0.04 }}
                          className="flex items-center gap-4 px-18 py-4 text-[16px] text-gray-600 hover:text-[#ED1F25] transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-gray-400 shrink-0" />
                          {sub.label}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="mx-4 my-1 border-t border-gray-100" />

              <a
                href="https://dkhp.nctu.edu.vn/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-5 mx-5 my-3 px-6 py-5 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#FFF0F0" }}
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-lg shrink-0" style={{ background: "#FFE0E0" }}>
                  <i className="bi bi-person-plus text-[18px]" style={{ color: "#ED1F25" }} />
                </span>
                <span className="flex-1 text-[17px] font-semibold" style={{ color: "#ED1F25" }}>Đăng ký</span>
                <i className="bi bi-arrow-right text-[#ED1F25]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
