import styles from '../styles/personalinfo.module.scss';
import Image from 'next/image';

export default function PersonalInfo() {
  return (
    <section className={styles.personalInfo}>
      <h1>My Socials Networks</h1>

      <div className={styles.infoContainer}>
  
        <div className={styles.socialIcons}>
 
          <a href="https://github.com/yourprofile" target="_blank">
            <Image src="/image/github.png" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank">
            <Image src="/image/linkedin.png" alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank">
            <Image src="/image/twitter.png" alt="Twitter" width={40} height={40} />
          </a>
          <a href="https://stackoverflow.com/users/yourprofile" target="_blank">
            <Image src="/image/stackoverflow.png" alt="Stack Overflow" width={40} height={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
