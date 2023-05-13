

import React, { useState } from 'react';
import { Proyecto } from './proyecto';
import style from './ComponenteVisibleProyectos.module.css';


const ComponenteVisibleProyectos = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={style.button} onClick={toggleVisibility}> Mostrar / Ocultar Proyectos</button>
      {isVisible && <Proyecto />}
    </div>
  );
};

export {ComponenteVisibleProyectos} 


