const createImageUrl = (prompt: string, imageSize: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${imageSize}`

export const siteConfig = {
  ticker: "$BELIEVE",
  tokenName: "Believe",
  chain: "Solana",
  launchState: "Conviction mode",
  contractAddress: "Add address",
  supply: "1,000,000,000",
  buyLabel: "Phantom -> DEX",
  heroHeadline: "BELIEVE OR STAY BROKE.",
  heroSubheadline:
    "Every generational coin started with a few people who believed before the rest of the market woke up. Believe is for the bold, the early, and the ones ready to send it.",
  heroAltHeadline: "First they laugh. Then they ape.",
  heroAltSubheadline:
    "Believe is the meme coin for everyone who knows conviction creates legends. In crypto, belief is not optional. Belief is everything.",
  primaryCta: "Buy $BELIEVE",
  secondaryCta: "Join The Movement",
  finalHeadline: "The next big run starts with belief.",
  finalText:
    "You are either early or you are exit liquidity. Choose wisely. Join Believe and ride with the believers.",
  punchyHeadline: "Believe big. Win bigger.",
  punchySubheadline:
    "In crypto, the people who believe first usually win the hardest. $BELIEVE is for the community chasing culture, conviction, and generational upside.",
}

export const artwork = {
  hero: createImageUrl(
    "full body cosmic streetwear meme character standing confidently, galaxy hoodie, backpack, glowing orbit rings around the body, playful comic illustration, bold black outlines, vibrant yellow and purple accents, transparent background, no text",
    "portrait_4_3",
  ),
  mogul: createImageUrl(
    "cartoon crypto tycoon wearing a black suit and top hat, carrying green money bags and holding a cigar, playful meme coin mascot illustration, thick black outline, flat colors, transparent background, no text",
    "portrait_4_3",
  ),
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Toknomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
]

export const socialLinks = [
  { label: "X", href: "#" },
  { label: "Telegram", href: "#" },
]

export const tokenStats = [
  { label: "Chain", value: "Solana" },
  { label: "Believers", value: "Early" },
  { label: "Supply", value: "1B" },
  { label: "Mood", value: "Moon mode" },
]

export const bodySections = [
  {
    id: "about",
    kicker: "What Is Believe?",
    title: "Pure conviction in token form.",
    paragraphs: [
      "Believe is pure conviction in token form. A meme coin built for the community that understands one truth: before the pumps, before the millions, before the headlines, somebody had to believe.",
      "This is for the ones who see it early, hold through the noise, and know that generational wealth starts with faith in the vision.",
    ],
  },
  {
    id: "narrative",
    kicker: "Why Believe Wins",
    title: "Attention, culture, timing, conviction.",
    paragraphs: [
      "Crypto does not reward fear. It rewards attention, culture, timing, and conviction. Believe brings all four together into one unstoppable movement.",
      "Memes create attention. Attention creates community. Community creates momentum. Momentum creates legends.",
    ],
  },
  {
    id: "community",
    kicker: "For The True Believers",
    title: "Built for the ones who never fade.",
    paragraphs: [
      "Believe is not for doubters. It is for the diamond hands, the culture makers, the raid leaders, the moon chasers, and the community that refuses to fade.",
      "If you believe hard enough, post loud enough, and hold long enough, anything can happen.",
    ],
  },
  {
    id: "wealth",
    kicker: "One Belief Can Change Everything",
    title: "The biggest wins always look crazy at the start.",
    paragraphs: [
      "The biggest wins in crypto never looked obvious at the start. They looked crazy. They looked risky. They looked like memes. Then they changed lives.",
      "Believe is built on that exact energy. The energy of early conviction. The energy of life-changing upside. The energy of believers becoming legends.",
    ],
  },
]

export const hypeLines = [
  "Built on conviction",
  "Fueled by community",
  "Powered by memes",
  "Made for moon missions",
  "Created for generational runs",
]

export const tokenHighlights = [
  {
    title: "Ticker",
    value: "$BELIEVE",
    description: "Sticky, loud, and ready for timelines, raids, and reply sections.",
  },
  {
    title: "Narrative",
    value: "Belief wins",
    description: "Every section pushes one idea: legends are made by people who believed early.",
  },
  {
    title: "Community",
    value: "True believers",
    description: "Made for holders, posters, culture makers, and moon chasers who never fade.",
  },
  {
    title: "Energy",
    value: "Send it",
    description: "The site leans into speed, motion, hype, and high-conviction meme culture.",
  },
]

export const howToBuySteps = [
  {
    step: "01",
    title: "Conviction",
    description: "No belief, no billions. The movement starts when the first believers lock in.",
  },
  {
    step: "02",
    title: "Culture",
    description: "The market follows attention. Memes, posts, raids, and momentum make the story spread.",
  },
  {
    step: "03",
    title: "Momentum",
    description: "Community energy compounds. The louder the movement gets, the more eyes it pulls in.",
  },
  {
    step: "04",
    title: "Legend",
    description: "Believers get rewarded. Meme now. Moon later. Repeat until the timeline cannot ignore it.",
  },
]

export const tokenomics = [
  { label: "Total Supply", value: "1,000,000,000", detail: "Simple, clean, and built for a meme-first narrative." },
  { label: "Tax", value: "0%", detail: "" },
  { label: "Liquidity", value: "Locked", detail: "" },
  { label: "Contract", value: "Add address", detail: "" },
]

export const roadmap = [
  {
    phase: "Phase#01",
    title: "Wake Up The Believers",
    detail: "Launch the token. Wake up the believers. Start the movement.",
    checklist: ["Token launch", "Community wake-up", "Movement starts"],
  },
  {
    phase: "Phase#02",
    title: "Push Memes Hard",
    detail: "Push memes, grow the army, dominate social timelines.",
    checklist: ["Meme raids", "Army growth", "Timeline domination"],
  },
  {
    phase: "Phase#03",
    title: "Expand The Brand",
    detail: "Expand the community, grow the brand, chase major exposure.",
    checklist: ["Community expansion", "Brand growth", "Major exposure"],
  },
  {
    phase: "Phase#04",
    title: "Own The Culture",
    detail: "Turn Believe into a symbol of conviction across crypto culture.",
    checklist: ["Cultural symbol", "Loyal holders", "Long-tail momentum"],
  },
]

export const faqItems = [
  {
    question: "What is Believe?",
    answer: "Believe is a meme coin built around one powerful crypto truth: every massive opportunity begins with belief.",
  },
  {
    question: "Why Believe?",
    answer: "Because the market follows attention, culture, and conviction. Believe is made to capture all three.",
  },
  {
    question: "Who is Believe for?",
    answer: "For anyone chasing upside, community, and a chance to be early on the next viral movement.",
  },
]

export const oneLiners = [
  "No belief, no billions.",
  "Conviction creates candles.",
  "Believers get rewarded.",
  "Meme now. Moon later.",
  "The market runs on belief.",
]
