import { FaMobileAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#daceba] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="fade-right relative flex justify-center">
          <div className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[420px]
                          h-[340px] sm:h-[420px] md:h-[460px] lg:h-[520px]
                          rounded-[260px] overflow-hidden mt-28">
            <img
              src="https://i.pinimg.com/474x/3c/02/21/3c022134e0df3b922571ac8f5f2081f5.jpg"
              alt="AN Lounge Salon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative text-[#1f1a18] overflow-hidden">

          {/* CIRCULAR ROTATING BADGE */}
          <div className="mb-10 flex justify-start">
            <div className="relative w-28 h-28 flex items-center justify-center overflow-hidden">

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
                  <text fill="#2b3316" fontSize="8" letterSpacing="3" className="uppercase">
                    <textPath href="#circlePath">
                      Haircuts • Colors • Styling •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="w-14 h-14 rounded-full border border-[#1f1a18]/40 
                              flex items-center justify-center bg-[#1f1a18] z-10 overflow-hidden">
                <img
                  src="/assets/images/AN_LOGO_png.png"
                  alt="Salon Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>

          <p className="italic text-xl mb-2">ABOUT US</p>

          <h2 className="fade-left text-4xl lg:text-5xl font-raleway font-bold leading-tight uppercase tracking-wide mb-6">
            Welcome to <br /> AN Lounge <br /> Unisex Salon
          </h2>

          {/* UPDATED MAIN CONTENT */}
          <p className="fade-up max-w-xl leading-relaxed mb-6 text-[#1f1a18]/80">
            Since 2022, AN Lounge Unisex Salon has been a leading name in beauty and hair care
            services in Bhubaneswar, Odisha. From hair care and styling to face care and nail care,
            and from makeup to beard grooming, we have a team of professional beauticians, hair
            specialists, and men's grooming experts.
          </p>

          <p className="fade-up max-w-xl leading-relaxed mb-6 text-[#1f1a18]/80">
            Whether you are looking for a relaxing head massage, a simple haircut, or a complete makeover,
            we are ready to offer you:
          </p>

          {/* SERVICES LIST */}
          <ul className="mb-10 space-y-2 text-[#1f1a18]/90 font-medium">
            <li>• Expert Makeup Solutions</li>
            <li>• Professional Hair and Nail Care</li>
            <li>• Exceptional Customer Services</li>
          </ul>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="border border-[#1f1a18] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#1f1a18] hover:text-white transition-all duration-500"
            >
              More About Us
            </a>

            <div className="flex items-center gap-3 text-sm tracking-wider">
              <div className="w-10 h-10 border border-[#1f1a18]/40 flex items-center justify-center">
                <FaMobileAlt className="text-[#1f1a18]" />
              </div>
              <span>
                PHONE NUMBER <br />
                <span className="text-[#1f1a18]/80">+91 82491 25231</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
