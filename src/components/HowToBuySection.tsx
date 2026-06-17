import SectionHeading from "@/components/SectionHeading"
import { howToBuySteps } from "@/data/site"

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How to buy"
          title="Simple enough for first-time holders"
          description="Launch traffic converts better when the buying flow is obvious. These steps keep the path clear for anyone arriving from social posts or community raids."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {howToBuySteps.map((step) => (
            <article
              key={step.step}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{step.step}</p>
              <h3 className="mt-4 font-serif text-3xl uppercase tracking-[0.08em] text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400 transition group-hover:text-zinc-200">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
