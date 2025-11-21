-- ============================================
-- YARNIX LABS DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- BLOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'General',
    author TEXT NOT NULL,
    image TEXT,
    tags TEXT[] DEFAULT '{}',
    published BOOLEAN DEFAULT false,
    read_time TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS blogs_slug_idx ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS blogs_published_idx ON public.blogs(published);
CREATE INDEX IF NOT EXISTS blogs_created_at_idx ON public.blogs(created_at DESC);

-- ============================================
-- PROJECTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    tagline TEXT,
    description TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Web Apps',
    image TEXT,
    technologies TEXT[] DEFAULT '{}',
    demo_url TEXT,
    github_url TEXT,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS projects_slug_idx ON public.projects(slug);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON public.projects(featured);
CREATE INDEX IF NOT EXISTS projects_created_at_idx ON public.projects(created_at DESC);

-- ============================================
-- AUTO-UPDATE TIMESTAMP FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for auto-updating timestamps
DROP TRIGGER IF EXISTS handle_blogs_updated_at ON public.blogs;
CREATE TRIGGER handle_blogs_updated_at
    BEFORE UPDATE ON public.blogs
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_projects_updated_at ON public.projects;
CREATE TRIGGER handle_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public can read published blogs
DROP POLICY IF EXISTS "Anyone can view published blogs" ON public.blogs;
CREATE POLICY "Anyone can view published blogs"
    ON public.blogs FOR SELECT
    USING (published = true);

-- Public can read all projects
DROP POLICY IF EXISTS "Anyone can view all projects" ON public.projects;
CREATE POLICY "Anyone can view all projects"
    ON public.projects FOR SELECT
    USING (true);

-- Authenticated users can do everything (simple admin access)
DROP POLICY IF EXISTS "Authenticated users can do everything with blogs" ON public.blogs;
CREATE POLICY "Authenticated users can do everything with blogs"
    ON public.blogs
    USING (auth.uid() IS NOT NULL)
    WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Authenticated users can do everything with projects" ON public.projects;
CREATE POLICY "Authenticated users can do everything with projects"
    ON public.projects
    USING (auth.uid() IS NOT NULL)
    WITH CHECK (auth.uid() IS NOT NULL);

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample blog
INSERT INTO public.blogs (title, slug, excerpt, content, category, author, image, tags, published, read_time)
VALUES (
    'Welcome to Yarnix Labs Blog',
    'welcome-to-yarnix-labs-blog',
    'Discover how we''re building the future of AI-powered software solutions.',
    'Welcome to our blog! We''re excited to share insights about AI, automation, and software development.',
    'AI',
    'Yarnix Team',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    ARRAY['AI', 'Announcement'],
    true,
    '3 min read'
) ON CONFLICT (slug) DO NOTHING;

-- Insert sample project
INSERT INTO public.projects (title, slug, tagline, description, category, image, technologies, demo_url, featured)
VALUES (
    'AI Content Generator',
    'ai-content-generator',
    'Transform ideas into engaging content instantly',
    'Our AI Content Generator uses advanced language models to create high-quality content for blogs, social media, and marketing materials.',
    'AI Tools',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    ARRAY['OpenAI', 'React', 'Node.js', 'PostgreSQL'],
    'https://demo.yarnixlabs.com',
    true
) ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- VERIFICATION
-- ============================================

-- Check tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('blogs', 'projects');

-- Show sample data
SELECT COUNT(*) as blog_count FROM public.blogs;
SELECT COUNT(*) as project_count FROM public.projects;

