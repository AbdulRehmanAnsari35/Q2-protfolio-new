import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="Hero" className='min-h-screen bg-no-repeat bg-[url(/sain.png)] bg-cover'
    style={{backgroundSize: "60%",backgroundPosition:"left 1px top 200px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] '>
        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[90px] font-semibold leading-tight flex justify-center items-center py-60'>
          <div >
            <p className='text-[#86c232]' data-aos="zoom-in-down">I am</p>
            <p className='text-[#86c232]' data-aos="zoom-in-down">Abdul</p>
            <p className='text-[#86c232]' data-aos="zoom-in-down">Rehman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
