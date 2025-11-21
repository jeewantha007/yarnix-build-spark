import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Briefcase, CheckCircle, Clock } from "lucide-react";
import { getBlogStats } from "@/lib/supabase/queries/blogs";
import { getProjectStats } from "@/lib/supabase/queries/projects";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { data: blogStats } = useQuery({
    queryKey: ["blog-stats"],
    queryFn: getBlogStats,
  });

  const { data: projectStats } = useQuery({
    queryKey: ["project-stats"],
    queryFn: getProjectStats,
  });

  const stats = [
    {
      title: "Total Blogs",
      value: blogStats?.total || 0,
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      link: "/admin/blogs",
    },
    {
      title: "Published Blogs",
      value: blogStats?.published || 0,
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Draft Blogs",
      value: blogStats?.draft || 0,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Total Projects",
      value: projectStats?.total || 0,
      icon: Briefcase,
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "/admin/projects",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the Yarnix Labs admin dashboard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Blogs Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Create, edit, and manage your blog posts. Control what content is
              published on your website.
            </p>
            <div className="flex gap-2">
              <Link to="/admin/blogs/new">
                <Button>Create New Blog</Button>
              </Link>
              <Link to="/admin/blogs">
                <Button variant="outline">View All Blogs</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Projects Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Showcase your work by adding and managing portfolio projects with
              details and technologies.
            </p>
            <div className="flex gap-2">
              <Link to="/admin/projects/new">
                <Button>Create New Project</Button>
              </Link>
              <Link to="/admin/projects">
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Cards */}
      <Card className="bg-accent/50">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Getting Started</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Create blog posts to share insights and updates</li>
              <li>Add projects to showcase your portfolio</li>
              <li>Mark blogs as published to make them visible on the website</li>
              <li>Feature projects to highlight them on the homepage</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

