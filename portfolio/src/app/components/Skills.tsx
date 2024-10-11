import { useEffect, useState } from 'react';
import styles from '../styles/skills.module.scss';
import Image from 'next/image';

export default function Skills() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Some of the technologies and tools I am proficient in:";

  const skills = [
    { name: 'HTML5', level: 'Avancé', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'JavaScript', level: 'Avancé', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', level: 'Avancé', url: 'https://reactjs.org/docs/getting-started.html' },
    { name: 'Node.js', level: 'Intermédiaire', url: 'https://nodejs.org/en/docs/' },
    { name: 'TypeScript', level: 'Intermédiaire', url: 'https://www.typescriptlang.org/docs/' },
    { name: 'SCSS', level: 'Avancé', url: 'https://sass-lang.com/documentation' },
    { name: 'Next.js', level: 'Intermédiaire', url: 'https://nextjs.org/docs' },
    { name: 'PHP', level: 'Débutant', url: 'https://www.php.net/docs.php' },
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

  const handleSkillClick = (url: string) => {
    window.open(url, '_blank'); 
  };

  return (
    <section id="skills" className={styles.skills}>
        <Image src="/images/dev3.png" alt="desktop pic" className="macuser-image"  width={1200}
                height={1500} />
      <h1>My Skills</h1>
      <h2 className={styles.typingText} style={{ color: '#ffffff' }}>
        {displayedText}
      </h2>

         
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={styles.skillCard} 
            onClick={() => handleSkillClick(skill.url)} 
            style={{ cursor: 'pointer' }} 
          >
            
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
         
              
              </div>   
        ))}
      </div>
   
     
      </section>
  );
}
