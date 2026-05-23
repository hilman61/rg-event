'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null)
  

  const videoSrc = "/rgvidio.mp4"

  useEffect(() => {
    const videoElement = videoRef.current
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoElement) { 
          if (entry.isIntersecting) {
            videoElement.play().catch((err) => console.log("Autoplay blocked:", err))
          } else {
            videoElement.pause()
          }
        }
      },
      { threshold: 0.1 }
    )

    const currentSection = videoElement?.closest('section')
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection)
    }
  }, [])

  return (
    <section className="relative w-full h-[60vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-1" />
      </div>
    </section>
  )
}