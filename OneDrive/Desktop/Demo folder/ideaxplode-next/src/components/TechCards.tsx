const cards = [
  {
    title: "No-Code",
    icon: "bi-code-slash",
    color: "#4a8ef6",
    border: "#5aa5ff",
    shadow: "0 12px 26px rgba(90, 165, 255, 0.2)",
    text:
      "No-code tools have changed the game for software development. From design to deployment, everything comes out of the box in a single platform. Mature no-code tools enable building even complex applications.",
  },
  {
    title: "Low-Code",
    icon: "bi-braces",
    color: "#df64a5",
    border: "#f085c0",
    shadow: "0 12px 26px rgba(240, 133, 192, 0.2)",
    text:
      "When we try to build custom experiences using no-code tools and hit platform's limits, having coding expertise will keep us flying. Low-code grants unlimited extensibility of the no-code platform.",
  },
  {
    title: "AI-Code",
    icon: "bi-robot",
    color: "#ff8a5c",
    border: "#ffad88",
    shadow: "0 12px 26px rgba(255, 173, 136, 0.2)",
    text:
      "AI-Code is not \"vibe coding\". Vibes simply cannot produce production-grade applications. Through a systematic, AI-native methodology, we make sure your software is secure, stable and scalable.",
  },
  {
    title: "AI-Build",
    icon: "bi-robot",
    color: "#8b5cf6",
    border: "#b89ef9",
    shadow: "0 12px 26px rgba(184, 158, 249, 0.2)",
    text:
      "You describe what you want, and the AI builder generates an app. Sounds simple. But real-world applications bring unexpected challenges: bugs, security gaps, or ambiguous behavior.",
    dualIcon: true,
  },
];

export default function TechCards() {
  return (
    <section className="section-line reveal py-[112px] max-[768px]:py-[72px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-[64px] gap-y-[48px] px-6 max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px] max-[768px]:px-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[20px] border border-gray-200 bg-white p-[32px] text-center shadow-sm transition-all duration-300 hover:shadow-md"
            style={{ borderColor: card.border, boxShadow: card.shadow }}
          >
            <h2 className="mb-[16px] text-[24px] font-semibold" style={{ color: card.color }}>
              {card.title}
            </h2>
            <div className="my-[14px] mb-[18px] inline-flex items-center justify-center gap-[8px] text-[40px] text-[#8a8a8a]">
              <i className={`bi ${card.icon}`} />
              {card.dualIcon && <i className="bi bi-building" />}
            </div>
            <p className="mb-[24px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
              {card.text}
            </p>
            <button className="inline-flex h-[40px] items-center gap-[6px] rounded-[12px] border border-gray-200 bg-white px-[16px] text-[14px] font-medium text-gray-600 transition-all duration-300 hover:shadow-md">
              <i className="bi bi-chevron-down" /> Tell me more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
