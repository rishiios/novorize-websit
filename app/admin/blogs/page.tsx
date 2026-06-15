'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

interface Blog { id: string; title: string; slug: string; excerpt: string; content: string; published: boolean; created_at: string }

const empty: Partial<Blog> = { title: '', slug: '', excerpt: '', content: '', published: false }

export default function BlogsPage() {
  const [items, setItems] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState<Partial<Blog>>(empty)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  async function load() {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })
    setItems(data || []); setLoading(false)
  }
  useEffect(() => { load() }, [])

  function openAdd() { setEditing(empty); setShowModal(true) }
  function openEdit(b: Blog) { setEditing(b); setShowModal(true) }

  async function save() {
    setSaving(true)
    const slug = editing.slug || editing.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || ''
    const payload = { title: editing.title, slug, excerpt: editing.excerpt, content: editing.content, published: editing.published }
    if (editing.id) {
      await supabase.from('blogs').update(payload).eq('id', editing.id)
    } else {
      await supabase.from('blogs').insert(payload)
    }
    setSaving(false); setShowModal(false); load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this blog?')) return
    await supabase.from('blogs').delete().eq('id', id); load()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><p className="text-on-surface-variant">Loading...</p></div>

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Blog Management</h1>
        <button onClick={openAdd} className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">+ Add Blog</button>
      </div>
      {items.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl border border-outline-variant text-center"><p className="text-on-surface-variant">No blogs yet.</p></div>
      ) : (
        <div className="grid gap-4">{items.map(b => (
          <div key={b.id} className="glass-card p-6 rounded-2xl border border-outline-variant flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">{b.title}</h3>
              <p className="text-on-surface-variant text-sm mt-1">{b.excerpt || 'No excerpt'}</p>
              <span className={`text-xs mt-2 inline-block px-2 py-0.5 rounded ${b.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{b.published ? 'Published' : 'Draft'}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(b)} className="px-3 py-1 bg-surface border border-outline-variant text-white rounded text-sm hover:bg-surface-variant">Edit</button>
              <button onClick={() => remove(b.id)} className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded text-sm hover:bg-error/30">Delete</button>
            </div>
          </div>
        ))}</div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="glass-card w-full max-w-lg p-6 rounded-2xl border border-outline-variant space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">{editing.id ? 'Edit Blog' : 'Add Blog'}</h2>
            <input placeholder="Title" value={editing.title || ''} onChange={e => setEditing({...editing, title: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Slug (auto)" value={editing.slug || ''} onChange={e => setEditing({...editing, slug: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <input placeholder="Excerpt" value={editing.excerpt || ''} onChange={e => setEditing({...editing, excerpt: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none" />
            <textarea placeholder="Content" rows={5} value={editing.content || ''} onChange={e => setEditing({...editing, content: e.target.value})} className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-white outline-none resize-none" />
            <label className="flex items-center gap-2 text-on-surface-variant text-sm"><input type="checkbox" checked={editing.published || false} onChange={e => setEditing({...editing, published: e.target.checked})} /> Published</label>
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
