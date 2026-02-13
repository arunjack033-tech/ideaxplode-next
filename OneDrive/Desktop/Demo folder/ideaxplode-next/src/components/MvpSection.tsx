const logos = [
  { src: "/assets/images/ClientBrand1.png", alt: "Concreon" },
  { src: "/assets/images/ClientBrand2.png", alt: "Verve VFX" },
  { src: "/assets/images/ClientBrand3.png", alt: "Bibles for America" },
  { src: "/assets/images/ClientBrand4.png", alt: "NTELI" },
  { src: "/assets/images/ClientBrand5.png", alt: "JKS Info Tech" },
  { src: "/assets/images/ClientBrand6.png", alt: "Worgware" },
];

const cards = [
  {
    title: "Build rapidly",
    icon: "bi-rocket-takeoff",
    color: "#d861b5",
    text:
      "No-code & AI tools offer unprecedented development speed. " +
      "Iterate fast \u2192 build features fast \u2192 launch fast \u2192 and accommodate user feedback fast!",
  },
  {
    title: "Validate quickly",
    icon: "bi-bar-chart",
    color: "#e1605c",
    text:
      "You can directly launch your app to test the waters \u2014 no need for market study or even wireframes. " +
      "Validate your idea and grow \u2014 or pivot! Sooner is always better than later.",
  },
  {
    title: "Save continuously",
    icon: "bi-cash-coin",
    color: "#2db35a",
    text:
      "Save cost on team size, dev time and technical overheads (one platform can handle everything). " +
      "We can help you hit the market with minimal resources. You can pivot before spending too much.",
  },
];

export default function MvpSection() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <div className="mb-[40px] flex flex-wrap items-center justify-center gap-[40px]">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-[32px] w-auto object-contain opacity-90"
            />
          ))}
        </div>

        <div className="my-[40px] h-px bg-[#dedede]" />

        <h2 className="text-[18px] font-medium text-orange-500">
          We can <span className="font-semibold">build</span>{" "}
          MVPs and apps
        </h2>
        <h1 className="my-[16px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          In a matter of weeks rather than months
        </h1>
        <p className="mb-[64px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          Thanks to no-code and AI tools &mdash; and our expertise in using them
        </p>

        <div className="grid grid-cols-3 gap-x-[32px] gap-y-[48px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] border border-gray-200 bg-white p-[32px] text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div
                className="mb-[16px] inline-flex items-center justify-center gap-[8px] text-[32px]"
                style={{ color: card.color }}
              >
                <i className={`bi ${card.icon}`} />
              </div>
              <h3 className="mb-[16px] text-[24px] font-semibold">
                {card.title}
              </h3>
              <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
