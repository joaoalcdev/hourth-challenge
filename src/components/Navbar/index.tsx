/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { SvgWhatsApp } from '../SvgWhatsapp/index'

export function Navbar() {
  return (
    <>
      <nav className="items-center justify-center z-20">
        <div className="max-w-full px-8 sm:px-2 md:px-8 lg:px-8">
          <div className="relative flex items-center justify-between h-32">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-center">
                <SvgWhatsApp />
                <Link passHref href="https://api.whatsapp.com/send?phone=5511945316242&text=Oii%2C%20%C3%A9%20sobre%20o%20Droplinkfy%2C%20voc%C3%AA%20consegue%20me%20ajudar%3F">
                  <a className=" text-[#5d92ff] pl-3 py-2 rounded-md text-md font-light font-open-sans" aria-current="page">
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
              <Link passHref
                href="https://www.custream.com/d7246215-e4bc-46d5-ba26-d8a4d78c54e0/button/Qm60mHJQUnBlaZz6vAJV9SQUcT3BozKz">
                <a className="flex relative w-full px-4 py-2 mx-auto text-center rounded-full text-white font-bold hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white sm:block bg-gradient-to-t from-[#20c2cb] to-[#33e574] hover:from-[#84e2ca] hover:to-[#7dd69e] font-open-sans">
                  Fazer Login
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="sm:hidden" id="mobile-menu"></div> */}
      </nav>
    </>
  )
}