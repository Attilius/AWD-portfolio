<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Rendering contact page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Contact', [
            'canLogin' => Route::has('login'),
            'isAdmin' => Auth::check() && Auth::user()['role'] === 1
        ]);
    }
}
