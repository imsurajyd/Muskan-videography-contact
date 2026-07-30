import { ArrowDown } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import heroImage from "../assets/Hero.webp";
import Container from "./Container";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-start overflow-hidden bg-(--background) pt-24 pb-12 sm:pt-28 lg:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Muskan Videography"
          className="h-full w-full object-cover object-[75%_center] sm:object-center"
        />

        {/* Dynamic Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-transparent sm:w-4/5 lg:w-3/5" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--background) to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="max-w-xl sm:max-w-2xl">
            {/* Top Sub-tagline */}
            <p className="mb-2 font-serif text-lg italic tracking-wide text-(--gold) sm:text-2xl md:text-3xl">
              Har Pal... Yaadgaar
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-2xl font-extrabold uppercase leading-snug tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Muskan
              <span className="block text-(--gold)">Videography</span>
            </h1>

            {/* Gold Accent Line */}
            <div className="my-4 h-0.5 w-24 bg-linear-to-r from-(--gold) to-transparent" />

            {/* Sub-quote Tagline */}
            <div className="space-y-1">
              <p className="text-xs font-light tracking-wide text-gray-300 sm:text-base md:text-lg">
                We Don&apos;t Just Shoot,
              </p>
              <p className="font-serif text-lg italic font-medium text-(--gold) sm:text-2xl md:text-3xl">
                We Capture Emotions ❤️
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ marginTop: "1.75rem" }}
            >
              <Button
                href="https://wa.me/918298422602?text=Hi!%20I%20checked%20your%20website%20and%20would%20like%20to%20check%20date%20availability%20and%20pricing%20for%20my%20event."
                variant="primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={16} />
                <span>Message Us</span>
              </Button>

              <Button href="tel:+918298422602" variant="outline">
                <FaPhoneAlt size={14} />
                <span>Call Now</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#services"
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] font-medium tracking-[0.25em] text-white/50 transition-colors hover:text-(--gold) sm:flex"
      >
        <span>SCROLL</span>
        <ArrowDown size={14} className="animate-bounce text-(--gold)" />
      </a>
    </section>
  );
};

export default Hero;
