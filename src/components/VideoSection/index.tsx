/* eslint-disable @next/next/no-img-element */
import React from 'react'

export function VideoSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pb-6 pt-[-12rem] px-2">
        <h3 className="mb-8 font-[300] text-[270%] text-center font-dosis">
          Assista o vídeo até o final e veja <span className="text-[#0d82ff] font-bold">Como Funciona</span>
        </h3>
        <div className="aspect-auto flex bg-indigo-100 text-white font-bold rounded-lg border p-1 h-3/5 w-[90%] md:w-10/12">
          <iframe
            className="flex min-w-[4rem] min-h-[8rem] w-full h-full p-2 rounded-lg aspect-video"
            src="https://www.youtube.com/embed/wYc5h8gsg2k"
            title="Mais lucro em sua loja de dropshipping"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </>
  )
}