import styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contactez-moi</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
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
