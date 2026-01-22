import { FaMobileAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#daceba] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="w-[420px] h-[520px] rounded-[260px] overflow-hidden">
            <img
              src="https://i.pinimg.com/474x/3c/02/21/3c022134e0df3b922571ac8f5f2081f5.jpg"
              alt="AN Lounge Salon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative text-[#1f1a18]">

          {/* CIRCULAR ROTATING BADGE */}
<div className="mb-10 flex justify-start">
  <div className="relative w-28 h-28 flex items-center justify-center">

    {/* ROTATING TEXT */}
    <div className="absolute inset-0 rounded-full animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50
               m -40, 0
               a 40,40 0 1,1 80,0
               a 40,40 0 1,1 -80,0"
          />
        </defs>
        <text
          fill="#2b3316"
          fontSize="8"
          letterSpacing="3"
          className="uppercase"
        >
          <textPath href="#circlePath">
            Haircuts • Colors • Styling • Haircuts • Colors • Styling •
          </textPath>
        </text>
      </svg>
    </div>

    {/* CENTER LOGO */}
<div className="w-14 h-14 rounded-full border border-[#1f1a18]/40 
                flex items-center justify-center bg-[#1f1a18] z-10 overflow-hidden">
  <img
    src="/assets/images/AN_LOGO_png.png"   // 🔁 replace with your logo image path
    alt="Salon Logo"
    className="w-16 h-16 object-contain"
  />
</div>


  </div>
</div>


          {/* SCRIPT TITLE */}
          <p className="italic text-xl mb-2 text-[#1f1a18]">
            ABOUT US
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-4xl lg:text-5xl font-raleway font-bold leading-tight uppercase tracking-wide mb-6">
            Welcome to <br /> AN Lounge <br /> Unisex Salon
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-xl leading-relaxed mb-10 text-[#1f1a18]/80">
            At AN Lounge, we celebrate beauty for everyone. Our talented team
            offers personalized haircuts, coloring, and styling services for
            both men and women, ensuring every client leaves feeling confident
            and refreshed.
          </p>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-6">

            {/* BUTTON */}
            <a
              href="#"
              className="border border-[#1f1a18] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#2b3316] hover:text-white transition-all duration-500"
            >
              More About Us
            </a>

            {/* PHONE */}
            <div className="flex items-center gap-3 text-sm tracking-wider">
              <div className="w-10 h-10 border border-[#1f1a18]/40 flex items-center justify-center">
                <FaMobileAlt className="text-[#1f1a18]" />
              </div>
              <span>
                PHONE NUMBER <br />
                <span className="text-[#1f1a18]/80">+111 222 333</span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
