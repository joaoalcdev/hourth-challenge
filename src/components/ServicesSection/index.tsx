/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function ServicesSection() {
  return (
    <>
      {/* <svg
        className="mr-3 lg:w-[8%] w-[6%] sm:w-[6%] h-auto text-blue-500 block"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="500"
        width="500"
        viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
      </svg> */}
      <section className="relative pt-12 bg-white">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="img bg" className="max-w-full rounded-lg" src="" />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-stretch">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[8%] w-[7%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Suporte no e-mail e whatsapp para dúvidas
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-stretch">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[9.5%] w-[9.8%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Economize muito mais com o seu processamento de pedidos.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[9%] w-[9.4%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Processamento automático no shopify c/ código de rastreio
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-stretch">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[8%] w-[6.5%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Pedidos ilimitados
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-stretch">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[8%] w-[6.2%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Integração com Shopify
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-stretch">
                    <div className="flex flex-row justify-items-center items-stretch content-center justify-self-center	justify-start place-content-center place-items-center	place-self-center	my-auto">
                      <svg
                        className="mr-3 lg:w-[8%] w-[6.5%] sm:w-[6%] h-auto text-blue-500 flex my-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="500"
                        width="500"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                        </path>
                      </svg>
                      <h4 className="font-light text-xl text-blueGray-500 flex flex-row text-left justify-items-center items-center">
                        Pedidos de origem nacional e internacional
                      </h4>
                    </div>
                  </div>
                  <div className="px-11 pt-8 justify-center items-center justify-items-center">
                    <p className="font-light text-justify pb-8">
                      Obs: Necessário possuir proxy e números de telefone para fazer a criação de contas para o processamento de pedidos. Ferramenta possui tutoriais de instalação e indicações de fornecedores de proxy, números e e-mails.
                    </p>
                    <Link href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0#TNibVteCcw9sv4Bfk2leOpVaiDJ1Hsir">
                      <a className="flex justify-center items-center justify-items-center text-center w-full mt-6 px-4 py-4 rounded-full tracking-wide bg-gradient-to-b bg-[#e5ac0e] text-white outline-none focus:outline-none hover:shadow-lg hover:from-[#f8b601] transition duration-200 ease-in-out font-[700]">
                        QUERO AUMENTAR MEU FATURAMENTO
                      </a>
                    </Link>
                    <p className="font-light text-[0.7rem] text-center pt-4">
                      *Não somos responsáveis pelos <br /> bloqueios de contas dos usuários
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}