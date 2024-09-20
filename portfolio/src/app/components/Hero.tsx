import styles from '../styles/hero.module.scss';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1>Noé Plantier</h1>
        <p>Développeur Fullstack Junior</p>
        <a href="#projects" className={styles.cta}>Voir mes projets</a>
      </div>
    </section>
  );
}
