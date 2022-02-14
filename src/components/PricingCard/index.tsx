/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { SvgCheckList } from '../SvgCheckList'
import { SvgWhatsApp } from '../SvgWhatsapp/index'


export function PricingCard() {
  const checklist = ['Aumente seu lucro em até 3x', 'Processamento de pedidos ilimitados', 'Criação de contas com apenas 1 clique', 'Processamento automático no shopify c/ código de rastreio']


  return (
    <>
      <div className="mx-auto container flex flex-col justify-center content-center justify-items-center items-center w-full">
        <h1
          className="text-5xl justify-center items-center justify-items-center w-full text-center font-normal pb-6 px-4 font-dosis mx-auto">
          Confira nosso <span className="text-[#0050c7] font-bold">plano</span>
        </h1>
        <div className="w-ful sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-8 mx-auto rounded-xl shadow-xl border border-[#e9e9e9]">
            <h4
              className="text-center font-dosis">
              Obtenha acesso completo a todas as nossas funcionalidades
            </h4>
            <h4
              className="text-center font-bold text-3xl pt-4 pb-1 font-dosis">
              14 dias de teste grátis.
            </h4>
            <h5 className="text-4xl sm:text-5xl py-2 text-[#0050c7] text-center font-bold font-dosis">
              Após <br /> R$387/mês
            </h5>
            <p
              className="font-extralight text-center w-full font-dosis">
              + 3% pelo valor faturado
            </p>
            <p
              className="font-extralight text-center w-full font-dosis">
              *valor cobrado apenas por pedidos processados pela ferramenta.
            </p>
            {checklist.map((text, index) => (<div
              key={index}
              className="my-4 flex flex-col text-base items-center">
              <p
                className="flex items-center w-full my-1 font-thin text-lg py-1 font-dosis">
                <SvgCheckList />
                {text}
              </p>
            </div>))}
            <p
              className="text-sm font-extralight text-left w-full pt-6 bottom-0 font-dosis">
              *cupons de frete grátis não são aplicados em 100% dos pedidos processados
            </p>
          </div>
        </div>
        <div className="w-full px-11 justify-center items-center justify-items-center">
          <div className="flex flex-col items-center justify-center mt-2">
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
            <div className="flex flex-col items-center justify-center mt-0 w-full mx-auto px-4 sm:px-32 md:px-[30%] lg:px-[]">
              <Link
                passHref
                href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                <a className="text-lg mx-auto flex justify-center items-center justify-items-center text-center w-full mt-6 px-4 px-auto py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700] font-open-sans">
                  ACESSAR AGORA
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}