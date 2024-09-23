"use client"

import { useEffect, useState } from 'react';
import styles from '../styles/about.module.scss';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'I\'m a Fullstack Web and Mobile Developer with a background in UI/UX design and a passion for building interactive, user-friendly websites and applications. I have experience with technologies like React, Next.js, and Node.js, and I always strive to stay up-to-date with the latest industry trends.'

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 70); 
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className={styles.about}>
            
      <h1>What about me ?</h1>
      <h2 className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </h2>
      <img src="/images/codingplanet.png" alt="Noé Plantier" className="logo-image" />
    </section>
  );
}
