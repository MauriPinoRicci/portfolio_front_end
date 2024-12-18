'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiFillCode } from 'react-icons/ai';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e:any) => {
    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach((link) => {
      link.classList.remove(styles.active);
    });
    e.target.classList.add(styles.active);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar_logo}>
        <AiFillCode size="60px" aria-label="Logo de la página" />
      </div>

      <div className={styles.navbar_links}>
        <a href="#Header" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Skills">Home</a>
        <a href="#AcercaDeMi" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Acerca de mí">Acerca de mí</a>
        <a href="#Educacion" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Educación">Educación</a>
        <a href="#Experiencia" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Experiencia">Experiencia</a>
        <a href="#Proyecto" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Proyectos">Proyectos</a>
        <a href="#Skills" className={styles.navlink} onClick={handleNavLinkClick} aria-label="Sección Skills">Skills</a>
      </div>

      <div className={styles.navbar_right}>
        <a
          className={styles.iconsInsta}
          href="https://www.instagram.com/mauripinoricci/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <AiOutlineInstagram size="36px" />
        </a>
        <a
          className={styles.iconsLinkedin}
          href="https://www.linkedin.com/in/mauricio-joaqu%C3%ADn-pino-ricci-055858140/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <AiOutlineLinkedin size="36px" />
        </a>
        <a
          className={styles.iconsGitHub}
          href="https://github.com/MauriPinoRicci"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <AiOutlineGithub size="36px" />
        </a>
      </div>
    </nav>
  );
};
