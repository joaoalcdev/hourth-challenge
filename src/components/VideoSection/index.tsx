/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export function VideoSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pb-6">
        <h3 className="mb-8 font-[300] text-[210%] text-center">
          Assista o vídeo até o final e veja <span className="text-[#0d82ff] font-bold">Como Funciona</span>
        </h3>
        <div className="bg-indigo-100 text-white font-bold rounded-lg border p-1 h-4/5 lg:w-9/12 sm:w-1/2">
          <iframe
            className="w-full h-full p-2 rounded-lg"
            src="https://www.youtube.com/embed/wYc5h8gsg2k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </>
  )
}