const aiCards = [
  {
    tag: "SMART",
    title: "AI-Powered Apps",
    icons: ["bi-robot"],
    border: "#f1a2cf",
    color: "#e062a8",
    text:
      "Applications with embedded AI to provide smarter, interactive experiences to users",
  },
  {
    tag: "INTELLIGENT",
    title: "AI Agents",
    icons: ["bi-cpu"],
    border: "#ffb996",
    color: "#ff8a5c",
    text:
      "Autonomous AI agents capable of executing tasks and understanding user intents",
  },
  {
    tag: "CUSTOM-TRAINED",
    title: "AI Models",
    icons: ["bi-robot", "bi-cursor"],
    border: "#c8b1ff",
    color: "#8b5cf6",
    text: "Custom-trained machine learning models tailored to solve specific business problems.",
  },
];

export default function AiSection() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <div className="mb-[64px] grid grid-cols-3 gap-x-[32px] gap-y-[48px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px]">
          {aiCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] border border-gray-200 bg-white p-[32px] text-center shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ borderColor: card.border }}
            >
              <small className="text-[14px] font-semibold text-[#8a8a8a]">
                {card.tag}
              </small>
              <h2 className="my-[12px] text-[24px] font-semibold" style={{ color: card.color }}>
                {card.title}
              </h2>
              <div className="mb-[12px] inline-flex items-center justify-center gap-[8px] text-[44px] text-[#8a8a8a]">
                {card.icons.map((icon) => (
                  <i key={icon} className={`bi ${icon}`} />
                ))}
              </div>
              <p className="mb-[24px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
                {card.text}
              </p>
              <button className="inline-flex h-[40px] items-center gap-[6px] rounded-[12px] border border-gray-200 bg-white px-[16px] text-[14px] font-medium text-gray-600 transition-all duration-300 hover:shadow-md">
                <i className="bi bi-chevron-down" /> What tools do you use?
              </button>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-[900px] text-[28px] font-semibold leading-[34px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          With the power of no-code and AI, you can build your own custom apps for your business
          &mdash; instead of paying for pre-built SaaS apps!
        </p>
      </div>
    </section>
  );
}
