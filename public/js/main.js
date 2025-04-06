$(document).ready(function() {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || 
                       window.location.pathname === '/index.php' || 
                       window.location.pathname === '/home';
    
    // Handle preloader animation and removal
    const preloader = document.querySelector('.preloader');
    const preloaderLogo = document.querySelector('.preloader-logo');
    
    if (preloader && preloaderLogo) {
        // First ensure the logo completes its entrance animation
        setTimeout(() => {
            // Start exit animation for the logo
            preloaderLogo.classList.add('fade-out');
            
            // After logo exit animation is complete, fade out the preloader
            setTimeout(() => {
                preloader.classList.add('fade-out');
                
                // Remove preloader from DOM after fade out completes
                setTimeout(() => {
                    preloader.remove();
                    
                    // After preloader is removed, initialize header animations
                    initializeHeaderAnimations();
                }, 500);
            }, 1000); // Match the preloaderBackOutUp animation duration
        }, 1500); // Time to show the logo before starting exit animation
    } else {
        // If no preloader, initialize header animations immediately
        initializeHeaderAnimations();
    }
    
    // Initialize header animations
    function initializeHeaderAnimations() {
        // Apply animation classes to header columns
        // const leftColumn = document.querySelector('.heading .animate-left');
        // const rightColumn = document.querySelector('.heading .animate-right');
        
        // if (rightColumn) rightColumn.style.opacity = '1';
        
        // This functionality is now handled by header.js
    }
    
    // Smooth scrolling for all anchors
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Close navbar when clicking on a nav item on mobile
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Add active class to navbar items based on scroll position
    $(window).scroll(function() {
        var position = $(this).scrollTop();
        var currentPath = window.location.pathname;
        
        // Don't change active state for about and services pages when scrolling
        if (currentPath === '/about' || currentPath.startsWith('/services/')) {
            return;
        }
        
        // For home page, preserve the home nav link active state 
        // but update section-specific active states
        if (currentPath === '/' || currentPath === '/home' || currentPath === '') {
            // Always keep the home nav link active regardless of scroll position
            $('#home-nav-link').addClass('active');
            
            // Update section-specific active classes for non-nav elements
            $('.section').each(function() {
                var target = $(this).offset().top - 100;
                var id = $(this).attr('id');
                
                // Only handle in-page links/sections, not top-level nav
                if (id && id !== 'home') {
                    if (position >= target) {
                        // Find and update only the in-page navigation or indicators
                        $('.section-nav .nav-link').removeClass('active');
                        $('.section-nav .nav-link[href="#' + id + '"]').addClass('active');
                    }
                }
            });
        }
        
        // Update scroll indicator
        updateScrollIndicator();
    });
    
    // Function to update the scroll indicator
    function updateScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (!scrollIndicator) return;
        
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        scrollIndicator.style.height = `${scrolled}%`;
        
        // Check if user is in header section - if yes, add at-top class to body
        if (window.scrollY < 100) {
            document.body.classList.add('at-top');
        } else {
            document.body.classList.remove('at-top');
        }
    }
    
    // Initialize scroll indicator on page load
    updateScrollIndicator();
    
    // Add click event to scroll indicator to scroll to top
    $('.scroll-indicator-container').on('click', function() {
        // Reset the active section tracking
        currentActiveSection = 'home';
        isSectionScrollLocked = false;
        clearTimeout(lockScrollTimeout);
        
        // Scroll to top smoothly
        $('html, body').animate({
            scrollTop: 0
        }, 800, function() {
            // After scrolling completes, update active section in navbar
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link[href="#home"]').addClass('active');
        });
    });
    
    // Enhanced sticky scrolling for all main sections
    const mainSections = ['home', 'about', 'services', 'educational-section', 'statistics', 'contact'];
    let isSectionScrollLocked = false;
    let currentActiveSection = null;
    let lockScrollTimeout = null;
    let lastWheelTimestamp = 0;
    const wheelThrottleTime = 0; // ms between allowed wheel events
    
    // Function to check if we should enable sticky scrolling (disable on small screens)
    function isStickyScrollEnabled() {
        // Only enable on home page and on screens 768px and larger
        return isHomePage && window.innerWidth >= 768;
    }
    
    // Function to smoothly scroll to a section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section || !isStickyScrollEnabled()) return;
        
        // Apply animation class
        section.classList.add('section-animate');
        
        // Lock scrolling during animation
        isSectionScrollLocked = true;
        clearTimeout(lockScrollTimeout);
        
        // Clear existing animation if there's any
        $('html, body').stop();
        
        // Calculate exact offset for perfect alignment
        // Account for any fixed headers or additional spacing needed
        const headerOffset = 0; // Adjust if you have a fixed header
        const sectionOffset = $(section).offset().top - headerOffset;
        
        // Scroll to the section with a short duration for precise positioning
        $('html, body').animate({
            scrollTop: sectionOffset
        }, 400, function() {
            // Set current section
            currentActiveSection = sectionId;
            
            // Double-check alignment after animation and make minor adjustments if needed
            // This ensures perfect alignment even if browser rendering causes small discrepancies
            const finalOffset = $(section).offset().top - headerOffset;
            if (Math.abs(window.scrollY - finalOffset) > 2) {
                // Make one final adjustment with no animation
                window.scrollTo({
                    top: finalOffset,
                    behavior: 'auto'
                });
            }
            
            // Keep scrolling locked if this is the services section
            if (sectionId === 'services') {
                isSectionScrollLocked = true;
                
                // Force the service view to refresh properly
                setTimeout(() => {
                    // Make sure we're still in services section after the timeout
                    if (currentActiveSection === 'services') {
                        // Force a service refresh to ensure correct display
                        switchToService(currentServiceIndex);
                        
                        // Double check scroll lock is still active
                        isSectionScrollLocked = true;
                    }
                }, 200);
            } else {
                // Set timeout to unlock scrolling for other sections
                lockScrollTimeout = setTimeout(function() {
                    isSectionScrollLocked = false;
                    
                    // Remove animation class
                    setTimeout(() => {
                        section.classList.remove('section-animate');
                    }, 2000);
                }, 500);
            }
        });
    }
    
    // Function to get the nearest section to the current viewport
    function getNearestSection() {
        if (!isStickyScrollEnabled()) return null;
        
        const windowHeight = window.innerHeight;
        const viewportCenter = windowHeight / 2;
        let nearestSection = null;
        let nearestDistance = Infinity;
        
        mainSections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (!section) return;
            
            const rect = section.getBoundingClientRect();
            
            // Calculate distance from section center to viewport center
            // This provides a more accurate measure of which section is most in view
            const sectionCenter = rect.top + (rect.height / 2);
            const distanceToCenter = Math.abs(sectionCenter - viewportCenter);
            
            // Also consider how much of the section is visible in the viewport
            const sectionVisibleRatio = getSectionVisibleRatio(rect, windowHeight);
            
            // Prefer sections with more visibility and closer to center
            // Weight the calculation so that a section that's more visible gets preference
            const weightedDistance = distanceToCenter * (1.5 - sectionVisibleRatio);
            
            if (weightedDistance < nearestDistance) {
                nearestDistance = weightedDistance;
                nearestSection = sectionId;
            }
        });
        
        return nearestSection;
    }
    
    // Helper function to calculate what percentage of a section is visible
    function getSectionVisibleRatio(rect, windowHeight) {
        // If section is completely off-screen, visibility is 0
        if (rect.bottom <= 0 || rect.top >= windowHeight) {
            return 0;
        }
        
        // Calculate visible height
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        
        // Return ratio of visible height to total height
        return visibleHeight / rect.height;
    }
    
    // Function to navigate to next or previous section
    function navigateSection(direction) {
        if (!isStickyScrollEnabled()) return;
        
        if (!currentActiveSection) {
            currentActiveSection = getNearestSection();
        }
        
        if (!currentActiveSection) return;
        
        // If we're in the services section, handle service switching instead of section navigation
        if (currentActiveSection === 'services') {
            // Get scroll direction and measure scroll intensity
            handleServiceNavigation(direction);
            return;
        }
        
        const currentIndex = mainSections.indexOf(currentActiveSection);
        if (currentIndex === -1) return;
        
        let targetIndex;
        if (direction === 'down') {
            targetIndex = Math.min(currentIndex + 1, mainSections.length - 1);
        } else {
            targetIndex = Math.max(currentIndex - 1, 0);
        }
        
        // Only navigate if we're changing sections
        if (targetIndex !== currentIndex) {
            // If we're navigating to the services section, prepare the services view
            if (mainSections[targetIndex] === 'services') {
                // Reset to first service when entering services section from above
                if (direction === 'down') {
                    currentServiceIndex = 1;
                    // Prepare first service view
                    $('.service-item-initial').removeClass('hide');
                    $('.service-item-animation').removeClass('active').hide();
                    $('.service-dot').removeClass('active');
                    $('.service-dot[data-service="1"]').addClass('active');
                }
                // Set to last service when entering services section from below
                else if (direction === 'up') {
                    currentServiceIndex = totalServices;
                    // Prepare last service view
                    $('.service-item-initial').addClass('hide');
                    $('.service-item-animation').removeClass('active').hide();
                    $(`.service-item-animation[data-service="${totalServices}"]`).addClass('active');
                    $('.service-dot').removeClass('active');
                    $(`.service-dot[data-service="${totalServices}"]`).addClass('active');
                }
            }
            
            scrollToSection(mainSections[targetIndex]);
        }
    }
    
    // Simple scroll detection (no jQuery event triggers)
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    window.addEventListener('scroll', function() {
        // Don't process if disabled or locked
        if (!isStickyScrollEnabled() || isSectionScrollLocked) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get nearest section if we don't have an active section
        if (!currentActiveSection) {
            const nearest = getNearestSection();
            if (nearest) {
                scrollToSection(nearest);
                return;
            }
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
    
    // Use native wheel event instead of jQuery
    window.addEventListener('wheel', function(e) {
        if (!isStickyScrollEnabled()) return;
        
        try {
            // Throttle wheel events to prevent rapid firing
            const now = Date.now();
            if (now - lastWheelTimestamp < wheelThrottleTime) {
                e.preventDefault();
                return false;
            }
            lastWheelTimestamp = now;
            
            if (isSectionScrollLocked) {
                // If we're in services section, handle service switching
                if (currentActiveSection === 'services') {
                    // Get scroll direction and measure scroll intensity
                    const direction = e.deltaY > 0 ? 'down' : 'up';
                    handleServiceNavigation(direction);
                }
                e.preventDefault();
                return false;
            }
            
            // For non-services sections, use a threshold for section navigation
            if (Math.abs(e.deltaY) > 50) { // Only navigate if wheel event is significant
                const direction = e.deltaY > 0 ? 'down' : 'up';
                navigateSection(direction);
            }
            
            // Prevent default scrolling only if sticky scroll is enabled
            if (isStickyScrollEnabled()) {
                e.preventDefault();
                return false;
            }
        } catch (error) {
            console.error('Error handling wheel event:', error);
            // Recover from crash
            isSectionScrollLocked = false;
        }
    }, { passive: false });
    
    // Services section navigation with animation
    let currentServiceIndex = 1;
    const totalServices = 4;
    let scrollAccumulator = 0; // Track accumulated scroll value
    const scrollThreshold = 150; // Higher threshold for service change
    let serviceChangeCooldown = false; // Flag to prevent rapid service changes
    const cooldownDuration = 800; // Cooldown in milliseconds between service changes
    
    /**
     * Handle service navigation when user scrolls within services section
     * @param {string} direction - 'up' or 'down' scroll direction
     */
    function handleServiceNavigation(direction) {
        try {
            // If we're in cooldown period, ignore the scroll but still accumulate
            if (serviceChangeCooldown) {
                scrollAccumulator += (direction === 'down') ? 10 : -10; // Accumulate less during cooldown
                return;
            }

            // Accumulate scroll based on direction
            scrollAccumulator += (direction === 'down') ? 30 : -30;
            
            // Only proceed if we've accumulated enough scroll in either direction
            if (Math.abs(scrollAccumulator) < scrollThreshold) {
                return; // Not enough scroll accumulated yet
            }
            
            // Calculate new service index based on direction
            let newServiceIndex = currentServiceIndex;
            
            if (scrollAccumulator > 0) { // Accumulated enough downward scroll
                newServiceIndex = currentServiceIndex + 1;
                
                // If we're at the last service, move to the next section
                if (newServiceIndex > totalServices) {
                    // Find the next section after services
                    const servicesIndex = mainSections.indexOf('services');
                    if (servicesIndex < mainSections.length - 1) {
                        // Allow scrolling to unlock and move to next section
                        isSectionScrollLocked = false;
                        scrollToSection(mainSections[servicesIndex + 1]);
                        scrollAccumulator = 0; // Reset accumulator
                        return;
                    }
                    // If no next section, keep at the last service
                    newServiceIndex = totalServices;
                }
            } else { // Accumulated enough upward scroll
                newServiceIndex = currentServiceIndex - 1;
                
                // If we're at the first service, move to the previous section
                if (newServiceIndex < 1) {
                    // Find the previous section before services
                    const servicesIndex = mainSections.indexOf('services');
                    if (servicesIndex > 0) {
                        // Allow scrolling to unlock and move to previous section
                        isSectionScrollLocked = false;
                        scrollToSection(mainSections[servicesIndex - 1]);
                        scrollAccumulator = 0; // Reset accumulator
                        return;
                    }
                    // If no previous section, keep at the first service
                    newServiceIndex = 1;
                }
            }
            
            // Only update if the index changed
            if (newServiceIndex !== currentServiceIndex) {
                // Activate cooldown to prevent rapid service changes
                serviceChangeCooldown = true;
                setTimeout(() => {
                    serviceChangeCooldown = false;
                }, cooldownDuration);
                
                switchToService(newServiceIndex, scrollAccumulator > 0 ? 'down' : 'up');
                scrollAccumulator = 0; // Reset accumulator after changing service
            }
        } catch (error) {
            console.error('Error in handleServiceNavigation:', error);
            // Recover from crash by resetting to a safe state
            isSectionScrollLocked = false;
            scrollAccumulator = 0;
            serviceChangeCooldown = false;
        }
    }
    
    /**
     * Switch to a specific service item with animation
     * @param {number} serviceIndex - The service index to switch to (1-4)
     * @param {string} direction - The direction of navigation ('up' or 'down')
     */
    function switchToService(serviceIndex, direction = 'down') {
        // Validate service index to prevent crashes
        serviceIndex = Math.max(1, Math.min(serviceIndex, totalServices));
        
        // Clean up any lingering service displays - ensure no unexpected services are visible
        // This is crucial when rapidly navigating between services 3 and 4
        try {
            // Explicitly ensure all services except the current, previous, and exiting are hidden
            for (let i = 1; i <= totalServices; i++) {
                if (i !== serviceIndex && i !== serviceIndex - 1 && i !== currentServiceIndex) {
                    $(`.service-item-animation[data-service="${i}"]`).removeClass('active previous exiting').hide();
                }
            }
        } catch (error) {
            console.warn('Error during service cleanup:', error);
        }
        
        // First remove exiting class from all items and hide them after animation completes
        $('.service-item-animation.exiting').each(function() {
            const $this = $(this);
            setTimeout(function() {
                $this.removeClass('exiting').hide();
            }, 800); // Match animation duration
        });
        
        // Always show initial service but with different styling if not the active one
        if (serviceIndex > 1) {
            $('.service-item-initial').addClass('hide');
        } else {
            $('.service-item-initial').removeClass('hide');
        }
        
        // First remove previous class from all items
        $('.service-item-animation').removeClass('previous');
        
        // Set the previous service to have the previous class
        // but only if it's not the first service
        if (serviceIndex > 2) {
            try {
                $(`.service-item-animation[data-service="${serviceIndex - 1}"]`).addClass('previous');
            } catch (error) {
                console.warn('Could not set previous service class:', error);
            }
        }
        
        // If we're scrolling up, add exiting class to the current service
        if (direction === 'up' && currentServiceIndex > 1) {
            try {
                $(`.service-item-animation[data-service="${currentServiceIndex}"]`).addClass('exiting');
            } catch (error) {
                console.warn('Could not set exiting class:', error);
            }
        }
        
        // Hide all service animations except for the previous and exiting ones
        $('.service-item-animation').not('.previous, .exiting').removeClass('active').hide();
        
        // If not first service, show the correct animation
        if (serviceIndex > 1) {
            try {
                // Show the selected service with animation
                $(`.service-item-animation[data-service="${serviceIndex}"]`).addClass('active');
            } catch (error) {
                console.warn('Could not activate service animation:', error);
            }
        }
        
        // Update service dots
        $('.service-dot').removeClass('active');
        try {
            $(`.service-dot[data-service="${serviceIndex}"]`).addClass('active');
        } catch (error) {
            console.warn('Could not update service dots:', error);
        }
        
        // Additional cleanup to ensure proper visibility state
        if (serviceIndex === 1) {
            // When going to the first service, hide all other services completely
            $('.service-item-animation').removeClass('active previous').hide();
        }
        
        // Update current service index
        currentServiceIndex = serviceIndex;
        
        // Re-enable scroll lock if it was temporarily disabled
        if (currentActiveSection === 'services' && !isSectionScrollLocked) {
            setTimeout(() => {
                isSectionScrollLocked = true;
            }, 1000); // Delay to allow section transition to complete
        }
    }
    
    // Add click handler for service dots
    $('.service-dot').on('click', function() {
        const serviceIndex = parseInt($(this).data('service'));
        switchToService(serviceIndex);
    });
    
    // Handle touch events with native listeners
    let touchStartY = 0;
    
    window.addEventListener('touchstart', function(e) {
        if (!isStickyScrollEnabled()) return;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    window.addEventListener('touchend', function(e) {
        if (!isStickyScrollEnabled()) return;
        
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        // Ignore small swipes
        if (Math.abs(diff) < 50) return;
        
        const direction = diff > 0 ? 'down' : 'up';
        
        // If we're in services section, handle service switching for touch events
        if (currentActiveSection === 'services' && isSectionScrollLocked) {
            // Only allow service change if not in cooldown
            if (!serviceChangeCooldown) {
                handleServiceNavigation(direction);
            }
        } else {
            navigateSection(direction);
        }
    }, { passive: true });
    
    // Check window resize to handle sticky scroll enabling/disabling
    window.addEventListener('resize', function() {
        if (!isStickyScrollEnabled() && isSectionScrollLocked) {
            // Disable scrolling lock if window resized to small size
            isSectionScrollLocked = false;
            clearTimeout(lockScrollTimeout);
        }
    }, { passive: true });
    
    // Initialize current section on page load
    window.addEventListener('load', function() {
        if (!isStickyScrollEnabled()) return;
        
        // Short delay to ensure DOM is fully rendered
        setTimeout(() => {
            // Reset any scroll accumulation and cooldowns
            scrollAccumulator = 0;
            serviceChangeCooldown = false;
            
            // Force a refresh of the scroll indicator
            updateScrollIndicator();
            
            // Find the nearest section to start with
            const initialSection = getNearestSection();
            if (initialSection) {
                currentActiveSection = initialSection;
                
                // If starting in services section, make sure we lock scroll
                if (initialSection === 'services') {
                    isSectionScrollLocked = true;
                    
                    // Determine which service should be active based on scroll position
                    // For example, if we're closer to the bottom of the page, show later services
                    const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                    
                    if (scrollRatio > 0.8) {
                        // Near bottom, show last service
                        switchToService(totalServices);
                    } else if (scrollRatio > 0.6) {
                        // Show service 4
                        switchToService(4);
                    } else if (scrollRatio > 0.4) {
                        // Show service 3
                        switchToService(3);
                    } else if (scrollRatio > 0.2) {
                        // Show service 2
                        switchToService(2);
                    } else {
                        // Near top, show first service
                        switchToService(1);
                    }
                    
                    // Double-check that we're properly aligned to the services section
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                        const sectionOffset = $(servicesSection).offset().top;
                        if (Math.abs(window.scrollY - sectionOffset) > 5) {
                            // If not perfectly aligned, force alignment
                            window.scrollTo({
                                top: sectionOffset,
                                behavior: 'auto'
                            });
                        }
                    }
                } else {
                    // For other sections, ensure we're smoothly aligned
                    scrollToSection(initialSection);
                }
            }
        }, 100);
    });
    
    // Initialize Bootstrap Carousel
    if (isHomePage) {
        var headerCarousel = new bootstrap.Carousel(document.getElementById('headerCarousel'), {
            interval: 5000,
            wrap: true,
            touch: true
        });
        
        // Pause carousel on hover
        $('#headerCarousel').hover(
            function() {
                $(this).carousel('pause');
            },
            function() {
                $(this).carousel('cycle');
            }
        );
        
        // Handle custom carousel navigation
        $('.nav-number').on('click', function() {
            var slideIndex = $(this).data('slide');
            $('#headerCarousel').carousel(slideIndex);
        });
        
        // Update the active service based on carousel slide
        $('#headerCarousel').on('slide.bs.carousel', function (event) {
            var slideIndex = event.to;
            
            // Update service list active item
        
            
            // Update main heading text
            $('.heading-text').removeClass('active');
            $('.heading-text[data-slide="' + slideIndex + '"]').addClass('active');
            
            // Update custom navigation
            $('.nav-number').removeClass('active');
            $('.nav-number[data-slide="' + slideIndex + '"]').addClass('active');
            
            // Hide all lines first
            $('.nav-line').css('display', 'none');
            $('.nav-line').removeClass('active');
            $('.nav-line-fill').css('width', '0%');
            
            // If we're at position 0, 1, 2, or 3, show and activate the line after the active number
            if (slideIndex < 4) {
                // Find the active number and activate the line right after it
                var activeNumberIndex = $('.nav-number[data-slide="' + slideIndex + '"]').index('.carousel-nav-numbers > div');
                var nextLine = $('.carousel-nav-numbers > div:eq(' + (activeNumberIndex + 1) + ')');
                nextLine.css('display', 'block');
                nextLine.addClass('active');
            }
        });
        
        // Handle the line animation after slide has finished changing
        $('#headerCarousel').on('slid.bs.carousel', function (event) {
            var slideIndex = $('.carousel-item.active').index();
            
            // Animate the line fill
            if (slideIndex < 4) { // Don't animate a line after the last number
                $('.nav-line.active .nav-line-fill').css('width', '100%');
            }
        });
        
        // Set the first service and heading text as active by default
        $('.heading-text[data-slide="0"]').addClass('active');
        $('.nav-number[data-slide="0"]').addClass('active');
        
        // Hide all lines first, then show and activate only the first line
        $('.nav-line').css('display', 'none');
        var firstLine = $('.carousel-nav-numbers > div:eq(1)');
        firstLine.css('display', 'block');
        firstLine.addClass('active');
        
        // Start the first line animation
        setTimeout(function() {
            $('.nav-line.active .nav-line-fill').css('width', '100%');
        }, 100);
    }
    
    // Form validation
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        // Basic validation
        var isValid = true;
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        
        if (firstName === '') {
            isValid = false;
            $('#firstName').addClass('is-invalid');
        } else {
            $('#firstName').removeClass('is-invalid');
        }
        
        if (lastName === '') {
            isValid = false;
            $('#lastName').addClass('is-invalid');
        } else {
            $('#lastName').removeClass('is-invalid');
        }
        
        if (email === '' || !isValidEmail(email)) {
            isValid = false;
            $('#email').addClass('is-invalid');
        } else {
            $('#email').removeClass('is-invalid');
        }
        
        if (message === '') {
            isValid = false;
            $('#message').addClass('is-invalid');
        } else {
            $('#message').removeClass('is-invalid');
        }
        
        if (isValid) {
            // Here you would normally send the form to the server
            // For now, just show a success message
            $('#contactForm').hide();
            $('.form-success').fadeIn();
        }
    });
    
    // Email validation helper
    function isValidEmail(email) {
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return pattern.test(email);
    }
    
    // Animation on scroll
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        
        $(".fade-in-section").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            }
        });
    }).scroll();

    // Make first educational service active by default
    $('.educational-services .service-item:first').addClass('active');

    // Educational Services Toggle
    $('.service-toggle').on('click', function() {
        const serviceItem = $(this).closest('.service-item');
        
        // Close other open items
        $('.service-item.active').not(serviceItem).removeClass('active');
        
        // Toggle current item
        serviceItem.toggleClass('active');
    });

    // Ensure the service-menu links in the header work properly
    $('.services-menu .service-list li a').on('click', function() {
        // Allow default behavior to navigate to the service page
        return true;
    });

}); 