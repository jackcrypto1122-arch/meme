type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.4em] text-emerald-300/80">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl uppercase tracking-[0.08em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">{description}</p>
    </div>
  )
}
