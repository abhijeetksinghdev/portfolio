"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

const CHANGE_INTERVAL_MS = 2600;
const TRANSITION_MS = 260;

export default function RotatingDesignation() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setVisible(false);
      transitionTimer.current = window.setTimeout(() => {
        setIndex((current) => (current + 1) % profile.designations.length);
        setVisible(true);
      }, TRANSITION_MS);
    }, CHANGE_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <p className="min-h-7 font-name text-lg font-extrabold text-indigo-400 md:text-xl">
      <span
        className={`inline-block transition-[opacity,transform] duration-[260ms] ease-out ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
        }`}
      >
        {profile.designations[index]}
      </span>
    </p>
  );
}
