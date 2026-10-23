import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services | Nexora Digital',
  description: 'Explore our premium digital marketing, SEO, and web development services.'
};
export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto text-center mb-24 relative pt-20">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-container/20 blur-[120px] rounded-full -z-10"></div>
        <span className="font-label-md text-primary tracking-widest uppercase mb-4 block">Our Services</span>
        <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Everything Your Business Needs to <br/><span className="gradient-text-primary">Grow Online.</span></h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">Nexora Digital aapke liye complete digital growth system banata hai — websites, social media, Google presence aur ads, sab ek jagah.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-on-surface-variant">Websites & SEO</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-on-surface-variant">Social Media</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/30">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-label-sm text-on-surface-variant">Paid Ads</span>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Website Development Card */}
          <div className="md:col-span-8 glass-card inner-glow rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-6xl text-primary opacity-20">language</span>
            </div>
            <div>
              <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm mb-6 inline-block">MOST POPULAR</span>
              <h3 className="font-headline-lg text-headline-lg mb-4">Website Development</h3>
              <p className="text-on-surface-variant max-w-md mb-8">Aaj ke time mein website aapke business ka online showroom hai. Hum aise websites banate hain jo ache dikhe bhi, fast load bhi ho, aur customers ko action lene pe majboor karein.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <p className="font-label-md text-primary uppercase">We Build For</p>
                  <p className="text-sm text-on-surface-variant">Schools, Clinics, Restaurants, Local Shops.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-label-md text-tertiary uppercase">What You Get</p>
                  <p className="text-sm text-on-surface-variant">Mobile-friendly design | Basic SEO | WhatsApp & Call buttons.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-surface-container-high rounded-lg text-xs font-label-md border border-outline-variant/20 group-hover:border-primary transition-all">Fast Load Times</span>
              <span className="px-4 py-1.5 bg-surface-container-high rounded-lg text-xs font-label-md border border-outline-variant/20 group-hover:border-primary transition-all">Mobile Optimized</span>
              <span className="px-4 py-1.5 bg-surface-container-high rounded-lg text-xs font-label-md border border-outline-variant/20 group-hover:border-primary transition-all">High Conversion</span>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="md:col-span-4 glass-card inner-glow rounded-xl p-8 group">
            <div className="mb-8 p-4 bg-secondary-container/10 rounded-xl w-fit">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Social Media Management</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Aaj kal log decision lene se pehle aapka Instagram/Facebook check karte hain.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span>Monthly content strategy</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span>Post designs & Reels</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span>Right audience targeting</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-outline-variant/20">
              <p className="text-2xl font-bold text-tertiary">Real Trust <span className="text-xs font-normal text-on-surface-variant">With Your Audience</span></p>
            </div>
          </div>

          {/* Local SEO Card */}
          <div className="md:col-span-4 glass-card inner-glow rounded-xl p-8 group">
            <div className="mb-8 p-4 bg-tertiary-container/20 rounded-xl w-fit">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Google Presence & Local SEO</h3>
            <p className="text-on-surface-variant mb-6 text-sm">Agar koi "school near me" search karta hai, to aapka naam waha hona chahiye.</p>
            <div className="space-y-4">
              <div className="bg-surface-container p-4 rounded-lg">
                <p className="text-xs font-label-md text-primary mb-1">Google Business Profile setup & optimization</p>
                <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[100%] rounded-full"></div>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic">Nearby customers aapko easily find kar pate hain aur trust build hota hai.</p>
            </div>
          </div>

          {/* Paid Ads Card */}
          <div className="md:col-span-8 glass-card inner-glow rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden group">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md mb-4">Paid Ads (Meta & Google)</h3>
              <p className="text-on-surface-variant mb-8 text-sm">Jo businesses thoda serious budget ke saath fast results chahte hain, unke liye hum paid advertising bhi manage karte hain.</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">bolt</span>
                  <span className="text-sm">Meta Ads: Lead generation & traffic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">search</span>
                  <span className="text-sm">Google Ads: High-intent keywords</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full relative h-48 md:h-full">
              <Image src="/images/services/dashboard.jpg" alt="Paid Ads Performance" fill className="object-cover rounded-lg shadow-2xl opacity-80 border border-white/5 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="glass-card inner-glow rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-primary"></div>
          <h2 className="font-headline-lg text-headline-lg mb-6">Ready To Grow Your Business?</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10">Bas hame apne business ke baare me batao — hum aapke liye simple, understandable plan banayenge.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-lg bg-primary-container text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all inline-block">
              Get A Free Plan
            </Link>
            <Link href="/pricing" className="px-8 py-4 rounded-lg border border-outline text-on-surface font-bold hover:bg-white/5 active:scale-95 transition-all inline-block">
              Check Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

