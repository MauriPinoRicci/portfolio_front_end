'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiFillCode, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <div className={styles.navbar_logo}>
        <AiFillCode size="60px" aria-label="Logo de la página" />
      </div>

      {/* Links a las secciones */}
      <div className={styles.navbar_links}>
        <a href="#AcercaDemi" className={styles.navlink} aria-label="Sección Acerca de mí">Acerca de mí</a>
        <a href="#Educacion" className={styles.navlink} aria-label="Sección Educación">Educación</a>
        <a href="#Experiencia" className={styles.navlink} aria-label="Sección Experiencia">Experiencia</a>
        <a href="#Proyecto" className={styles.navlink} aria-label="Sección Proyectos">Proyectos</a>
        <a href="#Skills" className={styles.navlink} aria-label="Sección Skills">Skills</a>
      </div>

      {/* Iconos sociales */}
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
