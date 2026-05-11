import { Briefcase, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import type { ProgramBenefit, ProgramBenefitIcon } from "@/data/courses";

type CourseBenefitsSectionProps = {
  benefits: ProgramBenefit[];
};

const benefitIconMap: Record<ProgramBenefitIcon, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  sparkles: Sparkles,
  handshake: Handshake,
  briefcase: Briefcase,
  shield: ShieldCheck,
};

export default function CourseBenefitsSection({ benefits }: CourseBenefitsSectionProps) {
  return (
    <section className="bg-background-alt py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
            Vì sao nên tham gia
          </p>
          <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[44px]">
            Lợi ích nổi bật khi học tại Trung tâm
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Chúng tôi tập trung vào chất lượng đầu ra, hỗ trợ cá nhân hóa và trải nghiệm học tập thực tế để học viên đạt
            tiến bộ rõ ràng qua từng giai đoạn.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefitIconMap[benefit.icon];

            return (
              <article
                key={benefit.title}
                className="rounded-[26px] border border-slate-200 bg-white px-5 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:px-6"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#ED1F25]">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-[#0B1A3B]">{benefit.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
