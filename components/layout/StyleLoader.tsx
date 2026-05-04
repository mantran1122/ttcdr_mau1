"use client";

import { useEffect } from "react";

const SHEETS = [
  "https://fonts.googleapis.com/css2?family=Momo+Trust+Sans:wght@200..800&display=swap",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
];

export default function StyleLoader() {
  useEffect(() => {
    SHEETS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
