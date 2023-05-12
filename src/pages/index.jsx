import styles from './page.module.css'
import Head from 'next/head'
import { AcercaDeMi } from '../components/acerca_de_mi/acerca_de_mi'
import { Navbar } from '../components/navbar/navbar'
import { Header } from '../components/header/header'
import { Experiencia } from '../components/experiencia/experiencia'
import { Educacion } from '../components/educacion/educacion'
import { Footer } from '../components/footer/footer'
import { Skills } from '../components/skills/skills'


export default function HomePage({ Component }) {
	return (
		<main className={styles.main}>
			<Head>
				<title>Portfolio Web</title>
				<meta name='description' content='Home Page' />
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
				</style>
			</Head>

			<Navbar />
			<Header />
			<AcercaDeMi />
			<Experiencia />
			<Educacion />
			<Skills />
			<Footer />
			





		</main>

	)
}