import React from "react";
import styles from "./AcercaDeMi.module.css";

const AcercaDeMi = () => {
  return (
    <section id="AcercaDeMi" className={styles.AcercaDeMi}>
      <div className={styles.backgroundOverlay}></div>
      <h2 className={styles.AcercaDeMi_title}>Acerca de mí...</h2>
      <span className={styles.white_divider}></span>
      <p className={styles.AcercaDeMi_description}>
        Mi nombre es{" "}
        <a
          className={styles.link}
          href="http://instagram.com/mauripinoricci"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mauricio Joaquín Pino Ricci
        </a>{" "}
        y soy un apasionado de la programación. Lo que realmente me motiva es
        poder encontrar soluciones innovadoras a problemas complejos mediante
        código. Mi objetivo es dejar una huella positiva en el mundo a través de
        la tecnología.
        <br />
        <br />
        Soy un desarrollador Full Stack con enfoque en{" "}
        <span style={{ color: "#1b5e20 " }}>Backend</span>. Me encanta crear
        aplicaciones escalables y optimizadas utilizando tecnologías como{" "}
        <span className={`${styles.tech} ${styles.nodejs}`}>Node.js</span>,{" "}
        <span className={`${styles.tech} ${styles.express}`}>Express</span>,{" "}
        <span className={`${styles.tech} ${styles.nestjs}`}>NestJS</span> y{" "}
        <span className={`${styles.tech} ${styles.postgresql}`}>
          PostgreSQL
        </span>
        . Siempre estoy en busca de nuevas formas de resolver desafíos técnicos
        y mejorar mis habilidades.
        <br />
        <br />
        También cuento con conocimientos en{" "}
        <span style={{ color: "#3ABFF8" }}>Frontend</span> utilizando{" "}
        <span className={`${styles.tech} ${styles.react}`}>React</span>,{" "}
        <span className={`${styles.tech} ${styles.nextjs}`}>Next.js</span>,{" "}
        <span className={`${styles.tech} ${styles.redux}`}>Redux</span> y{" "}
        <span className={`${styles.tech} ${styles.typescript}`}>
          TypeScript
        </span>
        , lo que me permite desarrollar interfaces dinámicas y funcionales. Con
        un sólido dominio de{" "}
        <span className={`${styles.tech} ${styles.javascript}`}>
          JavaScript
        </span>
        , <span className={`${styles.tech} ${styles.html5}`}>HTML5</span> y{" "}
        <span className={`${styles.tech} ${styles.css3}`}>CSS3</span>, integro
        ambos lados del desarrollo para ofrecer soluciones completas, robustas y
        eficientes. Me apasiona el desarrollo de software y siempre busco
        mejorar la arquitectura y el rendimiento de las aplicaciones en las que
        trabajo.
      </p>
    </section>
  );
};

export { AcercaDeMi };
