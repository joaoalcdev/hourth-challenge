/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function Benefits() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center mb-24 mt-24 px-8">
        <h1 className="text-5xl w-full text-center font-normal pb-24">Vantagens do <span className="text-[#0d82ff] font-bold">Droplinkfy</span></h1>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <img src="" alt="img 01" className="justify-center" />
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center">
              MAIS RAPIDEZ EM SEU PROCESSAMENTO
            </h4>
            <h5 className="text-lg font-normal py-2 text-center">
              Chega de processar pedidos manualmente em plataformas que não possuem integração. Com a Droplinkfy você pode processar até 60 pedidos por minuto com apenas um clique.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <img src="" alt="img 02" className="justify-center" />
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center">
              PAGUE MENOS EM SEUS PRODUTOS
            </h4>
            <h5 className="text-lg font-normal py-2 text-center">
              Produtos com fornecedores nacionais e internacionais com preços até 70% mais baratos do que o aliexpress.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <img src="" alt="img 03" className="justify-center" />
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center">
              CRIAÇÃO DE CONTAS COM ÚNICO CLIQUE
            </h4>
            <h5 className="text-lg font-normal py-2 text-center">
              Crie várias contas com apenas um clique. Rápido e prático. Necessário ter números virtuais e e-mails para criação das contas.
            </h5>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <div className="p-8 items-stretch rounded-xl justify-center">
            <img src="" alt="img 04" className="justify-center" />
            <h4 className="font-bold text-[#0d82ff] text-2xl text-center">
              TUDO AUTOMATIZADO
            </h4>
            <h5 className="text-lg font-normal py-2 text-center">
              Trabalhando dentro das políticas da ferramenta, nosso robô consegue automatizar todo o processo de criação de contas, processamento de pedidos e inclusão de códigos de rastreio no shopify.
            </h5>
          </div>
        </div>
        <button className="flex justify-center sm:w-2/3 lg:w-1/3 mt-2 px-8 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700]">
          QUERO LUCRAR MAIS
        </button>
      </div>
    </>
  )
}