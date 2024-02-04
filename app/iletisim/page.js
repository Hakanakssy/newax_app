import Link from 'next/link'
import React from 'react'
import Headers from '../components/headers'
import '../globals.css'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'

const Page = () => {
  return (
    <>
    <Headers></Headers>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  )
}

export default Page