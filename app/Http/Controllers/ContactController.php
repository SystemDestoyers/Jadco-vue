<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string',
        ]);
        
        // Process the submission (e.g., send email, save to database)
        // This is just a placeholder - you would add your actual processing logic here
        
        // For now, just return with success message
        return redirect()->back()->with('success', 'Thank you for your message! We will get back to you soon.');
    }
} 