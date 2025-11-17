-- ============================================
-- COMPLETE FIX FOR ADMIN ACCESS
-- Run this entire SQL in Supabase SQL Editor
-- ============================================

-- Step 1: Create your profile if it doesn't exist
-- Replace 'your-user-id' with your actual user ID from auth.users table
INSERT INTO public.profiles (id, email, role)
SELECT 
    id,
    email,
    'admin'
FROM auth.users
WHERE email = 'slcctvpro.secure@gmail.com'
ON CONFLICT (id) DO UPDATE
SET role = 'admin';

-- Step 2: Add RLS policy for admins to read all blogs
DROP POLICY IF EXISTS "Admins can view all blogs" ON public.blogs;
CREATE POLICY "Admins can view all blogs"
    ON public.blogs FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- Step 3: Add RLS policy for admins to read all projects
DROP POLICY IF EXISTS "Admins can view all projects" ON public.projects;
CREATE POLICY "Admins can view all projects"
    ON public.projects FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- Step 4: Update existing policies to allow users to view their own profile
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

-- Step 5: Allow admins to view all profiles
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles"
    ON public.profiles FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid()
            AND p.role = 'admin'
        )
    );

-- Verify: Check if your user is now admin
SELECT id, email, role, created_at
FROM public.profiles
WHERE email = 'slcctvpro.secure@gmail.com';

