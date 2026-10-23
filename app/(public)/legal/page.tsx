import Link from 'next/link';

export const metadata = {
  title: 'Privacy & Terms | Nexora Digital',
  description: 'Our privacy policy and terms of service.'
};
export default function LegalPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="max-w-3xl">
          <span className="text-primary font-label-md tracking-widest uppercase mb-4 block text-sm">Legal Center</span>
          <h1 className="font-headline-lg text-[32px] md:text-headline-lg mb-6 leading-tight font-extrabold text-on-surface">Privacy Policy &amp; Terms of Service</h1>
          <p className="text-on-surface-variant text-base md:text-body-lg mb-8 leading-relaxed">
            Your trust is our most valuable asset. We are committed to protecting your data and being transparent about how we operate at Nexora Digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
              <span className="font-label-sm text-sm text-on-surface-variant">Last Updated: October 24, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
              <span className="font-label-sm text-sm text-on-surface-variant">Compliance: GDPR &amp; CCPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <nav className="sticky top-28 space-y-2">
              <p className="font-label-md text-sm text-on-surface-variant uppercase mb-4 ml-4">Table of Contents</p>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold border-l-4 border-primary transition-all text-sm" href="#introduction">
                <span className="material-symbols-outlined text-[20px]">info</span> Introduction
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-sm" href="#data-collection">
                <span className="material-symbols-outlined text-[20px]">database</span> Data Collection
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-sm" href="#usage">
                <span className="material-symbols-outlined text-[20px]">visibility</span> How We Use Data
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-sm" href="#terms">
                <span className="material-symbols-outlined text-[20px]">article</span> Terms of Service
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-sm" href="#security">
                <span className="material-symbols-outlined text-[20px]">security</span> Security Protocols
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-sm" href="#contact">
                <span className="material-symbols-outlined text-[20px]">mail</span> Contact Legal
              </a>
            </nav>
          </aside>

          {/* Document Content */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Section: Introduction */}
            <div className="glass-card p-8 md:p-12 rounded-3xl glow-border border-t border-primary/20" id="introduction">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">info</span> 1. Introduction
              </h2>
              <div className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <p>Welcome to Nexora Digital. This Privacy Policy describes how Nexora Digital ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or use our performance marketing and CRM services.</p>
                <p>By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.</p>
              </div>
            </div>

            {/* Section: Data Collection */}
            <div className="glass-card p-8 md:p-12 rounded-3xl glow-border border-t border-primary/20" id="data-collection">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">database</span> 2. Data We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface-container-high p-6 rounded-2xl border border-outline-variant/10">
                  <h4 className="font-bold text-sm text-primary mb-3">Direct Information</h4>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    <li className="flex items-start gap-2">• Full name and professional title</li>
                    <li className="flex items-start gap-2">• Business email and contact numbers</li>
                    <li className="flex items-start gap-2">• Billing and payment credentials</li>
                  </ul>
                </div>
                <div className="bg-surface-container-high p-6 rounded-2xl border border-outline-variant/10">
                  <h4 className="font-bold text-sm text-secondary mb-3">Automated Data</h4>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    <li className="flex items-start gap-2">• IP Address and geolocation</li>
                    <li className="flex items-start gap-2">• Browser type and OS versions</li>
                    <li className="flex items-start gap-2">• Interaction metrics and heatmaps</li>
                  </ul>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
            </div>

            {/* Section: Usage */}
            <div className="glass-card p-8 md:p-12 rounded-3xl glow-border border-t border-primary/20" id="usage">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">visibility</span> 3. Use of Information
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-on-surface mb-2">Service Optimization</h3>
                    <p className="text-on-surface-variant text-sm md:text-base">We process data to maintain and improve our CRM features, ensuring high-performance lead generation for your specific market segment.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">campaign</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px] text-on-surface mb-2">Marketing Communication</h3>
                    <p className="text-on-surface-variant text-sm md:text-base">With your consent, we use your contact information to send newsletters, marketing or promotional materials that may be of interest to you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Terms */}
            <div className="glass-card p-8 md:p-12 rounded-3xl glow-border border-t border-primary/20" id="terms">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">article</span> 4. Terms of Service
              </h2>
              <div className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <p className="font-bold text-on-surface">1. Acceptance of Terms</p>
                <p>By using the Nexora Digital platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our services.</p>
                <p className="font-bold text-on-surface">2. Intellectual Property</p>
                <p>All content, features, and functionality of the Nexora Digital platform are the exclusive property of Nexora Digital and are protected by international copyright and trademark laws.</p>
                <p className="font-bold text-on-surface">3. User Conduct</p>
                <p>Users are responsible for all activity under their account and must not use the service for any illegal or unauthorized purpose.</p>
              </div>
            </div>

            {/* Section: Security */}
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 border border-primary/20 bg-gradient-to-br from-surface-container-high to-surface" id="security">
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-4">Enterprise-Grade Security</h2>
                  <p className="text-on-surface-variant text-sm md:text-base mb-6">
                    We employ TLS 1.3 encryption, SOC2-compliant data centers, and rigorous 24/7 monitoring to ensure your enterprise data remains impenetrable.
                  </p>
                  <button className="flex items-center gap-2 text-secondary font-bold text-sm hover:underline">
                    View Compliance Documents
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden glass-card border-none bg-black/20 flex items-center justify-center p-8">
                  <span className="material-symbols-outlined text-[120px] text-primary/30">verified_user</span>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Section: Contact */}
            <div className="glass-card p-8 md:p-12 rounded-3xl glow-border border-t border-primary/20" id="contact">
              <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span> Contact Legal Team
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base mb-8">
                If you have any questions about these Terms or the Privacy Policy, please contact our data protection officer.
              </p>
              <form id="legal-form" className="grid grid-cols-1 md:grid-cols-2 gap-6" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="dcd2c644-fc1d-4911-bf4b-31b2b1f18673" />
                <input type="hidden" name="subject" value="Legal Inquiry - Nexora Digital" />
                <input type="hidden" name="from_name" value="Nexora Digital Legal Page" />
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant ml-1">Your Email</label>
                  <input name="email" required className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-secondary outline-none transition-all" placeholder="name@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant ml-1">Inquiry Type</label>
                  <select name="inquiry_type" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-secondary outline-none transition-all text-on-surface">
                    <option>General Privacy Question</option>
                    <option>Data Deletion Request</option>
                    <option>Compliance Audit</option>
                    <option>Other Legal Matters</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant ml-1">Message</label>
                  <textarea name="message" required className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:border-secondary outline-none transition-all resize-none" placeholder="How can our legal team help you?" rows={4}></textarea>
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start gap-4">
                  <button type="submit" className="md:w-fit bg-primary text-on-primary font-bold text-sm px-10 py-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span>Send Inquiry</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

