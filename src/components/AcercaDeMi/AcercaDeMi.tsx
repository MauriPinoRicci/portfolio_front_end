import React from "react";
import styles from './AcercaDeMi.module.css'

const AcercaDeMi = () => {
	return (
		<section className={styles.AcercaDeMi}>
			<h2 className={styles.AcercaDeMi_title}>Acerca de mí...</h2>
			<span className={styles.white_divider} ></span>
			<p className={styles.AcercaDeMi_description}>Soy una persona dedicada y apasionada por la programación, y estoy emocionado por seguir creciendo y desarrollándome como programador Full Stack. Estoy abierto a oportunidades de trabajo y listo para contribuir a proyectos desafiantes en el campo del desarrollo web.</p>
		</section>
	)
}

export {AcercaDeMi}