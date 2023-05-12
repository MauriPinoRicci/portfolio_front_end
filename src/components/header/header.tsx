import React from "react";
import styles from './header.module.css'
import Image from 'next/image'


const Header = () => {
    return (
        <header className={styles.header}>
				<div className={styles.header_opacity}></div>
				<div className={styles.header_content}>
					<h1 className={styles.header_title}>Bienvenidos a mi portfolio web</ h1>
					<div className={styles.header_image}>
						<Image className={styles.header_img} src="/images/yo2.jpeg" width={260} height={260} alt={'Mauricio Pino Ricci'} />
					</div>
					<h2 className={styles.header_description}>Mauricio Joaquín Pino Ricci <br /> Programador Web Full Stack</h2>
				</div>
			</header>
    )
}

export {Header}