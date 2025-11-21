import { supabase } from "@/integrations/supabase/client";

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

export interface ProjectInput {
  title: string;
  slug: string;
  tagline?: string;
  description: string;
  category: string;
  image?: string;
  technologies?: string[];
  demo_url?: string;
  github_url?: string;
  featured?: boolean;
}

// Get all projects
export async function getAllProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Project[];
}

// Get featured projects only
export async function getFeaturedProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Project[];
}

// Get single project by slug
export async function getProjectBySlug(slug: string) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data as Project;
}

// Get single project by ID
export async function getProjectById(id: string) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data as Project;
}

// Create new project
export async function createProject(project: ProjectInput) {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select()
    .single();

  if (error) throw error;
  return data as Project;
}

// Update project
export async function updateProject(id: string, project: Partial<ProjectInput>) {
  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Project;
}

// Delete project
export async function deleteProject(id: string) {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw error;
}

// Get project stats
export async function getProjectStats() {
  const { data, error } = await supabase
    .from("projects")
    .select("featured", { count: "exact" });

  if (error) throw error;

  const total = data?.length || 0;
  const featured = data?.filter((p) => p.featured).length || 0;

  return { total, featured };
}

