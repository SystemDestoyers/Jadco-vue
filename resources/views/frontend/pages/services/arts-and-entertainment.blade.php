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
                    <h1 class="service-title">Arts and Entertainment</h1>
                    <p class="service-description">
                        Bringing the fine Arts, culture and entertainment from the globe to enrich the
                        local diversity and enhance the picture of the Arabian culture overseas by
                        adding value to the industry.
                    </p>
                </div>
            </div>
            <!-- Service Details -->
            <div class="service-details py-5">
                <div class="row">
                    <div class="col-md-6">
                        <img src="{{ asset('images/06_Arts/01.jpg') }}" alt="Arts and Entertainment" class="img-fluid">
                    </div>
                    <div class="right-text col-md-6">
                        <h2>
                            From Training and education in
                            Arts & Entertainment subjects,
                            to customizing projects and live
                            events in association with our
                            local and international partners.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')
    <script src="{{ asset('js/services.js') }}?v={{ rand() }}"></script>
@endpush
