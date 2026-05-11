import Image from "next/image";
import type { ComponentType } from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Layers3,
  MessageSquareMore,
  UserRoundCheck,
  Users,
} from "lucide-react";
import type { Course } from "@/data/courses";

type CoursePremiumOverviewSectionProps = {
  course: Course;
};

type InfoCard = {
  label: string;
  value: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  toneClass: string;
  wide?: boolean;
};

type FloatingFeature = {
  title: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  toneClass: string;
};

type ShortCopySet = {
  topicTags: string[];
  floatingTitles: string[];
  bottomBadges: string[];
  learningPoints: string[];
};

const FLOATING_ICON_STYLES = [
  { Icon: BriefcaseBusiness, toneClass: "bg-blue-100 text-blue-600" },
  { Icon: MessageSquareMore, toneClass: "bg-violet-100 text-violet-600" },
  { Icon: Users, toneClass: "bg-emerald-100 text-emerald-600" },
  { Icon: Layers3, toneClass: "bg-amber-100 text-amber-600" },
] as const;

const BADGE_ICON_STYLES = [
  { Icon: BriefcaseBusiness, toneClass: "text-red-500" },
  { Icon: MessageSquareMore, toneClass: "text-violet-500" },
  { Icon: BarChart3, toneClass: "text-sky-500" },
  { Icon: Users, toneClass: "text-emerald-500" },
  { Icon: Clock3, toneClass: "text-amber-500" },
] as const;

const SHORT_COPY_BY_SLUG: Record<string, ShortCopySet> = {
  "tri-tue-nhan-tao": {
    topicTags: [
      "AI có trách nhiệm",
      "Viết prompt hiệu quả",
      "Ứng dụng AI học tập",
      "Workflow AI cá nhân",
      "Kiểm chứng nội dung AI",
      "Thành thạo công cụ AI",
    ],
    floatingTitles: ["AI có trách nhiệm", "Viết prompt hiệu quả", "Ứng dụng AI học tập", "Workflow AI cá nhân"],
    bottomBadges: [
      "Thành thạo công cụ AI",
      "Workflow AI cá nhân",
      "Kiểm soát rủi ro AI",
      "Tăng tốc dự án nhóm",
      "AI có trách nhiệm",
    ],
    learningPoints: [
      "AI có trách nhiệm",
      "Viết prompt hiệu quả",
      "Ứng dụng AI học tập",
      "Thiết kế workflow AI",
      "Kiểm chứng dữ liệu AI",
    ],
  },
  "ngoai-ngu": {
    topicTags: [
      "Ngữ pháp cốt lõi",
      "Phản xạ giao tiếp",
      "Đọc hiểu chuyên ngành",
      "Viết email học thuật",
      "Luyện thi đầu ra",
      "Tự học bền vững",
    ],
    floatingTitles: ["Ngữ pháp cốt lõi", "Phản xạ giao tiếp", "Đọc hiểu chuyên ngành", "Viết email học thuật"],
    bottomBadges: ["Tự tin tiếng Anh", "Đạt chuẩn đầu ra", "Nắm phương pháp học", "Sẵn sàng kỳ thi", "Ngữ pháp cốt lõi"],
    learningPoints: [
      "Ngữ pháp cốt lõi",
      "Phản xạ giao tiếp",
      "Đọc hiểu chuyên ngành",
      "Viết email học thuật",
      "Luyện thi đầu ra",
    ],
  },
  "tin-hoc": {
    topicTags: [
      "Soạn thảo chuyên nghiệp",
      "Xử lý dữ liệu",
      "Thiết kế slide",
      "Làm việc nhóm số",
      "Bảo mật dữ liệu",
      "Chuẩn kỹ năng CNTT",
    ],
    floatingTitles: ["Soạn thảo chuyên nghiệp", "Xử lý dữ liệu", "Thiết kế slide", "Bảo mật dữ liệu"],
    bottomBadges: ["Thành thạo Office", "Tự tin bảng tính", "Tăng hiệu suất số", "Đáp ứng chuẩn CNTT", "Bảo mật dữ liệu"],
    learningPoints: [
      "Soạn thảo học thuật chuẩn",
      "Xử lý dữ liệu",
      "Thiết kế slide",
      "Làm việc nhóm số",
      "Bảo mật dữ liệu",
    ],
  },
  "ky-nang-mem": {
    topicTags: [
      "Giao tiếp chuyên nghiệp",
      "Làm việc nhóm",
      "Tư duy phản biện",
      "Quản trị thời gian",
      "Thuyết trình tự tin",
      "Giải quyết vấn đề",
    ],
    floatingTitles: ["Giao tiếp chuyên nghiệp", "Làm việc nhóm", "Tư duy phản biện", "Quản trị thời gian"],
    bottomBadges: ["Giao tiếp tự tin", "Làm việc chủ động", "Quản lý mục tiêu", "Phản biện rõ ràng", "Trình bày ý tưởng"],
    learningPoints: [
      "Giao tiếp chuyên nghiệp",
      "Làm việc nhóm tốt",
      "Tư duy phản biện",
      "Quản trị thời gian",
      "Thuyết trình tự tin",
    ],
  },
  "ky-nang-nghe-nghiep": {
    topicTags: [
      "Xây dựng CV chuẩn",
      "Portfolio cá nhân tốt",
      "LinkedIn profile nổi bật",
      "Phỏng vấn thực chiến",
      "Giao tiếp công sở",
      "Định vị nghề nghiệp",
    ],
    floatingTitles: ["CV nổi bật", "Phỏng vấn thực tế", "Kỹ năng công sở", "Career ready"],
    bottomBadges: ["CV chuyên nghiệp", "Mock interview", "Career planning", "Teamwork công sở", "Deadline management"],
    learningPoints: ["CV và portfolio", "Kỹ năng phỏng vấn", "Quản lý deadline", "Định vị nghề nghiệp", "Sẵn sàng đi làm"],
  },
};

// Lấy số "SL SV đăng ký học" từ bảng user cung cấp, tổng hợp theo từng nhóm khóa học.
const PARTICIPANTS_BY_SLUG: Record<string, number> = {
  // Kỹ năng trí tuệ nhân tạo
  "tri-tue-nhan-tao": 3778,
  // Ngoại ngữ = A2 + B1 + VSTEP + Pháp B1 + C1
  "ngoai-ngu": 2514 + 18556 + 2472 + 705 + 600,
  // Tin học = Ứng dụng CNTT cơ bản + nâng cao
  "tin-hoc": 15164 + 15420,
  "ky-nang-mem": 36836,
  "ky-nang-nghe-nghiep": 23481,
};

function cleanText(value: string) {
  return value
    .replace(/^Module\s*\d+\s*:\s*/i, "")
    .replace(/[.;:,!?]+$/g, "")
    .trim();
}

function uniqueContent(items: string[]) {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of items) {
    const cleaned = cleanText(item);
    const key = cleaned.toLowerCase();
    if (!cleaned || seen.has(key)) continue;
    seen.add(key);
    result.push(cleaned);
  }

  return result;
}

function shortLabel(value: string, maxWords: number) {
  const words = cleanText(value).split(/\s+/);
  if (words.length <= maxWords) return words.join(" ");
  return words.slice(0, maxWords).join(" ");
}

function mergeShortCopy(customItems: string[], fallbackItems: string[], limit: number) {
  const merged = uniqueContent([...customItems, ...fallbackItems.map((item) => shortLabel(item, 4))]);
  return merged.slice(0, limit);
}

function buildTopicTags(course: Course) {
  const source = uniqueContent([...course.whatYouWillLearn, ...course.outcomes, ...course.benefits]);
  const custom = SHORT_COPY_BY_SLUG[course.slug]?.topicTags ?? [];
  return mergeShortCopy(custom, source, 6);
}

function buildLearningPoints(course: Course) {
  const source = uniqueContent([...course.whatYouWillLearn, ...course.outcomes, ...course.benefits]);
  return source.slice(0, 5);
}

function buildBottomBadges(course: Course) {
  const source = uniqueContent([...course.outcomes, ...course.whatYouWillLearn, ...course.benefits]);
  const custom = SHORT_COPY_BY_SLUG[course.slug]?.bottomBadges ?? [];
  return mergeShortCopy(custom, source, 5);
}

function buildFloatingFeatures(course: Course): FloatingFeature[] {
  const primary = uniqueContent([...course.whatYouWillLearn, ...course.outcomes]);
  const fallback = uniqueContent([...course.benefits, ...course.suitableFor]);
  const custom = SHORT_COPY_BY_SLUG[course.slug]?.floatingTitles ?? [];
  const filled = mergeShortCopy(custom, [...primary, ...fallback], 4);

  while (filled.length < 4) {
    filled.push("Nội dung nổi bật");
  }

  return filled.slice(0, 4).map((item, index) => {
    const iconStyle = FLOATING_ICON_STYLES[index % FLOATING_ICON_STYLES.length];
    return {
      title: shortLabel(item, 4),
      Icon: iconStyle.Icon,
      toneClass: iconStyle.toneClass,
    };
  });
}

function formatParticipants(slug: string) {
  const value = PARTICIPANTS_BY_SLUG[slug] ?? 12000;
  const roundedToThousand = Math.round(value / 1000) * 1000;
  return `+${Math.max(1, roundedToThousand / 1000)}K`;
}

export default function CoursePremiumOverviewSection({ course }: CoursePremiumOverviewSectionProps) {
  const infoCards: InfoCard[] = [
    {
      label: "THỜI LƯỢNG",
      value: course.duration,
      Icon: Clock3,
      toneClass: "bg-red-50 text-red-500",
    },
    {
      label: "CẤP ĐỘ",
      value: course.level,
      Icon: BarChart3,
      toneClass: "bg-violet-50 text-violet-500",
    },
    {
      label: "SỐ BUỔI",
      value: course.sessions,
      Icon: CalendarDays,
      toneClass: "bg-emerald-50 text-emerald-500",
    },
    {
      label: "HÌNH THỨC",
      value: course.format,
      Icon: BriefcaseBusiness,
      toneClass: "bg-amber-50 text-amber-500",
    },
    {
      label: "ĐỐI TƯỢNG",
      value: course.audience,
      Icon: UserRoundCheck,
      toneClass: "bg-sky-50 text-sky-500",
      wide: true,
    },
  ];
  const topicTags = buildTopicTags(course);
  const learningPoints = buildLearningPoints(course);
  const bottomBadges = buildBottomBadges(course);
  const floatingFeatures = buildFloatingFeatures(course);
  const participantsText = formatParticipants(course.slug);
  const FloatingIcon1 = floatingFeatures[0].Icon;
  const FloatingIcon2 = floatingFeatures[1].Icon;
  const FloatingIcon3 = floatingFeatures[2].Icon;
  const FloatingIcon4 = floatingFeatures[3].Icon;

  return (
    <section className="bg-background py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-gradient-to-br from-white via-slate-50 to-white px-5 py-8 shadow-[0_24px_74px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.86),transparent_46%),radial-gradient(circle_at_80%_40%,rgba(191,219,254,0.46),transparent_40%),radial-gradient(circle_at_82%_72%,rgba(251,191,36,0.24),transparent_38%)]" />
          <div className="pointer-events-none absolute -right-20 top-16 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-300/35 via-blue-400/35 to-orange-300/28 blur-3xl" />
          <div className="pointer-events-none absolute right-[15%] top-[28%] h-[360px] w-[360px] rounded-full border border-white/35" />
          <div className="pointer-events-none absolute right-[8%] top-[16%] h-[520px] w-[520px] rounded-full border border-slate-200/40" />

          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] xl:gap-12">
            <div className="flex flex-col">
              <h1 className="max-w-[560px] text-[60px] font-black leading-[1] tracking-[-0.045em] text-[#0f172a]">
                {course.title}
              </h1>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {infoCards.map(({ label, value, Icon, toneClass, wide }) => (
                  <article
                    key={label}
                    className={[
                      "min-h-[128px] rounded-3xl border border-white/80 bg-white/85 p-4 backdrop-blur shadow-[0_14px_28px_rgba(15,23,42,0.08)]",
                      wide ? "sm:col-span-2" : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <span className={["inline-flex h-10 w-10 items-center justify-center rounded-xl", toneClass].join(" ")}>
                        <Icon className="h-5 w-5" strokeWidth={2.3} />
                      </span>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    </div>
                    <p className="mt-2 text-[27px] font-black leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-[30px] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                      {value}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {topicTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex max-w-[320px] items-center rounded-full border border-slate-200 bg-white/86 px-3 py-1.5 text-xs font-semibold leading-[1.3] text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
                    title={tag}
                  >
                    <span className="whitespace-normal break-words">{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[700px] pb-44 lg:pb-52">
              <div className="pointer-events-none absolute inset-x-8 top-8 h-[500px] rounded-full bg-gradient-to-br from-cyan-300/42 via-blue-500/42 via-55% to-orange-300/34 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-20 bottom-5 h-20 rounded-full bg-blue-200/35 blur-2xl" />

              <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-full border border-white/90 bg-white/45 p-3 shadow-[0_36px_90px_rgba(15,23,42,0.2)] backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 via-transparent to-white/16" />
                </div>
              </div>

              <article className="floating-card floating-delay-1 absolute -left-6 top-16 hidden w-[262px] rounded-3xl border border-white/80 bg-white/86 px-3 py-2.5 shadow-[0_16px_34px_rgba(15,23,42,0.14)] backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className={["inline-flex h-10 w-10 items-center justify-center rounded-xl", floatingFeatures[0].toneClass].join(" ")}>
                    <FloatingIcon1 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-black leading-[1.25] text-slate-800">{floatingFeatures[0].title}</h3>
                  </div>
                </div>
              </article>

              <article className="floating-card floating-delay-2 absolute -left-6 top-[54%] hidden w-[262px] rounded-3xl border border-white/80 bg-white/86 px-3 py-2.5 shadow-[0_16px_34px_rgba(15,23,42,0.14)] backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className={["inline-flex h-10 w-10 items-center justify-center rounded-xl", floatingFeatures[1].toneClass].join(" ")}>
                    <FloatingIcon2 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-black leading-[1.25] text-slate-800">{floatingFeatures[1].title}</h3>
                  </div>
                </div>
              </article>

              <article className="floating-card floating-delay-3 absolute -right-6 top-4 hidden w-[262px] rounded-3xl border border-white/80 bg-white/86 px-3 py-2.5 shadow-[0_16px_34px_rgba(15,23,42,0.14)] backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className={["inline-flex h-10 w-10 items-center justify-center rounded-xl", floatingFeatures[2].toneClass].join(" ")}>
                    <FloatingIcon3 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-black leading-[1.25] text-slate-800">{floatingFeatures[2].title}</h3>
                  </div>
                </div>
              </article>

              <article className="floating-card floating-delay-4 absolute -right-6 top-[46%] hidden w-[262px] rounded-3xl border border-white/80 bg-white/86 px-3 py-2.5 shadow-[0_16px_34px_rgba(15,23,42,0.14)] backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className={["inline-flex h-10 w-10 items-center justify-center rounded-xl", floatingFeatures[3].toneClass].join(" ")}>
                    <FloatingIcon4 className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-base font-black leading-[1.25] text-slate-800">{floatingFeatures[3].title}</h3>
                  </div>
                </div>
              </article>

              <article className="floating-card floating-delay-2 absolute -bottom-10 right-1 flex min-h-[280px] w-full max-w-[400px] flex-col rounded-[26px] border border-white/85 bg-white/90 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.16)] backdrop-blur sm:right-2 lg:-bottom-24">
                <h3 className="flex items-center gap-2 text-[21px] font-black tracking-[-0.02em] text-slate-900">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" strokeWidth={2.3} />
                  Bạn sẽ học được
                </h3>
                <ul className="mt-3 grid gap-2.5 text-sm text-slate-700">
                  {learningPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2.6} />
                      <span className="text-pretty leading-[1.35]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <div className="flex -space-x-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-300 text-[10px] font-bold text-slate-700">
                      N
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-sky-300 text-[10px] font-bold text-white">
                      H
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-emerald-300 text-[10px] font-bold text-white">
                      L
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-amber-300 text-[10px] font-bold text-white">
                      T
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600">
                    <span className="font-black text-slate-900">{participantsText}</span> Sinh viên đã tham gia
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="relative z-10 mt-24 flex flex-wrap gap-3 sm:mt-24 lg:mt-28">
            {bottomBadges.map((badge, index) => (
              <span
                key={`${badge}-${index}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
              >
                {(() => {
                  const badgeIcon = BADGE_ICON_STYLES[index % BADGE_ICON_STYLES.length];
                  const Icon = badgeIcon.Icon;
                  return <Icon className={["h-4 w-4", badgeIcon.toneClass].join(" ")} strokeWidth={2.4} />;
                })()}
                <span className="max-w-[260px] whitespace-normal break-words leading-[1.25]" title={badge}>
                  {badge}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
