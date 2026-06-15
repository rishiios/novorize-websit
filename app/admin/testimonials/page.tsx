'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Testimonial { id: string; author: string; company: string; content: string; rating: number; created_at: string }
const empty: Partial<Testimonial> = { author: '', company: '', content: '', rating: 5 }

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<Testimonial>>(empty)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setShowModal(true) }
  function openEdit(t: Testimonial) { setEditing(t); setShowModal(true) }

  async function save() {
    setSaving(true)
    const payload = { author: editing.author, company: editing.company, content: editing.content, rating: editing.rating }
    if (editing.id) { await supabase.from('testimonials').update(payload).eq('id', editing.id) }
    else { await supabase.from('testimonials').insert(payload) }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this testimonial?')) return
    await supabase.from('testimonials').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Testimonials Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Testimonial</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No testimonials yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(t => (
          <div key={t.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div>
              <p className="text-white italic">"{t.content}"</p>
              <p className="text-on-surface-variant text-sm mt-2">— {t.author}, {t.company}</p>
              <p className="text-yellow-400 text-sm mt-1">{'★'.repeat(t.rating || 0)}{'☆'.repeat(5 - (t.rating || 0))}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0 ml-4">
              <button onClick={() => openEdit(t)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(t.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
            <input placeholder="Author Name" value={editing.author || ''} onChange={e => setEditing({...editing, author: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Company" value={editing.company || ''} onChange={e => setEditing({...editing, company: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <textarea placeholder="Testimonial content" rows={4} value={editing.content || ''} onChange={e => setEditing({...editing, content: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <div><label className="text-on-surface-variant text-sm">Rating (1-5)</label><input type="number" min={1} max={5} value={editing.rating || 5} onChange={e => setEditing({...editing, rating: parseInt(e.target.value) || 5})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none mt-1" /></div>
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
