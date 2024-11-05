import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Urooba Siddiqui. All rights reserved.
      </p>
      <div className={styles.socialLinks}>
      <Link href="https://instagram.com/UroobaVlogger" target="_blank" rel="noopener noreferrer">Instagram</Link>
      <Link href="https://linkedin.com/in/uroobasiddiqui" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        <Link href="https://github.com/uroobasiddiqui01" target="_blank" rel="noopener noreferrer">GitHub</Link>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
