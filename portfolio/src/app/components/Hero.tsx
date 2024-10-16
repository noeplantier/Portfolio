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

  const fullText = 'Webb & Mobile Developer';

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


         <Image
              src='/images/Bannière marron.png'
              alt="brown_ban"
              className="brown_ban"
              width={1500}
              height={400}
            />
              <h1>What about me ?</h1>
      <h2 className='firstText' style={{ color: '#fff' }}>I'm a Full Stack Web and Mobile Developer with a crazy background in UI/UX design.   </h2> 


          <div className={styles.heroImageContainer}>
        <Image
          src="/images/CV-PIC-2.png"
          alt="Noé Plantier"
          className={styles.heroImage}
          width={400} 
          height={400} 
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
          width={100}
          height={100}
        />
        <Image
          src="https://freesvg.org/img/1486641506.png"
          alt="JavaScript Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript.png"
          alt="TypeScript Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
          alt="Node.js Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
          alt="Next.js Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
          alt="PHP Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256"
          alt="Python Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
        <Image
          src="https://img.icons8.com/color/512/sass-avatar.png"
          alt="SASS Logo"
          className={styles.techLogo}
          width={150}
          height={150}
        />
      </div>

      <section className={styles.codeScreenshotsSection}>
        <div className={styles.headerText}>
          <h1>A few screenshots of my work</h1>
          <h2 className={styles.typingText}>
            Have a look at several screens of my recent projects ! 
            <br /> 
            Below, you can see the transition between my VSCode screen and the navigator.
          </h2>
        </div>
        <div className={styles.codeScreenshots}>
          <div
            className={`${styles.imageContainer} ${flipped.fullstack ? styles.flipped : ''}`}
            onMouseEnter={() => handleMouseEnter('fullstack')}
            onMouseLeave={() => handleMouseLeave('fullstack')}
          >
            <Image
              src={flipped.fullstack ? '/images/opartycode.png' : '/images/oparty.jpeg'}
              alt="Fullstack Project"
              className={`${styles.fullstackImage} ${flipped.fullstack ? styles.back : styles.front}`}
              width={1200}
              height={700}
            />
          </div>

          <div
            className={`${styles.imageContainer} ${flipped.backend ? styles.flipped : ''}`}
            onMouseEnter={() => handleMouseEnter('backend')}
            onMouseLeave={() => handleMouseLeave('backend')}
          >
            <Image
              src={flipped.backend ? '/images/immocode.png' : '/images/immo.jpeg'}
              alt="Backend Project"
              className={`${styles.backendImage} ${flipped.backend ? styles.back : styles.front}`}
              width={1200}
              height={700}
            />
          </div>

          <div
            className={`${styles.imageContainer} ${flipped.frontend ? styles.flipped : ''}`}
            onMouseEnter={() => handleMouseEnter('frontend')}
            onMouseLeave={() => handleMouseLeave('frontend')}
          >
            <Image
              src={flipped.frontend ? '/images/tecumcode.png' : '/images/tecum.jpeg'}
              alt="Frontend Project"
              className={`${styles.frontendImage} ${flipped.frontend ? styles.back : styles.front}`}
              width={1200}
              height={700}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
