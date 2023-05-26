import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import styles from "../style";
import "../index.css"
import {Billing,Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, FinNav} from '../Components'


const Home = () => {
  const {loading} = useContext(AppContext)
  return (
    <div className=" w-full overflow-hidden">

    <div className={`bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 ${styles.flexStart}`}>
   
      <div className={`${styles.boxWidth}`}>
    
        <Hero />
      </div>
    </div>
    
    <div className={`bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>

  )
}

export default Home