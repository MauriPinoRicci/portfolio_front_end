import React from "react";
import { Progress, Grid } from "@nextui-org/react";
import { BsBook } from 'react-icons/bs'
import styles from '../educacion/educacion.module.css'


const Skills = () => {
    return (
            <Grid.Container xs={12} sm={6} gap={2}>
              <Grid>
              <BsBook className={styles.educacion_item_icon} size="36px" />
                <Progress value={100} color="primary" />
              </Grid>
              <Grid>
                <Progress value={30} color="secondary" />
              </Grid>
              <Grid>
                <Progress value={70} color="success" />
              </Grid>
              <Grid>
                <Progress value={90} color="warning" />
              </Grid>
              <Grid>
                <Progress value={10} color="error" />
              </Grid>
              <Grid>
                <Progress value={30} color="gradient" />
              </Grid>
            </Grid.Container>
    )
}

export {Skills}