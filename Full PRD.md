# PRD.md: Jadco Frontend & Backend Conversion to Laravel + Filament PHP CMS

## 1. Context

### Background

The current project involves a static frontend homepage design located in the `Jadco` folder. This design includes a consistent layout across all pages: a **Header Section**, **Contact Section**, and **Footer Section**. The goal is to convert this static design into a dynamic web application using **Laravel** for both frontend and backend, while maintaining the existing layout structure. Additionally, new pages (About and individual Service pages) will be created, and a backend CMS dashboard will be developed using **Filament PHP** to manage all content (text, images, pages) and user roles.

**Note:** The main homepage is `home.blade.php` and is built using Blade. Other sub-pages like the service details are built using Vue.js files. These frontend components should **not be modified** — they are used only to understand the structure and expected output. All dynamic content handling must happen through the Laravel + Filament backend.

### Objective

- Convert the static homepage design into a dynamic Laravel application.
- Extend the application by creating additional pages (About and Service pages) with the same layout.
- Build a CMS dashboard using Filament PHP to allow administrators to manage frontend content and user permissions dynamically.
- Provide full content control via the CMS for all frontend text, images, colors, fonts, and styles.
- Use seeders to extract static text from the current frontend and populate the database.
- Ensure all Laravel controllers are created using the `--resource` flag.
- Seed all predefined user roles.
- Enable image selection from the media gallery for content and services.
- Ensure dashboard supports customization of theme colors, font styles, and typography.
- Ensure all models and controllers for pages, services, media, users, and design settings are created.

### Stakeholders

- **Frontend Developer**: Responsible for converting the design into Blade components and ensuring responsiveness.
- **Backend Developer**: Responsible for setting up Laravel and Filament, creating models and controllers, and building the CMS dashboard.
- **Designer**: Provides the existing `Jadco` design and ensures consistency across new pages.
- **Admin Users**: Use the CMS to update content and manage users.

## 2. Goals

- Deliver a dynamic web application with reusable components and a consistent layout.
- Enable content management via a Filament PHP CMS dashboard with full CRUD capabilities.
- Ensure scalability for future pages and services.
- Maintain performance and responsiveness across devices.
- Establish robust content seeding for faster onboarding and testing.
- Provide full design customization (fonts, colors, text styles) through the dashboard.

## 3. Scope

### In Scope

- **Frontend**:
  - Convert the `Jadco` homepage design into Laravel Blade components.
  - Maintain the existing layout (Header, Contact, Footer) across all pages.
  - Create dynamic **About** and **Service** pages (one per service, dynamically generated based on CMS data).
  - All page text, images, colors, and fonts are editable from the CMS.
  - Use existing Vue.js service page components as reference only (do not modify).

- **Backend**:
  - Set up a Laravel application.
  - Implement full CRUD operations for pages, services, media, and users via Filament PHP.
  - Provide APIs or direct database rendering for frontend content.
  - All controllers created with `php artisan make:controller --resource`.
  - Include database seeders for content, design styles, and roles.
  - Ensure all required models and controllers for backend services are created.

### Out of Scope

- Redesigning the existing layout or structure of the Header, Contact, and Footer sections.
- Advanced user authentication features beyond role-based access (e.g., OAuth, SSO).
- Real-time features (e.g., live updates in the CMS).

## 4. Features

### Frontend (Laravel Blade)

1. **Homepage**
   - Converted from the `Jadco` design.
   - Includes Header, Contact, and Footer sections.
   - Fetches dynamic content (text, images, fonts, colors) from the database.
2. **About Page**
   - Same layout as the homepage (Header, Contact, Footer).
   - Unique content section for "About" details, editable via CMS.
3. **Service Pages**
   - One page per service, dynamically generated based on CMS data.
   - Same layout (Header, Contact, Footer).
   - Each page displays service-specific text and images, editable via CMS.
4. **Reusable Components**
   - Laravel Blade includes for Header, Contact, and Footer, reusable across all pages.
   - Responsive design matching the original `Jadco` layout.
   - Font styles and color schemes managed via CMS settings.

### Backend (Filament PHP CMS)

**CMS Dashboard**

- **Page Management**:
  - Edit homepage sections (header, about, services, educational, contact, footer).
  - Edit about page content.
- **Service Management**:
  - Create, read, update, and delete (CRUD) services (title, description, image).
  - Select images directly from the media gallery.
- **Media Management**:
  - Upload, view, and delete media files.
  - Media gallery integration for all content editors.
- **User Management**:
  - CRUD for users with roles (e.g., "admin", "editor", "viewer").
- **Design Settings**:
  - Modify primary and secondary colors used throughout the site.
  - Set font family and font sizes for headings and body text.
  - Customize button styles and link appearance.

### User Roles

- **Admin**: Full access to CMS (content, pages, users, design settings).
- **Editor**: Can edit content, upload images, and update design styles but cannot manage users.
- **Viewer**: Can view content and pages, can't edit anything.

## 5. Technical Requirements

### Frontend

- **Framework**: Laravel Blade Templates
- **Folder Structure**:
  ```
  resources/
    ├── views/
    │   ├── layouts/
    │   │   ├── header.blade.php
    │   │   ├── contact.blade.php
    │   │   └── footer.blade.php
    │   ├── home.blade.php
    │   ├── about.blade.php
    │   └── services/
    │       └── show.blade.php
    └── css/
        └── app.css
  ```
- **Routing**: Laravel web routes
- **Data Binding**: Passed directly from controllers using Eloquent models
- **Vue.js Usage**: Some service-related pages use Vue.js for interactivity — these are read-only and not to be modified.

### Backend

- **Framework**: Laravel with Filament PHP (latest stable version)
- **Controllers**: All generated using `php artisan make:controller Name --resource`
- **Seeder Support**:
  - Seeder files to populate initial content (homepage text, about, services, roles, design styles, etc.).
  - Text content from the existing static frontend will be migrated into seeders.
- **Folder Structure**:
  ```
  app/
    ├── Filament/
    │   ├── Resources/
    │   │   ├── PageResource.php
    │   │   ├── ServiceResource.php
    │   │   ├── MediaResource.php
    │   │   ├── UserResource.php
    │   │   └── SettingsResource.php
    ├── Http/Controllers/
    │   ├── HomeController.php
    │   ├── AboutController.php
    │   └── ServiceController.php
    ├── Models/
    │   ├── User.php
    │   ├── Media.php
    │   ├── Page.php
    │   ├── Service.php
    │   └── Setting.php
  database/
    ├── migrations/
    └── seeders/
        ├── RoleSeeder.php
        ├── PageSeeder.php
        ├── ServiceSeeder.php
        ├── MediaSeeder.php
        └── SettingsSeeder.php
  ```

## 6. Implementation Plan

### Phase 1: Setup & Frontend Conversion

1. Set up Laravel project.
2. Convert `Jadco` homepage design into Blade templates.
3. Create reusable partials for Header, Contact, and Footer.
4. Style components to match `Jadco` design using CSS/Tailwind.

### Phase 2: Additional Pages

1. Create Blade views for About and Service pages.
2. Configure routes and resource controllers to load dynamic content.
3. Ensure layout consistency across all pages.

### Phase 3: Backend CMS

1. Install and configure Filament PHP.
2. Create resources for Pages, Services, Media, Users, and Design Settings.
3. Implement form fields to match content structure.
4. Add role-based access via Filament Panels.
5. Add media gallery picker for image fields.
6. Ensure all models and resource controllers are implemented and working.

### Phase 4: Seeders & Testing

1. Extract static content from design and place into seeders.
2. Seed default roles, settings, and sample users.
3. Test frontend responsiveness and CMS functionality.
4. Ensure dynamic content loads from the database.
5. Deploy to a staging environment.
6. Finalize production deployment.

## 7. Success Criteria

- Homepage, About, and Service pages are fully functional and match the `Jadco` design.
- CMS dashboard allows admins to update text, images, styles, and manage pages/users.
- Role-based access works as expected (Admin vs. Editor).
- Application is responsive and performs well across devices.
- All initial content appears via database seeding.
- Images are selectable from a media gallery in all relevant forms.
- Fonts, colors, and styles are customizable through CMS design settings.

## 8. Risks & Mitigations

- **Risk**: Design inconsistencies across pages.
  - **Mitigation**: Use reusable Blade components and test thoroughly.
- **Risk**: CMS complexity delays delivery.
  - **Mitigation**: Start with basic content management, then scale features.
- **Risk**: Performance issues with large media files.
  - **Mitigation**: Optimize image uploads and use Laravel’s storage system.
- **Risk**: Misalignment of design theme and style settings.
  - **Mitigation**: Include design settings module in CMS and test end-user customization experience.

## 9. Non-Functional Requirements

### Performance

- The application should load each frontend page within **2 seconds** on standard broadband connections.
- CMS interactions (e.g., saving a form or uploading media) must complete within **1 second** under normal server load.
- Use Laravel's caching mechanisms (e.g., route caching, config caching, query caching) where applicable.

### Security

- CSRF protection must be enabled for all form submissions.
- Authentication routes and user sessions must use Laravel’s built-in secure handling.
- File uploads should be validated for allowed MIME types and size limits.
- Only authorized roles may access specific sections of the CMS, enforced through Laravel policies and Filament Panels.

### Scalability

- The architecture must support the addition of future pages, services, or user roles without requiring core structural changes.
- The database schema should allow flexible content types and customizable settings using JSON or related flexible storage techniques.
- Media storage should be abstracted to support future use of cloud services (e.g., S3) via Laravel Filesystem drivers.

### Usability

- The CMS dashboard must be intuitive for non-technical users, with tooltips and labels provided for all fields.
- A preview mode should be considered (if time allows) for content editors to see changes before publishing.
- Consistent UI/UX should be maintained across all frontend and backend views.
- All forms and fields must have accessible labels, validation states, and error messages.

