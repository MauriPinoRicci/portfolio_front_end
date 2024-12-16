"use client"

import React, { useState } from "react";
import styles from './experiencia.module.css'

const Experiencia = () => {

    const [showImage, setShowImage] = useState(false);
    const handleButtonClick = () => {
        setShowImage(!showImage);
    };

    return (
        <section id="Experiencia" className={styles.experiencia}>
            <button id="editar-button" onClick={handleButtonClick}>Editar</button>
            {showImage && <button id="eliminar-button">Eliminar</button>}
            {showImage && <button id="agregar-button">Agregar</button>}
            <h2 id="experiencia-title" className={styles.experiencia_title}>Experiencia</h2>
            <span id="black-divider" className={styles.black_divider}></span>
            <p id="experiencia-description" className={styles.experiencia_description}>Si bien soy nuevo en el mundo de la programación, he invertido tiempo y esfuerzo en adquirir habilidades y conocimientos relevantes a través de cursos y proyectos personales. Aunque no tengo experiencia profesional en proyectos de programación, he trabajado en colaboraciones de código abierto y he desarrollado proyectos personales para aprender y mejorar mis habilidades en programación.</p>
        </section>
    )
}

export { Experiencia }
