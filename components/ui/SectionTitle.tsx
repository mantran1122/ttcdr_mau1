interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center gap-5 sm:gap-7 ${className}`}>
      <span
        className="h-px w-12 shrink-0 sm:w-20 lg:w-28"
        style={{ background: "linear-gradient(to left, #c8cdd4, transparent)" }}
      />
      <em
        className="shrink-0 text-center text-[1.25rem] not-italic italic leading-none tracking-wide sm:text-[1.45rem] lg:text-[1.65rem]"
        style={{
          fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
          color: "#8a9099",
        }}
      >
        {title}
      </em>
      <span
        className="h-px w-12 shrink-0 sm:w-20 lg:w-28"
        style={{ background: "linear-gradient(to right, #c8cdd4, transparent)" }}
      />
    </div>
  );
}
