import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | NAIZO',
  description: 'Real results for real businesses. See our success stories.'
};
export default async function CaseStudiesPage() {
  const supabase = createClient();
  const { data: caseStudies } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });

  const cases = caseStudies && caseStudies.length > 0 ? caseStudies : [
    { id: 1, title: 'Sunrise Public School — Online Admission Growth', category: 'Education', location: 'Patna', summary: 'Kaise ek school ne website banakar apne admissions 40% badha liye.', results: [{ value: '+40%', label: 'Inquiries' }, { value: '15+', label: 'Leads' }, { value: '#1', label: 'Rank' }] },
    { id: 2, title: 'Care Plus Clinic — WhatsApp Appointment Booking Boost', category: 'Healthcare', location: 'Bihta', summary: 'Kaise ek clinic ne zero online presence se 20+ weekly WhatsApp bookings achieve ki.', results: [{ value: '+300%', label: 'Bookings' }, { value: '20+', label: 'Leads' }, { value: '4.8★', label: 'Rating' }] },
    { id: 3, title: 'Spice Garden Restaurant — Social Media Transformation', category: 'Restaurant', location: 'Patna', summary: 'Kaise ek restaurant ne Instagram marketing se apne daily customers double kiye.', results: [{ value: '5,000+', label: 'Followers' }, { value: '2x', label: 'Customers' }, { value: '₹0', label: 'Ad Spend' }] }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-label-md tracking-widest uppercase mb-4 block text-sm">Case Studies</span>
          <h1 className="text-[28px] md:text-headline-lg font-extrabold text-on-surface leading-tight mb-6">Real Results for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Real Businesses</span></h1>
          <p className="text-on-surface-variant text-base md:text-body-lg leading-relaxed">Dekho kaise Bihar ke local businesses ne Naizo ke saath apni online presence build ki aur real customers gain kiye.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-16">
        {cases.map((c: any) => (
          <div key={c.id} className="glass-card rounded-2xl overflow-hidden border-outline-variant/20">
            <div className="p-6 md:p-8 bg-surface-container-lowest border-b border-outline-variant/10">
              <div className="flex gap-3 mb-4"><span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase">{c.category}</span><span className="text-on-surface-variant text-xs">{c.location}</span></div>
              <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-2">{c.title}</h2>
              <p className="text-on-surface-variant text-sm">{c.summary}</p>
            </div>
            <div className="grid grid-cols-3 border-t border-outline-variant/10">
              {c.results?.map((r: any, idx: number) => (
                <div key={idx} className={`p-4 text-center ${idx === 1 ? 'border-x border-outline-variant/10' : ''}`}>
                  <p className="text-2xl md:text-3xl font-extrabold text-primary">{r.value || r.metric_value}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{r.label || r.metric_label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-container/20 to-secondary-container/10 border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
          <h2 className="text-headline-lg-mobile md:text-headline-md font-bold text-on-surface mb-4">Your Business Could Be The Next Success Story.</h2>
          <Link href="/contact" className="px-8 py-4 bg-primary-container text-white rounded-xl font-bold hover:brightness-110 transition-all text-sm inline-block">Book Free Consultation</Link>
        </div>
      </section>
    </main>
  );
}

