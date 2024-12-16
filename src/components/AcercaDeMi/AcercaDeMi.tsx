import React from "react";
import styles from './AcercaDeMi.module.css';

const AcercaDeMi = () => {
	return (
		<section id="AcercaDemi" className={styles.AcercaDeMi}>
			<h2 className={styles.AcercaDeMi_title}>Acerca de mí...</h2>
			<span className={styles.white_divider}></span>
			<p className={styles.AcercaDeMi_description}>
				Mi nombre es Mauricio Joaquín Pino Ricci y soy un apasionado de la programación. Más allá de la alta demanda que existe en el sector, lo que realmente me motiva es poder encontrar soluciones innovadoras a problemas complejos con código. Mi objetivo es dejar una huella positiva en el mundo a través de la tecnología.<br></br><br></br>
				Soy un desarrollador Fullstack con enfoque en Backend. Me encanta crear aplicaciones escalables y optimizadas utilizando tecnologías como Node.js, Express, NestJS y PostgreSQL. Siempre estoy buscando nuevas formas de resolver problemas y mejorar mis habilidades.<br></br><br></br>
				También tengo conocimientos en Frontend utilizando React, Next.js, Redux, y TypeScript, lo que me permite crear interfaces dinámicas y funcionales. Con un sólido dominio de JavaScript, HTML5 y CSS3.
				<br></br><br></br>
				Integro ambos lados del desarrollo para ofrecer soluciones completas, robustas y eficientes. Me apasiona el desarrollo de software y siempre busco mejorar la arquitectura y el rendimiento de las aplicaciones en las que trabajo.
			</p>
		</section>
	);
};

export { AcercaDeMi };
