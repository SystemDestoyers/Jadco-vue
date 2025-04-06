
── resources/
    ├── views/                  # Blade templates
    │   ├── layouts/           # Base layout templates
    │   │   └── app.blade.php  # Main layout with Navbar, Header, Contact, Footer
    │   ├── pages/             # Page-specific templates
    │   │   ├── home.blade.php # Homepage with all sections
    │   │   ├── about.blade.php # About page
    │   │   └── services/      # Services-related templates
    │   │       ├── index.blade.php # Services listing page
    │   │       └── show.blade.php  # Individual service page
    │   ├── partials/          # Reusable snippets
    │   │   ├── navbar.blade.php
    │   │   ├── header.blade.php
    │   │   ├── contact.blade.php
    │   │   └── footer.blade.php
    │   └── components/        # Reusable Blade components
    │       ├── service-card.blade.php
    │       └── educational-part.blade.php
    └── css/                   # Source CSS files (if not using a framework)
        └── app.css