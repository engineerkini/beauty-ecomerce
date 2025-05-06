import React from 'react'
import Hero from '../components/layouts/Hero'
import NewArrivals from '../components/layouts/NewArrivals'
import BestSellers from '../components/layouts/BestSellers'
import ProductShowcase from '../components/layouts/ProductShowcase'
import OnTheBlog from '../components/layouts/OnTheBlog'



const Home = () => {
  return (
     <div className='flex flex-col gap-[80px] md:gap-[60px] 2xl:gap-[80px] mt-16'>
      <Hero/>
      <NewArrivals />
      <BestSellers />
      <ProductShowcase />
      <OnTheBlog />
    
     </div>
  )
}

export default Home