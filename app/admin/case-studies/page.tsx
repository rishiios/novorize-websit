'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface CaseStudy { id: string; title: string; client_name: string; description: string; challenge: string; solution: string; results: string; created_at: string }
const empty: Partial<CaseStudy> = { title: '', client_name: '', description: '', challenge: '', solution: '', results: '' }

export default function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<CaseStudy>>(empty)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setShowModal(true) }
  function openEdit(c: CaseStudy) { setEditing(c); setShowModal(true) }

  async function save() {
    setSaving(true)
    const payload = { title: editing.title, client_name: editing.client_name, description: editing.description, challenge: editing.challenge, solution: editing.solution, results: editing.results }
    if (editing.id) { await supabase.from('case_studies').update(payload).eq('id', editing.id) }
    else { await supabase.from('case_studies').insert(payload) }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this case study?')) return
    await supabase.from('case_studies').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Case Studies Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Case Study</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No case studies yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(c => (
          <div key={c.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div><h3 className="text-white font-semibold">{c.title}</h3><p className="text-on-surface-variant text-sm mt-1">Client: {c.client_name}</p></div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(c)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(c.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Case Study' : 'Add Case Study'}</h2>
            <input placeholder="Title" value={editing.title || ''} onChange={e => setEditing({...editing, title: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Client Name" value={editing.client_name || ''} onChange={e => setEditing({...editing, client_name: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <textarea placeholder="Description" rows={3} value={editing.description || ''} onChange={e => setEditing({...editing, description: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <textarea placeholder="Challenge" rows={3} value={editing.challenge || ''} onChange={e => setEditing({...editing, challenge: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <textarea placeholder="Solution" rows={3} value={editing.solution || ''} onChange={e => setEditing({...editing, solution: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <textarea placeholder="Results" rows={3} value={editing.results || ''} onChange={e => setEditing({...editing, results: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
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
