import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/data/posts";
import PostDetailSection from "@/components/thongbao/PostDetailSection";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Thông báo không tồn tại | Trung tâm Chuẩn đầu ra",
    };
  }

  return {
    title: `${post.title} | Trung tâm Chuẩn đầu ra`,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32">
      <PostDetailSection post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
