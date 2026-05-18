const navLinks = ['About', 'Skills', 'Projects', 'My Resume'];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
      {navLinks.map((link) =>{
        
        return (
        <a
          key={link}
          target={link === 'My Resume' ? '_blank' : '_self'}
          href={link === 'My Resume' ? '/cv.pdf' : `#${link.toLowerCase()}`}
          className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
        >
          {link}
        </a>
      )})}
    </nav>
  );
}
