"use client"
import React from 'react'
import Image from 'next/image'
import iletisim from "../../public/Images/iletisim1.jpg";


const ContactUs = () => {
  return (
    <>
    <div className='grid grid-cols-1 justify-items-center'>
        <Image className='w-5/6' src={iletisim} alt="İletişim"/>
    </div>
    <div className='grid lg:grid-cols-2 lg:m-20 md:grid-cols-1 gap-4 '>
        <div className='w-2/3 md:justify-self-center mx-10 lg:justify-self-end mt-20 mb-20'>
            <h1 className='text-2xl mb-5'>Topçular mah. gürbüzler cad, Yonca Sk. no:34, 34055 Eyüpsultan/İstanbul</h1>
            <ul className='text-xl '>
                <li><span className='font-semibold'>Telefon:</span><a href="tel:0535 981 58 24">0535 981 58 24</a></li>
                <li><span className='font-semibold'>Web: </span><a href="www.newax.com">www.newax.com</a></li>
                <li><span className='font-semibold'>E-posta: </span><a href="mailto:info@newax.com">info@newax.com</a></li>
            </ul>
        </div>
        <div className='justify-self-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.307131770976!2d28.92292707604215!3d41.04041217134605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb370a3f368f%3A0x27526eec774ac961!2sNEWAX%20Mobiya%20Aksesuarlar%C4%B1!5e0!3m2!1str!2str!4v1707014820839!5m2!1str!2str" 
            className='size-96'
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">    
        </iframe>
        </div>
    </div>
    </>
  )
}

export default ContactUs