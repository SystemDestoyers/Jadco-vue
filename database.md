# Database Schema

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

## Relationships

- `media.uploaded_by` → `users.id`
- `services.image_id` → `media.id`
- `pages.content` (JSON) may reference `media.id` and `services.id` for dynamic content.