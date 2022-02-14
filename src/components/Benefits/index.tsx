/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export function Benefits() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center pt-[-40rem] px-4 mb-16 sm:px-16 md:px-[5rem] lg:px-[11.75rem]">
        <h1 className="text-5xl w-full text-center font-normal pb-8 font-dosis">
          Vantagens do <span className="text-[#0d82ff] font-bold">Droplinkfy</span>
        </h1>

        <div className="w-1/2 md:w-full flex flex-col justify-items-center">
          <Image
            src="/assets/1.png"
            height="150"
            width="150"
            className="max-w-[100px] bg-no-repeat bg-center object-center xl:object-contain lg:object-contain md:object-contain sm:object-contain"
          />
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <div className="pb-6 w-full flex flex-col justify-items-center items-center">
              <Image
                src="/assets/2.png"
                height="150"
                width="150"
                className="bg-gray-100 rounded-[100%] max-w-[100px] bg-no-repeat bg-center object-center xl:object-contain lg:object-contain md:object-contain sm:object-contain"
              />
            </div>
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center font-dosis">
              MAIS RAPIDEZ EM SEU PROCESSAMENTO
            </h4>
            <h5 className="text-lg font-normal py-2 text-center font-open-sans">
              Chega de processar pedidos manualmente em plataformas que não possuem integração. Com a Droplinkfy você pode processar até 60 pedidos por minuto com apenas um clique.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <div className="pb-6 w-full flex flex-col justify-items-center items-center">
              <Image
                src="/assets/3.png"
                height="150"
                width="150"
                className="bg-gray-100 rounded-[100%] max-w-[100px] bg-no-repeat bg-center object-center xl:object-contain lg:object-contain md:object-contain sm:object-contain"
              />
            </div>
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center font-dosis">
              PAGUE MENOS EM SEUS PRODUTOS
            </h4>
            <h5 className="text-lg font-normal py-2 text-center font-open-sans">
              Produtos com fornecedores nacionais e internacionais com preços até 70% mais baratos do que o aliexpress.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <div className="pb-6 w-full flex flex-col justify-items-center items-center">
              <Image
                src="/assets/4.png"
                height="150"
                width="150"
                className="bg-gray-100 rounded-[100%] max-w-[100px] bg-no-repeat bg-center object-center xl:object-contain lg:object-contain md:object-contain sm:object-contain"
              />
            </div>
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center font-dosis">
              CRIAÇÃO DE CONTAS COM ÚNICO CLIQUE
            </h4>
            <h5 className="text-lg font-normal py-2 text-center font-open-sans">
              Crie várias contas com apenas um clique. Rápido e prático. Necessário ter números virtuais e e-mails para criação das contas.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <div className="pb-6 w-full flex flex-col justify-items-center items-center">
              <Image
                src="/assets/5.png"
                height="150"
                width="150"
                className="bg-gray-100 rounded-[100%] max-w-[100px] bg-no-repeat bg-center object-center xl:object-contain lg:object-contain md:object-contain sm:object-contain"
              />
            </div>
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center font-dosis">
              TUDO AUTOMATIZADO
            </h4>
            <h5 className="text-lg font-normal py-2 text-center font-open-sans">
              Trabalhando dentro das políticas da ferramenta, nosso robô consegue automatizar todo o processo de criação de contas, processamento de pedidos e inclusão de códigos de rastreio no shopify.
            </h5>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-0 w-full mx-auto px-12 sm:px-32 md:px-[30%] lg:px-[]">
          <Link
            passHref
            href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
            <a className="text-lg mx-auto flex justify-center items-center justify-items-center text-center w-full mt-0 px-4 px-auto py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700] font-open-sans">
              QUERO LUCRAR MAIS
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}