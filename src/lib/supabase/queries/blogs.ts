import { supabase } from "@/integrations/supabase/client";

export interface Blog {
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
}

export interface BlogInput {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: string;
  author: string;
  image?: string;
  tags?: string[];
  published?: boolean;
  read_time?: string;
}

// Get all blogs (admin view - includes unpublished)
export async function getAllBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Blog[];
}

// Get published blogs only (public view)
export async function getPublishedBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Blog[];
}

// Get single blog by slug
export async function getBlogBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data as Blog;
}

// Get single blog by ID
export async function getBlogById(id: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data as Blog;
}

// Create new blog
export async function createBlog(blog: BlogInput) {
  const { data, error } = await supabase
    .from("blogs")
    .insert([blog])
    .select()
    .single();

  if (error) throw error;
  return data as Blog;
}

// Update blog
export async function updateBlog(id: string, blog: Partial<BlogInput>) {
  const { data, error } = await supabase
    .from("blogs")
    .update(blog)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Blog;
}

// Delete blog
export async function deleteBlog(id: string) {
  const { error } = await supabase.from("blogs").delete().eq("id", id);

  if (error) throw error;
}

// Get blog stats
export async function getBlogStats() {
  const { data, error } = await supabase
    .from("blogs")
    .select("published", { count: "exact" });

  if (error) throw error;

  const total = data?.length || 0;
  const published = data?.filter((b) => b.published).length || 0;
  const draft = total - published;

  return { total, published, draft };
}

