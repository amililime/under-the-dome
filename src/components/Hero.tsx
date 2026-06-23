import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>San Gregorio de Polanco · Uruguay</p>
          <h1 className={styles.title}>
            Un refugio <em>silencioso</em>
            <br />
            entre el río y el cielo.
          </h1>
          <p className={styles.lede}>
            Domos de diseño en plena naturaleza, sobre la playa El Barranco. Un
            refugio íntimo donde el cielo, el río y el silencio se vuelven
            arquitectura.
          </p>
          <div className={styles.actions}>
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
          <div className={styles.stat}>
            <span className={styles.statValue}>
              5<span>★</span>
            </span>
            <span className={styles.statLabel}>Calificación de huéspedes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>150+</span>
            <span className={styles.statLabel}>Estadías memorables</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>15</span>
            <span className={styles.statLabel}>Domos exclusivos</span>
          </div>
        </div>
      </div>

      <a href="#experiencias" className={styles.scrollHint} aria-label="Scroll">
        Scroll
      </a>
    </section>
  );
}
