import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  category: string;
  author: string;
  image: string | null;
  tags: string[];
  published: boolean;
  read_time: string | null;
  created_at: string;
  updated_at: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string | null;
  description: string;
  category: string;
  image: string | null;
  technologies: string[];
  demo_url: string | null;
  github_url: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }

  return data as BlogPost[];
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }

  return data as BlogPost;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }

  return data as Project[];
};

export const fetchProjectBySlug = async (slug: string): Promise<Project | null> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }

  return data as Project;
};