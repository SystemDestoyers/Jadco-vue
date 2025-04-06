@extends('frontend.layouts.app')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/services.css') }}">
@endpush

@section('content')
    <!-- Service Detail Hero Section -->
    <section class="ai-pages service-hero-section py-10">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="service-title">eGaming and eSport</h1>
                    <p class="service-description">
                        JADCO and international partners in gaming and eSport, USA highly ranked
                        universities in gaming and simulation development and integrated e-Arts
                        programs and a Consortium firm supported by the U.S department of Commerce
                        (International Trade Administration), are together forming a consortium to
                        propose a broad-based support package and plans for e-gaming and eSport to
                        help and greatly accelerate the Kingdom's positioning as a leader in this industry
                        worldwide by leveraging international relevant partners, SMEs, and other
                        resources to support developing the sector's entire value chain and achieve the
                        objectives of the Saudi Arabia's newly gaming, eSport and AI strategy.
                    </p>
                </div>
            </div>
            <!-- Service Details -->
            <div class="service-details py-5">
                <div class="row">
                    <div class="col-md-6">
                        <img src="{{ asset('images/05_eGame/01.jpg') }}" alt="eGaming and eSport" class="img-fluid">
                    </div>
                    <div class="right-text col-md-6">
                        <h2>What we do:</h2>
                        <ul class="service-list">
                            <li>Industry Analysis</li>
                            <li>Policy and Regulatory Infrastructure</li>
                            <li>Economic Impact</li>
                            <li>Infrastructure and Facilities planning</li>
                            <li>Education and Talent Development Strategy</li>
                            <li>AI Engagement in e-gaming and esport</li>
                            <li>Community engagement and outreach</li>
                            <li>Event Management and Marketing Support</li>
                            <li>Evaluation and Monitoring Framework</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
<script src="{{ asset('js/services.js') }}?v={{ rand() }}"></script>
@endpush
