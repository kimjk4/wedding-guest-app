'use client'

export default function PhotoGrid({ items, guestId }: { items: any[]; guestId: string }) {
  if (!items?.length) {
    return (
      <div className="rounded-3xl border border-taupe-100 bg-ivory-100/80 p-6 text-center text-sm text-espresso-500">
        No photographs are available yet—Emma &amp; Justin will add selected images shortly. 📷
      </div>
    )
  }
  const projectRef = process.env.NEXT_PUBLIC_SUPABASE_URL?.split('https://')[1]?.split('.supabase.co')[0] || 'YOUR_PROJECT_REF'
  const bucketRoot = `https://${projectRef}.supabase.co/storage/v1/object/public/guest-photos/`
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => {
        const rawPath = typeof p.storage_path === 'string' ? p.storage_path : ''
        const normalizedPath = rawPath.replace(/^guest-photos\//, '')
        const src = `${bucketRoot}${normalizedPath}`
        return (
          <figure
            key={p.id}
            className="group overflow-hidden rounded-3xl border border-taupe-100 bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-ring"
          >
            <img
              src={src}
              alt={p.caption ?? ''}
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            {p.caption && (
              <figcaption className="border-t border-taupe-100 bg-white/85 p-3 text-xs italic text-espresso-500">{p.caption}</figcaption>
            )}
          </figure>
        )
      })}
    </div>
  )
}
