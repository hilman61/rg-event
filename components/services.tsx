'use client'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'EVENT ORGANIZER',
      description: 'Kelola acara Anda dengan konsep kreatif dan profesional',
      // Mengganti emoji dengan path ke gambar
      image: '/event1.jpeg', 
    },
    {
      id: 2,
      title: 'SHOW MANAGEMENT',
      description: 'Manajemen pertunjukan dengan standar internasional',
      image: '/event2.jpeg',
    },
    {
      id: 3,
      title: 'CORPORATE GATHERING',
      description: 'Acara gathering korporat yang berkesan dan produktif',
      image: '/event3.jpeg',
    },
    {
      id: 4,
      title: 'TEAM BUILDING',
      description: 'Program team building untuk meningkatkan kohesi tim',
      image: '/event4.jpeg',
    },
    {
      id: 5,
      title: 'EVENT ORGANIZER',
      description: 'Kelola acara Anda dengan konsep kreatif dan profesional',
      image: '/event5.jpeg',
    },
    {
      id: 6,
      title: 'EXHIBITION & EXPO',
      description: 'Pameran dan expo dengan konsep modern dan menarik',
      image: '/event7.jpeg',
    }
  ]

  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10" />
        {/* Gambar background dengan bg-fixed */}
        <div className="absolute inset-0 bg-[url('/event6.jpeg')] bg-cover bg-center bg-fixed opacity-99" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Berbagai layanan profesional untuk memenuhi kebutuhan event Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-white/10 to-white/0 border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Menambahkan Gambar di Sini */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-md mb-6" // Sesuaikan ukuran dan style gambar
              />
              
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            JELAJAHI SEMUA LAYANAN
          </button>
        </div> */}
      </div>
    </section>
  )
}