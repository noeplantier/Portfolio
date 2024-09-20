import Link from 'next/link';
import "../styles/_navbar.scss";


function Navbar () {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Noé Développeur Web & Mobile</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="#about">À propos</Link></li>
        <li><Link href="#projects">Projets</Link></li>
        <li><Link href="#skills">Compétences</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
