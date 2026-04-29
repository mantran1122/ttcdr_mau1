import Image from "next/image";

const courses = [
  {
    title: "Trí tuệ nhân tạo (AI)",
    tag: "Công nghệ",
    badge: "Khóa học nổi bật",
    image: "/courses/ai.png",
    href: "/khoa-hoc/tri-tue-nhan-tao",
    col: "lg:col-span-7",
    rowH: "h-[340px]",
    textPos: "center" as const,
  },
  {
    title: "Ngoại ngữ",
    tag: "Giao tiếp",
    image: "/courses/ngoai-ngu.png",
    href: "/khoa-hoc/ngoai-ngu",
    col: "lg:col-span-5",
    rowH: "h-[340px]",
    textPos: "center" as const,
  },
  {
    title: "Tin học",
    tag: "Kỹ năng số",
    image: "/courses/tin-hoc.png",
    href: "/khoa-hoc/tin-hoc",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
  {
    title: "Kỹ năng mềm",
    tag: "Phát triển bản thân",
    image: "/courses/ky-nang-mem_v2.png",
    href: "/khoa-hoc/ky-nang-mem",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
  {
    title: "Kỹ năng nghề nghiệp",
    tag: "Định hướng nghề",
    image: "/courses/ky-nang-nghe-nghiep.png",
    href: "/khoa-hoc/ky-nang-nghe-nghiep",
    col: "lg:col-span-4",
    rowH: "h-[280px]",
  },
];

export default function CoursesShowcaseSection() {
  return (
    <section className="relative py-24 xl:py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-4 font-serif text-xl italic text-slate-500 sm:text-2xl">
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
            <span>Khóa học tại Trung tâm</span>
            <span className="hidden h-px w-16 bg-slate-300 sm:block" />
          </div>
          <h2 className="text-[clamp(2.5rem,4.6vw,5rem)] font-black leading-[1.15] tracking-[-0.05em] text-slate-950">
            Khoá học cho sinh viên
          </h2>
        </div>

        {/* Bento grid */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className={[
                "group relative overflow-hidden rounded-[1.6rem]",
                "transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.15)]",
                course.col,
                course.rowH,
              ].join(" ")}
            >
              {/* Background image */}
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay — bottom so text is readable */}
              <div className="absolute inset-0 " />

              {/* Badge top-left */}
              {course.badge && (
                <span
                  className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
                  style={{ background: "rgba(255,255,255,0.88)", color: "#374151", backdropFilter: "blur(6px)" }}
                >
                  ★ {course.badge}
                </span>
              )}

              {/* Title + tag */}
              <div className={[
                "absolute left-0 right-0 z-10 p-5",
                course.textPos === "center"
                  ? "inset-0 flex flex-col justify-center"
                  : "bottom-0",
              ].join(" ")}>
                {course.textPos === "center" ? (
                  <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] text-black drop-shadow-sm" style={{ fontWeight: 400 }}>
                    {course.title}
                  </h3>
                ) : (
                  <span className="inline-block rounded-2xl bg-white px-4 py-2 text-[1.45rem] leading-[1.2] tracking-[-0.03em] text-black" style={{ fontWeight: 400 }}>
                    {course.title}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
