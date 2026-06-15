import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const SUPABASE_URL = 'https://lizurfomyjlgtkccepew.supabase.co'
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpenVyZm9teWpsZ3RrY2NlcGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MjkzMTUsImV4cCI6MjA5NzAwNTMxNX0.QBb53mpizZm83EXl2GRvoAKT-FaEK6F5OAWIEdOOb00'

  return createBrowserClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )
}
