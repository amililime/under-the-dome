import Reveal from "./Reveal";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section id="ubicacion" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.content}>
          <p className={styles.eyebrow}>Ubicación</p>
          <h2 className={styles.title}>
            A orillas del <em>Río Negro,</em> en el corazón de Uruguay.
          </h2>
          <p className={styles.text}>
            San Gregorio de Polanco es una de las playas fluviales más bellas
            del país. Los domos están a metros de la playa El Barranco, a 5
            minutos del centro y rodeados de naturaleza ribereña.
          </p>

          <div className={styles.address}>
            <strong>18 de Julio esq. Buen Retiro</strong>
            <span>San Gregorio de Polanco, Tacuarembó · Uruguay</span>
          </div>

          <div className={styles.actions}>
            <a
              href="https://maps.google.com/?q=San+Gregorio+de+Polanco,+Tacuarembó"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Ver en Google Maps
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://maps.google.com/dir//San+Gregorio+de+Polanco,+Tacuarembó"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Cómo llegar
            </a>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className={styles.mapWrap}>
            <iframe
              title="Ubicación de Barranco Domos en San Gregorio de Polanco"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-56.0%2C-32.65%2C-55.8%2C-32.55&layer=mapnik&marker=-32.6147%2C-55.8889"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
