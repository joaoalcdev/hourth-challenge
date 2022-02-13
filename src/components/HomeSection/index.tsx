/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '../Navbar/index'
import { VideoSection } from '../VideoSection/index'

export function HomeSection() {
  return (
    <>
      <div className="mx-4 sm:mx-16 md:mx-[11.75rem]">
        <Image src="/assets/bg_top.jpg" layout="fill" className="bg-cover bg-fixed bg-no-repeat bg-center object-fill md:object-cover z-[-1]" />
        <Navbar />
        <div className="min-h-screen min-w-full px-4 flex flex-col justify-center mt-[-20%] sm:mt-[-8%]">
          <div className="relative w-full max-w-screen lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div className="flex items-center text-center sm:text-justify justify-center md:justify-start pt-0">
              <div className="px-3 py-6">
                <div className="lg:w-4/6 xl:w-2/4 mt-4 lg:mt-4 lg:ml-4 text-lef">
                  <div className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-[2.5rem] font-dosis">
                    Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
                  </div>
                  <div className="mt-6 mb-8 text-2xl sm:text-2xl md:text-2xl font-light leading-none text-true-gray-500 antialiased text-[120%] font-open-sans">
                    Economize no pagamento dos seus produtos e potencialize seu lucro com a ferramenta mais poderosa de processamento de pedidos do mercado.
                  </div>
                  <div className="w-full">
                    <Link passHref href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                      <a className="flex text-center text-xl justify-center w-full mt-6 px-8 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700] font-open-sans">
                        QUERO LUCRAR MAIS
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
    </>
  )
}