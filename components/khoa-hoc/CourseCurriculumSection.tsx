import type { Course } from "@/data/courses";

type CourseCurriculumSectionProps = {
  course: Course;
};

export default function CourseCurriculumSection({ course }: CourseCurriculumSectionProps) {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[42px]">
            Chương trình học
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Curriculum được chia thành các module rõ ràng, giúp học viên dễ theo dõi tiến độ và thực hành theo từng giai
            đoạn.
          </p>
        </div>

        <div className="space-y-4">
          {course.curriculum.map((module, index) => (
            <details
              key={module.title}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_24px_rgba(15,23,42,0.05)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Học phần {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.02em] text-[#0B1A3B] sm:text-xl">{module.title}</h3>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 transition-colors group-open:border-red-200 group-open:bg-red-50 group-open:text-[#ED1F25]">
                  {module.lessons.length} bài học
                </span>
              </summary>

              <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                <ul className="space-y-2 text-[15px] leading-relaxed text-slate-600">
                  {module.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
