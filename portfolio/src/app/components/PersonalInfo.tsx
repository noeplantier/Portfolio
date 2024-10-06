import styles from '../styles/personalinfo.module.scss';
import Image from 'next/image';

export default function PersonalInfo() {
  return (
    <section className={styles.personalInfo}>
      <h1>My Socials Networks</h1>

      <div className={styles.infoContainer}>
  
        <div className={styles.socialIcons}>
 
          <a href="https://github.com/yourprofile" target="_blank">
            <Image src="/images/github.png" alt="GitHub" width={100} height={100} />
          </a>
          <a href="https://linkedin.com/in/noeplantier" target="_blank">
            <Image src="/images/linkedin.png" alt="LinkedIn" width={100} height={100} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank">
            <Image src="/images/twitter.png" alt="Twitter" width={100} height={100} />
          </a>
          <a href="https://stackoverflow.com/users/yourprofile" target="_blank">
            <Image src="/images/stackoverflow.png" alt="Stack Overflow" width={100} height={100} />
          </a>
        </div>
      </div>
    </section>
  );
}
