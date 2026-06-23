"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const STATS = [
  { value: 5, suffix: "★", label: "Calificación de huéspedes" },
  { value: 150, suffix: "+", label: "Estadías memorables" },
  { value: 15, suffix: "", label: "Domos exclusivos" },
] as const;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useParallax(reduced: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      el.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1.08 + Math.min(y, 600) * 0.0002})`;
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [reduced]);
  return ref;
}

function CountUp({
  to,
  suffix,
  reduced,
}: {
  to: number;
  suffix: string;
  reduced: boolean;
}) {
  const [n, setN] = useState(reduced ? to : 0);
  useEffect(() => {
    if (reduced) {
      setN(to);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, reduced]);
  return (
    <>
      {n}
      {suffix && <span>{suffix}</span>}
    </>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const bgRef = useParallax(reduced);

  return (
    <section id="top" className={styles.hero}>
      <div ref={bgRef} className={styles.bg} aria-hidden="true">
        <Image
          src="/hero/dome-autumn.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          quality={85}
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ${styles.revealItem}`}>
            San Gregorio de Polanco · Uruguay
          </p>
          <h1 className={styles.title}>
            <span className={styles.line}>
              <span className={styles.lineInner} style={{ animationDelay: "180ms" }}>
                Un refugio
              </span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner} style={{ animationDelay: "320ms" }}>
                <em>silencioso</em>
              </span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner} style={{ animationDelay: "460ms" }}>
                entre el río y el cielo.
              </span>
            </span>
          </h1>
          <p
            className={`${styles.lede} ${styles.revealItem}`}
            style={{ animationDelay: "780ms" }}
          >
            Domos de diseño en plena naturaleza, sobre la playa El Barranco. Un
            refugio íntimo donde el cielo, el río y el silencio se vuelven
            arquitectura.
          </p>
          <div
            className={`${styles.actions} ${styles.revealItem}`}
            style={{ animationDelay: "920ms" }}
          >
            <a href="#reservar" className={styles.primary}>
              Reservar estadía
              <span aria-hidden="true">→</span>
            </a>
            <a href="#experiencias" className={styles.secondary}>
              Descubrir la experiencia
            </a>
          </div>
        </div>

        <div className={styles.meta}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.stat} ${styles.revealItem}`}
              style={{ animationDelay: `${940 + i * 120}ms` }}
            >
              <span className={styles.statValue}>
                <CountUp to={s.value} suffix={s.suffix} reduced={reduced} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#experiencias" className={styles.scrollHint} aria-label="Scroll">
        Scroll
      </a>
    </section>
  );
}
