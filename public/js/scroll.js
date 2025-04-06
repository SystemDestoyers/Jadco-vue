/**
 * Sticky Section Scroll - Professional section-based scrolling solution
 * 
 * This script provides smooth section-to-section scrolling with one wheel event per section.
 * It completely disables its functionality when in the services section and resumes when leaving.
 */

(function() {
    'use strict';

    // Section IDs in order they appear on page
    const ALL_SECTIONS = ['home', 'about', 'services', 'educational-section', 'statistics', 'contact'];
    
    // Main scroll controller
    const StickyScroll = {
        // Configuration options
        config: {
            animationDuration: 800,        // Duration of scroll animations in ms
            wheelThreshold: 10,            // Minimum wheel delta to trigger navigation
            lockDuration: 800,             // Duration to lock scroll after navigation
            servicesSection: 'services',   // ID of services section to exclude
            minScreenWidth: 768,           // Minimum screen width for sticky scrolling
            bottomThreshold: 100,          // How close to the bottom of services to detect end (px)
            bottomOffset: 50,              // Offset from bottom when entering services from below
            topThreshold: 150              // How close to the top of services to detect start (px)
        },
        
        // State variables
        state: {
            isScrollLocked: false,         // Flag to prevent multiple scroll events
            currentSectionIndex: 0,        // Current active section index
            isInServicesSection: false,    // Flag for services section
            sectionElements: [],           // Array of section elements
            isHomePage: false,             // Flag for home page
            atServicesEnd: false,          // Flag to detect end of services
            atServicesStart: false,        // Flag to detect start of services
            servicesScrollTimeout: null,   // Timeout for services section scroll
            enteringServicesFromBelow: false // Flag to track direction when entering services
        },
        
        /**
         * Initialize the sticky scroll controller
         */
        init: function() {
            // Check if we're on home page
            this.state.isHomePage = this.isHomePage();
            if (!this.state.isHomePage) return;
            
            // Get all section elements
            this.getSections();
            
            // Set initial section based on scroll position
            this.detectCurrentSection();
            
            // Add event listeners
            this.attachEventListeners();
            
            console.log('Sticky scroll initialized with sections:', 
                this.state.sectionElements.map(el => el.id));
        },
        
        /**
         * Check if current page is home page
         * @returns {boolean}
         */
        isHomePage: function() {
            const path = window.location.pathname;
            return path === '/' || path === '/index.php' || path === '/home';
        },
        
        /**
         * Get all section elements
         */
        getSections: function() {
            this.state.sectionElements = [];
            
            // Get sections in the defined order
            ALL_SECTIONS.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    this.state.sectionElements.push(section);
                }
            });
        },
        
        /**
         * Check if sticky scrolling should be enabled
         * @returns {boolean}
         */
        isEnabled: function() {
            return this.state.isHomePage && 
                   window.innerWidth >= this.config.minScreenWidth &&
                   !this.state.isInServicesSection;
        },
        
        /**
         * Attach all event listeners
         */
        attachEventListeners: function() {
            // Main wheel event for section navigation
            window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
            
            // Track scroll position changes
            window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
            
            // Update on window resize
            window.addEventListener('resize', this.handleResize.bind(this), { passive: true });
            
            // Handle anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', this.handleAnchorClick.bind(this));
            });
            
            // Handle scroll to top indicator
            const scrollIndicator = document.querySelector('.scroll-indicator-container');
            if (scrollIndicator) {
                scrollIndicator.addEventListener('click', this.scrollToTop.bind(this));
            }
            
            // Add keyboard navigation
            document.addEventListener('keydown', this.handleKeydown.bind(this));
        },
        
        /**
         * Handle wheel events for section navigation
         * @param {WheelEvent} e Wheel event
         */
        handleWheel: function(e) {
            // Check if we're at the end of services section and scrolling down
            if (this.state.isInServicesSection && this.isAtServicesEnd() && e.deltaY > 0) {
                // If scrolling down at the end of services, move to next section immediately
                e.preventDefault();
                this.exitServicesSection();
                return;
            }
            
            // Check if we're at the top of services section and scrolling up
            if (this.state.isInServicesSection && this.isAtServicesStart() && e.deltaY < 0) {
                // If scrolling up at the start of services, move to previous section immediately
                e.preventDefault();
                this.exitServicesUpward();
                return;
            }
            
            // First check if we should be handling scroll events
            if (!this.isEnabled()) {
                // We're in services section but not at the end or start, don't interfere
                return;
            }
            
            // Prevent default scrolling
            e.preventDefault();
            
            // Don't navigate if we're in transition
            if (this.state.isScrollLocked) return;
            
            // Only respond to significant scroll movements
            if (Math.abs(e.deltaY) > this.config.wheelThreshold) {
                // Determine direction
                const direction = e.deltaY > 0 ? 'down' : 'up';
                
                // Check if we're about to enter services section from below
                if (direction === 'up') {
                    const servicesIndex = this.findSectionIndex(this.config.servicesSection);
                    
                    if (servicesIndex !== -1 && this.state.currentSectionIndex === servicesIndex + 1) {
                        // We're about to enter services from below (educational-section → services)
                        this.state.enteringServicesFromBelow = true;
                        console.log('Setting enteringServicesFromBelow flag to position at last service item');
                    }
                }
                
                // Navigate to next/previous section
                this.navigateSection(direction);
            }
        },
        
        /**
         * Check if user has reached the end of services section
         * @returns {boolean} True if at the end of services
         */
        isAtServicesEnd: function() {
            const servicesIndex = this.findSectionIndex(this.config.servicesSection);
            
            if (servicesIndex === -1) return false;
            
            const servicesSection = this.state.sectionElements[servicesIndex];
            const scrollBottom = window.scrollY + window.innerHeight;
            const sectionBottom = servicesSection.offsetTop + servicesSection.offsetHeight;
            
            // Return true if we're close to or at the bottom of services section
            return scrollBottom >= (sectionBottom - this.config.bottomThreshold);
        },
        
        /**
         * Check if user has reached the start of services section
         * @returns {boolean} True if at the top of services
         */
        isAtServicesStart: function() {
            const servicesIndex = this.findSectionIndex(this.config.servicesSection);
            
            if (servicesIndex === -1) return false;
            
            const servicesSection = this.state.sectionElements[servicesIndex];
            const scrollTop = window.scrollY;
            const sectionTop = servicesSection.offsetTop;
            
            // Return true if we're close to or at the top of services section
            return scrollTop <= (sectionTop + this.config.topThreshold);
        },
        
        /**
         * Find index of section by ID
         * @param {string} sectionId The section ID to find
         * @returns {number} The index or -1 if not found
         */
        findSectionIndex: function(sectionId) {
            return this.state.sectionElements.findIndex(section => section.id === sectionId);
        },
        
        /**
         * Get position for bottom of services section
         * @returns {number} Scroll position for bottom of services
         */
        getServicesBottomPosition: function() {
            const servicesIndex = this.findSectionIndex(this.config.servicesSection);
            
            if (servicesIndex === -1) return 0;
            
            const servicesSection = this.state.sectionElements[servicesIndex];
            const sectionBottom = servicesSection.offsetTop + servicesSection.offsetHeight;
            
            // Return position that shows the bottom of the services section
            // Subtract viewport height and add offset to show last items
            return sectionBottom - window.innerHeight + this.config.bottomOffset;
        },
        
        /**
         * Handle transition from services section to next section
         */
        exitServicesSection: function() {
            // Find services index and move to next section
            const servicesIndex = this.findSectionIndex(this.config.servicesSection);
            
            if (servicesIndex !== -1 && servicesIndex < this.state.sectionElements.length - 1) {
                // Move to the section after services
                this.state.isInServicesSection = false;
                this.scrollToSection(servicesIndex + 1);
                console.log('Exiting services section to next section');
            }
        },
        
        /**
         * Handle transition from services section to previous section
         */
        exitServicesUpward: function() {
            // Find services index and move to previous section
            const servicesIndex = this.findSectionIndex(this.config.servicesSection);
            
            if (servicesIndex !== -1 && servicesIndex > 0) {
                // Move to the section before services
                this.state.isInServicesSection = false;
                this.scrollToSection(servicesIndex - 1);
                console.log('Exiting services section to previous section');
            }
        },
        
        /**
         * Navigate to next or previous section
         * @param {string} direction 'up' or 'down'
         */
        navigateSection: function(direction) {
            // Calculate new section index
            let newIndex = this.state.currentSectionIndex;
            
            if (direction === 'down') {
                newIndex = Math.min(this.state.sectionElements.length - 1, newIndex + 1);
            } else if (direction === 'up') {
                newIndex = Math.max(0, newIndex - 1);
            }
            
            // Only proceed if we're actually changing sections
            if (newIndex !== this.state.currentSectionIndex) {
                this.scrollToSection(newIndex);
            }
        },
        
        /**
         * Scroll to specific section by index
         * @param {number} index Section index
         */
        scrollToSection: function(index) {
            // Get target section
            const section = this.state.sectionElements[index];
            if (!section) return;
            
            // Lock scrolling during transition
            this.state.isScrollLocked = true;
            
            // Add animation class for smooth entrance
            section.classList.add('section-animate');
            
            // Determine if we're entering services section and from which direction
            const isEnteringServices = section.id === this.config.servicesSection;
            const isLeavingServices = this.state.isInServicesSection && !isEnteringServices;
            
            // Calculate scroll position
            let scrollPosition;
            
            // If entering services from below, position at bottom of services
            if (isEnteringServices && this.state.enteringServicesFromBelow) {
                scrollPosition = this.getServicesBottomPosition();
                console.log('Entering services section from below, positioning at last service item');
            } else {
                scrollPosition = section.offsetTop;
            }
            
            // Update section state flags
            if (isEnteringServices) {
                this.state.isInServicesSection = true;
                this.state.atServicesEnd = this.state.enteringServicesFromBelow; // Set end flag if coming from below
                this.state.atServicesStart = !this.state.enteringServicesFromBelow; // Set start flag if coming from above
                console.log('Entering services section, disabling sticky scroll');
            } else if (isLeavingServices) {
                this.state.isInServicesSection = false;
                this.state.atServicesEnd = false;
                this.state.atServicesStart = false;
                console.log('Leaving services section, enabling sticky scroll');
            }
            
            // Update current section index
            this.state.currentSectionIndex = index;
            
            // Update active navigation
            this.updateActiveNavItems(section.id);
            
            // Animate scroll
            $('html, body').stop().animate({
                scrollTop: scrollPosition
            }, this.config.animationDuration, () => {
                // Remove animation class after a delay
                setTimeout(() => {
                    section.classList.remove('section-animate');
                }, 500);
                
                // Unlock scrolling after animation plus buffer time
                setTimeout(() => {
                    this.state.isScrollLocked = false;
                    
                    // Reset enter from below flag
                    this.state.enteringServicesFromBelow = false;
                    
                    // If we just entered services section, we need one more check
                    if (section.id === this.config.servicesSection) {
                        this.state.isInServicesSection = true;
                        // Check if at top or bottom of services
                        this.state.atServicesStart = this.isAtServicesStart();
                        this.state.atServicesEnd = this.isAtServicesEnd();
                    }
                }, this.config.lockDuration);
            });
        },
        
        /**
         * Detect current section based on scroll position
         */
        detectCurrentSection: function() {
            if (this.state.isScrollLocked) return;
            
            const scrollPosition = window.scrollY + (window.innerHeight / 2);
            
            // Find the section that contains this position
            for (let i = 0; i < this.state.sectionElements.length; i++) {
                const section = this.state.sectionElements[i];
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // Found the current section
                    this.state.currentSectionIndex = i;
                    
                    // Check if it's the services section
                    if (section.id === this.config.servicesSection) {
                        this.state.isInServicesSection = true;
                        
                        // Check if at start or end of services section
                        this.state.atServicesStart = this.isAtServicesStart();
                        this.state.atServicesEnd = this.isAtServicesEnd();
                    } else {
                        this.state.isInServicesSection = false;
                        this.state.atServicesStart = false;
                        this.state.atServicesEnd = false;
                    }
                    
                    // Update navigation
                    this.updateActiveNavItems(section.id);
                    break;
                }
            }
        },
        
        /**
         * Update active navigation items based on current section
         * @param {string} sectionId Current section ID
         */
        updateActiveNavItems: function(sectionId) {
            // Update navbar items
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                // Keep home link active when on homepage
                if (this.state.isHomePage && link.id === 'home-nav-link') {
                    link.classList.add('active');
                } else {
                    // Check if this link points to current section
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
            
            // Update scroll indicator
            this.updateScrollIndicator();
        },
        
        /**
         * Update the scroll indicator position
         */
        updateScrollIndicator: function() {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (!scrollIndicator) return;
            
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            
            scrollIndicator.style.height = `${scrolled}%`;
            
            // Update at-top class
            if (window.scrollY < 100) {
                document.body.classList.add('at-top');
            } else {
                document.body.classList.remove('at-top');
            }
        },
        
        /**
         * Handle scroll events
         */
        handleScroll: function() {
            if (!this.state.isScrollLocked) {
                this.detectCurrentSection();
                this.updateScrollIndicator();
                
                // Check if we're at the end/start of services section
                if (this.state.isInServicesSection) {
                    this.state.atServicesEnd = this.isAtServicesEnd();
                    this.state.atServicesStart = this.isAtServicesStart();
                    
                    // Clear any existing timeout
                    if (this.state.servicesScrollTimeout) {
                        clearTimeout(this.state.servicesScrollTimeout);
                    }
                    
                    // Set a new timeout to check if we're still at the end/start
                    this.state.servicesScrollTimeout = setTimeout(() => {
                        if (this.state.atServicesEnd) {
                            console.log('Ready to exit services section on next scroll down');
                        } else if (this.state.atServicesStart) {
                            console.log('Ready to exit services section on next scroll up');
                        }
                    }, 500);
                }
            }
        },
        
        /**
         * Handle window resize
         */
        handleResize: function() {
            // Update section positions on resize
            if (!this.state.isScrollLocked) {
                this.detectCurrentSection();
            }
        },
        
        /**
         * Handle anchor link clicks
         * @param {Event} e Click event
         */
        handleAnchorClick: function(e) {
            const href = e.currentTarget.getAttribute('href');
            if (!href || href.charAt(0) !== '#') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Find the section index
                const sectionIndex = this.state.sectionElements.findIndex(
                    section => section.id === targetId
                );
                
                if (sectionIndex !== -1) {
                    // It's one of our managed sections
                    
                    // Check if we're going to services from below
                    if (targetId === this.config.servicesSection && 
                        this.state.currentSectionIndex > sectionIndex) {
                        this.state.enteringServicesFromBelow = true;
                        console.log('Link click: Setting enteringServicesFromBelow flag');
                    }
                    
                    this.scrollToSection(sectionIndex);
                } else {
                    // Use regular smooth scrolling for other elements
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        },
        
        /**
         * Handle keyboard navigation
         * @param {KeyboardEvent} e Keyboard event
         */
        handleKeydown: function(e) {
            // Allow exiting services section with arrow down key when at the end
            if (this.state.isInServicesSection && this.state.atServicesEnd && 
                (e.key === 'ArrowDown' || e.key === 'PageDown')) {
                e.preventDefault();
                this.exitServicesSection();
                return;
            }
            
            // Allow exiting services section with arrow up key when at the start
            if (this.state.isInServicesSection && this.state.atServicesStart && 
                (e.key === 'ArrowUp' || e.key === 'PageUp')) {
                e.preventDefault();
                this.exitServicesUpward();
                return;
            }
            
            // Check if we're about to enter services section from below with arrow up key
            if (!this.state.isInServicesSection && 
                (e.key === 'ArrowUp' || e.key === 'PageUp')) {
                const servicesIndex = this.findSectionIndex(this.config.servicesSection);
                
                if (servicesIndex !== -1 && this.state.currentSectionIndex === servicesIndex + 1) {
                    // We're about to enter services from below (educational section → services)
                    this.state.enteringServicesFromBelow = true;
                    console.log('Keyboard: Setting enteringServicesFromBelow flag to position at last service item');
                }
            }
            
            // Only handle if enabled
            if (!this.isEnabled()) return;
            
            // Arrow keys for navigation
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                this.navigateSection('down');
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                this.navigateSection('up');
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.scrollToTop();
            } else if (e.key === 'End') {
                e.preventDefault();
                this.scrollToSection(this.state.sectionElements.length - 1);
            }
        },
        
        /**
         * Scroll to top of page
         */
        scrollToTop: function() {
            this.scrollToSection(0);
        }
    };
    
    // Initialize on document ready
    $(document).ready(function() {
        StickyScroll.init();
    });
})(); 