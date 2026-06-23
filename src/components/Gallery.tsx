import Reveal from "./Reveal";
import styles from "./Gallery.module.css";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
    title: "Atardecer en el barranco",
    place: "El Barranco",
    layout: ["span6", "tall"],
  },
  {
    src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    title: "Cielo nocturno",
    place: "Polanco",
    layout: ["span3", "tall"],
  },
  {
    src: "https://images.unsplash.com/photo-1502780402662-acc01917cf6f?auto=format&fit=crop&w=1200&q=80",
    title: "Interior del domo",
    place: "Suite I",
    layout: ["span3", "sq"],
  },
  {
    src: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    title: "Hidromasaje exterior",
    place: "Deck privado",
    layout: ["span3", "sq"],
  },
  {
    src: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1400&q=80",
    title: "Playa El Barranco",
    place: "Río Negro",
    layout: ["span5", "wide"],
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    title: "Desayuno con vista",
    place: "Comedor",
    layout: ["span4", "wide"],
  },
  {
    src: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1400&q=80",
    title: "Monte ribereño",
    place: "Reserva",
    layout: ["span8", "wide"],
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal>
            <p className={styles.eyebrow}>Archivo</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>
              Postales del <em>refugio.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {PHOTOS.map((p, i) => (
            <Reveal
              key={p.src}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className={`${styles.item} ${p.layout
                .map((l) => styles[l])
                .join(" ")}`}
            >
              <div
                className={styles.itemBg}
                style={{ backgroundImage: `url(${p.src})` }}
              />
              <div className={styles.itemMeta}>
                <strong>{p.title}</strong>
                <span>{p.place}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
