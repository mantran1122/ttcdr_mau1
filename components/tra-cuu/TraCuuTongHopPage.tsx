"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThiSinhSection from "@/components/tra-cuu/ThiSinhSection";
import KetQuaThiSection from "@/components/tra-cuu/KetQuaThiSection";

const EASE = [0.22, 1, 0.36, 1] as const;

export type TraCuuSection = "thisinh" | "kqthi";

type TraCuuTongHopPageProps = {
  initialSection?: TraCuuSection;
};

const TABS: Array<{ id: TraCuuSection; label: string }> = [
  { id: "thisinh", label: "Thí sinh" },
  { id: "kqthi", label: "Kết quả thi" },
];

const panelVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:  (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
};

export default function TraCuuTongHopPage({ initialSection = "thisinh" }: TraCuuTongHopPageProps) {
  const [activeSection, setActiveSection] = useState<TraCuuSection>(initialSection);
  const [direction, setDirection]         = useState(initialSection === "kqthi" ? 1 : -1);
  const [thiSinhQuery, setThiSinhQuery]   = useState("");
  const [thiSinhSubmitted, setThiSinhSubmitted] = useState("");
  const [ketQuaQuery, setKetQuaQuery]     = useState("");
  const [ketQuaSubmitted, setKetQuaSubmitted]   = useState("");

  const handleSwitch = (next: TraCuuSection) => {
    if (next === activeSection) return;
    setDirection(next === "kqthi" ? 1 : -1);
    setActiveSection(next);
  };

  return (
    <div className="relative min-h-screen bg-background pb-10 pt-24 sm:pt-28 lg:pt-28">
      {/* ── Decorative floating icons ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft ambient blobs */}
        <div className="absolute -left-20 top-24 h-52 w-52 rounded-full bg-sky-100/55 blur-3xl [animation:tcFloat_15s_ease-in-out_infinite]" />
        <div className="absolute right-[-80px] top-48 h-56 w-56 rounded-full bg-rose-100/45 blur-3xl [animation:tcFloat_17s_ease-in-out_infinite] [animation-delay:-5s]" />

        {/* Top zone – 2 icons */}
        <i className="bi bi-book absolute left-[35%] top-[6%] hidden text-[66px] text-sky-300/75 [animation:tcFloat_10s_ease-in-out_infinite] [animation-delay:-2s] md:block" />
        <i className="bi bi-mortarboard absolute right-[7%] top-[22%] hidden text-[82px] text-rose-300/80 [animation:tcFloat_11s_ease-in-out_infinite] [animation-delay:-4s] lg:block" />

        {/* Bottom zone – 1 icon */}
        <i className="bi bi-calendar4-week absolute right-[5%] top-[70%] hidden text-[68px] text-rose-300/78 [animation:tcFloat_9s_ease-in-out_infinite] [animation-delay:-1.5s] lg:block" />

        {/* Tiny accents */}
        <span className="absolute right-[3%] top-[6.8%] h-6 w-6 rounded-full ring-[3px] ring-rose-300/80 [animation:tcPulse_8s_ease-in-out_infinite]" />
        <span className="absolute left-[52%] top-[90%] hidden text-[52px] text-rose-300/75 [animation:tcPulse_9s_ease-in-out_infinite] [animation-delay:-2s] md:block">+</span>
      </div>

      {/* ── Tab header ── */}
      <section className="relative z-10 pb-8 lg:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-left"
          >
            <h1 className="text-[clamp(1.7rem,3.2vw,2.7rem)] font-black leading-tight tracking-[-0.04em] text-slate-950">
              Tra cứu thông tin
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
            className="mt-6 w-full max-w-lg"
          >
            <div className="relative grid grid-cols-2 rounded-full bg-slate-200/85 p-1">
              <motion.span
                layout
                transition={{ duration: 0.35, ease: EASE }}
                className={[
                  "pointer-events-none absolute bottom-1 top-1 z-0 rounded-full bg-red-600 shadow-[0_8px_18px_-10px_rgba(220,38,38,0.75)]",
                  activeSection === "thisinh" ? "left-1 right-[50%]" : "left-[50%] right-1",
                ].join(" ")}
              />
              {TABS.map((tab) => {
                const isActive = tab.id === activeSection;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleSwitch(tab.id)}
                    aria-pressed={isActive}
                    className={[
                      "relative z-10 rounded-full px-4 py-3 text-sm font-semibold transition-colors sm:text-base",
                      isActive ? "text-white" : "text-slate-600 hover:text-slate-900",
                    ].join(" ")}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main panel ── */}
      <motion.section layout className="relative z-10 overflow-visible">
        {/* ── Panel content ── */}
        <div className="relative z-10 container mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: EASE }}
            >
              {activeSection === "thisinh" ? (
                <ThiSinhSection
                  query={thiSinhQuery}
                  submitted={thiSinhSubmitted}
                  onQueryChange={setThiSinhQuery}
                  onSearch={setThiSinhSubmitted}
                />
              ) : (
                <KetQuaThiSection
                  query={ketQuaQuery}
                  submitted={ketQuaSubmitted}
                  onQueryChange={setKetQuaQuery}
                  onSearch={setKetQuaSubmitted}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

    </div>
  );
}
