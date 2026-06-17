import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env.local', 'utf-8');
const env = Object.fromEntries(envFile.split('\n').filter(Boolean).map(line => line.split('=')));

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const tables = ['blogs', 'pricing_plans', 'team_members', 'testimonials', 'leads', 'case_studies', 'clients'];

async function verify() {
  let allGood = true;
  console.log("Starting Supabase Verification...\n");
  
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    if (error) {
      console.error(`❌ Table '${table}' failed:`, error.message);
      allGood = false;
    } else {
      console.log(`✅ Table '${table}' exists and is accessible.`);
    }
  }
  
  console.log("\nVerification Complete.");
  if (!allGood) {
    console.error("Some tables are missing. The SQL schema has not been applied.");
    process.exit(1);
  } else {
    console.log("All tables are correctly set up!");
  }
}

verify();
