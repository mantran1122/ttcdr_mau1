import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseCTASection from "@/components/khoa-hoc/CourseCTASection";
import CoursePremiumOverviewSection from "@/components/khoa-hoc/CoursePremiumOverviewSection";
import { courses, getCourseBySlug } from "@/data/courses";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Khóa học không tồn tại | Trung tâm Chuẩn đầu ra",
    };
  }

  return {
    title: `${course.title} | Trung tâm Chuẩn đầu ra`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-medium [&_*]:!font-medium [&_h1]:!leading-[1.25] [&_h2]:!text-[50px] [&_h2]:!leading-[1.25] [&_h3]:!leading-[1.25] [&_h4]:!leading-[1.25] [&_h5]:!leading-[1.25] [&_h6]:!leading-[1.25]">
      <CoursePremiumOverviewSection course={course} />
      {/* <CourseSuitableStudentsSection course={course} /> */}
      <CourseCTASection
        title={`Sẵn sàng tham gia khóa ${course.title}?`}
        description="Đội ngũ tư vấn sẽ hỗ trợ bạn chọn lớp phù hợp, giải đáp lịch học và hướng dẫn đăng ký nhanh chóng."
        primaryLabel="Đăng ký tư vấn"
        primaryHref="https://dkhp.nctu.edu.vn/"
        secondaryLabel="Quay lại danh sách khóa học"
        secondaryHref="/khoa-hoc"
      />
    </div>
  );
}
