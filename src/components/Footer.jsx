import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1f1a18] via-[#2b2623] to-[#3a2f2b] text-[#c7b89a]">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/AN_LOGO_png.png" // replace with your logo path
              alt="AN Lounge"
              className="w-24 h-24 object-contain"
            />
            <h2 className="text-xl font-semibold tracking-wide">
              AN
              <span className="block text-md tracking-[0.3em] text-[#bfae8f]">
                Lounge
              </span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed max-w-xs text-white">
            Beautiful hair can have a positive impact on your appearance.
          </p>

          <p className="text-sm font-medium">Share with us</p>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[#e0d3b2]">
            Support
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Refunds & Returns</li>
            <li>Deliveries</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[#e0d3b2]">
            Information
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li>Search Terms</li>
            <li>Advanced Search</li>
            <li>Help & FAQ's</li>
            <li>Store Locations</li>
            <li>Orders & Return</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-[#e0d3b2]">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white">
              <FaMapMarkerAlt className="mt-1 text-[#bfae8f]" />
              <span>
                1st Floor, near magnum wine shop,<br /> Block N5, IRC Village, Nayapalli,<br /> Bhubaneswar, Odisha 751015
              </span>
            </li>

            <li className="flex items-center gap-3 text-white">
              <FaPhoneAlt className="text-[#bfae8f]" />
              +91 82491 25231
            </li>

            <li className="flex items-center gap-3 text-white">
              <FaEnvelope className="text-[#bfae8f]" />
              doppletech8@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#3a342f] py-4 text-center text-xs text-[#a89a7b]">
        © {new Date().getFullYear()} AN Lounge. All rights reserved.
      </div>
    </footer>
  );
}
