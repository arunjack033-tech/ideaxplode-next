import Image from "next/image";

const clientLogos = [
  { src: "/assets/images/ClientBrand1.png", alt: "Concreon" },
  { src: "/assets/images/ClientBrand2.png", alt: "Verve VFX" },
  { src: "/assets/images/ClientBrand3.png", alt: "Bibles for America" },
  { src: "/assets/images/ClientBrand4.png", alt: "NTELI" },
  { src: "/assets/images/ClientBrand5.png", alt: "JKS Info Tech" },
  { src: "/assets/images/ClientBrand6.png", alt: "Worgware" },
];

const mvpCards = [
  {
    title: "Build rapidly",
    body: "No-code and AI tools offer unprecedented development speed. Iterate fast, build features fast, launch fast, and accommodate feedback fast.",
    icon: "01",
  },
  {
    title: "Validate quickly",
    body: "Launch your app to test the waters without waiting for long market-study cycles. Validate and grow or pivot early.",
    icon: "02",
  },
  {
    title: "Save continuously",
    body: "Cut team size, development time, and technical overhead by building on modern platforms with focused execution.",
    icon: "03",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-14 md:px-12 md:py-20 lg:px-20" id="mvp">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(70,140,255,0.16),transparent_40%),radial-gradient(circle_at_right,rgba(255,134,107,0.16),transparent_42%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-3 place-items-center gap-x-3 gap-y-4 pb-8 sm:grid-cols-6 md:gap-x-4 md:gap-y-5 md:pb-9">
          {clientLogos.map((logo) => (
            <Image key={logo.alt} src={logo.src} alt={logo.alt} width={108} height={40} className="h-7 w-auto opacity-90 md:h-8" />
          ))}
        </div>

        <div className="h-px bg-[#dfd5ce]" />

        <div className="pt-9 text-center md:pt-12">
          <p className="text-[15px] font-medium text-[#7a7a7a] md:text-[16px]">
            We can <span className="font-semibold text-[#ff7a59]">build</span> MVPs and apps
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[30px] font-semibold leading-tight text-[#111] md:text-[42px]">
            In a matter of weeks rather than months
          </h2>
          <p className="mt-3 text-[14px] text-[#707070] md:text-[16px]">
            Thanks to no-code and AI tools and our expertise in using them
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:gap-5 md:grid-cols-3">
          {mvpCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-[#ddd3cc] bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_26px_rgba(0,0,0,0.1)] md:p-7">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fff2ed] text-[12px] font-semibold text-[#ff7a59]">
                {card.icon}
              </span>
              <h3 className="mt-3 text-[20px] font-semibold text-[#171717] md:mt-4 md:text-[22px]">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#4f4f4f]">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#f1cfc4] bg-[#fdeeee] px-5 py-6 text-center md:mt-9 md:px-10 md:py-7">
          <h3 className="text-[22px] font-semibold text-[#151515] md:text-[24px]">
            Take the <span className="text-[#ff7a59]">One-Week Challenge!</span>
          </h3>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-6 text-[#5f5f5f] md:text-[15px]">
            Want to see what ideaXplode can build for you in a week&apos;s time? Pay only if you want to continue with the project.
          </p>
          <button className="mt-5 rounded-full bg-[#111] px-5 py-2.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]">Take up the challenge</button>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-[24px] font-medium leading-[1.4] text-[#6c6c6c] md:mt-12 md:text-[36px]">
          Experience the power of no-code and AI and cut your development <span className="font-semibold text-[#ff7a59]">cost upto 70%</span>
        </p>
      </div>
    </section>
  );
}
