import HeroSection from "@/components/gioithieu/HeroSection";
import GioiThieuChungSection from "@/components/gioithieu/GioiThieuChungSection";
import NhiemVuSection from "@/components/gioithieu/NhiemVuSection";
import NhanSuSection from "@/components/gioithieu/NhanSuSection";
import HoatDongSection from "@/components/gioithieu/HoatDongSection";
import DinhHuongPhatTrienSection from "@/components/gioithieu/DinhHuongPhatTrienSection";

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <GioiThieuChungSection />
      <NhiemVuSection />
      <DinhHuongPhatTrienSection />
      <NhanSuSection />
      {/* <HoatDongSection /> */}
      
    </div>
  );
}
