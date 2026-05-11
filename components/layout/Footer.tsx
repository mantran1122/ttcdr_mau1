import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const quickAccessLinks: FooterLink[] = [
  { label: "Khoá học", href: "/khoa-hoc" },
  { label: "Tra cứu kết quả", href: "/kqthi" },
  { label: "Thời khóa biểu", href: "/thong-tin/thoi-khoa-bieu" },
  { label: "Lịch kiểm tra", href: "/thong-tin/lich-kiem-tra" },
  { label: "Thông báo", href: "/thong-tin/thong-bao" },
];

const vstepLinks: FooterLink[] = [
  { label: "Trang chủ VSTEP", href: "https://vstep.nctu.edu.vn/", external: true },
  { label: "Lịch kiểm tra VSTEP", href: "https://vstep.nctu.edu.vn/lich-thi/", external: true },
  { label: "Thông báo VSTEP", href: "https://vstep.nctu.edu.vn/thong-bao-vstep/", external: true },
  { label: "Kế hoạch năm", href: "https://vstep.nctu.edu.vn/ke-hoach-nam/", external: true },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/nctu.edu.vn",
    iconClass: "bi bi-facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    iconClass: "bi bi-instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    iconClass: "bi bi-youtube",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    iconClass: "bi bi-tiktok",
  },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const cls =
    "inline-block text-[18px] font-normal leading-[2.2] text-black/80 transition-colors duration-200 hover:text-black";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={cls}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  );
}

// Legacy footer (white layout) is temporarily commented out and replaced by this navy layout.
export default function Footer() {
  return (
    <footer className="w-full bg-[rgb(255,210,75)] text-black" style={{ fontFamily: "Inter, Roboto, Arial, sans-serif" }}>
      <div className="mx-auto max-w-[1540px] px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-y-12 pt-14 pb-16 md:pt-[70px] md:pb-[90px] lg:grid-cols-[1.2fr_0.92fr_0.92fr_1.22fr] lg:gap-x-20">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo_truong_3.png"
                alt="Đại học Nam Cần Thơ"
                width={270}
                height={98}
                className="mb-[44px] h-auto w-[250px] max-w-full object-contain opacity-[0.94] lg:w-[265px]"
                sizes="(min-width: 1024px) 265px, (min-width: 640px) 255px, 250px"
                priority={false}
              />
            </Link>

            <div className="flex flex-wrap gap-[18px]">
              {socialLinks.map(({ label, href, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black/30 bg-transparent text-black/70 transition-all duration-200 hover:border-black/70 hover:bg-black/5 hover:text-black"
                >
                  <i className={`${iconClass} text-[23px] leading-none`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-[34px] text-[26px] font-bold text-black">Truy cập nhanh</h3>
            <ul>
              {quickAccessLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[34px] text-[26px] font-bold text-black">VSTEP</h3>
            <ul>
              {vstepLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[34px] text-[26px] font-bold text-black">Liên hệ</h3>
            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-[26px] w-[26px] shrink-0 text-black/75" strokeWidth={2.2} />
                <p className="text-[18px] leading-[1.65] text-black/80">
                  <span className="block">168 Nguyễn Văn Cừ nối dài, P.</span>
                  <span className="block">An Bình, Q. Ninh Kiều, TP. Cần</span>
                  <span className="block">Thơ</span>
                </p>
              </li>

              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-[26px] w-[26px] shrink-0 text-black/75" strokeWidth={2.2} />
                <a
                  href="tel:02923798789"
                  className="text-[18px] leading-[1.65] text-black/80 transition-colors duration-200 hover:text-black"
                >
                  02923 798 789
                </a>
              </li>

              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-[26px] w-[26px] shrink-0 text-black/75" strokeWidth={2.2} />
                <a
                  href="mailto:ttchuandaura@nctu.edu.vn"
                  className="text-[18px] leading-[1.65] text-black/80 transition-colors duration-200 hover:text-black break-all"
                >
                  ttchuandaura@nctu.edu.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/15">
        <div className="mx-auto flex min-h-[88px] w-full max-w-[1540px] flex-col justify-center gap-4 px-6 py-4 text-left sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-[17px] text-black/80">© 2026 Nam Can Tho University (DNC). All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link href="/chinh-sach-bao-mat" className="text-[17px] text-black/80 transition-colors hover:text-black">
              Chính sách bảo mật
            </Link>
            <Link href="/dieu-khoan-su-dung" className="text-[17px] text-black/80 transition-colors hover:text-black">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
