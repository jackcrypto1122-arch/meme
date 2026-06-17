import { Copy, ShieldEllipsis, Sparkle, Wallet } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import { siteConfig, tokenHighlights } from "@/data/site"

const iconMap = [Sparkle, Wallet, ShieldEllipsis, Copy]

export default function TokenSection() {
  return (
    <section id="token" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Token snapshot"
          title="Everything people ask first"
          description="This block keeps launch-day information centralized. Replace the placeholders with the live contract, socials, and swap URL when you are ready to go public."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                {siteConfig.chain}
              </span>
              <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-fuchsia-200">
                {siteConfig.launchState}
              </span>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Ticker</p>
                <p className="mt-3 font-serif text-5xl uppercase text-white">{siteConfig.ticker}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Token name</p>
                <p className="mt-3 font-serif text-5xl uppercase text-white">{siteConfig.tokenName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Supply</p>
                <p className="mt-3 text-lg uppercase tracking-[0.2em] text-zinc-100">{siteConfig.supply}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Buy route</p>
                <p className="mt-3 text-lg uppercase tracking-[0.2em] text-zinc-100">{siteConfig.buyLabel}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-dashed border-white/15 bg-zinc-950/75 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Contract address</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.25em] text-white">{siteConfig.contractAddress}</p>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-200 transition hover:border-white/30 hover:bg-white/10"
                >
                  Copy at launch
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tokenHighlights.map((item, index) => {
              const Icon = iconMap[index]

              return (
                <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-zinc-500">{item.title}</p>
                  <h3 className="mt-3 font-serif text-3xl uppercase tracking-[0.08em] text-white">{item.value}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
