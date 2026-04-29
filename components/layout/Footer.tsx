import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Social + University */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/namcanthouniversity/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 transition-colors hover:text-[#11467F]"
              >
                <i className="bi bi-instagram text-xl" />
              </a>
              <a
                href="https://www.facebook.com/NamCanThoUniversity/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 transition-colors hover:text-[#11467F]"
              >
                <i className="bi bi-facebook text-lg" />
              </a>
            </div>

            {/* University info */}
            <div>
              <h3 className="text-[18px] font-bold text-[#11467F] lg:text-[20px]">
                Trường Đại học Nam Cần Thơ
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-gray-700">
                168, Nguyễn Văn Cừ (nối dài), P. An Bình
                <br />
                TP. Cần Thơ
              </p>
            </div>
          </div>

          {/* Center: Center info */}
          <div>
            <h3 className="text-[18px] font-bold text-[#11467F] lg:text-[20px]">
              Trung tâm chuẩn đầu ra &amp; PTNNL
            </h3>
            <ul className="mt-3 space-y-2 text-[15px] text-gray-800">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-gray-600" />
                <span>Khu C, phòng C2-14</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gray-600" />
                <a
                  href="tel:02923798789"
                  className="transition-colors hover:text-[#11467F]"
                >
                  02923 798 789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gray-600" />
                <a
                  href="mailto:ttchuandaura@nctu.edu.vn"
                  className="transition-colors hover:text-[#11467F]"
                >
                  ttchuandaura@nctu.edu.vn
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Logo */}
          <div className="shrink-0">
            <Image
              src="/logo_don.png"
              alt="Logo Đại học Nam Cần Thơ"
              width={90}
              height={90}
              className="h-auto w-[80px] object-contain lg:w-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-300/50">
        <div className="container mx-auto px-4 py-4 text-left text-sm text-gray-600">
          CopyRight © 2024 Trường Đại học Nam Cần Thơ
        </div>
      </div>
    </footer>
  );
}
