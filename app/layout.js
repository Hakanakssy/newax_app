import React from 'react'
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
})

const Layout = ({children}) => {
  return (
    <html lang='en' className={barlow.className}>
        <body className={barlow.className}>
           {children} 
        </body>
    </html>
  )
}

export default Layout