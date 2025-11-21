import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProjectById,
  createProject,
  updateProject,
  ProjectInput,
} from "@/lib/supabase/queries/projects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEdit = !!id;

  const [formData, setFormData] = useState<ProjectInput>({
    title: "",
    slug: "",
    tagline: "",
    description: "",
    category: "Web Apps",
    image: "",
    technologies: [],
    demo_url: "",
    github_url: "",
    featured: false,
  });

  const [techInput, setTechInput] = useState("");

  // Fetch project if editing
  const { data: project, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectById(id!),
    enabled: isEdit,
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        slug: project.slug,
        tagline: project.tagline || "",
        description: project.description,
        category: project.category,
        image: project.image || "",
        technologies: project.technologies,
        demo_url: project.demo_url || "",
        github_url: project.github_url || "",
        featured: project.featured,
      });
      setTechInput(project.technologies.join(", "));
    }
  }, [project]);

  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project-stats"] });
      toast.success("Project created successfully");
      navigate("/admin/projects");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create project");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<ProjectInput>) => updateProject(id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", id] });
      queryClient.invalidateQueries({ queryKey: ["project-stats"] });
      toast.success("Project updated successfully");
      navigate("/admin/projects");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update project");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const technologies = techInput
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech);

    const data = { ...formData, technologies };

    if (isEdit) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({ ...formData, title });
    if (!isEdit || !formData.slug) {
      setFormData({ ...formData, title, slug: generateSlug(title) });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/admin/projects")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEdit ? "Edit Project" : "Create New Project"}
          </h1>
          <p className="text-muted-foreground">
            {isEdit ? "Update project details" : "Add a new portfolio project"}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                placeholder="Enter project title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                required
                placeholder="project-url"
              />
              <p className="text-xs text-muted-foreground">
                URL-friendly version of the title
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) =>
                  setFormData({ ...formData, tagline: e.target.value })
                }
                placeholder="Brief one-liner about the project"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                placeholder="Detailed description of the project"
                rows={6}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
                placeholder="AI Tools, Web Apps, Mobile Apps, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Project Image URL</Label>
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                placeholder="https://example.com/project-image.jpg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies *</Label>
              <Input
                id="technologies"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="React, Node.js, PostgreSQL (comma-separated)"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo_url">Demo URL</Label>
                <Input
                  id="demo_url"
                  type="url"
                  value={formData.demo_url}
                  onChange={(e) =>
                    setFormData({ ...formData, demo_url: e.target.value })
                  }
                  placeholder="https://demo.example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="github_url">GitHub URL</Label>
                <Input
                  id="github_url"
                  type="url"
                  value={formData.github_url}
                  onChange={(e) =>
                    setFormData({ ...formData, github_url: e.target.value })
                  }
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, featured: checked })
                }
              />
              <Label htmlFor="featured" className="cursor-pointer">
                Feature this project on homepage
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={createMutation.isPending || updateMutation.isPending}
          >
            <Save className="mr-2 h-4 w-4" />
            {isEdit ? "Update Project" : "Create Project"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/admin/projects")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;

