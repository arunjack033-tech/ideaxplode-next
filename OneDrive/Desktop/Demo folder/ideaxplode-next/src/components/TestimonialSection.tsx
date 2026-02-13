"use client";

import { useState } from "react";

const testimonials = [
  {
    text:
      "I have worked with numerous offshore software consultants but Rathan's team is at least 100 times better.",
    author: "Philip Bradley",
    role: "CTO, Lencomms Inc.",
  },
  {
    text: "ideaXplode helped us launch faster than any team we've worked with.",
    author: "Startup Founder",
    role: "FinTech Company",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((value) => (value + 1) % testimonials.length);
  const prev = () =>
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[current];

  return (
    <section className="section-line reveal py-[112px] max-[768px]:py-[72px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 items-center gap-x-[64px] px-6 max-[768px]:grid-cols-1 max-[768px]:gap-y-[32px] max-[768px]:px-4 max-[768px]:text-center">
        <div className="relative h-[260px] w-[360px] max-[900px]:mx-auto">
          <img
            src="/assets/images/TeamPhoto08d.jpg"
            alt="Team"
            className="img-tilt-1 absolute h-full w-full rounded-[10px] border-[12px] border-white object-cover shadow-[0_18px_34px_rgba(0,0,0,0.2)]"
          />
          <img
            src="/assets/images/TeamPhoto09.jpg"
            alt="Team"
            className="img-tilt-2 absolute h-full w-full rounded-[10px] border-[12px] border-white object-cover shadow-[0_18px_34px_rgba(0,0,0,0.2)]"
          />
          <img
            src="/assets/images/TeamPhoto10.jpg"
            alt="Team"
            className="img-tilt-3 absolute h-full w-full rounded-[10px] border-[12px] border-white object-cover shadow-[0_18px_34px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={prev}
            className="absolute left-[-40px] top-[40%] text-[32px] text-[#c0c0c0] max-[768px]:hidden"
          >
            &#8249;
          </button>
          <blockquote className="mb-[20px] text-[28px] font-semibold leading-[34px] text-[#000000] max-[768px]:text-[28px] max-[768px]:leading-[34px]">
            &ldquo; {item.text} &rdquo;
          </blockquote>
          <div className="mt-[6px] flex items-center gap-[12px] max-[768px]:justify-center">
            <div className="relative">
              <img
                src="/assets/images/ClientPhoto-1.jpg"
                alt={item.author}
                className="h-[44px] w-[44px] rounded-full object-cover"
              />
              <span className="absolute -bottom-[4px] -right-[4px] rounded-[4px] bg-[#0a66c2] px-[4px] py-[2px] text-[10px] font-semibold text-white">
                in
              </span>
            </div>
            <p className="text-left text-[14px] font-semibold text-[#333]">
              &mdash; {item.author}
              <br />
              <span className="text-[#6d6d6d]">{item.role}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={next}
            className="absolute right-[-40px] top-[40%] text-[32px] text-[#c0c0c0] max-[768px]:hidden"
          >
            &#8250;
          </button>
        </div>
      </div>

      <p className="mt-[64px] text-center text-[28px] font-semibold leading-[34px] text-[#000000]">
        You can think of us as your innovation partner &mdash; as you lead your organization into
        AI transformation.
      </p>
    </section>
  );
}
