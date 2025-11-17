image.png# Database Setup - Step by Step

## ✅ Login Works! Now Set Up the Database

You successfully logged in, but seeing a blank page because the database tables don't exist yet.

## Step 1: Run Database Migration

### Go to Supabase Dashboard
1. Open: https://supabase.com/dashboard/project/bghudqeqgjqcjywwzrgo
2. Click **SQL Editor** in the left sidebar
3. Click **New Query** button

### Copy and Paste the Migration SQL
1. Open the file: `supabase/migrations/001_initial_schema.sql` in your project
2. Copy **ALL the SQL code** (it's about 200+ lines)
3. Paste it into the SQL Editor in Supabase
4. Click **Run** (or press Ctrl+Enter)

You should see: "Success. No rows returned"

### What This Creates:
- ✅ `blogs` table
- ✅ `projects` table
- ✅ `profiles` table
- ✅ Security policies (RLS)
- ✅ Triggers for auto-updates

## Step 2: Set Your User as Admin

After running the migration, your user needs to be set as admin.

### Option A: Via SQL Editor (Easiest)
In the same SQL Editor, run this (replace email):

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'slcctvpro.secure@gmail.com';
```

Click **Run**

### Option B: Via Table Editor
1. Go to **Table Editor** in left sidebar
2. Click **profiles** table
3. Find your user row
4. Click to edit
5. Change `role` from `'user'` to `'admin'`
6. Save

## Step 3: Refresh Admin Page

After setting admin role:
1. Go back to your browser tab: `localhost:8080/admin`
2. Press `F5` to refresh
3. You should now see the admin dashboard!

## What You'll See

After refresh, you should see:
- 📊 Dashboard with statistics
- 📝 Sidebar with "Blogs" and "Projects" links
- ➕ Ability to create new blog posts and projects

## Troubleshooting

### Still seeing blank page?
1. Press `F12` → Console tab
2. Look for any red errors
3. Share what errors you see

### "profiles table doesn't exist"?
- Migration didn't run successfully
- Try running it again in SQL Editor

### User profile not found?
- Sign out and sign in again
- Profile should be created automatically on login

