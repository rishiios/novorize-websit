'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Lead { id: string; name: string; email: string; phone: string; message: string; status: string; created_at: string }

export default function LeadsPage() {
  const [items, setItems] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('leads').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function updateStatus(id: string, status: string) {
    await supabase.from('leads').update({ status }).eq('id', id); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this lead?')) return
    await supabase.from('leads').delete().eq('id', id); load()
  }

  const statusColors: Record<string, string> = {
    new: 'bg-blue-500/20 text-blue-400',
    contacted: 'bg-yellow-500/20 text-yellow-400',
    converted: 'bg-green-500/20 text-green-400',
    closed: 'bg-red-500/20 text-red-400',
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Contact Leads</h1>
        <span className="text-on-surface-variant text-sm">{items.length} total leads</span>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No leads yet. They will appear here when someone submits the contact form.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(l => (
          <div key={l.id} className="glass-card p-6 rounded-2xl border border-outline-variant">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-white font-semibold">{l.name}</h3>
                <p className="text-on-surface-variant text-sm">{l.email} • {l.phone}</p>
                <p className="text-on-surface-variant text-sm mt-2">{l.message}</p>
                <p className="text-on-surface-variant text-xs mt-2">{new Date(l.created_at).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <select value={l.status} onChange={e => updateStatus(l.id, e.target.value)} className={`px-2 py-1 rounded text-xs font-semibold border-0 outline-none cursor-pointer ${statusColors[l.status] || statusColors.new}`}>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                  <option value="closed">Closed</option>
                </select>
                <button onClick={() => remove(l.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
              </div>
            </div>
          </div>
        ))}</div>
      )}
    </div>
  )
}
