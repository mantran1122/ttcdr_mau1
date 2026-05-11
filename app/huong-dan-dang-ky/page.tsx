import GuideSection from "@/components/huong-dan/GuideSection";

export default function HuongDanDangKyPage() {
  return (
    <div className="bg-background pb-20 pt-10 sm:pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-[clamp(1.7rem,3.2vw,2.7rem)] font-black leading-tight tracking-[-0.04em] text-slate-950">
            Hướng dẫn đăng ký
          </h1>
          {/* <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Quy trình đăng ký học tại Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực.
          </p> */}
        </div>
        <GuideSection />
      </div>
    </div>
  );
}
