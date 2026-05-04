import HeroSection from "@/components/thongbao/HeroSection";
import NoticeSection from "@/components/thongbao/NoticeSection";
import PostListSection from "@/components/thongbao/PostListSection";

export default function ThongBaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <NoticeSection />
      <PostListSection />
    </div>
  );
}
