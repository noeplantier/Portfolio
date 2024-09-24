import { useEffect, useState } from 'react';
import styles from '../styles/hero.module.scss';


export default function Hero() {

  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Fuull-Stack Web & Web Mobile Developer"
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index)); // Utilisation de charAt pour un accès sécurisé
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);
  return (

    <section id="hero" className={styles.hero}>
      
  <div className={styles.background}>
  
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" />
    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js Logo" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-html5-logo-icon-download-in-svg-png-gif-file-formats--html-wordmark-programming-langugae-language-pack-logos-icons-1175209.png" alt="HTML5 Logo" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png" alt="CSS3 Logo" />
    <img src="https://freesvg.org/img/1486641506.png" alt="JavaScript Logo" />
    <img src="https://icon-library.com/images/rust-icon/rust-icon-10.jpg" alt="Rust Logo" />
    <img src="https://iconape.com/wp-content/png_logo_vector/flutter-logo.png" alt="Flutter Logo" />
    <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript.png"  alt="TypeScript Logo" />
    <img src="https://seeklogo.com/images/P/php-logo-91EFDB12E1-seeklogo.com.png" alt="PHP logo" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo" />
    <img src="https://img.icons8.com/color/512/ruby-programming-language.png" alt="Ruby logo" />
    <img src="https://img.icons8.com/color/512/sass-avatar.png" alt="SASS logo" />

    

  
  </div>
      <div className={styles.content}>
      <div className="hero-background">
        <img src="/images/CV-PIC.png" alt="Noé Plantier" className="hero-image" />
      </div>
        <section className='hero-section'>
        <h1>Noé Plantier</h1>
        <h2 className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </h2>
        <a href="#projects" className={styles.button}>My Projects</a>
        <div className='code-screenshots' id='code-screenshots'>
        <img src="/images/oparty.jpeg" alt="Noé Plantier" className="fullstack-image" />
        <img src="/images/immo.jpeg" alt="Noé Plantier" className="backend-image" />
        <img src="/images/tecum.jpeg" alt="Noé Plantier" className="frontend-image" />
        </div>
        </section>
      </div>
    </section>
  );
}
