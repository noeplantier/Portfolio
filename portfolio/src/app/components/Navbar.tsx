import styles from '../styles/navbar.module.scss';

export default function NavBar() {
  return (
<nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>
  );
}
