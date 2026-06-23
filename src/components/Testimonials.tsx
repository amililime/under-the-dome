"use client";

import { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    text: "Dormir mirando las estrellas, despertar con el río al frente. Una experiencia que no podés describir, tenés que vivirla.",
    name: "Lucía & Martín",
    meta: "Montevideo, UY",
  },
  {
    text: "Cuidaron cada detalle: la comida, la atención, el silencio. Volvimos otra gente. Sin duda el mejor escape que hicimos.",
    name: "Andrea P.",
    meta: "Buenos Aires, AR",
  },
  {
    text: "El diseño del domo es impecable y la ubicación, mágica. Sentís que estás solo en el mundo, pero con todo el confort posible.",
    name: "Familia Rodríguez",
    meta: "São Paulo, BR",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const current = REVIEWS[i];

  return (
    <section className={styles.section} aria-label="Testimonios">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>— Huéspedes</p>
        <div className={styles.stars} aria-label="5 estrellas">
          ★★★★★
        </div>
        <blockquote className={styles.quote} key={i}>
          {current.text}
        </blockquote>
        <footer className={styles.author}>
          <span className={styles.authorName}>{current.name}</span>
          <span className={styles.authorMeta}>{current.meta}</span>
        </footer>
        <div className={styles.controls} role="tablist">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`Testimonio ${idx + 1}`}
              className={`${styles.dot} ${idx === i ? styles.dotActive : ""}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
