import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NEWS_POSTS, getNewsPostBySlug, getRelatedNewsPosts } from "@/data/newsPosts";
import PostDetailSection from "@/components/news/PostDetailSection";

export function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại | Trung tâm Chuẩn đầu ra",
    };
  }

  return {
    title: `${post.title} | Trung tâm Chuẩn đầu ra`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedNewsPosts(slug, 3);

  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32">
      <PostDetailSection post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
