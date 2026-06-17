import { Coins, Menu } from "lucide-react"

import { navLinks, siteConfig } from "@/data/site"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="flex items-center gap-3 text-white transition hover:text-emerald-300">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
            <Coins className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Meme token</p>
            <p className="font-serif text-xl uppercase tracking-[0.12em]">{siteConfig.ticker}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.24em] text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#community"
          className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/50 bg-fuchsia-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:scale-[1.02] hover:bg-fuchsia-400/20"
        >
          <Menu className="h-4 w-4 lg:hidden" />
          Join the wave
        </a>
      </div>
    </header>
  )
}
