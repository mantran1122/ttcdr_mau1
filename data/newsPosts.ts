export type NewsCategory = "tat-ca" | "su-kien" | "hoc-thuat" | "cong-nghe" | "cong-dong";

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: NewsCategory;
  isPinned?: boolean;
  image?: string;
  tags: string[];
  content: string;
};

export const NEWS_CATEGORY_LABEL: Record<NewsCategory, string> = {
  "tat-ca": "Tất cả",
  "su-kien": "Sự kiện",
  "hoc-thuat": "Học thuật",
  "cong-nghe": "Công nghệ",
  "cong-dong": "Cộng đồng",
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "workshop-ai-ung-dung-trong-giao-duc",
    title: "Workshop: Ứng dụng AI trong giảng dạy và học tập",
    excerpt:
      "Chương trình workshop chia sẻ các xu hướng AI trong giáo dục, cách xây dựng học liệu số và những tình huống ứng dụng thực tế tại lớp học.",
    date: "28/04/2025",
    category: "cong-nghe",
    isPinned: true,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    tags: ["AI", "Giáo dục số", "Workshop", "Đổi mới phương pháp"],
    content: `
Trung tâm Chuẩn đầu ra phối hợp cùng Khoa Công nghệ tổ chức workshop chuyên đề **Ứng dụng AI trong giảng dạy và học tập**.

## Mục tiêu chương trình

- Cập nhật xu hướng AI trong giáo dục đại học
- Chia sẻ mô hình lớp học kết hợp AI và hoạt động nhóm
- Hướng dẫn xây dựng học liệu số bằng công cụ AI

## Nội dung nổi bật

### 1. AI hỗ trợ giảng viên
Diễn giả giới thiệu các công cụ giúp thiết kế bài giảng nhanh, chuẩn hóa đề cương và cá nhân hóa phản hồi cho người học.

### 2. AI hỗ trợ sinh viên
Sinh viên được hướng dẫn cách khai thác AI để học ngoại ngữ, viết báo cáo học thuật và luyện kỹ năng thuyết trình.

### 3. Phiên thực hành
Người tham gia thực hành tạo học liệu và xây dựng mini-project theo nhóm, có mentor hỗ trợ trực tiếp.

> "AI không thay thế người dạy và người học, AI giúp chúng ta học sâu hơn và dạy hiệu quả hơn."

## Ghi nhận sau chương trình

Hơn 300 sinh viên và giảng viên tham dự, trong đó nhiều nhóm đã đăng ký tiếp tục tham gia chuỗi chuyên đề công nghệ giáo dục của Trung tâm.
    `,
  },
  {
    slug: "le-tot-nghiep-khoa-2024",
    title: "Lễ tốt nghiệp khóa 2024: Hành trình tri thức, tương lai rộng mở",
    excerpt:
      "Lễ tốt nghiệp khóa 2024 diễn ra trang trọng với nhiều khoảnh khắc ý nghĩa, đánh dấu cột mốc trưởng thành của sinh viên sau chặng đường học tập.",
    date: "20/04/2025",
    category: "su-kien",
    isPinned: true,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    tags: ["Tốt nghiệp", "Sinh viên", "Sự kiện", "Lễ trao bằng"],
    content: `
Lễ tốt nghiệp khóa 2024 được tổ chức tại hội trường trung tâm với sự tham dự của Ban Giám hiệu, giảng viên, phụ huynh và toàn thể tân cử nhân.

## Điểm nhấn sự kiện

| Nội dung | Thống kê |
|----------|----------|
| Số tân cử nhân nhận bằng | 842 |
| Sinh viên tốt nghiệp loại Giỏi trở lên | 216 |
| Sinh viên nhận giấy khen | 58 |

## Thông điệp truyền cảm hứng

Các diễn giả nhấn mạnh năng lực tự học, kỹ năng thích nghi và tinh thần phụng sự cộng đồng là chìa khóa thành công trong giai đoạn mới.

## Hoạt động bên lề

- Triển lãm ảnh kỷ yếu và dự án tiêu biểu
- Không gian kết nối doanh nghiệp tuyển dụng
- Khu vực tư vấn phát triển nghề nghiệp sau tốt nghiệp

> "Mỗi tấm bằng không chỉ là kết quả học tập, mà còn là lời hứa đóng góp tích cực cho xã hội."
    `,
  },
  {
    slug: "chien-dich-xanh-campus",
    title: "Chiến dịch \"Xanh campus - Sống xanh mỗi ngày\"",
    excerpt:
      "Chiến dịch cộng đồng khuyến khích sinh viên thay đổi thói quen sống xanh, giảm rác thải nhựa và xây dựng môi trường học tập bền vững.",
    date: "15/04/2025",
    category: "cong-dong",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    tags: ["Sống xanh", "Tình nguyện", "Campus", "Cộng đồng"],
    content: `
Trung tâm phát động chiến dịch **"Xanh campus - Sống xanh mỗi ngày"** với chuỗi hoạt động trong 4 tuần liên tiếp.

## Các hoạt động chính

1. Ngày đổi rác tái chế nhận cây xanh
2. Thử thách "7 ngày không nhựa dùng một lần"
3. Workshop phân loại rác tại nguồn
4. Trồng cây và cải tạo khuôn viên học tập

## Kết quả tuần đầu

- Thu gom hơn 1.2 tấn rác tái chế
- Hơn 1.000 sinh viên đăng ký tham gia thử thách sống xanh
- 300 cây xanh được trồng mới tại khu B

## Kêu gọi tham gia

Sinh viên có thể đăng ký theo câu lạc bộ hoặc nhóm lớp để tích điểm hoạt động cộng đồng theo học kỳ.
    `,
  },
  {
    slug: "doi-moi-nen-tang-hoc-tap",
    title: "Nền tảng học tập trực tuyến mới chính thức ra mắt",
    excerpt:
      "Nền tảng học tập mới tích hợp học liệu số, lớp học trực tuyến và công cụ theo dõi tiến độ, giúp tối ưu trải nghiệm dạy và học.",
    date: "10/04/2025",
    category: "cong-nghe",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=1200&q=80",
    tags: ["E-learning", "LMS", "Công nghệ giáo dục", "Chuyển đổi số"],
    content: `
Nhà trường chính thức đưa vào vận hành nền tảng học tập trực tuyến mới từ học kỳ hè 2025.

## Tính năng nổi bật

| Tính năng | Mô tả |
|-----------|-------|
| Dashboard cá nhân | Theo dõi tiến độ học và deadline theo tuần |
| Kho học liệu số | Bài giảng, đề cương, bài tập và video minh họa |
| Kiểm tra trực tuyến | Tạo bài kiểm tra nhanh, chấm điểm tự động |
| Báo cáo học tập | Xuất báo cáo theo lớp, theo môn và theo sinh viên |

## Lộ trình triển khai

### Giai đoạn 1
Áp dụng cho các học phần kỹ năng và ngoại ngữ từ tháng 5/2025.

### Giai đoạn 2
Mở rộng cho toàn bộ học phần có thành phần học trực tuyến từ tháng 8/2025.

> "Hệ thống mới giúp giảng viên tiết kiệm thời gian vận hành lớp và tăng tương tác với người học."
    `,
  },
  {
    slug: "hoat-dong-cong-dong-sinh-vien",
    title: "Hội thảo kỹ năng mềm dành cho sinh viên năm nhất",
    excerpt:
      "Chuỗi hội thảo định hướng kỹ năng học tập, giao tiếp và làm việc nhóm giúp sinh viên năm nhất tự tin thích nghi môi trường đại học.",
    date: "05/04/2025",
    category: "hoc-thuat",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    tags: ["Kỹ năng mềm", "Sinh viên năm nhất", "Định hướng", "Hội thảo"],
    content: `
Chuỗi hội thảo kỹ năng mềm đầu học kỳ được thiết kế dành riêng cho tân sinh viên.

## Chủ đề từng phiên

- Tư duy học đại học hiệu quả
- Quản lý thời gian và lập kế hoạch cá nhân
- Kỹ năng giao tiếp trong thuyết trình và làm việc nhóm
- Xây dựng thương hiệu cá nhân ngay từ năm nhất

## Hình thức tổ chức

Các phiên học kết hợp giữa mini-talk, thảo luận nhóm và phần thực hành tình huống.

## Giá trị nhận được

Sinh viên tham gia đầy đủ sẽ nhận chứng nhận hoàn thành và được cộng điểm rèn luyện theo quy định.
    `,
  },
  {
    slug: "chung-ket-cuoc-thi-ngoai-ngu",
    title: "Cuộc thi Tiếng Anh toàn trường 2025 chính thức khởi động",
    excerpt:
      "Cuộc thi ngoại ngữ thường niên quay trở lại với nhiều vòng thi mới, tạo sân chơi học thuật giúp sinh viên nâng cao năng lực sử dụng tiếng Anh.",
    date: "01/04/2025",
    category: "su-kien",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80",
    tags: ["Tiếng Anh", "Cuộc thi", "Học thuật", "Sinh viên"],
    content: `
Trung tâm phát động cuộc thi Tiếng Anh toàn trường 2025 dành cho sinh viên tất cả các khóa.

## Cơ cấu vòng thi

1. **Vòng sơ loại online**: từ 01/04 đến 10/04
2. **Vòng bán kết**: thuyết trình theo chủ đề vào 15/04
3. **Vòng chung kết**: tranh biện đội nhóm vào 22/04

## Tiêu chí đánh giá

- Độ chính xác ngôn ngữ
- Khả năng diễn đạt và phản biện
- Tinh thần làm việc nhóm
- Tính sáng tạo trong trình bày

## Giải thưởng

Tổng giá trị giải thưởng hơn 60 triệu đồng cùng học bổng tiếng Anh chuyên sâu cho các đội đạt giải.
    `,
  },
];

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}

export function getRelatedNewsPosts(currentSlug: string, limit = 3): NewsPost[] {
  const current = getNewsPostBySlug(currentSlug);
  if (!current) return NEWS_POSTS.slice(0, limit);

  return NEWS_POSTS
    .filter((post) => post.slug !== currentSlug && post.category === current.category)
    .slice(0, limit);
}
