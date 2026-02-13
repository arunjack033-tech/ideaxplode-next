"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Methodology", href: "#methodology" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-[#fff9f4]">
      <div className="mx-auto flex h-[102px] w-full max-w-6xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a href="#top" className="shrink-0 -ml-2 md:-ml-3">
         <Image
             src="/assets/images/ideaXplode Logo.png"
             alt="ideaXplode"
             width={300}
             height={100}
             className="h-[74px] w-auto md:h-[74px]"
             priority
          />
        </a>

        <nav className="hidden items-center gap-5 text-[15px] font-medium text-[#2f2f2f] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1 rounded-lg px-1.5 py-1.5 leading-none transition-colors duration-200 hover:text-black"
            >
              {item.label}
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-[#6f6f6f] opacity-0 transition-all duration-200 group-hover:translate-y-[1px] group-hover:opacity-100">
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M10 5.7V11.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M7.9 9.5L10 11.8L12.1 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#111] px-[22px] py-[11px] text-[14px] font-semibold leading-none text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-[17px] w-[17px] text-white" aria-hidden="true">
              <path
                d="M12 3A9 9 0 0 0 4.3 16.6L3.3 20.7L7.5 19.6A9 9 0 1 0 12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.2 8.6c.2-.2.4-.2.6-.2h.3c.2 0 .3.1.4.3l.8 1.8c.1.2.1.3 0 .4l-.3.4c-.2.2-.2.3-.1.5c.2.3.6.9 1.3 1.4c.8.6 1.3.7 1.6.8c.2.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.4-.1l1.6.8c.1.1.2.2.2.3c0 .3-.1.8-.4 1.1c-.3.3-.8.5-1.3.5c-.6 0-1.4-.2-2.2-.7c-.8-.5-1.8-1.3-2.4-2.2c-.5-.8-.8-1.6-.8-2.2c0-.6.2-1 .4-1.3Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chat with Rathan
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-11 place-items-center rounded-lg border border-[#e3d8d0] bg-white text-[22px] text-[#333] transition hover:bg-black/5 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "x" : "="}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#eadfd7] bg-[#fff9f4] px-6 py-4 md:px-12 lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2.5 text-[14px] font-medium text-[#2f2f2f]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3.5 py-2.5 transition-colors duration-200 hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#111] px-4 py-2.5 text-center text-[13px] font-semibold !text-white transition duration-200 hover:bg-black"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden="true">
                <path
                  d="M12 3A9 9 0 0 0 4.3 16.6L3.3 20.7L7.5 19.6A9 9 0 1 0 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2 8.6c.2-.2.4-.2.6-.2h.3c.2 0 .3.1.4.3l.8 1.8c.1.2.1.3 0 .4l-.3.4c-.2.2-.2.3-.1.5c.2.3.6.9 1.3 1.4c.8.6 1.3.7 1.6.8c.2.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.4-.1l1.6.8c.1.1.2.2.2.3c0 .3-.1.8-.4 1.1c-.3.3-.8.5-1.3.5c-.6 0-1.4-.2-2.2-.7c-.8-.5-1.8-1.3-2.4-2.2c-.5-.8-.8-1.6-.8-2.2c0-.6.2-1 .4-1.3Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Chat with Rathan
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
