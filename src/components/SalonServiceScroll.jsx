import React, { useEffect, useRef, useState } from "react";

const services = [
  "HAIR CUT & STYLING",
  "HAIR COLORING",
  "KERATIN TREATMENT",
  "FACIAL & CLEANUP",
  "BRIDAL MAKEUP",
  "MANICURE & PEDICURE",
];

export default function SalonServiceScroll() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  const duplicatedServices = [...services, ...services]; // duplicate for infinite scroll

  // ✅ Start animation when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartScroll(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ✅ Infinite smooth scroll
  useEffect(() => {
    if (!startScroll) return;

    const container = containerRef.current;
    let animationId;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += 0.5; // speed control

      // reset scroll for seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [startScroll]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-4 bg-white"
    >
      <div
        ref={containerRef}
        className="flex items-center gap-10 py-6 overflow-x-hidden px-6 md:px-12 whitespace-nowrap"
      >
        {duplicatedServices.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[200px] md:min-w-[260px] lg:min-w-[320px]"
          >
            <h2
              className={`font-poppins text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide ${
                index % 2 === 0 ? "text-[#1f1a18]" : "text-[#daceba]"
              }`}
            >
              {item}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
