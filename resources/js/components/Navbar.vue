<template>
    <!-- Header Section -->
    <header class="header" id="home">
        <div class="container">
            <!-- Navigation Bar -->
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <!-- Logo Container (Left-aligned) -->
                    <router-link class="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="JADCO Logo" class="logo">
                    </router-link>
                    
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
                                <router-link class="nav-link home" 
                                             :class="{ 'active': $route.name === 'home' }" 
                                             to="/" 
                                             id="home-nav-link">
                                    HOME
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link about" 
                                             :class="{ 'active': $route.name === 'about' }" 
                                             to="/about">
                                    ABOUT
                                </router-link>
                            </li>
                        </ul>
                        <router-link to="/#contact" class="btn btn-talk" @click="handleLetsTalkClick">Let's Talk</router-link>
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
    methods: {
        handleLetsTalkClick(e) {
            // Recreate the flash effect from static.js
            if (typeof createFlashEffect === 'function') {
                e.preventDefault();
                createFlashEffect();
                
                // Scroll to contact section after flash
                setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 1200); // Adjust timing based on flash effect duration
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