export const LogoAperture = () => (
  <a href="#home" className="group flex items-center gap-3">
    {/* Camera Aperture SVG */}
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--gold)/30 bg-black/50 transition-transform duration-300 group-hover:scale-103 group-hover:border-(--gold)">
      <svg
        className="h-8 w-8 text-(--gold) transition-transform duration-500 group-hover:rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m14.31 8 5.74 9.94" />
        <path d="M9.69 8h11.48" />
        <path d="m7.38 12 5.74-9.94" />
        <path d="M9.69 16 3.95 6.06" />
        <path d="M14.31 16H2.83" />
        <path d="m16.62 12-5.74 9.94" />
      </svg>
    </div>

    {/* Brand Text */}
    <div className="leading-none">
      <h1 className="font-serif text-lg font-semibold tracking-wide text-white sm:text-xl">
        Muskan<span className="text-(--gold)">.</span>
      </h1>
      <p className="mt-1 text-[8px] font-medium tracking-[0.25em] text-(--gold) sm:text-[9px]">
        VIDEOGRAPHY
      </p>
    </div>
  </a>
);