import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="px-6 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="mx-auto w-full max-w-[360px]">
            <Image
              src="/assets/images/RathanWithLogos.png"
              alt="Rathan - Founder and CEO"
              width={360}
              height={380}
              className="h-auto w-full"
            />
          </div>

          <article>
            <h2 className="text-[28px] font-semibold text-[#161616] md:text-[36px]">
              Meet the founder &amp; CEO: <span className="text-[#cf4aa7]">Rathan</span>
            </h2>
            <p className="mt-5 text-[15px] italic leading-7 text-[#5e5e5e]">
              Hi, I&apos;m Rathan, a developer at heart and entrepreneur by trade. After 20+ years of building software the traditional way, I now help startups launch products at unprecedented speed.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#5e5e5e]">
              Through ideaXplode, I help founders transform bold ideas into real, working apps using no-code and AI. In this era, product engineering is the most valuable skill.
            </p>
            <button className="mt-6 rounded-full bg-[#111] px-6 py-2.5 text-[13px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]">What is product engineering?</button>
          </article>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative mx-auto h-[244px] w-full max-w-[340px]">
            <Image src="/assets/images/TeamPhoto08d.jpg" alt="Team 1" width={320} height={220} className="absolute left-0 top-0 h-[204px] w-[280px] rotate-[-4deg] rounded-lg border-[8px] border-white object-cover shadow-[0_16px_30px_rgba(0,0,0,0.18)]" />
            <Image src="/assets/images/TeamPhoto09.jpg" alt="Team 2" width={320} height={220} className="absolute left-4 top-3 h-[204px] w-[280px] rotate-[2deg] rounded-lg border-[8px] border-white object-cover shadow-[0_16px_30px_rgba(0,0,0,0.18)]" />
            <Image src="/assets/images/TeamPhoto10.jpg" alt="Team 3" width={320} height={220} className="absolute left-8 top-7 h-[204px] w-[280px] rotate-[-1deg] rounded-lg border-[8px] border-white object-cover shadow-[0_16px_30px_rgba(0,0,0,0.18)]" />
          </div>

          <article className="text-center lg:text-left">
            <blockquote className="text-[23px] italic leading-[1.5] text-[#222] md:text-[32px]">
              I have worked with numerous offshore software consultants, but Rathan&apos;s team is at least 100 times better.
            </blockquote>
            <p className="mt-5 text-[16px] font-semibold text-[#2c2c2c]">Philip Bradley</p>
            <p className="text-[14px] text-[#6d6d6d]">CTO, Lencomms Inc.</p>
          </article>
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-[21px] italic leading-[1.45] text-[#6a6a6a] md:mt-14 md:text-[30px]">
          You can think of us as your innovation partner as you lead your organization into AI transformation.
        </p>
      </div>
    </section>
  );
}
