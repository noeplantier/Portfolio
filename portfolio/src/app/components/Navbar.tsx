import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Charly Dev</Link>
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
