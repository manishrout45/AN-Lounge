export default function VerticalContact() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group">
      <a
        href="tel:+919876543210"
        className="bg-gradient-to-b from-blue-500 to-blue-800 text-white w-12 h-52 rounded-r-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:w-16"
      >
        <span className="blink transform -rotate-90 text-xs font-bold tracking-widest whitespace-nowrap">
          CALL : +91 82491 25231
        </span>
      </a>
    </div>
  );
}
