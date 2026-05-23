'use client'

import Link from 'next/link'
// Impor ikon dari lucide-react
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
                  src="/rg3.jpeg" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="font-bold text-white">RG EVENT</span>
            </div>
            <p className="text-sm leading-relaxed">
              Solusi acara profesional untuk menciptakan pengalaman yang tak terlupakan.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/6281219198636" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/rgeventproduction?igsh=MWZtd3c4aGo1MHFrNQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a 
                // href="https://facebook.com/akun_fb_kamu" 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-all duration-300"
                aria-label="X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            {/* =========================================== */}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Layanan</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Portofolio</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Event Organizer</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Show Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Corporate Gathering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Team Building</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+6281219198636" className="hover:text-primary transition-colors">+62 812 191 98636</a></li>
              <li><a href="mailto:rgproduction23@gmail.com" className="hover:text-primary transition-colors">rgproduction23@gmail.com</a></li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} RG Event Production. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm hover:text-primary transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Syarat & Ketentuan</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}