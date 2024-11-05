// /components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1>Portfolio & Resume</h1>
      </div>
      <div className={styles.overlay}>
        <Link
          href="https://portfolio-urooba-siddiqui.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.linkText}
        >
          View My Portfolio
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="#experience">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
