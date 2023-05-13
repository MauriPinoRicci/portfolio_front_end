import React, { useState } from 'react';
import { AcercaDeMi } from './AcercaDeMi';
import style from './ComponenteVisibleAcerca.module.css';

const ComponenteVisibleAcerca = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [componentes, setComponentes] = useState<JSX.Element[]>([]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const agregarComponente = () => {
    setComponentes([...componentes, <AcercaDeMi key={componentes.length} />]);
  };

  const eliminarComponente = () => {
    setComponentes(componentes.slice(0, -1));
  };

  return (
    <div>
        <button className={style.button} onClick={toggleVisibility}>
          Mostrar / Ocultar Acerca de Mí
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

export { ComponenteVisibleAcerca };
