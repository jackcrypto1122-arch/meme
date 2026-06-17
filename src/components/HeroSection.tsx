import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react"

import { siteConfig, tokenStats } from "@/data/site"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-emerald-200">
            <BadgeCheck className="h-4 w-4" />
            Solana meme token landing site
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.5em] text-zinc-400">Token name: {siteConfig.tokenName}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-6xl uppercase leading-[0.9] tracking-[0.06em] text-white md:text-8xl xl:text-[9rem]">
            {siteConfig.ticker}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            Believe hard enough and the chart starts listening. This launch page turns pure meme conviction into a polished
            Solana story with clear token info, buying steps, and community momentum.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#token"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950 transition hover:-translate-y-0.5 hover:shadow-[0_12px_50px_rgba(255,255,255,0.18)]"
            >
              Explore the token
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#how-to-buy"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-300/10"
            >
              Get buy-ready
              <Sparkles className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-fuchsia-500/10 to-cyan-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.75)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Launch signal</p>
                <p className="mt-2 font-serif text-3xl uppercase text-white">{siteConfig.launchState}</p>
              </div>
              <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-200">
                {siteConfig.chain}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tokenStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">{stat.label}</p>
                  <p className="mt-3 font-serif text-3xl uppercase tracking-[0.08em] text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/15 bg-zinc-950/80 p-5">
              <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">Contract module</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-emerald-200">
                {siteConfig.contractAddress}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Swap this placeholder for the real CA and connect it to your official launch post once you are ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
