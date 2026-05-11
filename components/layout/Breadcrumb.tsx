"use client";

import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCROLL_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "Home",
  "End",
  " ",
]);

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  revealOnUserScroll?: boolean;
};

export default function Breadcrumb({
  items,
  revealOnUserScroll = false,
}: BreadcrumbProps) {
  const [hasUserScrolled, setHasUserScrolled] = useState(!revealOnUserScroll);

  useEffect(() => {
    setHasUserScrolled(!revealOnUserScroll);
  }, [revealOnUserScroll]);

  useEffect(() => {
    if (!revealOnUserScroll || hasUserScrolled) return;

    let isMousePressed = false;
    let lastScrollY = window.scrollY;

    const reveal = () => {
      setHasUserScrolled(true);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaX !== 0 || event.deltaY !== 0) reveal();
    };

    const onTouchMove = () => {
      reveal();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) reveal();
    };

    const onMouseDown = () => {
      isMousePressed = true;
    };

    const onMouseUp = () => {
      isMousePressed = false;
    };

    const onWindowBlur = () => {
      isMousePressed = false;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const hasMoved = currentScrollY !== lastScrollY;
      lastScrollY = currentScrollY;
      if (isMousePressed && hasMoved) reveal();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasUserScrolled, revealOnUserScroll]);

  const content = (
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
  );

  if (!revealOnUserScroll) {
    return (
      <nav className="bg-background py-4" aria-label="Breadcrumb">
        {content}
      </nav>
    );
  }

  return (
    <motion.nav
      className="bg-background py-4"
      aria-label="Breadcrumb"
      aria-hidden={!hasUserScrolled}
      initial={false}
      animate={hasUserScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.24, ease: EASE }}
      style={{ pointerEvents: hasUserScrolled ? "auto" : "none" }}
    >
      {content}
    </motion.nav>
  );
}
