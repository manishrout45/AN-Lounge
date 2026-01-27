import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    text: "Soft lighting, calming music, and expert service made my appointment peaceful and memorable from start to finish.",
    name: "Samanta Fox",
    role: "Customer",
    rating: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0591/6422/9806/files/Curtain_Bangs_with_Medium_Hair.jpg?v=1763448829",
  },
  {
    id: 2,
    text: "The staff were friendly and professional. I felt completely pampered and relaxed throughout my visit.",
    name: "John Doe",
    role: "Customer",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.1312737827.1743758138&w=740&q=80",
  },
  {
    id: 3,
    text: "Amazing experience! The salon ambiance is perfect, and the stylists really know their craft.",
    name: "Emily Clark",
    role: "Customer",
    rating: 5,
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/07/17125604/96259876_133986691545335_4374797284558014068_n-645x806.jpg",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateImage, setAnimateImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Image animation trigger
  useEffect(() => {
    setAnimateImage(false);
    const timeout = setTimeout(() => setAnimateImage(true), 200);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="w-full bg-[#daceba] py-16 sm:py-20 lg:py-24 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 px-4 sm:px-6">

        {/* LEFT IMAGE WITH ANIMATION */}
        <div className="flex justify-center lg:justify-end">
          <div
            className={`w-full max-w-[380px] sm:max-w-[420px] h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden transition-all duration-700 ease-in-out
              ${animateImage ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-8"}
            `}
            style={{
              borderTopLeftRadius: "220px",
              borderTopRightRadius: "220px",
              borderBottomLeftRadius: "220px",
              borderBottomRightRadius: "12px",
            }}
          >
            <img
              src={testimonialData[currentIndex].image}
              alt={testimonialData[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-6 text-[#2b3316]">

          <p className="italic text-sm sm:text-base tracking-wide text-[#5a5f3a]">
            Customers
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-bold uppercase tracking-wide">
            Lovely Customers
          </h2>

          {/* STARS */}
          <div className="flex gap-1 text-[#8b7b3e] text-sm sm:text-base">
            {Array.from({ length: testimonialData[currentIndex].rating }).map(
              (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.384-2.454a1 1 0 00-1.175 0l-3.384 2.454c-.784.57-1.838-.197-1.539-1.118l1.285-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              )
            )}
          </div>

          <p className="leading-relaxed text-sm sm:text-base md:text-lg text-[#3d4028]">
            {testimonialData[currentIndex].text}
          </p>

          {/* CUSTOMER */}
          <div className="flex items-center gap-3 sm:gap-4 pt-2">
            <div className="relative">
              <img
                src={testimonialData[currentIndex].image}
                alt={testimonialData[currentIndex].name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <span className="absolute -top-1 -right-1 bg-[#8b7b3e] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-[10px] sm:text-xs" />
              </span>
            </div>

            <div>
              <p className="uppercase text-xs sm:text-sm tracking-wide">
                {testimonialData[currentIndex].name}
              </p>
              <p className="text-[10px] sm:text-xs text-[#6b6f45]">
                {testimonialData[currentIndex].role}
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-6">
            {testimonialData.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  currentIndex === idx
                    ? "bg-[#8b7b3e]"
                    : "bg-[#2b331633]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
