import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const supabase = createClient();
  
  // Fetch pricing plans dynamically
  const { data: pricingPlans } = await supabase
    .from('pricing_plans')
    .select('*')
    .order('price', { ascending: true });

  // Fetch case studies for the "See Our Work" or "Revenue Outcomes"
  const { data: caseStudies } = await supabase
    .from('case_studies')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center justify-center text-center px-margin-mobile overflow-hidden">
        <div className="absolute inset-0 hero-glow -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-stack-md">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wider">
            Performance Agency for the Bold
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface md:leading-tight">
            Get More Customers Online With A <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Modern Website</span> & Smart Marketing
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Naizo aapke liye complete digital growth system banata hai — websites, social media, Google presence aur ads, sab ek jagah. Hum schools, clinics, restaurants aur local businesses ko WhatsApp inquiries aur customers laane me madad karte hain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-white rounded-xl font-headline-md text-label-md font-bold shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:brightness-110 transition-all text-center">
              Scale My Brand
            </Link>
            <Link href="/case-studies" className="w-full sm:w-auto px-8 py-4 border border-outline-variant hover:bg-surface-variant/30 rounded-xl font-headline-md text-label-md font-bold transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary">play_circle</span>
              Watch Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-stack-xl border-y border-outline-variant/10 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <p className="text-center font-label-sm text-label-sm text-outline mb-10 uppercase tracking-widest">Powering High-Growth DTC Teams Globally</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <Image alt="Brand Logo 1" src="/images/home/brand1.png" width={120} height={32} className="h-8 w-auto" />
            <Image alt="Brand Logo 2" src="/images/home/brand2.png" width={120} height={32} className="h-8 w-auto" />
            <Image alt="Brand Logo 3" src="/images/home/brand3.png" width={120} height={32} className="h-8 w-auto" />
            <Image alt="Brand Logo 4" src="/images/home/brand4.png" width={120} height={32} className="h-8 w-auto" />
            <Image alt="Brand Logo 5" src="/images/home/brand5.png" width={120} height={32} className="h-8 w-auto" />
          </div>
        </div>
      </section>

      {/* Precision Engineering (Services) */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Everything Your Business Needs to Grow Online</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">From stunning websites to social media marketing — we handle your entire digital presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="gradient-border p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Website Development</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Fast, mobile-friendly websites jo ache dikhe bhi aur customers ko action lene pe majboor karein.</p>
          </div>
          <div className="gradient-border p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Social Media Management</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Instagram & Facebook pe aapka brand professional aur active dikhe, taaki zyada inquiries aayein.</p>
          </div>
          <div className="gradient-border p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Google Presence & SEO</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">"Near me" searches me aapka business top par dikhe – Google maps aur local SEO optimization.</p>
          </div>
          <div className="gradient-border p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-inverse-primary/10 flex items-center justify-center text-inverse-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Paid Ads</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Meta aur Google Ads ke through targeted lead generation, bina budget waste kiye.</p>
          </div>
        </div>
      </section>

      {/* See Our Work In Action */}
      <section className="py-stack-xl bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center">See Our Work In Action</h2>
        </div>
        <div className="flex gap-gutter overflow-x-auto pb-10 px-margin-mobile snap-x scrollbar-hide">
          <div className="min-w-[320px] aspect-[9/16] bg-surface-variant rounded-3xl overflow-hidden relative group flex-shrink-0 snap-center">
            <Image src="/images/home/portfolio1.jpg" alt="Portfolio 1" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-white font-label-md text-label-md">{caseStudies?.[0]?.title || 'DTC Skincare: +240% Sales Increase'}</p>
            </div>
          </div>
          <div className="min-w-[320px] aspect-[9/16] bg-surface-variant rounded-3xl overflow-hidden relative group flex-shrink-0 snap-center">
            <Image src="/images/home/portfolio2.jpg" alt="Portfolio 2" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-white font-label-md text-label-md">{caseStudies?.[1]?.title || 'Tech Gadgets: 5.4x MER Achievement'}</p>
            </div>
          </div>
          <div className="min-w-[320px] aspect-[9/16] bg-surface-variant rounded-3xl overflow-hidden relative group flex-shrink-0 snap-center">
            <Image src="/images/home/portfolio3.jpg" alt="Portfolio 3" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-white font-label-md text-label-md">{caseStudies?.[2]?.title || 'Home Decor: Scaling to $2M/mo'}</p>
            </div>
          </div>
          <div className="min-w-[320px] aspect-[9/16] bg-surface-variant rounded-3xl overflow-hidden relative group flex-shrink-0 snap-center">
            <Image src="/images/home/portfolio4.jpg" alt="Portfolio 4" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-white font-label-md text-label-md">{caseStudies?.[3]?.title || 'Luxury Apparel: 32% Lower CPA'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Outcomes */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Revenue Outcomes</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Hard data from our recent brand audits and management periods.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="glass-card p-8 rounded-3xl border-outline-variant/20">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="font-label-sm text-label-sm text-outline uppercase">Monthly Revenue Growth</p>
                <p className="font-headline-lg text-headline-lg text-primary">+312%</p>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-outline">Industry</p>
                <p className="font-body-md text-body-md">Personal Care</p>
              </div>
            </div>
            <div className="h-48 flex items-end gap-2 px-2">
              <div className="w-full bg-surface-variant h-[20%] rounded-t-lg"></div>
              <div className="w-full bg-surface-variant h-[25%] rounded-t-lg"></div>
              <div className="w-full bg-surface-variant h-[35%] rounded-t-lg"></div>
              <div className="w-full bg-primary h-[55%] rounded-t-lg shadow-[0_0_15px_rgba(124,58,237,0.4)]"></div>
              <div className="w-full bg-primary h-[75%] rounded-t-lg shadow-[0_0_15px_rgba(124,58,237,0.4)]"></div>
              <div className="w-full bg-primary h-[95%] rounded-t-lg shadow-[0_0_15px_rgba(124,58,237,0.4)]"></div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-3xl border-outline-variant/20">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="font-label-sm text-label-sm text-outline uppercase">CAC Optimization</p>
                <p className="font-headline-lg text-headline-lg text-secondary">-42%</p>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-outline">Industry</p>
                <p className="font-body-md text-body-md">Fashion & Apparel</p>
              </div>
            </div>
            <div className="h-48 flex items-end gap-2 px-2">
              <div className="w-full bg-secondary h-[90%] rounded-t-lg opacity-40"></div>
              <div className="w-full bg-secondary h-[80%] rounded-t-lg opacity-50"></div>
              <div className="w-full bg-secondary h-[70%] rounded-t-lg opacity-70"></div>
              <div className="w-full bg-secondary h-[60%] rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
              <div className="w-full bg-secondary h-[50%] rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
              <div className="w-full bg-secondary h-[45%] rounded-t-lg shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Scaling Framework */}
      <section className="py-stack-xl bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The Scaling Framework</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our proven 3-step process to move from stagnant revenue to predictable profits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent -z-10"></div>
            <div className="space-y-6 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center mx-auto text-primary font-bold text-xl relative">1</div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Strategy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Brand audit, unit economics mapping, and creative roadmap development.</p>
            </div>
            <div className="space-y-6 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center mx-auto text-primary font-bold text-xl">2</div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Execution</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">UGC production, ad account launch, and retention flow automation.</p>
            </div>
            <div className="space-y-6 text-center px-4">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border-4 border-background flex items-center justify-center mx-auto text-primary font-bold text-xl">3</div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Scaling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Daily optimization, creative refreshes, and vertical budget expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Dynamic */}
      <section className="py-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-stack-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Transparent Growth Plans</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">High-performance management with zero hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {pricingPlans && pricingPlans.length > 0 ? pricingPlans.map((plan) => (
            <div key={plan.id} className={plan.popular 
              ? "gradient-border p-10 rounded-3xl flex flex-col h-full border-primary/20 scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10" 
              : "glass-card p-10 rounded-3xl flex flex-col h-full border-outline-variant/10"}>
              
              <div className="flex justify-between items-center mb-2">
                <p className={`font-label-md text-label-md ${plan.popular ? 'text-primary' : 'text-on-surface-variant'}`}>{plan.name}</p>
                {plan.popular && <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase">Popular</span>}
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-headline-lg font-bold">₹{plan.price.toLocaleString('en-IN')}</span>
                <span className="text-outline">/mo</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features?.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-body-md text-body-md">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={`/contact?plan=${plan.id}`} className={plan.popular 
                ? "w-full py-4 text-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-label-md text-label-md font-bold hover:brightness-110 transition-all block"
                : "w-full py-3 text-center rounded-xl border border-outline-variant hover:bg-surface-variant font-label-md text-label-md font-bold transition-all block"}>
                {plan.popular ? 'Start Scaling' : 'Select ' + plan.name}
              </Link>
            </div>
          )) : (
            <div className="col-span-3 text-center text-on-surface-variant py-10">No pricing plans available. Please add them in the admin dashboard.</div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-stack-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10 blur-[100px]"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center py-20 bg-surface-container rounded-[40px] border border-outline-variant/10">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Ready to Scale to the Moon?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">Stop guessing. Start growing. Join the top 1% of DTC brands who treat marketing as an engineering problem.</p>
          <Link href="/contact" className="px-12 py-5 bg-primary text-on-primary rounded-full font-headline-md text-label-md font-bold hover:scale-105 transition-all shadow-[0_10px_40px_rgba(124,58,237,0.4)] inline-block">
            Book Your Audit Now
          </Link>
        </div>
      </section>
    </main>
  );
}
