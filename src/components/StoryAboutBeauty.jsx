import React from "react";

export default function StoryAboutBeauty() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        
        {/* LEFT CONTENT */}
        <div className="relative text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900">
            Story About Beauty
          </h2>

          {/* Small underline */}
          <div className="w-10 h-[2px] bg-[#e6b566] mx-auto lg:mx-0"></div>

          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="mt-4 inline-block bg-[#e6b566] text-white text-sm tracking-wider px-8 py-3 hover:bg-[#d9a64d] transition relative z-10">
            READ MORE
          </button>

          {/* DECORATIVE COMB IMAGE */}
          <img
            src="/assets/images/comb02.png"
            alt="Comb Decoration"
            className="hidden lg:block absolute -bottom-44  w-72 opacity-20 pointer-events-none"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/images/Scissor&Hair.png"
            alt="Hair & Scissors"
            className="-mt-32 w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}
