import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-[30px] border-b border-outline-variant/20 shadow-sm">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-on-surface">Nexora Digital</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md" href="/">Home</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/about">About</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/services">Services</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/case-studies">Case Studies</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/pricing">Pricing</Link>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/blogs">Blogs</Link>
        </div>
        <Link href="/contact" className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-label-md text-label-md font-bold hover:scale-95 transition-transform active:scale-90 inline-block">
          Book Consultation
        </Link>
      </div>
    </nav>
  );
}
