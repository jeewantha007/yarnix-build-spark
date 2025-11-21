# Admin Dashboard Setup Guide

Complete guide to set up and use the Yarnix Labs admin dashboard.

---

## 📋 Table of Contents

1. [Database Setup](#database-setup)
2. [Create Admin User](#create-admin-user)
3. [Environment Variables](#environment-variables)
4. [Access Admin Dashboard](#access-admin-dashboard)
5. [Features Overview](#features-overview)
6. [Usage Guide](#usage-guide)

---

## 🗄️ Database Setup

### Step 1: Open Supabase SQL Editor

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run Migration

1. Open the file: `supabase/migrations/001_initial_schema.sql`
2. Copy **ALL the SQL code** (approximately 200+ lines)
3. Paste it into the SQL Editor
4. Click **Run** (or press `Ctrl+Enter`)

You should see: ✅ **"Success. No rows returned"**

### What This Creates:

- ✅ `blogs` table - Store all blog posts
- ✅ `projects` table - Store all portfolio projects
- ✅ Row Level Security (RLS) policies
- ✅ Auto-update triggers for timestamps
- ✅ Sample data (1 blog, 1 project)

---

## 👤 Create Admin User

### Option 1: Via Supabase Dashboard (Recommended)

1. In Supabase Dashboard, go to **Authentication** → **Users**
2. Click **Add User** button
3. Fill in:
   - **Email**: your-email@example.com
   - **Password**: your-secure-password
   - Check **Auto Confirm User**
4. Click **Create User**

### Option 2: Via Supabase Auth UI (Advanced)

If you implement signup functionality later, any authenticated user can access the admin.

---

## 🔐 Environment Variables

Make sure your `.env` file has these Supabase credentials:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
```

### Where to Find These:

1. Go to Supabase Dashboard
2. Click **Settings** → **API**
3. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public** key → `VITE_SUPABASE_PUBLISHABLE_KEY`

---

## 🚀 Access Admin Dashboard

### Step 1: Start Development Server

```bash
npm run dev
```

Server will start at: `http://localhost:8080`

### Step 2: Navigate to Admin Login

Open your browser and go to:

```
http://localhost:8080/admin/login
```

### Step 3: Sign In

Enter the email and password you created in Supabase.

### Step 4: Success! 🎉

You should now see the admin dashboard.

---

## ✨ Features Overview

### Dashboard (`/admin`)
- View statistics: Total blogs, published/draft counts, projects
- Quick action buttons to create content
- Getting started guide

### Blogs Management (`/admin/blogs`)
- **List View**: See all blogs with status (Published/Draft)
- **Create**: Add new blog posts
- **Edit**: Update existing blogs
- **Delete**: Remove blogs (with confirmation)
- **Features**:
  - Title, slug, excerpt, full content
  - Category, author, featured image
  - Tags (comma-separated)
  - Published toggle
  - Read time estimate

### Projects Management (`/admin/projects`)
- **List View**: See all projects with featured status
- **Create**: Add new portfolio projects
- **Edit**: Update project details
- **Delete**: Remove projects (with confirmation)
- **Features**:
  - Title, slug, tagline, description
  - Category, image URL
  - Technologies (comma-separated)
  - Demo and GitHub URLs
  - Featured toggle (shows on homepage)

---

## 📖 Usage Guide

### Creating a Blog Post

1. Go to **Blogs** → Click **Create Blog**
2. Fill in required fields (marked with `*`):
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (URL-friendly)
   - **Content**: Main blog content (supports plain text/markdown)
3. Optional fields:
   - **Excerpt**: Short description
   - **Category**: AI, Development, Business, etc.
   - **Author**: Author name
   - **Image**: Featured image URL
   - **Tags**: Comma-separated (e.g., `AI, Tutorial, JavaScript`)
   - **Read Time**: e.g., "5 min read"
4. Toggle **Publish** to make it live on the website
5. Click **Create Blog**

### Creating a Project

1. Go to **Projects** → Click **Create Project**
2. Fill in required fields:
   - **Title**: Project name
   - **Slug**: Auto-generated (URL-friendly)
   - **Description**: Detailed project description
   - **Technologies**: Comma-separated (e.g., `React, Node.js, PostgreSQL`)
3. Optional fields:
   - **Tagline**: Brief one-liner
   - **Category**: AI Tools, Web Apps, Mobile Apps, etc.
   - **Image**: Project screenshot/image URL
   - **Demo URL**: Live demo link
   - **GitHub URL**: Repository link
4. Toggle **Featured** to show on homepage
5. Click **Create Project**

### Editing Content

1. In list view, click the **pencil icon** (✏️) next to any item
2. Make your changes
3. Click **Update Blog/Project**

### Deleting Content

1. In list view, click the **trash icon** (🗑️) next to any item
2. Confirm deletion in the dialog
3. Content is permanently deleted

---

## 🎨 Design Notes

The admin dashboard uses the same design system as your main website:
- **Primary Color**: Emerald Green (#10B981)
- **Components**: shadcn/ui
- **Responsive**: Works on desktop, tablet, and mobile
- **Dark Mode**: Automatically inherits from system preference

---

## 🔒 Security

### Row Level Security (RLS)

- **Public Users**: Can view published blogs and all projects
- **Authenticated Users**: Can create, read, update, and delete all content
- **Simple Approach**: Any authenticated user is an admin (suitable for small teams)

### Authentication

- Uses Supabase Auth
- Session persists in localStorage
- Auto-refreshes tokens
- Secure password hashing by Supabase

---

## 📊 Database Schema

### Blogs Table

```sql
- id (UUID, Primary Key)
- title (TEXT, Required)
- slug (TEXT, Unique, Required)
- excerpt (TEXT, Optional)
- content (TEXT, Required)
- category (TEXT, Default: 'General')
- author (TEXT, Required)
- image (TEXT, Optional)
- tags (TEXT[], Array)
- published (BOOLEAN, Default: false)
- read_time (TEXT, Optional)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP, Auto-updated)
```

### Projects Table

```sql
- id (UUID, Primary Key)
- title (TEXT, Required)
- slug (TEXT, Unique, Required)
- tagline (TEXT, Optional)
- description (TEXT, Required)
- category (TEXT, Default: 'Web Apps')
- image (TEXT, Optional)
- technologies (TEXT[], Array)
- demo_url (TEXT, Optional)
- github_url (TEXT, Optional)
- featured (BOOLEAN, Default: false)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP, Auto-updated)
```

---

## 🐛 Troubleshooting

### Can't Login

- ✅ Check email/password are correct
- ✅ Verify user exists in Supabase → Authentication → Users
- ✅ Check environment variables are set correctly
- ✅ Try clearing browser cache/localStorage

### Database Errors

- ✅ Ensure migration was run successfully
- ✅ Check Supabase → Table Editor to verify tables exist
- ✅ Verify RLS policies are enabled

### "Permission Denied" Errors

- ✅ Make sure you're logged in
- ✅ Check RLS policies in Supabase
- ✅ Verify you're using the correct Supabase keys

### Content Not Showing on Website

- **Blogs**: Make sure `published` is toggled ON
- **Projects**: Check if public pages are querying the database
- Clear browser cache and refresh

---

## 🚀 Next Steps

1. **Connect Public Pages**: Update your public blog/project pages to fetch from Supabase
2. **Add Rich Text Editor**: Integrate TipTap or Quill for better content editing
3. **Image Upload**: Implement Supabase Storage for image uploads
4. **Categories Management**: Add a separate table for managing categories
5. **User Roles**: Add admin/editor roles if you need multiple user types

---

## 📞 Support

For questions or issues:
- Check Supabase documentation: https://supabase.com/docs
- Review React Query docs: https://tanstack.com/query/latest

---

**Happy Content Managing! 🎉**

