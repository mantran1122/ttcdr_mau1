import { UserRoundCheck } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseSuitableStudentsSectionProps = {
  course: Course;
};

export default function CourseSuitableStudentsSection({ course }: CourseSuitableStudentsSectionProps) {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[42px]">
            Đối tượng phù hợp
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Khóa học phù hợp với nhiều nhóm học viên khác nhau, đặc biệt là sinh viên muốn nâng cao năng lực toàn diện.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {course.suitableFor.map((item) => (
            <article
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_6px_22px_rgba(15,23,42,0.05)]"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#ED1F25]">
                <UserRoundCheck className="h-[18px] w-[18px]" strokeWidth={2.3} />
              </span>
              <p className="text-[15px] leading-relaxed text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
