export type CurriculumModule = {
  title: string;
  lessons: string[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  format: string;
  sessions: string;
  audience: string;
  overview: string;
  benefits: string[];
  whatYouWillLearn: string[];
  curriculum: CurriculumModule[];
  outcomes: string[];
  suitableFor: string[];
};

export type ProgramBenefitIcon = "sparkles" | "handshake" | "briefcase" | "shield";

export type ProgramBenefit = {
  title: string;
  description: string;
  icon: ProgramBenefitIcon;
};

export type LearningPathStep = {
  title: string;
  description: string;
};

export const courses: Course[] = [
  {
    slug: "tri-tue-nhan-tao",
    title: "Trí tuệ nhân tạo (AI)",
    description:
      "Khóa học giúp sinh viên làm chủ các công cụ AI để học tập, nghiên cứu và tối ưu hiệu suất công việc.",
    image: "/NewCourse/AI.jpeg",
    duration: "08 tuần",
    level: "Cơ bản đến trung cấp",
    format: "Hybrid (Online + Offline)",
    sessions: "16 buổi",
    audience: "Sinh viên muốn ứng dụng AI thực tế",
    overview:
      "Khóa học AI tập trung vào cách ứng dụng AI an toàn, đúng chuẩn học thuật và hiệu quả trong bối cảnh học tập đại học. Học viên được thực hành từ kỹ năng prompt cơ bản đến xây dựng quy trình làm việc cá nhân với AI, đồng thời nắm nguyên tắc kiểm chứng nguồn và bảo mật dữ liệu.",
    benefits: [
      "Tiết kiệm thời gian làm bài tập, báo cáo và chuẩn bị thuyết trình.",
      "Nâng cao tư duy phản biện khi làm việc với nội dung do AI sinh ra.",
      "Tăng lợi thế nghề nghiệp nhờ kỹ năng sử dụng công cụ AI hiện đại.",
    ],
    whatYouWillLearn: [
      "Tổng quan AI và nguyên tắc sử dụng AI có trách nhiệm.",
      "Kỹ thuật viết prompt để tạo nội dung chất lượng cao.",
      "Ứng dụng AI trong học tập, nghiên cứu và làm việc nhóm.",
      "Thiết kế workflow cá nhân để tự động hóa tác vụ lặp lại.",
      "Phương pháp kiểm chứng, trích dẫn và bảo vệ dữ liệu khi dùng AI.",
    ],
    curriculum: [
      {
        title: "Module 1: Nền tảng AI và tư duy sử dụng",
        lessons: [
          "AI là gì và xu hướng ứng dụng trong giáo dục",
          "Các mô hình AI phổ biến và giới hạn cần lưu ý",
          "Nguyên tắc đạo đức, bảo mật, bản quyền nội dung",
        ],
      },
      {
        title: "Module 2: Prompting thực chiến",
        lessons: [
          "Framework viết prompt theo mục tiêu",
          "Tối ưu prompt nhiều bước cho bài tập và dự án",
          "Sửa lỗi và nâng chất lượng đầu ra của AI",
        ],
      },
      {
        title: "Module 3: Ứng dụng trong học tập - nghiên cứu",
        lessons: [
          "Lập dàn ý, hệ thống kiến thức và tóm tắt tài liệu",
          "Hỗ trợ viết báo cáo, slide, thuyết trình",
          "Khai thác AI cho phân tích dữ liệu cơ bản",
        ],
      },
      {
        title: "Module 4: Dự án cuối khóa",
        lessons: [
          "Xây dựng workflow AI cá nhân cho một bài toán thực tế",
          "Trình bày giải pháp và phản biện",
          "Đánh giá, cải tiến và chuẩn hóa quy trình",
        ],
      },
    ],
    outcomes: [
      "Sử dụng thành thạo các công cụ AI phổ biến phục vụ học tập.",
      "Tự xây dựng quy trình làm việc với AI cho từng môn học.",
      "Biết kiểm soát rủi ro đạo đức và tính chính xác của nội dung AI.",
      "Tăng tốc độ hoàn thành dự án nhóm và báo cáo cá nhân.",
    ],
    suitableFor: [
      "Sinh viên năm 1-4 muốn làm quen AI một cách bài bản.",
      "Nhóm trưởng hoặc sinh viên thường xuyên làm dự án học thuật.",
      "Người cần cải thiện năng suất học tập trong thời gian ngắn.",
    ],
  },
  {
    slug: "ngoai-ngu",
    title: "Ngoại ngữ",
    description:
      "Khóa học nâng cao năng lực tiếng Anh học thuật và giao tiếp, giúp sinh viên đạt chuẩn đầu ra ngoại ngữ.",
    image: "/NewCourse/Khóa học tiếng anh.png",
    duration: "10 tuần",
    level: "Sơ cấp đến trung cấp",
    format: "Offline tại trung tâm",
    sessions: "20 buổi",
    audience: "Sinh viên cần đạt chuẩn đầu ra tiếng Anh",
    overview:
      "Khóa học Ngoại ngữ xây dựng nền tảng tiếng Anh toàn diện theo định hướng chuẩn đầu ra. Chương trình cân bằng giữa kỹ năng ngôn ngữ học thuật và giao tiếp ứng dụng, giúp học viên tự tin trong môi trường học tập và công việc.",
    benefits: [
      "Cải thiện đồng đều 4 kỹ năng nghe - nói - đọc - viết.",
      "Tăng khả năng sử dụng tiếng Anh trong thuyết trình và làm việc nhóm.",
      "Sẵn sàng cho các kỳ thi chuẩn hóa như VSTEP, TOEIC hoặc tương đương.",
    ],
    whatYouWillLearn: [
      "Hệ thống ngữ pháp và từ vựng học thuật cốt lõi.",
      "Kỹ năng nghe hiểu và phản xạ giao tiếp trong tình huống thực tế.",
      "Chiến lược đọc nhanh, đọc hiểu tài liệu chuyên ngành.",
      "Kỹ thuật viết email, đoạn văn và bài luận ngắn.",
      "Phương pháp ôn luyện theo định dạng bài thi chuẩn đầu ra.",
    ],
    curriculum: [
      {
        title: "Module 1: Củng cố nền tảng",
        lessons: [
          "Ngữ pháp trọng tâm và cách dùng trong ngữ cảnh",
          "Từ vựng theo chủ đề học thuật phổ biến",
          "Phát âm và nhấn âm cơ bản",
        ],
      },
      {
        title: "Module 2: Giao tiếp và phản xạ",
        lessons: [
          "Mẫu hội thoại trong lớp học và môi trường công sở",
          "Kỹ năng trình bày quan điểm rõ ràng, mạch lạc",
          "Phản xạ nghe - nói theo tình huống",
        ],
      },
      {
        title: "Module 3: Đọc - viết học thuật",
        lessons: [
          "Kỹ thuật đọc hiểu văn bản dài",
          "Viết đoạn văn và bài luận ngắn có cấu trúc",
          "Diễn đạt lập luận và trích dẫn cơ bản",
        ],
      },
      {
        title: "Module 4: Luyện thi chuẩn đầu ra",
        lessons: [
          "Làm quen cấu trúc bài thi",
          "Chiến lược phân bổ thời gian khi làm bài",
          "Thi thử và chữa bài cá nhân hóa",
        ],
      },
    ],
    outcomes: [
      "Nâng mức tự tin khi giao tiếp bằng tiếng Anh.",
      "Đáp ứng yêu cầu tiếng Anh trong học tập đại học.",
      "Nắm phương pháp tự học và duy trì tiến bộ sau khóa học.",
      "Sẵn sàng cho kỳ thi chuẩn đầu ra ngoại ngữ.",
    ],
    suitableFor: [
      "Sinh viên cần chuẩn bị cho kỳ thi chuẩn đầu ra.",
      "Sinh viên mất gốc hoặc muốn học lại nền tảng bài bản.",
      "Sinh viên muốn cải thiện kỹ năng giao tiếp tiếng Anh.",
    ],
  },
  {
    slug: "tin-hoc",
    title: "Tin học",
    description:
      "Khóa học giúp học viên sử dụng thành thạo bộ công cụ văn phòng và kỹ năng số cần thiết cho học tập hiện đại.",
    image: "/NewCourse/Tin học.jpeg",
    duration: "07 tuần",
    level: "Cơ bản",
    format: "Offline kết hợp phòng máy",
    sessions: "14 buổi",
    audience: "Sinh viên cần chuẩn kỹ năng CNTT cơ bản",
    overview:
      "Khóa học Tin học tập trung vào năng lực ứng dụng CNTT thực tiễn: xử lý văn bản, bảng tính, trình chiếu, làm việc trực tuyến và bảo mật cá nhân. Nội dung bám sát yêu cầu chuẩn kỹ năng CNTT cơ bản, phù hợp cho sinh viên mọi chuyên ngành.",
    benefits: [
      "Thực hành trực tiếp trên các tác vụ học tập thường gặp.",
      "Hoàn thiện kỹ năng văn phòng số phục vụ báo cáo và đồ án.",
      "Giảm sai sót khi làm việc với dữ liệu và tài liệu học thuật.",
    ],
    whatYouWillLearn: [
      "Soạn thảo văn bản chuyên nghiệp với định dạng chuẩn.",
      "Xử lý dữ liệu và tạo báo cáo bằng bảng tính.",
      "Thiết kế slide trình bày trực quan, logic.",
      "Làm việc nhóm trên nền tảng số và lưu trữ đám mây.",
      "Bảo mật tài khoản, dữ liệu và thao tác Internet an toàn.",
    ],
    curriculum: [
      {
        title: "Module 1: Kỹ năng máy tính nền tảng",
        lessons: [
          "Quản lý tệp, thư mục và thiết lập môi trường làm việc",
          "Nguyên tắc an toàn thông tin cá nhân",
          "Tối ưu thao tác với phím tắt",
        ],
      },
      {
        title: "Module 2: Soạn thảo văn bản",
        lessons: [
          "Định dạng văn bản theo chuẩn học thuật",
          "Tạo mục lục, header/footer và trích dẫn",
          "Mẫu hóa tài liệu để làm việc nhanh hơn",
        ],
      },
      {
        title: "Module 3: Bảng tính và xử lý dữ liệu",
        lessons: [
          "Hàm tính toán cơ bản và điều kiện",
          "Lọc, sắp xếp, trực quan hóa dữ liệu",
          "Ứng dụng bảng tính trong báo cáo học tập",
        ],
      },
      {
        title: "Module 4: Trình chiếu và dự án cuối khóa",
        lessons: [
          "Thiết kế slide thuyết trình hiệu quả",
          "Kể chuyện bằng dữ liệu",
          "Thực hiện mini project báo cáo tổng hợp",
        ],
      },
    ],
    outcomes: [
      "Sử dụng thành thạo bộ công cụ văn phòng thông dụng.",
      "Tự tin xử lý dữ liệu và xây dựng báo cáo học tập.",
      "Nâng cao hiệu suất học tập nhờ kỹ năng số bài bản.",
      "Đáp ứng yêu cầu chuẩn CNTT cơ bản của nhà trường.",
    ],
    suitableFor: [
      "Sinh viên chưa vững kỹ năng máy tính văn phòng.",
      "Sinh viên chuẩn bị làm đồ án, khóa luận hoặc thực tập.",
      "Sinh viên muốn chuẩn hóa thao tác làm việc số hằng ngày.",
    ],
  },
  {
    slug: "ky-nang-mem",
    title: "Kỹ năng mềm",
    description:
      "Khóa học phát triển các năng lực quan trọng như giao tiếp, làm việc nhóm, tư duy phản biện và quản lý bản thân.",
    image: "/NewCourse/Kỹ năng mềm.png",
    duration: "06 tuần",
    level: "Mọi cấp độ",
    format: "Offline tương tác cao",
    sessions: "12 buổi",
    audience: "Sinh viên muốn nâng năng lực cá nhân",
    overview:
      "Khóa học Kỹ năng mềm giúp sinh viên hoàn thiện bộ kỹ năng thiết yếu cho môi trường đại học và công việc thực tế. Chương trình ưu tiên tình huống thực hành, phản hồi trực tiếp và hoạt động nhóm để tạo thay đổi rõ rệt trong hành vi học tập.",
    benefits: [
      "Giao tiếp rõ ràng, tự tin trong thuyết trình và trao đổi nhóm.",
      "Tăng khả năng hợp tác, xử lý xung đột và ra quyết định.",
      "Nâng cao năng lực tự quản lý thời gian và mục tiêu cá nhân.",
    ],
    whatYouWillLearn: [
      "Kỹ năng giao tiếp học thuật và giao tiếp chuyên nghiệp.",
      "Làm việc nhóm hiệu quả theo vai trò và mục tiêu chung.",
      "Tư duy phản biện và giải quyết vấn đề có cấu trúc.",
      "Quản trị thời gian, áp lực và hiệu suất cá nhân.",
      "Kỹ năng thuyết trình và phản biện trước đám đông.",
    ],
    curriculum: [
      {
        title: "Module 1: Giao tiếp và xây dựng hình ảnh cá nhân",
        lessons: [
          "Nguyên tắc giao tiếp 2 chiều",
          "Ngôn ngữ cơ thể và giọng nói",
          "Tạo ấn tượng trong môi trường học thuật",
        ],
      },
      {
        title: "Module 2: Làm việc nhóm và lãnh đạo bản thân",
        lessons: [
          "Phân vai và phối hợp trong nhóm",
          "Xử lý bất đồng và xung đột tích cực",
          "Tinh thần trách nhiệm trong dự án chung",
        ],
      },
      {
        title: "Module 3: Tư duy phản biện - giải quyết vấn đề",
        lessons: [
          "Khung tư duy đặt câu hỏi",
          "Phân tích nguyên nhân gốc rễ",
          "Ra quyết định dựa trên dữ liệu và bối cảnh",
        ],
      },
      {
        title: "Module 4: Thuyết trình và trình bày dự án",
        lessons: [
          "Xây dựng câu chuyện thuyết trình",
          "Thiết kế nội dung và quản lý thời gian trình bày",
          "Thực hành demo và nhận phản hồi",
        ],
      },
    ],
    outcomes: [
      "Giao tiếp tự tin trong lớp học và khi đi thực tập.",
      "Làm việc nhóm hiệu quả với tinh thần chủ động.",
      "Biết cách quản lý mục tiêu, tiến độ và áp lực cá nhân.",
      "Nâng cao kỹ năng phản biện và trình bày ý tưởng.",
    ],
    suitableFor: [
      "Sinh viên năm nhất cần thích nghi môi trường đại học.",
      "Sinh viên tham gia nhiều hoạt động nhóm, CLB, dự án.",
      "Sinh viên muốn cải thiện khả năng thuyết trình và phản biện.",
    ],
  },
  {
    slug: "ky-nang-nghe-nghiep",
    title: "Kỹ năng nghề nghiệp",
    description:
      "Khóa học chuẩn bị cho sinh viên năng lực làm việc thực tế: CV, phỏng vấn, tác phong chuyên nghiệp và tư duy nghề nghiệp.",
    image: "/NewCourse/Kỹ năng nghề.png",
    duration: "08 tuần",
    level: "Trung cấp",
    format: "Hybrid (Workshop + Coaching)",
    sessions: "16 buổi",
    audience: "Sinh viên chuẩn bị thực tập và đi làm",
    overview:
      "Khóa học Kỹ năng nghề nghiệp đồng hành cùng sinh viên từ giai đoạn định vị mục tiêu đến sẵn sàng ứng tuyển. Chương trình mô phỏng quy trình tuyển dụng thực tế, giúp học viên xây dựng hồ sơ chuyên nghiệp, luyện phỏng vấn và hiểu kỳ vọng doanh nghiệp.",
    benefits: [
      "Tạo hồ sơ ứng tuyển nổi bật và đúng mục tiêu nghề nghiệp.",
      "Rèn tác phong chuyên nghiệp trong môi trường doanh nghiệp.",
      "Tăng khả năng vượt qua phỏng vấn và hòa nhập nhanh khi đi làm.",
    ],
    whatYouWillLearn: [
      "Xây dựng CV, portfolio và hồ sơ LinkedIn hiệu quả.",
      "Kỹ thuật trả lời phỏng vấn theo tình huống thực tế.",
      "Quản lý công việc, deadline và báo cáo tiến độ chuyên nghiệp.",
      "Kỹ năng giao tiếp công sở và hợp tác đa phòng ban.",
      "Định vị lộ trình nghề nghiệp theo năng lực cá nhân.",
    ],
    curriculum: [
      {
        title: "Module 1: Định vị nghề nghiệp và thương hiệu cá nhân",
        lessons: [
          "Xác định mục tiêu nghề nghiệp ngắn hạn - dài hạn",
          "Phân tích năng lực cá nhân theo vị trí việc làm",
          "Xây dựng thương hiệu cá nhân số",
        ],
      },
      {
        title: "Module 2: Hồ sơ ứng tuyển",
        lessons: [
          "Thiết kế CV theo từng nhóm ngành",
          "Viết thư ứng tuyển và email chuyên nghiệp",
          "Chuẩn bị portfolio/dự án minh chứng năng lực",
        ],
      },
      {
        title: "Module 3: Phỏng vấn và tác phong công sở",
        lessons: [
          "Mô phỏng phỏng vấn cá nhân và phỏng vấn nhóm",
          "Kỹ năng xử lý câu hỏi khó",
          "Văn hóa doanh nghiệp và quy tắc chuyên nghiệp",
        ],
      },
      {
        title: "Module 4: Dự án tốt nghiệp nghề nghiệp",
        lessons: [
          "Xây dựng kế hoạch phát triển nghề nghiệp 6-12 tháng",
          "Pitch kế hoạch trước hội đồng chuyên môn",
          "Nhận phản hồi cá nhân hóa từ cố vấn",
        ],
      },
    ],
    outcomes: [
      "Sở hữu bộ hồ sơ ứng tuyển hoàn chỉnh và có định hướng rõ ràng.",
      "Tự tin tham gia phỏng vấn thực tập hoặc việc làm chính thức.",
      "Hiểu rõ kỳ vọng của doanh nghiệp với sinh viên mới tốt nghiệp.",
      "Sẵn sàng hội nhập và phát triển nghề nghiệp bền vững.",
    ],
    suitableFor: [
      "Sinh viên năm cuối hoặc chuẩn bị thực tập doanh nghiệp.",
      "Sinh viên chưa tự tin khi viết CV và phỏng vấn.",
      "Sinh viên muốn xây dựng lộ trình nghề nghiệp rõ ràng.",
    ],
  },
];

export const courseBenefits: ProgramBenefit[] = [
  {
    title: "Lộ trình rõ ràng",
    description:
      "Mỗi khóa học đều có mục tiêu, đầu ra và nội dung theo từng giai đoạn giúp học viên theo dõi tiến độ dễ dàng.",
    icon: "sparkles",
  },
  {
    title: "Đồng hành 1:1",
    description:
      "Giảng viên và trợ giảng hỗ trợ sát sao, phản hồi theo năng lực từng học viên để cải thiện hiệu quả học tập.",
    icon: "handshake",
  },
  {
    title: "Bám sát thực tiễn",
    description:
      "Nội dung học được thiết kế theo nhu cầu học tập, thực tập và làm việc thực tế của sinh viên tại doanh nghiệp.",
    icon: "briefcase",
  },
  {
    title: "Chuẩn đầu ra rõ ràng",
    description:
      "Chương trình định hướng theo chuẩn đầu ra của nhà trường và yêu cầu thị trường để tăng cơ hội nghề nghiệp.",
    icon: "shield",
  },
];

export const learningPathSteps: LearningPathStep[] = [
  {
    title: "Tư vấn chọn khóa phù hợp",
    description:
      "Đánh giá mục tiêu, năng lực hiện tại và đề xuất khóa học phù hợp với định hướng cá nhân của học viên.",
  },
  {
    title: "Học theo lộ trình có hướng dẫn",
    description:
      "Học viên được học theo kế hoạch chi tiết, có mentor theo dõi tiến độ và điều chỉnh phương pháp khi cần.",
  },
  {
    title: "Thực hành - dự án - phản hồi",
    description:
      "Tăng tỷ lệ ghi nhớ qua bài tập ứng dụng, mini project và phản hồi trực tiếp sau mỗi giai đoạn học.",
  },
  {
    title: "Đánh giá và hỗ trợ sau khóa",
    description:
      "Tổng kết năng lực đạt được, tư vấn bước tiếp theo và hỗ trợ định hướng học tập hoặc nghề nghiệp lâu dài.",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
