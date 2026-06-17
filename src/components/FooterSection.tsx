import { ArrowUpRight, MessagesSquare, Rocket, Stars } from "lucide-react"

import { siteConfig } from "@/data/site"

const communityCards = [
  {
    title: "Community ready",
    text: "Add your X, Telegram, and Discord links here when your channels are finalized.",
    icon: MessagesSquare,
  },
  {
    title: "Launch ready",
    text: "Swap in the live contract, buy route, and explorer link before pushing the site public.",
    icon: Rocket,
  },
]

export default function FooterSection() {
  return (
    <section id="community" className="px-6 pb-12 pt-20 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/12 via-white/6 to-fuchsia-500/10 p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300">
              <Stars className="h-4 w-4 text-emerald-300" />
              Final CTA block
            </div>
            <h2 className="mt-6 font-serif text-4xl uppercase tracking-[0.08em] text-white md:text-6xl">
              Turn belief into a launch event
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
              Your website is structured to carry the project from pre-launch hype to launch-day trust. Once you add real socials,
              contract details, and the buy URL, it is ready to become the public face of {siteConfig.ticker}.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950 transition hover:-translate-y-0.5"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {communityCards.map((card) => {
            const Icon = card.icon

            return (
              <article key={card.title} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-2xl uppercase tracking-[0.08em] text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{card.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
