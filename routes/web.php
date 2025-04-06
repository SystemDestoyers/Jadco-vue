<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// API Routes
Route::post('/api/contact/submit', [ContactController::class, 'submit'])->name('contact.submit');

// All web routes should be handled by the SPA
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
