import HeroSection from "@/components/lichkiemtra/HeroSection";
import NoticeSection from "@/components/lichkiemtra/NoticeSection";
import ExamListSection from "@/components/lichkiemtra/ExamListSection";

export default function LichKiemTraPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NoticeSection />
      <ExamListSection />
    </div>
  );
}
