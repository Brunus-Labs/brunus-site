"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const header = "Brunus Labs";
  const app = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#char", {
        y: 0,
        stagger: 0.009,
        delay: 0.2,
        duration: 0.5,
      });
      gsap.to("#char", {
        y: "-18rem",
        stagger: 0.009,
        delay: 2,
        duration: 0.5,
      });
      gsap.to("#bg", {
        x: "100vw",
        delay: 1,
        duration: 1,
      });
      gsap.to("#bg-block", {
        display: "none",
        delay: 0.5,
      });
    }, app);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <main ref={app}>
      <div
        id="bg-block"
        className="absolute bg-emerald-600 w-full h-[calc(50vh_-_4rem)] lg:h-[calc(50vh_-_8rem)] z-10"
      />
      <div className="text-[13vw] font-mono flex justify-center h-screen overflow-hidden items-center">
        <div
          id="bg"
          className="absolute w-full h-full bg-emerald-600 ease-in"
        />
        <div className="relative">
          <span className="flex">
            {header.split("").map((c, i) => (
              <span
                key={i}
                id="char"
                className="-translate-y-72 transition-transform whitespace-pre ease-out"
              >
                {c}
              </span>
            ))}
          </span>
        </div>
      </div>
    </main>
  );
}
