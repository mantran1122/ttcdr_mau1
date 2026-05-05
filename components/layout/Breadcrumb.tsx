import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="bg-background py-4" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-red-500"
            >
              <Home className="h-4 w-4" strokeWidth={2} />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-300" strokeWidth={2} />
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-red-500"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-slate-700">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
