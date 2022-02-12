/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export function Footer() {
  return (
    <>
      <div className="bg-[#E4FCFF]">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="my-1 flex flex-col md:flex-row md:justify-between items-center text-sm text-black">
            <p className="order-2 md:order-1 mt-8 md:mt-0">  Copyright &copy; Droplinkfy 2022 </p>
            <div className="order-1 md:order-2">
              <span className="px-2">E-mail: suporte@droplinkfy.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}