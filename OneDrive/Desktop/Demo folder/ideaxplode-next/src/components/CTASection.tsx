const journey = ["Idea", "User Story", "Build", "Test", "Launch", "Feedback"];

const promises = [
  "We build fast",
  "We communicate clearly",
  "We are responsive",
  "We send daily updates",
  "We maintain transparency",
  "We care about your success",
];

export default function CTASection() {
  return (
    <section id="methodology" className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-[#ddd5ce] bg-white px-5 py-9 text-center md:px-10 md:py-12">
          <p className="text-[16px] text-[#7a7a7a] md:text-[18px]">
            What&apos;s our <span className="text-[#ff7a59]">methodology?</span>
          </p>
          <h2 className="mx-auto mt-3 max-w-5xl text-[29px] font-semibold leading-[1.3] text-[#171717] md:text-[40px]">
            <span className="text-[#cf4aa7]">Agentic Agile:</span> Having Agile foundations, but driven by AI agents
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#6e6e6e] md:text-[16px]">
            We follow core Agile principles and practices, while AI agents augment every step of the process from feature definition to delivery.
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-[14px] leading-7 text-[#5e5e5e]">
            Our methodology includes an agentic team right from Business Analyst to Delivery Manager, working with human developers to build software systems with precision and control.
          </p>

          <p className="mt-8 text-[14px] italic text-[#7a7a7a]">The journey of a feature:</p>

          <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {journey.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-[#e2e2e2] bg-white px-3 py-2 text-[12px] font-semibold text-[#333] md:text-[13px]"
              >
                {item}
              </span>
            ))}
          </div>

          <button className="mt-8 rounded-full bg-[#111] px-6 py-2.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]">Learn more about methodology</button>
        </div>

        <div className="mt-14 text-center md:mt-16">
          <p className="text-[15px] italic text-[#7a7a7a]">Our promises:</p>
          <div className="mt-7 grid gap-3 md:mt-8 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {promises.map((item) => (
              <article key={item} className="flex items-center justify-between gap-3 rounded-xl border border-[#e7e7e7] bg-white px-4 py-3 text-left">
                <span className="text-[14px] font-semibold text-[#1c1c1c]">{item}</span>
                <span className="rounded-xl border border-[#e3e3e3] bg-[#f6f6f8] px-2.5 py-1 text-[11px] text-[#454545]">How?</span>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-[21px] italic leading-[1.45] text-[#6a6a6a] md:mt-12 md:text-[30px]">
            With Agentic Agile, startup founders can see their product evolve in real time, iteratively.
          </p>
        </div>

        <div id="about" className="mt-14 text-center md:mt-16">
          <p className="text-[16px] text-[#7a7a7a] md:text-[18px]">
            Who are <span className="text-[#ff7a59]">we?</span>
          </p>
          <h3 className="mt-3 text-[29px] font-semibold md:text-[40px]">
            <span className="bg-[linear-gradient(90deg,#8b5cf6,#ff7a59)] bg-clip-text text-transparent">ideaXplode</span> is an ambitious startup
          </h3>
          <p className="mt-3 text-[15px] text-[#7a7a7a]">that helps you navigate the complex maze of modern tech</p>
          <p className="mx-auto mt-5 max-w-4xl text-[14px] leading-7 text-[#5f5f5f] md:text-[15px]">
            We started ideaXplode to help ideators, innovators, and startup founders succeed in this AI era by building real, market-ready systems instead of prototypes that never scale.
          </p>
        </div>
      </div>
    </section>
  );
}
