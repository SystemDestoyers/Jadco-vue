document.addEventListener('DOMContentLoaded', function() {
    // Create scroll indicator if it doesn't exist
    let scrollIndicator = document.querySelector('.scroll-indicator');
    let scrollContainer = document.querySelector('.scroll-indicator-container');
    
    if (!scrollContainer) {
        scrollContainer = document.createElement('div');
        scrollContainer.className = 'scroll-indicator-container';
        scrollContainer.innerHTML = `
            <div class="scroll-indicator"></div>
        `;
        document.body.appendChild(scrollContainer);
    }

    if (!scrollIndicator) {
        scrollIndicator = document.querySelector('.scroll-indicator');
    }

    // Update scroll indicator position
    function updateScrollIndicator() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        if (scrollIndicator) {
            scrollIndicator.style.height = `${scrolled}%`;
        }

        // Hide in header section
        if (window.scrollY < 100) {
            document.body.classList.add('at-top');
        } else {
            document.body.classList.remove('at-top');
        }
    }

    // Initialize and update on scroll
    updateScrollIndicator();
    window.addEventListener('scroll', updateScrollIndicator);

    // Click to scroll to top
    if (scrollContainer) {
        scrollContainer.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    /**
     * =============================================================
     * SERVICE PAGE SECTION ANIMATIONS
     * =============================================================
     * This section handles animations for service page sections:
     * 1. Elements fade and slide in sequentially for each service section
     * 2. Consistent with header and other section animations
     */
    (function() {
        // Select all service sections
        const serviceSections = document.querySelectorAll('.service-hero-section');
        if (!serviceSections.length) return;
        
        // Process each service section
        serviceSections.forEach((section, sectionIndex) => {
            // Select elements to animate in each section
            const serviceNum = section.querySelector('.service-num');
            const serviceName = section.querySelector('.service-name');
            const serviceDesc = section.querySelector('.service-desc');
            const serviceImage = section.querySelector('.service-hero-image');
            const serviceList = section.querySelector('.service-list');
            const serviceListItems = section.querySelectorAll('.service-list li');
            
            // Prepare elements for animation
            function prepareElementsForAnimation() {
                // Service number (like the number 01, 02, etc.)
                if (serviceNum) {
                    serviceNum.style.opacity = '0';
                    serviceNum.style.transform = 'translateX(-40px)';
                    serviceNum.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }
                
                // Service name (title)
                if (serviceName) {
                    serviceName.style.opacity = '0';
                    serviceName.style.transform = 'translateX(40px)';
                    serviceName.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }
                
                // Service description
                if (serviceDesc) {
                    serviceDesc.style.opacity = '0';
                    serviceDesc.style.transform = 'translateY(30px)';
                    serviceDesc.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }
                
                // Service image
                if (serviceImage) {
                    serviceImage.style.opacity = '0';
                    serviceImage.style.transform = 'translateY(40px)';
                    serviceImage.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                }
                
                // Service list container
                if (serviceList) {
                    serviceList.style.opacity = '0';
                    serviceList.style.transform = 'translateX(40px)';
                    serviceList.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }
                
                // Individual list items (only prepare, will animate separately)
                if (serviceListItems && serviceListItems.length) {
                    serviceListItems.forEach(item => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateX(20px)';
                        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                    });
                }
            }
            
            // Animate section elements sequentially
            function animateSection() {
                const rect = section.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
                
                if (isInViewport) {
                    // Stagger animation delays based on section index
                    // First section gets smaller delays, subsequent sections longer delays
                    const baseDelay = sectionIndex === 0 ? 100 : 200;
                    
                    // Step 1: Animate service number first
                    if (serviceNum) {
                        setTimeout(() => {
                            serviceNum.style.opacity = '1';
                            serviceNum.style.transform = 'translateX(0)';
                        }, baseDelay);
                    }
                    
                    // Step 2: Animate service name after number
                    if (serviceName) {
                        setTimeout(() => {
                            serviceName.style.opacity = '1';
                            serviceName.style.transform = 'translateX(0)';
                        }, baseDelay + 200);
                    }
                    
                    // Step 3: Animate service description
                    if (serviceDesc) {
                        setTimeout(() => {
                            serviceDesc.style.opacity = '1';
                            serviceDesc.style.transform = 'translateY(0)';
                        }, baseDelay + 400);
                    }
                    
                    // Step 4: Animate service image
                    if (serviceImage) {
                        setTimeout(() => {
                            serviceImage.style.opacity = '1';
                            serviceImage.style.transform = 'translateY(0)';
                        }, baseDelay + 600);
                    }
                    
                    // Step 5: Animate service list container
                    if (serviceList) {
                        setTimeout(() => {
                            serviceList.style.opacity = '1';
                            serviceList.style.transform = 'translateX(0)';
                        }, baseDelay + 700);
                    }
                    
                    // Step 6: Animate list items sequentially
                    if (serviceListItems && serviceListItems.length) {
                        serviceListItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            }, baseDelay + 800 + (index * 80)); // Staggered delays for each list item
                        });
                    }
                }
            }
            
            // Initialize animations for this section
            prepareElementsForAnimation();
            
            // Check if section is in viewport on load
            animateSection();
            
            // Add to the global scroll event listeners
            window.addEventListener('scroll', animateSection, { passive: true });
            
            // Update on resize
            window.addEventListener('resize', animateSection, { passive: true });
        });
    })();
});
