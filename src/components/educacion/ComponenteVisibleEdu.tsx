import React, { useState } from 'react';
import { Educacion } from './educacion';
import style from './ComponenteVisibleEdu.module.css';


const ComponenteVisibleEdu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={style.button} onClick={toggleVisibility}> Mostrar / Ocultar Educación</button>
      {isVisible && <Educacion />}
    </div>
  );
};

export {ComponenteVisibleEdu} 