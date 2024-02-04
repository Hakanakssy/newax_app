import React from 'react'
import '../globals.css'
import shield from "../../public/Images/shield.png"
import guarantee from "../../public/Images/guarantee.png"
import search from "../../public/Images/search.png"
import design from "../../public/Images/design.png"
import Image from 'next/image'

const Presentation = () => {
  return (
    <>
    <div className="md:grid grid-cols-1 gap-0 mt-0 lg:grid grid-cols-5 gap-4 mt-36 "  >
    <div className="md:justify-self-center col-span-1 m-4 lg:w-2/3 justify-self-end col-span-2 " >
    <h1 className="text-5xl font-bold"> Newax </h1>
    <h1 className="mb-2 text-2xl font-light"> Evleri Dönüştüren Estetik ve Fonksiyonellik</h1>
     <span>Hoş geldiniz! Newax, evlerinizi güzelleştirmek ve daha fonksiyonel hale getirmek için özenle tasarlanmış ev eşyaları üreten bir şirkettir. Yenilikçi çözümlerimiz, kalite standartlarımız ve müşteri memnuniyeti odaklı hizmet anlayışımızla, yaşam alanlarınızı daha özel ve işlevsel kılmak için buradayız.</span>
    </div>
    <div className="md:grid grid-cols-1 col-span-1 m-4 lg:grid grid-cols-2 gap-8 col-span-3 w-5/6 " >
    <div className='grid grid-cols-3 mt-3' >
        <Image className='w-1/2 justify-self-center self-center ' src={shield}></Image>
        <div  className='col-span-2'>
          <h1 className="mb-2 text-xl font-light">Sağlamlık ve <span className="text-xl font-bold">Dayanıklılık</span> </h1>
          <span>Newax, ürünlerinde sağlamlık ve dayanıklılığı ön planda tutarak uzun ömürlü kullanım sağlar.</span>
        </div>
    </div>
    <div className='grid grid-cols-3 mt-3' >
        <Image className='w-1/2 justify-self-center self-center ' src={design}></Image>
        <div className='col-span-2'>
          <h1 className="mb-2 text-xl font-light">Estetik ve <span className="text-xl font-bold">İnovasyon</span></h1>
          <span>Newax ürünleri, estetik ve fonksiyonelliği birleştirerek evinize özel dokunuşlar sunar, kişiselleştirmenin ve tarzınızı yansıtmanın ideal yolunu sağlar.</span>
        </div>
    </div>
    <div className='grid grid-cols-3 mt-3' >
        <Image className='w-1/2 justify-self-center self-center ' src={guarantee}></Image>
        <div className='col-span-2'>
          <h1 className="mb-2 text-xl font-light">İlkemiz <span className="text-xl font-bold">Müşteri Memnuniyeti</span></h1>
          <span>Müşteri memnuniyeti öncelikli; uzman ekibimiz en iyi hizmeti sunar, sorularınıza cevap verir, mükemmel alışveriş deneyimi yaşatırız.</span>
        </div>
    </div>
    <div className='grid grid-cols-3 mt-3' >
        <Image className='w-1/2 justify-self-center self-center ' src={search}></Image>
        <div className='col-span-2'>
          <h1 className="mb-2 text-xl font-light">Newax ile Yaşam Alanlarınızı <span className="text-xl font-bold">Yeniden Keşfedin</span></h1>
          <span>Newax, özel ve yaşanabilir evler için estetik, fonksiyonellik ve kaliteyi birleştirerek, yaşam alanlarınızı yeniden keşfetmenizi sağlar.</span>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Presentation