'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Client { id: string; name: string; email: string; company: string; phone: string; status: string; notes: string; created_at: string }
const empty: Partial<Client> = { name: '', email: '', company: '', phone: '', status: 'active', notes: '' }

export default function ClientsPage() {
  const [items, setItems] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<Client>>(empty)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('clients').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setShowModal(true) }
  function openEdit(c: Client) { setEditing(c); setShowModal(true) }

  async function save() {
    setSaving(true)
    const payload = { name: editing.name, email: editing.email, company: editing.company, phone: editing.phone, status: editing.status, notes: editing.notes }
    if (editing.id) { await supabase.from('clients').update(payload).eq('id', editing.id) }
    else { await supabase.from('clients').insert(payload) }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this client?')) return
    await supabase.from('clients').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Client Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Client</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No clients yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(c => (
          <div key={c.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">{c.name}</h3>
              <p className="text-on-surface-variant text-sm mt-1">{c.company} • {c.email}</p>
              <span className={`text-xs mt-2 inline-block px-2 py-0.5 rounded ${c.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{c.status}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(c)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(c.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Client' : 'Add Client'}</h2>
            <input placeholder="Name" value={editing.name || ''} onChange={e => setEditing({...editing, name: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Email" type="email" value={editing.email || ''} onChange={e => setEditing({...editing, email: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Company" value={editing.company || ''} onChange={e => setEditing({...editing, company: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Phone" value={editing.phone || ''} onChange={e => setEditing({...editing, phone: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <select value={editing.status || 'active'} onChange={e => setEditing({...editing, status: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <textarea placeholder="Notes" rows={3} value={editing.notes || ''} onChange={e => setEditing({...editing, notes: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
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
