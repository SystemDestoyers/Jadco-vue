<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// API Routes
Route::post('/api/contact/submit', [ContactController::class, 'submit'])->name('contact.submit');

// Home route uses the Blade template
Route::get('/', function () {
    return view('frontend.pages.home');
})->name('home');

// All other web routes should be handled by the SPA
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');
