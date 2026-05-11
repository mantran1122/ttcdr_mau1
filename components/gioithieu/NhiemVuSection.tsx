"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RoadmapStep = {
  num: string;
  title: string;
  desc: string;
  image: string;
  subItems: string[];
};

const roadmapSteps: RoadmapStep[] = [
  {
    num: "01",
    title: "Khảo sát & Đánh giá",
    desc: "Đánh giá năng lực đầu vào và xác định nhu cầu phát triển theo từng nhóm sinh viên.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    subItems: [
      "→ Kiểm tra trình độ đầu vào bằng bài thi chuẩn hóa theo khung năng lực",
      "→ Phân nhóm sinh viên theo mức độ và định hướng phát triển cá nhân",
      "→ Lập báo cáo năng lực chi tiết làm cơ sở thiết kế lộ trình học tập",
    ],
  },
  {
    num: "02",
    title: "Tổ chức đào tạo",
    desc: "Triển khai lộ trình học theo chuẩn đầu ra với phương pháp phù hợp cho từng chương trình.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    subItems: [
      "→ Xây dựng giáo trình bám sát chuẩn đầu ra quốc gia và quốc tế",
      "→ Ứng dụng phương pháp giảng dạy tích cực, kết hợp thực hành và lý thuyết",
      "→ Theo dõi tiến độ học tập định kỳ và điều chỉnh nội dung kịp thời",
    ],
  },
  {
    num: "03",
    title: "Kiểm tra & Cấp chứng chỉ",
    desc: "Đo lường mức độ đạt chuẩn, hoàn thiện hồ sơ năng lực và cấp chứng nhận theo quy định.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    subItems: [
      "→ Tổ chức kỳ thi đánh giá năng lực theo đúng quy trình và tiêu chuẩn",
      "→ Cấp chứng chỉ được công nhận chính thức, lưu hành trong hệ thống quốc gia",
      "→ Hoàn thiện hồ sơ năng lực cá nhân để phục vụ xét tốt nghiệp và tuyển dụng",
    ],
  },
  {
    num: "04",
    title: "Câu lạc bộ & Tuyển sinh",
    desc: "Mở rộng hoạt động cộng đồng học thuật, kết nối truyền thông và hỗ trợ tuyển sinh bền vững.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    subItems: [
      "→ Vận hành câu lạc bộ học thuật tạo môi trường thực hành và giao lưu",
      "→ Xây dựng kênh truyền thông, chia sẻ thành tích và lan tỏa giá trị đào tạo",
      "→ Hỗ trợ công tác tuyển sinh qua mạng lưới cựu học viên và đối tác chiến lược",
    ],
  },
];

function RoadmapCard({ step }: { step: RoadmapStep }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="py-20 lg:py-24"
    >
      <h3 className="relative mt-2 text-[38px] font-medium leading-tight tracking-tight text-slate-950 lg:text-[44px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#2563EB] shadow-[0_0_0_6px_rgba(37,99,235,0.10)] sm:block sm:-left-[45px] lg:-left-[61px]"
        />
        <span className="inline-block bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text font-semibold tabular-nums text-transparent">
          {step.num}
        </span>
        <span
          aria-hidden="true"
          className="mx-2 inline-block h-[0.9em] w-px translate-y-[0.06em] bg-slate-300"
        />
        <span>{step.title}</span>
      </h3>

      <div className="group mt-6 aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
        <Image
          src={step.image}
          alt={step.title}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="mt-5 text-[16px] leading-relaxed text-slate-600">{step.desc}</p>

      {/* <ul className="mt-5 space-y-2.5">
        {step.subItems.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-[2px] shrink-0 text-[#2563EB]">→</span>
            <span className="text-[15px] leading-relaxed text-slate-600">
              {item.includes(" ") ? item.slice(item.indexOf(" ") + 1) : item}
            </span>
          </li>
        ))}
      </ul> */}
    </motion.article>
  );
}

export default function NhiemVuSection() {
  return (
    <section className="relative overflow-visible bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:hidden">
          <div className="pt-8 pb-8">
            <h2 className="text-[46px] font-medium leading-[1.15] tracking-tight text-slate-950">
              Nhiệm vụ chiến lược
            </h2>
          </div>

          <div className="pb-8">
            {roadmapSteps.map((step) => (
              <RoadmapCard key={step.num} step={step} />
            ))}
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex items-start gap-0">
            <div className="w-[38%] shrink-0 self-start sticky top-20 z-10 lg:w-[36%]">
              <div className="flex h-[calc(100vh-5rem)] flex-col justify-start pt-30 pr-10 lg:pr-14">
                {/* <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0, ease: EASE }}
                  className="mb-3 text-[13px] uppercase tracking-widest text-[#2563EB]"
                >
                  Lộ trình triển khai
                </motion.p> */}

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                  className="text-[46px] font-medium leading-[1.15] tracking-tight text-slate-950 lg:whitespace-nowrap lg:text-[52px]"
                >
                  Nhiệm vụ chiến lược
                </motion.h2>

                {/* <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  className="mt-4 max-w-xs text-[15px] text-slate-500"
                >
                  Từ đánh giá đầu vào đến phát triển cộng đồng học thuật bền vững.
                </motion.p> */}

                {/* <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  href="#"
                  className="mt-8 inline-block w-fit rounded-full bg-[#2563EB] px-6 py-3 text-sm text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition-opacity hover:opacity-90"
                >
                  Xem chi tiết
                </motion.a> */}
              </div>
            </div>

            <div className="my-20 w-px shrink-0 self-stretch bg-blue-200/60 lg:my-24" />

            <div className="flex-1 pl-10 lg:pl-14">
              {roadmapSteps.map((step) => (
                <RoadmapCard key={step.num} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
