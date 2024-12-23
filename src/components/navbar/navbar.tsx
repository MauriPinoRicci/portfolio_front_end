'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiFillCode } from 'react-icons/ai';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'Header', label: 'Home' },
    { id: 'AcercaDeMi', label: 'Acerca de mí' },
    { id: 'Educacion', label: 'Educación' },
    { id: 'Experiencia', label: 'Experiencia' },
    { id: 'Proyecto', label: 'Proyectos' },
    { id: 'Skills', label: 'Skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target.id;
        if (visibleSection) {
          setActiveSection(visibleSection);
        }
      },
      { threshold: 0.6 } // Ajusta para considerar una sección visible al 60%.
    );

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar_logo}>
        <AiFillCode size="60px" aria-label="Logo de la página" />
      </div>

      <div className={styles.navbar_links}>
        {sections
          .filter((section) => section.id !== activeSection) // Excluir la sección activa.
          .map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={styles.navlink}
              aria-label={`Sección ${section.label}`}
            >
              {section.label}
            </a>
          ))}
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
