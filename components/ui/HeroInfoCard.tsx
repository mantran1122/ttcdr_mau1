interface HeroInfoCardProps {
  icon: string;
  iconBg?: string;
  title: string;
  description: string;
  date: string;
  dotColor?: string;
}

export default function HeroInfoCard({
  icon,
  iconBg = "#EEF0FB",
  title,
  description,
  date,
  dotColor = "#233E8C",
}: HeroInfoCardProps) {
  return (
    <div
      className="bg-white flex items-start gap-4 px-5 py-4"
      style={{
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        minWidth: "260px",
        maxWidth: "360px",
      }}
    >
      {/* Icon box */}
      <div
        className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl"
        style={{ background: iconBg }}
      >
        <i className={`bi ${icon} text-[20px]`} style={{ color: "#3D4F7C" }} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p
            className="font-semibold text-[15px] text-gray-900 leading-snug"
          >
            {title}
          </p>
          <button className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors mt-0.5">
            <i className="bi bi-arrow-right text-[13px] text-gray-600" />
          </button>
        </div>
        <p
          className="text-[13px] text-gray-500 mt-1 leading-snug line-clamp-2"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          {description}
        </p>
        <div className="flex items-center gap-1.5 mt-2">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: dotColor }}
          />
          <span className="text-[12px] text-gray-400">{date}</span>
        </div>
      </div>
    </div>
  );
}
