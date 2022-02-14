/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '../Navbar/index'
import { VideoSection } from '../VideoSection/index'
import { SvgWhatsApp } from '../SvgWhatsapp/index'

export function HomeSection() {
  return (
    <>
      <div className="mt-[-1rem] sm:mt-0 mx-2 sm:mx-16 md:mx-[5rem] lg:mx-[11.75rem]">
        <Image src="/assets/bg_top.jpg" layout="fill" className="relative bg-cover bg-fixed bg-no-repeat bg-center object-cover sm:object-cover z-[-1]" />
        <Navbar />
        <div className="min-h-screen min-w-full px-2 flex flex-col justify-center mt-[-3rem] sm:mt-[-0.5rem]">
          <div className="relative w-full max-w-screen lg:max-w-6xl xl:max-w-screen-2xl mx-auto mb-[-5%] sm:mb-0">
            <div className="flex items-center text-center sm:text-justify justify-center md:justify-start pt-0">
              <div className="px-3 py-6">
                <div className="lg:w-4/6 xl:w-2/4 mt-4 lg:mt-4 lg:ml-4 text-lef">
                  <div className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl font-dosis">
                    Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
                  </div>
                  <div className="mt-6 px-2 mb-8 text-2xl sm:text-2xl md:text-2xl font-light leading-none text-true-gray-500 antialiased font-open-sans">
                    Economize no pagamento dos seus produtos e potencialize seu lucro com a ferramenta mais poderosa de processamento de pedidos do mercado.
                  </div>
                  <div className="w-full">
                    <div className="justify-center items-center justify-items-center">
                      <Link
                        passHref
                        href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                        <a className="text-xl sm:text-2xl mx-auto flex justify-center items-center justify-items-center text-center w-full mt-6 px-4 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700] font-open-sans">
                          QUERO LUCRAR MAIS
                        </a>
                      </Link>
                    </div>
                    <div className="sm:invisible visible flex items-center justify-center mt-6">
                      <SvgWhatsApp />
                      <Link
                        passHref
                        href="https://api.whatsapp.com/send?phone=5511945316242&text=Oii%2C%20%C3%A9%20sobre%20o%20Droplinkfy%2C%20voc%C3%AA%20consegue%20me%20ajudar%3F">
                        <a
                          className=" text-[#5d92ff] px-3 rounded-md text-lg font-light font-open-sans"
                          aria-current="page">
                          Dúvidas? Fale conosco!
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VideoSection />
        </div>
      </div>
    </>
  )
}