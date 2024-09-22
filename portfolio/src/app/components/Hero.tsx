import styles from '../styles/hero.module.scss';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      
  <div className={styles.background}>
  
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" />
    <img src="https://iconape.com/wp-content/png_logo_vector/nodejs.png" alt="Node.js Logo" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-html5-logo-icon-download-in-svg-png-gif-file-formats--html-wordmark-programming-langugae-language-pack-logos-icons-1175209.png" alt="HTML5 Logo" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png" alt="CSS3 Logo" />
    <img src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript Logo" />
    <img src="https://www.datocms-assets.com/98835/1684410508-image-7.png" alt="Next.js" />
    <img src="https://iconape.com/wp-content/png_logo_vector/flutter-logo.png" alt="Flutter Logo" />
    <img src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"  alt="TypeScript Logo" />
    <img src="https://seeklogo.com/images/P/php-logo-91EFDB12E1-seeklogo.com.png" alt="PHP logo" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" />
    <img src="https://img.icons8.com/color/512/ruby-programming-language.png" alt="Ruby logo" />

  
  </div>
      <div className={styles.content}>
        <h1>Noé Plantier</h1>
        <p>Développeur Web & Web Mobile Full-Stack</p>
        <a href="#projects" className={styles.button}>Voir mes projets</a>
      </div>
    </section>
  );
}
