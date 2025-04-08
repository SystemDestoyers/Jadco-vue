# Services Section - Full-Width Stacked Scroll Animation

## Implementation Overview

The Services Section features a sophisticated stacked scroll animation that presents each service in a visually engaging manner as users scroll down the page. This implementation creates a layered effect where services are initially stacked on top of each other, and as the user scrolls, each service transitions out of view with a full-width overlay to reveal the next service beneath it.

## Technical Implementation Details

### HTML Structure

The HTML structure consists of:
1. A main services section container with a tall height to accommodate scrolling (400vh)
2. A services-layer-container that spans the full viewport width (100vw) and manages the fixed positioning during scroll
3. Multiple service-stack-item elements, each representing a distinct service
4. Each service item contains a service-overlay div for the full-width darkening effect
5. Actual content is contained within a standard container inside service-item-wrapper

```html
<section id="services" class="services-section py-5 section">
    <div class="services-layer-container">
      <!-- Service 1 -->
      <div class="service-stack-item" data-service="1">
      <div class="service-overlay"></div>
        <div class="service-item-wrapper">
        <div class="container">
            <div class="row align-items-center full-screen md-h-auto">
              <div class="col-lg-6">
                <div class="service-image">
                <img src="images/service1.jpg" alt="Service 1" class="img-fluid">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="service-content">
                <div class="title">
                  <h2 class="section-title">SERVICES</h2>
                  <h3 class="service-number">01</h3>
                </div>
                <div class="main-content">
                  <h3 class="service-title">Service Title</h3>
                  <p class="service-description">
                    Service description text goes here...
                  </p>
                  <div class="service-buttons">
                    <a href="#" class="btn btn-service">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional service items (2, 3, 4) with identical structure -->
  </div>
</section>
```

### CSS Implementation

The CSS establishes the positioning system and visual properties for full-width overlay:

```css
/* Services Section Container */
.services-section {
  position: relative;
  background-color: var(--light-color);
  height: 400vh; /* Tall enough for scrolling through all services */
  overflow: visible; /* Allow scroll effect to work */
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

/* Services Layer Container - Full Viewport Width */
.services-layer-container {
  height: 100vh;
  width: 100vw; /* Full viewport width for overlay effect */
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  right: 0;
}

/* Fixed positioning when scrolling */
.services-layer-container.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  width: 100vw;
}

/* Service Stack Item - Full Width */
.service-stack-item {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  transition: height 0.3s ease-out;
  background-color: var(--light-color);
  top: 0;
  max-width: 100%;
  left: 0;
  right: 0;
  transform: none;
  z-index: 1;
  box-shadow: 0 0 0 500vw rgba(0, 0, 0, 0) inset; /* Optional for extra darkening */
}

/* Service Item Wrapper - Container for Content */
.service-item-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  transform-origin: top center;
  max-width: var(--container-max-width); /* Constrain content to standard container width */
  margin: 0 auto;
}

/* Service Overlay for Darkening Effect */
.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0;
  transition: opacity 0.3s ease-out;
  pointer-events: none;
  z-index: 0;
}

/* Service Content Styling */
.service-content {
  padding: 60px 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  position: relative;
}

/* Service Image Container */
.service-image {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image sizing */
.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### JavaScript Implementation

The JavaScript handles the complex interactions and scroll-based animations with full-width overlay:

```javascript
$(document).ready(function() {
    // Variables
    const servicesSection = document.querySelector('.services-section');
    const servicesContainer = document.querySelector('.services-layer-container');
    const serviceItems = document.querySelectorAll('.service-stack-item');
    
    if (!servicesSection || !servicesContainer || serviceItems.length === 0) return;
    
    // Calculate section heights
    const numServices = serviceItems.length;
    let viewportHeight = window.innerHeight;
    
    // Set initial stacking
    function setupServiceStacking() {
        serviceItems.forEach((item, index) => {
            // Set z-index in reverse order (higher for first item)
            item.style.zIndex = serviceItems.length - index;
            
            // Position all items at the top with full width
            item.style.top = '0';
            item.style.height = '100vh';
            item.style.width = '100%';
            
            // Remove any horizontal centering transform
            item.style.left = '0';
            item.style.right = '0';
            item.style.transform = 'none';
            
            // Add data attribute for easier targeting
            item.setAttribute('data-service-index', index);
            
            // Ensure consistent content positioning
            const serviceContent = item.querySelector('.service-content');
            if (serviceContent) {
                serviceContent.style.position = 'absolute';
                serviceContent.style.top = '50%';
                serviceContent.style.transform = 'translateY(-50%)';
            }
            
            // Set image container to full height
            const imageContainer = item.querySelector('.service-image');
            if (imageContainer) {
                imageContainer.style.height = '100vh';
            }
            
            // Set columns to full height
            const columns = item.querySelectorAll('.col-lg-6');
            columns.forEach(column => {
                column.style.height = '100%';
            });
            
            // Set row to full height
            const row = item.querySelector('.row');
            if (row) {
                row.style.height = '100%';
                row.style.display = 'flex';
                row.style.alignItems = 'stretch';
            }
        });
    }
    
    // Handle scroll effect
    function handleServiceScroll() {
        if (!servicesSection || !servicesContainer) return;
        
        const sectionTop = servicesSection.getBoundingClientRect().top;
        const windowScroll = window.scrollY;
        const sectionStart = window.scrollY + sectionTop;
        const sectionHeight = servicesSection.offsetHeight;
        const sectionEnd = sectionStart + sectionHeight;
        
        // Make container fixed when inside the section
        if (windowScroll >= sectionStart && windowScroll < (sectionEnd - viewportHeight)) {
            // Only apply these changes when first becoming fixed
            if (!servicesContainer.classList.contains('fixed')) {
                // Apply fixed positioning for full width
                servicesContainer.classList.add('fixed');
                servicesContainer.style.position = 'fixed';
                servicesContainer.style.top = '0';
                servicesContainer.style.left = '0';
                servicesContainer.style.right = '0';
                servicesContainer.style.width = '100vw';
                servicesContainer.style.margin = '0';
            }
            
            // Calculate progress through section (0 to 1)
            const scrollProgress = (windowScroll - sectionStart) / (sectionHeight - viewportHeight);
            const currentServiceIndex = Math.min(
                Math.floor(scrollProgress * (numServices - 1)), 
                numServices - 2
            );
            
            // Calculate progress within current service transition (0 to 1)
            const serviceTransitionSize = 1 / (numServices - 1);
            const serviceScrollProgress = (scrollProgress - (currentServiceIndex * serviceTransitionSize)) / serviceTransitionSize;
            
            // Apply effects to each service
            serviceItems.forEach((item, index) => {
                if (index < currentServiceIndex) {
                    // Services we've scrolled past - shrink to 0 height
                    item.style.height = '0vh';
                    
                    // Use overlay with high opacity
                    let overlay = item.querySelector('.service-overlay');
                    if (overlay) {
                        overlay.style.opacity = '0.7';
                    }
                    
                } else if (index === currentServiceIndex) {
                    // Current service - dynamically shrink from 100vh to 0vh
                    const newHeight = 100 - (serviceScrollProgress * 100);
                    item.style.height = `${Math.max(0, newHeight)}vh`;
                    
                    // Add darker background based on scroll progress
                    let overlay = item.querySelector('.service-overlay');
                    if (overlay) {
                        overlay.style.opacity = serviceScrollProgress * 0.7;
                    }
                    
                } else {
                    // Services we haven't reached yet - full height, no overlay
                    item.style.height = '100vh';
                    
                    let overlay = item.querySelector('.service-overlay');
                    if (overlay) {
                        overlay.style.opacity = '0';
                    }
                }
            });
            
        } else if (windowScroll >= (sectionEnd - viewportHeight)) {
            // At the end of the section
            servicesContainer.classList.remove('fixed');
            servicesContainer.style.position = 'absolute';
            servicesContainer.style.top = `${sectionHeight - viewportHeight}px`;
            servicesContainer.style.left = '0';
            servicesContainer.style.right = '0';
            servicesContainer.style.margin = '0';
            servicesContainer.style.width = '100vw';
            
            // Collapse all services except the last one
            serviceItems.forEach((item, index) => {
                if (index < numServices - 1) {
                    item.style.height = '0vh';
                    
                    let overlay = item.querySelector('.service-overlay');
                    if (overlay) {
                        overlay.style.opacity = '0.7';
                    }
                }
            });
            
        } else {
            // Before the section - reset all services
            servicesContainer.classList.remove('fixed');
            servicesContainer.style.position = '';
            servicesContainer.style.top = '0';
            servicesContainer.style.left = '0';
            servicesContainer.style.right = '0';
            servicesContainer.style.margin = '0';
            servicesContainer.style.width = '100vw';
            
            serviceItems.forEach(item => {
                item.style.height = '100vh';
                
                let overlay = item.querySelector('.service-overlay');
                if (overlay) {
                    overlay.style.opacity = '0';
                }
            });
        }
    }
    
    // Set up initial stacking
    setupServiceStacking();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleServiceScroll, { passive: true });
    
    // Add resize listener
    window.addEventListener('resize', function() {
        viewportHeight = window.innerHeight;
        handleServiceScroll();
    }, { passive: true });
    
    // Initial call to set positions
    handleServiceScroll();
});
```

## Implementation Process

To implement this effect on your own website, follow these steps:

1. **HTML Structure Setup**
   - Create the services section with the proper nesting structure
   - Add the services-layer-container directly inside the section element (no wrapper container)
   - For each service, create a service-stack-item with a service-overlay div
   - Place actual content inside a container within the service-item-wrapper

2. **CSS Implementation**
   - Add the CSS styles for the services section, ensuring the services-layer-container is 100vw width
   - Style the service-stack-item to be full width with proper positioning
   - Create styles for the service-overlay to handle the darkening effect
   - Style the service-item-wrapper to contain actual content within standard container width

3. **JavaScript Setup**
   - Create the setupServiceStacking function to establish proper z-index and positioning
   - Implement the handleServiceScroll function to manage transitions based on scroll position
   - Add event listeners for scroll and resize events
   - Call the setup and scroll handling functions on document ready

## Animation Flow and Behavior

The animation creates a layered effect with these key components:

1. **Full-Width Overlay**
   - As users scroll, the darkening effect spans the entire viewport width
   - The overlay creates a clean transition between services without visible edges

2. **Contained Content**
   - While the overlay spans full width, actual content remains within standard container width
   - This ensures readability and proper layout regardless of screen size

3. **Progressive Reveal**
   - Each service shrinks from bottom to top as users scroll
   - The overlay gradually darkens as the service collapses
   - The next service is revealed underneath, creating a layered effect

4. **Smooth Transitions**
   - The container switches between absolute and fixed positioning at section boundaries
   - Height transitions occur smoothly based on precise scroll calculations
   - Overlay opacity changes create subtle visual cues during transitions

## Responsive Considerations

The implementation ensures proper functionality across all device sizes:

1. **Full-Width Flexibility**
   - The full-width (100vw) overlay adapts to any screen size
   - Content remains properly contained within standard container width

2. **Height Calculations**
   - All height values use viewport height units (vh) to scale appropriately
   - The JavaScript recalculates dimensions on window resize

3. **Mobile Optimization**
   - Structure maintains consistency across devices
   - Content positioning adjusts for optimal mobile viewing

## Implementation Tips

For best results when implementing this effect:

1. **Performance Optimization**
   - Use passive event listeners for scroll and resize events
   - Minimize DOM manipulations during scroll
   - Avoid frequent reflows by batching style changes

2. **Content Planning**
   - Design services with consistent structure for seamless transitions
   - Use high-quality images that look good at both full height and during transitions
   - Keep content concise enough to be visible during the transition

3. **Browser Testing**
   - Test in multiple browsers to ensure consistent behavior
   - Add fallbacks for older browsers that might not support certain CSS properties
   - Ensure graceful degradation if JavaScript is disabled

4. **Accessibility Considerations**
   - Ensure content remains accessible to screen readers
   - Add keyboard navigation support for users who don't use mouse/touch
   - Include fallback static layout for users with reduced motion preferences

By following these guidelines, you can create a sophisticated, visually engaging services section with full-width overlay effects that seamlessly integrate with your website's design while maintaining proper content containment. 