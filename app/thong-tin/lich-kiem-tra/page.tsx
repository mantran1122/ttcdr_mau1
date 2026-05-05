import HeroSection from "@/components/lichkiemtra/HeroSection";
import ExamListSection from "@/components/lichkiemtra/ExamListSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function LichKiemTraPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Breadcrumb items={[{ label: "Thông tin" }, { label: "Lịch kiểm tra" }]} />
      <ExamListSection />
    </div>
  );
}
