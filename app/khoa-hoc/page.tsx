import type { Metadata } from "next";
import CourseCTASection from "@/components/khoa-hoc/CourseCTASection";
import CourseGridSection from "@/components/khoa-hoc/CourseGridSection";
import HeroSection from "@/components/khoa-hoc/HeroSection";
import CourseLearningPathSection from "@/components/khoa-hoc/CourseLearningPathSection";
import { courses, learningPathSteps } from "@/data/courses";

export const metadata: Metadata = {
  title: "Khóa học | Trung tâm Chuẩn đầu ra",
  description:
    "Danh sách khóa học tại Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực, bao gồm AI, Ngoại ngữ, Tin học, Kỹ năng mềm và Kỹ năng nghề nghiệp.",
};

export default function KhoaHocPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CourseGridSection courses={courses} />
      <CourseLearningPathSection steps={learningPathSteps} />
      <CourseCTASection
        title="Sẵn sàng bắt đầu lộ trình học tập của bạn?"
        description="Liên hệ để được tư vấn khóa học phù hợp với mục tiêu cá nhân và nhận lộ trình học tối ưu ngay hôm nay."
        primaryLabel="Đăng ký tư vấn"
        primaryHref="https://dkhp.nctu.edu.vn/"
      />
    </div>
  );
}
