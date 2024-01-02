import React from 'react';

import styles from "./detail.module.css"
import { LiaEyeSolid } from "react-icons/lia";
import { IoCalendarClear } from "react-icons/io5";
import { SiProtondrive } from "react-icons/si";
function Detail() {
  return (
      <div  className={styles.container} >
      <div className={styles.content}  >
            <h2 ><span> AT CYBERHURT </span>WE HAVE NEVER BELIVED THAT THERE IS A SILVER BULLET FOR FRAUD</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est vitae mollitia, nostrum natus, autem eveniet neque quisquam blanditiis.</p>
            <button >Learn more</button>
      </div>
      <div className={styles.groupicon}   >
          <div className={styles.icons} >
            <div className={styles.icon}>
            <SiProtondrive className={styles.reaicon}/>
            </div>
            <div className={styles.info}>
                  <h3>LEARN</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores facere provident. Maioresa!</p>
            </div>

          </div>
          <div className={styles.icons} >
            <div className={styles.icon}>
            <LiaEyeSolid className={styles.reaicon}/>
            </div>
            <div className={styles.info}>
                  <h3>DETECT</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores facere provident. Maioresa!</p>
            </div>

          </div>
          <div className={styles.icons} >
            <div className={styles.icon}>
            <IoCalendarClear className={styles.reaicon}/>
            </div>
            <div className={styles.info}>
                  <h3>PROTECT</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores facere provident. Maioresa!</p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Detail;