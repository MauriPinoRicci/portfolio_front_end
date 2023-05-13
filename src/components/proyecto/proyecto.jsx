import React from "react";
import styles from './proyecto.module.css'

const Proyecto = () => {
    return (
        <section className={styles.proyecto}>
            <h2 className={styles.proyecto_title}>Proyectos</h2>
            <span className={styles.white_divider} ></span>
            <p className={styles.proyecto_description}>Actualmente, no cuento con proyectos de programación documentados, ya que mi enfoque se ha centrado en la adquisición de habilidades técnicas a través de la formación y la participación en proyectos de aprendizaje. Sin embargo, he desarrollado un sólido conocimiento en lenguajes de programación como Python y Java, y estoy preparado para aplicarlos en futuros proyectos profesionales.</p>
        </section>
    )
}

export {Proyecto}