'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(prevState: any, formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  let success = false;

  try {
    const { error } = await supabase.auth.signInWithPassword(data)
    
    if (error) {
      console.error("Supabase Auth Error:", error)
      return { error: error.message, success: false }
    }
    
    success = true;
  } catch (err: any) {
    console.error("Caught Server Action Error:", err)
    return { error: err.message || "An unexpected error occurred during sign in", success: false }
  }

  if (success) {
    revalidatePath('/admin', 'layout')
    redirect('/admin')
  }
}

export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
