import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-14 pt-8 md:px-12 md:pb-20 md:pt-12 lg:px-20 lg:pt-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%]">
        <Image
          src="/assets/images/ideaXplode Silhoutte Logo.png"
          alt=""
          fill
          className="object-contain object-right opacity-18"
          priority
        />
      </div>
      <div className="pointer-events-none absolute -left-28 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(103,146,255,0.25)_0%,_rgba(255,249,244,0)_70%)]" />
      <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,143,118,0.26)_0%,_rgba(255,249,244,0)_72%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[1.18fr_0.82fr] gap-4 md:gap-8 lg:gap-10 lg:items-center">
        <div>
          <h1 className="text-[42px] font-medium leading-[1.08] text-[#121212] md:text-[50px] lg:text-[52px]">
            If you&apos;ve got an
            <br />
            idea, we can
            <br />
            make it <span className="text-[#ff7a59]">Xplode</span>
            <br />
            into...
          </h1>
          <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#2b2b2b] md:mt-6 md:text-[18px] md:leading-7">
            We&apos;re a high-performance software development team. We build apps fast using
            <span className="font-semibold text-[#3b7dff]"> No-Code</span> and
            <span className="font-semibold text-[#ff7a59]"> AI Tools</span>.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-[18px] bg-[#111] px-7 py-3.5 text-[14px] font-semibold leading-none text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)] md:mt-8">
            How fast can you build?
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#e2d8d1] bg-white/70 p-3 backdrop-blur-sm md:gap-8 md:p-8">
          <div className="h-20 w-px bg-[#bfb8b3] md:h-36" />
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8d8d8d] md:text-[11px] md:tracking-[0.18em]">VC Funding</p>
            <h2 className="mt-1 text-[18px] font-semibold leading-[1.15] text-[#151515] md:mt-2 md:text-[32px] md:leading-[1.2]">
              to validation,
              <br />
              in record time.
            </h2>
            <p className="mt-2 max-w-xs text-[11px] leading-5 text-[#5c5c5c] md:mt-3 md:text-[13px] md:leading-6">
              We ship with no-code, low-code, and AI-native execution so founders can launch before momentum fades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
