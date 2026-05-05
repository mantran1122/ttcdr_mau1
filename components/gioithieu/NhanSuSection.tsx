"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Globe, ExternalLink } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CARD_BG = "#EEF3FF";
const ACCENT = "#2F5BFF";

/* ── Row 1: Leadership ── */
const leaders = [
  {
    name: "TS. Trần Thị Thùy",
    role: "GIÁM ĐỐC TRUNG TÂM",
    image: "/nhansu/gdtt.png",
  },
  {
    name: "ThS. Huỳnh Bá Lộc",
    role: "PHÓ GIÁM ĐỐC",
    image: "/nhansu/pgd.png",
  },
  {
    name: "ThS. Ngô Thị Tú Uyên",
    role: "PHÓ GIÁM ĐỐC",
    image: "/nhansu/pgd2.png",
  },
  {
    name: "Chuyên viên",
    role: "QUẢN LÝ CHƯƠNG TRÌNH TRÍ TUỆ NHÂN TẠO (AI) CHUẨN ĐẦU RA",
    image: "/nhansu/clone.png",
  },
];

/* ── Row 2: Staff ── */
const staff = [
  {
    name: "Chuyên viên",
    role: "QUẢN LÍ CHƯƠNG TRÌNH ANH VĂN CHUẨN ĐẦU RA",
    image: "/nhansu/clone.png",
  },
  {
    name: "Chuyên viên",
    role: "QUẢN LÍ CHƯƠNG TRÌNH TIN HỌC CHUẨN ĐẦU RA",
    image: "/nhansu/clone.png",
  },
  {
    name: "Chuyên viên",
    role: "QUẢN LÍ CHƯƠNG TRÌNH KỸ NĂNG MỀM CHUẨN ĐẦU RA",
    image: "/nhansu/clone.png",
  },
  {
    name: "Chuyên viên",
    role: "QUẢN LÍ CHƯƠNG TRÌNH TIẾNG ANH (VSTEP)",
    image: "/nhansu/clone.png",
  },
];

/* ── Social icons ── */
function Socials() {
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-md"
        aria-label="Email"
      >
        <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
      </a>
      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-md"
        aria-label="Website"
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
      </a>
      <a
        href="#"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-md"
        aria-label="Portfolio"
      >
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
      </a>
    </div>
  );
}

/* ── Team card ── */
function TeamCard({
  name,
  role,
  image,
  size = "md",
  index,
}: {
  name: string;
  role: string;
  image: string;
  size?: "lg" | "md";
  index: number;
}) {
  const imgSize =
    size === "lg"
      ? "h-28 w-28 sm:h-32 sm:w-32"
      : "h-20 w-20 sm:h-24 sm:w-24";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -6 }}
      className="group flex flex-col items-center rounded-[2rem] p-6 text-center transition-shadow duration-300 hover:shadow-[0_20px_50px_-16px_rgba(47,91,255,0.18)] sm:p-8"
      style={{ backgroundColor: CARD_BG }}
    >
      {/* Avatar */}
      <div
        className={`relative ${imgSize} overflow-hidden rounded-full ring-[6px] ring-white shadow-[0_10px_30px_-8px_rgba(47,91,255,0.25)]`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="128px"
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-base font-bold text-slate-900 sm:text-lg">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
        {role}
      </p>

      {/* Socials */}
      <Socials />
    </motion.div>
  );
}

export default function NhanSuSection() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center sm:mb-18"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-tight tracking-tight">
            <span className="text-slate-900">Nhân sự</span>
          </h2>
        </motion.div>

        {/* ── Row 1: 4 cards ── */}
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {leaders.map((member, i) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              size="lg"
              index={i}
            />
          ))}
        </div>

        {/* ── Row 2: 4 cards ── */}
        <div className="mx-auto mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {staff.map((member, i) => (
            <TeamCard
              key={member.role}
              name={member.name}
              role={member.role}
              image={member.image}
              size="md"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
