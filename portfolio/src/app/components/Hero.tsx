import { useEffect, useState } from 'react';
import styles from '../styles/hero.module.scss';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [flipped, setFlipped] = useState({
    fullstack: false,
    backend: false,
    frontend: false,
  });

  const fullText = "Full-Stack Web & Web Mobile Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

  const handleMouseEnter = (imageType: string) => {
    setFlipped((prev) => ({
      ...prev,
      [imageType]: true,
    }));
  };

  const handleMouseLeave = (imageType: string) => {
    setFlipped((prev) => ({
      ...prev,
      [imageType]: false,
    }));
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Titres H1 et H2 placés au-dessus de l'image */}
      <div className={styles.headerText}>
        <h1>Noé Plantier</h1>
        <h2 className={styles.typingText}>{displayedText}</h2>
      </div>

      <div className={styles.background}>
        {/* Remettre les logos des technologies */}
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React Logo"
          className={styles.techLogo}
        />
        <img
          src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
          alt="Node.js Logo"
          className={styles.techLogo}
        />
        {/* Ajouter d'autres logos si nécessaire */}
      </div>

      <div className={styles.heroImageContainer}>
        <img
          src="/images/CV-PIC.png"
          alt="Noé Plantier"
          className={styles.heroImage}
        />
      </div>

      <section className={styles.codeScreenshotsSection}>
        <div className={styles['code-screenshots']}>
          <div
            className={`${styles['image-container']} ${
              flipped.fullstack ? styles.flipped : ''
            }`}
            onMouseEnter={() => handleMouseEnter('fullstack')}
            onMouseLeave={() => handleMouseLeave('fullstack')}
          >
            <img
              src={
                flipped.fullstack
                  ? '/images/opartycode.png'
                  : '/images/oparty.jpeg'
              }
              alt="Noé Plantier Fullstack Project"
              className={`${styles['fullstack-image']} ${
                flipped.fullstack ? styles.back : styles.front
              }`}
            />
          </div>

          <div
            className={`${styles['image-container']} ${
              flipped.backend ? styles.flipped : ''
            }`}
            onMouseEnter={() => handleMouseEnter('backend')}
            onMouseLeave={() => handleMouseLeave('backend')}
          >
            <img
              src={
                flipped.backend ? '/images/immocode.png' : '/images/immo.jpeg'
              }
              alt="Noé Plantier Backend Project"
              className={`${styles['backend-image']} ${
                flipped.backend ? styles.back : styles.front
              }`}
            />
          </div>

          <div
            className={`${styles['image-container']} ${
              flipped.frontend ? styles.flipped : ''
            }`}
            onMouseEnter={() => handleMouseEnter('frontend')}
            onMouseLeave={() => handleMouseLeave('frontend')}
          >
            <img
              src={
                flipped.frontend ? '/images/tecumcode.png' : '/images/tecum.jpeg'
              }
              alt="Noé Plantier Frontend Project"
              className={`${styles['frontend-image']} ${
                flipped.frontend ? styles.back : styles.front
              }`}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
