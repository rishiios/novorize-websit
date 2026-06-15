import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const SUPABASE_URL = 'https://lizurfomyjlgtkccepew.supabase.co'
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpenVyZm9teWpsZ3RrY2NlcGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MjkzMTUsImV4cCI6MjA5NzAwNTMxNX0.QBb53mpizZm83EXl2GRvoAKT-FaEK6F5OAWIEdOOb00'

  const supabase = createServerClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protect the /admin routes except /admin/login
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!user) {
      // Redirect to login
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  // Redirect to dashboard if logged in user visits /admin/login
  if (request.nextUrl.pathname === '/admin/login') {
      if (user) {
          const url = request.nextUrl.clone()
          url.pathname = '/admin'
          return NextResponse.redirect(url)
      }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
