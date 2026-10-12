"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "./icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(16);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 1.25);
      const footer = document.getElementById("site-footer");
      const gutter = window.innerWidth >= 768 ? 28 : 16;
      const footerOverlap = footer ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top) : 0;
      setBottomOffset(gutter + footerOverlap);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <button type="button" aria-label="Scroll back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ bottom: bottomOffset }} className={`fixed right-4 z-[60] flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] bg-[var(--nav-bg)] text-indigo-400 shadow-card backdrop-blur-xl transition-all md:right-7 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>
      <ChevronUpIcon className="h-4 w-4" />
    </button>
  );
}
