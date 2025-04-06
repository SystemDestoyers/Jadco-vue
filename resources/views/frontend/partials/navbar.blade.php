@php
use Illuminate\Support\Facades\Route;
@endphp
<!-- Header Section -->
<header class="header" id="home">
    <div class="container">
        <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <!-- Logo Container (Left-aligned) -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ asset('images/logo.png') }}" alt="JADCO Logo" class="logo">
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
                            <a class="nav-link home {{ (Route::currentRouteName() == 'home' || request()->is('/')) ? 'active' : '' }}" href="{{ url('/') }}" id="home-nav-link">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link about {{ Route::currentRouteName() == 'about' ? 'active' : '' }}" href="{{ url('/about') }}">ABOUT</a>
                        </li>
                    </ul>
                    <a href="{{ url('/#contact') }}" class="btn btn-talk">Let's Talk</a>
                </div>
            </div>
        </nav>
        
        @include('frontend.partials.header')
    </div>
</header> 