
import React, { useState } from 'react';
import { Skills } from './skills';
import style from './ComponenteVisibleSkills.module.css';


const ComponenteVisibleSkills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className={style.button} onClick={toggleVisibility}> Mostrar / Ocultar Skills</button>
      {isVisible && <Skills />}
    </div>
  );
};

export {ComponenteVisibleSkills} 
