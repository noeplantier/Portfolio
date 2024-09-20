import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>À propos de moi</h2>
      <p>
        Je suis Noé Plantier, un développeur Fullstack Junior passionné par la création
        de solutions web innovantes. Avec une expérience en React, Node.js, et SCSS,
        j'ai travaillé sur divers projets allant de sites vitrine à des applications complexes.
      </p>
    </section>
  );
}
