import HeroSection from "@/components/news/HeroSection";
import PostGrid from "@/components/news/PostGrid";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection />
      <PostGrid />
    </div>
  );
}
