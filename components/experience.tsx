'use client'

export default function Experience() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Menghadirkan Pengalaman Event Premium Tanpa Kompromi
            </h2>

            <p className="text-foreground/70 leading-relaxed text-lg">
              RG Event Production telah dipercaya menangani berbagai event prestisius berskala nasional hingga internasional, mulai dari simposium profesional, peluncuran produk premium, hingga malam penghargaan bergengsi.
            </p>

            <p className="text-foreground/70 leading-relaxed text-lg">
              Kami tidak hanya mengeksekusi, tetapi juga menciptakan konsep kreatif yang kuat dan berkelas. Tim kami berdedikasi untuk menghadirkan detail sempurna dan pengalaman yang tak terlupakan.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => window.open("https://wa.me/6281219198636", "_blank")}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                HUBUNGI KAMI
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="bg-black text-white rounded-lg p-8 border border-primary/20">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-3">150+</h3>
              <p className="text-gray-300 text-lg">Event Premium Berhasil</p>
            </div>

            <div className="bg-black text-white rounded-lg p-8 border border-primary/20">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-3">1000+</h3>
              <p className="text-gray-300 text-lg">Klien Puas dan Terpercaya</p>
            </div>

            <div className="bg-black text-white rounded-lg p-8 border border-primary/20">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-3">24/7</h3>
              <p className="text-gray-300 text-lg">Tim Support Selalu Siap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
