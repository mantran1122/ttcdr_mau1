import Link from "next/link";
import Image from "next/image";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Truy cập nhanh",
    links: [
      { label: "Khoá học", href: "/khoa-hoc" },
      { label: "Tra cứu kết quả", href: "/kqthi" },
      { label: "Thời khóa biểu", href: "/thong-tin/thoi-khoa-bieu" },
      { label: "Lịch kiểm tra", href: "/thong-tin/lich-kiem-tra" },
      { label: "Thông báo", href: "/thong-tin/thong-bao" },
    ],
  },
  {
    title: "VSTEP",
    links: [
      { label: "Trang chủ VSTEP", href: "https://vstep.nctu.edu.vn/", external: true },
      { label: "Lịch kiểm tra", href: "https://vstep.nctu.edu.vn/lich-thi/", external: true },
      { label: "Thông báo VSTEP", href: "https://vstep.nctu.edu.vn/thong-bao-vstep/", external: true },
      { label: "Kế hoạch năm", href: "https://vstep.nctu.edu.vn/ke-hoach-nam/", external: true },
    ],
  },
];

const contactItems = [
  {
    icon: (
      <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    content: (
      <span className="text-[16px] text-gray-500 leading-relaxed">
        <span className="block">168 Nguyễn Văn Cừ (nối dài), P. An Bình, TP. Cần Thơ</span>
        <span className="block">Khu C, phòng C2-14</span>
      </span>
    ),
  },
  {
    icon: (
      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    content: (
      <a href="tel:02923798789" className="text-[16px] text-gray-500 transition-colors hover:text-gray-900">
        02923 798 789
      </a>
    ),
  },
  {
    icon: (
      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    content: (
      <a href="mailto:ttchuandaura@nctu.edu.vn" className="text-[16px] text-gray-500 transition-colors hover:text-gray-900 break-all">
        ttchuandaura@nctu.edu.vn
      </a>
    ),
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/nctu.edu.vn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z" />
      </svg>
    ),
  },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const cls = "block py-1 text-[16px] text-gray-500 transition-colors hover:text-gray-900";
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

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:px-6 lg:px-8">

        {/* Main grid — 4 equal columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr] lg:gap-32">

          {/* Col 1: Logo + desc + social */}
          <div className="flex flex-col gap-8 min-w-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_truong_3.png"
                alt="Logo NCT"
                width={220}
                height={64}
                className="h-16 w-auto max-w-[220px] object-contain"
                sizes="(min-width: 1024px) 220px, 180px"
                quality={100}
              />
            </Link>

            {/* <p className="text-base leading-relaxed text-gray-500">
              Đào tạo, bồi dưỡng Tin học, Ngoại ngữ, Kỹ năng mềm và Kỹ năng
              nghề nghiệp.
            </p> */}

            <div className="flex items-center gap-3 pt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-900"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3: Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <p className="mb-4 text-[20px] whitespace-nowrap font-semibold text-gray-900">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <FooterNavLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Liên hệ */}
          <div className="min-w-0">
            <p className="mb-4 text-[20px] font-semibold text-gray-900">Liên hệ</p>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-gray-200 pt-6 pb-4">
          <p className="text-center text-sm text-gray-400">
            © 2024 Copyright – Trường Đại học Nam Cần Thơ
          </p>
        </div>

      </div>
    </footer>
  );
}
