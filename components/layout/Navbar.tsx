"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect scroll to toggle navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll(); // check initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        setOpenSub(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 py-3 px-4">
      <div
        className={[
          "container mx-auto flex items-center justify-between px-4 py-3 transition-all duration-500",
          scrolled
            ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
            : "bg-transparent shadow-none",
        ].join(" ")}
        style={{ borderRadius: "16px" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://ttcdr.nctu.edu.vn/dist/upload/logo_truong_only.webp"
            alt="Logo NCT"
            className="h-12"
          />
          <span
            className="font-bold leading-[18px] text-[15px] hidden sm:block"
            style={{ color: "#ED1F25" }}
          >
            Trung tâm Chuẩn đầu ra <br />& Phát triển nguồn nhân lực
          </span>
        </a>

        {/* Hamburger */}
        <div className="relative" ref={menuRef}>
          <motion.button
            onClick={() => { setOpen(!open); setOpenSub(null); }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Menu"
            style={{ borderRadius: "88px", backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
            className="flex h-11 w-[48px] flex-col items-center justify-center gap-[7px] transition-shadow duration-200 hover:shadow-md"
          >
            {/* Thanh dày */}
            <motion.span
              animate={open ? { width: "14px", y: 5.5, rotate: 45 } : { width: "22px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "10px", backgroundColor: "#000", height: "0.6px", display: "block", originX: "50%", originY: "50%" }}
            />
            {/* Thanh mỏng */}
            <motion.span
              animate={open ? { width: "14px", y: -5.5, rotate: -45 } : { width: "22px", y: 0, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "10px", backgroundColor: "#000", height: "0.6px", display: "block", originX: "50%", originY: "50%" }}
            />
          </motion.button>

          {/* Dropdown panel */}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 mt-3 bg-white overflow-hidden"
              style={{
                minWidth: "280px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
              }}
            >
              <div className="py-2">
                {navItems.map((item, index) => {
                  const isActive = activeItem === item.label;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <button
                        onClick={() => {
                          if (item.dropdown) {
                            setOpenSub(openSub === item.label ? null : item.label);
                            setActiveItem(item.label);
                          } else {
                            setActiveItem(item.label);
                            setOpen(false);
                            window.location.href = item.href;
                          }
                        }}
                        className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors hover:bg-gray-50"
                      >
                        <span
                          className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                          style={{ background: isActive ? "#FFF0F0" : "#F4F5F7" }}
                        >
                          <i
                            className={`bi ${item.icon} text-[17px]`}
                            style={{ color: isActive ? "#ED1F25" : "#374151" }}
                          />
                        </span>
                        <span
                          className="flex-1 text-[15px] font-semibold"
                          style={{ color: isActive ? "#ED1F25" : "#1F2937" }}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#ED1F25] shrink-0" />
                        )}
                        {item.dropdown && !isActive && (
                          <i
                            className={`bi ${openSub === item.label ? "bi-chevron-up" : "bi-chevron-down"} text-xs text-gray-400`}
                          />
                        )}
                      </button>

                      {/* Sub dropdown */}
                      {item.dropdown && openSub === item.label && (
                        <div className="bg-gray-50 border-t border-b border-gray-100">
                          {item.dropdown.map((sub, subIndex) => (
                            <motion.a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: subIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                              className="flex items-center gap-3 px-14 py-2.5 text-[14px] text-gray-600 hover:text-[#ED1F25] transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                              {sub.label}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Divider */}
                <div className="mx-4 my-1 border-t border-gray-100" />

                {/* Register */}
                <motion.a
                  href="https://dkhp.nctu.edu.vn/"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + navItems.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 mx-3 my-1 px-4 py-3 rounded-xl transition-colors hover:opacity-90"
                  style={{ background: "#FFF0F0" }}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                    style={{ background: "#FFE0E0" }}
                  >
                    <i className="bi bi-person-plus text-[17px]" style={{ color: "#ED1F25" }} />
                  </span>
                  <span
                    className="flex-1 text-[15px] font-semibold"
                    style={{ color: "#ED1F25" }}
                  >
                    Đăng ký
                  </span>
                  <i className="bi bi-arrow-right text-[#ED1F25]" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
