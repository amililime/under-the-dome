"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import styles from "./Booking.module.css";

const PERKS = [
  { n: "i", text: "Tarifa todo incluido, sin sorpresas" },
  { n: "ii", text: "Cancelación flexible hasta 72 hs antes" },
  { n: "iii", text: "Late check-out sujeto a disponibilidad" },
  { n: "iv", text: "Estacionamiento privado" },
];

export default function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const arrival = String(data.get("arrival") || "");
    const departure = String(data.get("departure") || "");
    const guests = String(data.get("guests") || "");
    const notes = String(data.get("notes") || "");

    const msg = `Hola! Soy ${name}. Quisiera reservar del ${arrival} al ${departure} para ${guests} huésped(es). ${notes}`;
    const url = `https://wa.me/598099447265?text=${encodeURIComponent(msg)}`;

    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservar" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Reservas</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Asegurá tu noche bajo el <em>cielo más limpio.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.body}>
          <Reveal className={styles.intro}>
            <p className={styles.lede}>
              Disponibilidad limitada todo el año. Te respondemos por WhatsApp
              en pocos minutos con tarifa y formas de pago.
            </p>
            <ul className={styles.perks}>
              {PERKS.map((p) => (
                <li key={p.n} data-n={p.n}>
                  {p.text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className={styles.formCard}>
              {sent ? (
                <div className={styles.sent}>
                  <strong>Te estamos abriendo WhatsApp.</strong>
                  <p>
                    Si no se abre automáticamente,{" "}
                    <a
                      href="https://wa.me/598099447265"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hacé click aquí
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={onSubmit}>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label} htmlFor="name">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={styles.input}
                      required
                      placeholder="María Pérez"
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="arrival">
                      Llegada
                    </label>
                    <input
                      id="arrival"
                      name="arrival"
                      type="date"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="departure">
                      Salida
                    </label>
                    <input
                      id="departure"
                      name="departure"
                      type="date"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="guests">
                      Huéspedes
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      className={styles.select}
                      defaultValue="2"
                    >
                      <option value="1">1 huésped</option>
                      <option value="2">2 huéspedes</option>
                      <option value="3">3 huéspedes</option>
                      <option value="4">4 huéspedes</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+598 99 000 000"
                    />
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label} htmlFor="notes">
                      Notas
                    </label>
                    <input
                      id="notes"
                      name="notes"
                      className={styles.input}
                      placeholder="Aniversario, dieta especial, etc."
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    Enviar consulta
                    <span>↗</span>
                  </button>
                  <p className={styles.disclaimer}>
                    Al enviar serás redirigido a WhatsApp con tu consulta lista.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
