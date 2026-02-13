export default function ChallengeSection() {
  return (
    <section className="section-line reveal py-[112px] max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <div className="rounded-[20px] border border-gray-200 bg-[#FDEEEF] px-[32px] py-[32px] text-center shadow-sm transition-all duration-300 hover:shadow-md">
          <h2 className="mb-[16px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
            Take the <span className="text-orange-500">One-Week Challenge!</span>
          </h2>
          <p className="mx-auto mb-[24px] max-w-[820px] text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
            Want to see what ideaXplode can build for you in a week&apos;s time?
            Pay for it only if you want to continue with the project. Some terms
            and conditions apply.
          </p>
          <button className="inline-flex h-[48px] items-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
            <i className="bi bi-hand-thumbs-up" />
            Take up the challenge
          </button>
        </div>
      </div>
    </section>
  );
}
