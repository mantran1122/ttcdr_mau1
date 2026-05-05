import HeroSection from "@/components/thongbao/HeroSection";
import PostListSection from "@/components/thongbao/PostListSection";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function ThongBaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Breadcrumb items={[{ label: "Thông tin" }, { label: "Thông báo" }]} />
      <PostListSection />
    </div>
  );
}
