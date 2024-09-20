import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Noé Plantier</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
