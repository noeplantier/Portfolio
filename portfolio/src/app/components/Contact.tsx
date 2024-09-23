import { useEffect, useState } from 'react';
import styles from '../styles/contact.module.scss';

export default function Contact() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'If you\'d like to discuss a project or have any questions, feel free to reach out to me through the following methods :'

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 70); 
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <h1>Contact Me</h1>
      <h2 className={styles.typingText} style={{ color: '#fffff'}}>
        {displayedText}
      </h2>
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
function setDisplayedText(arg0: (prev: any) => any) {
  throw new Error('Function not implemented.');
}

