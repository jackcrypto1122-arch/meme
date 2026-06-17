import { useState } from "react"
import { ChevronDown } from "lucide-react"

import SectionHeading from "@/components/SectionHeading"
import { faqItems } from "@/data/site"

export default function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0].question)

  return (
    <section id="faq" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Ready for launch questions"
          description="These answers are designed to calm uncertainty on launch day. Update them with your final contract, timing, and social details when the token goes live."
        />

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => {
            const isOpen = openQuestion === item.question

            return (
              <article key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/5">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-2xl uppercase tracking-[0.06em] text-white md:text-3xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-300 transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-zinc-300 md:text-base">
                    {item.answer}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
