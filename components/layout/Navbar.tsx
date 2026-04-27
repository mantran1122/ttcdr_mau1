"use client";

import { useState, useRef, useEffect } from "react";

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
          <button
            onClick={() => { setOpen(!open); setOpenSub(null); }}
            className="w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <span className="block w-5 h-[2px] bg-gray-700 rounded-full" />
            <span className="block w-5 h-[2px] bg-gray-700 rounded-full" />
            <span className="block w-5 h-[2px] bg-gray-700 rounded-full" />
          </button>

          {/* Dropdown panel */}
          {open && (
            <div
              className="absolute right-0 mt-3 bg-white overflow-hidden"
              style={{
                minWidth: "280px",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
              }}
            >
              <div className="py-2">
                {navItems.map((item) => {
                  const isActive = activeItem === item.label;
                  return (
                    <div key={item.label}>
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
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 px-14 py-2.5 text-[14px] text-gray-600 hover:text-[#ED1F25] transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Divider */}
                <div className="mx-4 my-1 border-t border-gray-100" />

                {/* Register */}
                <a
                  href="https://dkhp.nctu.edu.vn/"
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
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
