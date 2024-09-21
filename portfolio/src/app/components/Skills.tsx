import styles from '../styles/skills.module.scss';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Avancé' },
    { name: 'React', level: 'Avancé' },
    { name: 'Node.js', level: 'Intermédiaire' },
    { name: 'TypeScript', level: 'Intermédiaire' },
    { name: 'SCSS', level: 'Avancé' },
    { name: 'Next.js', level: 'Intermédiaire' },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h1>Mes Compétences</h1>
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
