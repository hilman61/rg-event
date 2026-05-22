'use client'

export default function Contact() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mewujudkan Event Impianmu?</h2>
          <p className="text-gray-400 text-lg">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Jelaskan kebutuhan event Anda"
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
            ></textarea>
            <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              KIRIM PESAN
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">📍 Alamat</h3>
              <p className="text-gray-400 leading-relaxed">
                Jl. Industri Profesional No. 123<br />
                Jakarta, Indonesia 12345
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">📞 Telepon</h3>
              <p className="text-gray-400">
                +62 (123) 456-7890<br />
                +62 (123) 456-7891
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">📧 Email</h3>
              <p className="text-gray-400">
                info@rgeventproduction.com<br />
                contact@rgeventproduction.com
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-primary">⏰ Jam Operasional</h3>
              <p className="text-gray-400">
                Senin - Jumat: 09:00 - 18:00<br />
                Sabtu: 10:00 - 16:00<br />
                Minggu: Tutup
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="p-3 bg-white/10 hover:bg-primary/20 rounded-lg transition-colors">
                <span className="text-xl">f</span>
              </button>
              <button className="p-3 bg-white/10 hover:bg-primary/20 rounded-lg transition-colors">
                <span className="text-xl">ig</span>
              </button>
              <button className="p-3 bg-white/10 hover:bg-primary/20 rounded-lg transition-colors">
                <span className="text-xl">🔗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
