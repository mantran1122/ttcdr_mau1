import Image from "next/image";

const courses = [
  {
    title: "Trí tuệ nhân tạo (AI)",
    tag: "Công nghệ",
    image: "/courses/ai.png",
    href: "/khoa-hoc/tri-tue-nhan-tao",
    className: "lg:col-span-6",
    imageClassName: "h-[220px] sm:h-[250px]",
  },
  {
    title: "Ngoại ngữ",
    tag: "Giao tiếp",
    image: "/courses/ngoai-ngu.png",
    href: "/khoa-hoc/ngoai-ngu",
    className: "lg:col-span-6",
    imageClassName: "h-[220px] sm:h-[250px]",
  },
  {
    title: "Tin học",
    tag: "Kỹ năng số",
    image: "/courses/tin-hoc.png",
    href: "/khoa-hoc/tin-hoc",
    className: "lg:col-span-4",
    imageClassName: "h-[170px]",
  },
  {
    title: "Kỹ năng mềm",
    tag: "Phát triển bản thân",
    image: "/courses/ky-nang-mem.png",
    href: "/khoa-hoc/ky-nang-mem",
    className: "lg:col-span-4",
    imageClassName: "h-[170px]",
  },
  {
    title: "Kỹ năng nghề nghiệp",
    tag: "Định hướng nghề",
    image: "/courses/ky-nang-nghe-nghiep.png",
    href: "/khoa-hoc/ky-nang-nghe-nghiep",
    className: "lg:col-span-4",
    imageClassName: "h-[170px]",
  },
];

const tagColorMap: Record<string, string> = {
  "Công nghệ": "bg-blue-100 text-blue-700",
  "Giao tiếp": "bg-orange-100 text-orange-700",
  "Kỹ năng số": "bg-sky-100 text-sky-700",
  "Phát triển bản thân": "bg-violet-100 text-violet-700",
  "Định hướng nghề": "bg-stone-100 text-stone-700",
};

export default function CoursesShowcaseSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 xl:py-28">
      <div className="container relative mx-auto px-4">
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-4 font-serif text-xl italic text-slate-500 sm:text-2xl">
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
            <span>Khóa học tại Trung tâm</span>
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
          </div>

          <h2 className="text-[clamp(2.5rem,4.6vw,5rem)] font-black leading-[1.35] tracking-[-0.06em] text-slate-950">
            Khoá học cho sinh viên
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Lộ trình học tập được thiết kế theo định hướng năng lực và chuẩn đầu
            ra.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className={[
                "group overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_22px_70px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70",
                "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)]",
                course.className,
              ].join(" ")}
            >
              <div
                className={[
                  "relative overflow-hidden rounded-[1.35rem] bg-slate-100",
                  course.imageClassName,
                ].join(" ")}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/10" />
              </div>

              <div className="px-5 pb-5 pt-6">
                <h3 className="text-[1.65rem] font-black leading-[1.25] tracking-[-0.04em] text-slate-950">
                  {course.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={[
                      "inline-flex h-9 items-center rounded-full px-4 text-sm font-bold",
                      tagColorMap[course.tag],
                    ].join(" ")}
                  >
                    {course.tag}
                  </span>

                  <span className="flex h-9 w-9 translate-x-2 items-center justify-center rounded-full bg-slate-950 text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}