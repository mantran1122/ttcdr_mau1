import { ArrowRight } from "lucide-react";
import type { LearningPathStep } from "@/data/courses";

type CourseLearningPathSectionProps = {
  steps: LearningPathStep[];
};

export default function CourseLearningPathSection({ steps }: CourseLearningPathSectionProps) {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
            Learning Path
          </p>
          <h2 className="text-[36px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[44px]">
            Lộ trình học tập tại Trung tâm
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Từ bước chọn khóa học đến đánh giá cuối kỳ, học viên luôn có lộ trình rõ ràng và được hỗ trợ liên tục để
            đạt mục tiêu.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-[26px] border border-slate-200 bg-white px-5 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:px-6"
            >
              <span className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#ED1F25] px-3 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-[#0B1A3B]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{step.description}</p>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-300 xl:block"
                  strokeWidth={2}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
