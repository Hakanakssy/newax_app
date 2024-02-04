import Image from 'next/image'
import React from 'react'
import cozze from "../../public/Images/cozze.jpg";
import piazza from "../../public/Images/piazza.jpg";
import luce from "../../public/Images/luce.jpg";


const HalfImage = () => {
  return (
    <>
    <div >
    <div className='container-fluid grid lg:grid-cols-2 md:grid-cols-1 gap-4 '>
        <div className="w-1/2 h-1/2 m-12 lg:justify-self-end md:justify-self-center m-2 px-1.5 w-auto md: order-2 lg:order-none">
            <Image src={cozze}></Image>
        </div>
        <div className="w-1/2 px-6 m-12 justify-self-start self-center md:justify-self-center m-2 px-1.5 w-auto md: order-1 lg:order-none">
          <h1 className="mt-12 text-4xl font-thin">Teknolojik İnovasyon ve</h1>
          <h1 className="mb-6 text-4xl font-bold"> Kalite Standartları</h1>
          <span>Newax olarak, ürünlerimizi tasarlarken en son teknolojiyi kullanıyor ve kalite standartlarına büyük önem veriyoruz. Her bir ürünümüz, uzun ömürlü kullanım ve güçlü dayanıklılık sağlamak amacıyla özenle üretilir. Yenilikçi tasarımlarımız, evinize modern bir dokunuş katarken aynı zamanda pratik kullanım sunar.</span>
        </div>
        <div className="w-1/2 px-6 m-12 justify-self-end self-center md:justify-self-center m-2 px-1.5 w-auto md: order-3 lg:order-none">
          <h1 className="mt-12 text-4xl font-thin">Geniş </h1>
          <h1 className="mb-6 text-4xl font-bold">Ürün Yelpazesi</h1>
          <span>Newax, evinizi düzenlemenin ve güzelleştirmenin birçok yoluyla size hizmet sunar. Çeşitli stillerde ve renklerde tasarlanmış ev eşyalarımız, her zevke uygun seçenekleri içerir. Çekmecelerimiz ve dolaplarımız, eşyalarınızı düzenlemenin şık ve pratik bir yolunu sunarken, askılıklarımız evinizdeki giyim düzeninizi mükemmel bir şekilde tamamlar.</span>
        </div>
        <div className="w-1/2 h-1/2 m-12 justify-self-start md:justify-self-center m-2 px-1.5 w-auto md: order-4 lg:order-none">
            <Image src={piazza}></Image>
        </div>
        <div className="w-1/2 h-1/2 m-12 justify-self-end md:justify-self-center m-2 px-1.5 w-auto md: order-6 lg:order-none">
            <Image src={luce}></Image>
        </div>
          <div className="w-1/2 px-6 m-12 justify-self-start self-center md:justify-self-center m-2 px-1.5 w-auto md: order-5 lg:order-none">
          <h1 className="mt-12 text-4xl font-thin">Müşteri Memnuniyeti</h1>
          <h1 className="mb-6 text-4xl font-bold"> Odaklı Hizmet</h1>
          <span>Müşteri memnuniyeti, Newax&apos;ın öncelikli hedefidir. Uzman ekibimiz, size en iyi hizmeti sunmak için her zaman hazır ve nazırdır. Sorularınızı yanıtlamaktan, ürün seçiminde size rehberlik etmeye kadar, size mükemmel bir alışveriş deneyimi yaşatmak için buradayız.

Evlerinizi güzelleştirmenin ve düzenlemenin en iyi yolu için Newax&apos;a güvenebilirsiniz. Kalite, estetik ve dayanıklılıkla buluşan ürünlerimizle, evinizi daha yaşanabilir ve şık bir mekan haline getirin.</span>
        </div>
    </div>
    </div>
    </>
  )
}

export default HalfImage