import Image from 'next/image';
import styles from '../styles/projects.module.scss';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Heere are some of the projects I have worked on. Each one represents a unique challenge and learning experience in the world of web development."

  const projects = [
    { title: 'O\'Party', description: 'Website événementiel permettant aux utilisateurs de découvrir de nouveaux horizons', image: '/images/oparty.jpeg', technologies: ['React', 'Next.js', 'SCSS', 'Node.js'] },
    { title: 'TECUM', description: 'Website officiel de la bijouterie TECUM', image: '/images/tecum.jpeg', technologies: ['TS', 'SCSS', 'React', 'Node.js'] },
    { title: 'L\'immobilière de Julia', description: 'Website de l\'agence immobilière bretonne "L\'immobilière de Julia"', image: '/images/immo.jpeg', technologies: ['React', 'SCSS', 'MUI', 'Node.js'] }
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
    <section id="projects" className={styles.projects}>
      <h1>My Own Projects</h1>
      <h2 className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
        
            <h3>{project.title}</h3>
        
            <div className={styles.technologies}>
         
           
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className={styles.techTag}>
                  {tech}
               
                </div>
              
              ))}    <h4>{project.description}</h4>
            </div>
   <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={300} 
                    className={styles.projectImage} 
                  />
          </div>  
        ))}
      
      </div>
     
    </section>
  );
}