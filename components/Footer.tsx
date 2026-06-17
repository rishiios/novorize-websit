import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 md:py-24 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="text-[24px] font-bold text-on-surface">Naizo</div>
          <p className="text-base text-on-surface-variant pr-4">Redefining performance marketing for high-growth enterprises in the Indian market.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">language</span></a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">share</span></a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-sm text-primary uppercase tracking-widest">Company</p>
          <div className="flex flex-col space-y-3">
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/">Home</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/about">About</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/services">Services</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/case-studies">Case Studies</Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-sm text-primary uppercase tracking-widest">Resources</p>
          <div className="flex flex-col space-y-3">
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/pricing">Pricing</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/blogs">Blogs</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/contact">Contact</Link>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-sm text-primary uppercase tracking-widest">Legal</p>
          <div className="flex flex-col space-y-3">
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/legal">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1 transition-transform inline-block w-max text-base" href="/legal#terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-outline-variant/5 text-center px-margin-mobile">
        <p className="text-sm text-on-surface-variant">© {new Date().getFullYear()} Naizo. All rights reserved. Built for the Indian Market.</p>
      </div>
    </footer>
  );
}
