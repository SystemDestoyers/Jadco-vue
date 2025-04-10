/**
 * Services Menu Manager
 * 
 * This script centralizes services menu initialization to prevent conflicts
 * between App.vue and Header.vue both trying to control the services-menu.
 * It ensures the active class is only added once to prevent double animations.
 */

window.ServicesMenuManager = {
    initialized: false,
    initializing: false,
    animationInProgress: false,
    
    // Initialize services menu - this should be called only once
    init() {
        if (this.initialized || this.initializing) return;
        
        this.initializing = true;
        
        const servicesMenu = document.querySelector('.services-menu');
        if (!servicesMenu) {
            this.initializing = false;
            return;
        }
        
        // Check if on a service page by URL
        const isServicePage = window.location.pathname.includes('/services/');
        
        // Check if animation is already in progress
        const hasAnimationClass = servicesMenu.classList.contains('animate') || servicesMenu.classList.contains('active');
        if (hasAnimationClass) {
            // Still mark as initialized after a delay
            setTimeout(() => {
                this.initialized = true;
                this.initializing = false;
            }, 100);
            
            return;
        }
        
        // Add active class only if on service page and not already active
        if (isServicePage && !servicesMenu.classList.contains('active')) {
            // Set a flag to prevent double animations
            this.animationInProgress = true;
            
            // Add the class after a small delay to ensure Vue bindings have completed
            setTimeout(() => {
                servicesMenu.classList.add('active');
                
                // Reset flag after animation would be complete
                setTimeout(() => {
                    this.animationInProgress = false;
                }, 1000); // Typical animation duration
            }, 50);
        } else if (!isServicePage && servicesMenu.classList.contains('active')) {
            servicesMenu.classList.remove('active');
        }
        
        // Mark as initialized
        setTimeout(() => {
            this.initialized = true;
            this.initializing = false;
        }, 100);
    },
    
    // Reset the initialization state (call when navigating)
    reset() {
        this.initialized = false;
        this.initializing = false;
        this.animationInProgress = false;
    }
};

// Initialize on page load - with a slight delay to let Vue finish rendering
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.ServicesMenuManager.init();
    }, 100);
});

// Provide a global reset function for route changes
window.resetServicesMenuManager = () => {
    window.ServicesMenuManager.reset();
}; 