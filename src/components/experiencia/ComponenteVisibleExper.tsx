
import React, { useState } from 'react';
import { Experiencia } from './experiencia';
import style from './ComponenteVisibleExper.module.css';


const ComponenteVisibleExper = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={style.button} onClick={toggleVisibility}> Mostrar / Ocultar Experiencia</button>
      {isVisible && <Experiencia />}
    </div>
  );
};

export {ComponenteVisibleExper} 
