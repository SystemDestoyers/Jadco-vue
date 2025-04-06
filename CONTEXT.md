# Context: Jadco Frontend & Backend Conversion to Laravel + Vue.js with CMS

## Background
The current project revolves around a static frontend homepage design located in the `Jadco` folder. This design adheres to a consistent layout across all pages, featuring a **Header Section**, **Contact Section**, and **Footer Section**. The objective is to convert this static design into a dynamic web application using **Laravel** for the backend and **Vue.js** for the frontend. Unlike the original static implementation, all content—text (e.g., headings, paragraphs) and images—will be dynamically retrieved from a database, enabling updates without code modifications. The project extends beyond the homepage to include an **About** page and individual **Service** pages, each following the same layout and powered by dynamic data. To support this, a backend **CMS dashboard** will be developed, allowing administrators to manage all frontend content, upload and organize media files, create and edit pages (e.g., Services), and assign user roles.

## Objective
The primary objectives of this project are:
- **Dynamic Conversion**: Transform the static `Jadco` homepage into a Laravel + Vue.js application where all text and images are fetched dynamically from a database.
- **Page Expansion**: Create additional pages (About and individual Service pages) that maintain the homepage’s layout and are fully dynamic, sourcing content from the database.
- **Content Management**: Build a CMS dashboard in the backend to enable administrators to control frontend content, manage media, create pages, and oversee user permissions without requiring direct code changes.

## Stakeholders
The project involves the following key stakeholders:
- **Frontend Developer**: Converts the `Jadco` design into reusable Vue.js components and integrates dynamic content fetching via backend APIs.
- **Backend Developer**: Sets up the Laravel backend, designs the database schema, builds APIs to serve content, and develops the CMS dashboard with role-based access.
- **Designer**: Provides the original `Jadco` design and ensures visual and structural consistency across new pages (About and Services).
- **Admin Users**: Utilize the CMS dashboard to update text, manage images, create service pages, and assign user roles.