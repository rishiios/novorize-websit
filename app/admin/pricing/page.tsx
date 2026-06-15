'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Plan { id: string; name: string; price: number; description: string; features: string[]; popular: boolean; created_at: string }

const empty: Partial<Plan> = { name: '', price: 0, description: '', features: [], popular: false }

export default function PricingPage() {
  const [items, setItems] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<Plan>>(empty)
  const [featuresText, setFeaturesText] = useState('')
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('pricing_plans').select('*').order('price', { ascending: true })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setFeaturesText(''); setShowModal(true) }
  function openEdit(p: Plan) { setEditing(p); setFeaturesText((p.features || []).join(', ')); setShowModal(true) }

  async function save() {
    setSaving(true)
    const features = featuresText.split(',').map(f => f.trim()).filter(Boolean)
    const payload = { name: editing.name, price: editing.price, description: editing.description, features, popular: editing.popular }
    if (editing.id) {
      await supabase.from('pricing_plans').update(payload).eq('id', editing.id)
    } else {
      await supabase.from('pricing_plans').insert(payload)
    }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this plan?')) return
    await supabase.from('pricing_plans').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Pricing Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Plan</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No plans yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(p => (
          <div key={p.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold">{p.name}</h3>
                {p.popular && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">Popular</span>}
              </div>
              <p className="text-primary text-lg font-bold mt-1">₹{p.price?.toLocaleString()}</p>
              <p className="text-on-surface-variant text-sm mt-1">{(p.features || []).join(' • ')}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(p)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(p.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Plan' : 'Add Plan'}</h2>
            <input placeholder="Plan Name" value={editing.name || ''} onChange={e => setEditing({...editing, name: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Price (₹)" type="number" value={editing.price || 0} onChange={e => setEditing({...editing, price: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Description" value={editing.description || ''} onChange={e => setEditing({...editing, description: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Features (comma separated)" value={featuresText} onChange={e => setFeaturesText(e.target.value)} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <label className="flex items-center gap-2 text-on-surface-variant text-sm"><input type="checkbox" checked={editing.popular || false} onChange={e => setEditing({...editing, popular: e.target.checked})} /> Mark as Popular</label>
            <div className="flex gap-3 pt-2">
              <button onClick={save} disabled={saving} className="px-6 py-2 bg-primary text-black font-semibold rounded-lg disabled:opacity-50">{saving ? 'Saving...' : 'Save'}</button>
              <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-surface border border-outline-variant text-white rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
