import styles from './page.module.css'
import Head from 'next/head'
import { AcercaDeMi } from '../components/AcercaDeMi/AcercaDeMi'
import { Navbar } from '../components/navbar/navbar'
import { Header } from '../components/header/header'
import { Experiencia } from '../components/experiencia/experiencia'
import { Educacion } from '../components/educacion/educacion'
import { Footer } from '../components/footer/footer'
import { Skills } from '../components/skills/skills'
import { Proyecto } from '../components/proyecto/proyecto'
import { ComponenteVisibleAcerca } from '../components/AcercaDeMi/ComponenteVisibleAcerca'
import { ComponenteVisibleEdu } from '../components/educacion/ComponenteVisibleEdu'
import { ComponenteVisibleExper } from '../components/experiencia/ComponenteVisibleExper'
import { ComponenteVisibleSkills } from '../components/skills/ComponenteVisibleSkills'
import { ComponenteVisibleProyectos } from '../components/proyecto/ComponenteVisibleProyectos'



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
			<div>
				<Navbar />
			</div>

			<div>
				<Header />
			</div>

			<div>
				<ComponenteVisibleAcerca />
			</div>

			<div>
				<ComponenteVisibleExper />
			</div>

			<div>
				<ComponenteVisibleEdu />
			</div>

			<div>
				<ComponenteVisibleSkills />
			</div>

			<div>
				<ComponenteVisibleProyectos />
			</div>

			<div>
				<Footer />
			</div>

		</main>

	)
}