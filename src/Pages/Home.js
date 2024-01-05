import React from 'react'
import Hero from '../Components/Hero/Hero'

import Detail from '../Components/Details/Detail'
import Services from '../Components/Services/Services'
import Cards from '../Components/Card/Cards'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
       <Hero/>
       
       <Detail/>
       <Services/>
       <Cards/>
       <Footer/>
     
    </div>
  )
}

export default Home