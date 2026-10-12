import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Hls from 'hls.js'
import { ArrowRight } from 'lucide-react'

const REPO = 'https://github.com/nepheloovo/ai-hotspot-wechat-skill'
const VIDEO_SRC =
  'https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8'
const POSTER =
  'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080'

type HeroProps = {
  onSeeExamples: () => void
}

export default function Hero({ onSeeExamples }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(VIDEO_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      })
      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC
      const onMeta = () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      }
      video.addEventListener('loadedmetadata', onMeta)
      return () => video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [])

  const t = (delay: number, duration: number) =>
    reduce ? { duration: 0.01, delay: 0 } : { delay, duration }

  return (
    <section
      id="top"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        muted
        loop
        playsInline
        poster={POSTER}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-20 px-6 pb-24 space-y-12 min-h-screen justify-center">
        <motion.p
          className="font-instrument-serif text-3xl sm:text-5xl lg:text-[48px] leading-[1.1] text-white"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0, 0.6)}
        >
          Design at the speed of thought
        </motion.p>

        <motion.h1
          className="font-instrument-sans font-semibold text-6xl sm:text-8xl lg:text-[136px] leading-[0.9] tracking-tighter bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text text-transparent"
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={t(0.2, 0.6)}
        >
          Build Faster
        </motion.h1>

        <motion.p
          className="font-instrument-sans text-lg sm:text-[20px] leading-[1.65] text-white max-w-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={t(0.4, 0.6)}
        >
          Create fully functional, SEO-optimized websites in seconds with our
          advanced AI engine.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.6, 0.5)}
        >
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all min-h-[44px]"
          >
            <span className="font-medium text-lg font-instrument-sans text-[#0a0400] mr-3">
              Start Building Free
            </span>
            <span className="w-10 h-10 rounded-full bg-[#3054ff] group-hover:bg-[#2040e0] flex items-center justify-center transition-colors">
              <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
          </a>

          <button
            type="button"
            onClick={onSeeExamples}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white backdrop-blur-sm hover:bg-white/5 transition-all font-instrument-sans min-h-[44px]"
          >
            See Examples
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
