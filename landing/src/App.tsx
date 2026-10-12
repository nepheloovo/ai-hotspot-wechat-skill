import { useCallback, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSections from './components/ProductSections'
import DemoBar from './components/DemoBar'

function prefersReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function App() {
  const [demoOn, setDemoOn] = useState(false)
  const [demoLabel, setDemoLabel] = useState('演示中')
  const timers = useRef<number[]>([])

  const clearDemo = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
    setDemoOn(false)
    setDemoLabel('演示中')
  }, [])

  const startDemo = useCallback(() => {
    clearDemo()
    setDemoOn(true)
    const reduce = prefersReduced()
    const gap = reduce ? 400 : 1600
    const scrollOpt: ScrollIntoViewOptions = {
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    }

    const steps: Array<() => void> = [
      () => {
        document.getElementById('who')?.scrollIntoView(scrollOpt)
        setDemoLabel('1 / 3 帮谁')
      },
      () => {
        document.getElementById('steps')?.scrollIntoView(scrollOpt)
        const btn = document.querySelector('[data-step="1"]') as HTMLButtonElement | null
        btn?.click()
        setDemoLabel('2 / 3 四步 · 任务书')
      },
      () => {
        ;(document.querySelector('[data-step="2"]') as HTMLButtonElement | null)?.click()
        setDemoLabel('2 / 3 四步 · 主张核对')
      },
      () => {
        ;(document.querySelector('[data-step="3"]') as HTMLButtonElement | null)?.click()
        setDemoLabel('2 / 3 四步 · 初稿')
      },
      () => {
        ;(document.querySelector('[data-step="4"]') as HTMLButtonElement | null)?.click()
        setDemoLabel('2 / 3 四步 · 检查清单')
      },
      () => {
        document.getElementById('install')?.scrollIntoView(scrollOpt)
        setDemoLabel('3 / 3 怎么装')
      },
      () => clearDemo(),
    ]

    steps.forEach((fn, i) => {
      const id = window.setTimeout(fn, i * gap)
      timers.current.push(id)
    })
  }, [clearDemo])

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero onSeeExamples={startDemo} />
      <ProductSections />
      <DemoBar visible={demoOn} label={demoLabel} onSkip={clearDemo} />
    </div>
  )
}
