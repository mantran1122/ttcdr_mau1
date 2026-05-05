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
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
  }),
};

export default function TraCuuTongHopPage({
  initialSection = "thisinh",
}: TraCuuTongHopPageProps) {
  const [activeSection, setActiveSection] =
    useState<TraCuuSection>(initialSection);
  const [direction, setDirection] = useState(initialSection === "kqthi" ? 1 : -1);

  const [thiSinhQuery, setThiSinhQuery] = useState("");
  const [thiSinhSubmitted, setThiSinhSubmitted] = useState("");
  const [ketQuaQuery, setKetQuaQuery] = useState("");
  const [ketQuaSubmitted, setKetQuaSubmitted] = useState("");

  const handleSwitch = (next: TraCuuSection) => {
    if (next === activeSection) {
      return;
    }

    setDirection(next === "kqthi" ? 1 : -1);
    setActiveSection(next);
  };

  return (
    <div className="min-h-screen bg-background pb-10 pt-24 sm:pt-28 lg:pt-28">
      <section className="pb-8 lg:pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-center"
          >
            <h1 className="text-[clamp(1.7rem,3.2vw,2.7rem)] font-black leading-tight tracking-[-0.04em] text-slate-950">
              Tra cứu thông tin
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
            className="mx-auto mt-6 w-full max-w-lg"
          >
            <div className="relative grid grid-cols-2 rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200/80">
              <motion.span
                layout
                transition={{ duration: 0.35, ease: EASE }}
                className={[
                  "pointer-events-none absolute bottom-1 top-1 z-0 rounded-full bg-red-600 shadow-[0_8px_18px_-10px_rgba(220,38,38,0.75)]",
                  activeSection === "thisinh"
                    ? "left-1 right-[50%]"
                    : "left-[50%] right-1",
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

      <motion.section layout className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white py-6 sm:py-8 lg:py-10">
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
        </div>
      </motion.section>
    </div>
  );
}
