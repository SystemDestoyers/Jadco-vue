# Changelog

## [July 2025]

### Added
- Implemented conditional loading of services.js and services.css:
  - Added route-based asset loading in App.vue
  - Services assets now load on all pages except the home page
  - Created automatic initialization for services.js with DOMContentLoaded event triggering
  - Added detection of current route with Vue Router to control asset loading
  - Improved page performance by only loading services assets when needed

- Implemented hybrid routing approach for better performance:
  - Home page now uses Laravel Blade template for faster initial load
  - Other routes (about, services, etc.) use Vue.js SPA for smooth navigation
  - Modified router configuration to handle this mixed approach
  - Updated navbar links to use appropriate navigation methods for each route type
  - Preserved seamless user experience despite the hybrid architecture

### Fixed
- Fixed services assets loading on home page issue:
  - Enhanced route detection with immediate checking at component mount time
  - Added cleanup mechanism to remove services assets when navigating to home page
  - Improved route change detection with console logging for debugging
  - Fixed edge case where services assets would load on initial page load

- Fixed services visibility issues when navigating between pages:
  - Added short delay before initializing services.js to ensure DOM is fully rendered
  - Implemented automatic cleanup of hidden elements when navigating back to home page
  - Added restoration of element visibility by resetting opacity, transform, visibility and display styles
  - Ensured both DOMContentLoaded and jQuery document ready events are triggered for proper initialization
  - Fixed services-menu visibility issue when navigating from Home to service pages

- Fixed educational services section initialization in Home.vue:
  - Moved educational services initialization code from static.js to Home.vue component
  - Added proper initialization in the component's mounted hook
  - Ensured initialization happens after Vue has rendered the component using $nextTick
  - Replaced jQuery-based code with native JavaScript for better Vue integration
  - Fixed issue where educational services weren't initializing correctly on page refresh

- Fixed routing issues with missing components:
  - Removed references to non-existent StemEducation.vue and K12InternationalSchools.vue components
  - Removed corresponding routes for STEM Education and K-12 International Schools pages
  - Resolved Vite import analysis errors during build process
  - Streamlined route configuration to include only available components

### Enhanced
- Updated service page components with comprehensive structure:
  - Migrated complete HTML structure from Blade templates to Vue components
  - Added proper section styling and layout matching the original design
  - Implemented service hero sections with correct image placement
  - Created detailed service features lists with proper formatting
  - Added call-to-action sections with router links for navigation
  - Ensured consistent styling across all service pages
  - Replaced asset URL helpers with direct paths for Vue compatibility
  
- Optimized dependencies:
  - Removed unused smooth-scrollbar dependency
  - Reduced bundle size by eliminating unnecessary packages
  - Leveraged native browser scrolling APIs and jQuery for smooth scrolling functionality
  - Simplified dependency tree for easier maintenance

### Added
- Converted frontend to Vue.js Single Page Application (SPA):
  - Created Vue components from Blade templates
  - Implemented Vue Router for client-side routing
  - Maintained the same CSS structure and design
  - Retained all existing JavaScript functionality
  - Added proper API endpoint for contact form submission
  - Ensured feature parity with the Blade implementation

### Enhanced
- Improved user experience with client-side navigation:
  - Eliminated full page reloads between pages
  - Added smooth transitions between routes
  - Maintained scroll position when navigating back
  - Improved perceived performance with instant page changes
- Updated project dependencies:
  - Vue.js 3.5
  - Vue Router 4.5
  - Laravel Vite with Vue plugin
- Improved development workflow:
  - Use `npm run dev` for development with automatic file watching
  - Use `npm run build` for production builds
  - Updated package.json with simplified scripts

## [June 2025]

### Added
- Implemented branded flash effect for "Let's Talk" button:
  - Created full-screen white overlay with fade transitions (450ms fade-in, 450ms delay, 300ms fade-out)
  - Added centered JADCO logo (15rem width, 50% opacity) during transition
  - Implemented "SCROLLING..." text with animated dots that cycle every 300ms
  - Used brand colors (#e0285a) for the loading text animation

### Enhanced
- Improved code organization by moving flash effect from inline script to static.js
- Added comprehensive documentation with step-by-step comments
- Optimized performance with proper cleanup of animations and DOM elements
- Modified transition to prevent URL hash changes for cleaner navigation experience
- Used non-breaking spaces in the dots animation to prevent text shifting
- Replaced plus icons with arrow icons in service toggles for consistent UI design
- Standardized icon behavior with 45-degree rotation effect across the website
- Improved service toggle interaction by replacing arrows with X mark icons when services are open/active
- Fixed icon state initialization ensuring X mark appears for initially active service items
- Enhanced service item interactivity with hover effects that change service names and toggle icons to primary color and display pointer cursor for better affordance
- Made service names clickable to toggle service descriptions, creating a larger interactive area for users

### Fixed
- Prevented jarring scroll jumps when navigating to contact section
- Ensured mobile compatibility with responsive design principles
- Improved memory management with proper clearing of intervals
- Created cleaner user experience by maintaining URL without hash changes
- Removed duplicate `.about-image-main` CSS rules to prevent style conflicts
- Changed initial opacity of about image from 0 to 1 to prevent flash during transitions
- Improved code organization in CSS by eliminating redundant styles
- Fixed about image section flashing issue with multi-layered solution:
  - Added fix-about-flash.js to force the image to maintain full opacity
  - Implemented MutationObserver to prevent JavaScript from manipulating image opacity
  - Disabled all animations and transitions on the about image element
  - Made image always visible regardless of scroll position

## [March 2025]

### Added
- Converted static HTML/CSS Jadco website to Laravel Blade templates
- Implemented proper MVC architecture for the website
- Created modular Blade components and partials for better code organization:
  - Main layout template with common elements
  - Header partial with carousel
  - Navigation partial with proper routes
  - Footer partial with dynamic year
  - Contact form partial with CSRF protection
- Created dedicated service pages with detailed content:
  - Education and Scholarship
  - Training and Professional Development
  - AI and Advanced Technologies
  - E-Gaming and Esport
  - Arts and Entertainment
- Implemented asset management using Laravel's asset helper for images, CSS, and JS
- Added proper form handling with validation for contact forms
- Set up route structure for all pages
- Organized images and fonts into the public directory

### Enhanced
- Improved contact form with proper validation and CSRF protection
- Enhanced navigation with active state detection
- Simplified JavaScript by leveraging Blade's templating capabilities
- Improved code organization with proper directory structure
- Enhanced maintainability through component-based architecture

### Fixed
- Fixed image path references to use Laravel's asset helper
- Improved mobile responsiveness across all templates
- Added proper form handling for contact submissions
- Ensured consistent styling across all pages

## [May 2025]

### Enhanced
- Improved educational services section with better visual hierarchy and spacing:
  - Repositioned service names to begin from 25% of the width for better alignment
  - Increased service numbers to 5rem with a lighter font weight and blue color (#63809a)
  - Increased service name font size to 2.2rem for better readability
  - Increased service description font size to 1.8rem with 40% text indentation and added top padding
  - Made "Learn More" links only visible when a service item is active
  - Styled "Learn More" links with 1.4rem font size, lighter weight, and proper margins
  - Added right-arrow icon to "Learn More" links with hover animation
  - Styled arrows to point top-right (-45 degrees) with increased left padding
  - Added bottom border to "Learn More" links for better visual definition
  - Aligned service toggle icons with service names for better visual consistency
  - Increased toggle icon size to 4rem for better visibility and interaction
  - Removed redundant styling for service numbers in services section
- Redesigned footer for better visual appeal:
  - Aligned footer content with the main content area (col-9 offset)
  - Added circular border around social media icons only
  - Added text labels next to social media icons (YouTube, LinkedIn)
  - Increased font size of social links to 1.4rem
  - Added hover effects that change icon background to primary color
  - Increased copyright text size to 1.2rem with lighter font weight
  - Aligned copyright text to the right for better balance
  - Removed developer credit section

### Updated
- Updated service descriptions:
  - Added new AI service description highlighting AI as a transformative technology
  - Updated E-Gaming and Esports description to mention JADCO's international partnerships and U.S. affiliations
  - Updated Arts and Entertainment description to focus on global arts and Arabian culture
- Removed the fifth service (Innovation Solutions) and updated JavaScript to handle 4 services

### Fixed
- Resolved issue with carousel images not properly fitting height:
  - Added fixed height and min-height to header carousel container and items
  - Improved image scaling with proper object-fit and object-position properties
  - Fixed responsive behavior across different screen sizes (500px on desktop, 400px on mobile)
  - Enhanced image centering to ensure proper display of images regardless of size
  - Added consistent styling for service images with min-height and background color
  - Improved image scaling in service section for small images
- Removed `.active-service` class from service list items:
  - Simplified service item hover behavior with direct hover styles
  - Added rotation animation for icons on hover instead of active state
  - Improved code clarity by eliminating redundant active state tracking
  - Enhanced responsiveness by removing unnecessary class manipulations in JavaScript
- Fixed "Let's Talk" button text case:
  - Added explicit `text-transform: none !important` to preserve original text case
  - Ensured button displays text in mixed case as designed
  - Overrode Bootstrap default text transformations
- Fixed page vibration during header animations:
  - Added `width: 100%` to body to prevent expansion beyond viewport
  - Set `overflow-x: hidden` on html and body elements
  - Added `scrollbar-gutter: stable` to prevent scrollbar jumps
  - Used `will-change: transform, opacity` for better animation performance
  - Added `overflow-y: scroll !important` to always show scrollbar
  - Ensured initial transform state matches animation start state

### Enhanced
- Added smooth navbar animation:
  - Created fadeInFromTop animation that moves navbar from 100px above its position
  - Applied 1-second ease-out animation for natural movement
  - Improved first impression with subtle entrance effect
  - Preserved visibility of other elements during animation
- Updated the left column animation in the header:
  - Changed from a dramatic `backInLeft` effect to a more subtle `fadeInLeft` animation
  - Reduced movement distance from 1000px to 200px for a smoother entrance
  - Maintained the fade-in effect while creating a more subtle motion
  - Preserved existing animation timing and delay for consistency
- Improved CSS organization:
  - Created dedicated responsive.css file for all media queries
  - Organized media queries by screen size (smallest to largest)
  - Added clear section comments to improve code readability
  - Grouped related styles within each breakpoint
  - Created main.css file for importing all CSS modules
  - Removed all media queries from style.css for cleaner code
  - Updated HTML to include the new optimized CSS structure
- Implemented optimized modular CSS architecture with performance improvements and better organization
- Created separate CSS files for each website section (variables, layout, header, about, services, etc.)
- Improved responsive design with consistent breakpoints across all components
- Reduced file size by eliminating redundant styles and consolidating repeated patterns
- Enhanced maintainability through better organization and clear section separation
- Improved load time by structuring CSS with a logical import order 