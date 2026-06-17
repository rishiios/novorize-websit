import Link from 'next/link';

export const metadata = {
  title: 'Blogs & Growth Tips | NAIZO',
  description: 'Simple guides to help you grow your business online.'
};

export default function BlogsPage() {
  const articles = [
    { id: 1, title: 'How Schools Can Get More Admissions With a Simple Website', category: 'For Schools', readTime: '6-8 min', summary: 'Parents pehle Google aur website dekhte hain, phir admission form bharte hain. Is article me hum batate hain kaise ek simple website se bhi admissions badh sakte hain.' },
    { id: 2, title: 'Why Every Clinic Needs a WhatsApp-Ready Website', category: 'For Clinics', readTime: '5-7 min', summary: 'Patients aaj kal call karne ke bajaye WhatsApp prefer karte hain. Janiye kaise WhatsApp buttons + simple website se weekly bookings increase hoti hain.' },
    { id: 3, title: 'Google Business Profile: Free Tool That Brings You Local Customers', category: 'For Local Businesses', readTime: '5-6 min', summary: '"Shop near me" search karne par kaun dikhai deta hai? Google Business Profile ka simple use karke aap local search me top par aa sakte hain.' }
  ];

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-label-md tracking-widest uppercase mb-4 block text-sm">Our Blog</span>
          <h1 className="text-[32px] md:text-headline-lg font-extrabold text-on-surface leading-tight mb-6">Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Growth Tips</span></h1>
          <p className="text-on-surface-variant text-base md:text-body-lg leading-relaxed">Simple guides jo aapko samjhate hain ki website aur Google se zyada customers kaise la sakte hain.</p>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article: any) => (
              <article key={article.id} className="glass-card p-6 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform">
                <span className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{article.category}</span>
                <h3 className="text-xl font-bold text-on-surface mb-3">{article.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{article.summary || article.content?.substring(0, 100)}</p>
                <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4 mt-auto">
                  <span className="text-xs text-on-surface-variant">{article.readTime || '5 min read'}</span>
                  <Link href={`/blogs/${article.slug || article.id}`} className="text-sm font-bold text-primary">Read Article</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

