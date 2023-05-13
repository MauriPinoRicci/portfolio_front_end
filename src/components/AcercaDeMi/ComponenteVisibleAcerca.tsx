import React, { useState } from 'react';
import { AcercaDeMi } from './AcercaDeMi';
import style from './ComponenteVisibleAcerca.module.css';


const ComponenteVisibleAcerca = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={style.button} onClick={toggleVisibility}>Mostrar / Ocultar Acerca de Mí</button>
      {isVisible && <AcercaDeMi />}
    </div>
  );
};

export {ComponenteVisibleAcerca} 
