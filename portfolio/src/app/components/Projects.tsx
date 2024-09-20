import Image from 'next/image';
import styles from '../styles/projects.module.scss';

export default function Projects() {
  const projects = [
    { title: 'O\'Party', description: 'Website événementiel permettant aux utilisateurs de découvrir de nouveaux horizons', image: '/images/oparty.jpeg' },
    { title: 'TECUM', description: 'Website officiel de la bijouterie TECUM', image: '/images/tecum.jpeg' },
    { title: 'L\'immobilière de Julia', description: 'Website de l\'agence immobilière bretonne "L\'immobilière de Julia"', image: '/images/immo.jpeg' }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Mes Projets</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image 
              src={project.image} 
              alt={project.title} 
              width={300} 
              height={200} 
              className={styles.projectImage} 
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
