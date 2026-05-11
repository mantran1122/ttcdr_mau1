import { Check } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseOutcomesSectionProps = {
  course: Course;
};

export default function CourseOutcomesSection({ course }: CourseOutcomesSectionProps) {
  return (
    <section className="bg-background-alt py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[42px]">
            Kết quả đạt được sau khóa học
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Hoàn thành khóa học, học viên có thể ứng dụng kiến thức ngay trong học tập, dự án nhóm và công việc thực tế.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {course.outcomes.map((outcome) => (
            <article
              key={outcome}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_6px_22px_rgba(15,23,42,0.05)]"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-4 w-4" strokeWidth={2.6} />
              </span>
              <p className="text-[15px] leading-relaxed text-slate-700">{outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
