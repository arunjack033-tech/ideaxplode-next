"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const onScroll = () => {
      const trigger = window.innerHeight - 100;
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
