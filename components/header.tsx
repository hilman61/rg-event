'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img 
                src="/rg3.jpeg" 
                alt="Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="hidden md:inline font-bold text-lg text-foreground">RG EVENT PRODUCTION</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              BERANDA
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              TENTANG KAMI
            </Link>
            <Link href="#services" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              LAYANAN
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              PORTOFOLIO
            </Link>
          </nav>

          {/* CTA Button */}
          <button 
          onClick={() => window.open("https://wa.me/6281219198636", "_blank")}
          className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
            KONSULTASI
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#home" className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground">
              BERANDA
            </Link>
            <Link href="#about" className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground">
              TENTANG KAMI
            </Link>
            <Link href="#services" className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground">
              LAYANAN
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground">
              PORTOFOLIO
            </Link>
            <button 
              onClick={() => window.open("https://wa.me/6281219198636", "_blank")}
              className="w-full mt-4 px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              KONSULTASI
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
