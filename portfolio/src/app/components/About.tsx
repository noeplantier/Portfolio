"use client"

import { useEffect, useState } from 'react';
import styles from '../styles/about.module.scss';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Ennchanté ! Noé Plantier, développeur web full-stack avec une passion pour la création d\'expériences web et mobiles. Après une formation intense à l\'École O\'Clock. J\'ai acquis une solide expérience en React, Node.js, SCSS, TypeScript. Basé à Bordeaux, je suis motivé par l\'innovation et l\'élégance dans le code.';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 70); // Vitesse de frappe (1 ms entre chaque lettre)
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className={styles.about}>
      <h1>À propos de moi</h1>
      <p className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </p>
    </section>
  );
}
