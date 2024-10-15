"use client"

import { useEffect, useState } from 'react';
import styles from '../styles/about.module.scss';
import Image from 'next/image';


export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const secondText = 'I love so much coding after midnight..'



  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < secondText.length) {
        setDisplayedText((prev) => prev + secondText.charAt(index)); // Utilisation de charAt pour un accès sécurisé
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className={styles.about}>
  
                <h1>Where can you physically find me </h1>
      <h2 className='secondText' style={{ color: '#fff' }}>Currently based on Tours and Bordeaux, I'm also regularly on Paris !</h2>
      <Image src="/images/dev4.png" alt="desktop pic" className="development-image"      width={1200}
          height={700} />
          
    </section>
  );
}






     

