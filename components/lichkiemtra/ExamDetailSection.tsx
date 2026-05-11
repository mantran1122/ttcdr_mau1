"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, DoorOpen, Tag, Users2 } from "lucide-react";
import { EXAM_TYPE_LABEL, EXAM_TYPE_STYLE } from "@/data/exams";
import type { Exam } from "@/data/exams";

const EASE = [0.22, 1, 0.36, 1] as const;

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  return `Ngày ${day} tháng ${month}, ${year}`;
}

function ContentRenderer({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-slate-900 sm:text-3xl">
          {line.replace("## ", "")}
        </h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mb-3 mt-8 text-xl font-bold text-slate-900">
          {line.replace("### ", "")}
        </h3>,
      );
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={i} className="my-4 ml-6 list-decimal space-y-2 text-slate-700">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 ml-6 list-disc space-y-2 text-slate-700">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const boldLine = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    elements.push(
      <p
        key={i}
        className="my-4 text-base leading-relaxed text-slate-700 sm:text-lg"
        dangerouslySetInnerHTML={{ __html: boldLine }}
      />,
    );
    i++;
  }

  return <>{elements}</>;
}

type ExamDetailSectionProps = {
  exam: Exam;
  relatedExams: Exam[];
};

export default function ExamDetailSection({ exam, relatedExams }: ExamDetailSectionProps) {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto mb-8 px-4 pt-2 sm:mb-10 sm:px-6 sm:pt-4 lg:mb-12 lg:px-8 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-5 flex items-center gap-2 text-[15px] text-slate-500"
        >
          <Link href="/thong-tin/lich-kiem-tra" className="transition-colors hover:text-red-600">
            Lịch kiểm tra
          </Link>
          <span className="text-slate-300">/</span>
          <span className="line-clamp-1 text-slate-600">{exam.kind}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          className="max-w-[980px] text-[clamp(2.15rem,6.1vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-slate-900"
        >
          {exam.subject}
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <aside className="lg:w-56 lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
                className="mb-4 flex flex-wrap gap-2"
              >
                <span
                  className={[
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1",
                    EXAM_TYPE_STYLE[exam.type],
                  ].join(" ")}
                >
                  <Tag className="h-3.5 w-3.5" />
                  {EXAM_TYPE_LABEL[exam.type]}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                  {exam.kind}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                className="mb-6 flex items-center gap-2 text-sm text-slate-500"
              >
                <CalendarDays className="h-4 w-4" />
                {formatDate(exam.date)}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
                className="rounded-xl bg-slate-50 p-4"
              >
                <div className="space-y-2.5 text-sm text-slate-600">
                  <p className="flex items-start gap-2">
                    <Users2 className="mt-0.5 h-4 w-4 text-slate-400" />
                    <span>{exam.groups}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 text-slate-400" />
                    <span>{exam.session}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <DoorOpen className="mt-0.5 h-4 w-4 text-slate-400" />
                    <span>{exam.room}</span>
                  </p>
                </div>
                {exam.note && (
                  <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
                    {exam.note}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                className="mt-10 hidden lg:block"
              >
                <Link
                  href="/thong-tin/lich-kiem-tra"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-red-600"
                >
                  <i className="bi bi-arrow-left" />
                  Quay lại danh sách
                </Link>
              </motion.div>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-10 h-px bg-slate-200" />

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              <p className="mb-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {exam.excerpt}
              </p>
              <ContentRenderer content={exam.content} />
            </motion.article>

            <div className="mt-10 lg:hidden">
              <Link
                href="/thong-tin/lich-kiem-tra"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-red-600"
              >
                <i className="bi bi-arrow-left" />
                Quay lại danh sách
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedExams.length > 0 && (
        <section className="mt-14 border-t border-slate-200/80 pt-12 sm:mt-16 sm:pt-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Lịch thi liên quan</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedExams.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/thong-tin/lich-kiem-tra/${item.slug}`}
                    className="group block rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs">
                      <span
                        className={[
                          "rounded-full px-2 py-0.5 font-bold uppercase tracking-[0.06em] ring-1",
                          EXAM_TYPE_STYLE[item.type],
                        ].join(" ")}
                      >
                        {EXAM_TYPE_LABEL[item.type]}
                      </span>
                      <span className="inline-block h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-slate-400">{item.date}</span>
                    </div>
                    <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-red-600">
                      {item.subject}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-500">{item.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </section>
  );
}
