"use client";

import { useEffect, useRef, useState, createElement } from "react";

type Props = {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "li" | "header";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";
  const visibleClass = visible ? " is-visible" : "";

  return createElement(
    as,
    {
      ref,
      className: `reveal${delayClass}${visibleClass} ${className}`.trim(),
    },
    children,
  );
}
