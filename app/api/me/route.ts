import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/auth'

export async function GET(req: Request) {
  const authHeader = req.headers.get('Authorization')
  const token = authHeader?.replace('Bearer ', '')
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const supabase = createServerSupabase(token)

  const { data: userData, error: userErr } = await supabase.auth.getUser(token)
  if (userErr || !userData.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const email = userData.user.email
  const { data: profile, error: profileError } = await supabase
    .from('v_guest_profile')
    .select('*')
    .eq('email', email)
    .single()

  if (profileError || !profile) {
    return NextResponse.json({ error: 'No profile' }, { status: 404 })
  }

  const { data: photos, error: photosError } = await supabase
    .from('photos')
    .select('*')
    .eq('guest_id', profile.guest_id)
    .order('created_at', { ascending: true })

  if (photosError) {
    return NextResponse.json({ error: photosError.message }, { status: 500 })
  }

  return NextResponse.json({ profile, photos: photos ?? [] })
}
