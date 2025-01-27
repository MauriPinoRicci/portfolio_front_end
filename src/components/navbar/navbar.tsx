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
    { id: 'Proyecto', label: 'Proyectos' },
    { id: 'Educacion', label: 'Educación' },
    { id: 'Experiencia', label: 'Experiencia' },
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
          setActiveSection(visibleSection);  // Establece la sección activa
        } else {
          setActiveSection(null);  // Si no hay ninguna sección visible, elimina la sección activa
        }
      },
      { threshold: 0.6 } // Ajusta para considerar una sección visible al 60%
    );

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault(); // Evita el comportamiento por defecto (recarga de página)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div
        className={styles.navbar_logo}
        onClick={(event) => scrollToSection('Header', event)} // Agregar el evento de clic aquí
        aria-label="Ir a la sección Home"
      >
        <AiFillCode size="60px" />
      </div>

      <div className={styles.navbar_links}>
        {sections.map((section) => (
          <a
            key={section.id}
            onClick={(event) => scrollToSection(section.id, event)} // Cambiado para usar la función de scroll controlado
            className={`${styles.navlink} ${activeSection === section.id ? styles.inactive : ''}`}
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
          href="https://www.linkedin.com/in/mauripinoricci/"
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
