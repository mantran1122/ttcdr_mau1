"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="w-full flex justify-between items-center px-5 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        style={{ fontSize: "20px", color: "#211650" }}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <i className={`bi ${open ? "bi-dash-lg" : "bi-plus-lg"} text-lg`} />
      </button>
      {open && (
        <div
          className="relative px-5 py-3 text-[16px] text-[#444444] border-l-4 border-[#11467F] ml-5 mb-3"
        >
          {content}
        </div>
      )}
    </div>
  );
}
