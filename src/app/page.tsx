import styles from "./page.module.css";
import Head from "next/head";
import { Navbar } from "../components/navbar/navbar";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { AcercaDeMi } from "../components/AcercaDeMi/AcercaDeMi";
import { Educacion } from "../components/educacion/educacion";
import { Experiencia } from "../components/experiencia/experiencia";
import { CircleProgressBar } from "../components/skills/CircleProgressBar";
import { Proyecto } from "../components/proyecto/proyecto";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Portfolio Web</title>
        <meta name="description" content="Home Page" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
        </style>
      </Head>
      <div className={styles.content}>
        <Header />
        <Navbar />
        <AcercaDeMi />
        <Proyecto />
        <Experiencia />
        <Educacion />
        <CircleProgressBar percent={0} color={""} />
      </div>
      <Footer />
    </main>
  );
}
