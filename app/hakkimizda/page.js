import React from 'react'
import Link from 'next/link'
import Headers from '../components/headers'
import '../globals.css'
import AboutUs from '../components/aboutUs'
import Footer from '../components/footer'

const Page = () => {
  return (
    <>
    <Headers></Headers>
    <AboutUs></AboutUs>
    <Footer></Footer>
    </>
  )
}

export default Page