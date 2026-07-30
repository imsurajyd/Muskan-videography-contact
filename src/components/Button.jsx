

const Button = ({
  children,
  href,
  onClick,
  variant = "primary", // 'primary' | 'outline'
  className = "",
  type = "button",
  ...props
}) => {
  // Base classes with strong display and padding rules
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-95 hover:scale-[1.02] cursor-pointer text-xs sm:text-sm";

  // Dynamic variants
  const variants = {
    primary:
      "bg-[var(--gold)] text-black shadow-lg shadow-[var(--gold)]/20 hover:bg-[var(--gold-light)] hover:shadow-[var(--gold)]/30 border border-transparent",
    outline:
      "border border-[var(--gold)]/80 bg-black/40 text-white backdrop-blur-md hover:bg-[var(--gold)] hover:text-black",
  };

  // Inline style fallback to ensure padding NEVER fails regardless of PostCSS/Tailwind bugs
  const paddingStyles = {
    paddingTop: "0.625rem",    // 10px (py-2.5)
    paddingBottom: "0.625rem",
    paddingLeft: "1.5rem",     // 24px (px-6)
    paddingRight: "1.5rem",
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        style={paddingStyles}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={paddingStyles}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;