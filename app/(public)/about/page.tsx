import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | NAIZO',
  description: 'Learn about NAIZO, your premium performance marketing agency in India.'
};
export default async function AboutPage() {
  const supabase = createClient();
  
  // Fetch team members dynamically
  const { data: teamMembers } = await supabase
    .from('team_members')
    .select('*')
    .order('created_at', { ascending: true });

  const borderColors = ['border-primary', 'border-secondary-container', 'border-tertiary'];
  const textColors = ['text-primary', 'text-secondary-container', 'text-tertiary'];

  return (
    <main>
      {/* Hero Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-32 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <span className="text-secondary-container font-label-md tracking-widest block mb-4 uppercase">The Visionaries Behind Your Growth</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Aapke Business Ka Digital <span className="primary-gradient-text">Growth Partner.</span></h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">Naizo isliye shuru hua kyunki humne dekha ki agencies sirf baate karti hain, results nahi deti. Hum sirf ads nahi chalate; hum ek complete revenue-generating system banate hain jisse aapka business har mahine badhe.</p>
            <div className="flex flex-wrap gap-12 border-l border-primary/20 pl-8">
              <div>
                <div className="font-headline-lg text-headline-lg text-primary">₹50Cr+</div>
                <div className="font-label-sm text-on-surface-variant uppercase">Ad Spend Managed</div>
              </div>
              <div>
                <div className="font-headline-lg text-headline-lg text-secondary-container">120+</div>
                <div className="font-label-sm text-on-surface-variant uppercase">Brands Scaled</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full -z-10 group-hover:bg-primary-container/30 transition-all"></div>
            <Image src="/images/about/hero.jpg" alt="Digital command center" width={600} height={500} className="w-full h-[500px] object-cover rounded-xl border border-white/5 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="bg-surface-container-lowest py-32 px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5">
            <Image src="/rishi-yadav.png" alt="Rishi Yadav - Founder" width={500} height={600} className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl border border-white/10" />
          </div>
          <div className="lg:col-span-7 lg:pl-16">
            <h2 className="font-headline-lg text-headline-lg mb-6">Hamari Kahani</h2>
            <h3 className="font-headline-md text-headline-md text-primary mb-8 underline decoration-primary-container decoration-4 underline-offset-8">Rishi Yadav</h3>
            <div className="space-y-6 text-on-surface-variant font-body-md">
              <p>Saalon tak alag-alag digital marketing campaigns manage karne ke baad, humne ek cheez notice ki — zyada tar local businesses aur brands ko samajh hi nahi aata ki unka marketing budget kahan waste ho raha hai. Agencies unhe technical terms bolke confuse kar deti hain.</p>
              <p>Isiliye humne Naizo shuru kiya, ek simple aur transparent approach ke sath. Humara maksad sirf "likes" ya "views" laana nahi hai. Humara clear focus hai aapke liye real business inquiries, footfall, aur sales lana. Hum aisi strategies banate hain jo sach me kaam aati hain.</p>
            </div>
            <div className="mt-12 p-8 glass-card rounded-xl">
              <p className="italic text-on-surface font-body-lg">"Humein 'likes' nahi chahiye, humein numbers se matlab hai. Agar aapka revenue nahi badh raha, toh humari marketing ka koi fayda nahi."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Architects (Dynamic Team Members) */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg mb-4">Meet the Architects</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">A hybrid team of data scientists and creative strategists dedicated to your brand's trajectory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {teamMembers && teamMembers.length > 0 ? teamMembers.map((member, index) => {
            const bColor = borderColors[index % borderColors.length];
            const tColor = textColors[index % textColors.length];
            return (
              <div key={member.id} className="glass-card p-8 rounded-xl hover:-translate-y-2 transition-transform">
                <img 
                  src={member.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`} 
                  alt={member.name} 
                  className={`w-24 h-24 rounded-full object-cover mb-6 border-2 ${bColor}`} 
                />
                <h4 className="font-headline-md text-headline-md mb-1">{member.name}</h4>
                <p className={`${tColor} font-label-md uppercase tracking-wide mb-4`}>{member.role}</p>
                <p className="text-on-surface-variant font-body-md mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">link</span>
                    </a>
                  )}
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">mail</span>
                </div>
              </div>
            );
          }) : (
            <div className="col-span-3 text-center text-on-surface-variant">No team members added yet. Add them in the admin dashboard.</div>
          )}
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-32 bg-surface-container">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-8">Culture of Rigor</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2">Radical Transparency</h4>
                    <p className="text-on-surface-variant">We don't hide behind jargon. Our dashboards are real-time, and our reports are honest—even when the data is difficult.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary-container/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">speed</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-[20px] mb-2">Velocity First</h4>
                    <p className="text-on-surface-variant">In performance marketing, slow is dead. We move at the speed of the market, testing, iterating, and scaling daily.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/about/office.jpg" alt="Culture" width={300} height={300} className="w-full aspect-square object-cover rounded-xl border border-white/5" />
              <Image src="/images/about/tablet.jpg" alt="Data Precision" width={300} height={300} className="w-full aspect-square object-cover rounded-xl mt-8 border border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us / Achievements */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
        <div className="glass-card p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-headline-lg text-headline-lg mb-6">Why Trust Us</h2>
              <p className="text-on-surface-variant mb-8 font-body-md">We aren't just another agency. We are growth partners with skin in the game.</p>
              <Link href="/case-studies" className="text-on-surface font-label-md flex items-center gap-2 group">
                Our Portfolio <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">verified</span>
                <h4 className="font-headline-md text-[18px] mb-2">Certified Meta & Google Partner</h4>
                <p className="text-on-surface-variant text-sm">Recognized for maintaining elite performance standards across India's most competitive sectors.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">shield_with_heart</span>
                <h4 className="font-headline-md text-[18px] mb-2">Data Integrity First</h4>
                <p className="text-on-surface-variant text-sm">Full GDPR & local compliance. Your data is your most valuable asset; we treat it as such.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">account_balance</span>
                <h4 className="font-headline-md text-[18px] mb-2">India Office Hub</h4>
                <p className="text-on-surface-variant text-sm">Centrally located in Bangalore's tech corridor, serving global brands from India's heart.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                <span className="material-symbols-outlined text-error text-4xl mb-4">monitoring</span>
                <h4 className="font-headline-md text-[18px] mb-2">94% Client Retention</h4>
                <p className="text-on-surface-variant text-sm">Our growth is tied to yours. We scale when you scale, leading to long-term architectural partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg mb-8">Ready to Architect Your Growth?</h2>
        <p className="font-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">Skip the fluff. Let's look at your numbers and build a predictable path to your next milestone.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/contact" className="primary-button-gradient text-white font-label-md px-10 py-4 rounded-lg text-lg text-center">Book Consultation</Link>
          <button className="px-10 py-4 rounded-lg border border-outline-variant hover:bg-white/5 transition-all font-label-md text-lg">Download Agency Deck</button>
        </div>
      </section>
    </main>
  );
}

