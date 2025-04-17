# Backend-PRD.md: Jadco CMS Backend and Admin Dashboard (Laravel + Blade)

## 1. Context

### Background

The current `Jadco` project has a static frontend design that was originally intended to serve as the public-facing homepage. This Product Requirements Document (PRD) now pivots the focus to designing and implementing the **backend and the admin dashboard**, where the entire frontend of the application refers to the **admin dashboard UI** itself.

All content for the public-facing site will now be managed entirely through this dashboard, and dynamic rendering of the homepage, about, and services pages will be handled through APIs and CMS logic.

### Objective

- Build a Laravel CMS dashboard using **Blade templates only** (no Vue.js).
- Replace the previous Vue.js-based frontend with an **admin interface** rendered by Blade.
- The admin dashboard is the sole frontend of this application.
- Provide full CMS capabilities (CRUD for pages, services, media, users).
- Use Laravel seeders to populate the database by **copying texts and elements from the existing public website frontend**.
- Apply the **Service-Repository Pattern** across the backend logic to ensure scalable, testable, and maintainable code.

### Stakeholders

- **Admin Users**: Use the CMS to update website content and manage users.
- **Developers**: Responsible for backend logic and Blade dashboard views.
- **Designers**: Ensure the CMS dashboard UI is clean, intuitive, and aligned with admin user needs.

## 2. Goals

- Deliver a fully functional CMS dashboard for content and user management using Blade.
- Move all frontend effort into the admin interface built with Blade.
- Remove the public-facing design as part of this requirement.
- Build scalable APIs for dynamic content rendering.
- Use seeders to autofill tables using actual frontend content from the public website.
- Structure all business logic using the **Service-Repository Pattern**.
- Ensure all relationships between models are created and functional (e.g., pages and sections can have many images, images can belong to multiple pages and sections).

## 3. Scope

### In Scope

- **Backend**:
  - Laravel-based CMS and API.
  - Full database schema and CRUD for pages, services, media, and users.
  - Role-based access control.
  - Seeders that extract real content (text, sections, and media) from the public website.
  - **Service-Repository Pattern implementation** across all modules.
- **Admin Frontend**:
  - Blade-based admin dashboard located in `resources/views/admin/`.
  - Dashboard views for content management, media upload, user role management.

### Out of Scope

- Public website rendering.
- Any layout implementation of Header/Contact/Footer on public-facing pages.
- Vue.js components or SPA functionality.

## 4. Features

### Admin Dashboard (Blade in `resources/views/admin/`)

1. **Dashboard Home**
   - Admin summary widgets: Total services, media, pages, users.

2. **Page Management**
   - View/edit JSON or structured content of `homepage`, `about`, etc.
   - Add sections, reorder, attach media.

3. **Service Management**
   - Add/update/delete services.
   - Attach media, edit text fields.

4. **Media Management**
   - Upload images/videos/files.
   - View/delete existing files.
   - Preview media and tag for use in content sections.
   - Seeder should scan and load files from `public/images` on the server.

5. **User Management**
   - CRUD for users.
   - Assign roles: `admin`, `editor`, `viewer`.
   - Create default admin user:
     - **Email**: admin@example.com
     - **Password**: 111

6. **Settings**
   - Configure site-wide values like contact info or logo.

### API Endpoints (Laravel)

- `GET /api/pages/{slug}` – Get page data by slug (`home`, `about`).
- `GET /api/services` – List all services.
- `GET /api/services/{id}` – Single service by ID.
- `POST /api/media` – Upload file.
- `GET /api/media` – List media.
- `DELETE /api/media/{id}` – Delete file.

### User Roles

- **Admin**: Full permissions.
- **Editor**: Can edit content/media.
- **Viewer**: Read-only access.

## 5. Technical Requirements

### Backend

- **Framework**: Laravel (latest stable version).
- **API Auth**: Laravel Sanctum.
- **Database**: MySQL or PostgreSQL.
- **Storage**: Laravel Filesystem, stored in `storage/app/public/media`.
- **Seeders**: Content will be scraped or copied from the existing frontend for accurate replication of site structure.
- **Architecture**: Service-Repository Pattern enforced for all modules (Pages, Services, Media, Users).
- **Seeder Details**:
  - AdminSeeder: Creates `admin@example.com` user with password `111`.
  - RoleSeeder: Seeds `admin`, `editor`, `viewer` roles.
  - PageSeeder: Pulls all existing page content and sections from frontend.
  - ServiceSeeder: Extracts service cards/texts from frontend.
  - MediaSeeder: Loads all images in `public/images/`, links to pages/sections as appropriate.

**Model Relationships**:

- A **Section** has many **Images**.
- A **Page** has many **Sections** and many **Images**.
- An **Image** can belong to many **Pages** and **Sections** (many-to-many).

**Folder Structure**:

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Admin/
│   │   │   │   ├── DashboardController.php
│   │   │   │   ├── PageController.php
│   │   │   │   ├── ServiceController.php
│   │   │   │   ├── MediaController.php
│   │   │   │   └── UserController.php
│   │   ├── Requests/
│   │   │   ├── PageRequest.php
│   │   │   ├── ServiceRequest.php
│   │   │   ├── MediaRequest.php
│   │   │   └── UserRequest.php
│   ├── Models/
│   │   ├── User.php
│   │   ├── Media.php
│   │   ├── Page.php
│   │   ├── Section.php
│   │   └── Service.php
│   ├── Services/
│   │   ├── PageService.php
│   │   ├── SectionService.php
│   │   ├── ServiceService.php
│   │   ├── MediaService.php
│   │   └── UserService.php
│   └── Repositories/
│       ├── PageRepository.php
│       ├── SectionRepository.php
│       ├── ServiceRepository.php
│       ├── MediaRepository.php
│       └── UserRepository.php
├── routes/
│   ├── api.php
│   └── web.php
├── database/
│   ├── migrations/
│   ├── seeders/
│   │   ├── RoleSeeder.php
│   │   ├── AdminSeeder.php
│   │   ├── PageSeeder.php
│   │   ├── SectionSeeder.php
│   │   ├── ServiceSeeder.php
│   │   └── MediaSeeder.php
└── resources/
    └── views/admin/  # Blade dashboard views
```

## 6. Database Schema

### users
- id, name, email, password, role, timestamps

### roles
- id, name

### pages
- id, slug ("home", "about"), title, content, timestamps

### sections
- id, page_id (FK), title, content, order, timestamps

### services
- id, title, description, image_id (FK), timestamps

### media
- id, file_name, file_path, file_type, uploaded_by (FK), timestamps

### image_page (pivot)
- image_id, page_id

### image_section (pivot)
- image_id, section_id

## 7. Implementation Plan

### Phase 1: Project Setup
- Initialize Laravel backend
- Configure Blade-based dashboard structure
- Tailwind and layout scaffolding

### Phase 2: API & Backend Models
- Models, migrations, seeders
- CRUD for services, media, pages
- Sanctum auth and roles
- Build seeders that parse or extract real frontend content
- Apply Service and Repository classes

### Phase 3: Dashboard Development (Blade)
- Dashboard views (widgets, tables, forms)
- Route protection and role-based access

### Phase 4: Testing & Deployment
- Role-based access testing
- Responsive UI testing
- Deployment to server (e.g., Forge, shared hosting)

## 8. Success Criteria
- Blade CMS dashboard is the only frontend in production
- Admins can manage all website content
- Pages are stored in DB as structured content blocks or HTML
- Role-based access enforced on backend and dashboard
- Database tables pre-filled using content copied from live site
- Codebase structured using Service-Repository pattern
- Seeders include media imports and correct relational links

## 9. Risks & Mitigations

- **Risk**: CMS complexity delays timeline
  - **Mitigation**: Start with homepage/services, then iterate
- **Risk**: Media management performance
  - **Mitigation**: Use pagination, lazy load previews, and caching
- **Risk**: Difficulty in parsing live site HTML
  - **Mitigation**: Manual or semi-automated scraping, preprocessing HTML as seed data