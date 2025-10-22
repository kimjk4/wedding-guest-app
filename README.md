# Wedding Guest App (Next.js + Supabase + Tailwind)

Personalized messages and photo galleries for each wedding guest. Includes an admin-only page to upload photos and edit messages in the browser.

## Quick start (local)

1. **Install deps**
```bash
npm install
```

2. **Create `.env.local`**
Copy `.env.local.template` to `.env.local` and fill with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...        # optional; used only on the server if provided
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. **Create DB tables** in Supabase (SQL editor):

```sql
create table if not exists public.guests (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  full_name text not null,
  invite_code text unique,
  is_attending boolean default false,
  role text default 'guest' check (role in ('guest','admin')),
  created_at timestamp with time zone default now()
);

create table if not exists public.guest_content (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  headline text,
  message text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  guest_id uuid not null references public.guests(id) on delete cascade,
  storage_path text not null,
  caption text,
  created_at timestamp with time zone default now()
);

create or replace view public.v_guest_profile as
select g.id as guest_id, g.email, g.full_name, g.role,
       c.headline, c.message
from public.guests g
left join public.guest_content c on c.guest_id = g.id;

-- (optional but recommended) seed a test admin guest
insert into public.guests (email, full_name, role)
values ('you@example.com', 'Admin User', 'admin')
on conflict (email) do update set role = excluded.role;
```

4. **Create storage bucket** `guest-photos` (public recommended).

5. **(Recommended) Enable row-level security** so only authenticated guests/admins can access their data:

```sql
alter table public.guests enable row level security;
alter table public.guest_content enable row level security;
alter table public.photos enable row level security;

create policy "Guests can view own record" on public.guests
  for select using (auth.email() = email);

create policy "Admins can view all guests" on public.guests
  for select using (exists (
    select 1 from public.guests g2
    where g2.email = auth.email() and g2.role = 'admin'
  ));

create policy "Admins manage guest content" on public.guest_content
  for all using (exists (
    select 1 from public.guests g2
    where g2.email = auth.email() and g2.role = 'admin'
  ));

create policy "Guests view their content" on public.guest_content
  for select using (auth.email() = (
    select email from public.guests g where g.id = guest_id
  ));

create policy "Admins manage photos" on public.photos
  for all using (exists (
    select 1 from public.guests g2
    where g2.email = auth.email() and g2.role = 'admin'
  ));

create policy "Guests view their photos" on public.photos
  for select using (auth.email() = (
    select email from public.guests g where g.id = guest_id
  ));
```

For the `guest-photos` storage bucket, enable public access or add a storage policy such as:

```sql
-- Supabase requires using the storage_admin role when modifying storage policies
set role storage_admin;

alter table storage.objects enable row level security;

```sql
create policy "Admin upload guest-photos" on storage.objects
for insert
with check (
  bucket_id = 'guest-photos'
  and public.is_admin(auth.email())
);

create policy "Public read guest-photos" on storage.objects
for select using (
  bucket_id = 'guest-photos'
);
```

5. **Run the app**
```bash
npm run dev
# open http://localhost:3000
```

## Daily workflow

1. **Log in as admin**
   - Visit `/login?next=/admin` and request the magic link using the email you marked as `role = 'admin'`.
   - Open the emailed link on the same device; the app verifies it automatically and forwards you to `/admin`.

2. **Curate guest content** (at `/admin`)
   - Pick a guest from the dropdown to load their existing headline/message.
   - Write or edit their message and click “Save message”.
   - Upload one or many photos, add optional captions, then “Upload photos”. Each file is stored under `guest-photos/<guest_id>/<timestamp>_<filename>` and recorded in the `photos` table.

3. **Review the guest experience**
   - Follow the same email login flow as the guest (or use the magic link directly) to visit `/me`.
   - The page reads their row from `v_guest_profile` and the associated entries from `photos`, rendering the message and gallery with the new neutral styling.

4. **Sign out**
   - Submit the sign-out button on `/me` or `/admin`. This clears Supabase auth cookies and redirects back to `/login`.

## Admin setup (Option B)
- In Supabase `guests`, set your user’s `role` = `admin`.
- Use `/login?next=/admin` to receive the magic link, then curate content on `/admin`.
- Visit `/me` as each guest to verify their experience.

## Private photos (optional)
- Make bucket private and use the provided API at `/api/photo-urls` with signed URLs.
- Replace the PhotoGrid with the signed URL variant (see code comments).

## Deploy (Vercel)
1. Push to GitHub:
```bash
git init && git add . && git commit -m "initial"
git branch -M main
git remote add origin https://github.com/yourname/wedding-guest-app.git
git push -u origin main
```
2. Import the repo in Vercel and set the environment variables.
3. Update Supabase Auth redirect URLs to your deployed domain (e.g. `https://yourapp.vercel.app/me`).

## Notes
- Photo URLs assume a **public** bucket. For private bucket, switch to signed URLs.
