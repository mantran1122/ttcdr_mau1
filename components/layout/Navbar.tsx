"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SearchOverlay from "./SearchOverlay";

const navItems = [
  { label: "Giới thiệu", href: "/gioi-thieu", icon: "bi-house-door" },
  { label: "Hướng dẫn", href: "/huong-dan-dang-ky", icon: "bi-book" },
  {
    label: "Thông tin & Lịch",
    href: "/thong-tin/thoi-khoa-bieu",
    icon: "bi-calendar3",
    dropdown: [
      { label: "Thời khóa biểu", href: "/thong-tin/thoi-khoa-bieu" },
      { label: "Lịch kiểm tra", href: "/thong-tin/lich-kiem-tra" },
      { label: "Thông báo", href: "/thong-tin/thong-bao" },
    ],
  },
  {
    label: "Tra cứu",
    href: "/kqthi",
    icon: "bi-search",
  },
  {
    label: "VSTEP",
    href: "https://vstep.nctu.edu.vn/",
    icon: "bi-mortarboard",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDD, setActiveDD] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
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
          : "bg-white border-b border-slate-200/70",
      ].join(" ")}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 sm:gap-5">
          <Image
            src="/logo_truong_3.png"
            alt="Logo NCT"
            width={220}
            height={64}
            className="h-12 w-auto object-contain sm:h-16"
            sizes="(min-width: 640px) 220px, 165px"
            quality={100}
            priority
          />
          {/* <span
            className="hidden text-[22px] font-bold leading-[26px] text-[#ED1F25] md:block lg:text-[22px] lg:leading-[28px]"
            style={{ fontFamily: "'Google Sans Flex', sans-serif" }}
          >
            Trung tâm <br/> Chuẩn đầu ra 
          </span> */}
        </Link>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isFlipItem = item.label !== "Thông tin & Lịch";
            const textClass = scrolled ? "text-gray-700" : "text-[#1C2B5E]";
            const hoverTextClass = isFlipItem ? "" : "hover:text-[#ED1F25]";
            const hoverBgClass = isFlipItem ? "hover:bg-transparent" : "hover:bg-gray-50";

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDD(item.label)}
                onMouseLeave={() => setActiveDD(null)}
              >
                <a
                  href={item.href}
                  className={[
                    "group/nav flex items-center gap-2 rounded-lg px-5 py-4 text-[21px] font-semibold transition-colors",
                    textClass,
                    hoverTextClass,
                    hoverBgClass,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {isFlipItem ? (
                    <span className="relative inline-block h-[1.28em] overflow-hidden align-middle leading-[1.28em]">
                      <span className="block whitespace-nowrap transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/nav:-translate-y-[calc(100%+12px)]">
                        {item.label}
                      </span>
                      <span className="pointer-events-none absolute left-0 top-0 block whitespace-nowrap text-[#ED1F25] translate-y-[calc(100%+12px)] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/nav:translate-y-0">
                        {item.label}
                      </span>
                    </span>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {item.dropdown && (
                    <i
                      className={`bi bi-chevron-down text-[12px] transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${activeDD === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </a>

                {/* Hover dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDD === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 overflow-hidden rounded-xl bg-white"
                      style={{
                        minWidth: "240px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-4 px-5 py-4 text-[16px] text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#ED1F25]"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 lg:pl-5">
          {/* Search */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:text-[#ED1F25] lg:flex"
          >
            <i className="bi bi-search text-[22px]" />
          </button>

          {/* Đăng ký */}
          <a
            href="https://dkhp.nctu.edu.vn/"
            className="hidden min-w-[164px] items-center justify-center rounded-full bg-[#ED1F25] px-9 py-2.5 text-[21px] font-semibold text-white transition-colors hover:bg-[#c41920] lg:ml-3 lg:inline-flex"
          >
            Đăng ký
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileSub(null);
            }}
            className={[
              "lg:hidden flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full transition-all sm:h-14 sm:w-14 sm:gap-[8px]",
              "bg-gray-100",
            ].join(" ")}
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { width: "14px", y: 5, rotate: 45 } : { width: "20px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: "10px",
                backgroundColor: scrolled ? "#111" : "#1C2B5E",
                height: "1.5px",
                display: "block",
                originX: "50%",
                originY: "50%",
              }}
            />
            <motion.span
              animate={mobileOpen ? { width: "14px", y: -5, rotate: -45 } : { width: "20px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: "10px",
                backgroundColor: scrolled ? "#111" : "#1C2B5E",
                height: "1.5px",
                display: "block",
                originX: "50%",
                originY: "50%",
              }}
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
                    className="flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:gap-5 sm:px-6 sm:py-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-12 sm:w-12">
                      <i className={`bi ${item.icon} text-[24px] text-gray-600`} />
                    </span>
                    <span className="flex-1 text-[15px] font-semibold text-gray-800 sm:text-[17px]">{item.label}</span>
                    {item.dropdown && (
                      <i
                        className={`bi ${mobileSub === item.label ? "bi-chevron-up" : "bi-chevron-down"} text-base text-gray-400`}
                      />
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
                          className="flex items-center gap-3 py-3.5 pl-14 pr-4 text-[14px] text-gray-600 transition-colors hover:text-[#ED1F25] sm:gap-4 sm:py-4 sm:pl-[4.5rem] sm:pr-6 sm:text-[16px]"
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
                className="mx-4 my-3 flex items-center gap-3 rounded-xl px-4 py-4 transition-opacity hover:opacity-90 sm:mx-5 sm:gap-5 sm:px-6 sm:py-5"
                style={{ background: "#FFF0F0" }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12"
                  style={{ background: "#FFE0E0" }}
                >
                  <i className="bi bi-person-plus text-[24px]" style={{ color: "#ED1F25" }} />
                </span>
                <span className="flex-1 text-[15px] font-semibold sm:text-[17px]" style={{ color: "#ED1F25" }}>
                  Đăng ký
                </span>
                <i className="bi bi-arrow-right text-[#ED1F25]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
