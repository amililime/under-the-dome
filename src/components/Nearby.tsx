import Reveal from "./Reveal";
import styles from "./Nearby.module.css";

type Place = {
  num: string;
  name: string;
  kind: string;
  distance: string;
  text: string;
  href?: string;
};

const PLACES: Place[] = [
  {
    num: "01",
    name: "Playa El Barranco",
    kind: "Naturaleza",
    distance: "A pasos del domo",
    text: "Arena fina y aguas mansas del Río Negro. La playa frente al refugio, ideal para tardes largas y atardeceres sin reloj.",
  },
  {
    num: "02",
    name: "Museo a Cielo Abierto",
    kind: "Arte y cultura",
    distance: "5 min caminando",
    text: "El primer museo de artes visuales a cielo abierto de Latinoamérica. Más de 150 murales repartidos por las calles del pueblo.",
    href: "https://maais.tacuaremboturismo.gub.uy/murales.php",
  },
  {
    num: "03",
    name: "Polanco Caviar",
    kind: "Gastronomía",
    distance: "10 min en auto",
    text: "Visita guiada al criadero de esturiones sobre el Río Negro y degustación del caviar premiado en el ITQI de Bruselas.",
    href: "https://polancocaviar.com/polanco/",
  },
  {
    num: "04",
    name: "Río Negro",
    kind: "Aventura",
    distance: "En la puerta",
    text: "Kayak, canoa, pesca deportiva y travesías al atardecer. Alquiler y guías locales en temporada alta.",
  },
  {
    num: "05",
    name: "Cabalgatas y bosque",
    kind: "Naturaleza",
    distance: "15 min",
    text: "Recorridos guiados por la costa y los bosques de eucaliptos que rodean la península. Avistaje de aves al amanecer.",
  },
];

export default function Nearby() {
  return (
    <section id="cerca" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Cerca de aquí</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Para cuando el silencio <em>pida compañía.</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className={styles.lede}>
              San Gregorio de Polanco es pequeño y generoso. Esto es lo que
              recomendamos a nuestros huéspedes cuando deciden salir del domo.
            </p>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {PLACES.map((p, i) => (
            <Reveal
              as="li"
              key={p.num}
              delay={(i % 3) as 0 | 1 | 2}
              className={styles.cardWrap}
            >
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.num}>{p.num}</span>
                  <span className={styles.kind}>{p.kind}</span>
                </div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.text}>{p.text}</p>
                <div className={styles.cardFoot}>
                  <span className={styles.distance}>{p.distance}</span>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.more}
                    >
                      Más info
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
