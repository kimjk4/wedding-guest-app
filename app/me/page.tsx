'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import PhotoGrid from '@/components/PhotoGrid'

export default function MePage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const session = await supabase.auth.getSession()
      const token = session.data.session?.access_token
      if (!token) {
        setError('Not signed in')
        setLoading(false)
        return
      }
      const res = await fetch('/api/me', { headers: { Authorization: `Bearer ${token}` } })
      const json = await res.json()
      if (!res.ok) setError(json.error || 'Error')
      else setData(json)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm uppercase tracking-[0.3em] text-coal-400">
        Preparing your materials…
      </div>
    )
  }
  if (error) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-red-600">Something went wrong</p>
        <p className="text-sm text-espresso-500">{error}</p>
      </div>
    )
  }

  const { profile, photos } = data
  const firstName = profile.full_name?.split(' ')[0] ?? 'Friend'

  return (
    <div className="space-y-10">
      <section className="space-y-6 rounded-3xl border border-taupe-100 bg-white/92 p-8 shadow-soft">
        <div className="space-y-2">
          <p className="font-script text-3xl text-espresso-600">Dear {firstName}</p>
          <h1 className="text-4xl leading-tight">A message prepared in your honour</h1>
        </div>
        {profile.headline && <p className="text-lg text-espresso-500">{profile.headline}</p>}
        {profile.message && (
          <div className="rounded-3xl border border-taupe-100 bg-ivory-100/70 p-6 text-left">
            <p className="whitespace-pre-wrap text-lg leading-relaxed text-espresso-600">{profile.message}</p>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl">Shared memories</h2>
            <p className="text-sm text-espresso-500">A gallery reflecting moments from our time together.</p>
          </div>
          <span className="chip self-start sm:self-auto">Keepsake archive</span>
        </div>
        <PhotoGrid items={photos} guestId={profile.guest_id} />
      </section>

      <form action="/api/signout" method="post" className="flex justify-end">
        <button className="btn-outline" type="submit">
          Sign out
        </button>
      </form>
    </div>
  )
}
