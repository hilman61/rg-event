'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-5" />
        <div className="absolute inset-0 bg-[url('/event6.jpeg')] bg-cover bg-center bg-fixed opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
              Kreativitas Tanpa Batas
            </span>
            <br />
            <span className="text-white">Bikin Eventmu Makin Seru</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 text-balance max-w-2xl mx-auto">
            Solusi Acara yang Lengkap dan Profesional dengan RG Event Production
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              KONSULTASI GRATIS
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
              LIHAT PORTOFOLIO
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
