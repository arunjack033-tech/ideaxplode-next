"use client";

import { useState } from "react";

const promises = [
  {
    title: "We build fast",
    desc: "AI agents accelerate delivery without compromising quality.",
  },
  {
    title: "We communicate clearly",
    desc: "Clear documentation, demos and async updates at every stage.",
  },
  {
    title: "We are responsive",
    desc: "Fast turnaround times and proactive support.",
  },
  {
    title: "We send daily updates",
    desc: "Daily progress summaries so you always know what's happening.",
  },
  {
    title: "We maintain transparency",
    desc: "Open scope, visible backlog and shared decision-making.",
  },
  {
    title: "We care about your success",
    desc: "We optimise for outcomes, not just outputs.",
  },
];

export default function PromisesSection() {
  const [open, setOpen] = useState<boolean[]>(() => promises.map(() => false));

  const toggle = (index: number) => {
    setOpen((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <section className="section-line reveal py-[112px] text-center max-[768px]:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-6 max-[768px]:px-4">
        <p className="mb-[32px] text-[18px] font-medium text-orange-500">
          Our promises:
        </p>

        <div className="mb-[64px] grid grid-cols-3 gap-x-[32px] gap-y-[32px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px]">
          {promises.map((item, index) => (
            <div
              key={item.title}
              className="relative flex items-center justify-between gap-[12px] border-b border-[#e7e7e7] pb-[10px]"
            >
              <span className="text-[18px] font-semibold leading-[28px] text-[#000000]">
                {item.title}
              </span>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="inline-flex h-[32px] items-center gap-[6px] rounded-[12px] border border-gray-200 bg-white px-[10px] text-[12px] font-medium text-gray-600 transition-all duration-300 hover:shadow-md"
              >
                <i className="bi bi-chevron-down" /> How?
              </button>
              {open[index] && (
                <p className="absolute left-0 right-0 top-[36px] text-[14px] leading-[22px] text-gray-600">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-[900px] text-[28px] font-semibold leading-[34px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
          With Agentic Agile, startup founders could see their product evolve in real time,
          iteratively.
        </p>
      </div>
    </section>
  );
}
