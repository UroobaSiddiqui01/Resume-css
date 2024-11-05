// /components/Portfolio.tsx
import React from 'react';
import styles from '../styles/Portfolio.module.css';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  return (
    <section className={styles.portfolio}>
      {/* Introduction Section */}
      <div className={styles.intro}>
        <h2>Hello!</h2>
        <p className={styles.introText}>
   I&rsquo;m Urooba Siddiqui, a passionate Web Developer with over 2 years of experience in creating engaging and
   functional websites. With a keen eye for design and a love for coding,
   I specialize in turning ideas into user-friendly digital experiences.
    I thrive on turning ideas into user-focused digital experiences.
     I specialize in crafting responsive, visually appealing websites that
      are optimized for performance and built with a deep understanding of
       user needs. My goal is to bring ideas to life through code, delivering solutions that are 
       both innovative and reliable.
         </p>

        {/* Profile Image */}
        <div className={styles.profileImage}>
          <Image
           src="/images/profile.jpg" 
           alt="Urooba Siddiqui" 
           width={400}
           height={400}
           />
        </div>
      </div>

      {/* Contact Information */}
      <div className={styles.contactInfo}>
        <h3>Let&apos;s talk!</h3>      
        <div className={styles.contactLinks}>
          <div className={styles.contactItem}>
            <span>Email:</span> urooba.sidd@gmail.com
          </div>
          <div className={styles.contactItem}>
            <span>Phone:</span> +9234 5617 61220
          </div>
          
          <div className={styles.contactItem}>
            <span>LinkedIn:</span> linkedin.com/in/uroobasiddiqui
          </div>
        </div>
      </div>

    {/* Expertise Section */}
<div className={styles.expertise}>
  <h3>Expertise</h3>
  <ul>
    <li>Front-End Development</li>
    <li>Responsive Web Design</li>
    <li>UI/UX Design</li>
    <li>JavaScript/TypeScript Programming</li>
    <li>Single Page Applications (SPA)</li>
    <li>Version Control (Git)</li>
  </ul>
</div>

{/* Software Skills */}
<div className={styles.softwareSkills}>
  <h3>Software Skills</h3>
  <div className={styles.skillIcons}>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Next.js</span>
    <span>TypeScript</span>
    <span>Node.js</span>
    <span>Git</span>
    <span>Figma</span>
    <span>Photoshop</span>
  </div>
</div>

      {/* Education Section */}
      <div className={styles.education}>
        <h3>Education</h3>
        <p>Bachelor of Commerse, Graphic Design & Web Development</p>
        <p>Karachi University, GIAIC </p>
        <p>2020 - 2024</p>
      </div>
      
    </section>
  );
};

export default Portfolio;


