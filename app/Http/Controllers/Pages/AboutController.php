<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Rendering about page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('About', [
            'canLogin' => Route::has('login'),
            'isAdmin' => Auth::check() && Auth::user()['role'] === 1
        ]);
    }
}
