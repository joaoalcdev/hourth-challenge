/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function Navbar() {
  return (
    <>
      <nav className="items-center justify-center">
        <div className="max-w-full px-20 sm:px-2 align-middle lg:px-8">
          <div className="relative flex items-center justify-between h-32">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-center">
                <Link href="https://api.whatsapp.com/send?phone=5511945316242&text=Oii%2C%20%C3%A9%20sobre%20o%20Droplinkfy%2C%20voc%C3%AA%20consegue%20me%20ajudar%3F">
                  <a className=" text-[#5d92ff] px-3 py-2 rounded-md text-sm font-light" aria-current="page">
                    Dúvidas? Fale conosco!
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-16 w-auto" src="https://images.assets-landingi.com/oimZ7w5z/drop_link_fy.png" alt="DropLinkFy" />
                <img className="hidden lg:block h-16 w-auto" src="https://images.assets-landingi.com/oimZ7w5z/drop_link_fy.png" alt="DropLinkFy" />
              </div>
            </div>
            <div className="inset-y-0 right-[0] flex items-center pr-0 sm:static sm:inset-auto sm:ml-0 sm:pr-5 sm:block">
              <button type="button" className="p-3 sm:mx-4 rounded-full text-white font-bold hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white sm:block bg-gradient-to-t from-[#20deaf] to-[#33e574] hover:from-[#64e4c4] hover:to-[#7dd69e]">
                Fazer Login
              </button>
            </div>
          </div>
        </div>
        {/* <div className="sm:hidden" id="mobile-menu"></div> */}
      </nav>
    </>
  )
}