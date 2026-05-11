import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExamDetailSection from "@/components/lichkiemtra/ExamDetailSection";
import { EXAMS, getExamBySlug, getRelatedExams } from "@/data/exams";

export function generateStaticParams() {
  return EXAMS.map((exam) => ({ slug: exam.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) {
    return {
      title: "Lịch thi không tồn tại | Trung tâm Chuẩn đầu ra",
    };
  }

  return {
    title: `${exam.subject} | Trung tâm Chuẩn đầu ra`,
    description: exam.excerpt,
  };
}

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getExamBySlug(slug);

  if (!exam) {
    notFound();
  }

  const relatedExams = getRelatedExams(slug, 3);

  return (
    <div className="min-h-screen bg-background pt-28 sm:pt-32">
      <ExamDetailSection exam={exam} relatedExams={relatedExams} />
    </div>
  );
}
