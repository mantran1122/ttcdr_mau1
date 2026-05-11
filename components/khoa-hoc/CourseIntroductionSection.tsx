import type { Course } from "@/data/courses";

type CourseIntroductionSectionProps = {
  course: Course;
};

export default function CourseIntroductionSection({ course }: CourseIntroductionSectionProps) {
  const forWhoItems = course.suitableFor.slice(0, 3);
  const solveItems = course.benefits.slice(0, 3);

  return (
    <section className="bg-background py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_36px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
          <h2 className="text-[32px] font-medium leading-[1.2] tracking-[-0.04em] text-[#0B1A3B] sm:text-[40px]">
            Giới thiệu khóa học
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{course.overview}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <h3 className="text-xl font-black tracking-[-0.02em] text-[#0B1A3B]">Khóa học dành cho ai?</h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-600">
                {forWhoItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
              <h3 className="text-xl font-black tracking-[-0.02em] text-[#0B1A3B]">Khóa học giải quyết điều gì?</h3>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate-600">
                {solveItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
