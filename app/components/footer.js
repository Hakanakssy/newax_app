import React from 'react'
import Image from 'next/image';
import logo from "../../public/Images/newax_black.png";


const Footer = () => {
    const footerNavs = [
        {
            href: './',
            name: 'Anasayfa'
        },
        {
            href: './hakkimizda',
            name: 'Hakkımızda'
        },
        {
            href: './ekatalog',
            name: 'E-Katalog'
        },
        {
            href: './iletisim',
            name: 'İletişim'
        }
    ]
    return (
        <footer className="pt-10">
            <div className="max-w-full mx-auto px-4 text-gray-600 md:px-8">
                <div className="justify-center sm:flex">
                    <div className="md:grid grid-cols-1 space-y-6 lg:grid grid-cols-5 space-x-6  ">
                        <Image src={logo} className="w-32" />
                        <p className="max-w-full col-span-3 lg:justify-self-center">
                            Estetik ve Dayanıklılığın Mükemmel Buluşması: Newax, Evlerinize Özel Dokunuşlar Yaratır!
                        </p>
                        <ul className="flex flex-wrap  gap-4 text-sm sm:text-base">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500 duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                </div>
                <div className="mt-10 py-10 border-t md:text-center">
                    <p>© 2024 Newax Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer