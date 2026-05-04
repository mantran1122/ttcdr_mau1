"use client";

import Image from "next/image";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  FileCheck2,
  Globe2,
  GraduationCap,
  UsersRound,
} from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type HighlightItem = {
  label: string;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  {
    title: "Đào tạo & Bồi dưỡng",
    description: "Anh văn, Tin học, Kỹ năng",
    icon: GraduationCap,
  },
  {
    title: "Khảo thí & Chứng chỉ",
    description: "TOEIC, VSTEP, kiểm tra và cấp chứng chỉ",
    icon: FileCheck2,
  },
  {
    title: "Hợp tác & Cộng đồng",
    description: "CLB, liên kết đối tác, hỗ trợ học viên",
    icon: UsersRound,
  },
];

const highlights: HighlightItem[] = [
  { label: "Kiến thức", icon: BookOpen },
  { label: "Kỹ năng", icon: BadgeCheck },
  { label: "Ngoại ngữ", icon: Globe2 },
];

function DottedPattern({
  className,
  dotClass,
}: {
  className: string;
  dotClass: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, index) => (
        <span key={index} className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      ))}
    </div>
  );
}

export default function EducationFeatureSection() {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-20" aria-labelledby="education-feature-heading">
      <div
        className="pointer-events-none absolute -bottom-28 -left-24 hidden h-[260px] w-[360px] border-[5px] border-[#07142F] bg-[#F04A2A] xl:block"
        style={{ clipPath: "polygon(0 28%, 28% 22%, 34% 30%, 47% 24%, 62% 32%, 72% 72%, 56% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 left-24 hidden h-24 w-28 border-[5px] border-[#07142F] bg-[#22AFCB] xl:block"
        style={{ clipPath: "polygon(0 20%, 88% 0, 100% 40%, 42% 100%)" }}
        aria-hidden="true"
      />

      <DottedPattern
        className="pointer-events-none absolute right-14 top-16 hidden grid-cols-4 gap-2 xl:grid"
        dotClass="bg-[#07142F]/80"
      />
      <DottedPattern
        className="pointer-events-none absolute bottom-14 left-[260px] hidden grid-cols-4 gap-2 xl:grid"
        dotClass="bg-[#07142F]/70"
      />

      <div className="container mx-auto px-8">
        <div className="grid items-center gap-9 lg:min-h-[620px] lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="space-y-8">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group flex items-start gap-5 rounded-2xl px-1 py-1 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span className="mt-1 block h-16 w-[3px] shrink-0 rounded-full bg-[#F04A2A] transition-opacity duration-300 group-hover:opacity-100 opacity-80" />

                    <div className="mt-0.5 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#eadfc8] bg-[#f8efde] text-[#07142F] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 border-l border-[#dbcba9] pl-5">
                      <h3 className="text-balance text-[clamp(1.15rem,1.35vw,1.55rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-[#07142F]">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[clamp(0.88rem,0.95vw,1rem)] leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <div
              className="pointer-events-none absolute -inset-x-5 -inset-y-8 -z-10 hidden bg-[#D49A16] lg:block"
              style={{ clipPath: "polygon(6% 8%, 70% 0, 96% 8%, 100% 64%, 92% 100%, 33% 95%, 0 85%)" }}
              aria-hidden="true"
            />

            <article className="group relative overflow-hidden rounded-[2.2rem] border border-[#e8dcc8] bg-[#FBF6EC] p-5 shadow-[0_22px_50px_-28px_rgba(7,20,47,0.45)] transition-shadow duration-300 hover:shadow-[0_34px_62px_-28px_rgba(7,20,47,0.48)] sm:p-7 lg:p-8 xl:p-10">
              <div
                className="pointer-events-none absolute left-7 top-6 h-12 w-16 bg-[#F04A2A]"
                style={{ clipPath: "polygon(0 0, 100% 6%, 100% 70%, 65% 100%, 0 82%)" }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute left-4 top-8 h-9 w-6 border-l-[5px] border-t-[5px] border-[#07142F]" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -bottom-2 -right-2 h-20 w-20 bg-[#22AFCB]"
                style={{ clipPath: "polygon(20% 0, 100% 0, 100% 68%, 65% 100%, 0 100%)" }}
                aria-hidden="true"
              />

              <div className="grid gap-7 lg:grid-cols-[1.2fr_0.95fr] lg:items-start lg:gap-6 xl:gap-8">
                <div className="pt-8 sm:pt-10 lg:pt-10">
                  <h2
                    id="education-feature-heading"
                    className="text-[clamp(2.25rem,4.85vw,4.4rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-[#07142F]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    <span className="block">Nâng cao</span>
                    <span className="block">chất lượng</span>
                    <span className="block text-[#C99322]">đào tạo</span>
                  </h2>

                  <div className="mt-6 flex items-center gap-3 text-[#B8892E]/70">
                    <span className="h-px flex-1 bg-current" />
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current/60">
                      <span className="h-2 w-2 rotate-45 border border-current/80" />
                    </span>
                    <span className="h-px flex-1 bg-current" />
                  </div>

                  <p className="mt-4 max-w-[29ch] text-[clamp(1rem,1.12vw,1.18rem)] leading-relaxed text-slate-700">
                    Đảm bảo sinh viên đạt chuẩn đầu ra về kiến thức, kỹ năng và ngoại ngữ
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-[rgba(184,137,46,0.35)] bg-[#fffaf1]/75">
                    <ul className="grid grid-cols-1 divide-y divide-[rgba(184,137,46,0.35)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                      {highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                          <li key={item.label} className="flex flex-col items-center justify-center gap-1.5 px-3 py-3.5 text-center">
                            <Icon className="h-7 w-7 text-[#B8892E]" strokeWidth={1.6} />
                            <span className="text-[clamp(0.8rem,0.78vw,0.95rem)] font-medium leading-tight tracking-normal text-[#192647]">
                              {item.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div
                  className="relative min-h-[320px] overflow-hidden rounded-[1.8rem] border border-[#eadfcb] bg-[#f4ead7] sm:min-h-[390px] lg:min-h-[470px] xl:min-h-[520px]"
                  style={{ clipPath: "polygon(11% 0, 100% 0, 100% 86%, 90% 100%, 0 100%, 0 18%)" }}
                >
                  {imageUnavailable ? (
                    <div className="absolute inset-0 bg-[linear-gradient(140deg,#f5dfb7_0%,#e9c67e_50%,#f3dfbc_100%)]" />
                  ) : (
                    <Image
                      src="/courses/section_gioithieu.png"
                      alt="Tòa nhà đào tạo của trường đại học trong ánh nắng ấm"
                      fill
                      className="object-cover object-[56%_50%]"
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      onError={() => setImageUnavailable(true)}
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(20deg,rgba(198,147,34,0.2)_10%,rgba(255,255,255,0.03)_38%,rgba(255,220,124,0.28)_92%)]" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
