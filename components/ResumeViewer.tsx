"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PAGE_WIDTH = 1786;
const PAGE_HEIGHT = 2526;
const PAGE_RATIO = PAGE_WIDTH / PAGE_HEIGHT;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

export default function ResumeViewer() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [fitWidth, setFitWidth] = useState(0);
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const edge = viewport.clientWidth < 640 ? 20 : 32;
    const availableWidth = Math.max(viewport.clientWidth - edge, 1);
    const availableHeight = Math.max(viewport.clientHeight - edge, 1);
    setFitWidth(Math.min(availableWidth, availableHeight * PAGE_RATIO));
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  const updateZoom = (nextZoom: number) => {
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom)));
  };

  const renderedWidth = fitWidth * zoom;
  const renderedHeight = renderedWidth / PAGE_RATIO;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden border border-[var(--line-strong)] bg-[#262626]">
      <div
        className="z-10 flex h-11 shrink-0 items-center justify-end border-b border-white/15 bg-[#171717] font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white"
        role="group"
        aria-label="Résumé zoom controls"
      >
        <button
          type="button"
          onClick={() => updateZoom(zoom - ZOOM_STEP)}
          disabled={zoom <= MIN_ZOOM}
          className="flex h-10 w-10 items-center justify-center border-r border-white/20 text-lg transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Zoom out"
        >
          −
        </button>
        <span className="min-w-[3.75rem] px-2 text-center" aria-live="polite">
          {zoom === MIN_ZOOM ? "Fit" : `${Math.round(zoom * 100)}%`}
        </span>
        <button
          type="button"
          onClick={() => updateZoom(zoom + ZOOM_STEP)}
          disabled={zoom >= MAX_ZOOM}
          className="flex h-10 w-10 items-center justify-center border-l border-white/20 text-lg transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Zoom in"
        >
          +
        </button>
        {zoom !== MIN_ZOOM && (
          <button
            type="button"
            onClick={() => updateZoom(MIN_ZOOM)}
            className="h-10 border-l border-white/20 px-3 text-[9px] text-lime-300 transition-colors hover:bg-white/10"
          >
            Fit page
          </button>
        )}
      </div>

      <div ref={viewportRef} className="relative min-h-0 flex-1 overflow-auto overscroll-contain">
        <div
          className="flex items-center justify-center p-2.5 sm:p-4"
          style={{
            minWidth: renderedWidth ? renderedWidth + 20 : "100%",
            minHeight: renderedHeight ? renderedHeight + 20 : "100%",
          }}
        >
          {fitWidth > 0 && (
            <Image
              src="/resume/Abhijeet-Kumar-Singh-Resume-preview.png"
              alt="Preview of Abhijeet Kumar Singh's résumé"
              width={PAGE_WIDTH}
              height={PAGE_HEIGHT}
              priority
              unoptimized
              draggable={false}
              className="h-auto max-w-none bg-white shadow-[0_20px_70px_rgba(0,0,0,0.5)]"
              style={{ width: renderedWidth }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
