import styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h1>Contactez-moi</h1>
      <h2>Prenez contact avec moi pour tout projet professionel ou personnel qui nécessite un site web ou même l'aide d'un développeur :</h2>

      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Prénom</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Téléphone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </section>
  );
}
