"use client";

import { useState } from "react";
import AccordionItem from "../ui/AccordionItem";
import ScrollReveal from "../ui/ScrollReveal";

const faqDH = [
  {
    title:
      "Chuẩn đầu ra Trí tuệ nhân tạo (AI) đối với bậc Đại học chính quy là gì?",
    content:
      "Sinh viên phải đạt Chứng chỉ Ứng dụng Trí tuệ nhân tạo tạo sinh của Trường Đại học Nam Cần Thơ.",
  },
  {
    title: "Chuẩn đầu ra Ngoại ngữ đối với bậc Đại học chính quy là gì?",
    content:
      "Sinh viên bậc Đại học ở tất cả các ngành phải đạt chuẩn Anh văn theo quy định chuẩn đầu ra của Trường Đại học Nam Cần Thơ. Riêng sinh viên ngành Ngôn ngữ Anh phải đạt chứng chỉ ngoại ngữ tiếng Anh từ bậc 3 (B1) trở lên theo khung năng lực 6 bậc dùng cho Việt Nam.",
  },
  {
    title: "Chuẩn đầu ra Tin học đối với bậc Đại học chính quy là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Ứng dụng CNTT Cơ bản và Ứng dụng CNTT Nâng cao do Trường Đại học Nam Cần Thơ cấp.",
  },
  {
    title: "Chuẩn đầu ra Kỹ năng mềm đối với bậc Đại học chính quy là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Kỹ năng mềm do Trường Đại học Nam Cần Thơ cấp.",
  },
  {
    title:
      "Chuẩn đầu ra Kỹ năng nghề nghiệp đối với bậc Đại học chính quy là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Kỹ năng nghề nghiệp do Trường Đại học Nam Cần Thơ cấp.",
  },
];

const faqLT = [
  {
    title: "Chuẩn đầu ra Trí tuệ nhân tạo (AI) đối với hệ Liên thông là gì?",
    content:
      "Sinh viên phải đạt Chứng chỉ Ứng dụng Trí tuệ nhân tạo tạo sinh của Trường Đại học Nam Cần Thơ.",
  },
  {
    title: "Chuẩn đầu ra Ngoại ngữ đối với hệ Liên thông là gì?",
    content:
      "Sinh viên phải đạt chuẩn Anh văn theo quy định chuẩn đầu ra của Trường Đại học Nam Cần Thơ.",
  },
  {
    title: "Chuẩn đầu ra Tin học đối với hệ Liên thông là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Ứng dụng CNTT Cơ bản do Trường Đại học Nam Cần Thơ cấp.",
  },
  {
    title: "Chuẩn đầu ra Kỹ năng mềm đối với hệ Liên thông là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Kỹ năng mềm do Trường Đại học Nam Cần Thơ cấp.",
  },
  {
    title: "Chuẩn đầu ra Kỹ năng nghề nghiệp đối với hệ Liên thông là gì?",
    content:
      "Sinh viên phải đạt chứng chỉ Kỹ năng nghề nghiệp do Trường Đại học Nam Cần Thơ cấp.",
  },
];

type Tab = "daihoc" | "lienThong";

export default function QuyDinhSection() {
  const [tab, setTab] = useState<Tab>("daihoc");

  const activeFaq = tab === "daihoc" ? faqDH : faqLT;

  return (
    <section className="py-20 lg:py-24">
      <ScrollReveal>
        <div
          className="container mx-auto bg-white px-4 py-10"
          style={{
            boxShadow:
              "0px 6px 12px rgba(0,0,0,0.1), 0px 10px 22px rgba(0,0,0,0.1)",
          }}
        >
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-[30px] font-black uppercase leading-[1.35] tracking-[-0.03em] text-slate-950 lg:text-[42px]">
                  Quy định chuẩn đầu ra
                </h2>
              </div>

              <div className="flex w-fit gap-2 rounded-full bg-slate-100 p-1">
                <button
                  onClick={() => setTab("daihoc")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    tab === "daihoc"
                      ? "bg-[#11467F] text-white shadow-sm"
                      : "text-[#11467F] hover:bg-white"
                  }`}
                >
                  Đại học chính quy
                </button>

                <button
                  onClick={() => setTab("lienThong")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    tab === "lienThong"
                      ? "bg-[#11467F] text-white shadow-sm"
                      : "text-[#11467F] hover:bg-white"
                  }`}
                >
                  Liên thông
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {activeFaq.map((item, i) => (
                <AccordionItem
                  key={`${tab}-${i}`}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
        </div>
      </ScrollReveal>
    </section>
  );
}