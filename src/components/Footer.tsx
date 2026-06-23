import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="contacto" className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <span className={styles.mark}>B</span>
                <span>Barranco Domos</span>
              </div>
              <p className={styles.tagline}>
                Un refugio íntimo frente a la playa El Barranco, en San Gregorio
                de Polanco. Naturaleza, lujo y silencio.
              </p>
              <div className={styles.social}>
                <a
                  href="https://instagram.com/barrancodomos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/598099447265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 6.3A7.85 7.85 0 0 0 12.05 4 7.94 7.94 0 0 0 5.16 16l-1.13 4.12 4.22-1.1a7.94 7.94 0 0 0 3.79.96 7.94 7.94 0 0 0 5.56-13.68Zm-5.55 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.59 6.59 0 1 1 5.59 3.1Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.62.78-.12.13-.23.15-.43.05a5.43 5.43 0 0 1-1.6-.99 6 6 0 0 1-1.11-1.38c-.12-.2 0-.31.09-.41l.27-.31c.09-.1.12-.18.18-.3a.34.34 0 0 0 0-.32c-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.34.05-.52.25s-.69.68-.69 1.66.71 1.92.81 2.05c.1.13 1.39 2.13 3.37 2.99 2 .85 2 .57 2.36.54.36-.03 1.18-.49 1.34-.95.17-.46.17-.86.12-.95-.06-.08-.18-.13-.39-.23Z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@barrancodomos.com.uy"
                  className={styles.socialItem}
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className={styles.colTitle}>Explorar</h4>
              <ul className={styles.list}>
                <li><a href="#experiencias">Experiencias</a></li>
                <li><a href="#domos">Domos</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#ubicacion">Ubicación</a></li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Contacto</h4>
              <ul className={styles.list}>
                <li><a href="mailto:info@barrancodomos.com.uy">info@barrancodomos.com.uy</a></li>
                <li><a href="tel:+598098999137">+598 098 999 137</a></li>
                <li><a href="tel:+598099447265">+598 099 447 265</a></li>
                <li>Atención: 9hs a 21hs</li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Reservas</h4>
              <ul className={styles.list}>
                <li><a href="#reservar">Solicitar disponibilidad</a></li>
                <li>
                  <a
                    href="https://wa.me/598099447265"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp directo
                  </a>
                </li>
                <li>Política de cancelación</li>
                <li>Preguntas frecuentes</li>
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <span>© {year} Barranco Domos. Todos los derechos reservados.</span>
            <div className={styles.legal}>
              <a href="#">Términos</a>
              <a href="#">Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/598099447265"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.3A7.85 7.85 0 0 0 12.05 4 7.94 7.94 0 0 0 5.16 16l-1.13 4.12 4.22-1.1a7.94 7.94 0 0 0 3.79.96 7.94 7.94 0 0 0 5.56-13.68Zm-5.55 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.59 6.59 0 1 1 5.59 3.1Zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.62.78-.12.13-.23.15-.43.05a5.43 5.43 0 0 1-1.6-.99 6 6 0 0 1-1.11-1.38c-.12-.2 0-.31.09-.41l.27-.31c.09-.1.12-.18.18-.3a.34.34 0 0 0 0-.32c-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.39c-.13 0-.34.05-.52.25s-.69.68-.69 1.66.71 1.92.81 2.05c.1.13 1.39 2.13 3.37 2.99 2 .85 2 .57 2.36.54.36-.03 1.18-.49 1.34-.95.17-.46.17-.86.12-.95-.06-.08-.18-.13-.39-.23Z" />
        </svg>
      </a>
    </>
  );
}
