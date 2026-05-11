import HeroSection from "@/components/thongbao/HeroSection";
import PostGrid from "@/components/thongbao/PostGrid";

/*
import PostListSection from "@/components/thongbao/PostListSection";
*/

export default function ThongBaoPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection />
      <PostGrid />
    </div>
  );
}
