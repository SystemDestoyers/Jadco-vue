@extends('frontend.layouts.app')

@push('styles')
<link rel="stylesheet" href="{{ asset('css/services.css') }}">
@endpush

@section('content')
<div class="container py-5 mt-5">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="section-title mb-4">K-12 International Schools</h1>
            
            <div class="service-image mb-4">
                <img src="{{ asset('images/services/k12-schools.jpg') }}" alt="K-12 International Schools" class="img-fluid rounded">
            </div>
            
            <div class="service-content">
                <p class="lead">
                    Development and management of international standard K-12 schools with globally recognized curricula 
                    and excellent teaching staff to prepare students for success in a globalized world.
                </p>
                
                <h3 class="mt-5 mb-3">Our K-12 International Schools Services Include:</h3>
                
                <ul class="service-features">
                    <li>
                        <h5>School Establishment & Development</h5>
                        <p>Comprehensive services for establishing new international schools, from facility design to curriculum selection and staffing.</p>
                    </li>
                    
                    <li>
                        <h5>Curriculum Implementation</h5>
                        <p>Implementation of globally recognized curricula including International Baccalaureate (IB), American, British, and other international standards.</p>
                    </li>
                    
                    <li>
                        <h5>Teacher Recruitment & Professional Development</h5>
                        <p>Recruitment of qualified international educators and ongoing professional development programs to ensure teaching excellence.</p>
                    </li>
                    
                    <li>
                        <h5>School Management & Administration</h5>
                        <p>Support for school operations, including administrative systems, compliance with local regulations, and strategic planning.</p>
                    </li>
                    
                    <li>
                        <h5>Quality Assurance & Accreditation</h5>
                        <p>Guidance through international accreditation processes and implementation of quality assurance systems for continuous improvement.</p>
                    </li>
                    
                    <li>
                        <h5>Educational Technology Integration</h5>
                        <p>Implementation of cutting-edge educational technologies to enhance learning experiences and prepare students for the digital age.</p>
                    </li>
                </ul>
                
                <div class="cta-section text-center mt-5 py-4">
                    <h4>Interested in our K-12 International Schools services?</h4>
                    <p>Contact us today to discuss how we can help you develop and manage world-class international schools that prepare students for global success.</p>
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