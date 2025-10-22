import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/auth'

export async function POST(req: Request) {
  const supabase = createServerSupabase()
  const { paths } = await req.json()
  const urls: string[] = []
  for (const p of paths) {
    const key = p.replace('guest-photos/','')
    const { data, error } = await supabase.storage.from('guest-photos').createSignedUrl(key, 60 * 60)
    if (!error && data?.signedUrl) urls.push(data.signedUrl)
  }
  return NextResponse.json({ urls })
}