import { useEffect, useState } from 'react';
import styles from '../styles/hero.module.scss';
import Image from 'next/image';

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
      <div className={styles.headerText}>
        <h1>Noé Plantier</h1>
        <h2 className={styles.typingText}>{displayedText}</h2>
      </div>

      <div className={styles.heroImageContainer}>
        <Image
          src="/images/CV-PIC.png"
          alt="Noé Plantier"
          className={styles.heroImage}
          width={600} // width ajustée
          height={600} // height ajustée
        />
      </div>

      <div className={styles.background}>
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/free-html5-logo-icon-download-in-svg-png-gif-file-formats--html-wordmark-programming-langugae-language-pack-logos-icons-1175209.png"
          alt="HTML5 Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-wordmark-programming-langugae-language-pack-logos-icons-1175238.png"
          alt="CSS3 Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://freesvg.org/img/1486641506.png"
          alt="JavaScript Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript.png"
          alt="TypeScript Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
          alt="Node.js Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
          alt="Next.js Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://seeklogo.com/images/P/php-logo-91EFDB12E1-seeklogo.com.png"
          alt="PHP Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          alt="Python Logo"
          className={styles.techLogo}
          width={80}
          height={80}
        />
        <Image
          src="https://img.icons8.com/color/512/sass-avatar.png"
          alt="SASS Logo"
          className={styles.techLogo}
          width={80}
          height={80}
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
            <Image
              src={
                flipped.fullstack
                  ? '/images/opartycode.png'
                  : '/images/oparty.jpeg'
              }
              alt="Noé Plantier Fullstack Project"
              className={`${styles['fullstack-image']} ${
                flipped.fullstack ? styles.back : styles.front
              }`}
              width={400} // width ajustée
              height={300} // height ajustée
            />
          </div>

          <div
            className={`${styles['image-container']} ${
              flipped.backend ? styles.flipped : ''
            }`}
            onMouseEnter={() => handleMouseEnter('backend')}
            onMouseLeave={() => handleMouseLeave('backend')}
          >
            <Image
              src={
                flipped.backend ? '/images/immocode.png' : '/images/immo.jpeg'
              }
              alt="Noé Plantier Backend Project"
              className={`${styles['backend-image']} ${
                flipped.backend ? styles.back : styles.front
              }`}
              width={400} // width ajustée
              height={300} // height ajustée
            />
          </div>

          <div
            className={`${styles['image-container']} ${
              flipped.frontend ? styles.flipped : ''
            }`}
            onMouseEnter={() => handleMouseEnter('frontend')}
            onMouseLeave={() => handleMouseLeave('frontend')}
          >
            <Image
              src={
                flipped.frontend ? '/images/tecumcode.png' : '/images/tecum.jpeg'
              }
              alt="Noé Plantier Frontend Project"
              className={`${styles['frontend-image']} ${
                flipped.frontend ? styles.back : styles.front
              }`}
              width={400} // width ajustée
              height={300} // height ajustée
            />
          </div>
        </div>
      </section>
    </section>
  );
}
