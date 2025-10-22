import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="font-script text-3xl text-espresso-600 sm:text-4xl">We look forward to celebrating together</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Emma &amp; Justin’s wedding guest portal</h1>
          <p className="text-lg leading-relaxed text-espresso-500">
            This private site is reserved for our invited guests. Sign in to read the note prepared for you,
            review the photographs we have selected, and stay informed about the proceedings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href="/login">
              View your invitation
            </Link>
            <Link className="btn-outline" href="/me">
              Already have the link?
            </Link>
            <Link className="btn-outline" href="/admin">
              Couple login
            </Link>
          </div>
        </div>
        <aside className="space-y-6 rounded-3xl border border-taupe-100 bg-ivory-100/70 p-6 shadow-soft">
          <p className="chip inline-flex">Guest guidance</p>
          <div className="space-y-4 text-sm leading-relaxed text-espresso-500">
            <p>
              Please use the email address provided in your RSVP. The secure link will bring you directly to
              your personal page—no password required.
            </p>
            <p>
              Should you wish to share a message or photograph in return, simply reply to the email and we will
              ensure it is included in our keepsake.
            </p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
          <p className="text-2xl">💌</p>
          <h2 className="mt-3 text-xl">Your message</h2>
          <p className="mt-2 text-sm leading-relaxed text-espresso-500">
            A personal note from Emma &amp; Justin, written in appreciation of the role you play in their lives.
          </p>
        </div>
        <div className="rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
          <p className="text-2xl">📸</p>
          <h2 className="mt-3 text-xl">Handpicked photos</h2>
          <p className="mt-2 text-sm leading-relaxed text-espresso-500">
            Moments carefully selected to reflect memories shared with you.
          </p>
        </div>
        <div className="rounded-3xl border border-taupe-100 bg-white/92 p-6 shadow-sm">
          <p className="text-2xl">🕊️</p>
          <h2 className="mt-3 text-xl">Event details</h2>
          <p className="mt-2 text-sm leading-relaxed text-espresso-500">
            Essential times, venue information, and other particulars for Emma &amp; Justin’s celebration.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-bronze-300/70 bg-white/85 p-8 text-center shadow-soft">
        <p className="font-script text-3xl text-espresso-600 sm:text-4xl">“Moments gain meaning when shared.”</p>
        <p className="text-sm uppercase tracking-[0.3em] text-coal-400">Emma &amp; Justin are grateful for your presence</p>
      </section>
    </div>
  )
}
