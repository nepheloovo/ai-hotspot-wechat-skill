type DemoBarProps = {
  visible: boolean
  label: string
  onSkip: () => void
}

export default function DemoBar({ visible, label, onSkip }: DemoBarProps) {
  if (!visible) return null
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-2xl">
      <span className="text-sm text-white/80 font-instrument-sans whitespace-nowrap">
        {label}
      </span>
      <button
        type="button"
        onClick={onSkip}
        className="min-h-[36px] px-4 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/10 transition-colors font-instrument-sans"
      >
        跳过
      </button>
    </div>
  )
}
