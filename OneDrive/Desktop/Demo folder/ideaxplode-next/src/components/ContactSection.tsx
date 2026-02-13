export default function ContactSection() {
  return (
    <section className="section-line reveal py-[112px] max-[768px]:py-[72px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 items-center gap-x-[64px] px-6 max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px] max-[768px]:px-4 max-[768px]:text-center">
        <div>
          <h3 className="mb-[32px] text-[48px] font-semibold leading-[56px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
            Feel free to <span className="text-orange-500">reach out</span> to us!
          </h3>

          <div className="mb-[28px]">
            <h4 className="mb-[6px] text-[24px] font-semibold">
              Want to see an app demo?
            </h4>
            <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
              We can share the credentials of an app that we had built &mdash; for you to try.
            </p>
          </div>

          <div className="mb-[28px]">
            <h4 className="mb-[6px] text-[24px] font-semibold">
              Want to sign an NDA?
            </h4>
            <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
              If you prefer to sign an NDA with us before discussing your idea, we can get it done
              in 48 hours.
            </p>
          </div>

          <div className="mb-[28px]">
            <h4 className="mb-[6px] text-[24px] font-semibold">
              Want to join our team?
            </h4>
            <p className="text-[18px] leading-[28px] text-gray-600 max-[768px]:text-[16px] max-[768px]:leading-[24px]">
              We have developer and intern positions open. If you think you have a problem-solving
              mindset and are willing to take up challenges as part of the interview process, please
              send in your resume &mdash; let&apos;s get the conversation started.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] max-[768px]:items-center">
          <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
            <i className="bi bi-stars" /> Get app credentials
          </button>
          <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
            <i className="bi bi-pen" /> Sign NDA
          </button>
          <button className="inline-flex h-[48px] items-center justify-center gap-[8px] rounded-[12px] bg-black px-[24px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-gray-900">
            <i className="bi bi-people" /> Apply to join
          </button>
        </div>
      </div>
    </section>
  );
}
