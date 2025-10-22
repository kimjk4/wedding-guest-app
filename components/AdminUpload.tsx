'use client'
import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function AdminUpload() {
  const [guests, setGuests] = useState<any[]>([])
  const [guestId, setGuestId] = useState('')
  const [headline, setHeadline] = useState('')
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState<FileList | null>(null)
  const [captions, setCaptions] = useState<string[]>([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    supabase
      .from('guests')
      .select('id, full_name, email')
      .order('full_name')
      .then(({ data, error }) => {
        if (error) {
          console.error('Failed to load guests', error)
          setStatus(`Error loading guests: ${error.message}`)
          setGuests([])
          return
        }
        setGuests(data || [])
      })
  }, [])

  useEffect(() => {
    if (!guestId) return
    supabase.from('guest_content').select('headline, message').eq('guest_id', guestId).single()
      .then(({ data }) => {
        setHeadline(data?.headline ?? '')
        setMessage(data?.message ?? '')
      })
  }, [guestId])

  const previews = useMemo(() => files ? Array.from(files).map(file => URL.createObjectURL(file)) : [], [files])

  async function saveText() {
    if (!guestId) return
    setStatus('Saving message...')
    const { data: existing, error: fetchError } = await supabase
      .from('guest_content')
      .select('id')
      .eq('guest_id', guestId)
      .maybeSingle()

    if (fetchError) {
      setStatus(`Error loading existing message: ${fetchError.message}`)
      return
    }

    let error = null
    if (existing?.id) {
      const { error: updateError } = await supabase
        .from('guest_content')
        .update({ headline, message, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
      error = updateError ?? null
    } else {
      const { error: insertError } = await supabase
        .from('guest_content')
        .insert({ guest_id: guestId, headline, message })
      error = insertError ?? null
    }

    setStatus(error ? `Error saving message: ${error.message}` : 'Message saved ✓')
  }

  async function uploadPhotos() {
    if (!guestId || !files?.length) return
    setStatus('Uploading photos...')
    const list = Array.from(files)
    for (let i = 0; i < list.length; i++) {
      const file = list[i]
      const sanitisedName = file.name.replace(/[^A-Za-z0-9._-]/g, '_')
      const storageKey = `${guestId}/${Date.now()}_${sanitisedName}`
      const { error: upErr } = await supabase.storage.from('guest-photos').upload(storageKey, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type || undefined,
      })
      if (upErr) { setStatus(`Upload error: ${upErr.message}`); return }
      const caption = captions[i] || ''
      await supabase.from('photos').insert({ guest_id: guestId, storage_path: storageKey, caption })
    }
    setFiles(null); setCaptions([])
    setStatus('Uploaded ✓')
  }

  return (
    <div className="space-y-10">
      <section className="space-y-4 rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-xl">Select a guest</h2>
        <p className="text-sm text-espresso-500">
          Update their headline, message, and gallery. Please create the Supabase storage bucket named “guest-photos” before uploading.
        </p>
        </div>
        <div className="space-y-2">
          <label className="input-label">Guest</label>
          <select
            className="form-field cursor-pointer"
            value={guestId}
            onChange={(e) => setGuestId(e.target.value)}
          >
            <option value="">Choose a guest…</option>
            {guests.map((g) => (
              <option key={g.id} value={g.id}>
                {g.full_name} ({g.email})
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-xl">Personal message</h2>
          <p className="text-sm text-espresso-500">
            Compose a note for the guest; it will appear as soon as they sign in.
          </p>
        </div>
        <div className="space-y-4">
          <input
            className="form-field"
            placeholder="Headline (optional)"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
          <textarea
            className="form-field h-40 resize-none"
            placeholder="Personal message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn-primary w-full sm:w-auto" onClick={saveText}>
            Save message
          </button>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-xl">Gallery</h2>
          <p className="text-sm text-espresso-500">Upload photographs and add captions if desired.</p>
        </div>
        <input
          className="form-field"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            setFiles(e.target.files)
            setCaptions(Array.from(e.target.files || []).map(() => ''))
          }}
        />
        {!!previews.length && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previews.map((src, i) => (
              <figure key={i} className="overflow-hidden rounded-3xl border border-taupe-100 bg-white/95 shadow-sm">
                <img src={src} alt="preview" className="h-40 w-full object-cover" />
                <input
                  className="w-full border border-taupe-100 border-t bg-white px-4 py-2 text-sm text-espresso-600 shadow-sm transition focus:border-bronze-300 focus:outline-none focus:ring-2 focus:ring-bronze-300/70 rounded-b-3xl rounded-t-none"
                  placeholder="Caption (optional)"
                  value={captions[i] ?? ''}
                  onChange={(e) => {
                    const next = [...captions]
                    next[i] = e.target.value
                    setCaptions(next)
                  }}
                />
              </figure>
            ))}
          </div>
        )}
        <button className="btn-outline w-full sm:w-auto" onClick={uploadPhotos}>
          Upload photos
        </button>
      </section>

      {status && (
        <p className="rounded-3xl border border-taupe-100 bg-ivory-100/80 p-4 text-sm text-espresso-500">{status}</p>
      )}
    </div>
  )
}
