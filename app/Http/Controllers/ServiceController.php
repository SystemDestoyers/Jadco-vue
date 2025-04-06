<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display the Education and Scholarship service page.
     */
    public function educationAndScholarship()
    {
        return view('frontend.pages.services.education-and-scholarship');
    }

    /**
     * Display the Training and Professional Development service page.
     */
    public function trainingAndProfessionalDevelopment()
    {
        return view('frontend.pages.services.training-and-professional-development');
    }

    /**
     * Display the AI and Advanced Technologies service page.
     */
    public function aiAndAdvancedTechnologies()
    {
        return view('frontend.pages.services.ai-and-advanced-technologies');
    }

    /**
     * Display the E-Gaming and Esport service page.
     */
    public function egamingAndEsport()
    {
        return view('frontend.pages.services.egaming-and-esport');
    }

    /**
     * Display the Arts and Entertainment service page.
     */
    public function artsAndEntertainment()
    {
        return view('frontend.pages.services.arts-and-entertainment');
    }

    /**
     * Display the Scholarship Programs Management service page.
     */
    public function scholarshipProgramsManagement()
    {
        return view('frontend.pages.services.scholarship-programs-management');
    }

    /**
     * Display the STEM Education service page.
     */
    public function stemEducation()
    {
        return view('frontend.pages.services.stem-education');
    }

    /**
     * Display the K-12 International Schools service page.
     */
    public function k12InternationalSchools()
    {
        return view('frontend.pages.services.k12-international-schools');
    }
} 