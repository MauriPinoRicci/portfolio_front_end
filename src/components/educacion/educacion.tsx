"use client"

import React, { useState } from "react";
import styles from './educacion.module.css'
import { BsBook } from 'react-icons/bs'

const Educacion = () => {

	const [showImage, setShowImage] = useState(false);
	const handleButtonClick = () => {
    	setShowImage(!showImage);
	};

    return (
        <section id="Educacion" className={styles.educacion}>
            <button onClick={handleButtonClick}>Editar</button>
			{showImage && <button>Eliminar</button>}
			{showImage && <button>Agregar</button>}
            <h2 id="educacion-title" className={styles.educacion_title}>Educación</h2>
            <span id="white-divider" className={styles.white_divider}></span>

            <div id="educacion-item-container" className={styles.educacion_item_container}>
                <div id="educacion-item-1" className={styles.educacion_item}>
                    <div id="educacion-item-header-1" className={styles.educacion_item_header}>
                        <BsBook id="educacion-item-icon-1" className={styles.educacion_item_icon} size="36px" />
                        <h3 id="educacion-item-title-1" className={styles.educacion_item_title}>
                            Curso Programación Desde Cero Egg Cooperation.
                        </h3>
                    </div>
                    <p id="educacion-item-description-1" className={styles.educacion_item_description}>
                        Durante este curso, he adquirido un sólido conocimiento en los fundamentos de la programación, incluyendo conceptos de programación estructurada, lógica de programación, desarrollo web y bases de datos. Además, he tenido la oportunidad de desarrollar habilidades prácticas en programación mediante la creación de proyectos y la resolución de desafíos técnicos.
                    </p>
                </div>
                <div id="educacion-item-2" className={styles.educacion_item}>
                    <div id="educacion-item-header-2" className={styles.educacion_item_header}>
                        <BsBook id="educacion-item-icon-2" className={styles.educacion_item_icon} size="36px" />
                        <h3 id="educacion-item-title-2" className={styles.educacion_item_title}>
                            Curso Programación #SeProgramar.
                        </h3>
                    </div>
                    <p id="educacion-item-description-2" className={styles.educacion_item_description}>
                        En este curso, reforse conocimientos básicos sobre programación. Ayudandome así, a tener una solida base de conocimientos acerca de lógica de programación y desarrollo web.
                    </p>
                </div>
                <div id="educacion-item-3" className={styles.educacion_item}>
                    <div id="educacion-item-header-3" className={styles.educacion_item_header}>
                        <BsBook id="educacion-item-icon-3" className={styles.educacion_item_icon} size="36px" />
                        <h3 id="educacion-item-title-3" className={styles.educacion_item_title}>
                            Carrera Full Stack Egg Cooperation.
                        </h3>
                    </div>
                    <p id="educacion-item-description-3" className={styles.educacion_item_description}>
                        Actualmente estoy matriculado en la carrera Full Stack en la institución "Egg Cooperation" y mantengo mi condición de alumno regular.
                    </p>
                </div>
            </div>
        </section>
    )
}

export { Educacion }
