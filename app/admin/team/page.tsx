'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Member { id: string; name: string; role: string; bio: string; image_url: string; linkedin: string; created_at: string }
const empty: Partial<Member> = { name: '', role: '', bio: '', image_url: '', linkedin: '' }

export default function TeamPage() {
  const [items, setItems] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<Member>>(empty)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('team_members').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setShowModal(true) }
  function openEdit(m: Member) { setEditing(m); setShowModal(true) }

  async function save() {
    setSaving(true)
    const payload = { name: editing.name, role: editing.role, bio: editing.bio, image_url: editing.image_url, linkedin: editing.linkedin }
    if (editing.id) { await supabase.from('team_members').update(payload).eq('id', editing.id) }
    else { await supabase.from('team_members').insert(payload) }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this member?')) return
    await supabase.from('team_members').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Team Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Member</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No team members yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(m => (
          <div key={m.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div><h3 className="text-white font-semibold">{m.name}</h3><p className="text-on-surface-variant text-sm mt-1">{m.role}</p></div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(m)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(m.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Member' : 'Add Member'}</h2>
            <input placeholder="Name" value={editing.name || ''} onChange={e => setEditing({...editing, name: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Role / Designation" value={editing.role || ''} onChange={e => setEditing({...editing, role: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <textarea placeholder="Bio" rows={3} value={editing.bio || ''} onChange={e => setEditing({...editing, bio: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <input placeholder="Image URL" value={editing.image_url || ''} onChange={e => setEditing({...editing, image_url: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="LinkedIn URL" value={editing.linkedin || ''} onChange={e => setEditing({...editing, linkedin: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
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
