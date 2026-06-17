import SectionHeading from "@/components/SectionHeading"
import { roadmap } from "@/data/site"

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Roadmap"
          title="Built for momentum, not silence"
          description="The roadmap keeps the story moving past launch. Each phase reinforces belief, visibility, and the social loops that keep meme tokens alive."
        />

        <div className="mt-12 space-y-5">
          {roadmap.map((item, index) => (
            <article
              key={item.phase}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-300 via-fuchsia-400 to-cyan-300" />
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-zinc-500">{item.phase}</p>
                  <p className="mt-2 font-serif text-3xl uppercase text-white">{String(index + 1).padStart(2, "0")}</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl uppercase tracking-[0.08em] text-white">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
