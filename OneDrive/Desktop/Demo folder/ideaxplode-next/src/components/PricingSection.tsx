const pricingCards = [
  {
    title: "Fixed pricing",
    points: ["Frozen requirements", "Estimated cost", "Some buffer for contingency", "Milestone-based feedback", "Minimal reporting"],
  },
  {
    title: "Flexible pricing",
    points: ["Flexible requirements", "Actual cost", "No buffer", "Daily feedback", "Comprehensive reporting"],
  },
  {
    title: "Hybrid",
    points: ["Start with fixed pricing", "Move to flexible execution", "Balanced control and speed", "Best for evolving products"],
  },
];

const contactCards = [
  {
    title: "Want to see an app demo?",
    body: "We can share credentials to one of our built apps so you can experience the product quality directly.",
    action: "Get app credentials",
  },
  {
    title: "Want to sign an NDA?",
    body: "If you prefer an NDA before discussing your idea, we can complete that process quickly.",
    action: "Sign NDA",
  },
  {
    title: "Want to join our team?",
    body: "We have openings for developers and interns with a strong problem-solving mindset.",
    action: "Apply to join",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#ddd5ce] bg-[linear-gradient(150deg,#f7f1eb_0%,#f7f1eb_45%,#eff4ff_100%)] px-5 py-9 text-center md:px-10 md:py-12">
        <p className="text-[16px] text-[#7a7a7a] md:text-[18px]">
          What are our <span className="text-[#ff7a59]">pricing</span> options?
        </p>
        <h2 className="mt-3 text-[29px] font-semibold leading-tight text-[#171717] md:text-[40px]">
          Transparent, predictable pricing and no surprises
        </h2>
        <p className="mt-2 text-[15px] text-[#7a7a7a]">Choose the option that suits your budget and roadmap</p>

        <div className="mt-9 grid gap-4 md:mt-10 md:gap-5 md:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border border-[#ddd5ce] bg-white p-5 text-left shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_26px_rgba(0,0,0,0.1)] md:p-6 ${
                card.title === "Hybrid"
                  ? "bg-[radial-gradient(circle_at_right,rgba(70,140,255,0.16),transparent_55%),#fff]"
                  : ""
              }`}
            >
              <h3 className="text-[20px] font-semibold text-[#1b1b1b] md:text-[22px]">{card.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] text-[#5e5e5e]">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[15px] text-[#7a7a7a]">Want to know our rates or get an estimate?</p>
        <button className="mt-4 rounded-full bg-[#111] px-6 py-2.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]">Discuss about pricing</button>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl text-center md:mt-14">
        <p className="text-[21px] italic leading-[1.45] text-[#6a6a6a] md:text-[30px]">
          Our <span className="font-semibold text-[#ff7a59]">productized service</span> model helps you save money and launch faster
        </p>
      </div>

      <div
        id="contact"
        className="relative mx-auto mt-12 w-full max-w-6xl overflow-hidden rounded-3xl border border-[#e2d8d1] bg-[radial-gradient(circle_at_left_bottom,rgba(70,140,255,0.2),transparent_42%),radial-gradient(circle_at_right_top,rgba(255,134,107,0.2),transparent_42%),#fff9f4] px-5 py-9 md:mt-14 md:px-10 md:py-10"
      >
        <div className="grid gap-4 md:gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-[#e3d9d2] bg-white/80 p-5 transition duration-200 hover:-translate-y-[2px] hover:bg-white">
              <h3 className="text-[19px] font-semibold text-[#1a1a1a]">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5e5e5e]">{card.body}</p>
              <button className="mt-5 rounded-full bg-[#111] px-4 py-2 text-[12px] font-semibold text-white transition duration-200 hover:bg-black">{card.action}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
