'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.replace('/admin/login')
      } else {
        setUser(user)
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-on-surface-variant">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, Admin</h1>
            <p className="text-on-surface-variant mt-2">Here is what's happening with your website today.</p>
          </div>
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              window.location.href = '/admin/login'
            }}
            className="px-4 py-2 bg-surface border border-outline-variant text-white rounded-lg hover:bg-surface-variant transition-all text-sm"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-outline-variant">
            <p className="text-sm text-on-surface-variant mb-1">Total Blogs</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-outline-variant">
            <p className="text-sm text-on-surface-variant mb-1">New Leads</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-outline-variant">
            <p className="text-sm text-on-surface-variant mb-1">Case Studies</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-outline-variant">
            <p className="text-sm text-on-surface-variant mb-1">Pricing Plans</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-2xl border border-outline-variant">
          <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
          <p className="text-on-surface-variant mb-4">
            Use the sidebar on the left to manage your website content. You can add new blogs, update your pricing plans, manage client testimonials, and view incoming contact leads.
          </p>
          <ul className="list-disc list-inside space-y-2 text-on-surface-variant">
            <li>Changes made here will instantly reflect on the public website.</li>
            <li>For images, ensure you compress them before uploading to keep the website fast.</li>
            <li>Always review your content before publishing.</li>
          </ul>
        </div>

        <p className="text-xs text-on-surface-variant">Logged in as: {user?.email}</p>
      </div>
    </div>
  )
}
