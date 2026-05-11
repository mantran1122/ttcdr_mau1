import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";

type CoursesPageHeroProps = {
  featuredCourse: Course;
  courseCount: number;
};

export default function CoursesPageHero({ featuredCourse, courseCount }: CoursesPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-16 sm:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-200/35 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
              Danh mục đào tạo
            </p>
            <h1 className="text-[38px] font-black leading-[1.15] tracking-[-0.045em] text-[#0B1A3B] sm:text-[46px] lg:text-[56px]">
              Khóa học của chúng tôi
            </h1>
            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-600 sm:text-lg">
              Hệ thống khóa học được thiết kế theo chuẩn đầu ra, cân bằng giữa kiến thức nền tảng và thực hành thực
              tế. Học viên có thể chọn lộ trình phù hợp để phát triển năng lực toàn diện.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#danh-sach-khoa-hoc"
                className="inline-flex items-center gap-2 rounded-full bg-[#ED1F25] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#d7171d]"
              >
                Xem các khóa học
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
              <Link
                href="/huong-dan-dang-ky"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
              >
                Hướng dẫn đăng ký
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Tổng khóa học</p>
                <p className="mt-1 text-2xl font-black tracking-tight text-[#0B1A3B]">{courseCount}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Hình thức</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">Online - Offline - Hybrid</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Định hướng</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">Chuẩn đầu ra - Ứng dụng</p>
              </div>
            </div>
          </div>

          <article className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:p-5">
            <div className="relative h-[260px] overflow-hidden rounded-[24px] sm:h-[320px]">
              <Image
                src={featuredCourse.image}
                alt={featuredCourse.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                Khóa học nổi bật
              </span>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xl font-black leading-tight text-white sm:text-2xl">{featuredCourse.title}</p>
                <p className="mt-1.5 text-sm text-white/90">{featuredCourse.description}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
