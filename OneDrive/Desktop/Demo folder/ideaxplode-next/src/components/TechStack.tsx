const techIcons = [
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
];

export default function TechStack() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <div className="mb-[40px] flex flex-wrap items-center justify-center gap-[40px]">
          {techIcons.map((icon) => (
            <img
              key={icon}
              src={`/assets/images/${icon}`}
              alt={icon.replace(/\..+$/, "")}
              className="h-[32px] w-auto object-contain"
            />
          ))}
        </div>

        <h2 className="mb-[18px] text-[28px] font-semibold leading-[34px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          So, what&apos;s the best tech stack?
          <br />
          No-Code + AI is the future of building software!
        </h2>
        <p className="mb-[24px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          Want to find out the best tech choices for your app?
        </p>
        <button className="inline-flex h-[48px] items-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
          <i className="bi bi-send" /> Discuss tech choices
        </button>
      </div>
    </section>
  );
}
