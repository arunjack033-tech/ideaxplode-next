export default function AboutSection() {
  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <h3 className="mb-[12px] text-[18px] font-medium text-orange-500">
          Who are we?
        </h3>
        <h1 className="mb-[12px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          <span className="brand-gradient">ideaXplode</span> is an ambitious startup
        </h1>
        <p className="mb-[24px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          that helps you navigate the complex maze of modern tech
        </p>
        <p className="mx-auto max-w-[900px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
          We started ideaXplode to help ideators, innovators and startup founders to enter into and
          succeed in this brave new world of AI. This is the dawn of a new age where we and the
          machines co-exist. From this point on, we and the machines will be creating the future
          together. We want to help you solve the problems that crop up in this new age.
        </p>
      </div>
    </section>
  );
}
