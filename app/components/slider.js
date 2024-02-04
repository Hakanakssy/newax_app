import React from 'react'
import { Carousel } from "flowbite-react";
import Image from 'next/image';
import gorsel1 from "../../public/Images/gorsel1.jpg";
import gorsel2 from "../../public/Images/gorsel2.jpg";
import gorsel3 from "../../public/Images/gorsel3.jpg";
import gorsel4 from "../../public/Images/gorsel4.jpg";
import gorsel5 from "../../public/Images/gorsel5.jpg";


const Slider = () => {
  return (
    <>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image src={gorsel1}></Image>
        <Image src={gorsel2}></Image>
        <Image src={gorsel3}></Image>
        <Image src={gorsel4}></Image>
        <Image src={gorsel5}></Image>
      </Carousel>
    </div>
    </>
  )
}

export default Slider