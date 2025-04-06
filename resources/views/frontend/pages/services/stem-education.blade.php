@extends('frontend.layouts.app')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/services.css') }}">
@endpush

@section('content')
<div class="container py-5 mt-5">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="section-title mb-4">STEM Education and Innovation Centers</h1>
            
            <div class="service-image mb-4">
                <img src="{{ asset('images/services/stem-education.jpg') }}" alt="STEM Education" class="img-fluid rounded">
            </div>
            
            <div class="service-content">
                <p class="lead">
                    Providing innovative STEM education approaches and establishing cutting-edge innovation centers 
                    to foster creativity and practical skills aligned with the needs of the future workforce.
                </p>
                
                <h3 class="mt-5 mb-3">Our STEM Education Services Include:</h3>
                
                <ul class="service-features">
                    <li>
                        <h5>STEM Curriculum Development</h5>
                        <p>We design and implement comprehensive STEM curricula that integrate science, technology, engineering, and mathematics in engaging, hands-on learning experiences.</p>
                    </li>
                    
                    <li>
                        <h5>Innovation Center Establishment</h5>
                        <p>Design, setup, and operation of innovation centers equipped with cutting-edge technology and resources to foster creativity and problem-solving skills.</p>
                    </li>
                    
                    <li>
                        <h5>Teacher Training & Professional Development</h5>
                        <p>Comprehensive training programs for educators to effectively implement STEM teaching methodologies and utilize innovation center resources.</p>
                    </li>
                    
                    <li>
                        <h5>Project-Based Learning Programs</h5>
                        <p>Development of project-based learning initiatives that tackle real-world challenges and develop critical thinking and collaboration skills.</p>
                    </li>
                    
                    <li>
                        <h5>Industry Partnerships</h5>
                        <p>Facilitation of partnerships between educational institutions and industry to provide students with authentic learning experiences and career pathways.</p>
                    </li>
                    
                    <li>
                        <h5>STEM Competitions & Events</h5>
                        <p>Organization of competitions, hackathons, and exhibitions to showcase student innovation and foster a community of STEM enthusiasts.</p>
                    </li>
                </ul>
                
                <div class="cta-section text-center mt-5 py-4">
                    <h4>Interested in our STEM Education services?</h4>
                    <p>Contact us today to discuss how we can help you develop innovative STEM education programs and establish cutting-edge innovation centers.</p>
                    <a href="{{ url('/#contact') }}" class="btn btn-primary mt-3">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/services.js') }}?v={{ rand() }}"></script>
@endpush 