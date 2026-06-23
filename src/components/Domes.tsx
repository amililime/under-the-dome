import Reveal from "./Reveal";
import styles from "./Domes.module.css";

const FEATURES = [
  { n: "i", title: "Cama king-size", text: "Ropa de cama de algodón premium." },
  { n: "ii", title: "Climatización integral", text: "Confort en todas las estaciones." },
  { n: "iii", title: "Baño privado", text: "Amenities orgánicos, ducha lluvia." },
  { n: "iv", title: "Cúpula transparente", text: "Vista directa al cielo nocturno." },
  { n: "v", title: "Deck exterior", text: "Hidromasaje, hamacas y fogón privado." },
  { n: "vi", title: "Desayuno gourmet", text: "Servido a tu domo cada mañana." },
];

export default function Domes() {
  return (
    <section id="domos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Los domos</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Arquitectura que se <em>integra</em> al entorno.
            </h2>
          </Reveal>
        </div>

        <div className={styles.body}>
          <Reveal>
            <div className={styles.media}>
              <div className={styles.mediaImg} />
              <div className={styles.caption}>
                <span>Domo Polanco · Vista al río</span>
                <span>2024</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2} className={styles.content}>
            <p className={styles.lede}>
              Estructuras geodésicas <em>transparentes,</em> materiales nobles
              y detalles pensados al milímetro.
            </p>
            <p className={styles.text}>
              Cada domo fue concebido para desaparecer en el paisaje y, al mismo
              tiempo, ofrecer la mejor vista del lugar. La frontera entre el
              adentro y el afuera se vuelve apenas perceptible.
            </p>
            <ul className={styles.features}>
              {FEATURES.map((f) => (
                <li key={f.title} className={styles.feature}>
                  <div className={styles.featureTitle} data-num={f.n}>
                    {f.title}
                  </div>
                  <div className={styles.featureText}>{f.text}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
