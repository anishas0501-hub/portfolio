"use client";

import { useRef } from "react";

export default function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px, ${
      y * 0.15
    }px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;

    button.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300"
    >
      {children}
    </a>
  );
}