import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CourseCTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CourseCTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CourseCTASectionProps) {
  return (
    <section className="bg-background pb-24 pt-8 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#0B1A3B] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-56 w-56 rounded-full bg-red-400/25 blur-3xl" />

          <div className="relative z-10 max-w-[760px]">
            <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[42px]">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">{description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#ED1F25] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d7171d]"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/15"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
