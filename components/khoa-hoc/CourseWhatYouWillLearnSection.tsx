import { CheckCircle2 } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseWhatYouWillLearnSectionProps = {
  course: Course;
};

export default function CourseWhatYouWillLearnSection({ course }: CourseWhatYouWillLearnSectionProps) {
  return (
    <section className="bg-background-alt py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[42px]">
            Bạn sẽ học được gì
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Nội dung cốt lõi được sắp xếp theo lộ trình tăng dần để học viên vừa nắm chắc kiến thức vừa ứng dụng ngay.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {course.whatYouWillLearn.map((item) => (
            <article
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_6px_22px_rgba(15,23,42,0.05)]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ED1F25]" strokeWidth={2.4} />
              <p className="text-[15px] leading-relaxed text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
