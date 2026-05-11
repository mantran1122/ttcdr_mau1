import ScrollReveal from "../ui/ScrollReveal";

export default function GioiThieuSection() {
  return (
    <div className="mb-24 lg:mb-28" style={{ marginTop: "-190px" }}>
      <div className="container mx-auto px-4 relative">
        {/* Background image block */}
        <div
          className="lg:w-[65%] h-[300px] lg:h-[450px] bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage: "url('https://ttcdr.nctu.edu.vn/dist/upload/khuc.jpg')",
            backgroundPosition: "50% 77%",
            backgroundSize: "200%",
          }}
        />

        {/* Info card */}
        <ScrollReveal delay={150} className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-3 lg:w-[40%]">
          <div
            className="bg-white px-6 py-8 lg:px-10 lg:py-10"
            style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.1)" }}
          >
            <div className="font-bold text-[#ED1F25] text-xl lg:text-[22px] leading-8 mb-4">
              Trung tâm chuẩn đầu ra &<br />Phát triển nguồn nhân lực
            </div>
            <p className="text-[17px] text-[rgb(68,70,75)] text-justify leading-relaxed mb-6">
              Trung tâm có chức năng đào tạo, bồi dưỡng Tin học, Ngoại ngữ, Kỹ năng mềm, Kỹ năng
              nghề nghiệp cho sinh viên với các hình thức linh hoạt theo từng ngành học mang tính xã
              hội hóa cao...
            </p>
            <a
              href="/gioi-thieu"
              className="inline-flex items-center text-white px-3 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{ background: "#ED1F25" }}
            >
              Chi tiết
              <span
                className="ml-4 w-6 h-6 rounded-full bg-white text-[#ED1F25] flex items-center justify-center"
                style={{ fontSize: "18px" }}
              >
                ›
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
