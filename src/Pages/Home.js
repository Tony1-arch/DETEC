import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Fade } from 'react-reveal'
import Detail from '../Components/Details/Detail'
import Services from '../Components/Services/Services'
import Cards from '../Components/Card/Cards'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
       <Hero/>
       <Fade bottom duration={1800}>
       <Detail/>
       <Services/>
       <Cards/>
       <Footer/>
       </Fade>
    </div>
  )
}

export default Home