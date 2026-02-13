const buildCards = [
  {
    tag: "DELIGHTFUL",
    title: "Web Apps",
    icon: ["bi-globe2"],
    border: "#c8b1ff",
    shadow: "0 12px 26px rgba(177, 148, 255, 0.2)",
    titleColor: "#7b4bb4",
    text:
      "Web apps can act as the centralized backend for all your operations \u2014 with or without an UI",
  },
  {
    tag: "SLEEK",
    title: "Mobile Apps",
    icon: ["bi-phone"],
    border: "#f1a2cf",
    shadow: "0 12px 26px rgba(241, 162, 207, 0.2)",
    titleColor: "#c25599",
    text:
      "Mobile apps increase user engagement with better access to user data and device controls",
  },
  {
    tag: "NATIVE-LIKE",
    title: "Mobile Sites",
    icon: ["bi-phone", "bi-globe2"],
    border: "#86b5ff",
    shadow: "0 12px 26px rgba(134, 181, 255, 0.2)",
    titleColor: "#3b7dff",
    text:
      "Let new users experience your service instantly without installing anything \u2014 say, from a QR",
  },
];

export default function BuildSection() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <h3 className="mb-[12px] text-[18px] font-medium text-orange-500">
          What do we build?
        </h3>
        <h1 className="mb-[12px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          We build solutions to solve your problems
        </h1>
        <p className="mb-[64px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          We&apos;d love to ease your pain points through technology
        </p>

        <div className="grid grid-cols-3 gap-x-[32px] gap-y-[48px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px]">
          {buildCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[20px] border border-gray-200 bg-white p-[32px] text-center shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ borderColor: card.border, boxShadow: card.shadow }}
            >
              <small className="text-[14px] font-semibold text-[#8a8a8a]">
                {card.tag}
              </small>
              <h2 className="my-[12px] text-[24px] font-semibold" style={{ color: card.titleColor }}>
                {card.title}
              </h2>
              <div className="mb-[12px] inline-flex items-center justify-center gap-[8px] text-[44px] text-[#8a8a8a]">
                {card.icon.map((icon) => (
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
      </div>
    </section>
  );
}
