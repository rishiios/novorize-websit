-- NAIZO CMS Supabase Schema

-- 1. Blogs Table
CREATE TABLE public.blogs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    cover_image TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Pricing Plans Table
CREATE TABLE public.pricing_plans (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    period TEXT DEFAULT '/mo',
    description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    is_popular BOOLEAN DEFAULT false,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Team Members Table
CREATE TABLE public.team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Testimonials Table
CREATE TABLE public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    client_name TEXT NOT NULL,
    company TEXT,
    review TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    image_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Case Studies Table
CREATE TABLE public.case_studies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    client_name TEXT,
    results TEXT,
    content TEXT,
    cover_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Leads Table
CREATE TABLE public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    business_name TEXT,
    phone TEXT NOT NULL,
    service_needed TEXT,
    message TEXT,
    status TEXT DEFAULT 'new', -- new, contacted, closed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Settings Table (Singleton)
CREATE TABLE public.settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    site_name TEXT DEFAULT 'NAIZO',
    email TEXT,
    phone TEXT,
    address TEXT,
    facebook_url TEXT,
    instagram_url TEXT,
    linkedin_url TEXT,
    meta_title TEXT,
    meta_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert Default Settings Row
INSERT INTO public.settings (site_name, phone, meta_title, meta_description) 
VALUES ('NAIZO', '+91-9546059823', 'NAIZO | Websites & Digital Marketing For Local Businesses', 'NAIZO helps schools, clinics, restaurants and local businesses get more customers through websites, social media marketing and local SEO.');

-- Insert Default Pricing Plans (Migrating from static site)
INSERT INTO public.pricing_plans (name, price, period, description, features, is_popular, order_index) VALUES 
('Starter', '₹15,000', '/mo', 'Perfect for getting started online', '["5-Page Professional Website", "Mobile Responsive Design", "WhatsApp Integration", "Basic SEO Setup", "Google Maps Integration"]', false, 1),
('Growth', '₹30,000', '/mo', 'Website + social media marketing', '["Everything in Starter", "Instagram & Facebook Management", "12 Social Media Posts/Month", "Google Business Profile Setup", "Monthly Performance Report", "WhatsApp Lead Generation"]', true, 2),
('Premium', '₹50,000', '/mo', 'Full digital presence & growth', '["Everything in Growth", "Google Ads Management", "Meta Ads (Facebook + Instagram)", "Video Reels Creation", "Dedicated Account Manager", "Priority Support"]', false, 3);

-- SECURITY: Enable Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Create policies so public can READ everything (except leads), but only authenticated users can write.
-- (Assuming any authenticated user is an admin for this single-tenant app)

CREATE POLICY "Allow public read-only access to blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to blogs" ON public.blogs FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read-only access to pricing" ON public.pricing_plans FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to pricing" ON public.pricing_plans FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read-only access to team" ON public.team_members FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to team" ON public.team_members FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read-only access to testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read-only access to case_studies" ON public.case_studies FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to case_studies" ON public.case_studies FOR ALL USING (auth.role() = 'authenticated');

-- Leads: Public can INSERT (submit form), but only authenticated can SELECT, UPDATE, DELETE.
CREATE POLICY "Allow public insert to leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to leads" ON public.leads FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public read-only access to settings" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Allow authenticated full access to settings" ON public.settings FOR ALL USING (auth.role() = 'authenticated');
