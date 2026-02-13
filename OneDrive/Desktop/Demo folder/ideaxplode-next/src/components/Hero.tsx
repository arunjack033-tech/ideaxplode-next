export default function Hero() {
  return (
    <section className="reveal bg-gradient-to-br from-[#FDEEEF] via-white to-[#E9F4FF] py-[112px] max-[768px]:py-[72px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 items-center gap-x-[64px] px-6 max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px] max-[768px]:px-4">
        <div className="flex flex-col gap-y-[32px]">
          <h1 className="text-[72px] font-semibold leading-[78px] text-[#000000] max-[768px]:text-[36px] max-[768px]:leading-[42px]">
            If you&apos;ve got an idea,
            <br />
            we can make it <span className="text-[#ff7a59]">Xplode</span>
            <br />
            into...
          </h1>
          <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
            We&apos;re a high-performance software development team.
            <br />
            We build apps fast &mdash; using{" "}
            <span className="font-semibold text-[#3b7dff]">No-Code</span> and{" "}
            <span className="font-semibold text-[#ff7a59]">AI Tools</span>.
          </p>
          <button className="inline-flex h-[48px] w-fit items-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
            <i className="bi bi-arrow-down-circle-fill" />
            How fast can you build?
          </button>
        </div>

        <div className="flex items-center gap-x-[48px] max-[768px]:gap-x-[24px]">
          <div className="h-[220px] w-px bg-[#d9d9d9] max-[768px]:hidden" />
          <div className="w-full rounded-[20px] border border-gray-200 bg-white p-[32px] shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="rounded-[16px] bg-gradient-to-br from-[#FDEEEF] via-white to-[#E9F4FF] p-[28px] text-center">
              <p className="text-[18px] font-medium leading-[28px] text-orange-500">
                a
              </p>
              <h3 className="text-[24px] font-semibold leading-[32px] text-[#000000]">
                SaaS Product
              </h3>
              <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
                with good ARR
              </p>
            </div>
            <div className="mt-[24px] text-center">
              <p className="text-[18px] font-medium leading-[28px] text-orange-500">
                AI Workflows
              </p>
              <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
                to achieve the previously impossible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
