import Image from "next/image";

const techCards = [
  {
    title: "No-Code",
    text: "No-code tools changed the game for software development. From design to deployment, everything is available in one platform.",
    border: "border-[#5aa5ff]",
    color: "text-[#4a8ef6]",
  },
  {
    title: "Low-Code",
    text: "When custom requirements hit platform limits, coding expertise keeps execution moving. Low-code gives unlimited extensibility.",
    border: "border-[#f085c0]",
    color: "text-[#df64a5]",
  },
  {
    title: "AI-Code",
    text: "AI-Code is not vibe coding. With an AI-native methodology, we ensure your software is secure, stable, and scalable.",
    border: "border-[#ffad88]",
    color: "text-[#ff8a5c]",
  },
  {
    title: "AI-Build",
    text: "AI builders are fast, but real-world products need controls. We harden generated systems into production-ready products.",
    border: "border-[#b89ef9]",
    color: "text-[#8b5cf6]",
  },
];

const stackLogos = [
  "TechLogo-Bubble.png",
  "TechLogo-Webflow.webp",
  "TechLogo-Glide.webp",
  "TechLogo-Zapier.webp",
  "TechLogo-HTML.webp",
  "TechLogo-CSS.webp",
  "TechLogo-JS.webp",
  "TechLogo-React.webp",
  "TechLogo-v0.webp",
  "TechLogo-n8n.webp",
  "TechLogo-Next.js.webp",
  "TechLogo-Node.js.webp",
  "TechLogo-Express.js.webp",
  "TechLogo-Lovable.dev.webp",
  "TechLogo-Cursor.io.webp",
  "TechLogo-ClaudeCode.webp",
  "TechLogo-Boltnew.webp",
  "TechLogo-Airtable.webp",
  "TechLogo-Supabase.webp",
  "TechLogo-Replit.webp",
  "TechLogo-Windsurf.webp",
];

const buildCards = [
  { tag: "DELIGHTFUL", title: "Web Apps", border: "border-[#c8b1ff]", titleColor: "text-[#8b5cf6]" },
  { tag: "SLEEK", title: "Mobile Apps", border: "border-[#f1a2cf]", titleColor: "text-[#df64a5]" },
  { tag: "NATIVE-LIKE", title: "Mobile Sites", border: "border-[#86b5ff]", titleColor: "text-[#4a8ef6]" },
  { tag: "SMART", title: "AI-Powered Apps", border: "border-[#f1a2cf]", titleColor: "text-[#df64a5]" },
  { tag: "INTELLIGENT", title: "AI Agents", border: "border-[#ffb996]", titleColor: "text-[#ff8a5c]" },
  { tag: "CUSTOM-TRAINED", title: "AI Models", border: "border-[#c8b1ff]", titleColor: "text-[#8b5cf6]" },
];

export default function CardsSection() {
  return (
    <section id="technology" className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="text-[17px] text-[#ff7a59] md:text-[19px]">How do we build?</p>
        <h2 className="mt-3 text-[30px] font-semibold leading-tight text-[#111] md:text-[42px]">Technology has evolved. So have we.</h2>
        <p className="mt-2 text-[15px] text-[#6d6d6d]">Welcome to the modern software development paradigm</p>

        <div className="mt-10 grid gap-4 md:mt-12 md:gap-6 md:grid-cols-2">
          {techCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border bg-white p-5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_26px_rgba(0,0,0,0.1)] md:p-8 ${card.border}`}
            >
              <h3 className={`text-[28px] font-semibold md:text-[30px] ${card.color}`}>{card.title}</h3>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-6 text-[#5e5e5e]">{card.text}</p>
              <button className="mt-5 rounded-xl border border-[#e1e1e6] bg-[#f3f3f6] px-4 py-2 text-[12px] font-medium text-[#3c3c3c] transition duration-200 hover:border-[#cfcfd6] hover:bg-white">
                Tell me more
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-[#ddd5ce] bg-[#f7f1eb] px-5 py-8 md:mt-16 md:px-10 md:py-10">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
            {stackLogos.map((logo) => (
              <div key={logo} className="rounded-full border border-[#ececec] bg-white p-2.5">
                <Image src={`/assets/images/${logo}`} alt={logo} width={26} height={26} className="h-6 w-6 object-contain" />
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-[24px] font-semibold leading-[1.35] text-[#6b6b6b] md:mt-10 md:text-[34px]">
            So, what&apos;s the best tech stack?
            <br />
            No-Code + AI is the future of building software!
          </h3>
          <p className="mt-3 text-[14px] text-[#7a7a7a]">Want to find out the best tech choices for your app?</p>
          <button className="mt-6 rounded-full bg-[#111] px-6 py-2.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]">Discuss tech choices</button>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-[17px] text-[#ff7a59] md:text-[19px]">What do we build?</p>
          <h3 className="mt-3 text-[30px] font-semibold leading-tight text-[#111] md:text-[42px]">We build solutions to solve your problems</h3>
          <p className="mt-2 text-[15px] text-[#7a7a7a]">We&apos;d love to ease your pain points through technology</p>

          <div className="mt-10 grid gap-4 md:mt-12 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {buildCards.map((card) => (
              <article
                key={card.title}
                className={`rounded-2xl border bg-white p-5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_26px_rgba(0,0,0,0.1)] md:p-7 ${card.border}`}
              >
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#8a8a8a]">{card.tag}</p>
                <h4 className={`mt-2 text-[24px] font-semibold md:text-[28px] ${card.titleColor}`}>{card.title}</h4>
                <p className="mt-3 text-[14px] leading-6 text-[#5e5e5e]">
                  Custom solutions with no-code, low-code, and AI workflows to solve specific business operations and user experience needs.
                </p>
                <button className="mt-4 rounded-xl border border-[#e1e1e6] bg-[#f3f3f6] px-4 py-2 text-[12px] font-medium text-[#3c3c3c] transition duration-200 hover:border-[#cfcfd6] hover:bg-white">
                  What tools do you use?
                </button>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-4xl text-[21px] italic leading-[1.45] text-[#6a6a6a] md:mt-14 md:text-[30px]">
            With the power of no-code and AI, you can build your own custom apps for your business instead of paying for pre-built SaaS apps!
          </p>
        </div>
      </div>
    </section>
  );
}
