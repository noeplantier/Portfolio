import { useEffect, useState } from 'react';
import styles from '../styles/skills.module.scss';

export default function Skills() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Soome of the technologies and tools I am proficient in :"

  const skills = [
    { name: 'HTML5', level: 'Avancé' },
    { name: 'JavaScript', level: 'Avancé' },
    { name: 'React', level: 'Avancé' },
    { name: 'Node.js', level: 'Intermédiaire' },
    { name: 'TypeScript', level: 'Intermédiaire' },
    { name: 'SCSS', level: 'Avancé' },
    { name: 'Next.js', level: 'Intermédiaire' },
    { name: 'PHP', level: 'Débutant' },
  ];


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
    <section id="skills" className={styles.skills}>
      <h1>My Skills</h1>
      <h2 className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </h2>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
