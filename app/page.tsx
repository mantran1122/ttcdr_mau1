import BannerSection from "@/components/home/BannerSection";
import HeroSection from "@/components/home/HeroSection";
import ThongTinSection from "@/components/home/ThongTinV3";
import TinTucSection from "@/components/home/TinTucSection";
import QuyDinhSection from "@/components/home/FaqSection";
import LearningGroupsSection from "@/components/home/LearningGroupsSection";
import OutcomeStandardsSection from "@/components/home/ChuanDauRaSection";
import CoursesShowcaseSection from "@/components/home/CoursesShowcaseSection";

export default function HomePage() {
  return (
    <>
      <div className="relative bg-background">
        <BannerSection />
        {/* <HeroSection /> */}
        <LearningGroupsSection />
        <OutcomeStandardsSection />
        <ThongTinSection />
        <CoursesShowcaseSection />
        <TinTucSection />
        {/* <QuyDinhSection /> */}
      </div>
    </>
  );
}
