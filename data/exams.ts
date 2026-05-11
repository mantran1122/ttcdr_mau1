export type ExamType = "ngoaingu" | "tinhoc" | "kynang" | "ai" | "chungchi";
export type ExamStatus = "upcoming" | "completed";

export type Exam = {
  slug: string;
  subject: string;
  excerpt: string;
  kind: string;
  type: ExamType;
  groups: string;
  date: string;
  session: string;
  room: string;
  status: ExamStatus;
  tags: string[];
  note?: string;
  content: string;
};

export const EXAM_TYPE_LABEL: Record<ExamType, string> = {
  ngoaingu: "Ngoại ngữ",
  tinhoc: "Tin học",
  kynang: "Kỹ năng",
  ai: "AI",
  chungchi: "Chứng chỉ",
};

export const EXAM_TYPE_STYLE: Record<ExamType, string> = {
  ngoaingu: "bg-blue-50 text-blue-700 ring-blue-200",
  tinhoc: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  kynang: "bg-violet-50 text-violet-700 ring-violet-200",
  ai: "bg-amber-50 text-amber-700 ring-amber-200",
  chungchi: "bg-rose-50 text-rose-700 ring-rose-200",
};

export const EXAMS: Exam[] = [
  {
    slug: "toeic-mock-test-tn01-tn02",
    subject: "TOEIC Mock Test",
    excerpt: "Lịch thi thử TOEIC cho nhóm TN01 và TN02, tổ chức tại khu A.",
    kind: "Thi thử",
    type: "ngoaingu",
    groups: "TN01, TN02",
    date: "20/05/2025",
    session: "Ca 1 (7:30 - 9:30)",
    room: "A201, A202",
    status: "upcoming",
    tags: ["TOEIC", "Thi thử", "Ngoại ngữ"],
    content: `
Trung tâm thông báo lịch thi thử TOEIC dành cho các nhóm TN01 và TN02.

## Thời gian và địa điểm

- Ngày thi: **20/05/2025**
- Ca thi: **Ca 1 (7:30 - 9:30)**
- Phòng thi: **A201, A202**

## Lưu ý cho thí sinh

- Có mặt trước giờ thi ít nhất 20 phút.
- Mang theo thẻ sinh viên hoặc CCCD/CMND.
- Không sử dụng điện thoại trong khu vực thi.
    `,
  },
  {
    slug: "vstep-b1-kiem-tra-giua-khoa",
    subject: "VSTEP B1",
    excerpt: "Kiểm tra giữa khóa VSTEP B1 cho nhóm TN03 và TN04.",
    kind: "Kiểm tra giữa khóa",
    type: "ngoaingu",
    groups: "TN03, TN04",
    date: "22/05/2025",
    session: "Ca 2 (9:30 - 11:30)",
    room: "A202",
    status: "upcoming",
    tags: ["VSTEP", "Giữa khóa", "Ngoại ngữ"],
    content: `
Bài kiểm tra giữa khóa VSTEP B1 nhằm đánh giá mức độ tiến bộ sau nửa chặng học tập.

## Thông tin lịch thi

- Ngày thi: **22/05/2025**
- Ca thi: **Ca 2 (9:30 - 11:30)**
- Phòng thi: **A202**

## Nội dung đánh giá

1. Nghe hiểu
2. Đọc hiểu
3. Viết đoạn ngắn theo chủ đề
    `,
  },
  {
    slug: "tin-hoc-ic3-cuoi-khoa-th05-th06",
    subject: "Tin học IC3",
    excerpt: "Kiểm tra cuối khóa IC3 cho các nhóm TH05 và TH06.",
    kind: "Kiểm tra cuối khóa",
    type: "tinhoc",
    groups: "TH05, TH06",
    date: "24/05/2025",
    session: "Ca 3 (13:30 - 15:30)",
    room: "Lab01",
    status: "upcoming",
    tags: ["IC3", "Cuối khóa", "Tin học"],
    content: `
Trung tâm tổ chức kiểm tra cuối khóa IC3 cho các nhóm TH05 và TH06.

## Thông tin lịch thi

- Ngày thi: **24/05/2025**
- Thời gian: **Ca 3 (13:30 - 15:30)**
- Phòng máy: **Lab01**

## Chuẩn bị

- Đến sớm 15 phút để kiểm tra máy.
- Đăng xuất các tài khoản cá nhân sau khi thi.
    `,
  },
  {
    slug: "ai-co-ban-giua-khoa-ai02-ai05",
    subject: "AI cơ bản",
    excerpt: "Kiểm tra giữa khóa môn AI cơ bản cho nhóm AI02 và AI05.",
    kind: "Kiểm tra giữa khóa",
    type: "ai",
    groups: "AI02, AI05",
    date: "27/05/2025",
    session: "Ca 4 (15:30 - 17:30)",
    room: "Lab02",
    status: "upcoming",
    tags: ["AI", "Giữa khóa", "Thực hành"],
    content: `
Bài kiểm tra giữa khóa AI cơ bản tập trung vào ứng dụng công cụ AI trong học tập.

## Thông tin lịch thi

- Ngày thi: **27/05/2025**
- Ca thi: **Ca 4 (15:30 - 17:30)**
- Phòng thi: **Lab02**

## Cấu trúc đề

- 40% lý thuyết nền tảng
- 60% thực hành trên máy
    `,
  },
  {
    slug: "ky-nang-mem-cuoi-khoa-kn02-kn03",
    subject: "Kỹ năng mềm",
    excerpt: "Kiểm tra cuối khóa kỹ năng mềm cho KN02 và KN03.",
    kind: "Kiểm tra cuối khóa",
    type: "kynang",
    groups: "KN02, KN03",
    date: "29/05/2025",
    session: "Ca 5 (17:30 - 19:30)",
    room: "A101",
    status: "upcoming",
    tags: ["Kỹ năng mềm", "Cuối khóa", "Thuyết trình"],
    content: `
Buổi kiểm tra cuối khóa kỹ năng mềm gồm phần trình bày nhóm và phản biện.

## Thông tin lịch thi

- Ngày thi: **29/05/2025**
- Ca thi: **Ca 5 (17:30 - 19:30)**
- Phòng thi: **A101**

## Hình thức

1. Trình bày theo nhóm (7 phút)
2. Phản biện chéo giữa các nhóm
3. Chấm điểm cá nhân theo rubric
    `,
  },
  {
    slug: "toeic-chinh-thuc-dgnlnn-31-05-2025",
    subject: "TOEIC Chính thức (ĐGNLNN)",
    excerpt: "Kỳ thi chứng chỉ TOEIC chính thức dành cho thí sinh đã đăng ký.",
    kind: "Thi chứng chỉ",
    type: "chungchi",
    groups: "Tất cả thí sinh đã đăng ký",
    date: "31/05/2025",
    session: "Ca 1 (7:30 - 9:30)",
    room: "Hội đồng thi - B Block",
    status: "upcoming",
    note: "Mang CCCD/CMND và phiếu dự thi.",
    tags: ["TOEIC", "Chứng chỉ", "ĐGNLNN"],
    content: `
Trung tâm thông báo kỳ thi TOEIC chính thức theo kế hoạch tháng 5/2025.

## Thông tin lịch thi

- Ngày thi: **31/05/2025**
- Ca thi: **Ca 1 (7:30 - 9:30)**
- Địa điểm: **Hội đồng thi - B Block**

## Yêu cầu bắt buộc

- Mang CCCD/CMND bản gốc và phiếu dự thi.
- Có mặt trước giờ thi ít nhất 30 phút.
- Tuân thủ hướng dẫn giám thị trong toàn bộ thời gian thi.
    `,
  },
  {
    slug: "vstep-b2-cuoi-khoa-tn07-tn08",
    subject: "VSTEP B2",
    excerpt: "Kiểm tra cuối khóa VSTEP B2 cho nhóm TN07 và TN08.",
    kind: "Kiểm tra cuối khóa",
    type: "ngoaingu",
    groups: "TN07, TN08",
    date: "03/06/2025",
    session: "Ca 2 (9:30 - 11:30)",
    room: "A202",
    status: "upcoming",
    tags: ["VSTEP", "B2", "Cuối khóa"],
    content: `
Bài kiểm tra cuối khóa VSTEP B2 dành cho các nhóm TN07 và TN08.

## Thông tin lịch thi

- Ngày thi: **03/06/2025**
- Ca thi: **Ca 2 (9:30 - 11:30)**
- Phòng thi: **A202**

## Nội dung đánh giá

- Đọc hiểu chuyên sâu
- Viết luận ngắn
- Bài nói theo cặp
    `,
  },
  {
    slug: "tin-hoc-mos-cuoi-khoa-th01",
    subject: "Tin học MOS",
    excerpt: "Kiểm tra cuối khóa MOS nhóm TH01.",
    kind: "Kiểm tra cuối khóa",
    type: "tinhoc",
    groups: "TH01",
    date: "15/04/2025",
    session: "Ca 3 (13:30 - 15:30)",
    room: "Lab01",
    status: "completed",
    tags: ["MOS", "Tin học", "Đã kết thúc"],
    content: `
Đợt thi MOS nhóm TH01 đã hoàn thành theo đúng kế hoạch.

## Kết quả tổ chức

- Tỷ lệ tham gia: **100%**
- Không ghi nhận sự cố kỹ thuật
- Kết quả chi tiết được gửi qua email sinh viên
    `,
  },
  {
    slug: "toeic-co-ban-giua-khoa-tn01",
    subject: "TOEIC cơ bản",
    excerpt: "Kiểm tra giữa khóa TOEIC cơ bản nhóm TN01.",
    kind: "Kiểm tra giữa khóa",
    type: "ngoaingu",
    groups: "TN01",
    date: "10/04/2025",
    session: "Ca 1 (7:30 - 9:30)",
    room: "A201",
    status: "completed",
    tags: ["TOEIC", "Giữa khóa", "Đã kết thúc"],
    content: `
Bài kiểm tra giữa khóa TOEIC cơ bản đã diễn ra ngày 10/04/2025.

## Ghi nhận

- Sinh viên tham gia đầy đủ
- Phổ điểm ổn định theo mục tiêu đầu ra
- Giảng viên đã phản hồi kết quả tại lớp
    `,
  },
  {
    slug: "ky-nang-nghe-nghiep-cuoi-khoa-kn06",
    subject: "Kỹ năng nghề nghiệp",
    excerpt: "Kiểm tra cuối khóa kỹ năng nghề nghiệp nhóm KN06.",
    kind: "Kiểm tra cuối khóa",
    type: "kynang",
    groups: "KN06",
    date: "05/04/2025",
    session: "Ca 4 (15:30 - 17:30)",
    room: "A101",
    status: "completed",
    tags: ["Kỹ năng nghề nghiệp", "Cuối khóa", "Đã kết thúc"],
    content: `
Kiểm tra cuối khóa kỹ năng nghề nghiệp nhóm KN06 đã hoàn tất.

## Đánh giá

- Hoàn thành đủ 3 phần: CV, phỏng vấn thử, phản biện nhóm.
- Nhiều nhóm có tiến bộ tốt về tư duy trình bày và giao tiếp.
    `,
  },
];

export function getExamBySlug(slug: string): Exam | undefined {
  return EXAMS.find((exam) => exam.slug === slug);
}

export function getRelatedExams(currentSlug: string, limit = 3): Exam[] {
  const current = getExamBySlug(currentSlug);
  if (!current) return EXAMS.slice(0, limit);

  const sameType = EXAMS.filter((exam) => exam.slug !== currentSlug && exam.type === current.type);
  if (sameType.length >= limit) return sameType.slice(0, limit);

  const fallback = EXAMS.filter((exam) => exam.slug !== currentSlug && exam.type !== current.type);
  return [...sameType, ...fallback].slice(0, limit);
}
