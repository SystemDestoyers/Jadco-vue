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

    <!-- Educational Services Section -->
    <section id="educational-section" class="educational-services py-5 section">
        <div class="container">
            <div class="row">
                <div class="educational-services mt-5">
                    <h3 class="edu-services-title">Educational Services</h3>

                    <div class="service-item mt-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="service-num">01</h3>
                            </div>
                            <div class="col-md-7">
                                <div class="service-content-wrapper">
                                    <h4 class="service-name">Scholarship Programs Management</h4>
                                    <p class="service-desc">
                                        With more than 20 years in managing scholarship programs
                                        with several Saudi governmental sponsors, we are experts of providing full and
                                        comprehensive plans and services to meet the sponsor's vision and targets.
                                    </p>
                                    <router-link to="/services/scholarship-programs-management"
                                        class="learn-more">LEARN MORE <i class="fas fa-arrow-right-long"></i></router-link>
                                </div>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="service-toggle">
                                    <i class="fas fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-item mt-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="service-num">02</h3>
                            </div>
                            <div class="col-md-7">
                                <div class="service-content-wrapper">
                                    <h4 class="service-name">STEM Education and Innovation Centers</h4>
                                    <p class="service-desc">
                                        Providing innovative STEM education approaches and establishing
                                        cutting-edge innovation centers to foster creativity and practical skills.
                                    </p>
                                    <router-link to="/services/stem-education" class="learn-more">LEARN MORE <i
                                            class="fas fa-arrow-right-long"></i></router-link>
                                </div>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="service-toggle">
                                    <i class="fas fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-item mt-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="service-num">03</h3>
                            </div>
                            <div class="col-md-7">
                                <div class="service-content-wrapper">
                                    <h4 class="service-name">K-12 International Schools</h4>
                                    <p class="service-desc">
                                        Development and management of international standard K-12 schools
                                        with globally recognized curricula and excellent teaching staff.
                                    </p>
                                    <router-link to="/services/k12-international-schools" class="learn-more">Learn
                                        More <i class="fas fa-arrow-right-long"></i></router-link>
                                </div>
                            </div>
                            <div class="col-md-2 text-end">
                                <div class="service-toggle">
                                    <i class="fas fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            
            // Update nav items only, let services-section.js handle the display
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
        },
        initializeEducationalServices() {
            // Make first educational service active by default and set its icon to X
            const firstServiceItem = document.querySelector('.educational-services .service-item:first-child');
            if (firstServiceItem) {
                firstServiceItem.classList.add('active');
                const toggleIcon = firstServiceItem.querySelector('.service-toggle i');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-arrow-right-long');
                    toggleIcon.classList.add('fa-solid', 'fa-xmark');
                }
            }

            // Set up click handler for service names
            const serviceNames = document.querySelectorAll('.service-name');
            serviceNames.forEach(name => {
                name.addEventListener('click', () => {
                    const serviceItem = name.closest('.service-item');
                    const toggleButton = serviceItem.querySelector('.service-toggle');
                    if (toggleButton) {
                        toggleButton.click(); // Trigger the toggle button click
                    }
                });
            });

            // Set up click handler for service toggles
            const serviceToggles = document.querySelectorAll('.service-toggle');
            serviceToggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const serviceItem = toggle.closest('.service-item');
                    const toggleIcon = toggle.querySelector('i');
                    
                    // Close other open items
                    document.querySelectorAll('.service-item.active').forEach(activeItem => {
                        if (activeItem !== serviceItem) {
                            activeItem.classList.remove('active');
                            const activeIcon = activeItem.querySelector('.service-toggle i.fa-xmark');
                            if (activeIcon) {
                                activeIcon.classList.remove('fa-xmark');
                                activeIcon.classList.add('fa-arrow-right-long');
                            }
                        }
                    });
                    
                    // Toggle current item
                    serviceItem.classList.toggle('active');
                    
                    // Toggle icon between arrow and X
                    if (serviceItem.classList.contains('active')) {
                        toggleIcon.classList.remove('fa-arrow-right-long');
                        toggleIcon.classList.add('fa-solid', 'fa-xmark');
                    } else {
                        toggleIcon.classList.remove('fa-xmark');
                        toggleIcon.classList.add('fa-arrow-right-long');
                    }
                });
            });
        }
    },
    mounted() {
        // Initialize educational services section after Vue has rendered the component
        this.$nextTick(() => {
            this.initializeEducationalServices();
        });
    }
};
</script> 