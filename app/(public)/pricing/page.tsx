import Link from 'next/link';

export const metadata = {
  title: 'Pricing | NAIZO',
  description: 'Transparent pricing for websites and digital marketing plans.'
};

export default function PricingPage() {
  const monthlyPlans = [
    { id: 1, name: 'Starter Plan', price: 15000, description: 'Basic digital presence & lead generation.', popular: false, features: ['Website Management', 'Google Business Profile Optimization', '10 Social Media Posts/mo', 'Basic Local SEO', 'Monthly Report'] },
    { id: 2, name: 'Growth Plan', price: 30000, description: 'Aggressive marketing for more walk-ins.', popular: true, features: ['Everything in Starter', '15 Social Media Posts/mo', 'Meta/Google Ads Setup & Management', 'Weekly Campaign Optimization', 'Bi-weekly Report'] },
    { id: 3, name: 'Premium Plan', price: 50000, description: 'Complete digital dominance in your city.', popular: false, features: ['Everything in Growth', '20 Posts + 4 Reels/mo', 'Advanced SEO & Content', 'Priority Support (Direct line)', 'WhatsApp Automation Setup'] }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-label-md tracking-widest uppercase mb-4 block text-sm">Transparent Pricing</span>
          <h1 className="text-[28px] md:text-headline-lg font-extrabold text-on-surface leading-tight mb-6">Simple, Honest Pricing. <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">No Hidden Charges.</span></h1>
          <p className="text-on-surface-variant text-base md:text-body-lg leading-relaxed">Chahe aapko one-time website chahiye ya monthly marketing plan — sab kuch clear hai. Koi surprise fees nahi.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-label-md tracking-widest uppercase mb-3 block text-sm">One-Time Packages</span>
            <h2 className="text-headline-lg-mobile md:text-headline-md font-bold text-on-surface mb-4">Website Development Packages</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">Ek baar payment, lifetime website. Hosting aur domain alag se.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <p className="font-label-md text-on-surface-variant mb-2">Basic Website</p>
              <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-extrabold">₹15,000</span><span className="text-outline text-sm">– ₹25,000</span></div>
              <p className="text-on-surface-variant text-sm mb-6">Landing page ya simple website</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>1–3 Page Website</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Mobile Responsive Design</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>WhatsApp & Call Buttons</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Contact Form & Basic SEO</li>
              </ul>
              <Link href="/contact" className="w-full py-3 text-center border border-outline-variant/30 text-on-surface rounded-xl font-bold hover:bg-surface-variant/30 transition-all active:scale-95 text-sm">Get Started</Link>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full border-primary/40 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-container text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Most Popular</div>
              <p className="font-label-md text-primary mb-2">Business Website</p>
              <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-extrabold text-primary">₹25,000</span><span className="text-outline text-sm">– ₹50,000</span></div>
              <p className="text-on-surface-variant text-sm mb-6">Full business website with all features</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>5–10 Page Website</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Everything in Basic + Photo Gallery</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Google Maps & Business Profile Setup</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>Analytics & Tracking Setup</li>
              </ul>
              <Link href="/contact" className="w-full py-3 text-center bg-primary-container text-white rounded-xl font-bold hover:brightness-110 transition-all active:scale-95 text-sm">Get Quote</Link>
            </div>
            <div className="glass-card p-8 rounded-2xl flex flex-col h-full">
              <p className="font-label-md text-on-surface-variant mb-2">Custom Website</p>
              <div className="flex items-baseline gap-1 mb-2"><span className="text-3xl font-extrabold">Custom</span></div>
              <p className="text-on-surface-variant text-sm mb-6">E-commerce, booking systems, portals</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Unlimited Pages</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Everything in Business</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>Appointment/Booking System</li>
                <li className="flex items-start gap-2 text-sm"><span className="material-symbols-outlined text-emerald text-[18px]">check_circle</span>E-commerce / Admin Dashboard</li>
              </ul>
              <Link href="/contact" className="w-full py-3 text-center border border-outline-variant/30 text-on-surface rounded-xl font-bold hover:bg-surface-variant/30 transition-all active:scale-95 text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-label-md tracking-widest uppercase mb-3 block text-sm">Monthly Plans</span>
            <h2 className="text-headline-lg-mobile md:text-headline-md font-bold text-on-surface mb-4">Digital Marketing Monthly Plans</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">Website ke saath marketing bhi chahiye? Choose a monthly plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthlyPlans.map(plan => (
              <div key={plan.id} className={`glass-card p-8 rounded-2xl flex flex-col h-full ${plan.popular ? 'border-primary/40 relative' : ''}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-container text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Most Popular</div>}
                <p className={`font-label-md mb-2 ${plan.popular ? 'text-primary' : 'text-on-surface-variant'}`}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-extrabold ${plan.popular ? 'text-primary' : ''}`}>₹{plan.price.toLocaleString('en-IN')}</span>
                  <span className="text-outline text-sm">/mo</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features?.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`material-symbols-outlined text-[18px] shrink-0 ${plan.popular ? 'text-primary' : 'text-emerald'}`}>check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?plan=${plan.id}`} className={`w-full py-3 text-center rounded-xl font-bold transition-all active:scale-95 text-sm ${plan.popular ? 'bg-primary-container text-white hover:brightness-110' : 'border border-outline-variant/30 text-on-surface hover:bg-surface-variant/30'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-container/20 to-secondary-container/10 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <h2 className="text-headline-lg-mobile md:text-headline-md font-bold text-on-surface mb-4">Not Sure Which Plan Is Right For You?</h2>
          <p className="text-on-surface-variant mb-8 max-w-lg mx-auto text-sm">Book a free consultation. Hum aapke business ke hisaab se best plan suggest karenge.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary-container text-white rounded-xl font-bold hover:brightness-110 transition-all text-center active:scale-95 text-sm">Book Free Consultation</Link>
            <a href="https://wa.me/919546059823?text=Hi%20Naizo%2C%20I%20need%20help%20with%20pricing." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 border border-emerald/40 text-emerald rounded-xl font-bold hover:bg-emerald/10 transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"><span className="material-symbols-outlined text-[20px]">chat</span>WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

