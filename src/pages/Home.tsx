import { useState } from "react"
import { ArrowUpRight, Check, ChevronDown, Coins, Instagram, Send, Sparkles, Zap } from "lucide-react"

import {
  artwork,
  bodySections,
  faqItems,
  hypeLines,
  navLinks,
  oneLiners,
  roadmap,
  siteConfig,
  socialLinks,
  tokenStats,
  tokenomics,
} from "@/data/site"

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0]?.question ?? "")

  const aboutSection = bodySections[0]
  const storySections = bodySections.slice(1)

  return (
    <div className="min-h-screen bg-[var(--believe-yellow)] text-black">
      <header className="sticky top-4 z-50 px-4 md:px-6">
        <div className="nav-shell mx-auto mt-4 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#home" className="mx-auto flex items-center gap-3 lg:mx-0">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-[var(--believe-yellow)]">
              <Coins className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl uppercase tracking-[0.08em]">{siteConfig.ticker}</span>
          </a>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Telegram" className="social-chip">
              <Send className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X" className="social-chip">
              <span className="font-display text-sm uppercase">X</span>
            </a>
            <a href="#community" className="button-pill bg-white">
              Buy {siteConfig.ticker}
            </a>
          </div>
        </div>
      </header>

      <main className="pb-8">
        <section id="home" className="px-4 pb-12 pt-6 md:px-6 md:pb-20 md:pt-8">
          <div className="meme-panel meme-grid relative mx-auto max-w-7xl overflow-hidden px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-12">
            <div className="hero-top-frame" />
            <div className="hero-floor" />
            <Zap className="sticker-bolt left-[3%] top-[18%] hidden h-24 w-24 md:block" />
            <Zap className="sticker-bolt right-[5%] top-[22%] hidden h-20 w-20 rotate-12 md:block" />
            <div className="sticker-cross left-[18%] top-[28%] hidden md:block" />
            <div className="sticker-cross right-[16%] top-[18%] hidden md:block" />
            <div className="sticker-ring left-[10%] top-[38%] hidden lg:block" />
            <div className="sticker-ring right-[12%] top-[35%] hidden lg:block" />

            <div className="relative z-10 mt-6 grid gap-4 md:mt-10 md:grid-cols-4">
              {tokenStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-black/60">{stat.label}</p>
                  <p className="mt-3 font-display text-2xl uppercase leading-none">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="sketch-frame relative mx-auto max-w-xl rotate-[-2deg]">
              <div className="inner-frame">
                <img src={artwork.mogul} alt="Believe mascot carrying money bags" className="mx-auto w-full max-w-[26rem]" />
              </div>
            </div>

            <div>
              <p className="section-kicker">{aboutSection.kicker}</p>
              <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4.8rem)] uppercase leading-[0.92]">
                {aboutSection.title}
              </h2>
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 max-w-3xl text-base leading-8 md:text-xl">
                  {paragraph}
                </p>
              ))}

              <div className="meme-quote mt-8">
                <Sparkles className="h-5 w-5" />
                <p>{siteConfig.punchyHeadline}</p>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 md:text-base">{siteConfig.punchySubheadline}</p>
            </div>
          </div>
        </section>

        <section className="section-cream px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 xl:grid-cols-3">
              {storySections.map((section, index) => (
                <article key={section.id} className={`story-card story-card-${index + 1}`}>
                  <p className="section-kicker">{section.kicker}</p>
                  <h2 className="font-display mt-3 text-[2rem] uppercase leading-[0.95] md:text-[2.7rem]">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border-[3px] border-black bg-[var(--believe-yellow)] p-6 shadow-[8px_8px_0_#000] md:p-8">
              <p className="section-kicker">Hype Lines</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {hypeLines.map((line) => (
                  <span key={line} className="hype-chip">
                    {line}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {oneLiners.map((line) => (
                  <div key={line} className="one-liner-card">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-kicker">Tokenomics</p>
              <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4.6rem)] uppercase leading-[0.92]">Simple. Clean. Ready to fly.</h2>
              <p className="mt-5 text-base leading-8 md:text-xl">
                This block keeps the core numbers easy to scan while the rest of the page keeps the story loud.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-5 md:grid-cols-2">
                {tokenomics.map((item) => (
                  <article key={item.label} className="token-card">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-black/60">{item.label}</p>
                    <h3 className="font-display mt-4 text-3xl uppercase leading-none md:text-4xl">{item.value}</h3>
                    <p className="mt-4 text-sm leading-7 md:text-base">{item.detail}</p>
                  </article>
                ))}
              </div>

              <aside className="note-card">
                <p className="section-kicker">Short Punchy Version</p>
                <h3 className="font-display mt-4 text-4xl uppercase leading-[0.92]">{siteConfig.punchyHeadline}</h3>
                <p className="mt-4 text-sm leading-7 md:text-base">{siteConfig.punchySubheadline}</p>
                <div className="mt-6 space-y-3">
                  {socialLinks.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center justify-between rounded-full border-2 border-black bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:-translate-y-0.5">
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section-cream px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="section-kicker justify-center">Roadmap</p>
              <h2 className="font-display mt-4 text-[clamp(2.6rem,5vw,5rem)] uppercase leading-[0.92]">Road To The Moon</h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 md:text-xl">
                Sketch-book cards, clear phases, and a simple story: launch, spread, expand, own the culture.
              </p>
            </div>

            <div className="relative mt-10 grid gap-8 xl:grid-cols-4">
              {roadmap.map((item, index) => (
                <article
                  key={item.phase}
                  className={`paper-card ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"} ${index === 0 ? "xl:mt-10" : ""} ${index === 3 ? "xl:mt-10" : ""}`}
                >
                  {(index === 0 || index === roadmap.length - 1) ? (
                    <img
                      src={artwork.mogul}
                      alt="Believe mascot in a top hat"
                      className={`absolute -top-28 hidden w-28 lg:block ${index === 0 ? "-left-3" : "right-0 scale-x-[-1]"}`}
                    />
                  ) : null}
                  <p className="text-sm uppercase tracking-[0.18em] text-black/65">{item.phase}</p>
                  <h3 className="font-display mt-4 text-3xl uppercase leading-[0.95]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 md:text-base">{item.detail}</p>
                  <div className="mt-6 space-y-3">
                    {item.checklist.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-[var(--believe-yellow)]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="section-kicker justify-center">FAQ</p>
              <h2 className="font-display mt-4 text-[clamp(2.4rem,4vw,4.5rem)] uppercase leading-[0.94]">For The True Believers</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 md:text-xl">
                Quick answers for the people checking the vibe before they join the movement.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {faqItems.map((item) => {
                const isOpen = openQuestion === item.question

                return (
                  <article key={item.question} className="faq-card">
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-2xl uppercase leading-[0.95] md:text-3xl">{item.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen ? <div className="border-t-[3px] border-black px-5 py-5 text-sm leading-7 md:px-6 md:text-base">{item.answer}</div> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer id="community" className="section-cream px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16">
        <div className="meme-panel relative mx-auto max-w-7xl overflow-hidden bg-[var(--believe-cream)] px-6 py-12 text-center md:px-10 md:py-16">
          <img
            src={artwork.mogul}
            alt="Believe mascot left"
            className="absolute bottom-0 left-4 hidden w-40 lg:block xl:w-52"
          />
          <img
            src={artwork.mogul}
            alt="Believe mascot right"
            className="absolute bottom-0 right-4 hidden w-40 scale-x-[-1] lg:block xl:w-52"
          />

          <p className="font-display text-3xl uppercase tracking-[0.08em] md:text-5xl">{siteConfig.ticker}</p>
          <h2 className="font-display mx-auto mt-4 max-w-5xl text-[clamp(2.8rem,6vw,5.8rem)] uppercase leading-[0.92]">
            {siteConfig.finalHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 md:text-xl">{siteConfig.finalText}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="button-primary">
              Buy Now
            </a>
            <a href="#" className="button-secondary">
              Join Telegram
            </a>
            <a href="#" className="button-secondary">
              Follow on X
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" aria-label="Instagram" className="social-button">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="X" className="social-button">
              <span className="font-display text-lg uppercase">X</span>
            </a>
            <a href="#" aria-label="Telegram" className="social-button">
              <Send className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 rounded-[2rem] border-[3px] border-black bg-white px-5 py-4 text-sm leading-7 shadow-[6px_6px_0_#000] md:mx-auto md:max-w-4xl">
            Believe is a meme coin created for entertainment, culture, and community engagement. Nothing on this website
            is financial advice. Always do your own research.
          </div>
        </div>
      </footer>
    </div>
  )
}
