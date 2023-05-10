import styles from './page.module.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import Image from 'next/image'
import Head from 'next/head'


export default function HomePage() {
	return (
		<main className={styles.main}>
			<Head>
				<title>Portfolio Web</title>
				<meta name='description' content='Home Page' />
			</Head>
			<nav className={styles.navbar}>
				<div className={styles.yoprologo}>
					<img src="/images/logito.png" alt="Logo" />
				</div>
				<div className={styles.navbar_right}>
					<a className={styles.icons} href="https://www.instagram.com/mauripinoricci/" target="_blank">
						<AiOutlineInstagram size="30px" />
					</a>
					<a className={styles.icons} href="https://www.facebook.com/mauri.pino.1" target="_blank">
						<AiOutlineFacebook size="30px" />
					</a>
					<a className={styles.icons} href="https://twitter.com/mauripinoricci" target="_blank">
						< AiOutlineTwitter size="30px" />
					</a>
					<button className={styles.button}>
						Login
					</button>
				</div>
			</nav>

			<section className={styles.section}>
				<article className={styles.articulo}>
					<div className={styles.texto}>
						<h3 className={styles.bienvenida}>Bienvenidos a Mi Portfolio Web</h3>
						<div className={styles.imgWrapper}>
							<Image className={styles.imgyo} src="/images/yo2.jpeg" width={400} height={400} alt={'Mauricio Pino Ricci'} />
						</div>
						<h3 className={styles.textoConFondo}>Mauricio Joaquín Pino Ricci</h3>
						<h3 className={styles.textoConFondo}>Programador Web Full Stack</h3>
					</div>
				</article>

				<article className={styles.acercademi}>
					<div className={styles.texto}>
						<h2 className={styles.titulo}>Acerca de mí...</h2>
						<p className={styles.parrafo}>Soy una persona dedicada y apasionada por la programación, y estoy emocionado por seguir creciendo y desarrollándome como programador Full Stack. Estoy abierto a oportunidades de trabajo y listo para contribuir a proyectos desafiantes en el campo del desarrollo web.</p>
					</div>
				</article>

				<article className={styles.exper}>
					<div className={styles.texto}>
						<h2 className={styles.titulo1}>Experiencia</h2>
						<p className={styles.parrafo}>Si bien soy nuevo en el mundo de la programación, he invertido tiempo y esfuerzo en adquirir habilidades y conocimientos relevantes a través de cursos y proyectos personales. Aunque no tengo experiencia profesional en proyectos de programación, he trabajado en colaboraciones de código abierto y he desarrollado proyectos personales para aprender y mejorar mis habilidades en programación</p>
					</div>
				</article>

				<article className={styles.edu}>
					<div className={styles.texto}>
						<h2 className={styles.titulo}>Educación</h2>
						<h3 className={styles.subtitulo}>Formación Académica</h3>
					</div>
					<div className={styles.texto1}>
						<h3 className={styles.curso1}>Cursos De Programación</h3>
						<div className={styles.marco}>
							<div className={styles.marcoint}>
								<Image className={styles.egglogo} src="/images/egglogo.png" width={400} height={400} alt={'Egg Logo'} />
								<p className={styles.cursoegg}>Curso Programación desde Cero Egg Cooperation.</p>
							</div>
							<p className={styles.textedu}>
								Durante este curso, he adquirido un sólido conocimiento en los fundamentos de la programación, incluyendo conceptos de programación estructurada, lógica de programación, desarrollo web y bases de datos. Además, he tenido la oportunidad de desarrollar habilidades prácticas en programación mediante la creación de proyectos y la resolución de desafíos técnicos.</p>
						</div>
						<div className={styles.marco}>
							<div className={styles.marcoint}>
								<Image className={styles.yoprologo} src="/images/logito.png" width={400} height={400} alt={'Egg Logo'} />
								<p className={styles.cursoarg}>Curso Programación #SeProgramar.</p>
							</div>
							<p className={styles.textedu}>
								En este curso, reforse conocimientos básicos sobre programación. Ayudandome así, a tener una solida base de conocimientos acerca de lógica de programación y desarrollo web.
							</p>
						</div>
						<div className={styles.marco}>
							<div className={styles.marcoint}>
								<Image className={styles.egglogo} src="/images/egglogo.png" width={400} height={400} alt={'Egg Logo'} />
								<p className={styles.cursoegg}>Carrera Full Stack Egg Cooperation.</p>
							</div>
							<p className={styles.textedu}>
								Actualmente estoy matriculado en la carrera Full Stack en la institución "Egg Cooperation" y mantengo mi condición de alumno regular.
							</p>
						</div>
					</div>
				</article>

				<article className={styles.certificados}>
					<div className={styles.texto}>
						<h3 className={styles.subtitulo}>Certificados</h3>
					</div>
					<div className={styles.contimg}>
						<a href="/images/certificado.pdf" target='blank'><Image className={styles.img1} src="/images/certificado.png" width={400} height={400} alt={'Curso PDC Egg'} /></a>
						<a href="/images/seprogramar.pdf" target='blank'><Image className={styles.img1} src="/images/seprogramar.png" width={400} height={400} alt={'Curso PDC Egg'} /></a>
						<a href="/images/calEgg.pdf" target='blank'><Image className={styles.img1} src="/images/calEgg.png" width={400} height={400} alt={'Curso PDC Egg'} /></a>
					</div>
				</article>

				<article className={styles.skills}>
					<div className={styles.texto}>
						<h2 className={styles.Tskills}>Hard y Soft Skills</h2>
						<h3 className={styles.subtitulo}>Habilidades Tecnicas</h3>
					</div>
					<div className={styles.habtec}>
						<p className={styles.sparrafo}>JavaScript: 90%</p>
						<p className={styles.sparrafo}>HTML/CSS: 85%</p>
						<p className={styles.sparrafo}>React: 90%</p>
						<p className={styles.sparrafo}>Gestión de Bases de Datos (SQL, MongoDB): 90%</p>
						<p className={styles.sparrafo}>Estadísticas: 80%</p>
					</div>
					<div className={styles.texto}>
						<h3 className={styles.subtitulo}>Habilidades Blandas</h3>
					</div>
					<div className={styles.habtec}>
						<p >Comunicación: 95%</p>
						<p >Trabajo En Equipo: 90%</p>
						<p >Liderazgo: 70%</p>
						<p >Creatividad: 85%</p>
						<p >Resolución De Problemas: 90%</p>
					</div>
				</article>

				<article className={styles.proyecto}>
					<div className={styles.texto}>
						<h2 className={styles.titulo}>Proyectos</h2>
						<p className={styles.parrafo}>Actualmente, no cuento con proyectos de programación documentados, ya que mi enfoque se ha centrado en la adquisición de habilidades técnicas a través de la formación y la participación en proyectos de aprendizaje. Sin embargo, estoy preparado para aplicarlos en futuros proyectos profesionales.</p>
					</div>
				</article>
			</section>
			<footer className={styles.footer}>
				<a href="https://www.instagram.com/mauripinoricci/" target="_blank">Desarrollada por Mauri Pino Ricci</a>
			</footer>
		</main>
	)
}