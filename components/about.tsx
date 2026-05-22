'use client'

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Profesional Event Organizer Service
            </h2>

            <p className="text-foreground/70 leading-relaxed text-lg">
              RG Event Production adalah perusahaan penyelenggara acara yang berbasis di Indonesia, yang menawarkan layanan profesional dalam merancang, mengatur, dan mengelola berbagai jenis acara, baik untuk keperluan pribadi maupun perusahaan.
            </p>

            <p className="text-foreground/70 leading-relaxed text-lg">
              Dengan tim yang berpengalaman, RG Event Production berkomitmen untuk memberikan pengalaman acara yang tak terlupakan melalui konsep yang kreatif, perhatian terhadap detail, serta koordinasi yang efisien dari awal hingga akhir acara.
            </p>

            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors mt-6">
              TENTANG KAMI
            </button>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">100+</h3>
              <p className="text-foreground/70 text-lg font-medium">Event Berhasil Diselenggarakan</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">10</h3>
              <p className="text-foreground/70 text-lg font-medium">Tahun Berpengalaman</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</h3>
              <p className="text-foreground/70 text-lg font-medium">Tim Profesional Berdedikasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
