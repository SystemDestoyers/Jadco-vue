<template>
    <div>
        <!-- Debug Message - Remove this later -->
        <div v-if="showDebug" style="background-color: #f8d7da; color: #721c24; padding: 10px; text-align: center;">
            Vue App Loaded Successfully! <button @click="showDebug = false" style="background: #721c24; color: white; border: none; padding: 2px 8px; margin-left: 10px; cursor: pointer;">Close</button>
        </div>

        <!-- Preloader -->
        <div class="preloader" v-show="isLoading">
            <img :src="'/images/logo.png'" alt="JADCO Logo" class="preloader-logo">
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator-container">
            <div class="scroll-indicator" :style="{ width: scrollPercent + '%' }"></div>
        </div>

        <!-- Header & Navbar -->
        <Navbar />

        <!-- Content Area -->
        <router-view></router-view>

        <!-- Contact Section -->
        <Contact />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';

export default {
    components: {
        Navbar,
        Contact
    },
    data() {
        return {
            isLoading: true,
            scrollPercent: 0,
            showDebug: true,
            scriptsLoaded: false,
            servicesLoaded: false
        };
    },
    mounted() {
        console.log('Vue App mounted successfully!');
        
        // Hide preloader after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        });

        // If page already loaded, hide preloader
        if (document.readyState === 'complete') {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }

        // Scroll indicator
        window.addEventListener('scroll', this.updateScrollIndicator);

        // Load all required scripts
        this.loadAllScripts();
        
        // Check current route immediately
        this.$nextTick(() => {
            console.log('Current route:', this.$route.name);
            this.handleServicesAssets(this.$route.name);
        });
        
        // Watch for route changes to load services scripts when needed
        this.$watch(
            () => this.$route.name,
            (newRouteName) => {
                console.log('Route changed to:', newRouteName);
                this.handleServicesAssets(newRouteName);
            }
        );
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateScrollIndicator);
    },
    methods: {
        updateScrollIndicator() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollPercent = (winScroll / height) * 100;
        },
        handleServicesAssets(routeName) {
            // Only load services assets if not on home page
            if (routeName !== 'home') {
                this.loadServicesAssets();
            } else {
                // If we're on home page, make sure we don't load services assets
                console.log('On home page, services assets not needed');
                
                // If services assets were loaded, remove them and restore any modified elements
                if (this.servicesLoaded) {
                    // Remove the CSS and JS files
                    const servicesCSS = document.querySelector('link[href="/css/services.css"]');
                    const servicesJS = document.querySelector('script[src="/js/services.js"]');
                    
                    if (servicesCSS) {
                        servicesCSS.remove();
                    }
                    
                    if (servicesJS) {
                        servicesJS.remove();
                    }
                    
                    // Cleanup any modifications made by services.js
                    // Reset visibility of any elements that might have been hidden
                    document.querySelectorAll('.service-hero-section, .service-list, .service-list li').forEach(el => {
                        el.style.opacity = '';
                        el.style.transform = '';
                        el.style.visibility = '';
                        el.style.display = '';
                    });
                    
                    this.servicesLoaded = false;
                }
            }
        },
        loadServicesAssets() {
            if (this.servicesLoaded) return;
            
            console.log('Loading services assets...');
            
            // Load services CSS
            const servicesCSS = document.createElement('link');
            servicesCSS.rel = 'stylesheet';
            servicesCSS.href = '/css/services.css';
            document.head.appendChild(servicesCSS);
            
            // First mark as loaded to prevent multiple loads
            this.servicesLoaded = true;
            
            // Load services JS with simpler initialization
            const servicesJS = document.createElement('script');
            servicesJS.src = '/js/services.js';
            servicesJS.async = false;
            servicesJS.onload = () => {
                console.log('Services JS loaded, initializing...');
                
                // Direct initialization of service menus and sections
                const serviceMenus = document.querySelectorAll('.service-list, .services-menu');
                if (serviceMenus.length) {
                    serviceMenus.forEach(menu => {
                        menu.style.opacity = '1';
                        menu.style.transform = 'none';
                        menu.style.visibility = 'visible';
                        menu.style.display = 'block';
                    });
                    
                    // Make sure list items are visible too
                    document.querySelectorAll('.service-list li').forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'none';
                    });
                    
                    console.log('Service menus initialized:', serviceMenus.length);
                } else {
                    console.log('No service menus found to initialize');
                }
                
                // Trigger DOMContentLoaded for other scripts
                const event = new Event('DOMContentLoaded');
                document.dispatchEvent(event);
            };
            document.head.appendChild(servicesJS);
        },
        loadAllScripts() {
            if (this.scriptsLoaded) return;
            
            // Loading in the correct order with proper dependencies
            const scripts = [
                { src: 'https://code.jquery.com/jquery-3.6.0.min.js', key: 'jquery' },
                { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js', key: 'bootstrap', dependencies: ['jquery'] },
                { src: '/js/partial/static.js', key: 'static', dependencies: ['jquery'] },
                // { src: '/js/services.js', key: 'services-extra', dependencies: ['jquery', 'services'] },
                { src: '/js/partial/services-section.js', key: 'services', dependencies: ['jquery'] },
                { src: '/js/partial/header.js', key: 'header', dependencies: ['jquery'] },
                { src: '/js/all.js', key: 'all', dependencies: ['jquery'] }
            ];
            
            // Track loaded scripts
            const loadedScripts = {};
            
            // Function to load a script
            const loadScript = (script) => {
                // Check if dependencies are loaded
                if (script.dependencies) {
                    for (const dep of script.dependencies) {
                        if (!loadedScripts[dep]) {
                            // Try again later when dependencies are loaded
                            setTimeout(() => loadScript(script), 100);
                            return;
                        }
                    }
                }
                
                // Create and append script
                const scriptElement = document.createElement('script');
                scriptElement.src = script.src;
                scriptElement.async = false; // Maintain execution order
                
                // Track when loaded
                scriptElement.onload = () => {
                    console.log(`Script ${script.key} loaded`);
                    loadedScripts[script.key] = true;
                    
                    // Initialize any script-specific functions here if needed
                    this.initializeScript(script.key);
                };
                
                document.head.appendChild(scriptElement);
            };
            
            // Load all scripts
            scripts.forEach(loadScript);
            
            this.scriptsLoaded = true;
        },
        initializeScript(scriptKey) {
            // Handle script-specific initializations
            if (scriptKey === 'services' || scriptKey === 'all') {
                // Ensure DOM is ready before triggering
                setTimeout(() => {
                    if (typeof jQuery !== 'undefined') {
                        // Manually trigger document ready for jQuery scripts
                        jQuery(document).trigger('ready');
                    }
                }, 500);
            }
        }
    }
};
</script> 