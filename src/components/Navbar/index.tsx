/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function Navbar() {
  return (
    <>
      <nav className="items-center justify-center z-20">
        <div className="max-w-full px-8 sm:px-2 align-middle lg:px-8">
          <div className="relative flex items-center justify-between h-32">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="36" height="36"
                  viewBox="0 0 24 24"
                  className="fill-[#5d92ff]"
                >
                  <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z">
                  </path>
                </svg>
                <Link passHref href="https://api.whatsapp.com/send?phone=5511945316242&text=Oii%2C%20%C3%A9%20sobre%20o%20Droplinkfy%2C%20voc%C3%AA%20consegue%20me%20ajudar%3F">
                  <a className=" text-[#5d92ff] px-3 py-2 rounded-md text-md font-light" aria-current="page">
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
                <a className="flex relative w-full px-4 py-2 mx-auto text-center rounded-full text-white font-bold hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white sm:block bg-gradient-to-t from-[#20c2cb] to-[#33e574] hover:from-[#84e2ca] hover:to-[#7dd69e]">
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