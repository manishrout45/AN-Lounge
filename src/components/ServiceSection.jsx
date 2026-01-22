export default function ServiceSection() {
  const services = [
  {
    title: "BRIDAL MAKEUP",
    img: "https://img.freepik.com/premium-photo/image-makeup-artist-doing-bridal-woman-elegant-makeup_1021867-35657.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "HAIR STYLING",
    img: "https://img.freepik.com/premium-photo/hairdresser-with-scissors-cuts-woman-s-hair-hairdressing-salon-stylist-client-hairsalon-beauty-business-professional-service_266732-18626.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "FACIAL & SKINCARE",
    img: "https://img.freepik.com/premium-photo/woman-cosmetologist-making-beauty-procedures_926199-2585419.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "GROOMING FOR MEN",
    img: "https://img.freepik.com/premium-photo/side-view-young-man-holding-hands_114963-23731.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "HAIR COLORING",
    img: "https://img.freepik.com/free-photo/blonde-girl-getting-her-hair-done_23-2148108856.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "PARTY MAKEUP",
    img: "https://img.freepik.com/free-photo/two-girls-are-doing-make-up-front-big-mirror_231208-3556.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];


  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-4xl font-raleway font-semibold text-gray-800">
              Unisex Salon & Bridal Makeup Studio
            </h2>
            <p className="font-lato text-gray-500 leading-relaxed">
              Experience premium unisex salon services and flawless bridal
              makeup crafted by professional artists. From elegant hairstyles
              to radiant makeup looks, we bring beauty to perfection.
              Our team focuses on understanding your style, preferences,
              and occasion to deliver results that feel natural, confident,
              and long-lasting. Using high-quality products and modern
              techniques, we ensure every service enhances your beauty
              while providing a relaxing and luxurious salon experience.
            </p>

            <a
              href="#"
              className="inline-block bg-[#1f1a18] text-white px-6 py-2 mt-4 text-sm uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
              alt="Bridal Makeup"
              className="w-full max-w-[420px] rounded-xl object-cover"
            />
          </div>
        </div>

        {/* SERVICES GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group h-72 overflow-hidden rounded-xl"
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* SLIDE UP OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-[#3a2f2b]/60
                  flex items-end justify-center
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
              >
                <h3 className="font-raleway text-white text-xl font-extrabold tracking-wide mb-6">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 lg:ml-10">
            <img
              src="/assets/images/hairBrush.png"
              alt="Hair Brush"
              className="w-84 object-contain"
            />
            <img
              src="/assets/images/comb.png"
              alt="Comb"
              className="w-84 object-contain"
            />
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl lg:text-4xl font-raleway font-semibold text-gray-800">
              Beauty, Style & Confidence
            </h2>
            <p className="font-lato text-gray-500 leading-relaxed">
              Our unisex salon offers personalized grooming, luxury hair care,
              and professional bridal makeup services designed to make every
              client feel confident and beautiful. From precision haircuts,
              advanced coloring, and trend-focused styling to flawless bridal,
              party, and occasion makeup, our experienced artists work closely
              with you to create looks that suit your personality and lifestyle.
              We use premium products, modern techniques, and a relaxed,
              welcoming environment to ensure every visit is a refreshing and
              confidence-boosting experience.
            </p>


            <a
              href="#"
              className="inline-block bg-[#1f1a18] text-white px-6 py-2 mt-4 text-sm uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
