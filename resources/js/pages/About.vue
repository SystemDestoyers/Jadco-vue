<template>
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
</template>

<script>
export default {
    mounted() {
        // Load services.js if needed
        const script = document.createElement('script');
        script.src = '/js/services.js';
        document.head.appendChild(script);
    }
};
</script> 