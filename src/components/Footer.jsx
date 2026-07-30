import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#050505]"
      style={{ paddingTop: "4rem" }}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -bottom-36 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-(--gold)/10 blur-[130px]"
      />

      <Container className="relative z-10">
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          style={{ paddingBottom: "3.5rem" }}
        >
          {/* Brand Column */}
          <div>
            <a href="#home" className="inline-block">
              <h2 className="font-serif text-3xl font-semibold text-white">
                Muskan
                <span className="text-(--gold)">.</span>
              </h2>

              <p
                className="text-[10px] tracking-[0.35em] text-(--gold)"
                style={{ marginTop: "0.25rem" }}
              >
                VIDEOGRAPHY
              </p>
            </a>

            <p
              className="max-w-sm text-sm leading-relaxed text-gray-400"
              style={{ marginTop: "1.25rem" }}
            >
              We don't just shoot, we capture emotions. Creating timeless
              memories through cinematic photography and videography.
            </p>

            {/* Social Icons (using React Icons) */}
            <div
              className="flex items-center gap-3"
              style={{ marginTop: "1.75rem" }}
            >
              <a
                href="https://www.instagram.com/muskan_videography_/?hl=en"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-(--gold) hover:bg-(--gold) hover:text-black"
                aria-label="Instagram"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.instagram.com/muskan_videography_/?hl=en"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-(--gold) hover:bg-(--gold) hover:text-black"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.instagram.com/muskan_videography_/?hl=en"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-(--gold) hover:bg-(--gold) hover:text-black"
                aria-label="YouTube"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)"
              style={{ marginBottom: "1.5rem" }}
            >
              Quick Links
            </p>

            <div className="flex flex-col gap-3.5">
              <a
                href="#home"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-(--gold)"
              >
                Home
              </a>

              <a
                href="#services"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-(--gold)"
              >
                Services
              </a>

              <a
                href="#contact"
                className="w-fit text-sm text-gray-400 transition-colors hover:text-(--gold)"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Information Column */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)"
              style={{ marginBottom: "1.5rem" }}
            >
              Contact Us
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+918298422602"
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-(--gold)"
              >
                <FaPhoneAlt size={15} className="mt-1 shrink-0 text-(--gold)" />

                <span className="leading-relaxed">
                  +91 8298422602
                  <br />
                  +91 7004517029
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=Kanosi+Raksi+Chowk"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-(--gold)"
              >
                <FaMapMarkerAlt
                  size={16}
                  className="mt-1 shrink-0 text-(--gold)"
                />

                <span className="leading-relaxed">Kanosi Raksi Chowk</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 border-t border-white/10 sm:flex-row sm:items-center sm:justify-between"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Muskan Videography. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-(--gold) cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-1 text-(--gold)"
            />
          </button>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
