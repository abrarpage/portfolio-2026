interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  onClick,
  className = '',
}: LiveProjectButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-full
    border-2 border-[#D7E2EA]
    px-4 py-2 
    text-[#D7E2EA] font-medium  tracking-widest
    text-sm 
    transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:bg-[#D7E2EA]/20
    whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
        {href}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {label}
    </button>
  );
}
