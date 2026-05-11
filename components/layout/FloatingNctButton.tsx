"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent as ReactPointerEvent } from "react";

type Position = {
  x: number;
  y: number;
};

const STORAGE_KEY = "nct-floating-button-position-v1";
const BUTTON_SIZE = 56;
const EDGE_PADDING = 16;
const DEFAULT_SCREEN_OFFSET = 24;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function clampToViewport(position: Position): Position {
  const maxX = Math.max(EDGE_PADDING, window.innerWidth - BUTTON_SIZE - EDGE_PADDING);
  const maxY = Math.max(EDGE_PADDING, window.innerHeight - BUTTON_SIZE - EDGE_PADDING);
  return {
    x: clamp(position.x, EDGE_PADDING, maxX),
    y: clamp(position.y, EDGE_PADDING, maxY),
  };
}

function getDefaultPosition(): Position {
  return {
    x: Math.max(EDGE_PADDING, window.innerWidth - BUTTON_SIZE - DEFAULT_SCREEN_OFFSET),
    y: Math.max(EDGE_PADDING, window.innerHeight - BUTTON_SIZE - DEFAULT_SCREEN_OFFSET),
  };
}

export default function FloatingNctButton() {
  const [position, setPosition] = useState<Position>(() => {
    let nextPosition = getDefaultPosition();
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Partial<Position>;
        if (typeof parsed?.x === "number" && typeof parsed?.y === "number") {
          nextPosition = { x: parsed.x, y: parsed.y };
        }
      } catch {
        // Ignore invalid cached position and fallback to default.
      }
    }

    return clampToViewport(nextPosition);
  });
  const [isDragging, setIsDragging] = useState(false);
  const latestPositionRef = useRef<Position>(position);
  const suppressClickRef = useRef(false);
  const dragStateRef = useRef({
    dragging: false,
    pointerId: -1,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        const clamped = clampToViewport(prev);
        latestPositionRef.current = clamped;
        return clamped;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const persistPosition = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(latestPositionRef.current));
  };

  const finishDragging = useCallback(() => {
    if (!dragStateRef.current.dragging) return;
    dragStateRef.current.dragging = false;
    dragStateRef.current.pointerId = -1;
    setIsDragging(false);
    persistPosition();
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleWindowPointerMove = (event: globalThis.PointerEvent) => {
      const dragState = dragStateRef.current;
      if (!dragState.dragging || event.pointerId !== dragState.pointerId) return;

      const movedDistance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
      if (movedDistance > 4) {
        suppressClickRef.current = true;
      }

      const next = clampToViewport({
        x: event.clientX - dragState.offsetX,
        y: event.clientY - dragState.offsetY,
      });

      latestPositionRef.current = next;
      setPosition(next);
    };

    const handleWindowPointerEnd = (event: globalThis.PointerEvent) => {
      const dragState = dragStateRef.current;
      if (!dragState.dragging || event.pointerId !== dragState.pointerId) return;
      finishDragging();
    };

    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("pointerup", handleWindowPointerEnd);
    window.addEventListener("pointercancel", handleWindowPointerEnd);
    window.addEventListener("blur", finishDragging);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerEnd);
      window.removeEventListener("pointercancel", handleWindowPointerEnd);
      window.removeEventListener("blur", finishDragging);
    };
  }, [finishDragging, isDragging]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    dragStateRef.current = {
      dragging: true,
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      startX: event.clientX,
      startY: event.clientY,
    };

    suppressClickRef.current = false;
    setIsDragging(true);
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Some browsers may reject pointer capture; global pointer listeners still keep dragging stable.
    }
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    suppressClickRef.current = false;
  };

  return (
    <a
      href="https://www.nctu.edu.vn/"
      target="_blank"
      rel="noreferrer"
      aria-label="Trang chủ NCT"
      draggable={false}
      className={`fixed z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform active:scale-95 ${
        isDragging ? "cursor-grabbing scale-105" : "cursor-grab hover:scale-110"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={finishDragging}
      onPointerCancel={finishDragging}
      onLostPointerCapture={finishDragging}
      onDragStart={(event) => event.preventDefault()}
      onClick={handleClick}
    >
      <Image src="/logo_don.png" alt="NCT" width={40} height={40} className="h-10 w-10 object-contain" />
    </a>
  );
}
