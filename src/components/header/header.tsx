"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { AiFillFilePdf } from "react-icons/ai";

const Header = () => {
  const handleScroll = () => {
    const acercaDeMiSection = document.getElementById("AcercaDeMi");
    if (acercaDeMiSection) {
      const offsetTop = acercaDeMiSection.offsetTop;
      // Desplazamos con un offset para evitar que el navbar tape la sección
      window.scrollTo({
        top: offsetTop - 1, // Ajusta este valor según el tamaño de tu navbar
        behavior: "smooth"
      });
    }
  };


  return (
    <header id="Header" className={`${styles.header} ${styles.noMarginUnderNavbar}`}>
      <div className={styles.header_opacity}></div>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}> Mauricio Joaquín Pino Ricci </h1>
        <div className={styles.header_image}>
          <a
            href="https://www.linkedin.com/in/mauricio-joaqu%C3%ADn-pino-ricci-055858140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.header_img}
              src="/images/yo2.jpeg"
              width={260}
              height={260}
              alt="Mauricio Pino Ricci"
            />
          </a>
        </div>
        <h2 className={styles.header_description}>
          Desarrollador Web Full Stack 
        </h2>
        <h3 className={styles.extra_content}>
          Explora mi portafolio y conoce más sobre mí.
        </h3>
        <button
          className={styles.header_button}
          onClick={handleScroll}
        >
          Ingresar
        </button>
        <a href="https://drive.google.com/uc?export=download&id=1LkacFy3yAIp0R8CVEdRaOmHzvwbQGxD8" download className={styles.download_cv_button}>
          <AiFillFilePdf size="20px" style={{ marginRight: '8px' }} />
          Descarga mi CV
        </a>
      </div>
    </header>
  );
};

export { Header };
