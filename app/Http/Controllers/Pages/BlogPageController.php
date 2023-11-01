<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class BlogPageController extends Controller
{
    /**
     * Rendering blog page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Blog', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'isAdmin' => Auth::check() && Auth::user()['role'] === 1
        ]);
    }
}
