import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function Header() {
  return (
    <>
      <div className="min-h-screen min-w-full bg-white flex flex-col justify-center">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          {/* <div className="relative bg-white shadow-lg sm:rounded-3xl">
          </div> */}
            <div className="flex items-center justify-start pt-6 pl-6">
          <div className="px-16 py-6">
            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
              <div className="text-6xl font-semibold text-gray-900 leading-none">
                Tenha até 3x mais lucro em sua operação de dropshipping. Processando pedidos fora do aliexpress.
              </div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                Economize no pagamento dos seus produtos e potencialize seu lucro com a ferramenta mais poderosa de processamento de pedidos do mercado.
              </div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                  QUERO LUCRAR MAIS
                </button>
              </div>
              <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
                  {/* <bottom type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </bottom> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}