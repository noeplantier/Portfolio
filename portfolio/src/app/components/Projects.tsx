import Image from 'next/image';
import styles from '../styles/projects.module.scss';

export default function Projects() {
  const projects = [
    { title: 'O\'Party', description: 'Website événementiel permettant aux utilisateurs de découvrir de nouveaux horizons', image: '/images/oparty.jpeg' ,technologies: ['React', 'Next.js', 'SCSS', 'Node.js'] },
    { title: 'TECUM', description: 'Website officiel de la bijouterie TECUM', image: '/images/tecum.jpeg' ,technologies: ['TypeScript', 'SCSS', 'React', 'Node.js']},
    { title: 'L\'immobilière de Julia', description: 'Website de l\'agence immobilière bretonne "L\'immobilière de Julia"', image: '/images/immo.jpeg' ,technologies: ['React', 'SCSS', 'MUI', 'Node.js'] }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h1>Mes Projets</h1>
      <h2>Quelques projets professionels, créés pour des entreprises mais aussi créés par passion.</h2>
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
            <div className={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className={styles.techTag}>
                  {tech}
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
