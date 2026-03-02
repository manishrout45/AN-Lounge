import React from "react";

export default function StoryAboutBeauty() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        
        {/* LEFT CONTENT */}
        <div className="relative text-center lg:text-left space-y-6">
          <h2 className="fade-right text-3xl md:text-4xl font-raleway font-bold text-gray-900">
            Story of Style & Beauty
          </h2>

          {/* Small underline */}
          <div className="w-10 h-[2px] bg-[#1f1a18] mx-auto lg:mx-0"></div>

          <p className="fade-up text-sm text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            AN Lounge is a premium unisex salon where style meets elegance. We
            believe beauty is not just about looks, but about confidence and
            personality.
          </p>

          <p className="fade-up text-sm text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            From professional hair styling and grooming to stunning bridal
            makeup and creative nail art, our expert artists deliver
            personalized services to make every client feel special, stylish,
            and beautiful.
          </p>

          <button className="mt-4 inline-block bg-[#1f1a18] text-white text-sm tracking-wider px-8 py-3 hover:bg-[#d9a64d] transition relative z-10">
            EXPLORE SERVICES
          </button>

          {/* DECORATIVE COMB IMAGE */}
          <img
            src="/assets/images/comb02.png"
            className="absolute bottom-0 translate-y-20 w-72 opacity-20 pointer-events-none"
          />

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/images/Scissor&Hair.png"
            alt="Hair & Scissors"
            className="w-full max-w-lg object-contain lg:-mt-20"
          />

        </div>

      </div>
    </section>
  );
}
