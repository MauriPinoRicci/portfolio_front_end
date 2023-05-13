import CircleProgressBar from './CircleProgressBar';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'

import style from './skills.module.css';


const Skills = () => {

  return (

    <div className={style.containers}>

      <section className={style.skills}>
        <h2 className={style.skills_title}>Hard y Soft Skills</h2>
        <span className={style.black_divider} ></span>
      </section>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={70} color="#ef6c00" />
        </div>
        <AiFillHtml5 className={`${style.item_icon} ${style.item_icon_html}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={80} color="#1565c0" />
        </div>
        <DiCss3 className={`${style.item_icon} ${style.item_icon_css}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={80} color="#fbc02d" />
        </div>
        <DiJavascript className={`${style.item_icon} ${style.item_icon_js}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={60} color="#1e88e5" />
        </div>
        <SiTypescript className={`${style.item_icon} ${style.item_icon_ts}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={90} color="#9575cd" />
        </div>
        <FaJava className={`${style.item_icon} ${style.item_icon_java}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={60} color="#e65100" />
        </div>
        <GrMysql className={`${style.item_icon} ${style.item_icon_mysql}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={80} color="#0d47a1" />
        </div>
        <AiFillGithub className={`${style.item_icon} ${style.item_icon_github}`} />
      </div>

      <div className={style.item_container}>
        <div className={style.item_circle_container}>
          <CircleProgressBar percent={80} color="#03a9f4" />
        </div>
        <FaReact className={`${style.item_icon} ${style.item_icon_react}`} />
      </div>
    </div>

  );
};
export { Skills };
