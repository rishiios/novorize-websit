-- =============================================
-- NAIZO CMS - Supabase Database Tables
-- Run this in Supabase SQL Editor
-- =============================================

-- 1. BLOGS
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  content TEXT,
  excerpt TEXT,
  cover_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. PRICING PLANS
CREATE TABLE IF NOT EXISTS pricing_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  features JSONB DEFAULT '[]',
  popular BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. TEAM MEMBERS
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  image_url TEXT,
  linkedin TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. TESTIMONIALS
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author TEXT NOT NULL,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. CASE STUDIES
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  client_name TEXT,
  description TEXT,
  challenge TEXT,
  solution TEXT,
  results TEXT,
  cover_image TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 6. LEADS (Contact Form Submissions)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 7. CLIENTS
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  company TEXT,
  phone TEXT,
  status TEXT DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 8. WEBSITE SETTINGS
CREATE TABLE IF NOT EXISTS website_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT DEFAULT 'NAIZO',
  contact_email TEXT,
  phone TEXT,
  address TEXT,
  logo_url TEXT,
  social_links JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Insert default settings row
INSERT INTO website_settings (company_name, contact_email, phone)
VALUES ('NAIZO', 'info@naizo.in', '+91 9546059823')
ON CONFLICT DO NOTHING;

-- =============================================
-- ROW LEVEL SECURITY (RLS) - Allow full access
-- =============================================
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for website pages
CREATE POLICY "Public read blogs" ON blogs FOR SELECT USING (true);
CREATE POLICY "Public read pricing" ON pricing_plans FOR SELECT USING (true);
CREATE POLICY "Public read team" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read case_studies" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON website_settings FOR SELECT USING (true);

-- Authenticated users (admin) full access
CREATE POLICY "Admin full blogs" ON blogs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full pricing" ON pricing_plans FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full team" ON team_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full case_studies" ON case_studies FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full leads" ON leads FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full clients" ON clients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full settings" ON website_settings FOR ALL USING (auth.role() = 'authenticated');

-- Anyone can insert leads (contact form)
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (true);
