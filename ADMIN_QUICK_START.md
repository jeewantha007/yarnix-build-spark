# 🚀 Admin Dashboard - Quick Start

Get your admin dashboard running in 5 minutes!

---

## ⚡ Quick Setup (3 Steps)

### 1️⃣ Run Database Migration

```bash
# Open Supabase SQL Editor
# Paste contents of: supabase/migrations/001_initial_schema.sql
# Click Run
```

### 2️⃣ Create Admin User

```bash
# In Supabase Dashboard:
# Authentication → Users → Add User
# Email: your-email@example.com
# Password: your-password
# ✓ Auto Confirm User
```

### 3️⃣ Login to Admin

```bash
# Start your app
npm run dev

# Visit: http://localhost:8080/admin/login
# Login with your credentials
```

---

## 📍 Admin Routes

| Route | Purpose |
|-------|---------|
| `/admin/login` | Login page (public) |
| `/admin` | Dashboard with stats |
| `/admin/blogs` | View all blogs |
| `/admin/blogs/new` | Create new blog |
| `/admin/blogs/edit/:id` | Edit blog |
| `/admin/projects` | View all projects |
| `/admin/projects/new` | Create new project |
| `/admin/projects/edit/:id` | Edit project |

---

## 📝 What Was Built

### ✅ Database Layer
- `blogs` table with full schema
- `projects` table with full schema
- Row Level Security (RLS) policies
- Auto-updating timestamps
- Sample data included

### ✅ Authentication
- Supabase Auth integration
- AuthContext with React hooks
- Protected routes
- Login/Logout functionality
- Session persistence

### ✅ Admin UI
- Modern dashboard with stats
- Blog management (CRUD)
- Project management (CRUD)
- Responsive sidebar layout
- Mobile-friendly design
- Same design system as main site

### ✅ Features
- Create/Edit/Delete blogs
- Create/Edit/Delete projects
- Publish/Unpublish blogs
- Feature/Unfeature projects
- Tag management
- Technology stack lists
- Form validation
- Success/Error notifications

---

## 🎯 Key Files Created

```
src/
├── contexts/
│   └── AuthContext.tsx              # Authentication provider
├── components/
│   └── admin/
│       ├── AdminLayout.tsx          # Sidebar + layout
│       └── ProtectedRoute.tsx       # Route guard
├── pages/
│   └── admin/
│       ├── Login.tsx                # Login page
│       ├── Dashboard.tsx            # Main dashboard
│       ├── BlogList.tsx             # Blog list view
│       ├── BlogForm.tsx             # Create/Edit blog
│       ├── ProjectList.tsx          # Project list view
│       └── ProjectForm.tsx          # Create/Edit project
├── lib/
│   └── supabase/
│       └── queries/
│           ├── blogs.ts             # Blog CRUD functions
│           └── projects.ts          # Project CRUD functions
├── integrations/
│   └── supabase/
│       └── types.ts                 # Updated database types
└── App.tsx                          # Updated with admin routes

supabase/
└── migrations/
    └── 001_initial_schema.sql       # Database schema
```

---

## 🔑 Environment Variables Needed

Create a `.env` file in project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

Get these from: **Supabase Dashboard → Settings → API**

---

## 💡 Usage Examples

### Create a Blog Post

1. Go to `/admin/blogs`
2. Click "Create Blog"
3. Fill in:
   - Title: "My First Blog Post"
   - Content: Your blog content
   - Category: "AI"
   - Author: "Your Name"
   - Toggle "Publish" ON
4. Click "Create Blog"

### Create a Project

1. Go to `/admin/projects`
2. Click "Create Project"
3. Fill in:
   - Title: "My Awesome Project"
   - Description: Project details
   - Technologies: "React, Node.js, PostgreSQL"
   - Toggle "Featured" ON (to show on homepage)
4. Click "Create Project"

---

## 🎨 Design Features

- ✅ Uses your Emerald Green theme (#10B981)
- ✅ shadcn/ui components (same as main site)
- ✅ Dark mode support
- ✅ Responsive (desktop, tablet, mobile)
- ✅ Smooth animations
- ✅ Professional admin UI

---

## 🔒 Security

- ✅ Authentication required for all admin pages
- ✅ Row Level Security enabled in Supabase
- ✅ Secure session management
- ✅ Public can only see published blogs
- ✅ Authenticated users can manage all content

---

## 📊 Database Schema Summary

### Blogs Table
```
- title, slug, excerpt, content
- category, author, image, tags
- published (boolean)
- read_time
- created_at, updated_at
```

### Projects Table
```
- title, slug, tagline, description
- category, image, technologies
- demo_url, github_url
- featured (boolean)
- created_at, updated_at
```

---

## 🐛 Common Issues & Fixes

### "Permission denied" error
→ Make sure you're logged in and migration was run

### "Table doesn't exist"
→ Run the database migration in Supabase SQL Editor

### Can't login
→ Verify user exists in Supabase → Authentication → Users

### Environment variables not loading
→ Restart dev server after adding `.env` file

---

## 🎉 You're All Set!

Your admin dashboard is ready to use. Start creating content and managing your Yarnix Labs website.

**For detailed documentation, see `ADMIN_SETUP_GUIDE.md`**

