import React from 'react'
import styles from './cards.module.css'

import { HiOutlineStatusOnline } from "react-icons/hi";

import { PiCardsLight } from "react-icons/pi";

import { MdNewspaper } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
function Cards() {
  
  return (
    <div className={styles.container} >
      <div  className={styles.cards} >
      <div className={styles.card}>
       <HiOutlineStatusOnline className={styles.cardicon} />
            <h3 >Online Fraud</h3>
      </div>
      <div className={styles.card} >
       <PiCardsLight className={styles.cardicon}/>
      <h3>Card Fraud</h3>
      </div>
      <div  className={styles.card}>
       <MdNewspaper className={styles.cardicon}/>
      <h3 >Cheque Fraud</h3>
      </div>
      <div className={styles.card}>
      <FaListUl  className={styles.cardicon}/>
      <h3>Case Studies</h3>
      </div>
      </div>
      <div className={styles.content}  >
      <h2 >INTELLIGENCE</h2>
      <p >Lorem ipsum, dolor sit amet consectetur adipisiciendus doloremque ipsa corporis quia dolorum vel reiciendis?</p>
      <ul   >
            <li >INTERNET INTELLIGENCE</li>
            <li >COMPROMISE CARDS ENGINE</li>
            <li >SERVER SECURITY</li>
      
      </ul>
      <button>Learn More</button>
      </div>
    </div>
  )
}

export default Cards