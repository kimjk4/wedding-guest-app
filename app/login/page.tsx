'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [authProcessing, setAuthProcessing] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSent(false)
    const nextPath = searchParams.get('next') || '/me'
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/login?next=${encodeURIComponent(nextPath)}`
      }
    })
    if (error) setError(error.message)
    else setSent(true)
  }

  useEffect(() => {
    let isMounted = true
    async function handleMagicLinkRedirect() {
      if (typeof window === 'undefined') return
      const url = new URL(window.location.href)
      const nextPath = url.searchParams.get('next') || '/me'
      const hashParams = new URLSearchParams(url.hash.startsWith('#') ? url.hash.slice(1) : '')
      const accessToken = hashParams.get('access_token')
      const refreshToken = hashParams.get('refresh_token')
      const code = url.searchParams.get('code')

      if (!accessToken && !refreshToken && !code) return
      setAuthProcessing(true)
      setError('')
      let authError = ''

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
        if (error) authError = error.message
      } else if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) authError = error.message
      }

      if (!isMounted) return

      if (authError) {
        setError(authError)
        setAuthProcessing(false)
        return
      }

      const cleanUrl = new URL(url.origin + url.pathname)
      if (nextPath && nextPath !== '/me') cleanUrl.searchParams.set('next', nextPath)
      window.history.replaceState({}, '', cleanUrl.toString())
      router.replace(nextPath)
    }
    handleMagicLinkRedirect()
    return () => {
      isMounted = false
    }
  }, [router])

  return (
    <div className="space-y-8">
      <div className="space-y-4 text-center">
        <p className="font-script text-3xl text-espresso-600">For Emma &amp; Justin’s esteemed guests</p>
        <h1 className="text-4xl">Access your personal page</h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-espresso-500">
          Enter the email address provided in your RSVP. A secure link will arrive momentarily, allowing you
          to view the materials Emma &amp; Justin have prepared especially for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2 text-left">
          <label className="input-label">Email address</label>
          <input
            className="form-field"
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="btn-primary w-full sm:w-auto" type="submit">
          Send access link
        </button>
      </form>

      <div className="space-y-2 rounded-3xl border border-taupe-100 bg-ivory-100/80 p-6 text-sm text-espresso-500">
        <p className="font-heading text-base text-espresso-600">Helpful guidance</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>If you do not see the email promptly, please check spam or promotions folders.</li>
          <li>Open the link on the same device to complete the sign-in without interruption.</li>
          <li>
            For any assistance, reply to the message or contact us directly—we are glad to help.
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-2 text-sm text-espresso-500 sm:flex-row sm:justify-center">
        <a className="text-espresso-600 underline transition hover:text-espresso-500" href="/">
          Return to welcome page
        </a>
        <span className="hidden sm:inline">·</span>
        <a className="text-espresso-600 underline transition hover:text-espresso-500" href="/login?next=/admin">
          Admin console
        </a>
      </div>

      {authProcessing && <p className="text-sm text-espresso-500">Verifying your secure link…</p>}
      {sent && !authProcessing && <p className="text-sm text-espresso-500">Access link sent. Please check your inbox.</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="space-y-4 text-center text-sm text-espresso-500">Preparing sign-in…</div>}>
      <LoginForm />
    </Suspense>
  )
}
