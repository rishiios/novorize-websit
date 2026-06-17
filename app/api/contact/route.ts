import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const business_name = formData.get('business_name') as string;
    const city = formData.get('city') as string;
    const business_type = formData.get('business_type') as string;
    const message = formData.get('message') as string;

    const supabase = createClient();
    const { error } = await supabase.from('leads').insert([{
      name, phone, business_name, city, business_type, message
    }]);

    if (error) {
      console.error("Supabase insert error:", error);
    }

    return NextResponse.redirect(new URL('/contact?success=true', req.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/contact?success=false', req.url));
  }
}
