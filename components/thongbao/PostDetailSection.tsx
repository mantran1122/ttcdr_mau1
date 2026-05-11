"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/data/posts";
import { CATEGORY_LABEL } from "@/data/posts";

const EASE = [0.22, 1, 0.36, 1] as const;

function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/");
  return `Ngày ${day} tháng ${month}, ${year}`;
}

function ContentRenderer({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
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

    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="my-8 border-l-4 border-red-500 bg-red-50/50 px-6 py-5 text-lg italic text-slate-700"
        >
          {line.replace("> ", "").replace(/^"|"$/g, "")}
        </blockquote>,
      );
      i++;
      continue;
    }

    if (line.startsWith("| ") && lines[i + 1]?.includes("|---")) {
      const headerCells = line.split("|").map((c) => c.trim()).filter(Boolean);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("| ")) {
        rows.push(lines[i].split("|").map((c) => c.trim()).filter(Boolean));
        i++;
      }

      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                {headerCells.map((h, idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-bold text-slate-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ridx) => (
                <tr key={ridx} className="border-b border-slate-100">
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="px-4 py-3 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
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

type PostDetailSectionProps = {
  post: Post;
  relatedPosts: Post[];
};

export default function PostDetailSection({ post, relatedPosts }: PostDetailSectionProps) {
  return (
    <section className="pb-24 lg:pb-32">
      {/* Header above image */}
      <div className="container mx-auto mb-8 px-4 pt-2 sm:mb-10 sm:px-6 sm:pt-4 lg:mb-12 lg:px-8 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-5 flex items-center gap-2 text-[15px] text-slate-500"
        >
          <Link href="/thong-tin/thong-bao" className="transition-colors hover:text-red-600">
            Thông báo
          </Link>
          <span className="text-slate-300">/</span>
          <span className="line-clamp-1 text-slate-600">{CATEGORY_LABEL[post.category]}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          className="max-w-[980px] text-[clamp(2.15rem,6.1vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-slate-900"
        >
          {post.title}
        </motion.h1>
      </div>

      {/* Hero image */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="container mx-auto mb-10 px-4 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-auto max-h-[420px] w-full object-cover sm:max-h-[520px]"
            />
          </div>
        </motion.div>
      )}

      {/* Main article area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <aside className="lg:w-56 lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 ring-1 ring-red-100">
                  <i className="bi bi-folder-fill" />
                  {CATEGORY_LABEL[post.category]}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                className="mb-8 flex items-center gap-2 text-sm text-slate-500"
              >
                <i className="bi bi-calendar3" />
                {formatDate(post.date)}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
              >
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tags liên quan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200"
                    >
                      <i className="bi bi-tag-fill mr-1 text-[10px] text-slate-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                className="mt-10 hidden lg:block"
              >
                <Link
                  href="/thong-tin/thong-bao"
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
              <ContentRenderer content={post.content} />
            </motion.article>

            <div className="mt-10 lg:hidden">
              <Link
                href="/thong-tin/thong-bao"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-red-600"
              >
                <i className="bi bi-arrow-left" />
                Quay lại danh sách
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts - separate section on same page */}
      {relatedPosts.length > 0 && (
        <section className="mt-14 border-t border-slate-200/80 pt-12 sm:mt-16 sm:pt-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Thông báo liên quan</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedPosts.map((rp) => {
                  const [day, month, year] = rp.date.split("/");
                  return (
                    <Link
                      key={rp.slug}
                      href={`/thong-tin/thong-bao/${rp.slug}`}
                      className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-md"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        {rp.image ? (
                          <img
                            src={rp.image}
                            alt={rp.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                            <span className="text-3xl font-black text-slate-900">{day}</span>
                            <span className="mt-0.5 text-xs font-semibold uppercase text-slate-500">
                              Tháng {month}/{year}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="mb-1.5 flex items-center gap-2 text-xs">
                          <span className="font-medium text-red-600">
                            {CATEGORY_LABEL[rp.category]}
                          </span>
                          <span className="inline-block h-1 w-1 rounded-full bg-slate-300" />
                          <span className="text-slate-400">{rp.date}</span>
                        </div>
                        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-red-600">
                          {rp.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </section>
  );
}
