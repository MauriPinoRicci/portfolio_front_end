import React from "react";
import styles from './experiencia.module.css'

const Experiencia = () => {
    return (
        <section className={styles.experiencia}>
            <h2 className={styles.experiencia_title}>Experiencia</h2>
            <span className={styles.black_divider} ></span>
            <p className={styles.experiencia_description}>Si bien soy nuevo en el mundo de la programación, he invertido tiempo y esfuerzo en adquirir habilidades y conocimientos relevantes a través de cursos y proyectos personales. Aunque no tengo experiencia profesional en proyectos de programación, he trabajado en colaboraciones de código abierto y he desarrollado proyectos personales para aprender y mejorar mis habilidades en programación.</p>
        </section>
    )
}

export { Experiencia }   