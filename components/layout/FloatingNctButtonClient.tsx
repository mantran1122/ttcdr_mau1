"use client";

import dynamic from "next/dynamic";

const FloatingNctButton = dynamic(() => import("./FloatingNctButton"), {
  ssr: false,
});

export default function FloatingNctButtonClient() {
  return <FloatingNctButton />;
}
