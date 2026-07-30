import {
  FaCamera,
  FaHeart,
  FaPlane,
  FaFilm,
  FaDesktop,
  FaBroadcastTower,
} from "react-icons/fa";
import Container from "./Container";

const services = [
  {
    icon: FaCamera,
    title: "Wedding Shoot",
    description: "Your wedding moments, beautifully captured.",
  },
  {
    icon: FaHeart,
    title: "Pre Wedding",
    description: "Turn your love story into a cinematic experience.",
  },
  {
    icon: FaPlane,
    title: "Drone Shoot",
    description: "Stunning aerial perspectives for your special day.",
  },
  {
    icon: FaFilm,
    title: "Video Editing",
    description: "Professional editing with a cinematic touch.",
  },
  {
    icon: FaDesktop,
    title: "LED Wall",
    description: "Premium visual experience for your celebrations.",
  },
  {
    icon: FaBroadcastTower,
    title: "Live Shoot",
    description: "Capture and stream your event as it happens.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-(--background) py-20 lg:py-20 sm:py-28"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-(--gold)/5 blur-[140px]" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div
          className="flex w-full flex-col items-center justify-center text-center"
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-(--gold)">
            What We Do
          </p>

          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Our
            <span className="ml-3 italic text-(--gold)">Services</span>
          </h2>

          <p
            className="w-full max-w-xl text-center text-sm leading-relaxed text-gray-400 sm:text-base"
            style={{
              marginTop: "1.75rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            From intimate moments to grand celebrations, we capture every detail
            with creativity and precision.
          </p>
        </div>

        {/* Services Grid with Explicit Top Margin for Guaranteed Spacing */}
        <div
          className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          style={{ marginTop: "3.5rem" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-(--card) transition-all duration-300 hover:-translate-y-2 hover:border-(--gold)/60 hover:shadow-xl hover:shadow-(--gold)/10"
                style={{ padding: "2rem" }} /* Guaranteed Card Padding */
              >
                <div>
                  {/* Top Header inside Card */}
                  <div
                    className="flex items-center justify-between"
                    style={{ paddingBottom: "2rem" }} /* Inner Padding Fix */
                  >
                    <span className="font-serif text-base font-medium text-(--gold)/70">
                      0{index + 1}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--gold)/30 bg-(--gold)/10 text-(--gold) transition-all duration-300 group-hover:rotate-6 group-hover:border-(--gold) group-hover:bg-(--gold) group-hover:text-black">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Body Text */}
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <h3 className="font-serif text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-(--gold)">
                      {service.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed text-gray-400"
                      style={{ marginTop: "0.5rem" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className="h-0.5 w-12 bg-(--gold)/30 transition-all duration-500 group-hover:w-full group-hover:bg-(--gold)" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
