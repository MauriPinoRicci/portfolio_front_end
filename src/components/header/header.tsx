"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  const handleScroll = () => {
    const acercaDeMiSection = document.getElementById("AcercaDeMi");
    if (acercaDeMiSection) {
      acercaDeMiSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="Header" className={`${styles.header} ${styles.noMarginUnderNavbar}`}>
      <div className={styles.header_opacity}></div>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}>Bienvenidos a Mi Portafolio Web</h1>
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
          Mauricio Joaquín Pino Ricci <br /> Programador Web Full Stack
        </h2>
        <button
          className={styles.header_button}
          onClick={handleScroll}
        >
          Ingresar
        </button>
      </div>
    </header>
  );
};

export { Header };
