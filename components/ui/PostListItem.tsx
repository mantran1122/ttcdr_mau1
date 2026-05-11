interface PostListItemProps {
  href: string;
  title: string;
  date: string;
  isNew?: boolean;
  subLinks?: { href: string; label: string }[];
}

export default function PostListItem({ href, title, date, isNew, subLinks }: PostListItemProps) {
  return (
    <div className="border-b border-gray-300 py-1">
      <a href={href} className="block">
        <div className="flex justify-between items-start min-h-[50px] py-2">
          <p className="text-[16px] pr-4 text-gray-800 leading-snug">{title}</p>
          <p className="relative text-[#212529] shrink-0 text-sm">
            {date}
            {isNew && (
              <span
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[#ED1F25] text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                style={{ fontSize: "18px" }}
              >
                Mới
              </span>
            )}
          </p>
        </div>
      </a>
      {subLinks && subLinks.length > 0 && (
        <div className="mt-1 mb-2 pr-24">
          {subLinks.map((link, i) => (
            <p key={i} className="flex text-[#ED1F25] mb-1 leading-5">
              <span className="pr-2">•</span>
              <a href={link.href} className="text-[#ED1F25] text-sm">
                {link.label}
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
