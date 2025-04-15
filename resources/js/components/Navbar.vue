<template>
    <!-- Header Section -->
    <header class="header" id="home">
        <div class="container">
            <!-- Navigation Bar -->
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!-- Logo Container (Left-aligned) -->
                    <a class="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="JADCO Logo" class="logo">
                    </a>
                    
                    <!-- Mobile Toggle Button (Right-aligned) -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" aria-controls="navbarNav" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <!-- Navigation Items -->
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav me-3">
                            <li class="nav-item">
                                <a class="nav-link home" 
                                   :class="{ 'active': isHome }" 
                                   href="/" 
                                   id="home-nav-link">
                                    HOME
                                </a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link about" 
                                             :class="{ 'active': isAboutActive }" 
                                             to="/about">
                                    ABOUT
                                </router-link>
                            </li>
                        </ul>
                        <a href="/#contact" class="btn btn-talk" @click.prevent="handleLetsTalkClick">Let's Talk</a>
                    </div>
                </div>
            </nav>
            
            <Header />
        </div>
    </header>
</template>

<script>
import Header from './Header.vue';

export default {
    components: {
        Header
    },
    computed: {
        isHome() {
            return window.location.pathname === '/';
        },
        isAboutActive() {
            return this.$route.name === 'about' || window.location.pathname === '/about';
        }
    },
    methods: {
        handleLetsTalkClick(e) {
            e.preventDefault();
            
            // Recreate the flash effect from static.js if available
            if (typeof createFlashEffect === 'function') {
                createFlashEffect();
                
                // Scroll to contact section after flash with a delay
                setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1200); // Adjust timing based on flash effect duration
            } else {
                // Directly scroll to contact section without flash effect
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    },
    mounted() {
        // Import static.js to get the createFlashEffect function
        const script = document.createElement('script');
        script.src = '/js/partial/static.js';
        document.head.appendChild(script);
    }
};
</script>

<style scoped>
.nav-link.active {
    color: var(--primary-color) !important;
    font-weight: 500;
}
</style> 