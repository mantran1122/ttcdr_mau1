import HeroSection from "@/components/thoikhoabieu/HeroSection";
import ScheduleSection from "@/components/thoikhoabieu/ScheduleSection";
import DownloadSection from "@/components/thoikhoabieu/DownloadSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function ThoiKhoaBieuPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Breadcrumb items={[{ label: "Thông tin" }, { label: "Thời khóa biểu" }]} />
      <ScheduleSection />
      <DownloadSection />
    </div>
  );
}
