'use client'
import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  

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
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section id="portofolio" className="relative w-full h-[60vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-1" />
      </div>
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 bg-black/60 hover:bg-black/85 text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 backdrop-blur-md transition-all active:scale-95"
      >
        {isMuted ? (
          <>
            <span>🔇</span> UNMUTE AUDIO
          </>
        ) : (
          <>
            <span>🔊</span> MUTE AUDIO
          </>
        )}
      </button>
    </section>
  )
}