import HeroSection from "@/components/home/HeroSection";
import ThongTinSection from "@/components/home/ThongTinSection";
import TinTucSection from "@/components/home/TinTucSection";
import QuyDinhSection from "@/components/home/FaqSection";
import GioiThieuSection from "@/components/home/GioiThieuSection";
import LearningGroupsSection from "@/components/home/LearningGroupsSection";
import OutcomeStandardsSection from "@/components/home/ChuanDauRaSection";
import CoursesShowcaseSection from "@/components/home/CoursesShowcaseSection";

export default function HomePage() {
  return (
    <>
      {/* Unified background canvas — single solid color for consistency */}
      <div className="relative bg-background">
        <HeroSection />
        <ThongTinSection />
        {/* <HeroThongTinMorphSection /> */}
        <LearningGroupsSection />
        <OutcomeStandardsSection />
        <CoursesShowcaseSection />
        <TinTucSection />
      <QuyDinhSection />
      </div>
      {/* <GioiThieuSection /> */}
    </>
  );
}
