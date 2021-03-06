/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Footer } from '../Footer/index'
import { SvgCheckList } from '../SvgCheckList/index';


export function ServiceSection() {
  const checklist = ['Suporte no e-mail e whatsapp para dúvidas', 'Economize muito mais com o seu processamento de pedidos', 'Processamento automático no shopify c/ código de rastreio', 'Pedidos ilimitados', 'Integração com Shopify', 'Pedidos de origem nacional e internacional']

  return (
    <>
      <div className="relative h-full w-full">
        <Image src="/assets/bg_bottom.jpg" layout="fill" className="relative bottom-0 bg-fixed bg-cover bg-no-repeat min-w-[250px] min-h-[250px] max-h-auto max-w-auto z-[-1] bg-left object-cover sm:object-cover" />
        <div className="relative">
          <section className="pt-12">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <ul className="list-none mt-6">
                    {checklist.map((text, index) => (<li className="py-2"
                      key={index}
                    >
                      <div
                        className="flex items-stretch">
                        <div className="flex flex-col md:flex-row mx-auto md:mx-0 py-4 md:py-0 md:text-left md:justify-items-center md:items-center content-center justify-self-center justify-center place-content-center place-items-center	place-self-center">
                          <SvgCheckList />
                          <h4 className="pt-2 font-light text-xl text-blueGray-500 flex flex-col md:flex-row text-center md:text-left justify-items-center items-center font-open-sans">
                            {text}
                          </h4>
                        </div>
                      </div>
                    </li>))}
                    <li className="py-2">
                      <div className="px-11 pt-8 justify-center items-center justify-items-center">
                        <p className="font-light text-justify pb-8 font-open-sans">
                          Obs: Necessário possuir proxy e números de telefone para fazer a criação de contas para o processamento de pedidos. Ferramenta possui tutoriais de instalação e indicações de fornecedores de proxy, números e e-mails.
                        </p>
                        <p className="font-light text-[0.7rem] text-center pt-4 font-open-sans">
                          *Não somos responsáveis pelos <br /> bloqueios de contas dos usuários
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center mt-6 w-full">
                        <div className="w-10/12">
                          <Link
                            passHref
                            href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                            <a className="text-lg mx-auto flex justify-center items-center justify-items-center text-center w-full mt-6 px-4 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700] font-open-sans">
                              QUERO AUMENTAR MEU FATURAMENTO
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}