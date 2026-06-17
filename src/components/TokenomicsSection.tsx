import SectionHeading from "@/components/SectionHeading"
import { tokenomics } from "@/data/site"

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tokenomics"
          title="Allocation with launch-day clarity"
          description="Use these cards to explain how supply supports liquidity, community growth, and long-tail momentum. Percentages are easy to swap if your final distribution changes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tokenomics.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{item.label}</p>
              <p className="mt-4 font-serif text-6xl uppercase text-white">{item.value}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
