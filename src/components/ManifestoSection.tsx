import { Flame, Orbit, ShieldCheck } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"

const manifestoPoints = [
  {
    icon: Flame,
    title: "Pure meme pressure",
    text: "Built for fast-moving social momentum, sharp copy, and repeated brand recognition.",
  },
  {
    icon: Orbit,
    title: "Clear launch path",
    text: "Token info, roadmap, and buy instructions sit in one place so attention converts into action.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence framing",
    text: "The page makes the project feel intentional before the contract is even public.",
  },
]

export default function ManifestoSection() {
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Belief manifesto"
          title="The meme is the mission"
          description="This brand leans into conviction as culture. Every line, glow, and CTA pushes the idea that belief itself can become the product people rally around."
        />

        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">Core idea</p>
            <p className="mt-4 font-serif text-3xl uppercase leading-tight text-white md:text-4xl">
              "Not a roadmap-first project. A narrative-first movement with a chart attached."
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
              `$BELIEVE` lives in that zone where meme tokens stop being numbers and start becoming identity.
              The site tells that story fast, then gives people the practical next step to join in.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {manifestoPoints.map((point) => {
              const Icon = point.icon

              return (
                <article key={point.title} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl uppercase tracking-[0.08em] text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{point.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
