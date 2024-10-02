import { useEffect, useState } from 'react';
import styles from '../styles/contact.module.scss';

export default function Contact() {
  const [displayedText, setDisplayedText] = useState<string>(''); // Typage explicite de l'état
  const fullText = "If you'd like to discuss a project or have any questions, feel free to reach out to me through the following methods:";

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

    // Nettoyage de l'intervalle à la fin du cycle de vie du composant
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <h1>Contact Me</h1>
      <h2 className={styles.typingText} style={{ color: '#fff' }}> {/* Correction de la couleur */}
        {displayedText}
      </h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="surname">Prénom</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Téléphone</label>
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
