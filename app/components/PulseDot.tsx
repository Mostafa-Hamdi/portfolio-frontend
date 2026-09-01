"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PulseDot({ className = "" }: { className?: string }) {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dotTween = gsap.to(dotRef.current, {
      opacity: 0.35,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    const ringTween = gsap.fromTo(
      ringRef.current,
      { scale: 1, opacity: 0.6 },
      {
        scale: 2.4,
        opacity: 0,
        duration: 1.6,
        repeat: -1,
        ease: "power1.out",
      },
    );
    return () => {
      dotTween.kill();
      ringTween.kill();
    };
  }, []);

  return (
    <span className={`relative inline-flex w-2 h-2 ${className}`}>
      <span
        ref={ringRef}
        className="absolute inset-0 rounded-full bg-brand-cyan"
      />
      <span
        ref={dotRef}
        className="absolute inset-0 rounded-full bg-brand-cyan"
      />
    </span>
  );
}
