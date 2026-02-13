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
    <header className="sticky top-0 z-50 border-b border-[#e7dbd2]/90 bg-[#fff9f4]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] w-full max-w-6xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a href="#top" className="shrink-0">
          <Image
            src="/assets/images/ideaXplode Logo.png"
            alt="ideaXplode"
            width={156}
            height={42}
            className="h-10 w-auto md:h-11"
            priority
          />
        </a>

        <nav className="hidden items-center gap-4 text-[15px] font-medium text-[#2f2f2f] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-2 py-1.5 leading-none transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-[#111] px-[18px] py-2.5 text-[13px] font-semibold leading-none text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black hover:shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
          >
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
              className="mt-2 rounded-lg bg-[#111] px-4 py-2.5 text-center text-[13px] font-semibold text-white transition duration-200 hover:bg-black"
            >
              Chat with Rathan
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
