import React from 'react'
import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
      
    <div  className={styles.container} >
      <div className={styles.info}>
            <h2>GENEXUS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus, reprehenderit optio .</p>
      </div>
      <div className={styles.add}>
      <h2>EMAIL ADDRESS</h2>
      <p>info@genexus.com</p>
      <h2> ADDRESS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Acr fugiat!</p>
      
      </div>
      <div className={styles.contacts}>
      <h2> PHONE</h2>
      <p>+971555555555</p>
      <p>+971555501105</p>
      </div>
      <div className={styles.contactss}>
      <h2>FOLLOW US</h2>
      <label>Be aware Of News</label>
      <div className={styles.register}>
       <div className={styles.field}>
      <input id="register" max-length="28" type="text" /><label for="register"><span>Email Address</span></label><button>OK</button>
  </div>
      </div>
      <div className={styles.icons}>
         <FaFacebook  className={styles.icon}/>
         <FaLinkedin  className={styles.icon}/>
         <FaYoutube  className={styles.icon} />
         <FaSquareXTwitter  className={styles.icon}/>
      </div>
      </div>
    
      
    
    </div>
  
  )
}

export default Footer