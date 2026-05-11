export type Category = "tat-ca" | "lich-thi" | "khai-giang" | "dang-ky" | "ket-qua" | "chung";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  isPinned?: boolean;
  image?: string;
  tags: string[];
  content: string;
};

export const CATEGORY_LABEL: Record<Category, string> = {
  "tat-ca": "Tất cả",
  "lich-thi": "Lịch thi",
  "khai-giang": "Khai giảng",
  "dang-ky": "Đăng ký",
  "ket-qua": "Kết quả",
  chung: "Thông báo chung",
};

export const CATEGORY_STYLE: Record<Category, string> = {
  "tat-ca": "",
  "lich-thi": "bg-red-50 text-red-700 ring-red-200",
  "khai-giang": "bg-green-50 text-green-700 ring-green-200",
  "dang-ky": "bg-blue-50 text-blue-700 ring-blue-200",
  "ket-qua": "bg-orange-50 text-orange-700 ring-orange-200",
  chung: "bg-slate-100 text-slate-600 ring-slate-200",
};

export const POSTS: Post[] = [
  {
    slug: "lich-thi-vstep-thang-6-2025",
    title: "Thông báo lịch thi VSTEP tháng 6/2025",
    excerpt:
      "Trung tâm thông báo lịch thi VSTEP chính thức vào ngày 14/06/2025. Thí sinh đã đăng ký vui lòng kiểm tra thông tin phòng thi và mang đầy đủ giấy tờ theo yêu cầu.",
    date: "28/04/2025",
    category: "lich-thi",
    isPinned: true,
    image: "/courses/ngoai-ngu.png",
    tags: ["VSTEP", "Lịch thi", "Anh văn", "Thi chứng chỉ"],
    content: `
Trung tâm Chuẩn đầu ra thông báo lịch thi VSTEP tháng 6/2025 đến toàn thể sinh viên và thí sinh đã đăng ký.

## Thờigian và địa điểm

Kỳ thi VSTEP sẽ diễn ra vào ngày **14/06/2025** tại các phòng thi của Trung tâm. Thí sinh cần có mặt tại địa điểm thi trước giờ thi **30 phút** để làm thủ tục check-in.

## Giấy tờ cần mang theo

- Thẻ sinh viên hoặc CMND/CCCD bản chính
- Giấy báo dự thi (nếu có)
- Bút chì 2B, tẩy, gọt bút chì
- Không mang theo điện thoại, thiết bị điện tử vào phòng thi

## Lưu ý quan trọng

> "Thí sinh đến muộn quá 15 phút sau giờ thi sẽ không được dự thi."

Thí sinh vui lòng kiểm tra thông tin phòng thi trên hệ thống tra cứu của Trung tâm trước ngày thi 03 ngày. Mọi thắc mắc xin liên hệ Phòng Đào tạo – Khảo thí.

## Liên hệ

- Hotline: 028.XXXX.XXXX
- Email: thongbao@nctu.edu.vn
- Địa chỉ: Phòng A101, Trung tâm Chuẩn đầu ra
    `,
  },
  {
    slug: "khai-giang-toeic-tn11-thang-5",
    title: "Khai giảng lớp TOEIC Cơ bản – Nhóm TN11 (Khóa tháng 5)",
    excerpt:
      "Trung tâm thông báo khai giảng lớp TOEIC Cơ bản Nhóm TN11 vào ngày 05/05/2025. Lớp học vào các buổi sáng Thứ 2 và Thứ 4, tại phòng A201.",
    date: "25/04/2025",
    category: "khai-giang",
    isPinned: true,
    image: "/Tạo hình ảnh web/Khóa học tiếng anh.png",
    tags: ["TOEIC", "Khai giảng", "Anh văn", "Lớp học"],
    content: `
Trung tâm Chuẩn đầu ra trân trọng thông báo khai giảng lớp **TOEIC Cơ bản – Nhóm TN11** khóa tháng 5/2025.

## Thông tin lớp học

| Nội dung | Chi tiết |
|----------|----------|
| Tên lớp | TOEIC Cơ bản – Nhóm TN11 |
| Ngày khai giảng | 05/05/2025 |
| Lịch học | Sáng Thứ 2 và Thứ 4 |
| Phòng học | A201 |
| Sĩ số | Tối đa 30 sinh viên |

## Đối tượng tham gia

Lớp học phù hợp cho sinh viên:
- Điểm TOEIC dự kiến từ 300 – 450
- Cần củng cố ngữ pháp và từ vựng nền tảng
- Chuẩn bị cho kỳ thi TOEIC trong năm học tới

> "Học phí đã bao gồm tài liệu và 02 đề thi thử miễn phí."

Sinh viên quan tâm vui lòng đăng ký trực tiếp tại Phòng Tài chính – Kế hoạch hoặc đăng ký online qua cổng thông tin sinh viên.
    `,
  },
  {
    slug: "dang-ky-hoc-ky-he-2025",
    title: "Hướng dẫn đăng ký học kỳ hè 2025",
    excerpt:
      "Trung tâm mở đăng ký học kỳ hè 2025 từ ngày 01/05 đến 20/05/2025. Sinh viên vui lòng điền phiếu đăng ký và nộp lệ phí tại Phòng Tài chính – Kế hoạch.",
    date: "20/04/2025",
    category: "dang-ky",
    image: "/courses/bannerthongtin.png",
    tags: ["Đăng ký", "Học kỳ hè", "Hướng dẫn"],
    content: `
Trung tâm Chuẩn đầu ra thông báo về việc đăng ký học kỳ hè năm 2025.

## Thờigian đăng ký

- **Bắt đầu**: 01/05/2025
- **Kết thúc**: 20/05/2025
- **Nộp lệ phí**: Trước 17h00 ngày 22/05/2025

## Quy trình đăng ký

### 1. Điền phiếu đăng ký
Sinh viên đăng nhập cổng thông tin sinh viên, chọn mục "Đăng ký học kỳ hè" và điền đầy đủ thông tin.

### 2. Xác nhận lịch học
Kiểm tra kỹ lịch học và phòng học trước khi xác nhận. Sau khi xác nhận, sinh viên không được phép đổi lịch.

### 3. Nộp lệ phí
Nộp lệ phí tại Phòng Tài chính – Kế hoạch hoặc chuyển khoản theo thông tin trên phiếu đăng ký.

## Lưu ý

> "Sinh viên đăng ký học kỳ hè cần hoàn thành học phí học kỳ chính trước đó."

Số lượng có hạn cho từng lớp. Trung tâm sẽ ưu tiên sinh viên đăng ký và nộp lệ phí sớm.
    `,
  },
  {
    slug: "lich-nghi-le-30-04-01-05",
    title: "Lịch nghỉ lễ 30/04 – 01/05/2025 và điều chỉnh lịch học",
    excerpt:
      "Nhân dịp Lễ Giải phóng miền Nam 30/04 và Quốc tế Lao động 01/05, Trung tâm nghỉ từ Thứ 3 đến Thứ 5 (29/04 – 01/05). Các buổi học bù sẽ được thông báo sau.",
    date: "18/04/2025",
    category: "chung",
    image: "/banner.png",
    tags: ["Lịch nghỉ", "Thông báo chung", "Lễ"],
    content: `
Trung tâm Chuẩn đầu ra thông báo lịch nghỉ lễ và điều chỉnh lịch học.

## Lịch nghỉ lễ

Nhân dịp kỷ niệm **Ngày Giải phóng miền Nam 30/04** và **Ngày Quốc tế Lao động 01/05**, Trung tâm sẽ nghỉ từ **Thứ 3 đến Thứ 5 (29/04 – 01/05/2025)**.

## Lịch học bù

Các lớp học bị ảnh hưởng sẽ được bù vào các buổi:
- Thứ 7 tuần sau (03/05/2025)
- Chiều Thứ 2 (05/05/2025)

Lịch học bù chi tiết sẽ được thông báo qua email và tin nhắn đến từng sinh viên.

## Thông báo quan trọng

> "Sinh viên vui lòng kiểm tra email và tin nhắn thường xuyên để cập nhật lịch học bù chính xác."

Trung tâm xin chân thành cảm ơn sự thông cảm của quý phụ huynh và sinh viên.
    `,
  },
  {
    slug: "ket-qua-vstep-thang-4-2025",
    title: "Kết quả thi VSTEP tháng 4/2025",
    excerpt:
      "Trung tâm công bố kết quả thi VSTEP ngày 12/04/2025. Thí sinh tra cứu kết quả tại mục Tra cứu trên website hoặc liên hệ trực tiếp Trung tâm.",
    date: "15/04/2025",
    category: "ket-qua",
    image: "/courses/ngoai-ngu.png",
    tags: ["VSTEP", "Kết quả thi", "Anh văn"],
    content: `
Trung tâm Chuẩn đầu ra công bố kết quả kỳ thi VSTEP tháng 4/2025.

## Kết quả tổng quan

Kỳ thi VSTEP ngày 12/04/2025 đã diễn ra thành công với sự tham gia của **285 thí sinh**.

| Chỉ tiêu | Số lượng |
|----------|----------|
| Tổng số thí sinh | 285 |
| Đạt yêu cầu (≥B1) | 198 |
| Đạt B2 trở lên | 76 |
| Không đạt | 87 |

## Cách tra cứu kết quả

Thí sinh có thể tra cứu kết quả theo 02 cách:

1. **Online**: Truy cập mục "Tra cứu → Kết quả thi" trên website Trung tâm
2. **Trực tiếp**: Liên hệ Phòng Đào tạo – Khảo thí để nhận giấy chứng nhận

## Lưu ý

> "Thí sinh đạt yêu cầu sẽ nhận được chứng chỉ sau 10 ngày làm việc kể từ ngày công bố kết quả."

Thí sinh không đạt có thể đăng ký dự thi lại trong kỳ thi tiếp theo.
    `,
  },
  {
    slug: "khai-giang-ai-co-ban-ai06",
    title: "Khai giảng lớp AI cơ bản – Nhóm AI06",
    excerpt:
      "Trung tâm mở thêm lớp AI cơ bản Nhóm AI06 vào ngày 14/04/2025. Lớp học tại Lab02, ca chiều Thứ 3 và Thứ 5. Số lượng có hạn, đăng ký sớm để giữ chỗ.",
    date: "10/04/2025",
    category: "khai-giang",
    image: "/courses/ai.png",
    tags: ["AI", "Khai giảng", "Trí tuệ nhân tạo", "Lớp học"],
    content: `
Trung tâm Chuẩn đầu ra thông báo khai giảng lớp **AI cơ bản – Nhóm AI06**.

## Thông tin khóa học

Khóa học AI cơ bản được thiết kế dành cho sinh viên muốn làm quen với Trí tuệ nhân tạo và ứng dụng thực tiễn.

| Thông tin | Chi tiết |
|-----------|----------|
| Ngày khai giảng | 14/04/2025 |
| Lịch học | Chiều Thứ 3 và Thứ 5 |
| Địa điểm | Lab02 |
| Thờigian | 13h30 – 16h30 |

## Nội dung chính

1. Giới thiệu về AI và Machine Learning
2. Công cụ AI phổ biến (ChatGPT, Midjourney)
3. Ứng dụng AI trong học tập và công việc
4. Thực hành xây dựng chatbot đơn giản

> "Số lượng có hạn. Ưu tiên sinh viên đăng ký sớm và hoàn tất lệ phí."

Sinh viên quan tâm vui lòng liên hệ Phòng Đào tạo để đăng ký.
    `,
  },
  {
    slug: "nop-le-phi-hoc-ky-2-2024-2025",
    title: "Thông báo nộp lệ phí học kỳ 2 (2024–2025)",
    excerpt:
      "Sinh viên đang học tại Trung tâm vui lòng hoàn tất nộp lệ phí học kỳ 2 trước ngày 20/04/2025 để tránh bị xóa tên khỏi danh sách lớp.",
    date: "05/04/2025",
    category: "chung",
    image: "/courses/bannerthongtin2.png",
    tags: ["Lệ phí", "Học phí", "Thông báo chung"],
    content: `
Trung tâm Chuẩn đầu ra thông báo về việc nộp lệ phí học kỳ 2 năm học 2024–2025.

## Thờigian nộp lệ phí

- **Hạn chót**: 20/04/2025
- **Hình thức**: Nộp trực tiếp hoặc chuyển khoản

## Hậu quả nộp muộn

Sinh viên không hoàn tất lệ phí đúng hạn sẽ:
- Bị tạm ngưng quyền tham gia lớp học
- Bị xóa tên khỏi danh sách lớp sau ngày 25/04/2025
- Không được dự thi cuối kỳ

## Cách thức nộp

1. **Nộp trực tiếp**: Phòng Tài chính – Kế hoạch (Phòng B105)
2. **Chuyển khoản**: Theo thông tin tài khoản trên cổng thông tin sinh viên

> "Sinh viên có hoàn cảnh khó khăn vui lòng liên hệ Phòng Công tác Sinh viên để được hỗ trợ."

Mọi thắc mắc liên hệ Phòng Tài chính – Kế hoạch.
    `,
  },
  {
    slug: "dieu-chinh-tkb-tuan-28",
    title: "Điều chỉnh thờigian biểu Tuần 28 (31/03 – 05/04/2025)",
    excerpt:
      "Do lịch sử dụng phòng học thay đổi, một số lớp trong tuần 28 sẽ học tại phòng dự phòng. Chi tiết xem tại mục Thờigian biểu.",
    date: "30/03/2025",
    category: "chung",
    image: "/courses/bannerthongtin3.png",
    tags: ["Thờigian biểu", "Thông báo chung", "Lịch học"],
    content: `
Trung tâm Chuẩn đầu ra thông báo điều chỉnh thờigian biểu Tuần 28.

## Lý do điều chỉnh

Do lịch sử dụng phòng học thay đổi phục vụ công tác kiểm định chất lượng, một số lớp trong tuần 28 sẽ chuyển sang phòng dự phòng.

## Các lớp bị ảnh hưởng

| Lớp | Phòng cũ | Phòng mới | Thờigian |
|-----|----------|-----------|----------|
| TOEIC Nâng cao – TN09 | A201 | B305 | Sáng T2 |
| Tin học Văn phòng – TH12 | Lab01 | Lab03 | Chiều T3 |
| Kỹ năng mềm – KN08 | C102 | C205 | Sáng T5 |

## Thông báo quan trọng

> "Sinh viên vui lòng kiểm tra lại thờigian biểu trước khi đến lớp để tránh nhầm phòng."

Các lớp khác giữ nguyên phòng học và lịch học như đã thông báo.
    `,
  },
  {
    slug: "ket-qua-toeic-noi-bo-thang-3",
    title: "Kết quả thi TOEIC nội bộ tháng 3/2025",
    excerpt:
      "Trung tâm công bố kết quả thi TOEIC nội bộ ngày 22/03/2025. Sinh viên tra cứu điểm tại mục Tra cứu → Kết quả thi ĐGNLNN.",
    date: "25/03/2025",
    category: "ket-qua",
    image: "/Tạo hình ảnh web/Khóa học tiếng anh.png",
    tags: ["TOEIC", "Kết quả thi", "Anh văn", "ĐGNLNN"],
    content: `
Trung tâm Chuẩn đầu ra công bố kết quả kỳ thi TOEIC nội bộ tháng 3/2025.

## Kết quả kỳ thi

Kỳ thi TOEIC nội bộ ngày 22/03/2025 có **312 thí sinh** tham dự.

| Xếp loại | Điểm số | Số lượng |
|----------|---------|----------|
| Xuất sắc | 800+ | 42 |
| Tốt | 650 – 795 | 98 |
| Khá | 500 – 645 | 128 |
| Trung bình | <500 | 44 |

## Tra cứu kết quả

Sinh viên tra cứu kết quả theo 02 cách:

1. **Online**: Truy cập mục "Tra cứu → Kết quả thi ĐGNLNN"
2. **Trực tiếp**: Nhận phiếu điểm tại Phòng Đào tạo – Khảo thí

## Thông tin bổ sung

> "Sinh viên đạt từ 650 điểm trở lên được miễn học phần Tiếng Anh chuyên ngành."

Kỳ thi TOEIC nội bộ tiếp theo dự kiến diễn ra vào tháng 5/2025.
    `,
  },
  {
    slug: "lich-thi-vstep-thang-4-2025",
    title: "Thông báo lịch thi VSTEP tháng 4/2025",
    excerpt:
      "Kỳ thi VSTEP tháng 4 sẽ diễn ra vào ngày 12/04/2025. Thí sinh cần đăng ký trước ngày 28/03/2025 và nộp lệ phí tại Trung tâm.",
    date: "20/03/2025",
    category: "lich-thi",
    image: "/courses/tin-hoc.png",
    tags: ["VSTEP", "Lịch thi", "Anh văn"],
    content: `
Trung tâm Chuẩn đầu ra thông báo lịch thi VSTEP tháng 4/2025.

## Thông tin kỳ thi

| Nội dung | Chi tiết |
|----------|----------|
| Ngày thi | 12/04/2025 |
| Địa điểm | Trung tâm Chuẩn đầu ra |
| Hình thức | Thi trên giấy |

## Hạn đăng ký

Thí sinh cần hoàn tất đăng ký trước ngày **28/03/2025**. Sau thờigian này, Trung tâm sẽ không nhận thêm hồ sơ.

## Lệ phí thi

- Lệ phí: **650.000 VNĐ**
- Hình thức nộp: Nộp trực tiếp hoặc chuyển khoản

## Lưu ý quan trọng

> "Thí sinh cần mang theo CMND/CCCD và thẻ sinh viên khi đến dự thi."

Thí sinh đã đăng ký vui lòng kiểm tra email để nhận thông báo phòng thi trước ngày thi 03 ngày.
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return POSTS.slice(0, limit);
  return POSTS.filter((p) => p.slug !== currentSlug && p.category === current.category).slice(0, limit);
}
