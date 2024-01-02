import React from 'react'
import { useLayoutEffect,useRef } from 'react'
import gsap from 'gsap';
import styles from './hero.module.css'
function Hero() {
  const comp = useRef(null);
  useLayoutEffect(()=>{
   let ctx = gsap.context(()=>{
  const tl = gsap.timeline();
  tl.from("#into-slider",{
    xPercent:'-100',
    duration:1.2,
    delay:0.3,
  }).from(["#text-1",'#text-2','#text-3'],{
    opacity:0,
    y:"+=50",
    stagger:0.6,
  }).to(["#text-1",'#text-2','#text-3'],{
    opacity:0,
    y:"-=50",
    delay:0.4,
    stagger:0.6,
  }).to("#into-slider",{
    xPercent:'-100',
    duration:1.2,
    
  }).from("#main-text",{
    opacity:0,
    y:"-=150",
    duration:0.8,
  })
   },comp)
   return () =>ctx.revert()
  },[])
  return (
    <div className={styles.container} ref={comp}>
      <div id="into-slider" className={styles.absolut}>
        <h3 id='text-1'>PROTECTION</h3>
        <h3 id='text-2'>EFFECTIVE</h3>
        <h3 id='text-3'>RELIABLE</h3>
      </div>
      <div className={styles.content}>
      <h1 id="main-text"><span>GLOBAL</span> FRAUD INTELLIGENCE</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sunt at unde ratione ad, tempore porro sus.</p>
      <div className={styles.btnContainer}>
      
       <button>Contact</button>
       <button>About</button>
      </div>
      </div>
      <div></div>
    </div>
  )
}

export default Hero