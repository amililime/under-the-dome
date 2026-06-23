import Reveal from "./Reveal";
import styles from "./Experiences.module.css";

const EXPERIENCES = [
  {
    n: "01",
    title: "Aventura",
    text: "Caminatas al amanecer, kayak en el Río Negro y avistaje de aves en el monte ribereño. La naturaleza, intacta, es la primera anfitriona.",
  },
  {
    n: "02",
    title: "Relajación",
    text: "Yoga al sol, hidromasaje exterior, lectura junto al fogón. Un ritmo que recuerda lo que se siente al respirar despacio.",
  },
  {
    n: "03",
    title: "Gastronomía",
    text: "Cocina de autor con producto local. Asados de campo, vinos uruguayos y desayunos servidos al amanecer frente al barranco.",
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>La experiencia</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Tres formas de <em>habitar</em> el paisaje.
            </h2>
            <p className={styles.intro}>
              Cada estadía se diseña en torno al ritmo del huésped. Moverse,
              descansar o saborear. Todo cabe en un mismo horizonte.
            </p>
          </Reveal>
        </div>

        <div className={styles.list}>
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className={styles.item}>
                <span className={styles.itemNum}>{exp.n}</span>
                <h3 className={styles.itemTitle}>{exp.title}</h3>
                <p className={styles.itemText}>{exp.text}</p>
                <span className={styles.itemArrow}>↗</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
