<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display the home page.
     */
    public function home()
    {
        return view('frontend.pages.home');
    }

    /**
     * Display the about page.
     */
    public function about()
    {
        return view('frontend.pages.about');
    }
} 