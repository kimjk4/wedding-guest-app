'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import AdminUpload from '@/components/AdminUpload'

export default function AdminPage() {
  const [role, setRole] = useState<'loading'|'guest'|'admin'>('loading')

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase.auth.getSession()
      const token = sess.session?.access_token
      if (!token) { setRole('guest'); return }
      const res = await fetch('/api/me', { headers: { Authorization: `Bearer ${token}` } })
      if (!res.ok) { setRole('guest'); return }
      const json = await res.json()
      setRole(json?.profile?.role === 'admin' ? 'admin' : 'guest')
    })()
  }, [])

  if (role === 'loading') {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm uppercase tracking-[0.3em] text-coal-400">
        Preparing your dashboard…
      </div>
    )
  }

  if (role !== 'admin') {
    return (
      <div className="space-y-6 text-center">
        <p className="font-script text-3xl text-espresso-600">Emma &amp; Justin extend their regards</p>
        <h1 className="text-3xl">This corner is reserved for the couple</h1>
        <p className="text-sm text-espresso-500">
          Guests are warmly invited by Emma &amp; Justin to visit{' '}
          <a className="text-espresso-600 underline transition hover:text-espresso-500" href="/me">
            your personal page
          </a>{' '}
          to read messages and browse photos.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="font-script text-3xl text-espresso-600">Emma &amp; Justin’s administrative suite</p>
        <h1 className="text-3xl">Manage guest messages and photos</h1>
        <p className="text-sm text-espresso-500">
          Maintain each guest’s note and gallery for Emma &amp; Justin from this page. Updates apply immediately.
        </p>
      </div>
      <AdminUpload />
    </div>
  )
}
