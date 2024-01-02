import React from 'react'
import styles from "./services.module.css"
import { MdHomeRepairService } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
function Services() {
   
  return (
    <div   className={styles.container} >
    <div className={styles.content} >
      <h2 >Our Services</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et consequatur rem, architecto modi tempora, maxime ipsum fuga ad placeat quisquam adipisci. Minus harum, quae cupiditate placeat dignissimos ratione ipsam sunt!</p>
    </div>
    <div className={styles.cards} >
      <div className={styles.card} >
            <div className={styles.icon}  >
                  <MdHomeRepairService  className={styles.iconre}/>
            </div>
            <div className={styles.info} >
                  <h3 >Profession Service</h3>
                  <p >Lorem, ipsum dolor sit amet  architecto sapiente illum optio error 
                  amet  architecto sapiente illum optio error nisi!
                  </p>
            </div>
      </div>
            <div className={styles.card} >
            <div className={styles.icon}  >
                  <RiCustomerService2Line  className={styles.iconre}/>
            </div>
            <div className={styles.info}  >
                  <h3 >Fraud Consulting</h3>
                  <p>Lorem, ipsum dolor sit amet  architecto sapiente illum optio error 
                  amet  architecto sapiente illum optio error nisi!
                  </p>
            </div>
      </div>
            <div className={styles.card} >
            <div className={styles.icon} >
                  < AiOutlineFundProjectionScreen className={styles.iconre}/>
            </div>
            <div className={styles.info} >
                  <h3 >Project Managment</h3>
                  <p>Lorem, ipsum dolor sit amet  architecto sapiente illum optio error 
                  amet  architecto sapiente illum optio error nisi!
                  </p>
            </div>
      </div>
            <div className={styles.card} >
            <div className={styles.icon}  >
                  <DiGoogleAnalytics  className={styles.iconre}/>
            </div>
            <div className={styles.info} >
                  <h3>Analytical Services</h3>
                  <p>Lorem, ipsum dolor sit amet  architecto sapiente illum optio error 
                  amet  architecto sapiente illum optio error nisi!
                  </p>
            </div>
      </div>
     
    </div>
    </div>
  )
}

export default Services