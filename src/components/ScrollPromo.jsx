import React, { useEffect } from "react";

export default function ScrollPromo() {
  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        const progress = Math.abs(rect.top) / sectionHeight;
        textBox.style.transform = `translateY(-${progress * 60}px)`;
        textBox.style.opacity = `${1 - progress * 0.6}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="scrollSection"
      className="relative h-[60vh] overflow-hidden"
    >
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/portrait-woman-traditional-clothing_1048944-5339999.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div
          id="scrollText"
          className="max-w-6xl mx-auto px-6 md:px-12 space-y-5 transition-transform duration-200 ease-out"
        >
          <p className="text-[#e6e1c3] italic text-lg tracking-wide">
            expert stylists
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-raleway font-semibold leading-tight">
            DISCOVER YOUR <br /> SIGNATURE LOOK
          </h1>

          <button className="mt-4 px-7 py-3 border border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
