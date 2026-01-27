import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown, FaClock } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1920&q=80",
];

const openHours = {
  Monday: "10 am – 7:30 pm",
  Tuesday: "10 am – 8:30 pm",
  Wednesday: "10 am – 8:30 pm",
  Thursday: "9 am – 5 pm",
  Friday: "10 am – 8:30 pm",
  Saturday: "10 am – 8:30 pm",
  Sunday: "Closed",
};

export default function HeroSection() {
  const [[index, direction], setSlide] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(([prev]) => [(prev + 1) % images.length, 1]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlide(([prev]) => [(prev + 1) % images.length, 1]);
  };

  const prevSlide = () => {
    setSlide(([prev]) => [(prev - 1 + images.length) % images.length, -1]);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayTime = openHours[today];

  return (
    // 👇 exact height = screen - navbar (80px)
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          className="absolute inset-0 bg-center bg-cover will-change-transform"
          style={{ backgroundImage: `url(${images[index]})` }}
          custom={direction}
          initial={{ y: direction === 1 ? "100%" : "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: direction === 1 ? "-100%" : "100%" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* SLIDE CONTROLS */}
      <div className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 md:gap-3">
        <button onClick={prevSlide} className="w-10 h-10 border border-white text-white hover:bg-white hover:text-black transition flex items-center justify-center">
          <FaChevronUp size={14} />
        </button>
        <button onClick={nextSlide} className="w-10 h-10 border border-white text-white hover:bg-white hover:text-black transition flex items-center justify-center">
          <FaChevronDown size={14} />
        </button>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center justify-center text-center h-full px-4">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
          >
            Discover Your Beauty
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mt-3"
          >
            Luxury salon experience crafted just for you
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button onClick={prevSlide} className="sm:hidden w-9 h-9 border border-white text-white hover:bg-white hover:text-black transition flex items-center justify-center">
              <FaChevronUp size={14} />
            </button>

            <a
              href="#"
              className="border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
              Book Appointment
            </a>

            <button onClick={nextSlide} className="sm:hidden w-9 h-9 border border-white text-white hover:bg-white hover:text-black transition flex items-center justify-center">
              <FaChevronDown size={14} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mt-4 flex flex-col items-center gap-3"
          >
            <span className="uppercase tracking-[0.3em] text-white/70 text-[10px]">
              Opens Today
            </span>

            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white text-xs shadow-lg">
              <FaClock />
              <span>
                {today} :{" "}
                <span className={todayTime === "Closed" ? "text-red-300" : ""}>
                  {todayTime}
                </span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
