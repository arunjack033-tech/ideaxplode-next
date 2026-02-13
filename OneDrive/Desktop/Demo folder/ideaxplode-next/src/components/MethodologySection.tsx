const journey = [
  { label: "Idea", icon: "bi-lightbulb" },
  { label: "User Story", icon: "bi-card-text" },
  { label: "Build", icon: "bi-building" },
  { label: "Test", icon: "bi-check2-circle" },
  { label: "Launch", icon: "bi-rocket-takeoff" },
];

export default function MethodologySection() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <h3 className="mb-[16px] text-[18px] font-medium text-orange-500">
          What&apos;s our methodology?
        </h3>
        <h1 className="mb-[18px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          <span className="text-[#cf4aa7]">Agentic Agile:</span> Having Agile foundations, but
          driven by AI agents
        </h1>
        <p className="mb-[28px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          We follow core Agile principles and practices &mdash; but with AI agents augmenting in
          every step of the process
        </p>

        <p className="mx-auto mb-[50px] max-w-[920px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          Our methodology comprises a team of agentic Agile role players &mdash; right from a{" "}
          <strong>Business Analyst</strong> to a <strong>Delivery Manager</strong>. This agentic
          team, along with human developers, builds your software systems with precision and control.
          This agentic methodology significantly reduces the human role players needed to develop
          advanced systems.
        </p>

        <p className="mb-[24px] text-[18px] font-medium text-orange-500">
          The journey of a feature:
        </p>

        <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[12px] max-[900px]:gap-[10px]">
          {journey.map((step, index) => (
            <div key={step.label} className="flex items-center gap-[12px]">
              <div className="inline-flex items-center gap-[8px] rounded-[12px] border border-[#E5E5E5] bg-white px-[16px] py-[10px] text-[16px] font-semibold text-[#333333]">
                <i className={`bi ${step.icon}`} />
                {step.label}
              </div>
              {index < journey.length - 1 && (
                <span className="text-[20px] text-[#b1b1b1]">&#8594;</span>
              )}
            </div>
          ))}
        </div>

        <div className="mb-[40px] flex items-center justify-center gap-[12px]">
          <span className="text-[20px] text-[#b1b1b1]">&#8623;</span>
          <div className="inline-flex items-center gap-[8px] rounded-[12px] border border-[#E5E5E5] bg-white px-[16px] py-[10px] text-[16px] font-semibold text-[#333333]">
            <i className="bi bi-chat" /> Feedback
          </div>
        </div>

        <button className="inline-flex h-[48px] items-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
          <i className="bi bi-send" /> Learn more about methodology
        </button>
      </div>
    </section>
  );
}
