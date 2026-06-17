import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | NAIZO',
  description: 'Get a free consultation to grow your local business.'
};
export default function ContactPage() {
  return (
    <main className="pt-16 md:pt-20">
      <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-label-md tracking-widest uppercase mb-4 block text-sm">Contact Us</span>
          <h1 className="text-[32px] md:text-headline-lg font-extrabold text-on-surface leading-tight mb-6">Let's Talk About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Your Business</span></h1>
          <p className="text-on-surface-variant text-base md:text-body-lg leading-relaxed mb-8">Whether you need a website, social media marketing, local SEO, or help getting more customers online, we're here to help.</p>
          <a href="#form-section" className="inline-block px-8 py-4 bg-primary-container text-white rounded-xl font-bold hover:brightness-110 transition-all text-center active:scale-95 shadow-[0_0_25px_rgba(124,58,237,0.3)] text-sm">Skip The Wait. Book It Now!</a>
        </div>
      </section>

      <section className="py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="tel:+919546059823" className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-surface-variant/30 transition-all active:scale-95">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3"><span className="material-symbols-outlined text-[24px]">call</span></div>
            <h3 className="font-bold text-sm mb-1">Call Us</h3><p className="text-on-surface-variant text-xs">+91 9546059823</p>
          </a>
          <a href="https://wa.me/919546059823?text=Hi%20Naizo%2C%20I%20want%20to%20grow%20my%20business%20online." target="_blank" className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-surface-variant/30 transition-all active:scale-95">
            <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mb-3"><span className="material-symbols-outlined text-[24px]">chat</span></div>
            <h3 className="font-bold text-sm mb-1">WhatsApp Us</h3><p className="text-on-surface-variant text-xs">Fastest response</p>
          </a>
          <a href="mailto:hello@NAIZO.IN" className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:bg-surface-variant/30 transition-all active:scale-95">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3"><span className="material-symbols-outlined text-[24px]">mail</span></div>
            <h3 className="font-bold text-sm mb-1">Email Us</h3><p className="text-on-surface-variant text-xs">hello@NAIZO.IN</p>
          </a>
          <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber mb-3"><span className="material-symbols-outlined text-[24px]">location_on</span></div>
            <h3 className="font-bold text-sm mb-1">Business Location</h3><p className="text-on-surface-variant text-xs">Bihta, Patna</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-container-lowest" id="form-section">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-6 md:p-8 rounded-3xl border-primary/20 shadow-[0_0_40px_rgba(124,58,237,0.05)] relative overflow-hidden">
              <h2 className="text-2xl font-bold text-on-surface mb-2">Get A Free Consultation</h2>
              <p className="text-on-surface-variant text-sm mb-6">Tell us about your business and we'll suggest the best next step. No pressure. No obligation.</p>
              <form action="/api/contact" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Your Name *</label><input type="text" name="name" required className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" /></div>
                  <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Phone Number *</label><input type="tel" name="phone" required className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Business Name</label><input type="text" name="business_name" className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" /></div>
                  <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">City</label><input type="text" name="city" className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" /></div>
                </div>
                <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Business Type</label>
                  <select name="business_type" className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all text-on-surface">
                    <option value="School / Coaching">School / Coaching Institute</option>
                    <option value="Clinic / Hospital">Clinic / Hospital</option>
                    <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                    <option value="Retail Shop">Retail Shop</option>
                    <option value="Gym / Salon">Gym / Salon</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other Local Business</option>
                  </select>
                </div>
                <div><label className="block text-xs font-bold text-on-surface-variant mb-1 ml-1 uppercase tracking-wider">Message</label><textarea name="message" rows={3} className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all resize-none"></textarea></div>
                <button type="submit" className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all active:scale-95 shadow-[0_0_20px_rgba(210,187,255,0.2)]">Book My Free Consultation</button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[22px]">verified_user</span>Why Contact Naizo?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="glass-card p-3 rounded-xl flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Fast Response</div>
                  <div className="glass-card p-3 rounded-xl flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Local Business Expertise</div>
                  <div className="glass-card p-3 rounded-xl flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>WhatsApp Support</div>
                  <div className="glass-card p-3 rounded-xl flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Transparent Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

