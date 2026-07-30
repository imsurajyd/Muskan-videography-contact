import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Container from "./Container";
import Button from "./Button";

const contactItems = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+91 8298422602",
    secondValue: "+91 7004517029",
    href: "tel:+918298422602",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "Kanosi Raksi Chowk",
    href: "https://maps.google.com/?q=Kanosi+Raksi+Chowk",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat With Us",
    href: "https://wa.me/918298422602",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505]"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[130px]"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col items-center justify-center text-center"
          style={{ marginBottom: "3.5rem" }}
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.35em] text-(--gold)"
            style={{ marginBottom: "0.75rem" }}
          >
            Get In Touch
          </p>

          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Create
            <span
              className="block italic text-(--gold)"
              style={{ marginTop: "0.25rem" }}
            >
              Something Beautiful
            </span>
          </h2>

          <p
            className="w-full max-w-xl text-center text-sm leading-relaxed text-gray-400 sm:text-base"
            style={{
              marginTop: "1.5rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Your special moments deserve to be remembered forever. Get in touch
            with us and let's make them unforgettable.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1.5rem" }}
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" ? "_blank" : undefined}
                rel={item.title === "Visit Us" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] transition-all duration-300 hover:border-(--gold)/60 hover:shadow-xl hover:shadow-(--gold)/10"
                style={{ padding: "1.75rem" }}
              >
                {/* Card Subtle Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-(--gold)/10 blur-3xl transition-all duration-500 group-hover:bg-(--gold)/20" />

                <div className="relative z-10">
                  {/* Top Row: Icon + Arrow */}
                  <div
                    className="flex items-center justify-between"
                    style={{ paddingBottom: "1.75rem" }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--gold)/30 bg-(--gold)/10 text-(--gold) transition-all duration-300 group-hover:rotate-6 group-hover:border-(--gold) group-hover:bg-(--gold) group-hover:text-black">
                      <Icon size={19} />
                    </div>

                    <FaArrowUpRightFromSquare
                      size={15}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-(--gold)"
                    />
                  </div>

                  {/* Card Content */}
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {item.title}
                  </p>

                  <h3 className="font-serif text-xl font-medium text-white sm:text-2xl">
                    {item.value}
                  </h3>

                  {item.secondValue && (
                    <p
                      className="text-sm text-gray-400"
                      style={{ marginTop: "0.25rem" }}
                    >
                      {item.secondValue}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-(--gold)/30 bg-[#0D0D0D] sm:flex-row"
          style={{ marginTop: "2.5rem", padding: "2rem" }}
        >
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl font-semibold text-white">
              Ready to capture your story?
            </h3>

            <p
              className="text-sm text-gray-400"
              style={{ marginTop: "0.25rem" }}
            >
              Let's discuss your next event and plan something amazing.
            </p>
          </div>

          <Button href="tel:+918298422602" variant="primary">
            <FaPhoneAlt size={14} />
            <span>Contact Us</span>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
