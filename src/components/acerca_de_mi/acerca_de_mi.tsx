import React from "react";
import styles from './acerca_de_mi.module.css'

const AcercaDeMi = () => {
	return (
		<section className={styles.acerca_de_mi}>
			<h2 className={styles.acerca_de_mi_title}>Acerca de mí...</h2>
			<span className={styles.white_divider} ></span>
			<p className={styles.acerca_de_mi_description}>Soy una persona dedicada y apasionada por la programación, y estoy emocionado por seguir creciendo y desarrollándome como programador Full Stack. Estoy abierto a oportunidades de trabajo y listo para contribuir a proyectos desafiantes en el campo del desarrollo web.</p>
		</section>
	)
}

export {AcercaDeMi}