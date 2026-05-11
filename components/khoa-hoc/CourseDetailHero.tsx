import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, BarChart3, Clock3, Laptop, Layers3, Users } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseDetailHeroProps = {
  course: Course;
};

type QuickInfoItem = {
  label: string;
  value: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

export default function CourseDetailHero({ course }: CourseDetailHeroProps) {
  const quickInfo: QuickInfoItem[] = [
    { label: "Thời lượng", value: course.duration, Icon: Clock3 },
    { label: "Cấp độ", value: course.level, Icon: BarChart3 },
    { label: "Số buổi", value: course.sessions, Icon: Layers3 },
    { label: "Hình thức", value: course.format, Icon: Laptop },
    { label: "Đối tượng", value: course.audience, Icon: Users },
  ];

  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-16 sm:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-red-200/40 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
              Trang chi tiết khóa học
            </p>
            <h1 className="text-[36px] font-black leading-[1.15] tracking-[-0.045em] text-[#0B1A3B] sm:text-[44px] lg:text-[52px]">
              {course.title}
            </h1>
            <p className="mt-5 max-w-[760px] text-base leading-relaxed text-slate-600 sm:text-lg">{course.description}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="https://dkhp.nctu.edu.vn/"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED1F25] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d7171d]"
              >
                Đăng ký tư vấn
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
              <Link
                href="/khoa-hoc"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
              >
                Xem các khóa khác
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickInfo.map(({ label, value, Icon }) => (
                <article key={label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em]">{label}</p>
                  </div>
                  <p className="mt-1.5 text-sm font-semibold text-slate-800">{value}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-5">
            <div className="relative h-[290px] overflow-hidden rounded-[24px] sm:h-[360px]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                <p className="text-sm font-semibold text-slate-500">Sẵn sàng bắt đầu lộ trình?</p>
                <p className="mt-1 text-base font-black text-[#0B1A3B]">Đăng ký tư vấn để được hỗ trợ ngay hôm nay.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
