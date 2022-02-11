/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '../Navbar/index'
import { VideoSection } from '../VideoSection/index'


export function HomeSection() {
  return (
    <>
      <div>
        <Image src="/assets/bg_top.jpg" layout="fill" className="bg-cover bg-no-repeat bg-center xl:object-cover lg:object-cover md:object-cover sm:object-fill h-full w-full z-[-1]" />

        <Navbar />

        <div className="min-h-screen min-w-full flex flex-col justify-center mt-[-5%]">
          <div className="relative w-full max-w-screen lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            {/* <div className="relative bg-white shadow-lg sm:rounded-3xl">
          </div> */}
            <div className="flex items-center justify-start pt-0 pl-6">
              <div className="px-3 py-6">
                <div className="lg:w-4/6 xl:w-2/4 mt-4 lg:mt-4 lg:ml-4 text-left">
                  <div className="text-6xl font-semibold text-gray-900 leading-none text-[250%]">
                    Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
                  </div>
                  <div className="mt-6 mb-8 text-xl font-light text-true-gray-500 antialiased text-[120%]">
                    Economize no pagamento dos seus produtos e potencialize seu lucro com a ferramenta mais poderosa de processamento de pedidos do mercado.
                  </div>
                  <Link passHref href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                    <a className="w-9/12 mt-6 px-8 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700]">
                      QUERO LUCRAR MAIS
                    </a>
                  </Link>
                </div>
                {/* <div className="mt-12 lg:mt-20 lg:ml-20 text-left">
                asd
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <VideoSection />
      </div>
    </>
  )
}