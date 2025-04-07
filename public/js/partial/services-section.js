$(document).ready(function () { 
    /**
 * Services Section JavaScript Module
 * Handles services section functionality
 */

    // Variables
    const servicesSection = document.querySelector('.services-section');
    const servicesContainer = document.querySelector('.services-layer-container');
    const serviceItems = document.querySelectorAll('.service-stack-item');
    
    if (!servicesSection || !servicesContainer || serviceItems.length === 0) return;
    
    // Calculate section heights
    const numServices = serviceItems.length;
    let viewportHeight = window.innerHeight;
    const sectionTotalHeight = numServices * viewportHeight;
    
    // Store initial position of first service content for reference
    const firstServiceContent = document.querySelector('.service-stack-item[data-service="1"] .service-content');
    let referencePosition = null;
    
    if (firstServiceContent) {
        referencePosition = {
            top: firstServiceContent.offsetTop,
            height: firstServiceContent.offsetHeight
        };
    }
    
    // Set initial stacking
    function setupServiceStacking() {
        serviceItems.forEach((item, index) => {
            // Set z-index in reverse order (higher for first item)
            item.style.zIndex = serviceItems.length - index;
            
            // Position all items at the top
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
            if (serviceContent && referencePosition) {
                serviceContent.style.position = 'absolute';
                serviceContent.style.top = '50%';
                serviceContent.style.transform = 'translateY(-50%)';
            }
            
            // Set image container to full height
            const imageContainer = item.querySelector('.service-image');
            if (imageContainer) {
                imageContainer.style.height = '100vh';
            }
            
            // Set column to full height
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
        const sectionBottom = servicesSection.getBoundingClientRect().bottom;
        const windowScroll = window.scrollY;
        const sectionStart = window.scrollY + sectionTop;
        const sectionHeight = servicesSection.offsetHeight;
        const sectionEnd = sectionStart + sectionHeight;
        
        // Make container fixed when inside the section
        if (windowScroll >= sectionStart && windowScroll < (sectionEnd - viewportHeight)) {
            // Only apply these changes when first becoming fixed
            if (!servicesContainer.classList.contains('fixed')) {
                // Apply fixed positioning
                servicesContainer.classList.add('fixed');
                servicesContainer.style.position = 'fixed';
                servicesContainer.style.top = '0';
                servicesContainer.style.left = '0';
                servicesContainer.style.right = '0';
                servicesContainer.style.width = '100vw';
                
                // Ensure margin is not affecting positioning
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
                // Image and columns should maintain their full height within their parent container
                const imageContainer = item.querySelector('.service-image');
                const columns = item.querySelectorAll('.col-lg-6');
                const row = item.querySelector('.row');
                
                if (row) {
                    row.style.height = '100%';
                    row.style.display = 'flex';
                    row.style.alignItems = 'stretch';
                }
                
                if (imageContainer) {
                    imageContainer.style.height = '100%';
                }
                
                columns.forEach(column => {
                    column.style.height = '100%';
                });
                
                if (index < currentServiceIndex) {
                    // Services we've scrolled past - shrink to 0 height
                    item.style.height = '0vh';
                    // Use overlay instead of box-shadow
                    let overlay = item.querySelector('.service-overlay');
                    if (!overlay) {
                        overlay = document.createElement('div');
                        overlay.className = 'service-overlay';
                        item.appendChild(overlay);
                    }
                    overlay.style.opacity = '0.7';
                    
                    // Keep content aligned to top
                    item.style.overflow = 'hidden';
                    item.style.alignItems = 'flex-start';
                    
                } else if (index === currentServiceIndex) {
                    // Current service - dynamically shrink all the way to 0vh
                    const newHeight = 100 - (serviceScrollProgress * 100); // Shrink from 100vh to 0vh
                    item.style.height = `${Math.max(0, newHeight)}vh`;
                    
                    // Add darker background based on scroll ratio
                    const opacity = serviceScrollProgress * 0.7; // Up to 70% black overlay
                    // Use overlay instead of box-shadow
                    let overlay = item.querySelector('.service-overlay');
                    if (!overlay) {
                        overlay = document.createElement('div');
                        overlay.className = 'service-overlay';
                        item.appendChild(overlay);
                    }
                    overlay.style.opacity = opacity;
                    
                    // Keep content aligned to top during transition
                    item.style.overflow = 'hidden';
                    item.style.alignItems = 'flex-start';
                    
                } else {
                    // Services we haven't reached yet - full height, no overlay
                    item.style.height = '100vh';
                    // Use overlay with 0 opacity
                    let overlay = item.querySelector('.service-overlay');
                    if (!overlay) {
                        overlay = document.createElement('div');
                        overlay.className = 'service-overlay';
                        item.appendChild(overlay);
                    }
                    overlay.style.opacity = '0';
                    
                    // Reset alignment
                    item.style.overflow = 'hidden';
                    item.style.alignItems = 'flex-start';
                }
                
                // Ensure content stays in consistent position
                const serviceContent = item.querySelector('.service-content');
                if (serviceContent) {
                    serviceContent.style.position = 'absolute';
                    serviceContent.style.top = '50%';
                    serviceContent.style.transform = 'translateY(-50%)';
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
            
            // Make all services except the last one collapsed
            serviceItems.forEach((item, index) => {
                // Maintain full height for image and columns within their container
                const imageContainer = item.querySelector('.service-image');
                const columns = item.querySelectorAll('.col-lg-6');
                const row = item.querySelector('.row');
                
                if (row) {
                    row.style.height = '100%';
                    row.style.display = 'flex';
                    row.style.alignItems = 'stretch';
                }
                
                if (imageContainer) {
                    imageContainer.style.height = '100%';
                }
                
                columns.forEach(column => {
                    column.style.height = '100%';
                });
                
                if (index < numServices - 1) {
                    item.style.height = '0vh';
                    // Instead of box-shadow, use a separate overlay element
                    let overlay = item.querySelector('.service-overlay');
                    if (!overlay) {
                        overlay = document.createElement('div');
                        overlay.className = 'service-overlay';
                        item.appendChild(overlay);
                    }
                    overlay.style.opacity = '0.7';
                    
                    // Keep content aligned to top
                    item.style.overflow = 'hidden';
                    item.style.alignItems = 'flex-start';
                    
                    // Maintain content positioning
                    const serviceContent = item.querySelector('.service-content');
                    if (serviceContent) {
                        serviceContent.style.position = 'absolute';
                        serviceContent.style.top = '50%';
                        serviceContent.style.transform = 'translateY(-50%)';
                    }
                }
            });
        } else {
            // Before the section - when scrolling from top to bottom
            servicesContainer.classList.remove('fixed');
            servicesContainer.style.position = '';
            servicesContainer.style.top = '0';
            servicesContainer.style.left = '0';
            servicesContainer.style.right = '0';
            servicesContainer.style.margin = '0';
            servicesContainer.style.width = '100vw';
            
            // Reset all services to default
            serviceItems.forEach(item => {
                item.style.height = '100vh';
                // Use overlay instead of box-shadow
                let overlay = item.querySelector('.service-overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.className = 'service-overlay';
                    item.appendChild(overlay);
                }
                overlay.style.opacity = '0';
                
                // Reset alignment
                item.style.overflow = 'hidden';
                item.style.alignItems = 'flex-start';
                
                // Maintain full height for image and columns
                const imageContainer = item.querySelector('.service-image');
                const columns = item.querySelectorAll('.col-lg-6');
                const row = item.querySelector('.row');
                
                if (row) {
                    row.style.height = '100%';
                    row.style.display = 'flex';
                    row.style.alignItems = 'stretch';
                }
                
                if (imageContainer) {
                    imageContainer.style.height = '100%';
                }
                
                columns.forEach(column => {
                    column.style.height = '100%';
                });
                
                // Reset content positioning
                const serviceContent = item.querySelector('.service-content');
                if (serviceContent) {
                    serviceContent.style.position = 'absolute';
                    serviceContent.style.top = '50%';
                    serviceContent.style.transform = 'translateY(-50%)';
                }
            });
        }
    }
    
    // Set up initial stacking
    setupServiceStacking();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleServiceScroll, { passive: true });
    
    // Add resize listener to recalculate dimensions
    window.addEventListener('resize', function() {
        // Recalculate viewport height
        viewportHeight = window.innerHeight;
        // Reapply scroll handling
        handleServiceScroll();
    }, { passive: true });
    
    // Initial call to set positions
    handleServiceScroll();
});