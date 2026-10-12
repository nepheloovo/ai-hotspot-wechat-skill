import { ChevronDown } from 'lucide-react'

const REPO = 'https://github.com/nepheloovo/ai-hotspot-wechat-skill'

function SunburstIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" fill="white" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="11"
          y="1.5"
          width="2"
          height="5"
          rx="1"
          fill="white"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent px-6 py-4 flex items-center justify-between">
      <a href="#top" className="flex items-center" aria-label="Home">
        <SunburstIcon />
      </a>

      <div className="hidden md:flex items-center gap-8 font-instrument-sans text-sm font-medium text-white/80">
        <a href="#products" className="hover:text-white inline-flex items-center gap-1 transition-colors">
          Products
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </a>
        <a href="#who" className="hover:text-white transition-colors">
          Customer Stories
        </a>
        <a href="#steps" className="hover:text-white transition-colors">
          Resources
        </a>
        <a href="#install" className="hover:text-white transition-colors">
          Pricing
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block font-instrument-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Book A Demo
        </a>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black rounded-full px-5 py-2.5 font-semibold font-instrument-sans text-sm hover:scale-105 transition-transform min-h-[44px] inline-flex items-center"
        >
          Get Started
        </a>
      </div>
    </nav>
  )
}
