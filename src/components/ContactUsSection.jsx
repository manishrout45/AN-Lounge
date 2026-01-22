import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function ContactUsSection() {
  return (
    <section className="w-full bg-[#f5efe6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center -mt-20">
            <div className="w-full max-w-md">
              <img
                src="https://i.pinimg.com/474x/85/18/37/85183754111d776d39494f31fa996ca0.jpg"
                alt="Fashion Models"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-raleway font-extrabold text-black mb-10">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* FORM */}
              <div className="md:col-span-2 space-y-8">

                {/* FULL NAME */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    Message
                  </label>
                  <textarea
                    rows="2"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button className="mt-6 bg-[#1f1a18] text-white px-10 py-3 rounded-full hover:bg-black/90 transition">
                  Contact Us
                </button>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-8 text-sm text-black">

                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-black/70 mt-1">hi@fashion.com</p>
                </div>

                <div>
                  <p className="font-medium">Based in</p>
                  <p className="text-black/70 mt-1">
                    San Francisco,<br />
                    California
                  </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 pt-4">
                  <FaFacebookF className="cursor-pointer hover:opacity-60" />
                  <FaInstagram className="cursor-pointer hover:opacity-60" />
                  <FaTwitter className="cursor-pointer hover:opacity-60" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
