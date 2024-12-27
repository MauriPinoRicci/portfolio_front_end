"use client";

import React from "react";
import styles from "./footer.module.css";
import { AiFillHeart } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <p>© Todos los derechos reservados. {new Date().getFullYear()}. </p>
        <p>
          Desarrollada con <AiFillHeart className={styles.heartIcon} size={20} /> por <a className={styles.link} href="http://instagram.com/mauripinoricci" target="_blank" rel="noopener noreferrer">Mauri Pino Ricci</a>
        </p>
      </div>
    </footer>
  );
};
