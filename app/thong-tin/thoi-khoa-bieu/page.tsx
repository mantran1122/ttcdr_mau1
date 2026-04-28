import HeroSection from "@/components/thoikhoabieu/HeroSection";
import NoticeSection from "@/components/thoikhoabieu/NoticeSection";
import ScheduleSection from "@/components/thoikhoabieu/ScheduleSection";
import DownloadSection from "@/components/thoikhoabieu/DownloadSection";

export default function ThoiKhoaBieuPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NoticeSection />
      <ScheduleSection />
      <DownloadSection />
    </div>
  );
}
