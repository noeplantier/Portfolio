"use client"

import { useEffect, useState } from 'react';
import styles from '../styles/about.module.scss';
import Image from 'next/image';


export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I''m a Full Stack Web and Mobile Developer with a crazy background in UI/UX design."
  "I also got a passion for building interactive & user-friendly securised websites and applications ."

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
    <section id="about" className={styles.about}>
      <h1>What about me ?</h1>
      <h2 className={styles.typingText} style={{ color: '#fff' }}>
        {displayedText}
      </h2>
     <Image src="/images/dev4.png" alt="desktop pic" className="development-image"      width={1200}
          height={700} />
       
    </section>
  );
}
