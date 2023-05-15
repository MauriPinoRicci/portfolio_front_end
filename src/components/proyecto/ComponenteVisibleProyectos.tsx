import React, { useState } from 'react';
import { Proyecto } from './proyecto';
import style from './ComponenteVisibleProyecto.module.css';

const ComponenteVisibleProyecto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [componentes, setComponentes] = useState<JSX.Element[]>([]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const agregarComponente = () => {
    setComponentes([...componentes, <Proyecto key={componentes.length} />]);
  };

  const eliminarComponente = () => {
    setComponentes(componentes.slice(0, -1));
  };

  return (
    <div>
        <button className={style.button} onClick={toggleVisibility}>
          Mostrar / Ocultar Proyecto
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

export { ComponenteVisibleProyecto };
