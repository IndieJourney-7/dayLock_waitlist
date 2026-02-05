# Daylock Waitlist Landing Page

A serious, focused waitlist landing page for Daylock - "Your Day. Locked. One Room at a Time."

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (email waitlist)
- **Language:** TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor and run this query to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow counting for anonymous users
CREATE POLICY "Allow anonymous select for count" ON waitlist
  FOR SELECT
  TO anon
  USING (true);
```

3. Get your project URL and anon key from Settings > API
4. Update `.env.local` with your credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       ├── route.ts          # POST endpoint for signups
│   │       └── count/
│   │           └── route.ts      # GET endpoint for count
│   ├── globals.css               # Custom theme colors
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── components/
│   ├── DoorVisual.tsx            # Background door SVG
│   ├── WaitlistCount.tsx         # Live signup counter
│   └── WaitlistForm.tsx          # Email signup form
└── lib/
    └── supabase.ts               # Supabase client
```

## Color Theme

- **Background:** `#0B1A14` (near-black green)
- **Background Secondary:** `#0F1F17` (dark green)
- **Accent:** `#22C55E` (disciplined green)
- **Text Primary:** `#FFFFFF` (white)
- **Text Muted:** `#6B8F7A` (gray-green)

## Deploy on Vercel

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!
