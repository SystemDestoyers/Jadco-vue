Below is a detailed **Product Requirements Document (PRD)** for converting your existing frontend homepage design (located in the `Jadco` folder) into a Laravel + Vue.js application, including the creation of additional pages (About and individual Service pages) and a CMS dashboard in the backend to manage content and user roles. The document outlines the context, goals, scope, features, technical requirements, and implementation steps.

---

# PRD.md: Jadco Frontend & Backend Conversion to Laravel + Vue.js with CMS

## 1. Context

### Background
The current project involves a static frontend homepage design located in the `Jadco` folder. This design includes a consistent layout across all pages: a **Header Section**, **Contact Section**, and **Footer Section**. The goal is to convert this static design into a dynamic web application using **Laravel** (backend) and **Vue.js** (frontend), while maintaining the existing layout structure. Additionally, new pages (About and individual Service pages) will be created, and a backend CMS dashboard will be developed to manage all content (text, images, pages) and user roles.

### Objective
- Convert the static homepage design into a dynamic Laravel + Vue.js application.
- Extend the application by creating additional pages (About and Service pages) with the same layout.
- Build a CMS dashboard to allow administrators to manage frontend content and user permissions dynamically.

### Stakeholders
- **Frontend Developer**: Responsible for converting the design into Vue.js components and ensuring responsiveness.
- **Backend Developer**: Responsible for setting up Laravel, creating APIs, and building the CMS dashboard.
- **Designer**: Provides the existing `Jadco` design and ensures consistency across new pages.
- **Admin Users**: Use the CMS to update content and manage users.

## 2. Goals

- Deliver a dynamic web application with reusable components and a consistent layout.
- Enable content management via a CMS dashboard with full CRUD capabilities.
- Ensure scalability for future pages and services.
- Maintain performance and responsiveness across devices.

## 3. Scope

### In Scope
- **Frontend**:
  - Convert the `Jadco` homepage design into Laravel + Vue.js in the `frontend` folder.
  - Maintain the existing layout (Header, Contact, Footer) across all pages.
  - page.- Create dynamic **About** and **Service** pages (one per service, dynamically generated based on CMS data).
- **Backend**:
  - Set up a Laravel application in the `backend` folder.
  - Implement full CRUD operations for pages, services, media, and users.
  - Provide APIs for the frontend to fetch dynamic content.

### Out of Scope
- Redesigning the existing layout or structure of the Header, Contact, and Footer sections.
- Advanced user authentication features beyond role-based access (e.g., OAuth, SSO).
- Real-time features (e.g., live updates in the CMS).

## 4. Features

### Frontend (Laravel + Vue.js)
1. **Homepage**
   - Converted from the `Jadco` design.
   - Includes Header, Contact, and Footer sections.
   - Fetches dynamic content (text, images) from the backend CMS via API.
2. **About Page**
   - Same layout as the homepage (Header, Contact, Footer).
   - Unique content section for "About" details, editable via CMS.
3. **Service Pages**
   - One page per service, dynamically generated based on CMS data.
   - Same layout (Header, Contact, Footer).
   - Each page displays service-specific text and images, editable via CMS.
4. **Reusable Components**
   - Vue.js components for Header, Contact, and Footer, reusable across all pages.
   - Responsive design matching the original `Jadco` layout.

### Backend (Laravel CMS)
**CMS Dashboard**
   - **Page Management**:
     - Edit homepage sections (header, about, services, educational, contact, footer).
     - Edit about page content.
   - **Service Management**:
     - Create, read, update, and delete (CRUD) services (title, description, image).
   - **Media Management**:
     - Upload, view, and delete media files.
   - **User Management**:
     - CRUD for users with roles (e.g., "admin", "editor").
2. **APIs**
   - `GET /api/homepage`: Fetch homepage data.
   - `GET /api/about`: Fetch about page data.
   - `GET /api/services`: Fetch all services.
   - `GET /api/services/{id}`: Fetch a single service by ID.
   - `POST /api/media`: Upload a media file.
   - `GET /api/media`: List all media files.
   - `DELETE /api/media/{id}`: Delete a media file by ID.

### User Roles
- **Admin**: Full access to CMS (content, pages, users).
- **Editor**: Can edit content and upload images but cannot manage users or delete pages.
- **viewer**: Can view content and pages, can't edit anything.

## 5. Technical Requirements

### Frontend
- **Framework**: Vue.js (integrated with Laravel frontend).
- **Folder Structure**:
  ```
frontend/
  ├── resources/
  │   ├── js/
  │   │   ├── components/
  │   │   │   ├── layouts/
  │   │   │   │   ├── Navbar.vue    // Static or fetches services for links
  │   │   │   │   ├── Header.vue    // Displays title, services, carousel
  │   │   │   │   ├── Contact.vue   // Displays locations, address, phones, logo
  │   │   │   │   └── Footer.vue    // Displays text, icons, links
  │   │   │   ├── HomeContent.vue   // Renders about, services, educational sections
  │   │   │   ├── AboutContent.vue  // Renders about page content
  │   │   │   └── ServiceContent.vue // Renders single service page
  │   │   ├── App.vue
  │   │   └── app.js
  │   ├── views/
  │   │   ├── Home.blade.php
  │   │   ├── About.blade.php
  │   │   └── Service.blade.php
  │   └── css/
  │       └── app.css
  ```
- **Routing**: Laravel routing for page navigation, Vue Router for SPA-like behavior if needed.
- **API Integration**: Axios for fetching data from backend APIs.

### Backend
- **Framework**: Laravel (latest stable version as of March 29, 2025).
- **Folder Structure**:
  ```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Admin/                    # Controllers for CMS dashboard
│   │   │   │   ├── DashboardController.php
│   │   │   │   ├── PageController.php
│   │   │   │   ├── ServiceController.php
│   │   │   │   ├── MediaController.php
│   │   │   │   └── UserController.php
│   │   │   └── Api/                     # Controllers for API endpoints
│   │   │       ├── PageController.php
│   │   │       ├── ServiceController.php
│   │   │       └── MediaController.php
│   │   ├── Middleware/
│   │   │   └── RoleMiddleware.php       # Middleware for role-based access
│   │   └── Requests/                    # Form request validation
│   │       ├── PageRequest.php
│   │       ├── ServiceRequest.php
│   │       ├── MediaRequest.php
│   │       └── UserRequest.php
│   ├── Models/                          # Eloquent models
│   │   ├── User.php
│   │   ├── Media.php
│   │   ├── Page.php
│   │   └── Service.php
│   └── Providers/
│       └── AuthServiceProvider.php      # For policy and gate definitions
├── database/
│   ├── migrations/                      # Database migrations
│   │   ├── 2023_01_01_000000_create_users_table.php
│   │   ├── 2023_01_01_000001_create_media_table.php
│   │   ├── 2023_01_01_000002_create_pages_table.php
│   │   └── 2023_01_01_000003_create_services_table.php
│   └── seeders/                         # Database seeders
│       ├── DatabaseSeeder.php
│       ├── UserSeeder.php
│       ├── PageSeeder.php
│       ├── ServiceSeeder.php
│       └── MediaSeeder.php
├── resources/
│   └── views/
│       └── admin/                       # Blade templates for CMS dashboard
│           ├── dashboard.blade.php
│           ├── pages/
│           │   ├── index.blade.php
│           │   ├── create.blade.php
│           │   └── edit.blade.php
│           ├── services/
│           │   ├── index.blade.php
│           │   ├── create.blade.php
│           │   └── edit.blade.php
│           ├── media/
│           │   ├── index.blade.php
│           │   └── upload.blade.php
│           └── users/
│               ├── index.blade.php
│               ├── create.blade.php
│               └── edit.blade.php
├── routes/
│   ├── api.php                          # API routes
│   └── web.php                          # Web routes (CMS dashboard)
├── config/
│   └── filesystems.php                  # File storage configuration
└── storage/
    └── app/
        └── public/
            └── media/                   # Directory for uploaded media files
- **# Database Schema

## Tables

### users

- `id` (Primary Key, integer, auto-increment)
- `name` (string)
- `email` (string, unique)
- `password` (string, hashed)
- `role` (string, e.g., "admin", "editor")
- `created_at` (timestamp)
- `updated_at` (timestamp)

### media

- `id` (Primary Key, integer, auto-increment)
- `file_name` (string)
- `file_path` (string)
- `file_type` (string, e.g., "image", "video")
- `uploaded_by` (integer, Foreign Key to `users.id`)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### pages

- `id` (Primary Key, integer, auto-increment)
- `slug` (string, unique, e.g., "home", "about")
- `title` (string)
- `content` (JSON)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### services

- `id` (Primary Key, integer, auto-increment)
- `title` (string)
- `description` (text)
- `image_id` (integer, Foreign Key to `media.id`)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### roles 

- `id` (Primary Key, integer, auto-increment)


## Relationships

- `media.uploaded_by` → `users.id`
- `services.image_id` → `media.id`
- `pages.content` (JSON) may reference `media.id` and `services.id` for dynamic content.
- **Authentication**: Laravel Breeze or Jetstream for CMS login.
- **File Storage**: Laravel filesystem for image uploads (stored in `storage/app/public`).



### Dependencies
- Laravel: Backend framework.
- Vue.js: Frontend framework.
- Axios: HTTP client for API requests.
- Tailwind CSS (optional): For styling consistency with `Jadco` design.
- Laravel Sanctum: API authentication.

## 6. Implementation Plan

### Phase 1: Setup & Frontend Conversion
1. Set up Laravel project in `backend` folder.
2. Integrate Vue.js in `frontend/resources/js`.
3. Convert `Jadco` homepage design into Vue components (Header, Contact, Footer, HomeContent).
4. Create `Home.blade.php` view and render Vue components.
5. Style components to match `Jadco` design using CSS/Tailwind.

### Phase 2: Additional Pages
1. Create `About.blade.php` and `AboutContent.vue` for the About page.
2. Create `Service.blade.php` and `ServiceContent.vue` for dynamic Service pages.
3. Set up Laravel routing for `/about` and `/services/{id}`.
4. Test layout consistency across all pages.

### Phase 3: Backend CMS
1. Set up Laravel authentication (Breeze/Jetstream).
2. Create CMS dashboard views and controllers in `/admin`.
3. Build models and migrations for `pages`, `services`, and `users`.
4. Implement API endpoints for frontend data fetching.
5. Add content management features (text editing, image uploads).
6. Add user role management (Admin/Editor).

### Phase 4: Testing & Deployment
1. Test frontend responsiveness and CMS functionality.
2. Ensure API endpoints return correct data.
3. Deploy to a staging environment (e.g., Laravel Forge, Heroku).
4. Finalize production deployment.

## 7. Success Criteria
- Homepage, About, and Service pages are fully functional and match the `Jadco` design.
- CMS dashboard allows admins to update text, images, and manage pages/users.
- Role-based access works as expected (Admin vs. Editor).
- Application is responsive and performs well across devices.

## 8. database
## 8. Risks & Mitigations
- **Risk**: Design inconsistencies across pages.
  - **Mitigation**: Use reusable Vue components and test thoroughly.
- **Risk**: CMS complexity delays delivery.
  - **Mitigation**: Start with basic content management, then scale features.
- **Risk**: API performance issues.
  - **Mitigation**: Implement caching (e.g., Laravel Cache) for frequent requests.

---
## make all text in frontend is dynamic from database
so design the db to fetch all parts of the frontend
This PRD provides a comprehensive roadmap for converting your `Jadco` frontend into a Laravel + Vue.js application with a CMS backend. Let me know if you'd like further clarification or adjustments!