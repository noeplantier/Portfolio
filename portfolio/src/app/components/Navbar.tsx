import styles from '../styles/navbar.module.scss';

export default function NavBar() {
  return (
<nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  );
}
