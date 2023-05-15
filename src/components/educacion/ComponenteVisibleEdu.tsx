import React, { useState } from 'react';
import { Educacion } from './educacion';
import style from './ComponenteVisibleEdu.module.css';

const ComponenteVisibleEdu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [componentes, setComponentes] = useState<JSX.Element[]>([]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const agregarComponente = () => {
    setComponentes([...componentes, <Educacion key={componentes.length} />]);
  };

  const eliminarComponente = () => {
    setComponentes(componentes.slice(0, -1));
  };

  return (
    <div>
        <button className={style.button} onClick={toggleVisibility}>
          Mostrar / Ocultar Educación
        </button>
        {isVisible && (
          <div>
            <button className={style.button} onClick={agregarComponente}>
              Agregar
            </button>
            <button className={style.button} onClick={eliminarComponente}>
              Eliminar
            </button>
          </div>
        )}
        {isVisible && componentes}
     
    </div>
  );
};

export { ComponenteVisibleEdu };
