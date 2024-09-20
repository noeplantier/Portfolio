import styles from '../styles/projects.module.scss';

export default function Projects() {
  const projects = [
    { title: 'O\'Party', description: 'Un site événementiel', image: '/images/oparty.png' },
    { title: 'TECUM', description: 'Site de bijoux', image: '/images/tecum.png' }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Mes Projets</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
