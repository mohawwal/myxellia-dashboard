"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface SideModalProps {
  open: boolean;
  handleClose: () => void;
  side: "left" | "right";
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  width?: string;
}

export default function SideModal({
  open,
  handleClose,
  side,
  children,
  className = "",
  overlayClassName = "",
  width = "400px"
}: SideModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [open, handleClose]);

  if (!mounted || !open) return null;

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 ${overlayClassName}`}
    >
      <div 
        className="absolute inset-0 bg-black/50 hidden md:block" 
        onClick={handleClose}
      />
      
      <div
                  style={{
          '--modal-width': width,
        } as React.CSSProperties & { '--modal-width': string }}
        className={`
          fixed 
          bg-white
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${
            "w-full h-[calc(100vh-70px)] top-[70px]"
          }
          ${
            "sm:w-[var(--modal-width)] sm:min-w-[var(--modal-width)] sm:max-w-[50vw]"
          }
          ${
            "md:h-[calc(100vh-82px)] md:top-[82px]"
          }
          ${
            side === "left" 
              ? "left-0 lg:left-0" 
              : "right-0 lg:right-0"
          }
          ${
            open
              ? "translate-x-0"
              : side === "left"
              ? "-translate-x-full"
              : "translate-x-full"
          }
          ${className}
        `}

        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}