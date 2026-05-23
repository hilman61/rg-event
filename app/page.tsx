'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Experience from '@/components/experience'
import Portofolio from '@/components/portofolio'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portofolio />
      <Footer />
    </main>
  )
}
