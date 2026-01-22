import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import useScrollFade from "../hooks/useScrollFade";
import SalonServiceScroll from "../components/SalonServiceScroll";
import Testimonial from "../components/Testimonial";
import ScrollPromo from "../components/ScrollPromo";
import StoryAboutBeauty from "../components/StoryAboutBeauty";
import ContactUsSection from "../components/ContactUsSection";
const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <SalonServiceScroll className="fade-right" />
      <ServiceSection className="fade-left" />
      <ScrollPromo className="fade-up" />
      <StoryAboutBeauty className="fade-up" />
      <Testimonial className="fade-left" />
      <ContactUsSection className="fade-right" />

    </>
  );
};

export default Home;
