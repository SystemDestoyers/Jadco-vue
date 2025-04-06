<template>
    <!-- Debug indicator -->
    <div style="background-color: #d4edda; color: #155724; padding: 5px; text-align: center; margin-bottom: 5px;">
        Home component loaded!
    </div>
    
    <!-- About Section -->
    <section id="about" class="about-section py-5 section">
        <div class="container">
            <div class="about-heading">
                <h2 class="section-title">ABOUT </h2>
                <img src="/images/jadoo-logo 2.png" alt="JADCO Logo" class="about-logo">
            </div>
            <div class="about-text-container">
                <p class="about-text">
                    After more than 20 years of experience in the Saudi Arabia's
                    Human Capital Development market, JAD Consulting (JADCO) was
                    established to continue supporting the industry with a new inspired vision
                    by the great Saudi Vision 2030.
                </p>
            </div>

            <div class="row">
                <div class="col-lg-6 order-lg-1 order-2 about-main-description">
                    <p class="about-description">
                        JADCO and its highly ranked international partners of Companies,
                        Universities and SMEs are forming together an exclusive and
                        innovative consortium to serve and be part of the revolution and
                        development and support the transformation for the next levels.
                    </p>
                    <p class="about-description mt-4">
                        JADCO in collaboration with the best partners in the globe,
                        customize and Tailor projects to bridge the gap and providing the
                        latest technologies to ensure the max level of quality of deliverables,
                        support local content and transform knowledge to meet the
                        objectives of our clients.
                    </p>
                </div>
                <div class="col-lg-6 order-lg-2 order-1 about-image-wrapper">
                    <div class="about-image-container">
                        <div class="about-image-main">
                            <img src="/images/About_01.jpg" alt="Graduate student" class="img-fluid">
                        </div>
                        <div class="about-image-secondary">
                            <img src="/images/About_02.jpg" alt="Library and books" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section py-5 section">
        <div class="container">
            <!-- Services Layer Container -->
            <div class="services-layer-container">

                <!-- First Service -->
                <div class="service-stack-item" data-service="1">
                    <div class="service-item-wrapper">
                        <div class="container-fluid">
                            <div class="row align-items-center full-screen md-h-auto">
                                <div class="col-lg-6">
                                    <div class="service-image">
                                        <img src="/images/Home_Serv_01.jpg" alt="Classroom setting"
                                            class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="service-content">
                                        <div class="title">
                                            <h2 class="section-title">SERVICES</h2>
                                            <h3 class="service-number">01</h3>
                                        </div>

                                        <div class="main-content">
                                            <h3 class="service-title">Education and Training</h3>
                                            <p class="service-description">
                                                With more than 20 years in managing scholarship
                                                programs with several Saudi governmental
                                                sponsors, we are experts of providing full and
                                                comprehensive plans and services to meet the
                                                sponsor's vision and targets.
                                            </p>
                                            <div class="service-buttons">
                                                <router-link to="/services/education-and-scholarship"
                                                    class="btn btn-service btn-education">Education</router-link>
                                                <router-link to="/services/training-and-professional-development"
                                                    class="btn btn-service">Training</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second Service -->
                <div class="service-stack-item" data-service="2">
                    <div class="service-item-wrapper">
                        <div class="container-fluid">
                            <div class="row align-items-center full-screen md-h-auto">
                                <div class="col-lg-6">
                                    <div class="service-image">
                                        <img src="/images/Home_Serv_02.jpg" alt="AI Technology"
                                            class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="service-content">
                                        <div class="title">
                                            <h2 class="section-title">SERVICES</h2>
                                            <h3 class="service-number">02</h3>
                                        </div>

                                        <div class="main-content">
                                            <h3 class="service-title">AI and Advanced Technologies</h3>
                                            <p class="service-description">
                                                AI represents a transformative technology with
                                                the potential to revolutionize organizations
                                                services and operations.
                                                By leveraging AI, organizations can enhance
                                                efficiency, improve decision-making and deliver
                                                superior to public.
                                            </p>
                                            <div class="service-buttons">
                                                <router-link to="/services/ai-and-advanced-technologies"
                                                    class="learn-more">LEARN MORE <i
                                                        class="fas fa-arrow-right-long"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Third Service -->
                <div class="service-stack-item" data-service="3">
                    <div class="service-item-wrapper">
                        <div class="container-fluid">
                            <div class="row align-items-center full-screen md-h-auto">
                                <div class="col-lg-6">
                                    <div class="service-image">
                                        <img src="/images/Home_Serv_03.jpg" alt="Gaming and Esports"
                                            class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="service-content">
                                        <div class="title">
                                            <h2 class="section-title">SERVICES</h2>
                                            <h3 class="service-number">03</h3>
                                        </div>

                                        <div class="main-content">
                                            <h3 class="service-title">E-Gaming and Esports</h3>
                                            <p class="service-description">
                                                JADCO and international partners in gaming and
                                                eSport, USA highly ranked universities in gaming and
                                                simulation development and integrated e-Arts
                                                programs and a Consortium firm supported by
                                                the U.S department of ...
                                            </p>
                                            <div class="service-buttons">
                                                <router-link to="/services/egaming-and-esport" class="learn-more">Learn
                                                    More <i class="fas fa-arrow-right-long"></i></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fourth Service -->
                <div class="service-stack-item" data-service="4">
                    <div class="service-item-wrapper">
                        <div class="container-fluid">
                            <div class="row align-items-center full-screen md-h-auto">
                                <div class="col-lg-6">
                                    <div class="service-image">
                                        <img src="/images/Home_Serv_04.jpg" alt="Arts and Entertainment"
                                            class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="service-content">
                                        <div class="title">
                                            <h2 class="section-title">SERVICES</h2>
                                            <h3 class="service-number">04</h3>
                                        </div>

                                        <div class="main-content">
                                            <h3 class="service-title">Arts and Entertainment</h3>
                                            <p class="service-description">
                                                JADCO in partnership with global arts and
                                                entertainment's distinguished providers and
                                                developers is dedicated to raising awareness
                                                of the Arabian culture towards the universe.
                                            </p>
                                            <div class="service-buttons">
                                                <router-link to="/services/arts-and-entertainment" class="learn-more">
                                                    Learn More <i class="fas fa-arrow-right-long"></i>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service List Navigation -->
            <div class="service-list-navigation">
                <ul class="service-nav-dots">
                    <li class="service-nav-item" :class="{ 'active': currentService === 1 }" data-service="1" @click="setCurrentService(1)">
                        <div class="service-nav-content">
                            <span class="service-name">Education and Training</span>
                            <i class="fas fa-plus service-toggle-icon"></i>
                        </div>
                    </li>
                    <li class="service-nav-item" :class="{ 'active': currentService === 2 }" data-service="2" @click="setCurrentService(2)">
                        <div class="service-nav-content">
                            <span class="service-name">AI and Advanced Technologies</span>
                            <i class="fas fa-plus service-toggle-icon"></i>
                        </div>
                    </li>
                    <li class="service-nav-item" :class="{ 'active': currentService === 3 }" data-service="3" @click="setCurrentService(3)">
                        <div class="service-nav-content">
                            <span class="service-name">E-Gaming and Esport</span>
                            <i class="fas fa-plus service-toggle-icon"></i>
                        </div>
                    </li>
                    <li class="service-nav-item" :class="{ 'active': currentService === 4 }" data-service="4" @click="setCurrentService(4)">
                        <div class="service-nav-content">
                            <span class="service-name">Arts and Entertainment</span>
                            <i class="fas fa-plus service-toggle-icon"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentService: 1
        };
    },
    methods: {
        setCurrentService(serviceNumber) {
            this.currentService = serviceNumber;
            
            // Update service display
            const services = document.querySelectorAll('.service-stack-item');
            services.forEach(service => {
                const dataService = parseInt(service.getAttribute('data-service'));
                if (dataService === serviceNumber) {
                    service.style.opacity = 1;
                    service.style.zIndex = 10;
                } else {
                    service.style.opacity = 0;
                    service.style.zIndex = 1;
                }
            });
            
            // Update nav items
            const navItems = document.querySelectorAll('.service-nav-item');
            navItems.forEach(item => {
                const dataService = parseInt(item.getAttribute('data-service'));
                if (dataService === serviceNumber) {
                    item.classList.add('active');
                    // Change plus to X icon
                    const icon = item.querySelector('.service-toggle-icon');
                    if (icon) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-xmark');
                    }
                } else {
                    item.classList.remove('active');
                    // Change X to plus icon
                    const icon = item.querySelector('.service-toggle-icon');
                    if (icon) {
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-plus');
                    }
                }
            });
        }
    },
    mounted() {
        console.log('Home component mounted');
        
        // Initialize current service display
        this.$nextTick(() => {
            // Wait for DOM to update before initializing
            setTimeout(() => {
                this.initializeServices();
                
                // Let services-section.js also initialize
                // This ensures both our Vue code and jQuery code work together
                if (typeof jQuery !== 'undefined') {
                    console.log('jQuery available in Home component');
                    
                    // Initialize services section jQuery functionality
                    const serviceItems = jQuery('.service-stack-item');
                    const serviceNavItems = jQuery('.service-nav-item');
                    
                    // Set initial active service
                    const activeService = this.currentService;
                    
                    // Make all services visible briefly for jQuery to initialize properly
                    serviceItems.css({
                        'opacity': '1',
                        'z-index': '1'
                    });
                    
                    // Then set the current one as active
                    setTimeout(() => {
                        serviceItems.each(function() {
                            const serviceNum = parseInt(jQuery(this).attr('data-service'));
                            if (serviceNum === activeService) {
                                jQuery(this).css({
                                    'opacity': '1',
                                    'z-index': '10'
                                });
                            } else {
                                jQuery(this).css({
                                    'opacity': '0',
                                    'z-index': '1'
                                });
                            }
                        });
                    }, 100);
                    
                    // Trigger jQuery document ready manually
                    jQuery(document).ready();
                } else {
                    console.warn('jQuery not available in Home component');
                }
            }, 500);
        });
    }
};
</script> 