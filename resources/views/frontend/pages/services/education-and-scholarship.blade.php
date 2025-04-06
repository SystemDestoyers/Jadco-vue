@extends('frontend.layouts.app')

@push('styles')
    <link rel="stylesheet" href="{{ asset('css/services.css') }}">
@endpush

@section('content')
    <div class="sub-page">
        <!-- Service Detail Hero Section -->
        <section class="service-hero-section py-10">
            <div class="container">
                <div class="row">
                    <div class="educational-services sub-section">
                        <div class="service-item mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <h3 class="service-num">01</h3>
                                </div>
                                <div class="col-md-7 head-content">
                                    <div class="service-content-wrapper">
                                        <h4 class="service-title">Scholarship Programs Management</h4>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <p class="service-desc">
                                        With more than 20 years in managing scholarship programs
                                        with several Saudi governmental sponsors, we are experts of providing full and
                                        comprehensive plans and services to meet the sponsor's vision and targets.
                                        Services include but not limited to:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src="{{ asset('images/02_Education/01.jpg') }}" alt="Education"
                            class="img-fluid service-hero-image">
                    </div>
                    <div class="col-lg-6">
                        <ul class="service-list">
                            <li>Candidate Selection Criteria</li>
                            <li>Universities Selection Criteria</li>
                            <li>Program bylaws and regulations</li>
                            <li>Student Journey plan</li>
                            <li>Counseling & students development plans</li>
                            <li>Pre-Departure preparatory programs</li>
                            <li>Enroll students into international universities</li>
                            <li>Workshops, awareness sessions and summits</li>
                            <li>Pre travel and post travel logistics</li>
                            <li>Overseas continual support</li>
                            <li>And more</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- STEM Education Section -->
        <section class="service-hero-section py-10">
            <div class="container">
                <div class="row">
                    <div class="educational-services sub-section">
                        <div class="service-item mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <h3 class="service-num">02</h3>
                                </div>
                                <div class="col-md-7 head-content">
                                    <div class="service-content-wrapper">
                                        <h4 class="service-title">STEM Education and Innovation Centers</h4>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <p class="service-desc">
                                        Education is changing, STEM (Since, Technology, Engineering
                                        and Math), is the pathway to reshaping the ecosystem to rethinking
                                        and broadly reimagining.
                                        STEM is the future workforce skills, steps toward a new generation of innovators,
                                        creative leaders for now and the future. This approach of learning help to unlock
                                        the inherent potential of all students and equipping them with skills for
                                        the challenging work environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-6">
                        <h5 class="mb-3">Our services including:</h5>
                        <ul class="service-list" style="margin-top: 1rem;">
                            <li>STEM Teacher Training.</li>
                            <li>STEM Students Training.</li>
                            <li>STEM Labs.</li>
                            <li>Summer STEM Camps.</li>
                            <li>Students Workshops.</li>
                            <li>Research and development.</li>
                            <li>Innovation Parks.</li>
                            <li>K-12 after school programs (Coding, Robotics, Drones, AI, Cybersecurity, AR & VR, 3D
                                Printing & more).</li>
                            <li>Establishing new STEM Schools or Shift to STEM.</li>
                            <li>STEM Innovation and Technology Centers:
                                <p class="ms-3 mt-2">Together with our STEM partners, we design, build and provide full
                                    turnkey solutions, training, programs and activities that support the
                                    STEM & Technology parks and Centers for students, teachers
                                    and community.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <img src="{{ asset('images/03_EDU.jpg') }}" alt="STEM Education"
                            class="img-fluid service-hero-image">
                    </div>
                </div>
            </div>
        </section>

        <!-- K-12 International Schools Section -->
        <section class="service-hero-section py-10">
            <div class="container">
                <div class="row">
                    <div class="educational-services sub-section">
                        <div class="service-item mt-4">
                            <div class="row">
                                <div class="col-md-3">
                                    <h3 class="service-num">03</h3>
                                </div>
                                <div class="col-md-7 head-content">
                                    <div class="service-content-wrapper">
                                        <h4 class="service-title">K-12 International Schools</h4>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <p class="service-desc">
                                        JADCO in partnership with the 1st international School
                                        Services Worldwide with more than 60 years of experience with track records,
                                        is supporting the global education community, promotes innovative best
                                        practice for global education through a long list of services including
                                        but not limited to:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-6">
                        <img src="{{ asset('images/04_EDU.jpg') }}" alt="K-12 International Schools"
                            class="img-fluid service-hero-image">
                    </div>
                    <div class="col-lg-6">
                        <ul class="service-list">
                            <li>School Operation and Management.</li>
                            <li>Teacher Recruitment.</li>
                            <li>Leadership Search.</li>
                            <li>Professional Development.</li>
                            <li>School Supply Services.</li>
                            <li>Accounting and Finance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Details -->
    </div>
@endsection

@push('scripts')
    <script src="{{ asset('js/services.js') }}?v={{ rand() }}"></script>
@endpush
