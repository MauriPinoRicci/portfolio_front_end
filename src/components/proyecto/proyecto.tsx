"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import styles from "./proyecto.module.css";

const Proyecto = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpandedCard(id);
  };

  const handleClose = () => {
    setExpandedCard(null);
  };

  const projects = [
    {
      id: 1,
      title: "Proyecto Vicnasol App",
      description:
        "Actualmente, no cuento con proyectos de programación documentados, ya que mi enfoque se ha centrado en la adquisición de habilidades técnicas a través de la formación y la participación en proyectos de aprendizaje.",
      image: "/images/fondopagprincipal.webp",
    },
    {
      id: 2,
      title: "Proyecto de Aprendizaje",
      description:
        "Este proyecto está diseñado para adquirir habilidades técnicas a través de ejercicios prácticos.",
      image: "/images/project-placeholder.jpg",
    },
    {
      id: 3,
      title: "Proyecto de Aprendizaje 2",
      description:
        "Otro proyecto enfocado en el aprendizaje de nuevas tecnologías.",
      image: "/images/project-placeholder.jpg",
    },
  ];

  return (
    <section id="Proyecto" className={styles.proyecto}>
      <h2 className={styles.proyecto_title}>Proyectos</h2>
      <span className={styles.white_divider}></span>
      {projects.map((project) => (
        <Card
          key={project.id}
          className={`${styles.proyecto_card} ${
            expandedCard === project.id ? styles.expanded : ""
          }`}
        >
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
            className={expandedCard === project.id ? styles.expanded_image : ""}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              className={
                expandedCard === project.id ? styles.expanded_text : ""
              }
            >
              {project.description}
            </Typography>
            {expandedCard === project.id ? (
              <>
                <Typography variant="body2" className={styles.extra_info}>
                  Aquí puedes encontrar información más detallada sobre este
                  proyecto.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={styles.proyecto_button}
                  onClick={handleClose}
                >
                  Cerrar
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                className={styles.proyecto_button}
                onClick={() => handleExpand(project.id)}
              >
                Ver Proyecto
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export { Proyecto };
