import React from 'react'
import Link from 'next/link'
import './globals.css'
import Slider from './components/slider'
import HalfImage from './components/halfImage'
import Presentation from './components/presentation'
import Footer from './components/footer'
import Headers from './components/headers'


export const Page = () => {
  return (
   
    <>
     <Headers></Headers>
     <Slider></Slider>
     <Presentation></Presentation>
     <HalfImage></HalfImage>
     <Footer></Footer>
    </>
  )
}

export default Page
