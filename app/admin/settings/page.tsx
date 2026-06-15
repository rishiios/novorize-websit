'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>({ company_name: '', contact_email: '', phone: '', address: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('website_settings').select('*').limit(1).single()
      if (data) setSettings(data)
      setLoading(false)
    }
    load()
  }, [])

  async function save() {
    setSaving(true); setSaved(false)
    const payload = { company_name: settings.company_name, contact_email: settings.contact_email, phone: settings.phone, address: settings.address }
    if (settings.id) {
      await supabase.from('website_settings').update(payload).eq('id', settings.id)
    } else {
      await supabase.from('website_settings').insert(payload)
    }
    setSaving(false); setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Website Settings</h1>
      <div className="glass-card p-8 rounded-2xl border border-outline-variant space-y-6">
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-1">Company Name</label>
          <input type="text" value={settings.company_name || ''} onChange={e => setSettings({...settings, company_name: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-1">Contact Email</label>
          <input type="email" value={settings.contact_email || ''} onChange={e => setSettings({...settings, contact_email: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-1">Phone Number</label>
          <input type="text" value={settings.phone || ''} onChange={e => setSettings({...settings, phone: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface-variant mb-1">Address</label>
          <textarea rows={3} value={settings.address || ''} onChange={e => setSettings({...settings, address: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={save} disabled={saving} className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50">{saving ? 'Saving...' : 'Save Settings'}</button>
          {saved && <span className="text-green-400 text-sm">✓ Settings saved successfully!</span>}
        </div>
      </div>
    </div>
  )
}
