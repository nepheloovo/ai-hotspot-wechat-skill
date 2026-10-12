import { useState } from 'react'

const REPO = 'https://github.com/nepheloovo/ai-hotspot-wechat-skill'

const STEPS = [
  {
    id: 1,
    num: '01',
    title: '任务书',
    short: '写清再确认',
    desc: '先写清：谁在读、真正问题、读后收获、核心判断、最强反方。写完必须等你确认，确认前不往下走。',
  },
  {
    id: 2,
    num: '02',
    title: '主张核对',
    short: '每条主张标来源',
    desc: '列出 3–6 条主张。事实标：用户提供 / 已核实 / 小渡判断。材料不够就缩小范围或标「待核实」，不编。',
  },
  {
    id: 3,
    num: '03',
    title: '初稿',
    short: '1200–2500 字',
    desc: '约 1200–2500 字 Markdown。口头禅至少一次，结尾有短期/长期判断；禁空话；文末附「主张—来源」简表。',
  },
  {
    id: 4,
    num: '04',
    title: '检查清单',
    short: '交稿前逐条过',
    desc: '人设、口头禅、收尾判断、无禁说、来源归属、任务书已确认、未编亲历、未绑 CLI/草稿箱/自动生图。',
  },
]

export default function ProductSections() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="bg-black text-white font-instrument-sans">
      {/* 帮谁 */}
      <section id="who" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.14em] uppercase text-white/40 mb-4 font-medium">
            Who it helps
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            帮谁
          </h2>
          <p className="text-white/60 text-lg max-w-xl mb-12">
            装上这个 Skill，对 Agent 说「用小渡写某某热点」，就按固定流程出初稿。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-h-[180px] hover:border-white/25 transition-colors">
              <span className="inline-flex items-center min-h-[28px] px-3 rounded-full text-[11px] tracking-wider uppercase bg-[#3054ff]/15 text-[#b4c0ff] mb-4">
                读者
              </span>
              <h3 className="text-xl font-semibold mb-2">刚开始关注 AI</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                想搞懂「这件事到底意味着什么」。不要空话，要能带走一个判断。
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-h-[180px] hover:border-white/25 transition-colors">
              <span className="inline-flex items-center min-h-[28px] px-3 rounded-full text-[11px] tracking-wider uppercase bg-indigo-500/15 text-indigo-200 mb-4">
                写作者
              </span>
              <h3 className="text-xl font-semibold mb-2">稳定出热点公众号</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                又不想每次重新教 Agent。装上 Skill，说「用小渡写某某热点」就按流程写。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 四步 */}
      <section id="steps" className="py-24 px-6 bg-[#050505] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.14em] uppercase text-white/40 mb-4 font-medium">
            How it writes
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            四步怎么写
          </h2>
          <p className="text-white/60 text-lg max-w-xl mb-12">
            点开任一步看详情。流程绑死，不空话、不编事实。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {STEPS.map((s) => {
              const active = activeStep === s.id
              return (
                <button
                  key={s.id}
                  type="button"
                  data-step={s.id}
                  onClick={() => setActiveStep(s.id)}
                  className={`text-left rounded-2xl border p-5 min-h-[148px] transition-all ${
                    active
                      ? 'border-[#3054ff]/50 bg-gradient-to-b from-[#3054ff]/10 to-transparent'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                  }`}
                  aria-expanded={active}
                >
                  <div
                    className={`text-[11px] tracking-[0.14em] uppercase mb-2.5 font-medium ${
                      active ? 'text-[#b4c0ff]' : 'text-white/40'
                    }`}
                  >
                    {s.num} · {s.title}
                  </div>
                  <div className="font-semibold mb-1.5">{s.short}</div>
                  <p
                    className={`text-[13px] leading-relaxed text-white/55 overflow-hidden transition-all ${
                      active ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {s.desc}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* 怎么装 */}
      <section id="install" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.14em] uppercase text-white/40 mb-4 font-medium">
            Install
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            怎么装到 GitHub
          </h2>
          <p className="text-white/60 text-lg max-w-xl mb-10">
            仓库已开好。把目录拷进 Agent 能读到的 skills 路径即可。核心文件是{' '}
            <code className="text-[#b4c0ff]">SKILL.md</code>。
          </p>
          <div className="space-y-4 mb-10">
            <pre className="rounded-xl border border-white/10 bg-white/[0.03] p-5 overflow-x-auto text-sm text-white/80 font-mono">
              <code>{`cp -R . ~/.agents/skills/ai-hotspot-wechat`}</code>
            </pre>
            <pre className="rounded-xl border border-white/10 bg-white/[0.03] p-5 overflow-x-auto text-sm text-white/80 font-mono">
              <code>{`mkdir -p .agents/skills
cp -R . .agents/skills/ai-hotspot-wechat`}</code>
            </pre>
          </div>
          <p className="text-white/55 mb-8">
            装好后说：「用小渡写一篇某某热点的公众号」。
          </p>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            id="products"
            className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full bg-white text-[#0a0400] font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
          >
            查看 Skill / 打开仓库
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/40 text-sm">
        小渡 · AI 热点公众号写作 Skill ·{' '}
        <a href={REPO} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  )
}

export function openStep(id: number) {
  const el = document.querySelector(`[data-step="${id}"]`) as HTMLButtonElement | null
  el?.click()
}
