import React from 'react'
import Image from "next/image";
import backgroundImage from "../../public/Images/about_bckg1.jpg";

const AboutUs = () => {
  return (
    <>
    <div className='grid grid-cols-1 justify-items-center'>
    <Image src={backgroundImage} className='w-5/6 '></Image>
    </div>
    <div className='grid grid-cols-1 justify-items-center m-5'>
        <h1 className='md: text-3xl m-0 mb-2 lg:text-6xl font-extrabold m-10 '>HAKKIMIZDA</h1>
        <h2 className='md: text-xl text-center lg:text-4xl font-light mb-5'>Newax: Estetik ve Dayanıklılığın Buluştuğu Evler</h2>
        <div  className='md:w-full lg:w-3/6 text-xl '>
        <span>Newax, evlerinizi sadece bir yaşam alanı olmaktan çıkarıp, estetik ve dayanıklılığı bir araya getirerek özel bir atmosfere dönüştürüyor. İnovatif tasarımlarımız ve kaliteli ürünlerimizle evlerinizi daha konforlu ve göz alıcı kılarken, çevre dostu yaklaşımımızla da gelecek nesillere sorumluluk bilinci aşılamayı hedefliyoruz.

Estetik ve Fonksiyonellik:
Her bir ürünümüz, estetik ve fonksiyonelliği özenle bir araya getirerek evlerinize özgü bir dokunuş katmayı amaçlar. Newax ürünleri, evinizi kişiselleştirmenin ve tarzınızı yansıtmanın mükemmel bir yolu olarak öne çıkar.

Dayanıklılık ve Güvenilirlik:
Sağlam malzemeler ve özenli üretim süreçleriyle Newax ürünleri, uzun ömürlü kullanım ve güvenilirlik sunar. Evlerinizde kalıcı izler bırakarak, güvenle kullanabileceğiniz ürünler tasarlıyoruz.

Çevre Dostu Taahhüt:
Sadece evlerinizi güzelleştirmekle kalmayıp, çevresel sorumluluklarımızı da yerine getiriyoruz. Çevre dostu malzemelerle üretim yaparak, doğanın korunmasına katkı sağlıyor ve sürdürülebilir bir gelecek için taahhütte bulunuyoruz.

Müşteri Memnuniyeti:
Newax olarak, müşteri memnuniyetini en üst düzeyde tutuyoruz. Uzman ekibimiz, size en iyi hizmeti sunmak, ihtiyaçlarınıza çözüm bulmak ve sorularınıza hızlı ve etkili cevaplar vermek için sürekli çalışıyor.

Evlerinizi estetik ve dayanıklılıkla buluşturarak, yaşam alanlarınızda kalıcı izler bırakmanıza yardımcı olmak için buradayız. Newax ile evinizdeki özel atmosferi keşfedin, yaşamınıza değer katın!

Newax - Estetik ve Dayanıklılığın Buluştuğu Adres!</span>
        </div>
    </div>
    </>
  )
}

export default AboutUs