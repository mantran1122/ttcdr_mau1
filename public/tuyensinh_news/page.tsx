import Image from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight, ChevronRight, Calendar, Home, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

interface PostData {
  id: number;
  title: string;
  description: string;
  date: string;
  image_thumb?: string;
  alias?: string;
  url?: string;
  tags?: number[];
}

interface PaginationData {
  current_page: number;
  total_pages: number;
  total_items: number;
  per_page: number;
}

const TAG_TABS = [
  { slug: 'tat-ca', title: 'Tất cả', tag_id: 1, href: '/news' },
  { slug: 'tuyen-sinh-dai-hoc', title: 'Đại học', tag_id: 90, href: '/news/tag/tuyen-sinh-dai-hoc' },
  { slug: 'tuyen-sinh-sau-dai-hoc', title: 'Sau Đại học', tag_id: 60, href: '/news/tag/tuyen-sinh-sau-dai-hoc' },
  { slug: 'tuyen-sinh-he-quoc-te', title: 'Hệ Quốc tế', tag_id: 121, href: '/news/tag/tuyen-sinh-he-quoc-te' },
  { slug: 'tuyen-sinh-cao-dang', title: 'Cao đẳng', tag_id: 91, href: '/news/tag/tuyen-sinh-cao-dang' },
  { slug: 'huong-nghiep', title: 'Hướng nghiệp', tag_id: 86, href: '/news/tag/huong-nghiep' },
  { slug: 'nhat-ky-sinh-vien', title: 'Nhật ký sinh viên', tag_id: 120, href: '/news/tag/nhat-ky-sinh-vien' }
];

async function getPosts(tagId: number, page: number): Promise<{ data: PostData[], pagination: PaginationData | null }> {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const res = await fetch(
      `https://nctu.edu.vn/apis/news/get_posts_with_pagination_by_tag_exclude_tags?tag_id=${tagId}&exclude_tag_ids=88,89,79,81,112&limit=15&page=${page}`,
      {
        cache: 'no-store',
        headers: { 'X-Api-key': 'namcanthodnc@168@#' }
      }
    );
    if (!res.ok) return { data: [], pagination: null };

    const json = await res.json();
    if (json.status && json.data) {
      return { data: json.data, pagination: json.pagination };
    }
  } catch (error) {
    console.error("Fetch API error:", error);
  }
  return { data: [], pagination: null };
}

function formatVietnameseDate(dateStr: string) {
  if (!dateStr) return '';
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    return `${parts[0]} Tháng ${parts[1]}, ${parts[2]}`;
  }
  return dateStr;
}

export async function generateMetadata(): Promise<Metadata> {
  const currentTab = TAG_TABS[0];
  const description = 'Tin tức, thông báo tuyển sinh và các sự kiện tổng hợp tại Đại học Nam Cần Thơ năm 2026.';
  const canonicalUrl = `https://tuyensinh.nctu.edu.vn/news`;

  return {
    title: `Tin tức Tổng hợp – Tuyển sinh Đại học Nam Cần Thơ`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Tin tức Tổng hợp – Tuyển sinh Đại học Nam Cần Thơ 2026`,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [{ url: 'https://tuyensinh.nctu.edu.vn/assets/image/og-image.jpg', width: 680, height: 428 }],
    },
  };
}

export default async function NewsAllPage(props: { searchParams: Promise<{ page?: string }> }) {
  const resolvedSearchParams = await props.searchParams;

  const currentSlug = 'tat-ca';
  const pageParam = parseInt(resolvedSearchParams.page || "1", 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const currentTab = TAG_TABS[0]; // Tương ứng 'tat-ca'

  // Fetch all news
  const { data: posts, pagination } = await getPosts(currentTab.tag_id, currentPage);

  return (
    <div className="min-h-screen bg-white pb-20">

      {/* ── JSON-LD: CollectionPage + BreadcrumbList ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `Tin tức Tuyển sinh Đại học Nam Cần Thơ 2026`,
          "url": `https://tuyensinh.nctu.edu.vn/news`,
          "description": 'Tin tức, thông báo tuyển sinh và các sự kiện tổng hợp tại Đại học Nam Cần Thơ năm 2026.',
          "inLanguage": "vi-VN",
          "publisher": { "@id": "https://nctu.edu.vn/#organization" },
          "isPartOf": { "@id": "https://tuyensinh.nctu.edu.vn/#website" },
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://tuyensinh.nctu.edu.vn" },
            { "@type": "ListItem", "position": 2, "name": "Tin tức", "item": "https://tuyensinh.nctu.edu.vn/news" },
          ],
        })
      }} />

      {/* ── HERO BANNER ── */}
      <div className="relative w-full h-[250px] md:h-[480px] mb-10">
        <Image
          src="https://nctu.edu.vn/uploads/admissions/2026_04/banner-tintuc2.jpg"
          alt={currentTab.title}
          fill
          className="object-cover object-[50%_65%]"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="max-w-[1430px] mx-auto w-full px-[12px]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-[500] text-white tracking-tight drop-shadow-xl mb-6">
              Tin tức Tuyển sinh
            </h1>

            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-[16px] text-white/90">
              <Link href="/" className="hover:text-[#FFD24B] flex items-center transition-colors">
                <Home size={16} className="mr-1.5 mb-[2px]" /> Trang chủ
              </Link>
              <ChevronRight size={14} className="text-slate-600" />
              <Link href="/news-events" className="hover:text-[#FFD24B] transition-colors">
                Tin tức & Sự kiện
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-[1430px] mx-auto px-[12px]">

        {/* ── DOT TABS ── */}
        <div className="mb-10 w-full border-b border-slate-200 pb-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-8 md:gap-14 min-w-max px-2 items-center">
              {TAG_TABS.map((tab) => {
                const isActive = tab.slug === currentSlug;
                return (
                  <Link
                    key={tab.slug}
                    href={tab.href}
                    className={`
                      flex items-center gap-2.5 text-[16px] font-[400] whitespace-nowrap transition-all duration-300
                      ${isActive
                        ? 'text-slate-900 pointer-events-none'
                        : 'text-slate-600 hover:text-[#c8102e]'}
                    `}
                  >
                    {isActive ? (
                      <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#c8102e]/10 text-[#c8102e]">
                        <Newspaper size={16} strokeWidth={2} />
                      </div>
                    ) : (
                      <div className="w-[8px] h-[8px] rounded-full bg-slate-400"></div>
                    )}
                    {tab.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── NỘI DUNG GRID BÀI VIẾT ── */}
        {posts && posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => {
                const postUrl = post.url || '#';

                const rThumb = post.image_thumb?.startsWith('http')
                  ? post.image_thumb
                  : (post.image_thumb ? `https://nctu.edu.vn/${post.image_thumb}` : "/no-image.jpg");

                const fDate = formatVietnameseDate(post.date);

                // Ưu tiên xác định nhãn Tag từ list tags
                const cardLabel = post.tags?.includes(90) ? "Đại học" : (post.tags?.includes(91) ? "Cao đẳng" : (post.tags?.includes(60) ? "Sau Đại học" : (post.tags?.includes(121) ? "Hệ Quốc tế" : "Tin tức")));

                return (
                  <Link
                    href={postUrl}
                    key={post.id}
                    className="group bg-[#f8f9fa] border border-transparent hover:border-slate-100 flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-300"
                  >
                    {/* Hình Ảnh và Nhãn Tag */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-white rounded-t-3xl">
                      <Image
                        src={rThumb}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Phần chữ bên dưới */}
                    <div className="p-5 flex flex-col flex-grow text-left bg-[#f4f7fa]/50 group-hover:bg-[#f4f7fa] transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[15px] font-[500] text-[#c8102e]">
                          {cardLabel}
                        </span>
                        <span className="text-slate-400 mx-0.5">•</span>
                        <div className="text-[14px] font-[500] text-slate-500">
                          {fDate}
                        </div>
                      </div>

                      {/* Title: To, Rõ, Màu Xanh đen */}
                      <h3 className="text-[19px] md:text-[20px] font-[500] text-[#1e293b] leading-[1.3] mb-3 line-clamp-3 group-hover:text-[#c8102e] transition-colors font-momotrust tracking-tight">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ── PAGINATION ── */}
            {pagination && pagination.total_pages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-16 pt-6 pb-8">
                {/* Nút Previous */}
                {currentPage > 1 ? (
                  <Link
                    href={`${currentTab.href}?page=${currentPage - 1}`}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 bg-white transition-colors"
                  >
                    <MoveLeft size={18} />
                  </Link>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-slate-300 bg-transparent cursor-not-allowed">
                    <MoveLeft size={18} />
                  </div>
                )}

                {/* Các bộ đếm Page Numbers */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: pagination.total_pages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === pagination.total_pages || Math.abs(p - currentPage) <= 1)
                    .map((p, index, array) => {
                      const showDots = index > 0 && p - array[index - 1] > 1;
                      return (
                        <div key={p} className="flex items-center gap-1.5">
                          {showDots && <span className="px-2 text-slate-400">...</span>}

                          {currentPage === p ? (
                            <div className="w-10 h-10 flex items-center justify-center rounded-md text-[15.5px] font-[500] bg-[#e31837] text-white shadow-md transition-all">
                              {p}
                            </div>
                          ) : (
                            <Link
                              href={`${currentTab.href}?page=${p}`}
                              className="w-10 h-10 flex items-center justify-center rounded-md text-[15.5px] font-[500] border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 bg-white transition-all"
                            >
                              {p}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                </div>

                {/* Nút Next */}
                {currentPage < pagination.total_pages ? (
                  <Link
                    href={`${currentTab.href}?page=${currentPage + 1}`}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 bg-white transition-colors"
                  >
                    <MoveRight size={18} />
                  </Link>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-slate-300 bg-transparent cursor-not-allowed">
                    <MoveRight size={18} />
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center border-t border-slate-100 mt-[-40px]">
            <div className="w-20 h-20 mb-6 bg-[#f8f9fa] rounded-full flex items-center justify-center text-slate-300 border border-slate-200">
              <Calendar size={32} />
            </div>
            <h3 className="text-[20px] font-[500] text-slate-800 mb-2">Đang cập nhật</h3>
            <p className="text-slate-500 text-[15.5px] max-w-sm">Chưa có tin tức cho chuyên mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
}
